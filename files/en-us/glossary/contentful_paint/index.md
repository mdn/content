---
title: Contentful paint
slug: Glossary/Contentful_paint
page-type: glossary-definition
sidebar: glossarysidebar
---

Several performance metrics like {{Glossary("First_contentful_paint", "First Contentful Paint (FCP)")}}, {{Glossary("Largest_contentful_paint", "Largest Contentful Paint (LCP)")}} use the concept of a "contentful paint". This is used to differentiate less important paints that contain no useful content for the user, for example just color paints.

A page that loads, sets the background color, but then shows no actual content for a long period afterwards is not as useful as one that shows text, images or other content.

What exactly counts as "content" are somewhat heuristic-based and differs between some of these metrics. These means some images drawn to screen in different ways (using different elements), may count as "contentful" or not even if they appear to be the same to the user.

Whether a paint is "contentful" also diffs between metrics:

- FCP [includes most elements that paint](https://w3c.github.io/paint-timing/#contentful) including `<canvas>` and `<svg>` elements. Skeleton screens using just `<div>` elements would not count as contentful. This is because FCP is intended to measure when the page starts to load.
- LCP has stricter criteria and only includes [timing-eligible](https://w3c.github.io/paint-timing/#timing-eligible) elements and so does not include `<canvas>` nor `<svg>` elements. It also excludes low-entropy images. This is because LCP is intended to measure when the page is mostly loaded and ready for the user, so it tries to ensure there is meaningful content before triggering.

Other metrics like {{domxref("InteractionContentfulPaint", "Interaction Contentful Paint")}}, {{domxref("PerformanceSoftNavigation", "soft navigations")}}, {{domxref("PerformanceElementTiming", "Element Timing")}}, and the upcoming [Container Timing](https://github.com/WICG/container-timing) follow the LCP model.

## See also

- Related glossary terms:
  - {{Glossary("First_contentful_paint")}}
  - {{Glossary("Largest_contentful_paint")}}
