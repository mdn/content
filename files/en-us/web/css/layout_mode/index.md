---
title: Layout mode
slug: Web/CSS/Layout_mode
tags:
  - CSS
  - Guide
  - Layout
  - Reference
---
{{CSSRef}}

A [CSS](/en-US/docs/Web/CSS) **layout mode**, sometimes called _layout_, is an algorithm that determines the position and size of boxes based on the way they interact with their sibling and ancestor boxes. There are several of them:

- _[Normal flow](/en-US/docs/Web/CSS/CSS_Flow_Layout)_ — all elements are part of normal flow until you do something to take them out of it. Normal flow includes _block layout_, designed for laying out boxes such as paragraphs and _inline layout_, which lays out inline items such as text.
- [_Table layout_](/en-US/docs/Web/CSS/CSS_Table), designed for laying out tables.
- _Float layout_, designed to cause an item to position itself left or right with the rest of the content in normal flow wrapping around it.
- [_Positioned layout_](/en-US/docs/Web/CSS/CSS_Positioning), designed for positioning elements without much interaction with other elements.
- [_Multi-column layout_](/en-US/docs/Web/CSS/CSS_Columns), designed for laying content out in columns as in a newspaper.
- [_Flexible box layout_](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout), designed for laying out complex pages that can be resized smoothly.
- [_Grid layout_](/en-US/docs/Web/CSS/CSS_Grid_Layout), designed for laying out elements relative to a fixed grid.

> **Note:** Not all [CSS properties](/en-US/docs/Web/CSS/Reference) apply to all _layout modes_. Most of them apply to one or two of them and have no effect if they are set on an element participating in another layout mode.

## See also

- {{CSS_key_concepts}}
