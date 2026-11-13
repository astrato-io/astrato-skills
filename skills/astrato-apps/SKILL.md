---
name: astrato-apps
description: >-
  Configure, develop, verify or publish an Astrato App, with the Astrato CLI or in App Builder.
  Use for the Astrato CLI, astrato.json, @astrato-io/app-runtime, local development, validated
  builds, publication management and App Builder projects, including through MCP. Externally
  hosted apps and Workbooks use different workflows.
---

# Develop an Astrato App

The documentation base is `https://docs.astrato.io`. Start at its `/llms.txt`, reuse pages
already read in this task, and follow only relevant links. Current documentation takes
precedence over this skill.

Read **Data App quickstart** for new setup and **Astrato CLI reference** or **Data App runtime
reference** for the lifecycle step being changed. For a project in App Builder, follow **App
Builder** instead; the CLI and local development steps do not apply there. Use **Getting started
with Data Apps** if the workflow is unclear and **Authentication** for access changes.

Always check the configured package registry for newer releases of the project's dependent
packages before development; reuse that check within the task. Never choose versions from
memory. Follow **Package versions** in the quickstart for compatibility and upgrade decisions.
In App Builder, the saved lock sets versions; follow **App Builder** instead.

1. Inspect the existing project and reuse its verified setup. Follow the workflow's guide for
   adoption, configuration and runtime integration rather than inventing a replacement. Build a
   new app with the logo of the thing being built and use it as the favicon; if none is supplied,
   choose a glyph from the data's subject and say it is a placeholder (see **Motion and texture**).
2. Resolve the intended host, tenant and semantic layer through the request and live context.
   Follow the documented authentication checkpoint before work requiring access. The user
   completes account login; never request credentials or inspect their credential store.
   Independent local work can continue while access is blocked.
3. Develop through the supported runtime and local session, or in App Builder. Keep platform
   credentials and connection details out of authored browser code. Use the current docs for
   configuration, browser access and supported capabilities. Give every object one shared
   right-click menu early, before objects grow their own handlers, following **Object menu**; in
   App Builder, render the starter's `ObjectMenu` rather than writing another.
4. Validate the artifact and inspect the running app through **Verifying an app**, including
   figure consistency, sideways overflow and the query cost of interactions (**Query performance**). Distinguish
   a build, successful live queries and a verified hosted result when reporting completion.
5. Publish or change an existing publication only within the requested scope, following
   **Manage Data Apps**, or **App Builder** for a Builder project. App publication does not
   authorize model publication or changes to access. Verify the server result before reporting
   delivery.

Use `astrato-visualizations` for chart integration and `astrato-dashboard` for a complete
dashboard; follow their documentation when those companions are unavailable. Report unavailable
capabilities and access gaps without silently changing hosting or substituting bundled data.
