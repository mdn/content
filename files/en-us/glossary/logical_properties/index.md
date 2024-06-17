---
title: Logical properties
slug: Glossary/Logical_properties
page-type: glossary-definition
---

{{GlossarySidebar}}

CSS **logical properties** provide a way to lay out content based on the document's writing mode and direction rather than the physical dimensions of the viewport. This enables more flexible and maintainable designs, especially for websites supporting multiple languages.

Whereas {{glossary("physical properties")}}, like {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("padding-bottom")}}, and {{cssxref("border-bottom-left-radius")}}, define positions and features based on physical directions and reference specific sides of an element, logical properties such as {{cssxref("inset-block-start")}}, {{cssxref("inset-inline-end")}}, {{cssxref("padding-block-end")}}, and {{cssxref("border-end-end-radius")}} use logical directional keywords that are relative to the content flow along the block and inline axes.

## Block direction

The **block axis** refers to the axis that defines the stacking order of elements in a block layout. It's essentially the direction along which blocks of content — like paragraphs ({{htmlelement("p")}}), headings, and divs ({{htmlelement("div")}}) — are laid out on a webpage. This is also known as the **block direction**. In left-to-right and left-to-right languages, the block direction is the vertical direction of the content flow, going from top to bottom.

The **block-start** and **block-end** directions represent the _start edge_ and _end edge_ of content along the block axis, or the "from" and "to" directions, respectively, with `block-start` being the equivalent of `top` and `block-end` being the equivalent of `bottom` in horizontal writing modes.

## Inline direction

The **inline axis** is perpendicular to the block axis. The inline axis represents the direction along which inline content such as text flows within a block. This is also known as the **inline direction**. In left-to-right writing modes, like English, the inline direction is horizontal, left-to-right. In right-to-left languages, like Arabic and Hebrew, the inline direction is horizontal, right-to-left.

**Inline-start** and **inline-end** represent the _start edge_ and _end edge_ of content along the inline axis, respectively, with the values and properties `inline-start` and `inline-end` being equivalent to `left` and `right` properties and values in horizontal writing modes. Which ones are equivalent to `right` or `left` depends on the writing direction — for example `inline-start` is `left` in left-to-right languages and `right` in right-to-left languages.

## See also

- [CSS logical properties and values](/en-US/docs/Web/CSS/CSS_logical_properties_and_values) module
