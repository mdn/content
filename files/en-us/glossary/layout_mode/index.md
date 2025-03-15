---
title: Layout mode
slug: Glossary/Layout_mode
page-type: glossary-definition
---

{{GlossarySidebar}}

A **layout mode**, sometimes called _layout_, is a [CSS](/en-US/docs/Web/CSS) algorithm that determines the position and size of boxes based on the way they interact with their sibling and ancestor boxes.

There are several layout modes:

- _[Normal flow](/en-US/docs/Web/CSS/CSS_display/Flow_layout)_ — all elements are part of normal flow until you do something to take them out of it. Normal flow includes _block layout_, designed for laying out boxes such as paragraphs and _inline layout_, which lays out inline items such as text.
- [_Table layout_](/en-US/docs/Web/CSS/CSS_table), designed for laying out tables.
- _Float layout_, designed to cause an item to position itself left or right with the rest of the content in normal flow wrapping around it.
- [_Positioned layout_](/en-US/docs/Web/CSS/CSS_positioned_layout), designed for positioning elements without much interaction with other elements.
- [_Multi-column layout_](/en-US/docs/Web/CSS/CSS_multicol_layout), designed for laying content out in columns as in a newspaper.
- [_Flexible box layout_](/en-US/docs/Web/CSS/CSS_flexible_box_layout), designed for laying out complex pages that can be resized smoothly.
- [_Grid layout_](/en-US/docs/Web/CSS/CSS_grid_layout), designed for laying out elements relative to a fixed grid.

> [!NOTE]
> Not all [CSS properties](/en-US/docs/Web/CSS/Reference) apply to all _layout modes_. Most of them apply to one or two of them and have no effect if they are set on an element participating in another layout mode.

## See also

- [Visual formatting model](/en-US/docs/Web/CSS/Visual_formatting_model)
- [CSS display](/en-US/docs/Web/CSS/CSS_display) module
