---
title: CSS logical properties and values
slug: Web/CSS/CSS_logical_properties_and_values
page-type: css-module
spec-urls: https://drafts.csswg.org/css-logical/
---

{{CSSRef}}

The **CSS logical properties and values** module defines logical properties and values that can control layout through logical rather than physical direction and dimension mappings. Logical properties define direction‐relative equivalents to their corresponding physical properties.

The start of a line is not always the left side of a line. Different writing systems operate in various directions. For example:

- English and Portuguese are written from left to right with new lines added below the previous ones.
- Hebrew and Arabic are right-to-left languages with new lines again being added below the previous ones.
- In some writing modes, the text lines are vertical, written from top to bottom. Chinese, Vietnamese, Korean, and Japanese are traditionally written vertically, from top to bottom, with each new vertical line added to the left of the previous one.
- Traditional Mongolian is also a top-to-bottom language, but new lines are to the right of previous ones.

The logical properties defined in this module enable defining properties relative to the content's writing direction, rather than a physical direction. This means content translated into languages with different writing modes will be rendered as intended.

Logical properties and values use the abstract terms _block_ and _inline_ to describe the direction in which they flow. The physical meaning of these terms depends on the [writing mode](/en-US/docs/Web/CSS/CSS_writing_modes).

The **block dimension** is perpendicular to the flow of text within a line, i.e., the vertical dimension in horizontal writing modes, and the horizontal dimension in vertical writing modes. For standard English text, it is the vertical dimension.

The **inline dimension** is parallel to the flow of text within a line, i.e., the horizontal dimension in horizontal writing modes, and the vertical dimension in vertical writing modes. For standard English text, it is the horizontal dimension.

CSS was initially designed with only physical coordinates. The logical properties and values module defines flow–relative equivalents for many [values](/en-US/docs/Web/CSS/CSS_Values_and_Units) and [properties](/en-US/docs/Glossary/Property/CSS). Properties that once only accepted physical values (`top`, `bottom`, `left`, `right`) now also accept flow-relative logical values (`block-start`, `block-end`, `inline-start`, `inline-end`).

## Reference

### Properties

- {{cssxref("block-size")}}
- {{cssxref("border-block")}}
- {{cssxref("border-block-color")}}
- {{cssxref("border-block-end")}}
- {{cssxref("border-block-end-color")}}
- {{cssxref("border-block-end-style")}}
- {{cssxref("border-block-end-width")}}
- {{cssxref("border-block-start")}}
- {{cssxref("border-block-start-color")}}
- {{cssxref("border-block-start-style")}}
- {{cssxref("border-block-start-width")}}
- {{cssxref("border-block-style")}}
- {{cssxref("border-block-width")}}
- {{cssxref("border-end-end-radius")}}
- {{cssxref("border-end-start-radius")}}
- {{cssxref("border-inline")}}
- {{cssxref("border-inline-color")}}
- {{cssxref("border-inline-end")}}
- {{cssxref("border-inline-end-color")}}
- {{cssxref("border-inline-end-style")}}
- {{cssxref("border-inline-end-width")}}
- {{cssxref("border-inline-start")}}
- {{cssxref("border-inline-start-color")}}
- {{cssxref("border-inline-start-style")}}
- {{cssxref("border-inline-start-width")}}
- {{cssxref("border-inline-style")}}
- {{cssxref("border-inline-width")}}
- {{cssxref("border-start-end-radius")}}
- {{cssxref("border-start-start-radius")}}
- {{cssxref("inline-size")}}
- {{cssxref("inset")}}
- {{cssxref("inset-block")}}
- {{cssxref("inset-block-end")}}
- {{cssxref("inset-block-start")}}
- {{cssxref("inset-inline")}}
- {{cssxref("inset-inline-end")}}
- {{cssxref("inset-inline-start")}}
- {{cssxref("margin-block")}}
- {{cssxref("margin-block-end")}}
- {{cssxref("margin-block-start")}}
- {{cssxref("margin-inline")}}
- {{cssxref("margin-inline-end")}}
- {{cssxref("margin-inline-start")}}
- {{cssxref("max-block-size")}}
- {{cssxref("max-inline-size")}}
- {{cssxref("min-block-size")}}
- {{cssxref("min-inline-size")}}
- {{cssxref("padding-block")}}
- {{cssxref("padding-block-end")}}
- {{cssxref("padding-block-start")}}
- {{cssxref("padding-inline")}}
- {{cssxref("padding-inline-end")}}
- {{cssxref("padding-inline-start")}}

