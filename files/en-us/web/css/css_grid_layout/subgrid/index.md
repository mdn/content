---
title: Subgrid
slug: Web/CSS/CSS_grid_layout/Subgrid
page-type: guide
browser-compat: css.properties.grid-template-columns.subgrid
---

{{CSSRef}}

Level 2 of the CSS grid layout specification includes a `subgrid` value for {{cssxref("grid-template-columns")}} and {{cssxref("grid-template-rows")}}. This guide details what subgrid does and gives some use cases and design patterns that the feature solves.

## Introduction to subgrid

When you add `display: grid` to a grid container, only the direct children become grid items and can then be placed on the grid you created. The children of these items display in normal flow.

You can "nest" grids by making a grid item a grid container. These grids, however, are independent of the parent grid and of each other, meaning that they do not take their track sizing from the parent grid. This makes it difficult to line nested grid items up with the main grid.

If you set the value `subgrid` on `grid-template-columns`, `grid-template-rows` or both, instead of creating a new track listing the nested grid uses the tracks defined on the parent.

For example, if you use `grid-template-columns: subgrid` and the nested grid spans three column tracks of the parent, the nested grid will have three column tracks of the same size as the parent grid. Gaps are inherited but can also be overridden with a different {{cssxref("gap")}} value. Line names can be passed from the parent into the subgrid, and the subgrid can also declare its own line names.

## Subgrid for columns

In the example below, I have a grid layout with nine `1fr` column tracks and four rows that are a minimum of 100px tall.

I place `.item` from column lines 2 to 7 and rows 2 to 4. I then make this grid item into a grid, giving it column tracks that are a subgrid and defining rows as normal. As the item spans five column tracks, this means that the subgrid has five-column tracks. I can then place `.subitem` on this grid.

The rows in this example are not a subgrid, and so behave as a nested grid does normally. The grid area on the parent expands to be large enough for this nested grid.

```html live-sample___columns
<div class="grid">
  <div class="item">
    <div class="subitem"></div>
  </div>
</div>
```

```css hidden live-sample___columns
* {
  box-sizing: border-box;
}

.grid {
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

.subitem {
  background-color: rgb(40 240 83);
}
```

```css live-sample___columns
.grid {
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(4, minmax(100px, auto));
}

.item {
  display: grid;
  grid-column: 2 / 7;
  grid-row: 2 / 4;
  grid-template-columns: subgrid;
  grid-template-rows: repeat(3, 80px);
}

.subitem {
  grid-column: 3 / 6;
  grid-row: 1 / 3;
}
```

{{EmbedLiveSample("columns", "", "450px")}}

Note that line numbering restarts inside the subgrid — column line 1, when inside the subgrid, is the first line of the subgrid. The subgridded element doesn't inherit the line numbers of the parent grid. This means that you can safely lay out a component that may be placed in different positions on the main grid, knowing that the line numbers on the component will always be the same.

## Subgrid for rows

The next example is the same setup; however, we are using `subgrid` as the value of `grid-template-rows` and defining explicit column tracks. So, the column tracks behave as a regular nested grid, but the rows are tied to the two tracks that the child spans.

```html live-sample___rows
<div class="grid">
  <div class="item">
    <div class="subitem"></div>
  </div>
</div>
```

```css hidden live-sample___rows
* {
  box-sizing: border-box;
}

.grid {
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

.subitem {
  background-color: rgb(40 240 83);
}
```

```css live-sample___rows
.grid {
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(4, minmax(100px, auto));
}

.item {
  display: grid;
  grid-column: 2 / 7;
  grid-row: 2 / 4;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: subgrid;
}

.subitem {
  grid-column: 2 / 4;
  grid-row: 1 / 3;
}
```

{{EmbedLiveSample("rows", "", "450px")}}

## A subgrid in both dimensions

You can define both rows and columns as a subgrid, as in the example below. This means that your subgrid is tied in both dimensions to the number of tracks on the parent.

```html live-sample___both
<div class="grid">
  <div class="item">
    <div class="subitem"></div>
  </div>
</div>
```

```css hidden live-sample___both
* {
  box-sizing: border-box;
}

.grid {
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

.subitem {
  background-color: rgb(40 240 83);
}
```

