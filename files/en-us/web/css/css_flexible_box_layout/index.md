---
title: CSS flexible box layout
slug: Web/CSS/CSS_flexible_box_layout
page-type: css-module
spec-urls: https://drafts.csswg.org/css-flexbox/
---

{{CSSRef}}

The **CSS flexible box layout** module defines a CSS box model optimized for user interface design, and the layout of items in one dimension. In the flex layout model, the children of a flex container can be laid out in any direction, and can "flex" their sizes, either growing to fill unused space or shrinking to avoid overflowing the parent. Both horizontal and vertical alignment of the children can be easily manipulated.

## Flexible box layout in action

In the following example a container has been set to `display: flex`, which means that the three child items become flex items. The value of `justify-content` has been set to `space-between` in order to space the items out evenly on the main axis. An equal amount of space is placed between each item with the left and right items being flush with the edges of the flex container. You can also see that the items are stretching on the cross axis, due to the default value of `align-items` being `stretch`. The items stretch to the height of the flex container, making them each appear as tall as the tallest item.

{{EmbedGHLiveSample("css-examples/flexbox/basics/simple-example.html", '100%', 600)}}

## Reference

### Properties

- {{cssxref("align-content")}}
- {{cssxref("align-items")}}
- {{cssxref("align-self")}}
- {{cssxref("flex")}}
- {{cssxref("flex-basis")}}
- {{cssxref("flex-direction")}}
- {{cssxref("flex-flow")}}
- {{cssxref("flex-grow")}}
- {{cssxref("flex-shrink")}}
- {{cssxref("flex-wrap")}}
- {{cssxref("justify-content")}}

### Glossary terms

- {{Glossary("Flexbox")}}
- {{Glossary("Flex container")}}
- {{Glossary("Flex item")}}
- {{Glossary("Main axis")}}
- {{Glossary("Cross axis")}}
- {{Glossary("Flex")}}

## Guides

- [Basic concepts of flexbox](/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)

  - : An overview of the features of Flexbox.

- [Relationship of flexbox to other layout methods](/en-US/docs/Web/CSS/CSS_flexible_box_layout/Relationship_of_flexbox_to_other_layout_methods)

  - : How Flexbox relates to other layout methods and other CSS specifications.

- [Aligning items in a flex container](/en-US/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)

  - : How the box alignment properties work with Flexbox.

- [Ordering flex items](/en-US/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)

  - : Explaining the different ways to change the order and direction of items, and covering the potential issues in doing so.

- [Controlling ratios of flex items along the main axis](/en-US/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)

  - : Explaining the flex-grow, flex-shrink and flex-basis properties.

- [Mastering wrapping of flex items](/en-US/docs/Web/CSS/CSS_flexible_box_layout/Mastering_wrapping_of_flex_items)

  - : How to create flex containers with multiple lines and control the display of the items in those lines.

- [Typical use cases of flexbox](/en-US/docs/Web/CSS/CSS_flexible_box_layout/Typical_use_cases_of_flexbox)

  - : Common design patterns that are typical Flexbox use cases.

- [CSS layout: flexbox](/en-US/docs/Learn/CSS/CSS_layout/Flexbox)

  - : Learn how to use flexbox layout to create web layouts.

- [Box alignment in flexbox](/en-US/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox)

  - : Details features of [CSS box alignment](/en-US/docs/Web/CSS/CSS_box_alignment) which are specific to flexbox.

## Related concepts

[CSS display module](/en-US/docs/Web/CSS/CSS_display)

- {{cssxref("display")}}
- {{cssxref("order")}}

[CSS box alignment](/en-US/docs/Web/CSS/CSS_box_alignment) module

- {{cssxref("align-content")}}
- {{cssxref("align-items")}}
- {{cssxref("align-self")}}
- {{cssxref("column-gap")}}
- {{cssxref("gap")}}
- {{cssxref("justify-items")}}
- {{cssxref("place-content")}}
- {{cssxref("place-items")}}
- {{cssxref("row-gap")}}

[CSS box sizing](/en-US/docs/Web/CSS/CSS_box_sizing) module

- {{cssxref("aspect-ratio")}}
- {{cssxref("max-content")}} value
- {{cssxref("min-content")}} value
- {{cssxref("fit-content")}} value
- {{glossary("intrinsic size")}} glossary term

## Specifications

{{Specifications}}

## See also

- [CSS writing modes](/en-US/docs/Web/CSS/CSS_writing_modes) module
- [Using the multi-keyword syntax with CSS display](/en-US/docs/Web/CSS/display/multi-keyword_syntax_of_display)
