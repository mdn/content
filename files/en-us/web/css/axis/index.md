---
title: <axis>
slug: Web/CSS/axis
page-type: css-type
browser-compat: css.types.axis
spec-urls: https://drafts.csswg.org/scroll-animations/#typedef-axis
sidebar: cssref
---

The **`<axis>`** {{glossary("enumerated")}} data type is a CSS keyword specifying the scrolling direction of the {{glossary("scroll container")}} that will control the [scroll timeline](/en-US/docs/Web/CSS/CSS_scroll-driven_animations/Timelines).

The `<axis>` keyword values are used in the following [CSS functions]() and properties:

- {{cssxref("scroll-timeline-axis")}}
- {{cssxref("scroll-timeline")}} shorthand
- {{cssxref("scroll()")}}
- {{cssxref("view-timeline-axis")}}
- {{cssxref("view-timeline")}} shorthand
- {{cssxref("view()")}}

## Syntax

Valid `<axis>` values:

- `block`
  - : The scrollbar on the block axis of the scroller element, which is the axis in the direction perpendicular to the flow of text within a line. For horizontal writing modes, such as standard English, this is the same as `y`, while for vertical writing modes, it is the same as `x`.
- `inline`
  - : The scrollbar on the inline axis of the scroller element, which is the axis in the direction parallel to the flow of text in a line. For horizontal writing modes, this is the same as `x`, while for vertical writing modes, this is the same as `y`.
- `y`
  - : The scrollbar on the vertical axis of the scroller element.
- `x`
  - : The scrollbar on the horizontal axis of the scroller element.

## Formal syntax

{{CSSSyntaxRaw(`<axis> = block | inline | x | y`)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("animation-timeline")}}
- [Scroll-driven animation timelines](/en-US/docs/Web/CSS/CSS_scroll-driven_animations/Timelines) guide
- [CSS scroll-driven animations](/en-US/docs/Web/CSS/CSS_scroll-driven_animations) module
