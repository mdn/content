---
title: Mastering wrapping of flex items
slug: Web/CSS/CSS_flexible_box_layout/Mastering_wrapping_of_flex_items
page-type: guide
---

{{CSSRef}}

Flexbox was designed as a single-dimensional layout tool — it deals with laying out items as a row or column — but not both at once. It is, however, possible to wrap flex items onto new lines, creating new rows if {{cssxref("flex-direction")}} is `row` and new columns if `flex-direction` is `column`. This guide explains flexbox wrapping, what it is designed for, and what situations require [CSS grid layout](/en-US/docs/Web/CSS/CSS_grid_layout) rather than flexbox.

## Making things wrap

The initial value of the {{cssxref("flex-wrap")}} property is `nowrap`. This means if a set of flex items is too wide for their flex container, they will overflow it. To make them wrap once they are too wide, add the `flex-wrap` property with a value of `wrap`, or use the shorthand {{cssxref("flex-flow")}} with values of `row wrap` or `column wrap`. Items will then wrap onto new lines when they overflow their container.

In this example, there are ten flex items with a `flex-basis` of `160px` that can grow and shrink. Once there is not enough space to place another 160 pixel item in a row, a new flex line is created. New lines are created as needed until all of the items are placed. As the items can grow, they will expand to fill each row completely. If there is only one item on the final line it will stretch to fill the entire line.

```html live-sample___row-wrap
<div class="box">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
  <div>Six</div>
  <div>Seven</div>
  <div>Eight</div>
  <div>Nine</div>
  <div>Ten</div>
</div>
```

```css live-sample___row-wrap
.box {
  width: 500px;
  border: 2px dotted rgb(96 139 168);
  display: flex;
  flex-wrap: wrap;
}

.box > * {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
  flex: 1 1 160px;
}
```

{{EmbedLiveSample("row-wrap")}}

The same thing happens with flex columns. To wrap and create new columns, the container needs to have a height. In the case of columns, items stretch vertically to fill each column completely.

```html live-sample___column-wrap
<div class="box">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
  <div>Six</div>
  <div>Seven</div>
  <div>Eight</div>
  <div>Nine</div>
  <div>Ten</div>
</div>
```

```css live-sample___column-wrap
.box {
  border: 2px dotted rgb(96 139 168);
  height: 300px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
.box > * {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
  flex: 1 1 80px;
}
```

{{EmbedLiveSample("column-wrap", "", "320px")}}

## Wrapping and flex-direction

Wrapping works as you might expect when combined with `flex-direction`. If `flex-direction` is set to `row-reverse` then the items will start from the end edge of the container and lay themselves out in reverse ordered lines.

```html live-sample___row-reverse-wrap
<div class="box">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
  <div>Six</div>
  <div>Seven</div>
  <div>Eight</div>
  <div>Nine</div>
  <div>Ten</div>
</div>
```

```css live-sample___row-reverse-wrap
.box {
  border: 2px dotted rgb(96 139 168);
  display: flex;
  flex-wrap: wrap;
  flex-direction: row-reverse;
  width: 500px;
}
.box > * {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
  flex: 1 1 160px;
}
```

{{EmbedLiveSample("row-reverse-wrap")}}

Note that the reversing is only happening in the inline, row direction. We start on the right then go onto the second line and again start from the right. We aren't reversing in both directions, starting from the bottom coming up the container!

## Single-dimensional layout explained

As we have seen from the above examples if our items are allowed to grow and shrink, when there are fewer items in the last row or column then those items grow to fill the available space.

There are no flexbox features to tell items in one row to line up with items in the row above — each flex line acts like a new flex container. It deals with space distribution across the main axis. If there is only one item, and that item is allowed to grow, it will fill the axis just as if you had a single item flex container. If you want layout in two dimensions then you probably want grid layout.

