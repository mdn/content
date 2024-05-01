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

### New properties and values

CSS was initially designed with only physical coordinates in its controls. The module defines new flow–relative equivalents for many [values](/en-US/docs/Web/CSS/CSS_Values_and_Units) and [properties](/en-US/docs/Glossary/Property/CSS).

Some physical properties now have logical equivalents. Properties that accept physical values (`top`, `bottom`, `left`, `right`) now also accept flow-relative logical values (`block-start`, `block-end`, `inline-start`, `inline-end`).

The transition to logical axes is ongoing and not fully defined by the module; some properties don't yet have logical equivalents.

## Reference

### Properties for sizing

- {{CSSxRef("block-size")}}
- {{CSSxRef("inline-size")}}
- {{CSSxRef("max-block-size")}}
- {{CSSxRef("max-inline-size")}}
- {{CSSxRef("min-block-size")}}
- {{CSSxRef("min-inline-size")}}

### Properties for margins

- {{CSSxRef("margin")}} (`logical` keyword)
- {{CSSxRef("margin-block")}}
- {{CSSxRef("margin-block-end")}}
- {{CSSxRef("margin-block-start")}}
- {{CSSxRef("margin-inline")}}
- {{CSSxRef("margin-inline-end")}}
- {{CSSxRef("margin-inline-start")}}

### Properties for paddings

- {{CSSxRef("padding")}} (`logical` keyword)
- {{CSSxRef("padding-block")}}
- {{CSSxRef("padding-block-end")}}
- {{CSSxRef("padding-block-start")}}
- {{CSSxRef("padding-inline")}}
- {{CSSxRef("padding-inline-end")}}
- {{CSSxRef("padding-inline-start")}}

### Properties for borders

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
- {{CSSxRef("border-style")}}
- {{CSSxRef("border-width")}}

### Properties for border radius

- {{CSSxRef("border-radius")}}
- {{CSSxRef("border-start-start-radius")}}
- {{CSSxRef("border-start-end-radius")}}
- {{CSSxRef("border-end-start-radius")}}
- {{CSSxRef("border-end-end-radius")}}

### Properties for positioning

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

### Properties for scrolling

- {{CSSxRef("overflow-block")}}
- {{CSSxRef("overflow-inline")}}
- {{CSSxRef("overscroll-behavior-block")}}
- {{CSSxRef("overscroll-behavior-inline")}}

### Properties for floating

- {{CSSxRef("clear")}} (`inline-end` and `inline-start` keywords)
- {{CSSxRef("float")}} (`inline-end` and `inline-start` keywords)

### Other properties

- {{CSSxRef("caption-side")}} (`inline-end` and `inline-start` keywords)
- {{CSSxRef("resize")}} (`block` and `inline` keywords)
- {{CSSxRef("text-align")}} (`end` and `start` keywords)

### Deprecated properties

- `offset-block-end` (now {{CSSxRef("inset-block-end")}})
- `offset-block-start` (now {{CSSxRef("inset-block-start")}})
- `offset-inline-end` (now {{CSSxRef("inset-inline-end")}})
- `offset-inline-start` (now {{CSSxRef("inset-inline-start")}})

### Unsupported properties

The following properties don't have logical equivalents:

- {{CSSxRef("background-position-x")}}
- {{CSSxRef("background-position-y")}}

### Unsupported values

The following properties accept only physical values:

- {{CSSxRef("text-underline-position")}}
- {{CSSxRef("box-shadow")}}
- {{CSSxRef("text-shadow")}}
- {{CSSxRef("clip-path")}}

- {{CSSxRef("&lt;position&gt;")}}
  - {{CSSxRef("background-position")}}
  - {{CSSxRef("object-position")}}
  - {{CSSxRef("mask-position")}}
  - {{CSSxRef("offset-position")}}
  - {{CSSxRef("offset-anchor")}}
  - {{CSSxRef("transform-origin")}}
  - {{CSSxRef("perspective-origin")}}

## Guides

- [Basic concepts of logical properties and values](/en-US/docs/Web/CSS/CSS_logical_properties_and_values/Basic_concepts_of_logical_properties_and_values)
- [Logical properties for sizing](/en-US/docs/Web/CSS/CSS_logical_properties_and_values/Sizing)
- [Logical properties for margins, borders, and padding](/en-US/docs/Web/CSS/CSS_logical_properties_and_values/Margins_borders_padding)
- [Logical properties for floating and positioning](/en-US/docs/Web/CSS/CSS_logical_properties_and_values/Floating_and_positioning)

## Specifications

{{Specifications}}

## Browser compatibility

See the individual property pages for full compatibility information.
