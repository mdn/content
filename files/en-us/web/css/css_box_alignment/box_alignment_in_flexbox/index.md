---
title: Box alignment in flexbox
slug: Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox
page-type: guide
---

{{CSSRef}}

The [box alignment](/en-US/docs/Web/CSS/CSS_box_alignment) module details how alignment works in various layout methods. In this guide, we explore how box alignment works in the context of [flexbox](/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox). As this guide aims to detail things which are specific to flexbox and box alignment, it should be read in conjunction with the [box alignment overview](/en-US/docs/Web/CSS/CSS_box_alignment/Box_alignment) guide, which details the common features of box alignment across layout methods.

## Basic example

In this flexbox example, three flex items are aligned on the main axis using {{cssxref("justify-content")}} and on the cross axis using {{cssxref("align-items")}}. The first item overrides the `align-items` values set on the group by setting {{cssxref("align-self")}} to `center`.

```html live-sample___flex-align-items
<div class="box">
  <div>One</div>
  <div>Two</div>
  <div>Three <br />has <br />extra <br />text</div>
</div>
```

```css hidden live-sample___flex-align-items
.box > * {
  padding: 20px;
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
}
```

```css live-sample___flex-align-items
.box {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  border: 2px dotted rgb(96 139 168);
}

.box :first-child {
  align-self: center;
}
```

{{EmbedLiveSample("flex-align-items")}}

## The axes and flex-direction

Flexbox respects the writing mode of the document, therefore if you are working in English and set {{cssxref("justify-content")}} to `flex-end` this will align the items to the end of the flex container. If you are working with {{cssxref("flex-direction")}} set to `row`, this alignment will be in the inline direction.

However, in flexbox you can change the main axis by setting `flex-direction` to `column`. In this case, `justify-content` will align items in the block direction. Therefore it is easiest to think about the main and cross axis when working in flexbox like so:

- The main axis = direction set by `flex-direction` = alignment via `justify-content`
- The cross axis = runs across the main axis = alignment via {{cssxref("align-content")}}, {{cssxref("align-self")}}/{{cssxref("align-items")}}

### Main Axis Alignment

- {{cssxref("justify-content")}}

### Cross Axis Alignment

- {{cssxref("align-self")}}
- {{cssxref("align-items")}}
- {{cssxref("align-content")}}

### There is no justify-self in flexbox

On the main axis, Flexbox deals with the flex items as a group. The amount of space required to lay out the items is calculated, and the leftover space is then available for distribution. The `justify-content` property controls how that leftover space is used. Set `justify-content: flex-end` and the extra space is placed before the items, `justify-content: space-around` and it is placed either side of the item in that dimension, etc.

This means that a `justify-self` property does not make sense in flexbox as we are always dealing with moving the entire group of items around.

On the cross axis `align-self` makes sense as we potentially have additional space in the flex container in that dimension, in which a single item can be moved to the start and end.

## Alignment and auto margins

There is a specific use case in flexbox where we might think that a `justify-self` property is what we need, and this is when we want to split a set of flex items, perhaps to create a split navigation pattern. For this use case, we can use an `auto` margin. A margin set to `auto` will absorb all available space in its dimension. This is how centering a block with auto margins works. By setting the left and right margin to `auto`, both sides of our block try to take up all of the available space and so push the box into the center.

By setting a {{cssxref("margin")}} of `auto` on one item in a set of flex items all aligned to start, we can create a split navigation. This works well with flexbox and the alignment properties. As soon as there is no space available for the auto margin, the item behaves in the same way as all the other flex items and shrinks to try to fit into space.

```html live-sample___auto-margins
<div class="box">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div class="push">Four</div>
  <div>Five</div>
</div>
```

```css hidden live-sample___auto-margins
.box > * {
  padding: 20px;
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
}
```

```css live-sample___auto-margins
.box {
  display: flex;
  border: 2px dotted rgb(96 139 168);
}
.push {
  margin-left: auto;
}
```

{{EmbedLiveSample("auto-margins")}}

## The `gap` properties

- {{cssxref("row-gap")}}
- {{cssxref("column-gap")}}
- {{cssxref("gap")}}

### Creating fixed size gaps between items

On the main axis, the `column-gap` property creates fixed size gaps between adjacent items.

On the cross axis the `row-gap` property creates spacing between adjacent flex lines, therefore {{cssxref("flex-wrap")}} must also be set to `wrap` for this to have any effect.

```html live-sample___gap
<div class="box">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
  <div>Six</div>
</div>
```

```css hidden live-sample___gap
.box > * {
  padding: 20px;
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
}
```

```css live-sample___gap
.box {
  width: 450px;
  display: flex;
  flex-wrap: wrap;
  row-gap: 10px;
  column-gap: 2em;
  border: 2px dotted rgb(96 139 168);
}

.box > * {
  flex: 1;
}
```

{{EmbedLiveSample("gap")}}

## See also

- [Box alignment overview](/en-US/docs/Web/CSS/CSS_box_alignment/Box_alignment)
- [Box alignment in CSS grid layout](/en-US/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout)
- [Box alignment in multiple-column layout](/en-US/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_multi-column_layout)
- [Box alignment for block, absolutely positioned and table layout](/en-US/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_block_abspos_tables)
- [Alignment in flexbox](/en-US/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- {{Glossary("Cross axis")}}
- {{Glossary("Main axis")}}
