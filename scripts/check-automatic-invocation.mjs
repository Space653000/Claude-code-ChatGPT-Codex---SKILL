#!/usr/bin/env node

import { existsSync, readFileSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repo = join(dirname(fileURLToPath(import.meta.url)), "..");
const buckets = ["engineering", "productivity", "in-progress", "misc"];

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

function validateSkills(label, skillDirs, { codex = false } = {}) {
  if (skillDirs.length !== 36) {
    throw new Error(`${label}: expected 36 skills, found ${skillDirs.length}`);
  }

  for (const skillDir of skillDirs) {
    const skill = readFileSync(join(skillDir, "SKILL.md"), "utf8");
    if (/^disable-model-invocation:\s*true\s*$/m.test(skill)) {
      throw new Error(`${skillDir}: Claude explicit-only invocation is forbidden`);
    }
    if (!/^description:\s*\S.+$/m.test(skill)) {
      throw new Error(`${skillDir}: model-facing description is required`);
    }
    if (codex && /^argument-hint:\s*.+$/m.test(skill)) {
      throw new Error(`${skillDir}: Claude-only argument-hint leaked into Codex`);
    }

    const openaiYaml = join(skillDir, "agents", "openai.yaml");
    if (
      existsSync(openaiYaml) &&
      /^\s*allow_implicit_invocation:\s*false\s*$/m.test(
        readFileSync(openaiYaml, "utf8"),
      )
    ) {
      throw new Error(`${skillDir}: Codex explicit-only invocation is forbidden`);
    }
  }
}

validateSkills("canonical catalog", canonicalSkillDirs());
validateSkills("generated Codex catalog", generatedSkillDirs(), { codex: true });
console.log("All 36 skills allow automatic invocation in Claude and Codex");
