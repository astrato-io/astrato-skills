---
name: astrato-visualizations
description: >-
  Integrate or modify governed Astrato charts in a browser app using @astrato-io/sdk and
  @astrato-io/visualizations, including visualization definitions, Business Question bindings
  and selection-based interactions.
  Use alongside astrato-apps for an Astrato App; app delivery and model authoring have separate owners.
---

# Integrate Astrato visualizations

Use Astrato visualizations for charts and analytical data tables. For simple scalar KPI cards,
choose a native number object or ordinary app UI according to the presentation needed, without
a renderer exception or a default to either approach. A plotted trend or sparkline is still a chart.
Follow **Chart rendering policy** in **Compose a dashboard page** before substituting a chart or analytical-table solution: only a direct, specific
instruction, or a verified current capability gap with explicit permission, allows an exception.
Normally offer a viable Astrato alternative first when a gap is verified.

The documentation base is `https://docs.astrato.io`. Start at its `/llms.txt`, reuse pages
already read in this task, and follow only relevant links. Current documentation takes
precedence over this skill.

Read the matching app quickstart for a new integration, **Mounting objects** for creation
and lifecycle, and the definition and operation references for the selected visualization
types. Follow **Choose a chart** before declaring a presentation requirement unsupported.
Read **Interactivity guide** when changing selections, and **Always show a selection bar** in
**Filters and selections** for the selection bar every interactive page carries, and **Query performance** when a page
preloads several tabs or a selection change re-queries many objects. Reuse the working client and
mounting path in an existing app.

Follow the dependency version check in `astrato-apps`, or **Package versions** in
**Data App quickstart** when that skill is unavailable, including for externally hosted apps. In
an App Builder project, follow **App Builder**, where the saved lock sets versions.

1. Establish the app model and its documented authentication boundary before integration.
   Use `astrato-apps` for an Astrato App or **Externally hosted app quickstart** for an externally
   hosted app. Keep personal credentials out of shared browser code.
2. Resolve bindings from live metadata or a complete Business Question definition. Preserve
   its filters, parameters, ordering and calculation meaning; never guess field identifiers.
   Use **Business questions guide** for the current execution contract.
3. Create the visualization through its public definition contract. Change mounted objects
   through supported operations, check their outcomes, and report unsupported requirements.
   Do not depend on internal state or chart DOM.
4. Verify rendering before adding the requested interactions. Follow **Verifying an app**
   for live values, selections, sizing, errors and lifecycle checks; a successful compile
   alone does not establish a working chart. Check that a figure shown in two places has the
   same value (**Check that figures agree**), and measure the queries a click and a tab switch
   send, not only load.

Use `astrato-dashboard-design` for presentation decisions and `astrato-semantic-layer` for
requested model changes. **Data App developer guide** routes complete dashboard work when the
coordinating skill is unavailable.
