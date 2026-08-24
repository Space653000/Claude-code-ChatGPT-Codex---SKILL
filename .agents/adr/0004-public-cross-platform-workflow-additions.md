# Add public cross-platform workflow skills without copying private assets

The repository preserves 36 MIT-licensed skills from the pinned upstream
snapshot. A public video also describes two useful workflow patterns that the
snapshot does not provide as cross-platform skills: adversarial review before
costly implementation and bounded execution of a decision-free checklist.

The video names a private plan-review command and a checklist built around
Claude Code's public `/loop` feature, but it does not publish the underlying
paid prompts.

## Decision

- Keep the 36 upstream skills intact and clearly attributed.
- Add `adversarial-plan-review` and `bounded-execution-loop` as original,
  MIT-licensed cross-platform skills.
- Base the additions only on publicly described principles and first-party host
  documentation.
- Exclude paid prompts, members-only assets, and attempted reconstructions.
- Keep host-neutral behavior in each `SKILL.md`, with Claude Code and Codex
  scheduling details behind an on-demand reference.
- Route the new skills automatically through `ask-matt`.

## Consequences

The complete catalog contains 38 skills: 36 pinned upstream skills and two
original public-workflow additions. Claude Code, ChatGPT, and Codex can select
all 38 automatically, while source boundaries remain visible to maintainers.
