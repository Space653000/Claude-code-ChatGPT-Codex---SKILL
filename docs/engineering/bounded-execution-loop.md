## What it does

`bounded-execution-loop` executes an approved checklist item by item with
observable acceptance criteria, reversible checkpoints, batch gates, and
explicit stop conditions. It can continue through routine work without asking
after every item.

The checklist must be decision-complete before execution. Missing authority,
paid actions, unresolved product choices, and acceptance criteria that cannot
prove the result stop the loop.

## When to reach for it

Type `/bounded-execution-loop`, or the agent reaches for it automatically
when a large, repetitive, approved checklist can run unattended.

| Situation | Route |
| --- | --- |
| Requirements or trade-offs are unresolved | Use [grill-with-docs](https://aihero.dev/skills-grill-with-docs) |
| A multi-session effort still needs a route | Use [wayfinder](https://aihero.dev/skills-wayfinder) |
| Approved work is large and decision-free | Run the bounded execution loop |
| One normal implementation task is ready | Use [implement](https://aihero.dev/skills-implement) |
| A recurring life or business workflow needs a spec | Use `loop-me` |

## The bounded loop

The leading word is **bounded**. Progress continues automatically only inside
the approved scope. Every item must prove its own result, and the loop stops at
declared risk boundaries instead of converting missing permission into implied
permission.

Claude Code can use its official `/loop` feature for session-scoped recurring
prompts. ChatGPT and Codex use their own active-task or scheduling mechanisms.
The acceptance and safety contract stays the same across hosts.

## Common questions

**Is this the same as Claude Code's `/loop`?**

No. Claude Code's feature schedules a prompt repeatedly while the session is
open. This skill defines how an approved checklist advances and stops. It may
use scheduling when recurrence is requested, but it does not depend on it.

**What happens when one item is blocked?**

The item is marked skipped with evidence, then another ready item may proceed.
Three consecutive skipped items stop the default loop so a broken plan does not
produce an unattended chain of guesses.

## It's working if

- Every completed item has observable verification evidence.
- A failed criterion remains failed instead of being rewritten.
- Every skipped item records its blocker.
- Checkpoints and batch gates are visible in the execution record.
- The run stops before new authority, spending, or an unresolved decision.

## Where it fits

This is a high-volume execution mode after
[to-tickets](https://aihero.dev/skills-to-tickets) and any required
[adversarial plan review](https://aihero.dev/skills-adversarial-plan-review).
Use [implement](https://aihero.dev/skills-implement) for ordinary single-ticket
work. [ask-matt](https://aihero.dev/skills-ask-matt) routes over the complete
set.
