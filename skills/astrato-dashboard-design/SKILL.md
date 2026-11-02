---
name: astrato-dashboard-design
description: >-
  Design or restyle an Astrato dashboard using its analytical questions, verified data,
  user direction and existing design. Preserves metrics and interactions during a restyle.
---

# Design an Astrato dashboard

The documentation base is `https://docs.astrato.io`. Start at its `/llms.txt`, reuse pages
already read in this task, and follow only relevant links. Current documentation takes
precedence over this skill.

Read **Compose a dashboard page**, including **Lead with a business story**, for a new design
and **Choose a chart** for chart choices. Read **Motion and texture** for a new app or when
presentation motion changes.
Follow only the selected layout, style and component guides. For a restyle, read the guides
for the changed parts; use **Layout and responsiveness**, **Theming** and **Verifying an app**
when those concerns change.

- For a multi-tab app or a set of apps, follow **Multi-tab apps** and **A gallery of apps**:
  one finding-led headline and one hero per tab, and a distinct experience per app.
- Reuse the user's direction and the project's design system. Connect each view to its
  analytical question and organize summary, explanation and detail in a clear reading order.
- Inventory a supplied reference through the composition guide before reproducing it.
  Preserve its intended behavior and explain unsupported or deliberate differences.
- Choose forms and space together so labels, comparisons and controls remain readable at
  the target sizes. Follow the layout guide's defaults and scrolling rules rather than
  imposing a fixed desktop grid on every dashboard.
- Preserve category and state meaning across related views and selections. Follow the
  chart and theming guides for supported encodings, contrast and optional starting palettes.
- Give a new app one quiet, decorative ambient layer that stays in view, in the sticky header and
  any page whitespace, and never carries information. Keep it low contrast in every theme, behind
  data rather than under it, with a designed fallback. Treat other motion and texture as optional
  suggestions. Follow **Motion and texture** for what suits the navigation type and subject.
- For a restyle, preserve metric definitions and interactions. Revisit data discovery only
  when the requested presentation exposes an unresolved analytical requirement.

Use `astrato-visualizations` for implementation or **Mounting objects** when it is unavailable.
Let `astrato-dashboard` coordinate a complete build; design work alone does not authorize
model changes or publication.
