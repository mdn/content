---
title: Interaction to Next Paint (INP)
slug: Glossary/Interaction_to_next_paint
page-type: glossary-definition
---

{{GlossarySidebar}}

**Interaction to Next Paint** (INP) measures the responsiveness of a website to user interactions (for example, when they click a link, tap on a button, or use a custom, JavaScript-powered control).

INP was designed by Google as one of the [Core Web Vital](https://web.dev/articles/vitals) metrics, replacing {{Glossary("First Input Delay")}} (FID) in May 2024. There are two key differences between FID and INP that make INP a more reliable measure of a page's responsiveness:

- FID measures only the first user interaction, whereas INP considers all user interactions.
- FID only measures the input delay of the interaction, whereas INP measures for a longer period: beginning at the input delay, followed by the time it takes to process event handlers, and the browser's presentation time until the browser has painted the next frame.

INP measures the worst length of time (minus some outliers), in milliseconds, between the user interaction on a web page and the next frame presentation after that interaction is processed. Scrolling and zooming are not included in this metric. INP is calculated using the [Event Timing API](/en-US/docs/Web/API/PerformanceEventTiming). Asynchronous operations such as network fetches or file reads usually do not delay INP as painting can occur while such operations are handled.

All eligible interactions throughout the page lifetime are considered. For highly interactive pages of 50 or more interactions, the 98th percentile is used to exclude some extreme outliers that are not reflective of overall page responsiveness.

The longer the delay, the worse the user experience. The [Long Animation Frames API](/en-US/docs/Web/API/Performance_API/Long_animation_frame_timing) can help identify causes of high INP.

## See also

- [Long animation frame timing](/en-US/docs/Web/API/Performance_API/Long_animation_frame_timing)
- [PerformanceEventTiming](/en-US/docs/Web/API/PerformanceEventTiming)
- [INP](https://web.dev/articles/inp) on web.dev (2023)
- [Optimizing INP](https://web.dev/articles/optimizing-inp) on web.dev (2023)
- [Interaction to Next Paint is officially a Core Web Vital](https://web.dev/blog/inp-cwv-launch) on web.dev (2024)
