# Claude Code + ChatGPT Codex — Complete Skill Catalog

Central cross-platform Skill catalog for Claude Code, ChatGPT, and Codex.

Repository:

```text
https://github.com/Space653000/Claude-code-ChatGPT-Codex---SKILL
```

## Current release

```text
Catalog version: 1.7.0
Total model-reachable skills: 40
Engineering: 21
Productivity: 8
In progress: 7
Specialized: 4
```

The catalog contains 36 pinned Matt Pocock skills under the upstream MIT license
plus four repository-original workflow/distribution skills. All 40 skills are
available for automatic model selection; users do not need to remember or type a
skill name.

## One URL is the user-facing entry point

When an AI agent receives only this repository URL, treat it as a request to:

1. install the complete catalog for the current harness if needed;
2. inspect the available skill descriptions;
3. automatically choose the smallest relevant skill set for the task; and
4. continue the user's work without asking them to manually name a skill.

The machine-facing bootstrap contract is authoritative:

```text
.agents/install-block.md
```

## Claude Code

```bash
claude plugin marketplace add https://github.com/Space653000/Claude-code-ChatGPT-Codex---SKILL
claude plugin install mattpocock-skills-complete@space653000
```

Inside Claude Code:

```text
/plugin marketplace add Space653000/Claude-code-ChatGPT-Codex---SKILL
/plugin install mattpocock-skills-complete@space653000
```

## ChatGPT / Codex

```bash
codex plugin marketplace add Space653000/Claude-code-ChatGPT-Codex---SKILL
codex
/plugins
```

Choose marketplace `space653000`, install `mattpocock-skills-complete`, then
start a new chat/session if the harness requires reload.

## Editable Skill files

If editable local Skill files are preferred instead of a plugin:

```bash
npx skills@latest add Space653000/Claude-code-ChatGPT-Codex---SKILL
```

Install either the plugin or editable files, not both, to avoid duplicate skill
names.

## Automatic PPTX beautification route

`pptx-beautify-lock` is the 40th auto-selecting Skill in this catalog.

For an existing PowerPoint beautification request, Claude Code or Codex can route
automatically from this central catalog to the canonical repository:

```text
https://github.com/Space653000/pptx-beautify-lock-Skill
```

The wrapper conservatively bootstraps the latest canonical Skill and then defers
to its `SKILL.md` as the single execution contract.

Default production behavior includes:

```text
100% protected-content lock
Source Theme / Brand Terrain / Deck Identity preservation
Traditional Chinese + English font portability
Layout Intelligence + Spatial QA
Visual QA + Composition QA
Global Design Jury
Sibling slide-family style parity
Empty-placeholder protection
Full-deck no-regression after every repair
Three complete review passes
Fail-closed release gates
```

The user only needs the central catalog URL. They do not need to remember the
standalone PPTX repository URL.

## Repository-original additions

The four original additions are:

- `adversarial-plan-review` — independent challenge of high-cost plans before implementation.
- `bounded-execution-loop` — bounded, checkpointed execution of approved repetitive work.
- `public-skill-distiller` — distill free public sources into original traceable skills while excluding paid/private material.
- `pptx-beautify-lock` — auto-bootstrap and route existing PPT/PPTX visual refactoring to the canonical strict PowerPoint Skill.

Each repository-original/public-derived skill carries provenance metadata and
keeps private, credentialed, paid, and members-only material outside its scope.

## Catalog discovery

The generated complete catalog is:

```text
skills/engineering/ask-matt/CATALOG.md
```

When a host UI shortens the visible skill list, `ask-matt` can use this catalog to
route to the smallest relevant set.

## Validation

The repository's validation pipeline checks:

```text
plugin version synchronization
complete generated catalog synchronization
Codex plugin Skill mirroring
automatic invocation metadata
provenance requirements
PPTX bootstrap script compilation
```

A release should not be merged while these checks are red.

## Provenance and license

Original upstream project:

```text
https://github.com/mattpocock/skills
snapshot: 5b15a47f2d7150f545fbcacbfe381787fc0230dc
```

The upstream copyright notice and MIT license are retained in `LICENSE`.
Repository-original additions are documented separately through their provenance
files.
