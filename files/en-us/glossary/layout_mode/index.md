---
title: Layout mode
slug: Glossary/Layout_mode
page-type: glossary-definition
sidebar: glossarysidebar
---

A **layout mode**, sometimes called _layout_, is a [CSS](/en-US/docs/Web/CSS) algorithm that determines the position and size of element boxes based on the way they interact with their sibling and ancestor boxes.

There are several layout modes:

- **[Flow layout or normal flow](/en-US/docs/Web/CSS/Guides/Display/Flow_layout)**
  - : All elements are part of normal flow until you do something to take them out of it.Normal flow includes:
    - **[Block layout](/en-US/docs/Web/CSS/Guides/Display/Block_and_inline_layout_in_normal_flow)**
      - : Designed for laying out boxes such as paragraphs.
    - **[Inline layout](/en-US/docs/Web/CSS/Guides/Inline_layout)**
      - : Designed for laying out inline items such as text.

- **[Table layout](/en-US/docs/Web/CSS/CSS_table)**
  - : Designed for laying out tables.
- **Float layout**
  - : Designed to cause an item to position itself left or right with the rest of the content in normal flow wrapping around it.
- **[Positioned layout](/en-US/docs/Web/CSS/Guides/Positioned_layout)**
  - : Designed for positioning elements without much interaction with other elements.
- **[Multi-column layout](/en-US/docs/Web/CSS/Guides/Multicol_layout)**
  - : Designed for laying content out in columns as in a newspaper.
- **[Flexible box layout](/en-US/docs/Web/CSS/Guides/Flexible_box_layout)**
  - : Designed for laying out complex pages that can be resized smoothly.
- **[Grid layout](/en-US/docs/Web/CSS/Guides/Grid_layout)**
  - : Designed for laying out elements relative to a fixed grid.

> [!NOTE]
> Not all [CSS properties](/en-US/docs/Web/CSS/Reference) apply to all _layout modes_. Most of them apply to one or two of them and have no effect if they are set on an element participating in another layout mode.

## See also

- [Visual formatting model](/en-US/docs/Web/CSS/Guides/Display/Visual_formatting_model)
- [CSS display](/en-US/docs/Web/CSS/Guides/Display) module
