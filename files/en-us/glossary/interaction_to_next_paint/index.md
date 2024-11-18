---
title: Interaction to Next Paint
slug: Glossary/Interaction_to_next_paint
page-type: glossary-definition
---

{{GlossarySidebar}}

**Interaction to Next Paint** (INP) measures the responsiveness of a website to user interactions (i.e. when they click a link, tap on a button, or use a custom, JavaScript-powered control).

It was designed by Google as one of the [Core Web Vital](https://web.dev/articles/vitals) metrics and replaced {{Glossary("first input delay")}} (FID) as a Core Web Vitals in May 2024. There are two key differences between FID and INP, that make INP a better measure of a page's responsiveness:

- FID measures only the first interaction, while INP considers all interaction
- FID only measure the input delay of the interaction, while INP measures for longer until the first paint after the interaction processing starts.

INP measure the worst length of time (minus some outliers), in milliseconds, between the user interaction on a web page and the next frame presentation after that interaction is processed. Scrolling and zooming are not included in this metric. INP is calculated using the [Event Timing API](/en-US/docs/Web/API/PerformanceEventTiming). Async operations (such as network fetches, or file reads) usually do not delay INP as a paint happens while those are asyncronously handled.

All eligible interactions throughout the life of the page are considered. For highly interactive pages of 50 or more interactions the 98th percentile is used to exclude some extreme outliers that are not reflective of the overall responsiveness of the page.

The longer the delay, the worse the user experience. The [Long Animation Frame API](/en-US/docs/Web/API/Performance_API/Long_animation_frame_timing) can help identify causes of high INP.

## See also

- [INP](https://web.dev/articles/inp) on web.dev (2023)
- [Optimizing INP](https://web.dev/articles/optimizing-inp) on web.dev (2023)
- [Interaction to Next Paint is officially a Core Web Vital](https://web.dev/blog/inp-cwv-launch) on web.dev (2024)
- [PerformanceEventTiming](/en-US/docs/Web/API/PerformanceEventTiming)
- [Long animation frame timing](/en-US/docs/Web/API/Performance_API/Long_animation_frame_timing)
