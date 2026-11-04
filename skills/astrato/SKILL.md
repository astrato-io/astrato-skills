---
name: astrato
description: >-
  Route any Astrato task to its workflow and current documentation, including Workbooks,
  Astrato Apps, externally hosted apps, dashboards, the CLI, App Builder, astrato.json,
  @astrato-io/sdk, @astrato-io/app-runtime, @astrato-io/visualizations, business questions,
  SLE and MCP. Use even when a specific implementation request seems ready to code.
---

# Choose an Astrato workflow

The documentation base is `https://docs.astrato.io`. Start at its `/llms.txt`, reuse pages
already read in this task, and follow only relevant links. Current documentation takes
precedence over this skill.

Use **Getting started with Data Apps** when the product area or hosting model is unclear.
Follow explicit user intent and an existing project's setup; ask only when the choice remains
ambiguous. For browser apps, establish hosting before scaffolding or selecting authentication.

| Task                                         | Skill                      | Documentation                        |
| -------------------------------------------- | -------------------------- | ------------------------------------ |
| Astrato-managed app development and delivery | `astrato-apps`             | **Data App quickstart**              |
| An app in App Builder, including through MCP | `astrato-apps`             | **App Builder**                      |
| Externally hosted app development            | —                          | **Externally hosted app quickstart** |
| SDK integration and queries without charts   | —                          | **SDK reference**                    |
| Complete dashboard                           | `astrato-dashboard`        | **Data App developer guide**         |
| Dashboard design or restyling                | `astrato-dashboard-design` | **Compose a dashboard page**         |
| Chart integration                            | `astrato-visualizations`   | **Visualizations reference**         |
| Trends in KPI cards and table columns        | `astrato-app-sparklines`   | **KPI card**                         |
| Shaders, backgrounds and animation           | `astrato-app-motion`       | **Theming**                          |
| Styling for a named company                  | `astrato-app-brand`        | **Theming**                          |
| Metadata inventory and inspection            | `astrato-data-discovery`   | **Semantic layer workflows**         |
| Read-only analytical investigation           | `astrato-data-discovery`   | **Business questions guide**         |
| Semantic-layer authoring and release         | `astrato-semantic-layer`   | **Semantic layer workflows**         |

Load a companion only for the work it owns. Task skills also work independently. Use
**Authentication** and **Nash MCP setup** for access and host configuration; credentials belong
in the documented trusted boundary, never in shared browser code or skill files.
