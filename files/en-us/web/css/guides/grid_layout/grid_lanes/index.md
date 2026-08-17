---
title: Grid lanes layout
slug: Web/CSS/Guides/Grid_layout/Grid_lanes
page-type: guide
status:
  - experimental
browser-compat:
  - css.properties.display.grid-lanes
  - css.properties.display.inline-grid-lanes
sidebar: cssref
---

{{SeeCompatTable}}

Level 3 of the [CSS grid layout](/en-US/docs/Web/CSS/Guides/Grid_layout) specification defines **grid lanes layout**, which is accessed via the {{cssxref("display")}} values `grid-lanes` and `inline-grid-lanes`. This guide explains how grid lanes layout works and how to use it.

Grid lanes layout is a layout method where one axis uses a typical strict grid layout, most often columns, and the other uses a stacking algorithm. On the stacking axis, rather than sticking to a strict grid with gaps being left after shorter items, the items in the following row rise up to fill the gaps.

## Creating a grid lanes layout

To create the most common grid lanes layout, where the columns are laid out in a grid and the rows are packed using the grid lanes layout algorithm, use **`display: grid-lanes`** along with {{cssxref("grid-template-columns")}}.

The child elements of this container will lay out item by item along the stacking axis according to the grid lanes layout algorithm: each row of items loads into the column with the most room, causing a tightly packed layout without strict row tracks.

```css hidden live-sample___block-axis live-sample___inline-axis live-sample___spanners live-sample___positioned
* {
  box-sizing: border-box;
}

body {
  font: 1.2em sans-serif;
}

.grid {
  padding: 10px;
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.item {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  color: #d9480f;
}
```

```css live-sample___block-axis
.grid {
  display: grid-lanes;
  gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
}
```

```html live-sample___block-axis live-sample___inline-axis
<div class="grid">
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
</div>
```

```js live-sample___block-axis live-sample___spanners live-sample___positioned
// prettier-ignore
const itemSizes = [
  "2em", "3em", "1.6em", "4em", "3.2em",
  "3em", "4.5em", "1em", "3.5em", "2.8em",
];
const items = document.querySelectorAll(".item");
for (let i = 0; i < items.length; i++) {
  items[i].style.blockSize = itemSizes[i];
}
```

{{EmbedLiveSample("block-axis", "", "250px")}}

It is also possible to create a grid lanes layout with items loading into rows.

```js live-sample___inline-axis
// prettier-ignore
const itemSizes = [
  "2em", "3em", "1.6em", "4em", "2.2em",
  "3em", "4.5em", "1em", "3.5em", "2.8em",
];
const items = document.querySelectorAll(".item");
for (let i = 0; i < items.length; i++) {
  items[i].style.inlineSize = itemSizes[i];
}
```

```css live-sample___inline-axis
.grid {
  display: grid-lanes;
  gap: 10px;
  grid-template-rows: repeat(3, 100px);
}
```

{{EmbedLiveSample("inline-axis", "", "450px")}}

## Controlling the grid axis

On the grid axis, things will work just as you expect them to in grid layout. You can cause items to span multiple tracks while remaining in auto-placement, using the `span` keyword. Items may also be positioned using line-based positioning.

### Grid lanes layout with spanning items

In this example two of the items span two tracks, and the remaining items are packed around them by the grid lanes layout algorithm.

```html live-sample___spanners
<div class="grid">
  <div class="item"></div>
  <div class="item span-2"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item span-2"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
</div>
```

```css live-sample___spanners
.grid {
  display: grid-lanes;
  gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
}

.span-2 {
  grid-column-end: span 2;
}
```

{{EmbedLiveSample("spanners", "", "270px")}}

This example includes an item which has positioning for columns. Items with definite placement are placed before the grid lanes layout algorithm runs.

```html live-sample___positioned
<div class="grid">
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item positioned">positioned.</div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
</div>
```

```css live-sample___positioned
.grid {
  display: grid-lanes;
  gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
}

.positioned {
  padding: 1em;
  grid-column: 2 / 4;
}
```

{{EmbedLiveSample("positioned", "", "290px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("grid-auto-flow")}} for controlling grid auto-placement
