# PPTX Beautify Lock

`pptx-beautify-lock` is the central catalog's automatic route into the canonical
PowerPoint visual-refactoring project at:

```text
https://github.com/Space653000/pptx-beautify-lock-Skill
```

It is a lightweight bootstrap/distribution skill. The standalone canonical
`SKILL.md` remains the source of truth for actual presentation work.

## When to reach for it

Use this Skill automatically when the user wants to improve an existing PPT/PPTX
while preserving protected content and source identity, including requests to:

- beautify a presentation without rewriting its content;
- repair overlap, overflow, placeholders, typography, tables, charts, or layout;
- preserve the source deck's own brand/theme rather than rebrand it;
- raise an engineering or executive deck to top-tier global technology-customer
  presentation quality; or
- rerun full-deck QA after a local slide repair.

The user only needs the central catalog URL. They should not need to remember or
paste the standalone PPTX repository URL.

## It's working if

The route is healthy when:

1. the catalog automatically selects `pptx-beautify-lock` for a matching PPTX
   task;
2. `scripts/bootstrap_canonical.py --target auto` obtains/updates the public
   canonical repository conservatively;
3. the canonical installer reports success and the installed canonical
   `pptx-beautify-lock/SKILL.md` is loaded;
4. the actual deck workflow preserves protected content, source identity and
   bilingual font portability; and
5. final delivery is fail-closed until the canonical release gates, full-deck
   regression and required multi-pass review are proven.

If network access, Git, filesystem writes, host authorization, or canonical
installation is blocked, the wrapper must say so instead of pretending the
persistent installation succeeded.

## Where it fits

```text
Central catalog URL
→ automatic skill selection
→ pptx-beautify-lock wrapper
→ canonical repository bootstrap/update
→ canonical SKILL.md
→ Content Lock + identity/layout/design/QA pipeline
→ full-deck release gates
```

This keeps distribution concerns separate from the actual presentation-design
contract. The catalog stays small and auto-routable while the standalone PPTX
project can evolve independently.

## Provenance

Origin class: repository-original distribution glue created for this catalog.
The canonical implementation is the public `Space653000/pptx-beautify-lock-Skill`
repository. The wrapper does not redistribute paid/private presentation assets,
members-only prompts, credentialed material, or inaccessible third-party
content. See the Skill's `references/provenance.md` for the full access and
licensing boundary.
