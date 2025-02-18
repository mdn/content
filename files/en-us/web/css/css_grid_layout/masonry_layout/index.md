---
title: Masonry layout
slug: Web/CSS/CSS_grid_layout/Masonry_layout
page-type: guide
status:
  - experimental
browser-compat:
  - css.properties.grid-template-columns.masonry
  - css.properties.grid-template-rows.masonry
---

{{CSSRef}} {{SeeCompatTable}}

Level 3 of the [CSS grid layout](/en-US/docs/Web/CSS/CSS_grid_layout) specification includes a `masonry` value for {{cssxref("grid-template-columns")}} and {{cssxref("grid-template-rows")}}. This guide details what masonry layout is and how to use it.

Masonry layout is a layout method where one axis uses a typical strict grid layout, most often columns, and the other a masonry layout. On the masonry axis, rather than sticking to a strict grid with gaps being left after shorter items, the items in the following row rise up to completely fill the gaps.

## Creating a masonry layout

To create the most common masonry layout, your columns will be the grid axis and the rows the masonry axis, defined with `grid-template-columns` and `grid-template-rows`.
The child elements of this container will now lay out item by item along the rows, as they would with regular grid layout automatic placement.

As the items move onto new rows, they will display according to the masonry algorithm. Items will load into the column with the most room, causing a tightly packed layout without strict row tracks.

```css hidden live-sample___block-axis
* {
  box-sizing: border-box;
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
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  grid-template-rows: masonry;
}
```

```html live-sample___block-axis
<div class="grid">
  <div class="item" style="block-size: 2em;"></div>
  <div class="item" style="block-size: 3em;"></div>
  <div class="item" style="block-size: 1.6em;"></div>
  <div class="item" style="block-size: 4em;"></div>
  <div class="item" style="block-size: 2.2em;"></div>
  <div class="item" style="block-size: 3em;"></div>
  <div class="item" style="block-size: 4.5em;"></div>
  <div class="item" style="block-size: 1em;"></div>
  <div class="item" style="block-size: 3.5em;"></div>
  <div class="item" style="block-size: 2.8em;"></div>
</div>
```

{{EmbedLiveSample("block-axis", "", "250px")}}

It is also possible to create a masonry layout with items loading into rows.

```html hidden live-sample___inline-axis
<div class="grid">
  <div class="item" style="inline-size: 2em;"></div>
  <div class="item" style="inline-size: 3em;"></div>
  <div class="item" style="inline-size: 1.6em;"></div>
  <div class="item" style="inline-size: 4em;"></div>
  <div class="item" style="inline-size: 2.2em;"></div>
  <div class="item" style="inline-size: 3em;"></div>
  <div class="item" style="inline-size: 4.5em;"></div>
  <div class="item" style="inline-size: 1em;"></div>
  <div class="item" style="inline-size: 3.5em;"></div>
  <div class="item" style="inline-size: 2.8em;"></div>
</div>
```

```css hidden live-sample___inline-axis
* {
  box-sizing: border-box;
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

```css live-sample___inline-axis
.grid {
  display: grid;
  gap: 10px;
  grid-template-columns: masonry;
  grid-template-rows: repeat(3, 100px);
}
```

{{EmbedLiveSample("inline-axis", "", "450px")}}

## Controlling the grid axis

On the grid axis, things will work just as you expect them to in grid layout. You can cause items to span multiple tracks while remaining in auto-placement, using the `span` keyword. Items may also be positioned using line-based positioning.

### Masonry layout with spanning items

In this example two of the items span two tracks, and the masonry items work around them.

```html live-sample___spanners
<div class="grid">
  <div class="item" style="block-size: 2em;"></div>
  <div class="item" style="block-size: 3em; grid-column-end: span 2;"></div>
  <div class="item" style="block-size: 1.6em;"></div>
  <div class="item" style="block-size: 4em;"></div>
  <div class="item" style="block-size: 2.2em; grid-column-end: span 2"></div>
  <div class="item" style="block-size: 3em;"></div>
  <div class="item" style="block-size: 4.5em;"></div>
  <div class="item" style="block-size: 1em;"></div>
  <div class="item" style="block-size: 3.5em;"></div>
  <div class="item" style="block-size: 2.8em;"></div>
</div>
```

```css hidden live-sample___spanners
* {
  box-sizing: border-box;
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

```css live-sample___spanners
.grid {
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  grid-template-rows: masonry;
}
```

{{EmbedLiveSample("spanners", "", "270px")}}

This example includes an item which has positioning for columns. Items with definite placement are placed before the masonry layout happens.

```html live-sample___positioned
<div class="grid">
  <div class="item" style="block-size: 2em;"></div>
  <div class="item" style="block-size: 3em;"></div>
  <div class="item" style="block-size: 1.6em;"></div>
  <div class="item" style="block-size: 4em;"></div>
  <div class="item positioned" style="block-size: 3.2em;">positioned.</div>
  <div class="item" style="block-size: 3em;"></div>
  <div class="item" style="block-size: 4.5em;"></div>
  <div class="item" style="block-size: 1em;"></div>
  <div class="item" style="block-size: 3.5em;"></div>
  <div class="item" style="block-size: 2.8em;"></div>
</div>
```

```css hidden live-sample___positioned
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

```css live-sample___positioned
.grid {
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  grid-template-rows: masonry;
}

.positioned {
  padding: 1em;
  grid-column: 2 / 4;
}
```

{{EmbedLiveSample("positioned", "", "290px")}}

## Fallbacks for masonry layout

In browsers [that do not support masonry](#browser_compatibility), regular grid auto-placement will be used instead.

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("grid-auto-flow")}} for controlling grid auto-placement
- [Native CSS masonry layout in CSS grid](https://www.smashingmagazine.com/native-css-masonry-layout-css-grid/) via Smashing Magazine (2020)
