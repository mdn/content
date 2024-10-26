---
title: Scroll snap
slug: Glossary/Scroll_snap
page-type: glossary-definition
---

{{GlossarySidebar}}

**Scroll snapping** is when content "snaps" to a specific position, rather than stopping at any random point, when a scroll operation finishes. Normal scrolling operations lack precision. They don't align to a paragraph, a sentence, or an image boundary. For example, in a carousel, a scrolling operation could finish in the middle of an image, leaving it partially visible. Web developers have long relied on JavaScript-based solutions. Browsers have recently started supporting [CSS scroll-snapping features](/en-US/docs/Web/CSS/CSS_scroll_snap) that enable defining scroll-snap containers and snapping behaviors.

Scroll snapping is a well-controlled scrolling experience, whereby developers define an element as a [scroll container](/en-US/docs/Glossary/Scroll_container) with boundaries for scroll operations. Scroll operations then finish at these snap position boundaries, with the scrolled to content snapping into place. In the above carousel example, as the user finishes scrolling the carousel, its visible image will snap into place.

- `Scroll snap container`

  - : The **scroll snap container** is a scroll container with scroll snapping applied. For example, if a box has overflowing content and a {{CSSXref("scroll-snap-type")}} set to a value other than `none`, then the box captures snap positions. A box's scroll snap container is the element's nearest snap-position capturing scroll container ancestor. If a box has no scroll snap container, its snap positions, if any, will not trigger snapping.

- `Snapport`

  - : The **snapport** ​is the area of the [scrollport](/en-US/docs/Glossary/Scroll_container#scrollport) that is used as the alignment container for the scroll snap areas when calculating snap positions. By default, it is the same as the scroll container's visual viewport, but is the area of the scrollport defined by the {{CSSXref("scroll-padding")}} property. The [snap areas](#snap_area) are aligned to the scrollport.

- `Snap area`
  - : The **snap area** of an element in a scroll container is the area defined using {{CSSXref("scroll-margin")}} outsets specified on the element. The snap area is used to snap the element to its snapport.

## See also

- {{CSSXref("scroll-snap-type")}}
- {{CSSXref("scroll-snap-align")}}
- {{CSSXref("scroll-padding")}}
- {{CSSXref("scroll-margin")}}
- [CSS scroll snap](/en-US/docs/Web/CSS/CSS_scroll_snap) module
