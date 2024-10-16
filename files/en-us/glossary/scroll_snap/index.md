---
title: Scroll snap
slug: Glossary/Scroll_snap
page-type: glossary-definition
---

{{GlossarySidebar}}

**Scroll snapping** is when content "snaps" to a specific position, rather than stopping at any random point, when a scroll operation finishes. Normal scrolling operations lack precision. They don't align to a paragraph, a sentence, or an image boundary. For example, in a carousel, a scrolling operation could finish in the middle of an image, leaving it partially visible. Web developers have long relied on JavaScript-based solutions to control scrolling and address this shortcoming default behavior.

Now CSS supports the scroll snap feature out of the box. The feature provides a well-controlled scrolling experience. Web developers can mark each [scroll container](/en-US/docs/Glossary/Scroll_container) with boundaries for scroll operations. The scroll operations then finish at these boundaries (snap positions). In the above carousel example, as the user finishes scrolling the carousel, its visible image will snap into place.

- `Scroll snap container`

  - : If a box has {{CSSXref("scroll-snap-type")}} set to a value other than `none`, then the box captures snap positions. A box's **scroll snap container** is a box's nearest snap-position capturing scroll container ancestor.

- `Snapport`

  - : The **snapport** is the area of the [scrollport](/en-US/docs/Glossary/Scroll_container#scrollport) defined using {{CSSXref("scroll-padding")}} property set on the scroll container. When calculating snap positions, the area is used as the alignment container for the scroll snap areas. By default, it is the same as the scroll container's visual viewport. The [snap areas](#snap_area) are aligned to the scrollport.

- `Snap area`
  - : The **snap area** of an element in a scroll container is the area defined using {{CSSXref("scroll-margin")}} outsets specified on the element. The snap area is used to snap the element to its snapport.

## See also

- [CSS scroll snap](/en-US/docs/Web/CSS/CSS_scroll_snap)
- {{CSSXref("scroll-snap-type")}}
- {{CSSXref("scroll-snap-align")}}
- {{CSSXref("scroll-padding")}}
- {{CSSXref("scroll-margin")}}
