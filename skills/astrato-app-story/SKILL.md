---
name: astrato-app-story
description: >-
  Build a Vox-style narrated data story inside an Astrato App: a short script read aloud with Google
  voices, captions on screen, and one chart that draws itself in sync with the narration. Use when
  asked for a data story, explainer, narrated walkthrough, "video-style" insight or voice-over of a
  chart.
---

# Narrated data stories

A story explains one thing in about two minutes. A voice reads a short script, the sentence is
captioned, and a single chart draws itself as the voice reaches the relevant words. Use
`astrato-visualizations` for the chart forms and `astrato-app-motion` for animation restraint.

## Prompt template

Fill in the bracketed parts, or ask the user for them.

> Build a Vox-style video explainer about **[topic / question]**, using **[dataset or semantic layer]**.
>
> **Format**
> - 5-6 short beats, about 20 seconds each (roughly two minutes). Each beat makes one claim.
> - Open with a hook, build to the cause, end on what to do about it.
> - Write for the ear: plain spoken English, short sentences. Say numbers the way a person would
>   ("about two thirds", not "66.7%"). Avoid jargon and parentheses.
>
> **Narration**
> - Read aloud with Google voices (browser speech synthesis or Google Cloud TTS). Give the viewer a
>   voice picker with a preview, a speed control and mute, and remember their choice.
> - Show the current sentence as captions, lighting the words up as they are spoken.
> - If the voice reports word boundaries, use them for timing. Otherwise estimate from text length
>   (about 14 characters a second at normal speed). The stage only ever asks "has the voice reached
>   this phrase yet?"
>
> **Chart in sync with the voice**
> - Each beat has exactly one visual: a big number, a line, or bars.
> - The chart draws in step with the narration. Attach cues to phrases in the script, so the line
>   draws when the narrator says the number and the comparison appears on "versus last year".
> - Animate with restraint: lines draw left to right, bars grow from zero, pulse the one thing the
>   sentence is about and dim the rest.
>
> **Data**
> - Never hard-code a figure. Query every number when the story plays, and fail loudly if one is
>   missing.
> - If the story needs a pattern the data does not contain, say what to plant.
>
> **Output**
> - A full-screen stage with play/pause, back/next beat and a progress bar by beat.
> - Dark, calm, editorial: large type, generous space, one accent colour.

## Structure that works

- A story is a chapter of beats. Each beat has a headline, a line of narration, one visual and a list
  of cues.
- A cue is `{ at: '<exact phrase in the narration>', cue: '<chart event>' }`. Build the narration
  string from the queried values, then cue on phrases that are stable regardless of the number.
- Keep one shared fetch per measure across beats so the story loads once.
- Pause briefly between beats so the chart change lands before the next sentence starts.

## Pitfalls

- Speech engines drop or mangle text around decimal points and symbols. Format numbers into words
  before speaking, and test a figure like 3.4.
- Chrome's Google voices report no word boundaries, so timing is estimated; check the cue lands on
  the right phrase at both slow and fast speeds.
- Voices differ per viewer's machine. Rank what is installed rather than naming one voice.
- Never hard-code a figure into the script; a cue that points at text that moved is silently missed.
