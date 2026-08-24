#!/usr/bin/env node

import {
  cpSync,
  existsSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  renameSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import { dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const repo = join(dirname(fileURLToPath(import.meta.url)), "..");
const sourceRoot = join(repo, "skills");
const pluginRoot = join(repo, "plugins", "mattpocock-skills-complete");
const generatedRoot = join(pluginRoot, "skills");
const temporaryRoot = join(repo, ".plugin-skills-tmp");
const buckets = ["engineering", "productivity", "in-progress", "misc"];

const skillSources = buckets.flatMap((bucket) => {
  const bucketRoot = join(sourceRoot, bucket);
  return readdirSync(bucketRoot, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => ({ name: entry.name, path: join(bucketRoot, entry.name) }))
    .filter(({ path }) => existsSync(join(path, "SKILL.md")));
});

const duplicates = skillSources
  .map(({ name }) => name)
  .filter((name, index, names) => names.indexOf(name) !== index);
if (duplicates.length > 0) {
  throw new Error(`Duplicate skill names: ${[...new Set(duplicates)].join(", ")}`);
}

skillSources.sort((a, b) => a.name.localeCompare(b.name));

function listFiles(root) {
  if (!existsSync(root)) return [];
  return readdirSync(root, { recursive: true, withFileTypes: true })
    .filter((entry) => entry.isFile())
    .map((entry) => relative(root, join(entry.parentPath, entry.name)))
    .sort();
}

function codexContent(source, file) {
  if (file !== "SKILL.md") return source;
  const transformed = source
    .toString("utf8")
    .replace(/^disable-model-invocation:\s*true\r?\n/m, "");
  return Buffer.from(transformed, "utf8");
}

function checkGeneratedCopy() {
  const expectedNames = skillSources.map(({ name }) => name);
  const actualNames = existsSync(generatedRoot)
    ? readdirSync(generatedRoot, { withFileTypes: true })
        .filter((entry) => entry.isDirectory())
        .map((entry) => entry.name)
        .sort()
    : [];

  if (JSON.stringify(actualNames) !== JSON.stringify(expectedNames)) {
    throw new Error("Codex plugin skills directory list is out of sync");
  }

  for (const { name, path } of skillSources) {
    const copy = join(generatedRoot, name);
    const sourceFiles = listFiles(path);
    const copiedFiles = listFiles(copy);
    if (JSON.stringify(sourceFiles) !== JSON.stringify(copiedFiles)) {
      throw new Error(`${name}: copied file list is out of sync`);
    }
    for (const file of sourceFiles) {
      const source = codexContent(readFileSync(join(path, file)), file);
      const generated = readFileSync(join(copy, file));
      if (!source.equals(generated)) {
        throw new Error(`${name}/${file}: generated content is out of sync`);
      }
    }
  }

  console.log(`Codex plugin contains ${skillSources.length} synchronized skills`);
}

if (process.argv.includes("--check")) {
  checkGeneratedCopy();
  process.exit(0);
}

rmSync(temporaryRoot, { recursive: true, force: true });
mkdirSync(temporaryRoot, { recursive: true });
for (const { name, path } of skillSources) {
  const destination = join(temporaryRoot, name);
  cpSync(path, destination, { recursive: true });
  const skillFile = join(destination, "SKILL.md");
  writeFileSync(skillFile, codexContent(readFileSync(skillFile), "SKILL.md"));
}
rmSync(generatedRoot, { recursive: true, force: true });
renameSync(temporaryRoot, generatedRoot);
checkGeneratedCopy();
