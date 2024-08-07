---
title: CSS box sizing
slug: Web/CSS/CSS_box_sizing
page-type: css-module
spec-urls:
  - https://drafts.csswg.org/css-sizing-4/
  - https://drafts.csswg.org/css-sizing-3/
---

{{CSSRef}}

The **CSS box sizing** module enables developers to specify how elements fit their content or fit into a particular layout context. It defines sizing, minimum sizing, and maximum sizing properties, and also extends the CSS sizing properties with keywords that represent content-based {{glossary("intrinsic size")}} and context-based [extrinsic](/en-US/docs/Glossary/Intrinsic_Size#extrinsic_sizing) size.

Elements can either be extrinsically or intrinsically sized. The [CSS box model](/en-US/docs/Web/CSS/CSS_box_model) defines page-relative properties to explicitly, or "extrinsically" set an element's size, including `width`, `height`, `padding`, and `margin` properties (along with `border` properties defined in the [CSS backgrounds and borders](/en-US/docs/Web/CSS/CSS_backgrounds_and_borders) module). This CSS box sizing module extends the CSS box model module to enable an element to be sized intrinsically — setting element size based on the size of its content.

The sizing values introduced in this module allow elements with [size containment](/en-US/docs/Web/CSS/CSS_containment/Using_CSS_containment#size_containment) to take explicit intrinsic sizes, as if their in-flow content's width and height match the specified explicit intrinsic size, rather than being sized as if they were empty.

This module also introduced the ability to define an aspect ratio for an element's box, meaning the browser can automatically adjust an element's dimensions to maintain a specified aspect ratio as long as one of the dimensions is automatically sized.

The [logical properties and values module](/en-US/docs/Web/CSS/CSS_logical_properties_and_values) expanded the properties available in the box model and box sizing modules to include writing-mode-relative equivalents of the corresponding physical box model and intrinsic box sizing properties.

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
- {{cssxref("min-width")}}
- {{cssxref("width")}}

> [!NOTE]
> The CSS box sizing module introduces the `min-intrinsic-sizing` property that has not yet been implemented.

### Data types and values

- {{cssxref("ratio")}} data type
- {{cssxref("min-content")}} value
- {{cssxref("max-content")}} value
- {{cssxref("fit-content")}} value
- {{cssxref("fit-content_function", "fit-content()")}} function

> [!NOTE]
> The CSS box sizing module introduces the `stretch` and `contain` keywords as sizing values that have not yet been implemented on the box sizing properties.

### Functions

- [`fit-content()`](/en-US/docs/Web/CSS/fit-content_function)

### Glossary terms

- {{glossary("intrinsic size")}}

## Guides

- [Understanding aspect ratios](/en-US/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio)

  - : Learn about the `aspect-ratio` property, discuss aspect ratios for replaced and non-replaced elements, and examine some common aspect ratio use cases.

- [Introduction to the CSS box model](/en-US/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)

  - : Explains one of the fundamental concepts of CSS: the box model. This model defines how CSS lays out elements, including their content, padding, border, and margin areas.

- [Mastering margin collapsing](/en-US/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)

  - : Sometimes, two adjacent margins are collapsed into one. This article describes the rules that govern when and why this happens, and how to control it.

- [Visual formatting model](/en-US/docs/Web/CSS/Visual_formatting_model)

  - : Explains the visual formatting model.

- [Controlling ratios of flex items along the main axis](/en-US/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)

  - : Explains intrinsic sizing as a precursor to understanding how to control the size and flexibility of flex items along the main axis using {{CSSxRef("flex-grow")}}, {{CSSxRef("flex-shrink")}}, and {{CSSxRef("flex-basis")}}.

## Related concepts

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
- [CSS overflow](/en-US/docs/Web/CSS/CSS_overflow) module
  - {{CSSxRef("overflow")}} shorthand
  - {{CSSxRef("overflow-block")}}
  - {{CSSxRef("overflow-clip-margin")}}
  - {{CSSxRef("overflow-inline")}}
  - {{CSSxRef("overflow-x")}}
  - {{CSSxRef("overflow-y")}}
  - {{CSSxRef("text-overflow")}}
- [CSS grid layout](/en-US/docs/Web/CSS/CSS_grid_layout) module
  - {{CSSxRef("grid")}}
  - {{CSSxRef("grid-auto-columns")}}
  - {{CSSxRef("grid-auto-rows")}}
  - {{CSSxRef("grid-template-columns")}}
  - {{CSSxRef("grid-template-rows")}}
  - {{CSSxRef("repeat")}}
  - {{CSSxRef("minmax")}} function
- [CSS flexible box layout](/en-US/docs/Web/CSS/CSS_flexible_box_layout) module
  - {{CSSxRef("flex-basis")}}
  - {{CSSxRef("flex")}}

## Specifications

{{Specifications}}

## See also

- [CSS display](/en-US/docs/Web/CSS/CSS_display) module
- [CSS flex layout](/en-US/docs/Web/CSS/CSS_flexible_box_layout) module
- [CSS grid layout](/en-US/docs/Web/CSS/CSS_grid_layout) module
- [CSS positioned layout](/en-US/docs/Web/CSS/CSS_positioned_layout) module
- [CSS fragmentation](/en-US/docs/Web/CSS/CSS_fragmentation) module
