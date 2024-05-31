---
title: Logical properties
slug: Glossary/Logical_properties
page-type: glossary-definition
---

{{GlossarySidebar}}

CSS **logical properties** provide a way to style layouts based on the document's writing mode and direction rather than the physical dimensions of the viewport. This enables more flexible and maintainable designs, especially for websites supporting multiple languages.

Properties like {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}}, and {{cssxref("left")}} are **physical properties**. They define positions based on physical directions; with top, right, bottom, and left referring to the physical dimensions of the viewport. Physical properties style features by physical direction, such as {{cssxref("margin-top")}}, {{cssxref("border-right")}}, {{cssxref("padding-bottom")}}, and {{cssxref("border-bottom-left-radius")}}. These are **physical** as they reference specific sides of an element.

Logical properties are relative to the content flow and use directional keywords that are relative to the block and inline axes.

The **block axis** refers to the axis that defines the stacking order of elements in a block layout. It's essentially the direction along which blocks of content, like paragraphs ({{htmlelement("p")}}), headings, and divs ({{htmlelement("div")}}), are laid out on a webpage. This is the vertical direction of the content flow, going from top to bottom, in left-to-right and left-to-right languages. The **block-start** and **block-end** directions is the "from" and "to" directions, respectively, with `block-start` being the equivalent of `top` and `block-end` being the equivalent of `bottom`. In Japanese

The **inline axis** is perpendicular to the block axis. The inline axis represents the direction along which inline content like text flows within a block. This is the horizontal direction of the content flow, going from left to right in left-to-right writing modes, like English, and right to left in right-to-left languages, like Arabic and Hebrew. The **inline-start** and **inline-end** direction depend on the writing direction, with the values and properties `inline-start` and `inline-end` being the equivalent of `left` and `right` properties and values, respectively, for left-to-right languages, and `right` and `left` in right-to-left writing modes.

Therefore, logical properties, like {{cssxref("margin-block-start")}} and {{cssxref("padding-inline-end")}}, use logical keywords relative to the content flow.

## See also

- [CSS logical properties and values](/en-US/docs/Web/CSS/CSS_logical_properties_and_values) module
