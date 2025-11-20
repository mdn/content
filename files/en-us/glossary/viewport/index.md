---
title: Viewport
slug: Glossary/Viewport
page-type: glossary-definition
sidebar: glossarysidebar
---

In computer graphics, a **viewport** represents a polygonal (normally rectangular) area that is currently being viewed.

In web browser terms, it refers to the part of the document being viewed in the browser window (or on-screen, if the document is being viewed on a mobile browser or a desktop browser in full-screen mode). Content outside the viewport is not visible onscreen until scrolled into view.

The portion of the viewport that is currently visible is called the **{{Glossary("visual viewport")}}**. This can be smaller than the layout viewport, such as when the user has pinched-zoomed. The {{Glossary("layout viewport")}} remains the same, but the visual viewport became smaller.

The visual viewport of an {{htmlelement("iframe")}}, {{svgelement("svg")}}, or {{htmlelement("object")}} element is the size of the inner width and height of the respective element, rather than the parent document. For content rendered inside the element, the visual viewport and layout viewport are the same.

## See also

- {{Glossary("Visual viewport")}}
- {{Glossary("Layout viewport")}}
- [Viewport concepts](/en-US/docs/Web/CSS/Guides/CSSOM_view/Viewport_concepts)
- [CSSOM view](/en-US/docs/Web/CSS/Guides/CSSOM_view) module
- [CSSOM view API](/en-US/docs/Web/API/CSSOM_view_API)
- [Viewport](https://en.wikipedia.org/wiki/Viewport) on Wikipedia
- [A tale of two viewports](https://www.quirksmode.org/mobile/viewports.html) (Quirksmode)
