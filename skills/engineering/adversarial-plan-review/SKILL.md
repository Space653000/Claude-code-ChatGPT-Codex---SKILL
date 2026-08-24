---
name: adversarial-plan-review
description: Challenge a high-cost implementation plan before coding by separating the plan author from a read-only reviewer. Use when a wrong direction would cause substantial rework; skip for small, reversible changes.
metadata:
  origin: public-derived
---

# Adversarial Plan Review

Review the plan before implementation when its direction is expensive to
reverse. The review tries to falsify the plan. It does not rewrite the plan or
start coding.

## Process

1. Pin the plan, originating spec, repository standards, and known constraints.
   If decisions are still unresolved, call the Skill tool with
   `grill-with-docs` or `wayfinder` before this review.
2. Freeze implementation changes during review. Give a separate reviewer
   read-only access to the pinned sources and codebase.
3. Prefer a different model or harness for the reviewer when one is already
   available. Otherwise use an isolated review context and disclose that it is
   a weaker independence boundary.
4. Ask the reviewer to attack direction, assumptions, dependencies, acceptance
   criteria, rollback, scope, and sequencing. Findings must cite evidence and
   state severity.
5. Return the findings to the plan author. For each material objection, the
   author either revises the plan or rejects the objection with evidence.
6. Repeat only while blocking or high-severity direction problems remain. Stop
   when the remaining feedback is editorial or an optional refinement.
7. Publish the reconciled plan and a short disposition of review findings.
   Implementation starts only when the user has authorized it.

Read [references/review-prompts.md](references/review-prompts.md) when preparing
the author, reviewer, or reconciliation prompt.

Read [references/provenance.md](references/provenance.md) only when auditing,
publishing, or updating this skill's source claims.

## Boundaries

- Use this gate when a wrong direction would create costly bulk rework.
- A reviewer stays read-only and does not silently become a second author.
- Independence is role separation, not automatic truth. Verify objections
  against primary sources before absorbing them.
- Keep Standards review and Spec review available after implementation. This
  skill challenges the plan before code exists; `code-review` reviews a diff.
