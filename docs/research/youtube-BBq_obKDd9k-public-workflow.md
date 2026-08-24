# Public workflow extraction from BBq_obKDd9k

This note records only free, public, and independently verifiable material from
the video and first-party documentation. The YouTube `zh-TW` caption track is
automatic speech recognition, so timestamps are approximate.

## Sources

- [Video](https://www.youtube.com/watch?v=BBq_obKDd9k)
- [Matt Pocock skills snapshot](https://github.com/mattpocock/skills/tree/5b15a47f2d7150f545fbcacbfe381787fc0230dc)
- [Claude Code scheduled tasks](https://code.claude.com/docs/en/scheduled-tasks)
- [Codex skills](https://learn.chatgpt.com/docs/build-skills)
- [Codex automations](https://learn.chatgpt.com/docs/automations)
- [Codex long-running work](https://learn.chatgpt.com/docs/long-running-work)

## Public command index

| Time | Command | Publicly described purpose |
| --- | --- | --- |
| Description | `/setup-matt-pocock-skills` | Configure tracker, labels, and domain docs before tracker-dependent engineering skills |
| [04:11](https://www.youtube.com/watch?v=BBq_obKDd9k&t=251s) | `/grill-with-docs` | Clarify decisions before implementation and retain them in project docs |
| [04:18](https://www.youtube.com/watch?v=BBq_obKDd9k&t=258s) | `grill-me` | Run the interview without project-document persistence |
| [05:26](https://www.youtube.com/watch?v=BBq_obKDd9k&t=326s) | `/to-spec` | Synthesize the settled conversation into a spec and acceptance approach |
| [06:20](https://www.youtube.com/watch?v=BBq_obKDd9k&t=380s) | `/to-tickets` | Create verifiable tracer-bullet tickets with blocking edges |
| [06:56](https://www.youtube.com/watch?v=BBq_obKDd9k&t=416s) | `/implement` | Implement approved work, verify it, then review Standards and Spec |
| [08:35](https://www.youtube.com/watch?v=BBq_obKDd9k&t=515s) | `/diagnosing-bugs` | Build a feedback loop that goes red on the bug before theorizing |
| [09:04](https://www.youtube.com/watch?v=BBq_obKDd9k&t=544s) | `/wayfinder` | Map decisions for work too large and foggy for one session |
| [09:21](https://www.youtube.com/watch?v=BBq_obKDd9k&t=561s) | `/ask-matt` | Route the situation to the relevant skill or flow |
| [14:00](https://www.youtube.com/watch?v=BBq_obKDd9k&t=840s) | `/loop` | Claude Code's session-scoped recurring prompt feature |

The public main flow is:

```text
grill-with-docs -> to-spec -> to-tickets -> implement
```

## Situation routing

| Situation | Starting route |
| --- | --- |
| Small, reversible change with cheap rework | Direct implementation |
| Goal known, decisions unclear | `grill-with-docs` |
| Hard bug, flake, or performance regression | `diagnosing-bugs` |
| Effort too large and foggy for one session | `wayfinder` |
| Best route unclear | `ask-matt` |

This distribution makes every skill model-reachable. The agent may choose these
routes automatically, while manual skill names remain optional.

## Original portable requirements prompt

The following prompt is a new synthesis of the public workflow, not a video
transcript or private asset:

```text
Inspect the current workspace and choose the smallest fitting route.

If the change is small, reversible, and cheap to redo, implement it directly.
If the goal is known but decisions are unresolved, interview me before
implementation and preserve the settled decisions in the project's normal
agent documentation. If the work is too large or foggy for one session, map the
decisions first. If existing behavior is broken in a non-obvious way, create a
feedback loop that fails on that behavior before proposing causes.

For feature work, do not implement until we share an explicit understanding of
scope, trade-offs, acceptance, and validation. Then synthesize the spec, split
multi-session work into independently verifiable tickets with dependencies, and
implement only approved work. Finish with verification against repository
standards and the originating spec.

Select and load the relevant installed skills automatically. Keep normal
authorization boundaries for external writes, destructive actions, spending,
and new permissions.
```

## Public execution principles

The video publicly describes these checklist rules:

- continue from one ready item to the next;
- require externally observable acceptance for every item;
- preserve the acceptance criterion when verification fails;
- record a blocked item as skipped, then continue when possible;
- stop after three consecutive skipped items;
- stop before spending money or requiring a new human decision;
- leave a reversible checkpoint and change record;
- split large lists into reviewed batches.

They are implemented as original portable templates in
`bounded-execution-loop`. The publicly described separation between plan
author and critical reviewer is implemented in `adversarial-plan-review`.

## Excluded material

The repository does not include or attempt to reconstruct the named
`/codex-plan-pipeline`, paid prompts, members-only quick references, private
checklist assets, or other material not present in the public video and
first-party documentation.
