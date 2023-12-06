---
title: CSS flexible box layout
slug: Web/CSS/CSS_flexible_box_layout
page-type: css-module
spec-urls: https://drafts.csswg.org/css-flexbox/
---

{{CSSRef}}

The **CSS flexible box layout** module defines a CSS box model optimized for user interface design, and the layout of items in one dimension. In the flex layout model, the children of a flex container can be laid out in any direction, and can "flex" their sizes, either growing to fill unused space or shrinking to avoid overflowing the parent. Both horizontal and vertical alignment of the children can be easily manipulated.

## Basic example

In the following example a container has been set to `display: flex`, which means that the three child items become flex items. The value of `justify-content` has been set to `space-between` in order to space the items out evenly on the main axis. An equal amount of space is placed between each item with the left and right items being flush with the edges of the flex container. You can also see that the items are stretching on the cross axis, due to the default value of `align-items` being `stretch`. The items stretch to the height of the flex container, making them each appear as tall as the tallest item.

{{EmbedGHLiveSample("css-examples/flexbox/basics/simple-example.html", '100%', 600)}}

## Reference

### Properties

- {{cssxref("flex")}}
- {{cssxref("flex-basis")}}
- {{cssxref("flex-direction")}}
- {{cssxref("flex-flow")}}
- {{cssxref("flex-grow")}}
- {{cssxref("flex-shrink")}}
- {{cssxref("flex-wrap")}}
- {{cssxref("order")}}

### Properties for alignment

The properties `align-content`, `align-self`, `align-items` and `justify-content` initially appeared in the Flexbox specification, but are now defined in Box Alignment. The Flexbox spec now refers to the Box Alignment specification for up to date definitions. Also additional alignment properties are now defined in Box Alignment.

- {{cssxref("justify-content")}}
- {{cssxref("align-content")}}
- {{cssxref("align-items")}}
- {{cssxref("align-self")}}
- {{cssxref("place-content")}}
- {{cssxref("place-items")}}
- {{cssxref("row-gap")}}
- {{cssxref("column-gap")}}
- {{cssxref("gap")}}

## Guides

- [Basic concepts of flexbox](/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
  - : An overview of the features of Flexbox
- [Relationship of flexbox to other layout methods](/en-US/docs/Web/CSS/CSS_flexible_box_layout/Relationship_of_flexbox_to_other_layout_methods)
  - : How Flexbox relates to other layout methods, and other CSS specifications
- [Aligning items in a flex container](/en-US/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
  - : How the Box Alignment properties work with Flexbox.
- [Ordering flex items](/en-US/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)
  - : Explaining the different ways to change the order and direction of items, and covering the potential issues in doing so.
- [Controlling ratios of flex items along the main axis](/en-US/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)
  - : Explaining the flex-grow, flex-shrink and flex-basis properties.
- [Mastering wrapping of flex items](/en-US/docs/Web/CSS/CSS_flexible_box_layout/Mastering_wrapping_of_flex_items)
  - : How to create flex containers with multiple lines and control the display of the items in those lines.
- [Typical use cases of flexbox](/en-US/docs/Web/CSS/CSS_flexible_box_layout/Typical_use_cases_of_flexbox)
  - : Common design patterns that are typical Flexbox use cases.

## Specifications

{{Specifications}}

## See also

- Glossary terms:
  - {{Glossary("Flexbox")}}
  - {{Glossary("Flex Container")}}
  - {{Glossary("Flex Item")}}
  - {{Glossary("Main Axis")}}
  - {{Glossary("Cross Axis")}}
  - {{Glossary("Flex")}}
