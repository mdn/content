---
title: Box alignment in flexbox
slug: Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox
page-type: guide
---

{{CSSRef}}

The [box alignment](/en-US/docs/Web/CSS/CSS_box_alignment) Specification details how alignment works in various layout methods; on this page, we explore how box alignment works in the context of Flexbox. As this page aims to detail things which are specific to Flexbox and box alignment, it should be read in conjunction with the main [box alignment](/en-US/docs/Web/CSS/CSS_box_alignment) page which details the common features of box alignment across layout methods.

## Basic example

In this example, three flex items are aligned on the main axis using {{cssxref("justify-content")}} and on the cross axis using {{cssxref("align-items")}}. The first item overrides the `align-items` values set on the group by setting {{cssxref("align-self")}} to `center`.

{{EmbedGHLiveSample("css-examples/box-alignment/overview/flex-align-items.html", '100%', 500)}}

## The axes and flex-direction

Flexbox respects the writing mode of the document, therefore if you are working in English and set {{cssxref("justify-content")}} to `flex-end` this will align the items to the end of the flex container. If you are working with {{cssxref("flex-direction")}} set to `row`, this alignment will be in the inline direction.

However, in Flexbox you can change the main axis by setting `flex-direction` to `column`. In this case, `justify-content` will align items in the block direction. Therefore it is easiest to think about the main and cross axis when working in Flexbox like so:

- The main axis = direction set by `flex-direction` = alignment via `justify-content`
- The cross axis = runs across the main axis = alignment via `align-content`, `align-self`/`align-items`

### Main Axis Alignment

- {{cssxref("justify-content")}}

### Cross Axis Alignment

- {{cssxref("align-self")}}
- {{cssxref("align-items")}}
- {{cssxref("align-content")}}

### There is no justify-self in Flexbox

On the main axis, Flexbox deals with our content as a group. The amount of space required to lay out the items is calculated, and the leftover space is then available for distribution. The `justify-content` property controls how that leftover space is used. Set `justify-content: flex-end` and the extra space is placed before the items, `justify-content: space-around` and it is placed either side of the item in that dimension, etc.

This means that a `justify-self` property does not make sense in Flexbox as we are always dealing with moving the entire group of items around.

On the cross axis `align-self` makes sense as we potentially have additional space in the flex container in that dimension, in which a single item can be moved to the start and end.

## Alignment and auto margins

There is a specific use case in Flexbox where we might think that a `justify-self` property is what we need, and this is when we want to split a set of flex items, perhaps to create a split navigation pattern. For this use case, we can use an `auto` margin. A margin set to `auto` will absorb all available space in its dimension. This is how centering a block with auto margins works. By setting the left and right margin to `auto`, both sides of our block try to take up all of the available space and so push the box into the center.

By setting a {{cssxref("margin")}} of `auto` on one item in a set of flex items all aligned to start, we can create a split navigation. This works well with Flexbox and the alignment properties. As soon as there is no space available for the auto margin, the item behaves in the same way as all the other flex items and shrinks to try to fit into space.

{{EmbedGHLiveSample("css-examples/box-alignment/flexbox/auto-margins.html", '100%', 500)}}

## The `gap` properties

- {{cssxref("row-gap")}}
- {{cssxref("column-gap")}}
- {{cssxref("gap")}}

### Creating fixed size gaps between items

On the main axis, the `column-gap` property creates fixed size gaps between adjacent items.

On the cross axis the `row-gap` property creates spacing between adjacent flex lines, therefore `flex-wrap` must also be set to `wrap` for this to have any effect.

{{EmbedGHLiveSample("css-examples/box-alignment/flexbox/gap.html", '100%', 700)}}

## Reference

### CSS Properties

- {{cssxref("justify-content")}}
- {{cssxref("align-content")}}
- {{cssxref("place-content")}}
- {{cssxref("justify-items")}}
- {{cssxref("align-items")}}
- {{cssxref("place-items")}}
- {{cssxref("align-self")}}
- {{cssxref("row-gap")}}
- {{cssxref("column-gap")}}
- {{cssxref("gap")}}

### Glossary Entries

- {{Glossary("Cross axis")}}
- {{Glossary("Main axis")}}

## Guides

- [Alignment in flexbox](/en-US/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)

## External Resources

- [CSS Grid, Flexbox and Box Alignment](https://www.smashingmagazine.com/2016/11/css-grids-flexbox-box-alignment-new-layout-standard/)
- [Thoughts on partial implementations of Box Alignment](https://blogs.igalia.com/jfernandez/2017/05/03/can-i-use-css-box-alignment/)
