# Output contract

Use this contract for every skill derived from a free public source.

## Required skill files

- `SKILL.md` with `metadata.origin: public-derived` and a concise
  model-facing description.
- `agents/openai.yaml` with a matching display name, short description, and
  default prompt.
- `references/provenance.md` using the template below.
- A promoted docs page when the skill belongs to `engineering/` or
  `productivity/`.
- Host adapters only when platform behavior materially differs.

## Provenance template

```markdown
# Provenance

- Origin class: Public-derived original
- Checked: YYYY-MM-DD
- Public sources:
  - <first-party URL>
- Access boundary: Freely accessible without payment, membership, credentials,
  or private access at the checked date.

## Directly supported by the source

- <source-backed principle with location or timestamp>

## Repository interpretation

- <original behavior, prompt, structure, or cross-platform adapter>

## Excluded

- <paid, private, unlicensed, unverifiable, or unnecessary material>

## Licensing boundary

The skill uses original wording and operational ideas. It does not reproduce
source transcripts, private prompts, templates, or code beyond what their
license and normal quotation limits permit.
```

## Usage documentation

State:

- what the skill does and the constraint that distinguishes it;
- when automatic selection should activate it;
- when a neighboring skill is a better route;
- prerequisites and authorization boundaries;
- observable signs that the skill is working;
- source and derivation status without implying source authorship.

## Catalog integration

Add the canonical skill to the Claude manifest and top-level README. Update
`ask-matt` when the skill changes a route, then run the catalog and Codex
synchronizers. The generated catalog must contain the new name, bucket, status,
origin, and trigger description.
