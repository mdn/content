---
title: Defining CSS gaps
short-title: Defining gaps
slug: Web/CSS/Guides/Gaps/Defining_gaps
page-type: guide
spec-urls: https://drafts.csswg.org/css-gaps/
sidebar: cssref
---

When creating [grid](/en-US/docs/Web/CSS/Guides/Grid_layout), [flexbox](/en-US/docs/Web/CSS/Guides/Flexible_box_layout), and [multi-column](/en-US/docs/Web/CSS/Guides/Multicol_layout) layouts using [CSS gap properties](/en-US/docs/Web/CSS/Guides/Gaps#properties), you can define and control gaps between columns and rows.

The {{cssxref("margin")}} and {{cssxref("padding")}} properties specify visual spacing around individual boxes. Using the [properties](/en-US/docs/Web/CSS/Guides/Gaps#properties) in the CSS gaps module, you can specify spacing between adjacent boxes in layouts that have {{glossary("gutters")}} and gaps.

This guide explains column and row gaps in different layout types, how to define gaps, and how to use percentages as a `gap` value.

## Understanding gaps

While margin and padding can specify spacing around individual boxes, it's sometimes more convenient to specify spacing between adjacent boxes within a given layout. This is particularly true when the spacing between sibling boxes differs from the spacing between the first or last box and the container's edge.

The {{cssxref("gap")}} property, and its {{cssxref("row-gap")}} and {{cssxref("column-gap")}} sub-properties, provide this functionality for flex, grid, and multi-column layouts.

A _gap_ is either a _column gap_ or a _row gap_. Their definitions vary by layout type. For all layout types, any gap disappears when it coincides with a fragmentation break.

### Grid container gaps

In the context of a grid container, _row gaps_ and _column gaps_ refer to the gutters between grid rows and grid columns, respectively. The width of the gaps makes the affected grid lines behave as though they acquired thickness: the grid track between two grid lines is the space between the gutters that represent them. By default, the width of the gap is `0` in both directions.

For the purpose of track sizing, each gutter is treated as an extra, empty, fixed-size track of the specified size. A grid item that spans multiple rows or columns also spans the gutters between them.

For example, if `gap: 20px` is set on a 4x4 grid of `100px` by `100px` boxes, the grid would be `460px` by `460px`. While each box is `100px` by `100px`, a grid item that spans two horizontal rows has a height of `220px`. If it spans three, its height is `340px`. If it spans all four, its height is `460px`.

Gutter gaps set the minimum spacing between items: additional spacing may be added by {{cssxref("justify-content")}} and {{cssxref("align-content")}} property values, increasing the size of the corresponding gaps.

Gutters appear only between tracks of the implicit grid. If a grid is fragmented between tracks, no gutter spacing is added between those tracks. There is no gutter before the first track or after the last track. If a track is collapsed, it has no gutter.

### Flex container gaps

Flex containers are created by setting {{cssxref("display")}} to `flex` or `inline-flex` on an element containing multiple children. By default, flex items are laid out in a single, non-wrapping row. The default gap between adjacent flex items and, if wrapping, between adjacent columns or rows, is `0`. Whether a flex container with multiple items has columns, rows, or both depends on the flow and wrapping set using the {{cssxref("flex-flow")}} shorthand.

You can add gaps between adjacent flex items along the main axis. If the {{cssxref("flex-flow")}} property is set to `row wrap` or `row-reverse wrap`, _column gap_ refers to the gutter between adjacent flex items and _row gap_ refers to the gutter between flex rows. If `flex-flow` is set to `column wrap` or `column-reverse wrap`, _row gap_ refers to the gutter between adjacent flex items and _column gap_ refers to the gutter between flex rows.

### Multi-col gaps

Multi-col containers are block-level elements with more than one column created by setting the {{cssxref("column-count")}} to a value greater than `1`. By default, columns are laid out in a single row, with a `1em` wide _column gap_ between adjacent columns. The _row gap_ is the gutter between rows of column boxes established by setting a {{cssxref("column-height")}} that requires columns to wrap, creating additional rows.

## Using the `gap` shorthand

The {{cssxref("row-gap")}} property sets the size of the gap ({{glossary("gutters","gutter")}}) between an element's rows. The {{cssxref("column-gap")}} property sets the size between an element's columns. Each property value can be specified as a `<length>`, a `<percentage>`, or the keyword `normal`. Percentage values are calculated against the [content box](/en-US/docs/Web/CSS/Guides/Box_model/Introduction#content_area) size of the container element for that dimension.

The {{cssxref("gap")}} shorthand defines the gaps between both rows and columns and accepts one or two values. The default value is `normal` for both sub-properties. If only one value is declared, that value applies to both.

The effect of the definition depends on whether the container uses flexbox, grid, or multi-column layout.

You can add visible separators to gaps; these are called gap decorations. If you add decorative rules for gaps between columns, rows, or both, they appear in the middle of their gap but have no effect on the size of the gap. These decorative lines are added to the otherwise "empty space" by using the {{cssxref("rule")}} shorthand or its constituent properties.

### Gaps in grid layouts

With grid containers, the `gap` property defines the size of the gutters between vertical and horizontal tracks. The shorthand property is specified as a value for `<'row-gap'>`, followed optionally by a value for `<'column-gap'>`. If only one value is declared, that value applies to both.

We create a grid container with seven columns:

```css live-sample___grid_gap
.container {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
}
```

Select different `gap` values to see the effect of each:

```css hidden live-sample___grid_gap
:has([value="a"]:checked) p {
  gap: 2px 10px;
}
:has([value="b"]:checked) p {
  gap: 10px 2px;
}
:has([value="c"]:checked) p {
  gap: 10px;
}
:has([value="d"]:checked) p {
  gap: 2px;
}
```

{{EmbedLiveSample("grid_gap", "", "420")}}

### Gaps in flexbox layouts

With flex containers, the `gap` property defines the space between both flex items and flex lines. Whether the first value is the gap between flex items or between flex lines depends on the direction.

Flex items are laid out in either rows or columns depending on the value of the {{cssxref("flex-direction")}} property. If set or defaulting to `row` or set to `row-reverse`, the first value defines the gap between flex lines, and the second value defines the gap between items within each line, between adjacent flex items. If only one value is included, that value is used for both dimensions.

If the `flex-direction` is set to `column` or `column-reverse`, the first value defines the gap between adjacent flex items within a flex line, and the second value defines the gaps between each flex line. Again, if only one value is included, that value is used for both dimensions.

We create a flex container that we allow to wrap:

```css live-sample___flex_gap
.container {
  display: flex;
  flex-wrap: wrap;
  max-width: 300px;
  height: 500px;
}
```

Select different `gap` and `flex-direction` values to see the effect of each:

```css hidden live-sample___flex_gap live-sample___percent_gap live-sample___percent_gap2
i {
  flex: 0 0 18%;
}
i:nth-of-type(2n) {
  flex: 0 0 12%;
}
i:nth-of-type(3n) {
  flex: 0 0 26%;
}
i:nth-of-type(5n) {
  flex: 0 0 20%;
}
i:nth-of-type(7n) {
  flex: 0 0 34%;
}
```

```css hidden live-sample___flex_gap
:has([value="a"]:checked) p {
  gap: 2px 10px;
}
:has([value="b"]:checked) p {
  gap: 10px 2px;
}
:has([value="c"]:checked) p {
  gap: 10px;
}
:has([value="d"]:checked) p {
  gap: 2px;
}

:has([value="row"]:checked) p {
  flex-direction: row;
}
:has([value="rowR"]:checked) p {
  flex-direction: row-reverse;
}
:has([value="col"]:checked) p {
  flex-direction: column;
}
:has([value="colR"]:checked) p {
  flex-direction: column-reverse;
}
```

```html hidden live-sample___flex_gap
<fieldset>
  <legend>Select a flex direction:</legend>
  <label
    ><input type="radio" value="row" name="dir" /> flex-direction: row;</label
  >
  <label
    ><input type="radio" value="rowR" name="dir" /> flex-direction:
    row-reverse;</label
  >
  <label
    ><input type="radio" value="col" name="dir" /> flex-direction:
    column;</label
  >
  <label
    ><input type="radio" value="colR" name="dir" /> flex-direction:
    column-reverse;</label
  >
</fieldset>
```

```html hidden live-sample___percent_gap live-sample___percent_gap2
<fieldset>
  <legend>Select a layout</legend>
  <label><input type="radio" value="grid" name="dir" checked />Grid</label>
  <label><input type="radio" value="flex" name="dir" />Flexbox</label>
  <label
    ><input type="radio" value="flex2" name="dir" />Flexbox (columns)</label
  >
  <label><input type="radio" value="mult" name="dir" />Multi-col</label>
</fieldset>
```

{{EmbedLiveSample("flex_gap", "", "900")}}

### Gaps in multi-column layouts

In [CSS multi-column layout](/en-US/docs/Web/CSS/Guides/Multicol_layout), the property defines the gutter between columns and rows of columns. The first value defines the gap between adjacent column boxes, while the second value defines the size of the gutter between rows of column boxes, if multiple rows were established by the {{cssxref("column-height")}} property.

We create a multi-col container with the `columns` shorthand property, setting a maximum `column-count` of seven columns, with the minimum width of each column being 2.5 ems, with a `column-height` of `2.35em` which will enable row creation. We also added a thin rule in the middle of the gap using the {{cssxref("rule")}} property:

```css hidden live-sample___col_gap
.container {
  columns: 7 1em / 2.35em;
  width: 450px;
  rule: 1px solid #ccc;
}
```

By default, there is a `1em` gap between rows and columns. Change this by selecting different `gap` values:

```css hidden live-sample___col_gap
:has([value="a"]:checked) p {
  gap: 0.5em 3em;
}
:has([value="b"]:checked) p {
  gap: 3em 0.5em;
}
:has([value="c"]:checked) p {
  gap: 0.5em;
}
:has([value="d"]:checked) p {
  gap: 3em;
}
```

{{EmbedLiveSample("col_gap", "", "820")}}

The gutters may appear larger than the gap size defined because the letters don't fill up the allotted space. The rule is in the middle of the gap, either 0.25em or 1.5em from the block and inline starts of the column and row's content depending on the setting selected. The extra white-space is at block- and inline-end, making the gaps look larger than they are.

```html hidden live-sample___grid_gap live-sample___flex_gap
<fieldset>
  <legend>Select a gap value:</legend>
  <label><input type="radio" value="a" name="gap" /> gap: 2px 10px;</label>
  <label><input type="radio" value="b" name="gap" /> gap: 10px 2px;</label>
  <label><input type="radio" value="c" name="gap" /> gap: 10px;</label>
  <label><input type="radio" value="d" name="gap" /> gap: 2px;</label>
</fieldset>
```

```html hidden live-sample___col_gap
<fieldset>
  <legend>Select a gap value:</legend>
  <label><input type="radio" value="a" name="gap" /> gap: 0.5em 3em;</label>
  <label><input type="radio" value="b" name="gap" /> gap: 3em 0.5em;</label>
  <label><input type="radio" value="c" name="gap" /> gap: 0.5em;</label>
  <label><input type="radio" value="d" name="gap" /> gap: 3em;</label>
</fieldset>
```

```html hidden live-sample___percent_gap live-sample___percent_gap2
<fieldset>
  <legend>Select a gap value:</legend>
  <label><input type="radio" value="a" name="gap" /> gap: 1% 5%;</label>
  <label><input type="radio" value="b" name="gap" /> gap: 5% 1%;</label>
  <label><input type="radio" value="c" name="gap" /> gap: 1%;</label>
  <label><input type="radio" value="d" name="gap" /> gap: 5%;</label>
</fieldset>
```

```html hidden live-sample___grid_gap live-sample___flex_gap live-sample___col_gap live-sample___percent_gap live-sample___percent_gap2
<div>
  <p class="container">
    <i>A</i>
    <i>B</i>
    <i>C</i>
    <i>D</i>
    <i>E</i>
    <i>F</i>
    <i>G</i>
    <i>H</i>
    <i>I</i>
    <i>J</i>
    <i>K</i>
    <i>L</i>
    <i>M</i>
    <i>N</i>
    <i>O</i>
    <i>P</i>
    <i>Q</i>
    <i>R</i>
    <i>S</i>
    <i>T</i>
    <i>U</i>
    <i>V</i>
    <i>W</i>
    <i>X</i>
    <i>Y</i>
    <i>Z</i>
  </p>
</div>
```

```css hidden live-sample___grid_gap live-sample___flex_gap live-sample___col_gap live-sample___percent_gap live-sample___percent_gap2
.container {
  font-size: 2rem;
  font-family: monospace;
  font-weight: bold;
}
i {
  background-color: #ccc;
  text-align: center;
}
label {
  display: block;
  font-family: monospace;
  margin: 10px;
}
```

## Specifying gap values as percentages

When a container has a fixed size, percentage values for column or row gaps are relative the width and height of the container, respectively.

In this example, the size of the container is set. Select different gap sizes, set using percentage values,and change the layout type to confirm that percentages are relative to the defined size of the container element in that dimension, for column-gaps that are either 3px or 15px wide and row gaps that are either 6px or 30px tall, even if the contents overflow the container.

```css live-sample___percent_gap
.container {
  width: 300px;
  height: 600px;
  background-color: #eee;
  rule: 1px dotted #666;
}
```

{{EmbedLiveSample("percent_gap", "", "800")}}

You'll note that when you set the `gap` property to a single value, when the `column-gap` and the `row-gap` have the same percent set, the row gap is twice the size of the column gap because the container is twice as tall as it is wide.

```css hidden live-sample___percent_gap live-sample___percent_gap2
fieldset {
  width: 44%;
  float: left;
}
p {
  clear: both;
  font-size: 1.25rem;
}

:has([value="a"]:checked) p {
  gap: 1% 5%;
}
:has([value="b"]:checked) p {
  gap: 5% 1%;
}
:has([value="c"]:checked) p {
  gap: 1%;
}
:has([value="d"]:checked) p {
  gap: 5%;
}

:has([value="grid"]:checked) p {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
}
:has([value="flex"]:checked) p {
  display: flex;
  flex-flow: row wrap;
}
:has([value="flex2"]:checked) p {
  display: flex;
  flex-flow: column wrap;
}
:has([value="mult"]:checked) p {
  columns: 5 2em / 2.35em;
}
```

If we don't have a defined height or width, the behavior of percents for gap values is very different. If the container has a fixed width, percent gaps are predictable.
Because if the container is auto‑sized, percent gaps could become circular - with the gap depending on the container size, but the container size depends on the gap - browsers treat percent gaps as `auto` (effectively `0`) during intrinsic sizing.

```css live-sample___percent_gap2
.container {
  background-color: #eee;
  rule: 1px dotted #666;
  height: auto;
  width: auto;
}
```

{{EmbedLiveSample("percent_gap2", "", "500")}}

In the example, the width of the container is constrained by the containing block, while the height is not.

With grid, percent gaps are treated as `auto` during intrinsic sizing, so the gap is collapsed until the sie of the container is determined. This means the size of the container is determined based solely on the dimensions of the content. If the example renders six rows of grid cells, there will be five row gaps, meaning the last row of grid items will overflow the background by either `6%` or `30%`, depending on whether the gap is set to `1%` or `5%`.

With flexbox, the percent gaps are treated as `0`, or ignored, during intrinsic sizing. The gap is only applied only after sizing. As the container's block size is `auto`, the percentage row gaps resolve against `0`; so `1%` or `5%` of `0` is `0`. Percentage values are effectively ignored - the `row-gap` is `0` - for both flex and multi-col layouts.

<!--You can show rules in every gap or in a subset of gaps, defining fully animatable rule widths, colors, and insets.-->

## See also

- [CSS gaps](/en-US/docs/Web/CSS/Guides/Gaps) module
- [Aligning items in a flex container](/en-US/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items)
- [Box alignment in grid layout](/en-US/docs/Web/CSS/Guides/Box_alignment/In_grid_layout)
