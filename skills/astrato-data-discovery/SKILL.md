---
name: astrato-data-discovery
description: >-
  Inspect an Astrato semantic layer or investigate an analytical question using live
  query evidence. Use for inventory and dashboard preparation; keeps the model unchanged.
---

# Discover Astrato data

The documentation base is `https://docs.astrato.io`. Start at its `/llms.txt`, reuse pages
already read in this task, and follow only relevant links. Current documentation takes
precedence over this skill.

Read **Semantic layer workflows** for scoped discovery and **Business questions guide**
for analytical execution. Use **Nash MCP setup** for access, and follow the relevant model and
period references only when the question needs them.

1. Resolve the target layer and available read/query access from the request or live context.
   Ask when the target is ambiguous; never invent identifiers or assume write permissions.
2. Search relevant metadata and expand only as needed. An inventory can be answered from
   metadata; analytical claims require queries. Reserve exhaustive discovery for that scope.
3. Prefer a matching complete Business Question or governed measures and dimensions. Verify
   queryability and metric grain, units, filters and relevant date coverage before interpreting
   values. Use bounded queries and distinguish samples from complete coverage.
4. Return findings with enough query context to reproduce and compare them: definitions,
   filters, parameters, limits, model state, observation time and relevant access context.
   Retain caveats, partial results and query failures without credentials. Stop when the
   requested question is answered.

Keep this workflow read-only. Identify required model changes for `astrato-semantic-layer`
when authoring is requested. For dashboard preparation, pass the verified findings to
**Compose a dashboard page**; proposed or inaccessible metrics remain unverified.
