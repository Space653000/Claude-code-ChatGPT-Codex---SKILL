## What it does

`public-skill-distiller` turns a free public video, article, document, or
repository into an original cross-platform skill with source provenance and
usage guidance. It separates source claims from the operational principle and
from this repository's implementation.

The source must be freely accessible without payment, membership, credentials,
or private access. Public access permits study, while copying still follows the
source license and normal quotation limits.

## When to reach for it

Type `/public-skill-distiller`, or the agent reaches for it automatically
when you ask to learn or integrate a free public source into the skill catalog.

| Situation | Route |
| --- | --- |
| You paste this catalog's URL by itself | Install and use the catalog |
| You ask to turn a free public source into a skill | Run public skill distillation |
| An existing skill already covers the capability | Update it only when the new principle materially changes behavior |
| The content requires payment, membership, credentials, or private access | Skip it without further research |
| You only want a cited research note | Use [research](https://aihero.dev/skills-research) |

## The provenance boundary

The leading word is **provenance**. Every derived skill records public sources,
access status, source-backed principles, repository interpretation, exclusions,
and the licensing boundary. The result can explain exactly what came from where
without claiming that the source creator authored the new skill.

This skill itself is a repository-original policy workflow. Its detailed
[source record](https://github.com/Space653000/Claude-code-ChatGPT-Codex---SKILL/blob/main/skills/engineering/public-skill-distiller/references/provenance.md)
records that origin and the paid/private access boundary.

## Common questions

**Does a publicly viewable page allow the whole page to be copied?**

No. Public access makes the ideas available for study. Reproduction still
depends on copyright, license terms, and quotation limits. The skill uses
original wording and links to the source.

**Will every useful article become another skill?**

No. The agent compares the complete catalog first. A new skill is justified
only by a distinct trigger and behavior; otherwise the existing skill remains
the single source of truth.

## It's working if

- Paid and private sources stop at the source gate.
- Every factual source claim has a public URL or timestamp.
- Every repository extension is labelled as an original interpretation.
- The resulting skill has usage guidance and automatic invocation metadata.
- Claude Code and ChatGPT/Codex expose the same behavior.

## Where it fits

This is a standalone catalog-maintenance workflow. It uses
[writing-for-agents](https://aihero.dev/skills-writing-for-agents) for
agent-facing instructions and [ask-matt](https://aihero.dev/skills-ask-matt)
to check whether the capability already exists.
