---
title: Auto-placement in grid layout
slug: Web/CSS/CSS_grid_layout/Auto-placement_in_grid_layout
page-type: guide
---

{{CSSRef}}

In addition to the ability to place items accurately onto a created grid, the CSS grid layout specification contains rules that control what happens when you create a grid and do not place some or all of the child items. You can see auto-placement in action in the simplest of ways by creating a grid on a set of items.

## Default placement

If you give the items no placement information they will position themselves on the grid, one in each grid cell.

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}
```

```html
<div class="wrapper">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
</div>
```

{{ EmbedLiveSample('Default_placement', '500', '230') }}

## Default rules for auto-placement

As you can see with the above example, if you create a grid all child items will lay themselves out one into each grid cell. The default flow is to arrange items by row. Grid will lay an item out into each cell of row 1. If you have created additional rows using the `grid-template-rows` property then grid will continue placing items in these rows. If the grid does not have enough rows in the explicit grid to place all of the items new _implicit_ rows will be created.

### Sizing rows in the implicit grid

The default for automatically created rows in the implicit grid is for them to be auto-sized. This means that they will contain the content added to them without causing an overflow.

You can however control the size of these rows with the property `grid-auto-rows`. To cause all created rows to be 100 pixels tall for example you would use:

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```html
<div class="wrapper">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  grid-auto-rows: 100px;
}
```

{{ EmbedLiveSample('Sizing_rows_in_the_implicit_grid', '500', '330') }}

### Sizing rows using minmax()

You can use {{cssxref("minmax","minmax()")}} in your value for {{cssxref("grid-auto-rows")}} enabling the creation of rows that are a minimum size but then grow to fit content if it is taller.

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```html
<div class="wrapper">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>
    Four <br />This cell <br />Has extra <br />content. <br />Max is auto
    <br />so the row expands.
  </div>
  <div>Five</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  grid-auto-rows: minmax(100px, auto);
}
```

{{ EmbedLiveSample('Sizing_rows_using_minmax', '500', '330') }}

### Sizing rows using a track listing

You can also pass in a track listing, this will repeat. The following track listing will create an initial implicit row track as 100 pixels and a second as `200px`. This will continue for as long as content is added to the implicit grid.

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```html
<div class="wrapper">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
  <div>Six</div>
  <div>Seven</div>
  <div>Eight</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  grid-auto-rows: 100px 200px;
}
```

{{ EmbedLiveSample('Sizing_rows_using_a_track_listing', '500', '450') }}

### Auto-placement by column

You can also ask grid to auto-place items by column. Using the property {{cssxref("grid-auto-flow")}} with a value of `column`. In this case grid will add items in rows that you have defined using {{cssxref("grid-template-rows")}}. When it fills up a column it will move onto the next explicit column, or create a new column track in the implicit grid. As with implicit row tracks, these column tracks will be auto sized. You can control the size of implicit column tracks with {{cssxref("grid-auto-columns")}}, this works in the same way as {{cssxref("grid-auto-rows")}}.

In this next example I have created a grid with three row tracks of 200 pixels height. I am auto-placing by column and the columns created will be a column width of 300 pixels, then a column width of 100 pixels until there are enough column tracks to hold all of the items.

```css
.wrapper {
  display: grid;
  grid-template-rows: repeat(3, 200px);
  gap: 10px;
  grid-auto-flow: column;
  grid-auto-columns: 300px 100px;
}
```

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```html
<div class="wrapper">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
  <div>Six</div>
  <div>Seven</div>
  <div>Eight</div>
</div>
```

{{ EmbedLiveSample('Auto-placement_by_column', '500', '700') }}

## The order of auto placed items

A grid can contain a mixture of items. Some of the items may have a position on the grid, but others may be auto-placed. This can be helpful, if you have a document order that reflects the order in which items sit on the grid you may not need to write CSS rules to place absolutely everything. The specification contains a long section detailing the [Grid item placement algorithm](https://drafts.csswg.org/css-grid/#auto-placement-algo), however for most of us we just need to remember a few simple rules for our items.

### Order modified document order

Grid places items that have not been given a grid position in what is described in the specification as "order modified document order". This means that if you have used the `order` property at all, the items will be placed by that order, not their DOM order. Otherwise they will stay by default in the order that they are entered in the document source.

### Items with placement properties

The first thing grid will do is place any items that have a position. In the example below I have 12 grid items. Item 2 and item 5 have been placed using line based placement on the grid. You can see how those items are placed and the other items then auto-place in the spaces. The auto-placed items will place themselves before the placed items in DOM order, they don't start after the position of a placed item that comes before them.

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```html
<div class="wrapper">
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
  <div>Eleven</div>
  <div>Twelve</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 100px;
  gap: 10px;
}
.wrapper div:nth-child(2) {
  grid-column: 3;
  grid-row: 2 / 4;
}
.wrapper div:nth-child(5) {
  grid-column: 1 / 3;
  grid-row: 1 / 3;
}
```

{{ EmbedLiveSample('Items_with_placement_properties', '500', '500') }}

### Deal with items that span tracks

You can use placement properties while still taking advantage of auto-placement. In this next example I have added to the layout by setting items 1, 5, and 9 (4n+1) to span two tracks both for rows and columns. I do this with the {{cssxref("grid-column-end")}} and {{cssxref("grid-row-end")}} properties and setting the value of this to `span 2`. What this means is that the start line of the item will be set by auto-placement, and the end line will span two tracks.

You can see how this then leaves gaps in the grid, as for the auto-placed items if grid comes across an item that doesn't fit into a track, it will move to the next row until it finds a space the item can fit in.

```css hidden
* {
  box-sizing: border-box;
}
.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```html
<div class="wrapper">
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
  <div>Eleven</div>
  <div>Twelve</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 100px;
  gap: 10px;
}
.wrapper div:nth-child(4n + 1) {
  grid-column-end: span 2;
  grid-row-end: span 2;
  background-color: #ffa94d;
}
.wrapper div:nth-child(2) {
  grid-column: 3;
  grid-row: 2 / 4;
}
.wrapper div:nth-child(5) {
  grid-column: 1 / 3;
  grid-row: 1 / 3;
}
```

