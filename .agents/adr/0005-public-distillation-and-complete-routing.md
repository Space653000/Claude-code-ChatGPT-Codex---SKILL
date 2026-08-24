# Make public distillation traceable and complete routing deterministic

The catalog's model-facing descriptions are large enough that a host may
shorten or omit entries from its initial skill listing. The repository also
needs a durable rule for turning free public information into original skills
without copying protected expression or pursuing paid material.

## Decision

- Add `public-skill-distiller` as an automatically selectable engineering
  skill.
- Treat this repository URL by itself as installation and automatic-use intent.
- Distill another URL only when the user asks to learn or integrate it.
- Stop at the source gate for paid, members-only, credentialed, or private
  material.
- Generate `ask-matt/CATALOG.md` from every canonical skill's frontmatter.
- Require `metadata.origin` and `references/provenance.md` for repository
  original and public-derived skills.
- Keep host-neutral behavior in `SKILL.md` and place material platform
  differences in on-demand references.
- Preserve automatic invocation for every active skill.

## Consequences

The complete distribution contains 39 skills: 36 pinned upstream skills, two
public-derived original workflows, and one repository-original distillation
workflow. Claude Code, ChatGPT, and Codex can route through the complete catalog
without the user remembering a skill name.
