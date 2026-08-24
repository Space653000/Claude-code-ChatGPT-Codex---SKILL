---
name: bounded-execution-loop
description: Execute a large, decision-free checklist with observable acceptance criteria, checkpoints, batch gates, and explicit stop rules. Use for approved repetitive work that may run unattended; not for unresolved decisions or actions needing new authority.
---

# Bounded Execution Loop

Run an approved checklist item by item while the user is away. The loop is
bounded by evidence, permissions, and stop conditions rather than by optimism.

## Before execution

Read [references/checklist-template.md](references/checklist-template.md) and
turn the approved work into that contract. Start only when:

- every item has an externally observable acceptance criterion;
- no item requires an unresolved product decision;
- paid actions, new authority, destructive operations, and human-only steps
  have explicit stop behavior;
- the checkpoint and batch boundaries fit the repository's rules.

If these conditions are not met, return the blocking decisions instead of
starting the loop.

## Loop

For each ready item:

1. Record the item as in progress and preserve its acceptance criterion.
2. For an engineering implementation item, call the Skill tool with
   `implement`. For other approved work, make the smallest change that can
   satisfy it.
3. Run the stated verification and capture the evidence.
4. Mark the item complete only when the criterion passes without weakening it.
5. If blocked, mark it skipped with the reason and continue when another item
   is ready.
6. Create the authorized checkpoint and change record.

Stop when any declared stop rule fires. The default safety stops are three
consecutive skipped items, a paid action, missing authority, a destructive
action outside the approved scope, or an invalid acceptance criterion. Pause at
every batch gate for the review the contract requires.

Read [references/host-adapters.md](references/host-adapters.md) only when the
user asks for scheduling, recurring checks, or a host-specific way to keep the
loop running.

## Completion

Return the completed, skipped, and remaining items; verification evidence;
checkpoints; stop reason, if any; and the next human decision. Do not describe a
partially verified item as complete.
