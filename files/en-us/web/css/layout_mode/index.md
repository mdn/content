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
- [_Multi-column layout_](/en-US/docs/Web/CSS/CSS_Columns), designed for laying content out in columns as in a newspaper.
- [_Flexible box layout_](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout), designed for laying out complex pages that can be resized smoothly.
- [_Grid layout_](/en-US/docs/Web/CSS/CSS_Grid_Layout), designed for laying out elements relative to a fixed grid.

> **Note:** Not all [CSS properties](/en-US/docs/Web/CSS/Reference) apply to all _layout modes_. Most of them apply to one or two of them and have no effect if they are set on an element participating in another layout mode.

## See also

- CSS key concepts:
  - [CSS syntax](/en-US/docs/Web/CSS/Syntax)
  - [At-rules](/en-US/docs/Web/CSS/At-rule)
  - [Comments](/en-US/docs/Web/CSS/Comments)
  - [Specificity](/en-US/docs/Web/CSS/Specificity)
  - [Inheritance](/en-US/docs/Web/CSS/inheritance)
  - [Box model](/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
  - [Visual formatting models](/en-US/docs/Web/CSS/Visual_formatting_model)
  - [Margin collapsing](/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing)
  - Values
    - [Initial values](/en-US/docs/Web/CSS/initial_value)
    - [Computed values](/en-US/docs/Web/CSS/computed_value)
    - [Used values](/en-US/docs/Web/CSS/used_value)
    - [Actual values](/en-US/docs/Web/CSS/actual_value)
  - [Value definition syntax](/en-US/docs/Web/CSS/Value_definition_syntax)
  - [Shorthand properties](/en-US/docs/Web/CSS/Shorthand_properties)
  - [Replaced elements](/en-US/docs/Web/CSS/Replaced_element)
