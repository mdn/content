---
title: Layout viewport
slug: Glossary/Layout_viewport
page-type: glossary-definition
sidebar: glossarysidebar
---

The **layout viewport** is the {{glossary("viewport")}} into which the browser draws a web page. Essentially, it represents what is available to be seen, whereas the {{Glossary("visual viewport")}} represents the currently visible portion of the layout viewport, the currently visible subsection of the layout viewport that is currently visible on the user's display device.

This becomes important, for example, on mobile devices, where a pinching gesture can usually be used to zoom in and out on a site's contents. The rendered document doesn't change in any way, so the layout viewport remains the same as the user adjusts the zoom level. Instead, the visual viewport is updated to indicate the area of the page that they can see.

## See also

- {{Glossary("Viewport")}}
- {{Glossary("Visual viewport")}}
- [Viewport concepts](/en-US/docs/Web/CSS/Guides/CSSOM_view/Viewport_concepts)
- [CSSOM view](/en-US/docs/Web/CSS/Guides/CSSOM_view) module
- [CSSOM view API](/en-US/docs/Web/API/CSSOM_view_API)
- [Viewport](https://en.wikipedia.org/wiki/Viewport) on Wikipedia
- [A tale of two viewports](https://www.quirksmode.org/mobile/viewports.html) (Quirksmode)