### Data types and values

{{glossary("Flow relative values")}}:

- `block-start`
- `block-end`
- `inline-start`
- `inline-end`
- `start`
- `end`

### Glossary terms

- {{glossary("Flow relative values")}}
- {{glossary("Inset properties")}}
- {{glossary("Logical properties")}}
- {{glossary("Physical properties")}}

## Guides

- [Basic concepts of logical properties and values](/en-US/docs/Web/CSS/CSS_logical_properties_and_values/Basic_concepts_of_logical_properties_and_values)

  - : Overview of flow relative properties and values.

- [Logical properties for sizing](/en-US/docs/Web/CSS/CSS_logical_properties_and_values/Sizing)

  - : Flow-relative mappings between physical properties and logical properties used for sizing elements on the page.

- [Logical properties for margins, borders, and padding](/en-US/docs/Web/CSS/CSS_logical_properties_and_values/Margins_borders_padding)

  - : Flow-relative mappings for the various margin, border, and padding properties and their shorthands.

- [Logical properties for floating and positioning](/en-US/docs/Web/CSS/CSS_logical_properties_and_values/Floating_and_positioning)

  - : Details mappings between the physical and logical values for `float` and `clear`, [inset properties](/en-US/docs/Glossary/Inset_properties), and `resize`.

## Related concepts

- {{CSSxRef("caption-side")}}
- {{CSSxRef("clear")}}
- {{CSSxRef("float")}}
- {{CSSxRef("resize")}}
- {{CSSxRef("text-align")}}

[CSS box model](/en-US/docs/Web/CSS/CSS_box_model)

- {{CSSxRef("margin")}} shorthand
- {{CSSxRef("padding")}} shorthand

[CSS box sizing](/en-US/docs/Web/CSS/CSS_box_sizing)

- {{CSSxRef("max-height")}}
- {{CSSxRef("max-width")}}
- {{CSSxRef("min-height")}}
- {{CSSxRef("min-width")}}

[CSS backgrounds and borders](/en-US/docs/Web/CSS/CSS_backgrounds_and_borders)

- {{CSSxRef("border-color")}}
- {{CSSxRef("border-style")}}
- {{CSSxRef("border-width")}}
- {{CSSxRef("border")}} shorthand
- {{CSSxRef("border-radius")}}

[CSS positioned layout](/en-US/docs/Web/CSS/CSS_positioned_layout)

- {{CSSxRef("top")}}
- {{CSSxRef("right")}}
- {{CSSxRef("bottom")}}
- {{CSSxRef("left")}}

[CSS writing modes](/en-US/docs/Web/CSS/CSS_writing_modes)

- {{CSSxRef("direction")}}
- {{CSSxRef("text-orientation")}}
- {{CSSxRef("writing-mode")}}

[CSS containment](/en-US/docs/Web/CSS/CSS_containment)

- {{CSSxRef("contain-intrinsic-block-size")}}
- {{CSSxRef("contain-intrinsic-inline-size")}}

[CSS overflow](/en-US/docs/Web/CSS/CSS_overflow)

- {{CSSxRef("overflow-block")}}
- {{CSSxRef("overflow-inline")}}

[CSS overscroll behavior](/en-US/docs/Web/CSS/CSS_overscroll_behavior)

- {{CSSxRef("overscroll-behavior-block")}}
- {{CSSxRef("overscroll-behavior-inline")}}

## Specifications

{{Specifications}}

## See also

- [Flow layout and writing modes](/en-US/docs/Web/CSS/CSS_display/Flow_layout_and_writing_modes)
- [CSS flexible box layout](/en-US/docs/Web/CSS/CSS_flexible_box_layout) module
- [CSS grid layout](/en-US/docs/Web/CSS/CSS_grid_layout) module
