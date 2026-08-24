# Automatic invocation

Every active `SKILL.md` in this distribution is reachable by the model and the
user. Automatic selection is the invariant, not a per-skill option:

- Omit `disable-model-invocation` from Claude skill frontmatter.
- Omit `policy.allow_implicit_invocation: false` from Codex `agents/openai.yaml`.
- Write each `description` as a model-facing context pointer that says what the
  skill does and when the task should trigger it.
- Keep beta or specialized status in the description so automatic selection
  can account for maturity and scope.

The agent inspects the available descriptions and loads the smallest relevant
skill set. A user may still select a skill explicitly, but no workflow depends
on the user remembering its name.

Every skill also carries an `agents/openai.yaml` beside its `SKILL.md`. It holds
Codex UI metadata such as `interface.display_name` and
`interface.short_description`. An explicit-only `policy` block is a validation
failure in this distribution.

## Dependencies between them

Dependencies are expressed as an explicit instruction to **call the Skill tool** with the named skill (`Call the Skill tool with "grilling"`), not deep `../other-skill/FILE.md` cross-references, and not a bare `/skill`-style mention left for the model to interpret. Naming the tool is what gets it fired: most harnesses expose skill invocation as a tool the model calls, and spelling that out gets a higher hit rate than dropping a `/name` into prose and hoping it's read as a command. Dropping the leading `/` also keeps this harness-neutral rather than less: a skill name on its own carries no assumption about which harness's trigger syntax it belongs to. Shared reference docs live inside the skill that owns them; other skills reach that material by calling the Skill tool with it, not by linking across folders.

This is about **operative** instructions: a skill's own steps telling the agent to go run another skill right now. Router prose that just names skills for a human to pick from (`ask-matt`, bucket `README.md`s) isn't invoking anything, so it keeps `/skill`-style names as plain labels.

The Skill tool takes one skill per call. A step that needs two skills is two calls, not one call with two names: say so (`Call the Skill tool twice, for "grilling" and "domain-modeling"`), not "call it with X and Y," which reads as a single call taking both.

This convention works for every active skill in this distribution because all
of them are model-reachable. A skill may call another skill when the dependency
is required, while the top-level agent remains responsible for choosing the
smallest relevant set.

## Passive vs active domain work

Merely _reading_ `CONTEXT.md` for vocabulary is a one-line prose pointer, not the `domain-modeling` skill. Only the active build/sharpen discipline (challenge terms, edge-case scenarios, write ADRs, update `CONTEXT.md` inline) is `domain-modeling`.