```css live-sample___both
.grid {
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(4, minmax(100px, auto));
}

.item {
  display: grid;
  grid-column: 2 / 7;
  grid-row: 2 / 4;
  grid-template-columns: subgrid;
  grid-template-rows: subgrid;
}

.subitem {
  grid-column: 3 / 6;
  grid-row: 1 / 3;
}
```

{{EmbedLiveSample("both", "", "450px")}}

### No implicit grid in a subgridded dimension

If you need to autoplace items and do not know how many items you will have, take care when creating a subgrid, as it will prevent additional rows from being created to hold those items.

Take a look at the next example — it uses the same parent and child grid as in the example above. However, I have twelve items inside the subgrid trying to autoplace into ten grid cells. As the subgrid is on both dimensions, there is nowhere for the extra two items to go, so they go into the last track of the grid, as defined in the specification.

```html live-sample___no-implicit
<div class="grid">
  <div class="item">
    <div class="subitem">1</div>
    <div class="subitem">2</div>
    <div class="subitem">3</div>
    <div class="subitem">4</div>
    <div class="subitem">5</div>
    <div class="subitem">6</div>
    <div class="subitem">7</div>
    <div class="subitem">8</div>
    <div class="subitem">9</div>
    <div class="subitem">10</div>
    <div class="subitem">11</div>
    <div class="subitem">12</div>
  </div>
</div>
```

```css hidden live-sample___no-implicit
* {
  box-sizing: border-box;
}
body {
  font: 1.2em sans-serif;
}

.grid {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.item {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  color: #d9480f;
}

.subitem {
  background-color: #d9480f;
  color: #fff;
  border-radius: 5px;
}
```

```css live-sample___no-implicit
.grid {
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(4, minmax(100px, auto));
}

.item {
  display: grid;
  grid-column: 2 / 7;
  grid-row: 2 / 4;
  grid-template-columns: subgrid;
  grid-template-rows: subgrid;
}
```

{{EmbedLiveSample("no-implicit", "", "440px")}}

If we remove the `grid-template-rows` value, we enable regular creation of implicit tracks and although these won't line up with the tracks of the parent, as many as are required will be created.

```html live-sample___implicit
<div class="grid">
  <div class="item">
    <div class="subitem">1</div>
    <div class="subitem">2</div>
    <div class="subitem">3</div>
    <div class="subitem">4</div>
    <div class="subitem">5</div>
    <div class="subitem">6</div>
    <div class="subitem">7</div>
    <div class="subitem">8</div>
    <div class="subitem">9</div>
    <div class="subitem">10</div>
    <div class="subitem">11</div>
    <div class="subitem">12</div>
  </div>
</div>
```

```css hidden live-sample___implicit
* {
  box-sizing: border-box;
}
body {
  font: 1.2em sans-serif;
}

.grid {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.item {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  color: #d9480f;
}

.subitem {
  background-color: #d9480f;
  color: #fff;
  border-radius: 5px;
}
```

```css live-sample___implicit
.grid {
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(4, minmax(100px, auto));
}

.item {
  display: grid;
  grid-column: 2 / 7;
  grid-row: 2 / 4;
  grid-template-columns: subgrid;
  grid-auto-rows: minmax(100px, auto);
}
```

{{EmbedLiveSample("implicit", "", "520px")}}

## The gap properties and subgrid

If you have a {{cssxref("gap")}}, {{cssxref("column-gap")}}, or {{cssxref("row-gap")}} specified on the parent, this will be passed into the subgrid, so it will have the same spacing between tracks as the parent. In some situations, however, you may wish the subgrid tracks to have a different gap or no gap. This can be achieved by using the `gap-*` properties on the grid container of the subgrid.

You can see this in the example below. The parent grid has a gap of 20px for rows and columns. The subgrid has `row-gap` set to `0`.

```html live-sample___gap
<div class="grid">
  <div class="item">
    <div class="subitem"></div>
    <div class="subitem2"></div>
  </div>
</div>
```

```css hidden live-sample___gap
* {
  box-sizing: border-box;
}

.grid {
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

.subitem {
  background-color: rgb(40 240 83);
}
```

```css live-sample___gap
.grid {
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(4, minmax(100px, auto));
  gap: 20px;
}

.item {
  display: grid;
  grid-column: 2 / 7;
  grid-row: 2 / 4;
  grid-template-columns: subgrid;
  grid-template-rows: subgrid;
  row-gap: 0;
}

.subitem {
  grid-column: 3 / 6;
  grid-row: 1 / 3;
}

.subitem2 {
  background-color: rgb(0 0 0 / 0.5);
  grid-column: 2;
  grid-row: 1;
}
```

