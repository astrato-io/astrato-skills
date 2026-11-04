---
name: astrato-app-sparklines
description: >-
  Add trend context to an Astrato App or dashboard: sparklines on KPI cards and in table columns.
  Use when building or restyling a dashboard, scorecard, league table or any view where readers need
  the direction of a number as well as its value, or when asked for sparklines or mini charts.
---

# Show trends as sparklines

A number without its trend forces a reader to open another view to learn whether it is rising,
falling or seasonal. Sparklines answer that in place. Use this skill alongside
`astrato-dashboard-design` for layout and `astrato-visualizations` for implementation; if a
companion is unavailable, use the current documentation on that topic.

## Read the documentation first

The documentation base URL is `https://docs.astrato.io`.

Fetch its `/llms.txt`. Read the **KPI card** component page for how a card carries value, change
and trend, the **Edward Tufte** expert page for sparklines and small multiples, and the **table
operations** page for how a column becomes a sparkline. Read **App limitations** before choosing
the route, and **Loaders** for loading states. Current documentation takes precedence over
this skill; do not rely on remembered operation names.

## Decide where a trend belongs

- **KPI cards.** Give each headline measure a sparkline when the direction over recent periods
  changes how it is read. A card for a measure with no meaningful time axis stays value-only.
  Keep the number of cards small; a trend does not justify adding more of them.
- **Tables.** When a table lists items such as products, regions or accounts, add a sparkline column
  for its main measure so every row shows its own trend beside its value. Prefer this to a separate
  chart per item.
- **Everywhere else.** Choose a normal chart. A sparkline is a compact companion to a figure, not a
  replacement for a chart someone must read closely.

## Make them honest and consistent

- Draw every sparkline in a set over the same period, grain and date field, so rows and cards can be
  compared. State the window once, in a caption or header, rather than on each mark.
- Show no axes, gridlines or labels. Keep the current value, change or extremes as text beside it.
- Do not rescale one mark to look dramatic. If rows differ greatly in size, say whether marks share
  a scale or each uses its own, and use one rule throughout.
- Use the accent colour for neutral trends. Reserve semantic colours for a stated good or bad
  direction, and do not rely on colour alone; the adjacent figure or label carries the direction.
- When the trend says something the figure does not, such as a record low, expose that sentence to
  assistive technology.
- Handle thin data. With too few periods or gaps, show nothing rather than a misleading line, and say
  so where a reader would look for it.
- Treat the sparkline as part of the same answer as its figure: it loads, refreshes and responds to
  filters with it.

## Verify

Check that every figure with a sparkline changes when the filters do, that windows and scales match
across the set, and that empty or sparse series degrade cleanly at the narrowest supported width.
