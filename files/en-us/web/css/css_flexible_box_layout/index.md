---
title: CSS Flexible Box Layout
slug: Web/CSS/CSS_Flexible_Box_Layout
tags:
  - CSS
  - CSS Flexible Boxes
  - Guide
  - Overview
  - Reference
  - flexbox
spec-urls: https://drafts.csswg.org/css-flexbox/
---
{{CSSRef}}

**CSS Flexible Box Layout** is a module of [CSS](/en-US/docs/Web/CSS) that defines a CSS box model optimized for user interface design, and the layout of items in one dimension. In the flex layout model, the children of a flex container can be laid out in any direction, and can "flex" their sizes, either growing to fill unused space or shrinking to avoid overflowing the parent. Both horizontal and vertical alignment of the children can be easily manipulated.

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

- [Basic concepts of flexbox](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)
  - : An overview of the features of Flexbox
- [Relationship of flexbox to other layout methods](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Relationship_of_Flexbox_to_Other_Layout_Methods)
  - : How Flexbox relates to other layout methods, and other CSS specifications
- [Aligning items in a flex container](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container)
  - : How the Box Alignment properties work with Flexbox.
- [Ordering flex items](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Ordering_Flex_Items)
  - : Explaining the different ways to change the order and direction of items, and covering the potential issues in doing so.
- [Controlling ratios of flex items along the main axis](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Controlling_Ratios_of_Flex_Items_Along_the_Main_Ax)
  - : Explaining the flex-grow, flex-shrink and flex-basis properties.
- [Mastering wrapping of flex items](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Mastering_Wrapping_of_Flex_Items)
  - : How to create flex containers with multiple lines and control the display of the items in those lines.
- [Typical use cases of flexbox](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Typical_Use_Cases_of_Flexbox)
  - : Common design patterns that are typical Flexbox use cases.
- [Backwards compatibility of flexbox](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Backwards_Compatibility_of_Flexbox)
  - : Browser status of Flexbox, interoperability issues and supporting older browsers and versions of the spec

## Specifications

{{Specifications}}

## See also

- Glossary terms:
  - {{Glossary("Flexbox", "", 1)}}
  - {{Glossary("Flex Container", "", 1)}}
  - {{Glossary("Flex Item", "", 1)}}
  - {{Glossary("Main Axis", "", 1)}}
  - {{Glossary("Cross Axis", "", 1)}}
  - {{Glossary("Flex", "", 1)}}