{{EmbedLiveSample("gap", "", "500px")}}

If you inspect this in the Firefox grid inspector, you can see how the line of the grid is in the correct place down the center of the gap, so when we set the gap to 0, it acts in a similar way to applying a negative margin to an element, giving the space from the gap back to the item.

![The smaller item displays in the gap as row-gap is set to 0 on the subgrid.](gap.png)

## Named grid lines

When using CSS grid, you can name lines on your grid and then position items based on those names rather than the line number. The line names on the parent grid are passed into the subgrid, and you can place items using them. In the example below, I named lines on the parent `col-start` and `col-end` and then used those to place the subitem.

```html live-sample___line-names
<div class="grid">
  <div class="item">
    <div class="subitem"></div>
  </div>
</div>
```

```css hidden live-sample___line-names
* {
  box-sizing: border-box;
}

.grid {
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

.subitem {
  background-color: rgb(40 240 83);
}
```

```css live-sample___line-names
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr [col-start] 1fr 1fr 1fr [col-end] 1fr 1fr 1fr;
  grid-template-rows: repeat(4, minmax(100px, auto));
  gap: 20px;
}

.item {
  display: grid;
  grid-column: 2 / 7;
  grid-row: 2 / 4;
  grid-template-columns: subgrid;
  grid-template-rows: subgrid;
}

.subitem {
  grid-column: col-start / col-end;
  grid-row: 1 / 3;
}
```

{{EmbedLiveSample("line-names", "", "500px")}}

You can also specify line names on the subgrid. This is achieved by adding a list of line names enclosed in square brackets after the `subgrid` keyword. If you have four lines in your subgrid, to name them all, you could use the syntax `grid-template-columns: subgrid [line1] [line2] [line3] [line4]`

Lines specified on the subgrid are added to any lines specified on the parent, so you can use either or both. To demonstrate this, I have positioned one item in the example below using the parent lines and one using the subgrid lines.

```html live-sample___adding-line-names
<div class="grid">
  <div class="item">
    <div class="subitem"></div>
    <div class="subitem2"></div>
  </div>
</div>
```

```css hidden live-sample___adding-line-names
* {
  box-sizing: border-box;
}

.grid {
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

.subitem {
  background-color: rgb(40 240 83);
}
```

```css live-sample___adding-line-names
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr [col-start] 1fr 1fr 1fr [col-end] 1fr 1fr 1fr;
  grid-template-rows: repeat(4, minmax(100px, auto));
  gap: 20px;
}

.item {
  display: grid;
  grid-column: 2 / 7;
  grid-row: 2 / 4;
  grid-template-columns: subgrid [sub-a] [sub-b] [sub-c] [sub-d] [sub-e] [sub-f];
  grid-template-rows: subgrid;
}

.subitem {
  grid-column: col-start / col-end;
  grid-row: 1 / 3;
}

.subitem2 {
  background-color: rgb(0 0 0 / 0.5);
  grid-column: sub-b / sub-d;
  grid-row: 1;
}
```

{{EmbedLiveSample("adding-line-names", "", "500px")}}

## Using subgrids

Other than needing to take care of items that do not fit in your subgrid, a subgrid acts very similarly to any nested grid; the only difference is that the track sizing of the subgrid is set on the parent grid. As with any nested grid, however, the size of the content in the subgrid can change the track sizing, assuming a track sizing method is used that allows content to affect the size. In such a case, auto-sized row tracks, for example, will grow to fit content in the main grid and content in the subgrid.

As the subgrid value acts in much the same way as a regular nested grid, it is easy to switch between the two. For example, if you realize that you need an implicit grid for rows, you would need to remove the `subgrid` value of `grid-template-rows` and perhaps give a value for `grid-auto-rows` to control the implicit track sizing.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Videos: [Laying out forms using subgrid](https://www.youtube.com/watch?v=gmQlK3kRft4) and [Don't wait to use subgrid for better card layouts](https://www.youtube.com/watch?v=lLnFtK1LNu4)
- [Hello subgrid!](https://noti.st/rachelandrew/i6gUcF/hello-subgrid) A presentation from CSSConf.eu
