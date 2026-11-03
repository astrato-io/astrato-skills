# Astrato skills

The `skills` folder contains skills that teach Claude Code and Codex how to build on Astrato.

## Claude Code: install the plugin

In Claude Code, add this repository as a marketplace and install the `astrato` plugin:

```
/plugin marketplace add astrato-io/astrato-skills
/plugin install astrato@astrato-skills
```

The plugin installs every skill in `skills/`. It does not connect the Astrato MCP server. Connect
that separately, as described in the [Astrato docs](https://docs.astrato.io/connect-an-ai-assistant/),
so Claude Code holds one Astrato connection.

## Other assistants: copy the folders

Copy every folder inside `skills` into your project:

- **Claude Code (manual):** `.claude/skills/`
- **Codex:** `.agents/skills/`

For example, the main skill ends up at `.claude/skills/astrato/SKILL.md`.

Then start Claude Code or Codex in the project folder and describe what you want to build.
