---
title: Contentful paint
slug: Glossary/Contentful_paint
page-type: glossary-definition
sidebar: glossarysidebar
---

Several performance metrics such as {{Glossary("First_contentful_paint", "First Contentful Paint (FCP)")}} and {{Glossary("Largest_contentful_paint", "Largest Contentful Paint (LCP)")}} use the concept of a "contentful paint".

Contentful paints are paint operations that render significant content and are therefore significant for performance measurements. These stand apart from less important paints that contain no useful content for the user, such as background color paints. For example, a page that loads, sets the background color, but then shows no actual content for a long period afterwards is not as useful as one that shows text, images, or other content.

What exactly counts as "content" is heuristic-based to some extent and may not perfectly align with user perception or developer intent. This means paints drawn to screen in different ways may count as "contentful" or not, even if they appear the same to the user. For example, using a {{htmlelement("div")}} with a background color would not be contentful, while using an {{htmlelement("img")}} or {{svgelement("svg")}} for that color may be considered contentful.

The types of paints considered contentful also differ slightly between metrics:

- FCP is intended to measure when the page starts to load. It therefore [includes most elements that paint](https://w3c.github.io/paint-timing/#contentful) including {{htmlelement("canvas")}} and `<svg>` elements. Skeleton screens using only `<div>` elements would not count as contentful.
- LCP is intended to measure when the page is mostly loaded and ready for the user, so it tries to ensure there is meaningful content before triggering. It has stricter criteria than FCP, only counting [timing-eligible](https://w3c.github.io/paint-timing/#timing-eligible) elements as contentful. It therefore doesn't include `<canvas>` or `<svg>` elements, since those are more difficult to measure in terms of when (or even if) they are representative of the largest content drawn on the page. Furthermore, LCP also excludes low-entropy images.
- Other metrics like [Interaction Contentful Paint](/en-US/docs/Web/API/InteractionContentfulPaint), [soft navigations](/en-US/docs/Web/API/PerformanceSoftNavigation), [Element Timing](/en-US/docs/Web/API/PerformanceElementTiming), and the upcoming [Container Timing](https://github.com/WICG/container-timing) are closer to the LCP model with some small differences like low-entropy images not being excluded.

## See also

- Related glossary terms:
  - {{Glossary("First Contentful Paint")}}
  - {{Glossary("Largest Contentful Paint")}}
- Performance APIs
  - {{domxref("InteractionContentfulPaint")}}
  - {{domxref("LargestContentfulPaint")}}
  - {{domxref("PerformanceElementTiming")}}
  - {{domxref("PerformancePaintTiming")}}
  - {{domxref("PerformanceSoftNavigation")}}
