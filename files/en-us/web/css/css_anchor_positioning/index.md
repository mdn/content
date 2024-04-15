---
title: CSS anchor positioning
slug: Web/CSS/CSS_anchor_positioning
page-type: css-module
spec-urls: https://drafts.csswg.org/css-anchor-position-1/
---

{{CSSRef}}

The **CSS anchor positioning** module defines features that allow you to tether elements together — defining some elements as **anchor elements** and others as **anchored elements**. The anchored elements can be positioned and sized relative to the anchor elements.

In addition, the specification provides mechanisms to:

- Declare conditions under which anchored elements should be hidden, to help in situations where it is not appropriate to tether them to anchor elements.
- Specify a set of alternative positions that the browser can try rendering the anchored element in, if the default rendering position causes it to overflow its containing block and/or be rendered offscreen.

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

### Glossary terms and keywords

- {{glossary("color space")}} PLACEHOLDER IN CASE I NEED TO ADD ANY GLOSSARY ENTRIES

### Interfaces

- {{domxref("CSSPositionTryRule")}}

## Guides

- [Using CSS anchor positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning/Using)
  - : A introductory guide to using all the features of the CSS Anchor Positioning specification.

## Related concepts

- The HTML [`anchor`](/en-US/docs/Web/HTML/Global_attributes/anchor) attribute, which provides an alternative mechanism for associating anchored elements with anchor elements.
- The {{domxref("Element.anchorElement")}} property, which returns a reference to an anchored element's anchor element.
- Positioning properties that can take an [`anchor()`](/en-US/docs/Web/CSS/anchor) function as a value:
  - The {{cssxref("top")}}, {{cssxref("left")}}, {{cssxref("bottom")}}, and {{cssxref("right")}} physical properties.
  - The {{cssxref("inset-block-start")}}, {{cssxref("inset-block-end")}}, {{cssxref("inset-inline-start")}}, and {{cssxref("inset-inline-end")}} logical properties.
  - The {{cssxref("inset-block")}}, {{cssxref("inset-inline")}}, and {{cssxref("inset")}} shorthand properties.
- Alignment properties that can take the `anchor-center` value:
  - {{cssxref("align-items")}}
  - {{cssxref("align-self")}}
  - {{cssxref("justify-items")}}
  - {{cssxref("justify-self")}}
- Sizing properties that can take an [`anchor-size()`](/en-US/docs/Web/CSS/anchor) function as a value:
  - The {{cssxref("width")}}, {{cssxref("height")}}, {{cssxref("min-width")}}, {{cssxref("min-height")}}, {{cssxref("max-width")}}, and {{cssxref("max-height")}} physical properties.
  - The {{cssxref("block-size")}}, {{cssxref("inline-size")}}, {{cssxref("min-block-size")}}, {{cssxref("min-inline-size")}}, {{cssxref("max-block-size")}}, and {{cssxref("max-inline-size")}} logical properties.

## Specifications

{{Specifications}}

## See also

- [Positioning](/en-US/docs/Learn/CSS/CSS_layout/Positioning)
- [CSS logical properties and values](/en-US/docs/Web/CSS/CSS_logical_properties_and_values)
- [Sizing items in CSS](/en-US/docs/Learn/CSS/Building_blocks/Sizing_items_in_CSS)
