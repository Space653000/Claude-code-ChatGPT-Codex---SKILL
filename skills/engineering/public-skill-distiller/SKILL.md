---
name: public-skill-distiller
description: Distill a free public video, article, document, or repository into an original cross-platform skill with provenance and usage guidance. Use when the user asks to learn a public source into this catalog; skip paid, private, or members-only material and avoid duplicate skills.
metadata:
  origin: repository-original
---

# Public Skill Distiller

Turn public operational ideas into a maintainable skill without copying the
source's protected expression or attributing the derived design to its author.

## Source gate

Proceed when the user asks to learn, distill, or integrate a source that is
freely accessible to the public. A repository URL for this catalog by itself is
an installation request, not a distillation request.

When the useful content requires payment, membership, credentials, or private
access, report that it was skipped and stop. Do not search for mirrors, bypass
access controls, infer the hidden prompt, or reconstruct it from descriptions.

## Distillation

1. Pin the public source URLs and prefer first-party material. Capture only the
   facts and principles needed for the requested skill. Call the Skill tool
   with `research` when corroboration requires substantial reading legwork,
   keeping the same free-public source gate.
2. Separate three layers: what the source states, the operational principle it
   supports, and this repository's original implementation.
3. Read the complete catalog through `../ask-matt/CATALOG.md` and inspect the
   closest existing skills. Update an existing skill when the capability is not
   genuinely distinct.
4. For a distinct capability, call the Skill tool with `writing-for-agents`,
   then write a host-neutral core with concise automatic invocation. Put Claude
   Code, ChatGPT, or Codex differences in an on-demand adapter reference.
5. Apply the provenance and usage contract in
   [references/output-contract.md](references/output-contract.md).
6. Update `ask-matt`, the generated catalog, promoted documentation,
   manifests, version, changelog, and generated Codex copy.
7. Validate both platforms. Commit or push only when the user authorized those
   repository mutations.

Read [references/provenance.md](references/provenance.md) only when auditing,
publishing, or updating this skill's own source claims.

## Boundaries

- Public access permits study, not wholesale copying. Express the derived skill
  in original words and preserve source links.
- Ideas and methods may inform the workflow. Quotes, transcripts, templates,
  and code remain subject to their licenses and appropriate quotation limits.
- Keep source claims and repository design separate. The source creator did not
  author this derived skill unless they actually did.
- Automatic selection does not expand authority for destructive actions,
  spending, external publication, or credentials.

## Completion

The work is complete when the skill is distinct, automatically discoverable in
Claude Code and ChatGPT/Codex, documented for use, traceable to public sources,
and validated with no private or paid material included.
