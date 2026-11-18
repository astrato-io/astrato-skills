---
name: astrato-dashboard
description: >-
  Build or extend a dashboard from Astrato semantic-layer data, with or without a
  reference design. For presentation-only changes use astrato-dashboard-design.
---

# Build an Astrato dashboard

The documentation base is `https://docs.astrato.io`. Start at its `/llms.txt`, reuse pages
already read in this task, and follow only relevant links. Current documentation takes
precedence over this skill.

Read every page you use in full, not a preview: web-fetch its plain-text copy (the
`/_llms-txt/<page>.txt` links in `/llms.txt`; `/app-design/` is `/_llms-txt/data-app-developer-guide.txt`)
and read all of it. Never act on a partial read or a summary, which drops commands, versions and
caveats. If a fetch returns only part of a page (truncated, or a summary rather than the text),
get the rest before using it: page through it with the fetch tool's offset or page parameters
until you reach the end, or read it through an Astrato MCP resource where one is offered. Only if
that fails, say which pages you could not read in full, and don't act on what they would have said.

Start with **Build a Data App with your AI agent**
(`https://docs.astrato.io/build-a-data-app-with-an-agent/`, or `nash-mcp://guides/build-a-data-app`
with `resources/read` on an Astrato MCP connection) and follow its steps in order. It asks the user
three things once, starts the app from `astrato init --template dashboard`, sets a starting look and
composes the page from the starter's finish. The steps below add detail; where they differ, follow
the guide. Read **Data App developer guide** for the build order, then **Compose a dashboard page**
for data preparation and presentation choices. Read **Verifying an app** before deciding how
to demonstrate completion. Reuse verified context and assess only what the request changes.

1. Establish the audience, analytical questions, delivery model and constraints from the
   request and project. Use the composition guide's brief when useful; a separate document
   or approval step is not required.
2. Establish metric meaning and live evidence through `astrato-data-discovery` or
   **Business questions guide**. Follow the composition guide for saved-question coverage.
   Required model authoring belongs to `astrato-semantic-layer` within the authorized scope.
3. Choose the presentation through `astrato-dashboard-design` or the composition guide.
   Treat a supplied reference as evidence of appearance, not proof of metric meaning.
   Document consequential ambiguities and deliberate differences.
4. Build through `astrato-visualizations` and the selected app quickstart. Every interactive page
   ships with filters and a selection bar (**Always show a selection bar**) on the first pass. Prove an unfamiliar
   integration on a representative view before expanding it. Report missing capabilities
   rather than silently replacing the intended analysis.
5. Name the stored Business Question on an object that shows it unchanged, so readers can take it elsewhere (Object menu); never on one that differs from it.
6. Apply **Verifying an app** to the requested scope and report delivered behavior, performed
   checks and unresolved limitations. Keep data-source failures separate from app defects.

The companion skills own specialized work; use their current documentation when they are not
installed. Dashboard construction does not authorize publishing a semantic layer. For an
explicit rapid demo, follow **Demo quick track** and report its actual preparation and coverage.