{{ EmbedLiveSample('Deal_with_items_that_span_tracks', '500', '800') }}

### Filling in the gaps

So far, other than items we have specifically placed, grid is always progressing forward and keeping items in DOM order. This is generally what you want, if you are laying out a form for example you wouldn't want the labels and fields to become jumbled up in order to fill in some gap. However sometimes, we are laying things out that don't have a logical order and we would like to create a layout that doesn't have gaps in it.

To do this, add the property {{cssxref("grid-auto-flow")}} with a value of `dense` to the container. This is the same property you use to change the flow order to `column`, so if you were working in columns you would add both values `grid-auto-flow: column dense`.

Having done this, grid will now backfill the gaps, as it moves through the grid it leaves gaps as before, but then if it finds an item that will fit in a previous gap it will pick it up and take it out of DOM order to place it in the gap. As with any other reordering in grid this does not change the logical order. Tab order for example, will still follow the document order. We will take a look at the potential accessibility issues of grid layout in the [Grid layout and accessibility guide](/en-US/docs/Web/CSS/CSS_grid_layout/Grid_layout_and_accessibility), but you should take care when creating this disconnect between the visual order and display order.

```css hidden
* {
  box-sizing: border-box;
}
.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```html
<div class="wrapper">
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
  <div>Eleven</div>
  <div>Twelve</div>
</div>
```

```css
.wrapper div:nth-child(4n + 1) {
  grid-column-end: span 2;
  grid-row-end: span 2;
  background-color: #ffa94d;
}
.wrapper div:nth-child(2) {
  grid-column: 3;
  grid-row: 2 / 4;
}
.wrapper div:nth-child(5) {
  grid-column: 1 / 3;
  grid-row: 1 / 3;
}
.wrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 100px;
  gap: 10px;
  grid-auto-flow: dense;
}
```

{{ EmbedLiveSample('Filling_in_the_gaps', '500', '730') }}

### Anonymous grid items

There is a mention in the specification of anonymous grid items. These are created if you have a string of text inside your grid container, that is not wrapped in any other element. In the example below we have three grid items, assuming you had set the parent with a class of `grid` to `display: grid`. The first is an anonymous item as it has no enclosing markup, this item will always be dealt with via the auto-placement rules. The other two are grid items enclosed in a div, they might be auto-placed or you could place these with a positioning method onto your grid.

```html
<div class="grid">
  I am a string and will become an anonymous item
  <div>A grid item</div>
  <div>A grid item</div>
</div>
```

Anonymous items are always auto-placed because there is no way to target them. Therefore if you have some unwrapped text for some reason in your grid, be aware that it might show up somewhere unexpected as it will be auto-placed according to the auto-placement rules.

### Use cases for auto-placement

Auto-placement is useful whenever you have a collection of items. That could be items that do not have a logical order such as a gallery of photos, or product listing. In that case you might choose to use the dense packing mode to fill in any holes in your grid. In my image gallery example I have some landscape and some portrait images. I have set landscape images – with a class of `landscape` to span two column tracks. I then use `grid-auto-flow: dense` to create a densely packed grid.

Try removing the line `grid-auto-flow: dense` to see the content reflow to leave gaps in the layout.

{{EmbedGHLiveSample("css-examples/grid/docs/autoplacement.html", '100%', 1200)}}

Auto-placement can also help you lay out interface items which do have logical order. An example is the definition list in this next example. Definition lists are an interesting challenge to style as they are flat, there is nothing wrapping the groups of `dt` and `dd` items. In my example I am allowing auto-placement to place the items, however I have classes that start a `dt` in column 1, and `dd` in column 2, this ensure that terms go on one side and definitions on the other - no matter how many of each we have.

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}
```

```html
<div class="wrapper">
  <dl>
    <dt>Mammals</dt>
    <dd>Cat</dd>
    <dd>Dog</dd>
    <dd>Mouse</dd>
    <dt>Fish</dt>
    <dd>Guppy</dd>
    <dt>Birds</dt>
    <dd>Pied Wagtail</dd>
    <dd>Owl</dd>
  </dl>
</div>
```

```css
dl {
  display: grid;
  grid-template-columns: auto 1fr;
  max-width: 300px;
  margin: 1em;
  line-height: 1.4;
}
dt {
  grid-column: 1;
  font-weight: bold;
}
dd {
  grid-column: 2;
}
```

{{ EmbedLiveSample('Use_cases_for_auto-placement', '500', '230') }}

## What can't we do with auto-placement (yet)?

There are a couple of things that often come up as questions. Currently we can't do things like target every other cell of the grid with our items. A related issue may have already come to mind if you followed the last guide about named lines on the grid. It would be to define a rule that said "auto-place items against the next line named "n", and grid would then skip other lines. There is [an issue raised about this](https://github.com/w3c/csswg-drafts/issues/796) on the CSSWG GitHub repository, and you would be welcome to add your own use cases to this.

It may be that you come up with your own use cases for auto-placement or any other part of grid layout. If you do, raise them as issues or add to an existing issue that could solve your use case. This will help to make future versions of the specification better.
