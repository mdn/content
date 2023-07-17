---
title: CSS logical properties and values
slug: Web/CSS/CSS_logical_properties_and_values
page-type: css-module
spec-urls: https://drafts.csswg.org/css-logical/
---

{{CSSRef}}

The **CSS logical properties and values** module introduces logical properties and values that provide the ability to control layout through logical, rather than physical, direction and dimension mappings.

The module also defines logical properties and values for properties previously defined in CSS 2.1. Logical properties define direction‐relative equivalents of their corresponding physical properties.

### Block vs. inline

Logical properties and values use the abstract terms _block_ and _inline_ to describe the direction in which they flow. The physical meaning of these terms depends on the [writing mode](/en-US/docs/Web/CSS/CSS_writing_modes).

- Block dimension
  - : The dimension perpendicular to the flow of text within a line, i.e., the vertical dimension in horizontal writing modes, and the horizontal dimension in vertical writing modes. For standard English text, it is the vertical dimension.
- Inline dimension
  - : The dimension parallel to the flow of text within a line, i.e., the horizontal dimension in horizontal writing modes, and the vertical dimension in vertical writing modes. For standard English text, it is the horizontal dimension.

## Reference

### Properties for sizing

- {{CSSxRef("block-size")}}
- {{CSSxRef("inline-size")}}
- {{CSSxRef("max-block-size")}}
- {{CSSxRef("max-inline-size")}}
- {{CSSxRef("min-block-size")}}
- {{CSSxRef("min-inline-size")}}

### Properties for margins, borders, and padding

- {{CSSxRef("border-block")}}
- {{CSSxRef("border-block-color")}}
- {{CSSxRef("border-block-end")}}
- {{CSSxRef("border-block-end-color")}}
- {{CSSxRef("border-block-end-style")}}
- {{CSSxRef("border-block-end-width")}}
- {{CSSxRef("border-block-start")}}
- {{CSSxRef("border-block-start-color")}}
- {{CSSxRef("border-block-start-style")}}
- {{CSSxRef("border-block-start-width")}}
- {{CSSxRef("border-block-style")}}
- {{CSSxRef("border-block-width")}}
- {{CSSxRef("border-color")}}
- {{CSSxRef("border-inline")}}
- {{CSSxRef("border-inline-color")}}
- {{CSSxRef("border-inline-end")}}
- {{CSSxRef("border-inline-end-color")}}
- {{CSSxRef("border-inline-end-style")}}
- {{CSSxRef("border-inline-end-width")}}
- {{CSSxRef("border-inline-start")}}
- {{CSSxRef("border-inline-start-color")}}
- {{CSSxRef("border-inline-start-style")}}
- {{CSSxRef("border-inline-start-width")}}
- {{CSSxRef("border-inline-style")}}
- {{CSSxRef("border-inline-width")}}
- {{CSSxRef("border-start-start-radius")}}
- {{CSSxRef("border-start-end-radius")}}
- {{CSSxRef("border-end-start-radius")}}
- {{CSSxRef("border-end-end-radius")}}
- {{CSSxRef("border-style")}}
- {{CSSxRef("border-width")}}
- {{CSSxRef("margin")}} (`logical` {{Experimental_Inline}} keyword)
- {{CSSxRef("margin-block")}}
- {{CSSxRef("margin-block-end")}}
- {{CSSxRef("margin-block-start")}}
- {{CSSxRef("margin-inline")}}
- {{CSSxRef("margin-inline-end")}}
- {{CSSxRef("margin-inline-start")}}
- {{CSSxRef("padding")}} (`logical` {{Experimental_Inline}} keyword)
- {{CSSxRef("padding-block")}}
- {{CSSxRef("padding-block-end")}}
- {{CSSxRef("padding-block-start")}}
- {{CSSxRef("padding-inline")}}
- {{CSSxRef("padding-inline-end")}}
- {{CSSxRef("padding-inline-start")}}

### Properties for floating and positioning

- {{CSSxRef("clear")}} (`inline-end` and `inline-start` keywords)
- {{CSSxRef("float")}} (`inline-end` and `inline-start` keywords)
- {{CSSxRef("inset")}}
- {{CSSxRef("inset-block")}}
- {{CSSxRef("inset-block-end")}}
- {{CSSxRef("inset-block-start")}}
- {{CSSxRef("inset-inline")}}
- {{CSSxRef("inset-inline-end")}}
- {{CSSxRef("inset-inline-start")}}

### Properties for size containment

- {{CSSxRef("contain-intrinsic-block-size")}}
- {{CSSxRef("contain-intrinsic-inline-size")}}

### Other properties

- {{CSSxRef("caption-side")}} (`inline-end` and `inline-start` keywords)
- {{CSSxRef("overflow-block")}}
- {{CSSxRef("overflow-inline")}}
- {{CSSxRef("overscroll-behavior-block")}}
- {{CSSxRef("overscroll-behavior-inline")}}
- {{CSSxRef("resize")}} (`block` and `inline` keywords)
- {{CSSxRef("text-align")}} (`end` and `start` keywords)

### Deprecated properties

- `offset-block-end` {{Non-standard_Inline}} {{Deprecated_Inline}} (now {{CSSxRef("inset-block-end")}})
- `offset-block-start` {{Non-standard_Inline}} {{Deprecated_Inline}} (now {{CSSxRef("inset-block-start")}})
- `offset-inline-end` {{Non-standard_Inline}} {{Deprecated_Inline}} (now {{CSSxRef("inset-inline-end")}})
- `offset-inline-start` {{Non-standard_Inline}} {{Deprecated_Inline}} (now {{CSSxRef("inset-inline-start")}})

## Guides

- [Basic concepts of logical properties and values](/en-US/docs/Web/CSS/CSS_logical_properties_and_values/Basic_concepts_of_logical_properties_and_values)
- [Logical properties for sizing](/en-US/docs/Web/CSS/CSS_logical_properties_and_values/Sizing)
- [Logical properties for margins, borders, and padding](/en-US/docs/Web/CSS/CSS_logical_properties_and_values/Margins_borders_padding)
- [Logical properties for floating and positioning](/en-US/docs/Web/CSS/CSS_logical_properties_and_values/Floating_and_positioning)

## Specifications

{{Specifications}}

## Browser compatibility

See the individual property pages for full compatibility information.
