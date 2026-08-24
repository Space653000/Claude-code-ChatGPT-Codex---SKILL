## What it does

`adversarial-plan-review` challenges a high-cost implementation plan before
code is written. It separates the plan author from a read-only reviewer so the
reviewer can attack direction, assumptions, dependencies, acceptance, rollout,
and scope without quietly becoming a second author.

The skill earns its cost only when choosing the wrong direction would cause
substantial rework. Small, reversible changes should proceed through the normal
implementation flow.

## When to reach for it

Type `/adversarial-plan-review`, or the agent reaches for it automatically
when an approved plan has material direction risk.

| Situation | Route |
| --- | --- |
| Decisions are still unresolved | Use [grill-with-docs](https://aihero.dev/skills-grill-with-docs) first |
| The effort is too foggy for one session | Use [wayfinder](https://aihero.dev/skills-wayfinder) first |
| The plan is fixed but expensive to reverse | Run adversarial plan review |
| Code already exists and needs review | Use [code-review](https://aihero.dev/skills-code-review) |
| The change is small and cheap to redo | Skip this gate |

## The falsification gate

The leading idea is **falsification**. The reviewer looks for evidence that the
plan cannot deliver the requested result. The author then accepts each material
objection or rejects it with evidence. Review stops when the remaining feedback
is editorial rather than directional.

Different models or [harnesses](https://www.aihero.dev/ai-coding-dictionary/harness)
provide a stronger independence boundary when they are already available. An
isolated [subagent](https://www.aihero.dev/ai-coding-dictionary/subagent) is a
useful fallback, with the weaker independence stated plainly.

## Common questions

**Does this replace code review?**

No. This skill attacks the plan before implementation. Code review examines the
resulting diff against repository standards and the originating spec.

**Should every plan use two models?**

No. Use the extra gate when wrong direction means costly bulk rework. The model
boundary is less important than role separation, read-only review, and
evidence-backed reconciliation.

## It's working if

- Blocking findings cite the plan, spec, or codebase evidence they contradict.
- The reviewer changes no implementation files.
- Every material objection has an accepted or rejected disposition.
- The final plan contains no unresolved direction problem disguised as a task.

## Where it fits

This is a pre-implementation gate between
[to-tickets](https://aihero.dev/skills-to-tickets) and
[implement](https://aihero.dev/skills-implement) when direction risk justifies
it. [ask-matt](https://aihero.dev/skills-ask-matt) routes over the complete set.
