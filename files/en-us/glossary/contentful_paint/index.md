---
title: Contentful paint
slug: Glossary/Contentful_paint
page-type: glossary-definition
sidebar: glossarysidebar
---

Several performance metrics like {{Glossary("First_contentful_paint", "First Contentful Paint (FCP)")}}, {{Glossary("Largest_contentful_paint", "Largest Contentful Paint (LCP)")}} use the concept of a "contentful paint".

This is used to differentiate less important paints that contain no useful content for the user, for example just background color paints. For example, a page that loads, sets the background color, but then shows no actual content for a long period afterwards is not as useful as one that shows text, images or other content.

What exactly counts as "content" is somewhat difficult to define precisely and so is to some extend heuristic-based and may not perfectly align to user perception or developer intent. These means some paints drawn to screen in different ways (for example, using different HTML elements), may count as "contentful" or not even if they appear to be the same to the user.

The types of contentful paints considered, also differs slightly between the metrics:

- FCP is intended to measure when the page starts to load. It therefore [includes most elements that paint](https://w3c.github.io/paint-timing/#contentful) including `<canvas>` and `<svg>` elements. Skeleton screens using just `<div>` elements would not count as contentful.
- LCP is intended to measure when the page is mostly loaded and ready for the user, so it tries to ensure there is meaningful content before triggering. It has stricter criteria and only includes [timing-eligible](https://w3c.github.io/paint-timing/#timing-eligible) elements and so does not include `<canvas>` nor `<svg>` elements, since those are more difficult to measure if representative of when the largest content of the page if drawn. Furthermore, LCP also excludes low-entropy images.
- Other metrics like {{domxref("InteractionContentfulPaint", "Interaction Contentful Paint")}}, {{domxref("PerformanceSoftNavigation", "soft navigations")}}, {{domxref("PerformanceElementTiming", "Element Timing")}}, and the upcoming [Container Timing](https://github.com/WICG/container-timing) are closer to the LCP model with some small differences like low-entropy images not being excluded.

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
