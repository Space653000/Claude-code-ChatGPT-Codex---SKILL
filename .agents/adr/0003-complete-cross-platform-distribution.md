# Ship every active skill in one Claude Code, ChatGPT, and Codex distribution

The upstream project deliberately limits its Claude Code plugin to promoted
engineering and productivity skills. It defers a native Codex plugin because a
single recursive Codex skills path could not express that curated subset.

This distribution has a different goal: one GitHub repository should expose
every active `SKILL.md` for automatic selection in Claude Code, ChatGPT, and
Codex. A complete catalog makes the Codex constraint useful rather than
limiting, and users should not need to remember skill names.

## Decision

- Keep every upstream file and the original MIT attribution.
- Include all engineering, productivity, in-progress, and misc skills.
- List all skill directories explicitly in `.claude-plugin/plugin.json`.
- Generate `plugins/mattpocock-skills-complete/skills/` as a flat copy of the
  canonical bucketed tree. Codex plugin validation requires one immediate
  directory per skill.
- Remove explicit-only invocation flags from every canonical skill and generated
  Codex copy. All 36 descriptions are model-facing context pointers.
- Preserve Claude-only `argument-hint` metadata in canonical skills and remove
  it from generated Codex copies.
- Treat a user-provided repository URL as an installation and automatic-use
  request, with the detailed contract in `.agents/install-block.md`.
- Keep beta and specialized skills clearly labelled in the README and bucket
  documentation instead of presenting them as stable defaults.
- Keep harness-specific marketplace entries in `.claude-plugin/marketplace.json`
  and `.agents/plugins/marketplace.json` because their schemas differ.

## Verification

Every release must satisfy all of these checks:

1. Every active `SKILL.md` is reachable from both plugin manifests.
2. Claude Code strict plugin validation passes.
3. Codex plugin validation passes.
4. `package.json` and both plugin manifests use the same version.
5. The upstream source commit and MIT license remain documented.
6. No active skill contains a Claude or Codex explicit-only invocation flag.
