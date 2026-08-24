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
4. Inspect the available skill names and descriptions before planning each
   task. When the host listing is shortened or the route is unclear, load the
   complete generated catalog from `ask-matt/CATALOG.md`.
5. Load the smallest relevant set of skill files and continue the requested
   work.
6. Select skills automatically. All 39 skills are model-reachable, so the user
   never needs to remember or type a skill name.
7. Keep normal authorization boundaries. Selecting a skill does not authorize
   unrelated external writes or destructive actions.

Installation is complete only when the plugin is visible in the current
harness and all 39 skills are discoverable.

When a user supplies another URL and asks to learn it into this catalog, use
`public-skill-distiller`. Study only free public material. Skip paid,
members-only, credentialed, and private content without further research or
reconstruction.

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

Choose the `space653000` marketplace, install
`mattpocock-skills-complete`, and start a new chat or session.

## Editable skill files

Use this route instead of the plugin when the user wants files they can edit:

```bash
npx skills@latest add Space653000/Claude-code-ChatGPT-Codex---SKILL
```

Install either the plugin or editable files. Installing both exposes duplicate
skills with the same names.

## Coverage

Both plugin manifests expose every active `SKILL.md` under `skills/`:

- 21 engineering skills
- 7 productivity skills
- 7 in-progress skills
- 4 misc skills

The README must keep the beta and specialized labels visible even though all 39
skills are automatically selectable.
