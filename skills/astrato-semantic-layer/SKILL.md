---
name: astrato-semantic-layer
description: >-
  Inspect, author, validate, repair, import, export, version or publish an Astrato
  semantic layer through MCP. Use for the Semantic Layer Editor (SLE), measures,
  dimensions, joins, fields, functions, upstream schema issues, Snowflake semantic views
  and semantic-layer versions, including requests phrased as business modeling changes.
---

# Work with Astrato semantic layers

The documentation base is `https://docs.astrato.io`. Start at its `/llms.txt`, reuse pages
already read in this task, and follow only relevant links. Current documentation takes
precedence over this skill.

Read **Semantic layer workflows** and **Nash MCP setup** for the current authoring contract and
available operations. Follow the relevant issue, import, export or publishing guide when
that action is requested; do not rely on memorized tool names or schemas.

1. Resolve live permissions, the target layer and its current revision before changing it.
   Inspect only the entities and dependencies needed for the requested outcome.
2. Reuse matching entities and resolve physical sources through the supported discovery
   workflow. Never invent identifiers, source matches or aggregation capabilities.
3. Choose the documented authoring route for the change. Resolve ambiguities before writing,
   preview where supported, and validate and re-read the resulting layer. Do not assemble
   persisted documents or guessed API calls to bypass the workflow.
4. After a stale-revision or concurrency error, re-read and prepare the change again. Preserve
   other work and report an unchanged result honestly.
5. Treat draft edits, named versions, exports and publication as distinct outcomes. Imports,
   publication, destructive changes and suggested upstream repairs require user intent for
   those actions. Follow the current revision guarantees before a release, and never claim
   a draft or named version was published.

If access or a supported operation is unavailable, report the blocker and required access.
Use `astrato-data-discovery` for read-only analytical investigation and `astrato-dashboard`
for dashboard construction; neither independently authorizes model publication.
