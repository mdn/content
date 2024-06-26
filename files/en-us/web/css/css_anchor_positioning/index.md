---
title: CSS anchor positioning
slug: Web/CSS/CSS_anchor_positioning
page-type: css-module
spec-urls: https://drafts.csswg.org/css-anchor-position-1/
---

{{CSSRef}}

The **CSS anchor positioning** module defines features that allow you to tether elements together. Certain elements are defined as **anchor elements**; **anchor-positioned** elements can then have their size and position set based on the size and location of the anchor elements to which they are bound.

In addition, the specification provides CSS-only mechanisms to:

- Specify a set of alternative positions for an anchored element; when the default rendering position causes it to overflow its containing block and/or be rendered offscreen, the browser will try rendering the anchored element in the alternative positions instead.
- Declare conditions under which anchor-positioned elements should be hidden, in situations where it is not appropriate to tether them to anchor elements.

## Reference

### Properties

- {{cssxref("anchor-name")}}
- {{cssxref("anchor-scope")}}
- {{cssxref("inset-area")}}
- {{cssxref("position-anchor")}}
- {{cssxref("position-try")}}
- {{cssxref("position-try-options")}}
- {{cssxref("position-try-order")}}
- {{cssxref("position-visibility")}}

### At-rules and descriptors

- {{cssxref("@position-try")}}

### Functions

- [`anchor()`](/en-US/docs/Web/CSS/anchor)
- [`anchor-size()`](/en-US/docs/Web/CSS/anchor-size)
- [`inset-area()`](/en-US/docs/Web/CSS/inset-area_function)

### Data types and values

- [`anchor-center`](/en-US/docs/Web/CSS/CSS_anchor_positioning/Using#centering_on_the_anchor_using_anchor-center)
- [`<anchor-side>`](/en-US/docs/Web/CSS/anchor#anchor-side)
- [`<anchor-size>`](/en-US/docs/Web/CSS/anchor-size#anchor-size)
- [`<inset-area>`](/en-US/docs/Web/CSS/inset-area_value)
- [`<try-side>`](/en-US/docs/Web/CSS/position-try-order#try-side)
- [`<try-tactic>`](/en-US/docs/Web/CSS/position-try-options#try-tactic)

### HTML attributes

- [`anchor`](/en-US/docs/Web/HTML/Global_attributes/anchor) {{non-standard_inline}}

### Interfaces

- {{domxref("CSSPositionTryDescriptors")}}
- {{domxref("CSSPositionTryRule")}}
- {{domxref("HTMLElement.anchorElement")}} {{non-standard_inline}}

## Guides

- [Using CSS anchor positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning/Using)

  - : An introductory guide to fundamental anchor positioning concepts, including associating, positioning, and sizing elements relative to their anchor.

- [Handling overflow: try options and conditional hiding](/en-US/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding)

  - : A guide to the mechanisms CSS anchor positioning provides to prevent anchor-positioned elements from overflowing their containing elements or the viewport, including position try options and conditionally hiding elements.

## Related concepts

- [CSS logical properties and values](/en-US/docs/Web/CSS/CSS_logical_properties_and_values) module:
  - {{cssxref("inset-block-start")}}
  - {{cssxref("inset-block-end")}}
  - {{cssxref("inset-inline-start")}}
  - {{cssxref("inset-inline-end")}}
  - {{cssxref("inset-block")}}
  - {{cssxref("inset-inline")}}
  - {{cssxref("inset")}} shorthand
  - {{cssxref("inline-size")}}
  - {{cssxref("min-block-size")}}
  - {{cssxref("min-inline-size")}}
  - {{cssxref("max-block-size")}}
  - {{cssxref("max-inline-size")}}
  - [Inset properties](/en-US/docs/Glossary/Inset_properties) glossary term
- [CSS positioned layout](/en-US/docs/Web/CSS/CSS_positioned_layout) module:
  - {{cssxref("top")}}
  - {{cssxref("left")}}
  - {{cssxref("bottom")}}
  - {{cssxref("right")}}
- [CSS box model](/en-US/docs/Web/CSS/CSS_box_model) module:
  - {{cssxref("width")}}
  - {{cssxref("height")}}
  - {{cssxref("min-width")}}
  - {{cssxref("min-height")}}
  - {{cssxref("max-width")}}
  - {{cssxref("max-height")}}
  - {{cssxref("block-size")}}
- [CSS box alignment](/en-US/docs/Web/CSS/CSS_box_alignment) module:
  - {{cssxref("align-items")}}
  - {{cssxref("align-self")}}
  - {{cssxref("justify-items")}}
  - {{cssxref("justify-self")}}
  - {{cssxref("place-items")}}
  - {{cssxref("place-self")}}

## Specifications

{{Specifications}}

## See also

- [Learn: CSS positioning](/en-US/docs/Learn/CSS/CSS_layout/Positioning)
- [CSS logical properties and values](/en-US/docs/Web/CSS/CSS_logical_properties_and_values) module
- [Sizing items in CSS](/en-US/docs/Learn/CSS/Building_blocks/Sizing_items_in_CSS)
