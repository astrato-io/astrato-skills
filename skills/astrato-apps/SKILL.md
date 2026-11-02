---
name: astrato-apps
description: >-
  Configure, develop, verify or publish an Astrato App. Use for the Astrato CLI,
  astrato.json, @astrato-io/app-runtime, local development, validated builds and publication
  management. Externally hosted apps and Workbooks use different workflows.
---

# Develop an Astrato App

The documentation base is `https://docs.astrato.io`. Start at its `/llms.txt`, reuse pages
already read in this task, and follow only relevant links. Current documentation takes
precedence over this skill.

Read **Astrato App quickstart** for new setup and **Astrato CLI reference** or
**Astrato App runtime reference** for the lifecycle step being changed. Use **Getting
started** if hosting is unclear and **Authentication** for access changes.

Always check the configured package registry for newer releases of the project's dependent
packages before development; reuse that check within the task. Never choose versions from
memory. Follow **Package versions** in the quickstart for compatibility and upgrade decisions.

1. Inspect the existing project and reuse its verified setup. Follow the quickstart for
   adoption, configuration and runtime integration rather than inventing a replacement. Build a
   new app with the logo of the thing being built and use it as the favicon; if none is supplied,
   choose a glyph from the data's subject and say it is a placeholder (see **Motion and texture**).
2. Resolve the intended host, tenant and semantic layer through the request and live context.
   Follow the documented authentication checkpoint before work requiring access. The user
   completes account login; never request credentials or inspect their credential store.
   Independent local work can continue while access is blocked.
3. Develop through the supported runtime and local session. Keep platform credentials and
   connection details out of authored browser code. Use the current docs for configuration,
   browser access and supported capabilities.
4. Validate the artifact and inspect the running app through **Verifying an app**, including
   figure consistency, sideways overflow and the query cost of interactions (**Query performance**). Distinguish
   a build, successful live queries and a verified hosted result when reporting completion.
5. Publish or change an existing publication only within the requested scope, following
   **Manage data apps**. App publication does not authorize model publication or
   changes to access. Verify the server result before reporting delivery.

Use `astrato-visualizations` for chart integration and `astrato-dashboard` for a complete
dashboard; follow their documentation when those companions are unavailable. Report unavailable
capabilities and access gaps without silently changing hosting or substituting bundled data.
