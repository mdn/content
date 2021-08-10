---
title: CSS Logical Properties and Values
slug: Web/CSS/CSS_Logical_Properties
tags:
  - CSS
  - CSS Logical Properties
  - Guide
  - Landing
  - Overview
  - Reference
---
{{CSSRef}}

**CSS Logical Properties and Values** is a module of [CSS](/en-US/docs/Web/CSS) introducing logical properties and values that provide the ability to control layout through logical, rather than physical, direction and dimension mappings.

The module also defines logical properties and values for properties previously defined in CSS 2.1. Logical properties define direction‐relative equivalents of their corresponding physical properties.

### Block vs. inline

Logical properties and values use the abstract terms _block_ and _inline_ to describe the direction in which they flow. The physical meaning of these terms depends on the [writing mode](/en-US/docs/Web/CSS/CSS_Writing_Modes).

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

### Properties for margins, borders and padding

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
- {{CSSxRef("border-color")}} (`logical` {{Experimental_Inline}} keyword)
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
- {{CSSxRef("border-style")}} (`logical` {{Experimental_Inline}} keyword)
- {{CSSxRef("border-width")}} (`logical` {{Experimental_Inline}} keyword)
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

### Other properties

- {{CSSxRef("caption-side")}} (`inline-end` and `inline-start` keywords)
- {{CSSxRef("overflow-block")}}
- {{CSSxRef("overflow-inline")}}
- {{CSSxRef("overscroll-behavior-block")}}
- {{CSSxRef("overscroll-behavior-inline")}}
- {{CSSxRef("resize")}} (`block` and `inline` keywords)
- {{CSSxRef("text-align")}} (`end` and `start` keywords)

### Deprecated properties

- {{CSSxRef("offset-block-end")}} {{Non-standard_Inline}} {{Deprecated_Inline}} (now {{CSSxRef("inset-block-end")}} {{Experimental_Inline}})
- {{CSSxRef("offset-block-start")}} {{Non-standard_Inline}} {{Deprecated_Inline}} (now {{CSSxRef("inset-block-start")}} {{Experimental_Inline}})
- {{CSSxRef("offset-inline-end")}} {{Non-standard_Inline}} {{Deprecated_Inline}} (now {{CSSxRef("inset-inline-end")}} {{Experimental_Inline}})
- {{CSSxRef("offset-inline-start")}} {{Non-standard_Inline}} {{Deprecated_Inline}} (now {{CSSxRef("inset-inline-start")}} {{Experimental_Inline}})

## Guides

- [Basic concepts of logical properties and values](/en-US/docs/Web/CSS/CSS_Logical_Properties/Basic_concepts)
- [Logical Properties for sizing](/en-US/docs/Web/CSS/CSS_Logical_Properties/Sizing)
- [Logical Properties for margins, borders and padding](/en-US/docs/Web/CSS/CSS_Logical_Properties/Margins_borders_padding)
- [Logical Properties for floating and positioning](/en-US/docs/Web/CSS/CSS_Logical_Properties/Floating_and_positioning)

## Specifications

| Specification                                        | Status                                           | Comment             |
| ---------------------------------------------------- | ------------------------------------------------ | ------------------- |
| {{SpecName("CSS Logical Properties")}} | {{Spec2("CSS Logical Properties")}} | Initial definition. |

## Browser compatibility

In general:

- Firefox has support for the mapped properties — where there is a direct mapping from the physical to the logical version.
- Chrome, from version 69, has support for the mapped properties.
- Edge, from version 79, has the same support as Chrome.
- Firefox 66 introduces support for two value shorthands, also behind a flag in Chrome.
- Internet Explorer has no support.

See the individual property pages for full compatibility information.
