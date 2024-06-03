---
title: Logical properties
slug: Glossary/Logical_properties
page-type: glossary-definition
---

{{GlossarySidebar}}

CSS **logical properties** provide a way to lay out content based on the document's writing mode and direction rather than the physical dimensions of the viewport. This enables more flexible and maintainable designs, especially for websites supporting multiple languages.

Whereas {{glossary("physical properties")}} define positions based on physical directions; with {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}}, and {{cssxref("left")}} referring to the physical dimensions of the viewport and properties like {{cssxref("margin-top")}}, {{cssxref("border-right")}}, {{cssxref("padding-bottom")}}, and {{cssxref("border-bottom-left-radius")}}reference specific sides of an element, logical properties are relative to the content flow and use directional keywords that are relative to the block and inline axes.

## Block direction

The **block axis** refers to the axis that defines the stacking order of elements in a block layout. It's essentially the direction along which blocks of content, or **block direction**, like paragraphs ({{htmlelement("p")}}), headings, and divs ({{htmlelement("div")}}), are laid out on a webpage. This is the vertical direction of the content flow, going from top to bottom, in left-to-right and left-to-right languages.

The **block-start** and **block-end** directions represent the _start edge_ and _end edge_ of content along the block axis, or the "from" and "to" directions, respectively, with `block-start` being the equivalent of `top` and `block-end` being the equivalent of `bottom` in horizontal writing modes.

## Inline direction

The **inline axis** is perpendicular to the block axis. The inline axis represents the direction along which inline content, or **inline direction**, like text flows within a block. This is the horizontal direction of the content flow, going from left to right in left-to-right writing modes, like English, and right to left in right-to-left languages, like Arabic and Hebrew.

**Inline-start** and **inline-end** represent the _start edge_ and _end edge_ of content along the inline axis, respectively, with the values and properties `inline-start` and `inline-end` being the equivalent of `left` and `right` properties and values in horizontal writing modes, but whether each means `right` or `left` depends on the writing direction (`inline-start` is `left` in left-to-right languages and `right` in right-to-left languages.)

Therefore, logical properties, like {{cssxref("margin-block-start")}} and {{cssxref("padding-inline-end")}}, use logical keywords relative to the content flow.

## See also

- [CSS logical properties and values](/en-US/docs/Web/CSS/CSS_logical_properties_and_values) module
