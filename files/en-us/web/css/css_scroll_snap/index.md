---
title: CSS Scroll Snap
slug: Web/CSS/CSS_Scroll_Snap
page-type: css-module
spec-urls: https://drafts.csswg.org/css-scroll-snap/
---

{{CSSRef}}

The **CSS scroll snap** module contains features to control panning and scrolling behavior with snap positions. Scroll snap properties can be used to define the location of a scroll container's scrollport as users scroll thru content. Content can be snapped into position as the user scrolls overflowing content within a {{Glossary("scroll container")}}, providing paging and scroll positioning.

This module includes the scroll container scroll-padding properties to adjust the optimal viewing region of paging during scroll-into-view operations. It also includes scroll-margin and scroll-alignment properties, set on the scroll container's children, to adjust the children's visual area when that child is scrolled into view.

## Scroll snap in action

## Reference

### Properties on containers

- {{cssxref("scroll-snap-type")}}
- {{cssxref("scroll-padding")}}
  - {{cssxref("scroll-padding-top")}}
  - {{cssxref("scroll-padding-right")}}
  - {{cssxref("scroll-padding-bottom")}}
  - {{cssxref("scroll-padding-left")}}
  - {{cssxref("scroll-padding-inline")}}
  - {{cssxref("scroll-padding-inline-start")}}
  - {{cssxref("scroll-padding-inline-end")}}
  - {{cssxref("scroll-padding-block")}}
  - {{cssxref("scroll-padding-block-start")}}
  - {{cssxref("scroll-padding-block-end")}}

### Properties on children

- {{cssxref("scroll-snap-align")}}
- {{cssxref("scroll-margin")}}
  - {{cssxref("scroll-margin-top")}}
  - {{cssxref("scroll-margin-right")}}
  - {{cssxref("scroll-margin-bottom")}}
  - {{cssxref("scroll-margin-left")}}
  - {{cssxref("scroll-margin-inline")}}
  - {{cssxref("scroll-margin-inline-start")}}
  - {{cssxref("scroll-margin-inline-end")}}
  - {{cssxref("scroll-margin-block")}}
  - {{cssxref("scroll-margin-block-start")}}
  - {{cssxref("scroll-margin-block-end")}}
- {{cssxref("scroll-snap-stop")}}

### Glossary terms

- {{Glossary("scroll container")}}
- {{Glossary("scrollport")}}

## Guides

- [Basic concepts of CSS Scroll Snap](/en-US/docs/Web/CSS/CSS_Scroll_Snap/Basic_concepts)

## Related concepts

- {{cssxref(":target")}} pseudo-class, or the target of
- {{domxref("scrollBy()")}} method
- {{domxref("scrollIntoView()")}} method
- {{domxref("scrollTo()")}} method
- overflow
scroll container
scroll position
scroll-behavior
scrollable overflow area
scrollport

## Specifications

{{Specifications}}

## See also

- [CSS logical properties](/en-US/docs/Web/CSS/CSS_Logical_Properties)
- [CSS overflow](/en-US/docs/Web/CSS/CSS_Overflow) module
- [CSS scrollbars style](/en-US/docs/Web/CSS/CSS_Scrollbars) module
- [Well-controlled scrolling with CSS Scroll Snap](https://web.dev/css-scroll-snap/)
- [Practical CSS scroll snapping/](https://css-tricks.com/practical-css-scroll-snapping/)
- [CSS Scroll Snap](https://12daysofweb.dev/2022/css-scroll-snap/)
- [Scroll snap examples on Codepen](https://codepen.io/collection/KpqBGW)
- [Keyboard-only scrolling areas](https://adrianroselli.com/2022/06/keyboard-only-scrolling-areas.html) on adrianroselli.com (November 28, 2022)
