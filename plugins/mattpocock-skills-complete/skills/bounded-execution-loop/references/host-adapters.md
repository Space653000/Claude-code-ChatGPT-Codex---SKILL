# Host adapters

The checklist contract is portable. Scheduling is host-specific and should be
added only when recurrence is part of the user's request.

## Claude Code

Claude Code's bundled `/loop` repeats a prompt while the current session stays
open:

```text
/loop 5m check the deploy
/loop check the deploy
/loop
```

Use it for polling, recurring checks, or invoking another skill on an interval.
It is not by itself a sequential checklist runner. Keep the bounded checklist
contract in the prompt or a referenced file, and use an active agent run for a
one-time checklist.

Official source:
[Run prompts on a schedule](https://code.claude.com/docs/en/scheduled-tasks)

## ChatGPT and Codex

For a one-time checklist, keep the work in the active task and follow the same
bounded contract. For recurrence, use a Scheduled task or automation only when
the user requested scheduling and the capability is available. A local project
task also depends on the required machine and app being available.

Codex CLI and IDE do not expose the Scheduled tasks management interface. Do
not invent a `/loop` command for Codex.

Official sources:

- [Automations](https://learn.chatgpt.com/docs/automations)
- [Long-running work](https://learn.chatgpt.com/docs/long-running-work)