This example demonstrates the difference, using CSS grid layout to create a layout with as many columns of at least `160px` as will fit, distributing the extra space between all columns. We use the same HTML as the [flexbox wrapped row example](#making_things_wrap) above but set `display: grid` on it. Instead of the {{cssxref("flex")}} shorthand, which has no effect outside of flexbox, we set the item's minimum width and ability to grow directly on the container with {{cssxref("grid-template-columns")}}. With CSS grid, the last item stays in its grid cell; grid items don't stretch when there are fewer of them in the last row.

```html live-sample___grid-example
<div class="box">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
  <div>Six</div>
  <div>Seven</div>
  <div>Eight</div>
  <div>Nine</div>
  <div>Ten</div>
</div>
```

```css live-sample___grid-example
.box {
  border: 2px dotted rgb(96 139 168);
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  width: 500px;
}

.box > * {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
}
```

{{EmbedLiveSample("grid-example")}}

This is the difference between one and two-dimensional layouts. In a one-dimensional layout method like flexbox, we only control the row or column. In a two-dimensional grid layout, we control both at the same time. If you want the space distribution row by row, use Flexbox. If you don't, use CSS grid.

## How do flexbox-based grid systems work?

Flexbox-based layouts can be forced to line up as grid systems, but that is not the intended purpose of flexbox. If you assign percentage widths to flex items — either using `flex-basis` or by adding a width to the item itself and leaving the value of `flex-basis` as `auto` — you can give the impression of a two-dimensional layout.

In this example, `flex-grow` and `flex-shrink` have been set to `0` to make inflexible flex items. The flexibility is controlled via percentages.

```html live-sample___flex-grid
<div class="box">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
  <div>Six</div>
  <div>Seven</div>
  <div>Eight</div>
  <div>Nine</div>
  <div>Ten</div>
</div>
```

```css live-sample___flex-grid
* {
  box-sizing: border-box;
}

.box {
  width: 500px;
  border: 2px dotted rgb(96 139 168);
  display: flex;
  flex-wrap: wrap;
}

.box > * {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
  flex: 0 0 33.3333%;
}
```

{{EmbedLiveSample("flex-grid")}}

This technique allows you to line up flex items on the cross-axis. However, when you catch yourself adding widths to flex items in this way or adding empty flex items to take up space, it is a good indication you may want to switch to CSS grid layout for that component.

## Creating gutters between items

To create gaps or gutters between flex items, use the {{CSSXref("gap")}} property directly on the flex container to create a fixed space between adjacent flex items. The `gap` property is a shorthand for `row-gap` and `column-gap`. These properties specify the size of the gutters between rows and columns within grid, flex, and multi-column layouts.

The `gap` property is not the only thing that can add space between items. Margins, padding, `justify-content`, and `align-content` can also increase the size of the gutter, affecting the actual size of the gap.

To see how the `gap` property differs from `margin` in both axes, try changing the `gap` value in the container `.box` and adding a `margin` value to the `.box > *` rule in the stylesheet below. Click the "Reset" button to revert to the previous values.

```html live-sample___gaps
<div class="wrapper">
  <div class="box">
    <div>One</div>
    <div>Two</div>
    <div>Three</div>
    <div>Four</div>
    <div>Five</div>
    <div>Six</div>
    <div>Seven</div>
    <div>Eight</div>
    <div>Nine</div>
    <div>Ten</div>
  </div>
</div>
```

```css live-sample___gaps
.wrapper {
  border: 2px dotted rgb(96 139 168);
  width: 500px;
}
.box {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.box > * {
  flex: 1 1 160px;
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
}
```

{{EmbedLiveSample("gaps", "", "220px")}}

## Collapsed items

The flexbox specification details what should happen if a flex item is collapsed by setting `visibility: collapse` on an item. See the MDN documentation for the {{cssxref("visibility")}} property. The specification describes the behavior as follows:

> "Specifying visibility:collapse on a flex item causes it to become a collapsed flex item, producing an effect similar to visibility:collapse on a table-row or table-column: the collapsed flex item is removed from rendering entirely, but leaves behind a "strut" that keeps the flex line's cross-size stable. Thus, if a flex container has only one flex line, dynamically collapsing or uncollapsing items may change the flex container's main size, but is guaranteed to have no effect on its cross size and won't cause the rest of the page's layout to "wobble". Flex line wrapping is re-done after collapsing, however, so the cross-size of a flex container with multiple lines might or might not change." - [Collapsed items](https://www.w3.org/TR/css-flexbox-1/#visibility-collapse)

This behavior is useful if you want to target flex items using JavaScript to show and hide content for example. The example in the specification demonstrates one such pattern.

In the following live example, the non-wrapping flex container contains a row with three flex items that are set to flex to equal sizes. The third item has multiple lines of content, growing the container. The default for `align-items` is `normal`; for flex items, `normal` behaves as `stretch`, so all the items stretch by default, filling the container's cross-size height.

The item creating the cross-size is set to `visibility: collapse`, which collapses or hides the flex item, depending on the browser. In either case, the flex container retains a _strut_ of the cross-size even though it is not visible. This way, if the item is made visible, the cross-size of the single-line flex container will not change. If you remove `visibility: collapse` from the CSS or change the value to `visible`, you will see the item appear, and the main-size space is redistributed between non-collapsed items, while the cross-size remains unchanged.

> [!NOTE]
> Use Firefox for the example below as other common browsers treat `collapse` as `hidden`.

```html hidden live-sample___visibility-collapse
<p>
  <label><input type="checkbox" /> Toggle <code>visibility</code> value</label>
</p>
```

```html live-sample___visibility-collapse
<div class="box">
  <div>One</div>
  <div>Two</div>
  <div class="collapse">Three <br />has <br />extra <br />text</div>
</div>
```

```css live-sample___visibility-collapse
.box {
  border: 2px dotted rgb(96 139 168);
  display: flex;
  width: 600px;
}
.box > * {
  flex: 1 1 200px;
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
}
.collapse {
  visibility: collapse;
}
```

```css hidden live-sample___visibility-collapse
p:has(:checked) + div .collapse {
  visibility: visible;
}
```

{{EmbedLiveSample("visibility-collapse")}}

The above was a single-line, non-wrapping flex container with a set size of `600px` so whether the item is visible or collapsed, the width is the same. It is important to understand that while the container retains a strut of the collapsed item's cross-size, the main size is not preserved. Multi-line flex containers rewrap their items after removing collapsed items from rendering. The new space that a collapsed item leaves in the main direction may cause non-collapsed items to be placed in a different line than if the item were not collapsed. Because each line is laid out like an independent single-line flex container and its composition may change after collapsing, its cross-axis size may change too.

The following example shows this behavior. The third flex item is collapsed, so it occupies zero space along the main axis (the inline-size is `0`). When collapsed, its strut is on the first row after the fourth item, with the first row being tall enough to fit the three lines of text that the third item would have had. Then, if you uncollapse the item (e.g. by removing the `collapse` class), there is no longer enough horizontal space for the fifth item on the first row, and it moves to the second. This causes the second row to grow to fit the two lines of text of its new member, and the last flex item is pushed onto a new row. With a taller second line and a new third line, the flex container is much taller than it was before.

> [!NOTE]
> Use Firefox for the example below as other common browsers treat `collapse` as `hidden`.

```html hidden live-sample___wrapped-visibility-collapse
<p>
  <label><input type="checkbox" /> Toggle <code>visibility</code> value</label>
</p>
```

```html live-sample___wrapped-visibility-collapse
<div class="box">
  <div>One</div>
  <div>Two is the width of this sentence.</div>
  <div class="collapse">Three <br />is <br />five <br />lines <br />tall.</div>
  <div>Four</div>
  <div>Five<br />Five</div>
  <div>Six</div>
  <div>Seven</div>
  <div>Eight</div>
  <div>Nine</div>
  <div>Ten</div>
  <div>Eleven is longer</div>
</div>
```

```css live-sample___wrapped-visibility-collapse
.box {
  border: 2px dotted rgb(96 139 168);
  width: 500px;
  display: flex;
  flex-wrap: wrap;
}
.box > * {
  padding: 10px;
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
  flex: 1 1 auto;
  min-width: 50px;
}
.collapse {
  visibility: collapse;
}
```

```css hidden live-sample___wrapped-visibility-collapse
p:has(:checked) + div .collapse {
  visibility: visible;
}
```

{{EmbedLiveSample("wrapped-visibility-collapse", "", "300")}}

If this causes a problem for your layout, it may require a rethinking of the structure, for example, putting each row into a separate flex container so that they can't shift rows.

### Using `visibility: hidden` and `display: none`

In the previous live examples, try using `visibility: hidden` or `display: none` instead of `visibility: collapse`. Using `visibility: hidden`, the item is made invisible, but the box is kept in the formatting structure, so it still behaves as if it were part of the layout.
When you use `display: none`, the item is completely removed from the formatting structure. Not only is it invisible but the structure is removed as well. This means counters ignore it and things like transitions do not run.
