# Astrato skills

The `skills` folder contains skills that teach AI coding assistants such as Claude Code and Codex
how to build on Astrato: semantic layers, dashboards, Data Apps, governed charts and data
discovery. `astrato` is the entry point and routes each request to the task skill that fits.

| Skill                      | Use it for                                                       |
| -------------------------- | ---------------------------------------------------------------- |
| `astrato`                  | Product orientation and routing to the right task and guide      |
| `astrato-apps`             | Configuring, developing and publishing an Astrato App            |
| `astrato-visualizations`   | Integrating governed Astrato charts in a browser app             |
| `astrato-semantic-layer`   | Authoring, validating and releasing semantic layer models        |
| `astrato-dashboard`        | Coordinating dashboard work from data to a published result      |
| `astrato-data-discovery`   | Inventory, analytical investigation and query evidence           |
| `astrato-dashboard-design` | Layout, chart and theme decisions                                |
| `astrato-app-sparklines`   | Where trends belong in KPI cards and tables                      |
| `astrato-app-motion`       | When to add ambient motion, within performance and accessibility |
| `astrato-app-brand`        | Applying a company's logo, colours and type to an app            |

## Install

### Claude Code plugin

Install the `astrato` plugin from the Claude directory, or add this repository as a plugin
marketplace and install from it:

```bash
claude plugin marketplace add astrato-io/astrato-skills
claude plugin install astrato@astrato
```

Restart Claude Code after installing or updating so it loads the new skills.

### Copy the folders

Copy every folder inside `skills` into your project:

- **Claude Code:** `.claude/skills/`
- **Codex:** `.agents/skills/`

For example, the main skill ends up at `.claude/skills/astrato/SKILL.md`.

Then start Claude Code or Codex in the project folder and describe what you want to build.

## What the skills access

The skills are Markdown instructions only. They contain no scripts, hooks or bundled code, and
they collect no data.

- **Documentation:** they tell the assistant to read the public Astrato documentation at
  `https://docs.astrato.io`, starting at `/llms.txt`. The assistant fetches those pages with its
  own web tools.
- **Your Astrato account:** they do not grant access to Astrato. Working with your data needs the
  Astrato connector or the Astrato CLI, signed in with your own account. Those requests go to your
  Astrato host, such as `https://app.astrato.io`, under the permissions you approve.
- **Packages:** for Data Apps they name the public `@astrato-io/app-runtime`, `@astrato-io/sdk`
  and `@astrato-io/visualizations` npm packages, which the assistant installs in your project when
  you ask it to build an app.

Never put a Personal Access Token or other credential inside a skill folder.

## Releasing an update

Raise `version` in `.claude-plugin/plugin.json` whenever the skills change. Installed copies only
update when the version changes.

## License

Distributed under the [Astrato Libraries License](LICENSE).
