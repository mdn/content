---
title: CSS box sizing
slug: Web/CSS/CSS_box_sizing
page-type: css-module
spec-urls:
  - https://drafts.csswg.org/css-sizing-4/
  - https://drafts.csswg.org/css-sizing-3/
---

{{CSSRef}}

The **CSS box sizing** module extends the sizing box model properties with keywords that represent content-based "intrinsic" sizes and context-based "extrinsic" sizes, allowing CSS to more easily describe boxes that fit their content or fit into a particular layout context.

An element's height, width, along with [margin, padding](/en-US/docs/Web/CSS/CSS_box_model), and [border](/en-US/docs/Web/CSS/CSS_backgrounds_and_borders) properties, make up the CSS [box model](/en-US/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model). The size of the content areas are defined by various properties, including the sizing properties defined here.

Every visible element on a webpage is a box laid out according to the [visual formatting model](/en-US/docs/Web/CSS/Visual_formatting_model). CSS properties define the size, position, and stacking level of each box, with the page relative box sizing properties defined here, or the [logical sizing property](/en-US/docs/Web/CSS/CSS_logical_properties_and_values/Sizing) equivalents, define the intrinsic or extrinsic size.

Each box has a rectangular content area, with the padding being around the content, the border is around the padding, and the margin sits outside the border.

A box in CSS consists of a content area, which is where any text, images, or other HTML elements are displayed. This is optionally surrounded by padding, a border, and a margin, on one or more sides. The box model describes how these elements work together to create a box as displayed by CSS. To learn more about it read [Introduction to the CSS box model](/en-US/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model).

The CSS box sizing module defines the physical, or "page relative", padding and margin properties. Flow-relative properties, which relate to text direction, are defined in [Logical Properties and Values](/en-US/docs/Web/CSS/CSS_logical_properties_and_values).

## Reference

### Properties

- {{cssxref("aspect-ratio")}}
- {{cssxref("box-sizing")}}
- {{cssxref("contain-intrinsic-block-size")}}
- {{cssxref("contain-intrinsic-height")}}
- {{cssxref("contain-intrinsic-inline-size")}}
- {{cssxref("contain-intrinsic-size")}}
- {{cssxref("contain-intrinsic-width")}}
- {{cssxref("height")}}
- {{cssxref("max-height")}}
- {{cssxref("max-width")}}
- {{cssxref("min-height")}}
- {{cssxref("min-intrinsic-sizing")}}
- {{cssxref("min-width")}}
- {{cssxref("width")}}

### Data types and values

- {{cssxref("ratio")}} data type
- {{cssxref("min-content")}} value
- {{cssxref("max-content")}} value
- {{cssxref("fit-content")}} value
<!--
- `stretch` keyword
- `legacy` keyword
- `zero-if-scroll`
- `zero-if-extrinsic`
- `contain` keyword
  -->

### Functions

- [`fit-content()`](/en-US/docs/Web/CSS/fit-content_function)

### Glossary terms

- {{glossary("instrinsic size")}}

## Guides

- [Introduction to the CSS box model](/en-US/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)

  - : Explains one of the fundamental concept of CSS: the box model. This model defines how CSS lays out elements, including their content, padding, border, and margin areas.

- [Mastering margin collapsing](/en-US/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)

  - : Sometimes, two adjacent margins are collapsed into one. This article describes the rules that govern when and why this happens, and how to control it.

- [Visual formatting model](/en-US/docs/Web/CSS/Visual_formatting_model)

  - : Explains the visual formatting model.

## Related concepts

- [CSS box model](/en-US/docs/Web/CSS/CSS_box_model) module
  - {{cssxref("margin")}} shorthand
  - {{cssxref("margin-bottom")}}
  - {{cssxref("margin-left")}}
  - {{cssxref("margin-right")}}
  - {{cssxref("margin-top")}}
  - {{cssxref("margin-trim")}}
  - {{cssxref("padding")}} shorthand
  - {{cssxref("padding-bottom")}}
  - {{cssxref("padding-left")}}
  - {{cssxref("padding-right")}}
  - {{cssxref("padding-top")}}
- [CSS backgrounds and borders](/en-US/docs/Web/CSS/CSS_backgrounds_and_borders) module
  - {{cssxref("border")}} shorthand
  - {{cssxref("border-width")}} shorthand
  - {{cssxref("border-bottom-width")}}
  - {{cssxref("border-left-width")}}
  - {{cssxref("border-right-width")}}
  - {{cssxref("border-top-width")}}
- [CSS logical properties](/en-US/docs/Web/CSS/CSS_logical_properties_and_values) module
  - {{CSSxRef("min-inline-size")}}
  - {{CSSxRef("block-size")}}
  - {{CSSxRef("inline-size")}}
  - {{CSSxRef("max-block-size")}}
  - {{CSSxRef("max-inline-size")}}
  - {{CSSxRef("min-block-size")}}
  - {{CSSxRef("min-inline-size")}}
  - {{CSSxRef("margin-block")}}
  - {{CSSxRef("margin-inline")}}
  - {{CSSxRef("padding-block")}}
  - {{CSSxRef("padding-inline")}}
  - {{CSSxRef("border-block")}}
  - {{CSSxRef("border-inline")}}
  - {{CSSxRef("contain-intrinsic-block-size")}}
  - {{CSSxRef("contain-intrinsic-inline-size")}}
  - {{CSSxRef("overflow-block")}}
  - {{CSSxRef("overflow-inline")}}
  - {{CSSxRef("overscroll-behavior-block")}}
  - {{CSSxRef("overscroll-behavior-inline")}}
- [CSS overflow](/en-US/docs/Web/CSS/CSS_overflow) module
  - {{CSSxRef("overflow")}} shorthand
  - {{CSSxRef("overflow-block")}}
  - {{CSSxRef("overflow-clip-margin")}}
  - {{CSSxRef("overflow-inline")}}
  - {{CSSxRef("overflow-x")}}
  - {{CSSxRef("overflow-y")}}
  - {{CSSxRef("text-overflow")}}

## Specifications

{{Specifications}}

## See also

- [CSS display](/en-US/docs/Web/CSS/CSS_display) module
- [CSS flex layout](/en-US/docs/Web/CSS/CSS_flexible_box_layout) module
- [CSS grid layout](/en-US/docs/Web/CSS/CSS_grid_layout) module
- [CSS positioned layout](/en-US/docs/Web/CSS/CSS_positioned_layout) module
- [CSS table](/en-US/docs/Web/CSS/CSS) module
- [CSS fragmentation](/en-US/docs/Web/CSS/CSS_fragmentation) module
