#!/usr/bin/env node

import { existsSync, readFileSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repo = join(dirname(fileURLToPath(import.meta.url)), "..");
const buckets = ["engineering", "productivity", "in-progress", "misc"];

function normalizedRelative(path) {
  return `./${path.slice(repo.length + 1).replaceAll("\\", "/")}`;
}

function canonicalSkillDirs() {
  return buckets.flatMap((bucket) => {
    const root = join(repo, "skills", bucket);
    return readdirSync(root, { withFileTypes: true })
      .filter((entry) => entry.isDirectory())
      .map((entry) => join(root, entry.name))
      .filter((path) => existsSync(join(path, "SKILL.md")));
  });
}

function generatedSkillDirs() {
  const root = join(repo, "plugins", "mattpocock-skills-complete", "skills");
  return readdirSync(root, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => join(root, entry.name))
    .filter((path) => existsSync(join(path, "SKILL.md")));
}

function validateSkills(
  label,
  skillDirs,
  expectedCount,
  { codex = false, requireDocs = false } = {},
) {
  if (skillDirs.length !== expectedCount) {
    throw new Error(
      `${label}: expected ${expectedCount} skills, found ${skillDirs.length}`,
    );
  }

  for (const skillDir of skillDirs) {
    const skill = readFileSync(join(skillDir, "SKILL.md"), "utf8");
    if (/^disable-model-invocation:\s*true\s*$/m.test(skill)) {
      throw new Error(`${skillDir}: Claude explicit-only invocation is forbidden`);
    }
    if (!/^description:\s*\S.+$/m.test(skill)) {
      throw new Error(`${skillDir}: model-facing description is required`);
    }
    const origin = skill.match(/^  origin:\s*(\S.+)$/m)?.[1].trim();
    if (
      origin &&
      origin !== "public-derived" &&
      origin !== "repository-original"
    ) {
      throw new Error(`${skillDir}: unsupported metadata.origin "${origin}"`);
    }
    const provenancePath = join(skillDir, "references", "provenance.md");
    if (origin && !existsSync(provenancePath)) {
      throw new Error(
        `${skillDir}: original skills require references/provenance.md`,
      );
    }
    if (origin) {
      const provenance = readFileSync(provenancePath, "utf8");
      for (const field of [
        "Origin class:",
        "Access boundary:",
        "## Excluded",
        "## Licensing boundary",
      ]) {
        if (!provenance.includes(field)) {
          throw new Error(`${provenancePath}: missing "${field}"`);
        }
      }
    }
    if (codex && /^argument-hint:\s*.+$/m.test(skill)) {
      throw new Error(`${skillDir}: Claude-only argument-hint leaked into Codex`);
    }

    const openaiYaml = join(skillDir, "agents", "openai.yaml");
    if (!existsSync(openaiYaml)) {
      throw new Error(`${skillDir}: Codex UI metadata is required`);
    }
    if (
      /^\s*allow_implicit_invocation:\s*false\s*$/m.test(
        readFileSync(openaiYaml, "utf8"),
      )
    ) {
      throw new Error(`${skillDir}: Codex explicit-only invocation is forbidden`);
    }

    if (origin && requireDocs) {
      const [, , bucket, name] = normalizedRelative(skillDir).split("/");
      if (bucket === "engineering" || bucket === "productivity") {
        const docsPath = join(repo, "docs", bucket, `${name}.md`);
        if (!existsSync(docsPath)) {
          throw new Error(`${skillDir}: original promoted skill needs usage docs`);
        }
        const docs = readFileSync(docsPath, "utf8");
        for (const marker of [
          "## When to reach for it",
          "## It's working if",
          "## Where it fits",
        ]) {
          if (!docs.includes(marker)) {
            throw new Error(`${docsPath}: missing "${marker}"`);
          }
        }
        if (!/provenance|source and derivation/i.test(docs)) {
          throw new Error(`${docsPath}: source and derivation status is required`);
        }
      }
    }
  }
}

const canonical = canonicalSkillDirs();
const generated = generatedSkillDirs();

if (canonical.length === 0) {
  throw new Error("canonical catalog: no active skills found");
}

validateSkills("canonical catalog", canonical, canonical.length, {
  requireDocs: true,
});
validateSkills("generated Codex catalog", generated, canonical.length, {
  codex: true,
});

const manifest = JSON.parse(
  readFileSync(join(repo, ".claude-plugin", "plugin.json"), "utf8"),
);
const expectedManifestSkills = canonical.map(normalizedRelative).sort();
const actualManifestSkills = [...manifest.skills].sort();
if (
  JSON.stringify(actualManifestSkills) !==
  JSON.stringify(expectedManifestSkills)
) {
  throw new Error("Claude plugin skill paths do not match the canonical catalog");
}

const readme = readFileSync(join(repo, "README.md"), "utf8");
for (const skillDir of canonical) {
  const link = `${normalizedRelative(skillDir)}/SKILL.md`;
  if (!readme.includes(link)) {
    throw new Error(`README is missing skill link: ${link}`);
  }
}

console.log(
  `All ${canonical.length} skills allow automatic invocation in Claude and Codex`,
);
