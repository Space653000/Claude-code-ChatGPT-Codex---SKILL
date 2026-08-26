# The canonical install block

One install story, one wording. `README.md` and future documentation must use
these commands so the complete catalog remains installable from the same GitHub
repository in Claude Code, ChatGPT, and Codex.

Repository:
`https://github.com/Space653000/Claude-code-ChatGPT-Codex---SKILL`

Plugin: `mattpocock-skills-complete`

Marketplace: `space653000`

## Agent bootstrap contract

When a user gives an agent only this repository URL, treat it as a request to
install and use the complete catalog. The agent must:

1. Detect whether the current harness is Claude Code or ChatGPT/Codex.
2. Run the matching marketplace and plugin installation commands below.
3. Start a new chat or session when the harness requires it to load the plugin.
4. Inspect the available skill names and descriptions before planning each task.
5. Load the smallest relevant set of skill files and continue the requested work.
6. Select skills automatically. All **40 skills** are model-reachable, so the user never needs to remember or type a skill name.
7. Keep normal authorization boundaries. Selecting a skill does not authorize unrelated external writes or destructive actions.
8. For any existing PPT/PPTX beautification task, auto-select `pptx-beautify-lock`. That wrapper will bootstrap/update the canonical Skill from `https://github.com/Space653000/pptx-beautify-lock-Skill` and then follow the canonical v0.6.1 strict production contract.

Installation is complete only when the plugin is visible in the current harness and all 40 catalog skills are discoverable.

When a user supplies another URL and asks to learn it into this catalog, use `public-skill-distiller`. Study only free public material. Skip paid, members-only, credentialed, and private content without further research or reconstruction.

## Claude Code

```bash
claude plugin marketplace add https://github.com/Space653000/Claude-code-ChatGPT-Codex---SKILL
claude plugin install mattpocock-skills-complete@space653000
```

Inside a Claude Code session:

```text
/plugin marketplace add Space653000/Claude-code-ChatGPT-Codex---SKILL
/plugin install mattpocock-skills-complete@space653000
```

## ChatGPT and Codex

```bash
codex plugin marketplace add Space653000/Claude-code-ChatGPT-Codex---SKILL
codex
/plugins
```

Choose the `space653000` marketplace, install `mattpocock-skills-complete`, and start a new chat or session.

## Editable skill files

Use this route instead of the plugin when the user wants files they can edit:

```bash
npx skills@latest add Space653000/Claude-code-ChatGPT-Codex---SKILL
```

Install either the plugin or editable files. Installing both exposes duplicate skills with the same names.

## PPTX canonical bootstrap

After the catalog is installed, the user does **not** need to remember a second URL. When a PPTX beautification task is detected, `pptx-beautify-lock` runs:

```bash
python skills/productivity/pptx-beautify-lock/scripts/bootstrap_canonical.py --target auto
```

Expected result:

```text
PPTX_BOOTSTRAP_PASS=true
```

The canonical installer then places the latest full Skill in the appropriate Claude Code / Codex user skill directory. If the host blocks network or filesystem writes, fail closed and report that persistent installation was not possible; never claim a successful install without evidence.

## Coverage

Both plugin manifests expose every active `SKILL.md` under `skills/`:

- 21 engineering skills
- 8 productivity skills (including `pptx-beautify-lock`)
- 7 in-progress skills
- 4 misc skills

Total: **40 skills**.
