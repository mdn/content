---
title: Box alignment in grid layout
slug: Web/CSS/Guides/Box_alignment/In_grid_layout
page-type: guide
sidebar: cssref
---

The [CSS box alignment](/en-US/docs/Web/CSS/Guides/Box_alignment) module details how alignment works in various layout methods. On this page, we explore how box alignment works in the context of [CSS grid layout](/en-US/docs/Web/CSS/CSS_grid_layout).

As this guide aims to detail things which are specific to CSS grid layout and Box Alignment, it should be read in conjunction with the [box alignment overview](/en-US/docs/Web/CSS/Guides/Box_alignment/Overview) guide, which details the common features of box alignment across layout methods.

## Basic example

In this example using [grid layout](/en-US/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout), there is extra space in the {{glossary("grid container")}} after laying out the fixed-width tracks on the inline {{glossary("main axis")}}. This space is distributed using {{cssxref("justify-content")}}. On the block {{glossary("cross axis")}} the alignment of the items inside their grid areas is controlled with {{cssxref("align-items")}}. The first item overrides the `align-items` value set on the group by setting {{cssxref("align-self")}} to `center`.

```html live-sample___grid-align-items
<div class="box">
  <div>One</div>
  <div>Two</div>
  <div>Three <br />has <br />extra <br />text</div>
  <div>Four</div>
  <div>Five</div>
  <div>Six</div>
</div>
```

```css hidden live-sample___grid-align-items
body {
  font-family: sans-serif;
}
.box > * {
  padding: 20px;
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
}
```

```css live-sample___grid-align-items
.box {
  display: grid;
  grid-template-columns: 120px 120px 120px;
  align-items: start;
  justify-content: space-between;
  border: 2px dotted rgb(96 139 168);
}

.box :first-child {
  align-self: center;
}
```

{{EmbedLiveSample("grid-align-items", , 200)}}

## Grid axes

As a two-dimensional layout method, when working with grid layout we always have two axes on which to align our items. We have access to all of the box alignment properties to help us achieve this.

The inline axis is the axis that corresponds to the direction that words in a sentence would run in the writing mode used. Therefore, in a horizontal language such as English or Arabic, the inline direction runs horizontally. Should you be in a vertical writing mode, the inline axis will run vertically.

![Inline axes are horizontal.](inline_axis.png)

To align things on the inline axis you use the properties that start with `justify-`: {{cssxref("justify-content")}}, {{cssxref("justify-items")}} and {{cssxref("justify-self")}}.

The block axis crosses the inline axis in the direction that blocks are displayed down the page — for example, paragraphs in English are displayed one below the other vertically. This is the block dimension.

To align things on the block axis you use the properties that start with `align-`, {{cssxref("align-content")}}, {{cssxref("align-items")}} and {{cssxref("align-self")}}.

![The block axes are vertical.](block_axis.png)

## Self alignment

These properties deal with aligning the item inside the grid area it is placed into:

- {{cssxref("justify-self")}}
- {{cssxref("align-self")}}
- {{cssxref("place-self")}}
- {{cssxref("justify-items")}}
- {{cssxref("align-items")}}
- {{cssxref("place-items")}}

The `*-items` properties, `align-items` and `justify-items`, are applied to the grid container and set alignment for all grid items as a group. The `*-self` properties, `align-self` and `justify-self`, are instead set on grid items. This means that you can set alignment on all grid items, and then override any items that need a different alignment by applying the `align-self` or `justify-self` property to the rules for the individual grid items.

The initial value for `align-items` and `justify-items` is `stretch`, and the initial value for `align-self` and `justify-self` is `auto`, so the item will stretch over the entire grid area. The exception to this rule is where the item has an intrinsic {{glossary("aspect ratio")}}, for example an image. In this case the item will be aligned to `start` in both dimensions in order that the image is not distorted.

## Content alignment

These properties deal with aligning the tracks of the grid when there is extra space to distribute:

- {{cssxref("justify-content")}}
- {{cssxref("align-content")}}
- {{cssxref("place-content")}}

This scenario will occur if the tracks that you have defined total less than the total width of the grid container.

## Gap and legacy grid-gap properties

These properties define the spacing between grid items within a grid container:

- {{cssxref("row-gap")}}
- {{cssxref("column-gap")}}
- {{cssxref("gap")}}

The grid specification originally contained the definition for the properties {{cssxref("row-gap", "grid-row-gap")}}, {{cssxref("column-gap", "grid-column-gap")}} and {{cssxref("gap", "grid-gap")}}. These have since been moved into the Box Alignment specification and aliased to {{cssxref("row-gap")}}, {{cssxref("column-gap")}}, and {{cssxref("gap")}}. This allows them to be used for other layout methods where a gap between items makes sense.

## See also

- [Box alignment overview](/en-US/docs/Web/CSS/Guides/Box_alignment/Overview)
- [Box alignment in flexbox](/en-US/docs/Web/CSS/Guides/Box_alignment/In_flexbox)
- [Box alignment in multiple-column layout](/en-US/docs/Web/CSS/Guides/Box_alignment/In_multi-column_layout)
- [Box alignment for block, absolutely positioned and table layout](/en-US/docs/Web/CSS/Guides/Box_alignment/In_block_abspos_tables)

- [Aligning items in CSS grid layout](/en-US/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout)
