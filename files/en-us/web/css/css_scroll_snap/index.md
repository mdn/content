---
title: CSS Scroll Snap
slug: Web/CSS/CSS_Scroll_Snap
page-type: css-module
spec-urls: https://drafts.csswg.org/css-scroll-snap/
---

{{CSSRef}}

**CSS Scroll Snap** is a module of CSS that contains features to control panning and scrolling behavior with snap positions.

## Key concepts

CSS scroll snap enables snapping content as the user scrolls overflowing content within a {{Glossary("scroll container")}}. Scroll snap introduces scroll snap positions, which enforce the scroll positions that a scroll container's {{Glossary("scrollport")}} may end at after a scrolling operation has completed.

To enable scroll snapping, the scrolling behavior is defined on the scroll container. The container's {{cssxref("scroll-snap-type")}} property defines whether the scrollable viewport can be snapped to, the axis upon which the snapping occurs, and whether snapping is required or optional. To enable scrolling, the container should have a defined size and {{cssxref("overflow")}} must be enabled. There are optional {{cssxref("scroll-padding")}} properties that can be set on the scroll container to create a snapping offset.

The {{cssxref("scroll-snap-align")}} property is set on every child of the scroll container, defining each child's snap position or lack thereof. The {{cssxref("scroll-snap-stop")}} property enables requiring that child is snapped to during scrolling and not passed over. There are several {{cssxref("scroll-margin")}} properties that can be set on the snapped-to child elements to create an outset from the defined box.

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

## Specifications

{{Specifications}}

## See also

- [Well-controlled scrolling with CSS Scroll Snap](https://web.dev/css-scroll-snap/)
- [Practical CSS scroll snapping/](https://css-tricks.com/practical-css-scroll-snapping/)
- [CSS Scroll Snap](https://12daysofweb.dev/2022/css-scroll-snap/)
- [Scroll snap examples on Codepen](https://codepen.io/collection/KpqBGW)
