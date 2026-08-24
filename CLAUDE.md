This complete cross-platform distribution ships every active skill in the
repository to Claude Code, ChatGPT, and Codex. See
[`.agents/adr/0003-complete-cross-platform-distribution.md`](./.agents/adr/0003-complete-cross-platform-distribution.md).

Skills are organized into bucket folders under `skills/`:

- `engineering/`: daily code work
- `productivity/`: daily non-code workflow tools
- `misc/`: specialized tools, shipped with narrow descriptions
- `in-progress/`: beta, shipped for explicit discovery with warnings
- `deprecated/`: no longer used

Every `SKILL.md` under `engineering/`, `productivity/`, `misc/`, or
`in-progress/` must appear in the top-level `README.md` and in
`.claude-plugin/plugin.json`'s `skills` array. The generated Codex plugin
contains the same set in a flat `skills/` directory. `deprecated/` contains no
active skills.

Install commands are copied verbatim from
[.agents/install-block.md](./.agents/install-block.md).
`.claude-plugin/marketplace.json` is the Claude marketplace entry, while
`.agents/plugins/marketplace.json` is the Codex marketplace entry.
`.claude-plugin/plugin.json` lists canonical skill paths explicitly. The Codex
plugin lives under `plugins/mattpocock-skills-complete/` with a generated flat
`skills/` directory because its validator expects one immediate folder per
skill. The generator removes Claude's `disable-model-invocation: true` from the
Codex copy while preserving `policy.allow_implicit_invocation: false` in
`agents/openai.yaml`. Run `npm run
sync-codex-skills` after changing canonical skill files, then run Claude strict
validation and the Codex plugin validator.

Each skill entry in the top-level `README.md` must link the skill name to its `SKILL.md`.

Each bucket folder has a `README.md` that lists every skill in the bucket with a one-line description, with the skill name linked to its `SKILL.md`. The promoted buckets' `README.md`s and the top-level `README.md` group entries into **User-invoked** and **Model-invoked**; non-promoted bucket `README.md`s (`misc/`, `in-progress/`) use a flat list.

Skills in `engineering/` and `productivity/` also have a human-facing docs page at `docs/<bucket>/<skill-name>.md` (the docs tree mirrors those two bucket folders under `skills/`). The published URL is `https://aihero.dev/skills-<skill-name>` regardless of bucket: the docs path is repo organisation only. When you add, rename, or change the behaviour of a skill in `engineering/` or `productivity/`, create or re-sync its docs page following [.agents/writing-docs.md](./.agents/writing-docs.md). A finished page carries four sections: **What it does**, **When to reach for it**, **Common questions**, and **It's working if**. `writing-docs.md` holds the template, the section order, and where to hunt for the questions. Skills in the non-promoted buckets (`misc/`, `in-progress/`, `deprecated/`) get **no** docs page.

Every `SKILL.md` is either user-invoked (`disable-model-invocation: true` plus `policy.allow_implicit_invocation: false` in `agents/openai.yaml`, reachable only by the human) or model-invoked (model- or user-reachable). See [.agents/invocation.md](./.agents/invocation.md).

[`ask-matt`](./skills/engineering/ask-matt/SKILL.md) is the router that maps every user-reachable skill and how they relate. The same trigger that re-syncs a docs page applies to it: whenever you add, rename, remove, or change how a user-reachable skill fits the flows, re-read `ask-matt`'s `SKILL.md` and update it so the map stays accurate: a new skill it never mentions, or a stale one it still routes to, is a router that lies.

To (re)link every skill into the local harness skill directories (`~/.claude/skills`, `~/.agents/skills`), run `scripts/link-skills.sh`. Each entry is a symlink into this repo, so a `git pull` keeps installed skills current; re-run the script after adding, removing, or renaming a skill.

No em-dashes anywhere in this repo's prose (`SKILL.md` files, docs, `README.md`, `CHANGELOG.md`, ADRs, changesets, code comments). Where a sentence reaches for one, rewrite it instead with a comma, colon, period, parentheses, or a conjunction, whichever the sentence actually wants; never do a blind character substitution.
