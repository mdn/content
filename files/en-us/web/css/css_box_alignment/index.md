---
title: CSS Box Alignment
slug: Web/CSS/CSS_Box_Alignment
tags:
  - CSS
  - CSS Box Alignment
  - Grid Layout
  - Guide
  - alignment
  - box alignment
  - flexbox
  - multi-column
---
{{CSSRef}}

The CSS Box Alignment module specifies CSS features that relate to the alignment of boxes in the various CSS box layout models: block layout, table layout, flex layout, and grid layout. The module aims to create a consistent method of alignment across all of CSS. This document details the general concepts found in the specification.

> **Note:** The documentation for each layout method will detail how Box Alignment is applied there.

## Older alignment methods

CSS traditionally had very limited alignment capabilities. We were able to align text using {{cssxref("text-align")}}, center blocks using auto {{cssxref("margin")}}s, and in table or inline-block layouts using the {{cssxref("vertical-align")}} property. Alignment of text is now covered by the [Inline Layout](https://www.w3.org/TR/css-inline-3/) and [CSS Text](https://www.w3.org/TR/css-text-3/) modules, and for the first time in Box Alignment we have full horizontal and vertical alignment capabilities.

If you initially learned [Flexbox](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout) then you may consider these properties to be part of the Flexbox specification, and some of the properties are indeed listed in Level 1 of Flexbox. However the specification notes that the Box Alignment specification should be referred to as it may add additional capabilities over what is currently in Flexbox.

## Basic examples

The following examples demonstrate how some of the Box Alignment Properties are applied in [Grid](/en-US/docs/Web/CSS/CSS_Grid_Layout) and [Flexbox](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout).

### CSS grid layout alignment example

In this example using Grid Layout, there is extra space in the grid container after laying out the fixed width tracks on the inline (main) axis. This space is distributed using {{cssxref("justify-content")}}. On the block (cross) axis the alignment of the items inside their grid areas is controlled with {{cssxref("align-items")}}. The first item overrides the `align-items` value set on the group by setting {{cssxref("align-self")}} to `center`.

{{EmbedGHLiveSample("css-examples/box-alignment/overview/grid-align-items.html", '100%', 700)}}

### Flexbox Alignment Example

In this example, three flex items are aligned on the main axis using `justify-content` and on the Cross Axis using `align-items`. The first item overrides the `align-items` set on the group by setting `align-self` to `center`.

{{EmbedGHLiveSample("css-examples/box-alignment/overview/flex-align-items.html", '100%', 700)}}

## Key concepts and terminology

The specification details some alignment terminology to make it easier to discuss these alignment properties outside of their implementation within a particular layout method. There are also some key concepts which are common to all layout methods.

### Relationship to writing modes

Alignment is linked to writing modes in that when we align an item we do not consider whether we are aligning it to the physical dimensions of top, right, bottom and left. Instead we describe alignment in terms of the start and end of the particular dimension we are working with. This ensures that alignment works in the same way whichever writing mode the document has.

### Two dimensions of alignment

When using the box alignment properties you will align content on one of two axes — the inline (or main) axis, and the block (or cross) axis. The inline axis is the axis along which words in a sentence flow in the writing mode being used — for English, for example, the inline axis is horizontal. The block axis is the axis along which blocks, such as paragraph elements, are laid out and it runs across the Inline axis.

![](two-axes.png)

When aligning items on the inline axis you will use the properties which begin with `justify-`:

- {{cssxref("justify-items")}}
- {{cssxref("justify-self")}}
- {{cssxref("justify-content")}}

When aligning items on the block axis you will use the properties that begin `align-`:

- {{cssxref("align-items")}}
- {{cssxref("align-self")}}
- {{cssxref("align-content")}}

Flexbox adds an additional complication in that the above is true when {{cssxref("flex-direction")}} is set to `row`. The properties are swapped when flexbox is set to `column`. Therefore, when working with flexbox it is easier to think about the main and cross axis rather than inline and block. The `justify-` properties are always used to align on the main axis, the `align-` properties on the cross axis.

### The alignment subject

The **alignment subject** is the thing that is being aligned. For `justify-self` or `align-self`, or when setting these values as a group with `justify-items` or `align-items`, this will be the margin box of the element that this property is being used on. The `justify-content` and `align-content` properties differ per layout method.

### The alignment container

The **alignment container** is the box the subject is being aligned inside. This will typically be the alignment subject’s containing block. An alignment container may contain one or many alignment subjects.

The below image shows an alignment container with two alignment subjects inside.

![](align-container-subjects.png)

### Fallback alignment

If you set an alignment that cannot be fulfilled, then the **fallback alignment** will come into play and deal with the available space. This fallback alignment is specified individually for each layout method and detailed on the page for that method.

## Types of alignment

There are three different types of alignment that the specification details; these use keyword values.

- **Positional alignment**: specifying the position of an alignment subject with relation to its alignment container.
- **Baseline alignment**: These keywords define alignment as a relationship among the baselines of multiple alignment subjects within an alignment context.
- **Distributed alignment**: These keywords define alignment as a distribution of space among alignment subjects.

### Positional alignment keyword values

The following values are defined for positional alignment, and can be used as values for content alignment with `justify-content` and `align-content` and also for self alignment with `justify-self` and `align-self`.

- `center`
- `start`
- `end`
- `self-start`
- `self-end`
- `flex-start` for Flexbox only
- `flex-end` for Flexbox only
- `left`
- `right`

Other than the physical values of `left` and `right`, which relate to physical attributes of the screen, all of the other values are logical values and relate to the writing mode of the content.

For example, when working in CSS Grid Layout, if you are working in English and set `justify-content` to `start` this will move the items in the inline dimension to the start, which will be the left as sentences in English start on the left. If you were using Arabic, a right to left language, then the same value of `start` would result in the items moving to the right, as sentences in Arabic start on the right-hand side of the page.

Both of these examples have `justify-content: start`, however the location of start changes according to the writing mode.

![](writing-mode-start.png)

### Baseline alignment

The Baseline alignment keywords are used to align the baselines of boxes across a group of alignment subjects. They can be used as values for content alignment with `justify-content` and `align-content` and also for self alignment with `justify-self` and `align-self`.

- `baseline`
- `first baseline`
- `last baseline`

Baseline content alignment — specifying a baseline alignment value for `justify-content` or `align-content` — works in layout methods that lay items out in rows. The alignment subjects are baseline aligned against each other by adding padding inside the boxes.

Baseline self alignment shifts the boxes to align by baseline by adding a margin outside the boxes. Self alignment is when using `justify-self` or `align-self`, or when setting these values as a group with `justify-items` and `align-items`.

### Distributed alignment

The **distributed alignment keywords** are used with the `align-content` and `justify-content` properties. These keywords define what happens to any additional space after alignment subjects have been displayed. The values are as follows:

- `stretch`
- `space-between`
- `space-around`
- `space-evenly`

For example, in Flex Layout items are aligned with `flex-start` initially. Working in a horizontal top to bottom writing mode such as English, with `flex-direction` as `row` the items start on the far left and any available space after displaying the items is placed after the items.

![](justify-content-start.png)

If you set `justify-content: space-between` on the flex container, the available space is now shared out and placed between the items.

![](justify-content-space-between.png)

There needs to be space available in the dimension you wish to align the items in, in order for these keywords to take effect. With no space, there is nothing to distribute.

## Overflow alignment

The `safe` and `unsafe` keywords help define behavior when an alignment subject is larger than the alignment container. The `safe` keyword will align to `start` in the case of a specified alignment causing an overflow, the aim being to avoid “data loss” where part of the item is outside of the boundaries of the alignment container and can’t be scrolled to.

If you specify `unsafe` then the alignment will be honoured even if it would cause such data loss.

## Gaps between boxes

The box alignment specification also includes the `gap`, `row-gap`, and `column-gap` properties. These properties enable the setting of a consistent gap between items in a row or column, in any layout method which has items arranged in this way.

The `gap` property is a shorthand for `row-gap` and `column-gap`, which allows us to set these properties at once:

- {{cssxref("row-gap")}}
- {{cssxref("column-gap")}}
- {{cssxref("gap")}}

In the below example, a grid layout uses the `gap` shorthand to set a `10px` gap between row tracks, and a `2em` gap between column tracks.

{{EmbedGHLiveSample("css-examples/box-alignment/overview/grid-gap.html", '100%', 700)}}

> **Note:** The early grid implementation included `-gap` properties prefixed with `grid-`. All browsers now support the unprefixed properties, though you may see the following legacy properties in examples and tutorials: {{cssxref("row-gap")}}, {{cssxref("column-gap")}}, and {{cssxref("gap")}}. The prefixed versions will be maintained as an alias of the unprefixed ones.

Be aware that other things may increase the visual gap displayed, for example using the space distribution keywords or adding margins to items.

## Pages detailing individual alignment properties

As the CSS box alignment properties are implemented differently depending on the specification they interact with, refer to the following pages for each layout type for details of how to use the alignment properties with it:

- [Box alignment in Flexbox](/en-US/docs/Web/CSS/CSS_Box_Alignment/Box_Alignment_in_Flexbox)
- [Box alignment in CSS Grid Layout](/en-US/docs/Web/CSS/CSS_Box_Alignment/Box_Alignment_In_Grid_Layout)
- [Box alignment in multiple-column layout](/en-US/docs/Web/CSS/CSS_Box_Alignment/Box_Alignment_in_Multi-column_Layout)
- [Box alignment for block, absolutely positioned and table layout](/en-US/docs/Web/CSS/CSS_Box_Alignment/Box_Alignment_In_Block_Abspos_Tables)

## Reference

### CSS Properties

- {{cssxref("justify-content")}}
- {{cssxref("align-content")}}
- {{cssxref("place-content")}}
- {{cssxref("justify-items")}}
- {{cssxref("align-items")}}
- {{cssxref("place-items")}}
- {{cssxref("justify-self")}}
- {{cssxref("align-self")}}
- {{cssxref("place-self")}}
- {{cssxref("row-gap")}}
- {{cssxref("column-gap")}}
- {{cssxref("gap")}}

### Glossary Entries

- {{Glossary("Cross axis")}}
- {{Glossary("Main axis")}}
- {{Glossary("Alignment container")}}
- {{Glossary("Alignment subject")}}
- {{Glossary("Fallback alignment")}}

## Guides

- CSS Flexbox guide: _[Basic concepts of Flexbox](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)_
- CSS Flexbox guide: _[Aligning items in a flex container](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container)_
- CSS Grid guide: _[Box alignment in CSS Grid layouts](/en-US/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout)_

## External Resources

- [Box alignment cheatsheet](https://rachelandrew.co.uk/css/cheatsheets/box-alignment)
- [CSS Grid, Flexbox and Box alignment](https://www.smashingmagazine.com/2016/11/css-grids-flexbox-box-alignment-new-layout-standard/)
- [Thoughts on partial implementations of Box alignment](https://blogs.igalia.com/jfernandez/2017/05/03/can-i-use-css-box-alignment/)
