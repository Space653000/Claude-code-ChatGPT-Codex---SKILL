# Bounded checklist contract

This is an original cross-platform template based on publicly described
checklist principles. It is not a copy of a paid prompt or private checklist.

## Portable runner prompt

```text
Execute the approved checklist below in order.

Continue condition:
- After completing or skipping one ready item, continue to the next ready item
  without asking for routine confirmation.

Acceptance condition:
- Each item is complete only when its stated observable verification passes.
- Preserve the acceptance criterion. Do not weaken or rewrite it to make a
  failing item pass.

Skip condition:
- If an item is blocked, mark it skipped, record the blocker and evidence, then
  continue when another item is ready.

Stop condition:
- Stop after three consecutive skipped items.
- Stop before spending money, requesting new authority, crossing the approved
  destructive scope, or making a product decision not already settled.

Checkpoint condition:
- After each completed item, create the repository-approved reversible
  checkpoint and record the changed files, verification, and result.

Batch condition:
- Work only through the current approved batch. At its gate, report results and
  wait for the required review before starting the next batch.

Final report:
- List completed, skipped, and remaining items; verification evidence;
  checkpoints; and the exact stop reason or next decision.
```

## Checklist

```markdown
# <work name>

## Contract

- Scope:
- Current batch:
- Checkpoint method:
- Change-record method:
- Additional stop rules:

## Items

### 1. <observable outcome>

- Status: pending
- Blocked by:
- Change:
- Acceptance:
- Verification:
- Evidence:
- Checkpoint:
- Skip reason:

## Batch gate

- Review required:
- Continue when:
```

Prefer end-to-end acceptance evidence. For example, replace "finish the
scheduling UI" with "schedule three people for one week, save, reopen, and
observe that every assignment remains."
