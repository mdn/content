---
title: CSS Overflow
slug: Web/CSS/CSS_Overflow
page-type: css-module
spec-urls: https://drafts.csswg.org/css-overflow/#propdef-overflow
---

{{CSSRef}}

The **CSS Overflow** module contains the features of CSS relating to scrollable overflow handling in visual media. In CSS overflow happens when the content of a box extends past one or more of the box's edges.

## Ink overflow and scrollable overflow

There are two types of overflow that you might encounter in CSS. The first is described as **ink overflow**. This is the overflow of painting effects which do not affect layout or otherwise extend the scrollable overflow region, such as box shadows, border images, text decoration, overhanging glyphs, outlines, etc.

The overflow that we sometimes need to manage in CSS is described as **scrollable overflow**. This is the content appearing outside of the box for which scrolling mechanisms need to be provided. The overflow properties are how we can control what happens when content overflows a box.

## Basic example

The following interactive example shows how changing the value of the `overflow` property, changes how the overflow of a fixed height box is dealt with.

{{EmbedInteractiveExample("pages/css/overflow.html")}}

## Reference

### CSS properties

- {{CSSxRef("overflow-block")}}
- {{CSSxRef("overflow-inline")}}
- {{CSSxRef("overflow-x")}}
- {{CSSxRef("overflow-y")}}
- {{CSSxRef("overflow")}} shorthand
- {{CSSxRef("overflow-clip-margin")}}
- {{CSSxRef("scroll-behavior")}}
- {{CSSxRef("scrollbar-gutter")}}
- {{CSSxRef("text-overflow")}}
- {{CSSxRef("block-ellipsis")}} (formerly {{CSSxRef("block-overflow")}}) {{experimental_inline}}
- {{CSSxRef("continue")}} {{experimental_inline}}
- {{CSSxRef("line-clamp")}} {{experimental_inline}}
- {{CSSxRef("max-lines")}} {{experimental_inline}}

### Non-standard properties

- {{CSSxRef("-webkit-line-clamp")}} {{non-standard_inline}}

### Data types

- [`<overflow>`](/en-US/docs/Learn/CSS/overflow_value) value

### Glossary

- {{Glossary("Scroll container")}}

## Guides

- [Overflowing content](/en-US/docs/Learn/CSS/Building_blocks/Overflowing_content)
  - : CSS building block: learn what overflow is and how to manage it.

## Related concepts

-
- Element scrollTo() method

## Specifications

{{Specifications}}

## See also

- [CSS scrollbars styling module]() and the {{CSSxRef("scrollbar-width")}} and {{CSSxRef("scrollbar-color")}} properties
- How to [Debug scrollable overflow](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/debug_scrollable_overflow/index.html).
