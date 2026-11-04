---
name: astrato-app-motion
description: >-
  Add shaders, ambient backgrounds and animations to an Astrato App without hurting performance
  or legibility. Use when asked for a more energetic, premium or on-brand feel, when a page is flat
  white cards, or when adding any animated background, shader, transition or entrance effect.
---

# Add motion that costs almost nothing

Motion should give a page character, never compete with the data or slow the app. Use this skill
alongside `astrato-dashboard-design` for the visual direction and `astrato-visualizations` for chart
animation; if a companion is unavailable, use the current documentation on that topic.

## Read the documentation first

The documentation base URL is `https://docs.astrato.io`.

Fetch its `/llms.txt`. Read **Theming** for tokens and colour roles, the **Visualizations reference**
section on chart animations for reduced-motion controls, **Loaders** for loading states, and the
**Visual essay style** and **Long-form layout** pages for how motion respects reader preferences.
Current documentation takes precedence over this skill.

## When to add it

- Motion is a choice, not a default. Add a subtle ambient layer when it suits the subject and
  reader, or when the user asks for energy, polish or a branded atmosphere.
- Skip it for dense operational views where it adds nothing, and when the user wants a restrained
  result. Ask for direction before adding it when the context is formal.
- Derive the look from the brand's own colours and shapes; see `astrato-app-brand` when a company is
  named.

## Keep the cost low

- Use one lightweight background layer for the whole page, not one effect per card. Prefer CSS
  transitions and transforms; use a single canvas or shader only when a pattern cannot be done in CSS.
- Animate only properties that avoid layout and repaint of the data, and never move or resize
  elements readers are trying to use.
- Cap the work: few shapes, a limited frame rate and pixel density, and no per-frame allocation.
- Stop drawing when the tab is hidden or the layer is off screen.
- Keep it behind the content, low in contrast and low in saturation so figures stay legible, and keep
  pointer events away from it so it never intercepts clicks.
- Respect the reader's reduced-motion setting: render a still frame or nothing, and resume only if
  the setting changes. Apply the same setting to chart animation through the documented controls.
- Do not animate on every data refresh. Use the documented loading treatment for waiting, and chart
  animation controls for transitions.

## Verify

Check that scrolling, filtering and chart interactions feel the same with the effect on and off, that
contrast of text over the layer still meets the documented thresholds in light and dark, that the
effect is still when reduced motion is requested, and that it stops while the tab is in the
background. If the page feels slower on a throttled device, remove or simplify the effect.
