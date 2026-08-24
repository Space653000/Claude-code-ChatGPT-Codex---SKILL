# Provenance

- Origin class: Public-derived original
- Checked: 2026-08-24
- Public sources:
  - https://www.youtube.com/watch?v=BBq_obKDd9k
  - https://code.claude.com/docs/en/scheduled-tasks
  - https://learn.chatgpt.com/docs/automations
  - https://learn.chatgpt.com/docs/long-running-work
- Access boundary: These sources were freely accessible without payment,
  membership, credentials, or private access at the checked date.

## Directly supported by the sources

- The video publicly describes continue, acceptance, skip, stop, checkpoint,
  change-record, and batch-gate conditions for unattended checklist work.
- Claude Code documents `/loop` as a session-scoped recurring prompt feature.
- ChatGPT and Codex document scheduled tasks and long-running work through their
  own host mechanisms.

## Repository interpretation

- The bounded checklist contract and portable runner prompt are original.
- The skill treats Claude `/loop` as an optional scheduling adapter rather
  than pretending it is a checklist runner.
- Codex uses its own active-task or automation mechanisms and does not invent a
  `/loop` command.

## Excluded

- Paid checklist prompts and members-only assets
- Any reconstruction of the presenter's unpublished one-line command
- Host behavior not supported by first-party documentation

## Licensing boundary

The skill uses original wording and public operational ideas. It does not
reproduce a private prompt, transcript, or members-only checklist.
