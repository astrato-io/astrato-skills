# Astrato skills

The `skills` folder contains skills that teach Claude Code and Codex how to build on Astrato.

Copy every folder inside `skills` into your project:

- **Claude Code:** `.claude/skills/`
- **Codex:** `.agents/skills/`

For example, the main skill ends up at `.claude/skills/astrato/SKILL.md`.

Then start Claude Code or Codex in the project folder and describe what you want to build.

## Maintainer verification

Before publishing a skill update, copy the complete approved skill folders from the authoring
checkout, including supporting files. Keep root-level authoring notes out of `skills/` and remove
retired folders. Verify that the proposed distribution matches the source:

```sh
node scripts/check-skills.mjs /path/to/authoring-checkout/skills
node --test scripts/check-skills.test.mjs
```

The comparison is read-only and needs a local source checkout. It reports changed, missing and
unexpected files; it does not publish or fetch private content. Run it again whenever the source
changes. The skill documentation entry point is `https://docs.astrato.io/llms.txt`.
