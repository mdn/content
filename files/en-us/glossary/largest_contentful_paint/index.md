---
title: Largest Contentful Paint (LCP)
slug: Glossary/Largest_contentful_paint
page-type: glossary-definition
---

{{GlossarySidebar}}

The **Largest Contentful Paint** (LCP) performance metric provides the render time of the largest image or text block visible within the viewport, recorded from when the page first begins to load.

The following elements are considered when determining the LCP:

- {{HTMLElement("img")}} elements.
- [`<image>`](/en-US/docs/Web/SVG/Element/image) elements inside an SVG.
- The poster images of {{HTMLElement("video")}} elements.
- Elements with a {{cssxref("background-image")}}.
- Groups of text nodes, such as {{HTMLElement("p")}}.

## See also

- [`LargestContentfulPaint`](/en-US/docs/Web/API/LargestContentfulPaint)
- Related glossary terms:
  - {{Glossary("First Contentful Paint")}}
  - {{Glossary("First Paint")}}
