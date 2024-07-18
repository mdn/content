---
title: justify-content
slug: Web/CSS/justify-content
page-type: css-property
browser-compat: css.properties.justify-content
---

{{CSSRef}}

The [CSS](/en-US/docs/Web/CSS) **`justify-content`** property defines how the browser distributes space between and around content items along the {{Glossary("main axis")}} of a flex container and the [inline axis](/en-US/docs/Glossary/Logical_properties#inline_direction) of grid and multicol containers.

The interactive example below demonstrates some `justify-content` values using grid layout.

{{EmbedInteractiveExample("pages/css/justify-content.html")}}

## Syntax

```css
/* Positional alignment */
justify-content: center;
justify-content: start;
justify-content: end;
justify-content: flex-start;
justify-content: flex-end;
justify-content: left;
justify-content: right;

/* Normal alignment */
justify-content: normal;

/* Distributed alignment */
justify-content: space-between;
justify-content: space-around;
justify-content: space-evenly;
justify-content: stretch;

/* Overflow alignment */
justify-content: safe center;
justify-content: unsafe center;

/* Global values */
justify-content: inherit;
justify-content: initial;
justify-content: revert;
justify-content: revert-layer;
justify-content: unset;
```

### Values

- `start`

  - : The items are packed flush to each other toward the start edge of the alignment container in the main axis.

- `end`

  - : The items are packed flush to each other toward the end edge of the alignment container in the main axis.

- `flex-start`

  - : The items are packed flush to each other toward the edge of the alignment container depending on the flex container's main-start side.
    This only applies to flex layout items. For items that are not children of a flex container, this value is treated like `start`.

- `flex-end`

  - : The items are packed flush to each other toward the edge of the alignment container depending on the flex container's main-end side.
    This only applies to flex layout items. For items that are not children of a flex container, this value is treated like `end`.

- `center`

  - : The items are packed flush to each other toward the center of the alignment container along the main axis.

- `left`

  - : The items are packed flush with each other toward the left edge of the alignment container. When the property's horizontal axis is not parallel with the inline axis, such as when [`flex-direction: column;`](/en-US/docs/Web/CSS/flex-direction) is set, this value behaves like `start`.

- `right`

  - : The items are packed flush to each other toward the right edge of the alignment container in the appropriate axis. If the property's axis is not parallel with the inline axis (in a grid container) or the main-axis (in a flexbox container), this value behaves like `start`.

- `normal`

  - : Behaves as `stretch`, except in the case of multi-column containers with a non-`auto` [`column-width`](/en-US/docs/Web/CSS/column-width), in which case the columns take their specified `column-width` rather than stretching to fill the container. As `stretch` behaves as `start` in flex containers, `normal` also behaves as `start`.

- `space-between`

  - : The items are evenly distributed within the alignment container along the main axis. The spacing between each pair of adjacent items is the same. The first item is flush with the main-start edge, and the last item is flush with the main-end edge.

- `space-around`

  - : The items are evenly distributed within the alignment container along the main axis. The spacing between each pair of adjacent items is the same. The empty space before the first and after the last item equals half of the space between each pair of adjacent items. If there is only one item, it will be centered.

- `space-evenly`

  - : The items are evenly distributed within the alignment container along the main axis. The spacing between each pair of adjacent items, the main-start edge and the first item, and the main-end edge and the last item, are all exactly the same.

- `stretch`

  - : If the combined size of the items along the main axis is less than the size of the alignment container, any `auto`-sized items have their size increased equally (not proportionally), while still respecting the constraints imposed by {{cssxref("max-height")}}/{{cssxref("max-width")}} (or equivalent functionality), so that the combined size exactly fills the alignment container along the main axis.

    > **Note:** For [flexboxes](/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox), the `stretch` value behaves as `flex-start` or `start`. This is because, in flexboxes, stretching is controlled using the {{CSSXref("flex-grow")}} property.

- `safe`

  - : If the item overflows the alignment container, then the item is aligned as if the alignment mode is `start`. The desired alignment will not be implemented.

- `unsafe`

  - : Even if the item overflows the alignment container, the desired alignment will be implemented. Unlike `safe`, which will ignore the desired alignment in favor of preventing overflow.

## Description

Defined in the [CSS box alignment](/en-US/docs/Web/CSS/CSS_box_alignment) module, `justify-content` applies to multicol containers, flex containers, and grid containers. The property does not apply to and has no effect on block containers.

This property shares many keyword values with the {{cssxref("align-content")}} property, but not all! `justify-content` isn't involved in baseline alignment, and therefore does not take baseline values.

In [flex layouts](/en-US/docs/Web/CSS/CSS_flexible_box_layout), the property defines how positive free space is distributed between or around flex items along the main axis. This property impacts the space between elements in a line, not the space between lines. The alignment is done after the lengths and auto margins are applied, which means that when one or more flex items in a line have a {{cssxref("flex-grow")}} factor greater than `0`, the property has no effect as there is no space to distribute along that line. Also, as stretching along the main axis is controlled by {{cssxref("flex")}}, the `stretch` value behaves as `flex-start`.

With [grid layout](/en-US/docs/Web/CSS/CSS_grid_layout), this property distributes available space between or around grid columns, not grid items. If the grid container is larger than the grid itself, the `justify-content` property can be used to justify the grid along the inline axis, aligning the grid columns.

Grid `auto` track sizes (and only `auto` track sizes) can be stretched by the `align-content` and `justify-content` properties. Therefore by default, an `auto` sized track will take up any remaining space in the grid container. As the grid's inline size has to be less than the grid container's inline size for there to be space to distribute, the property has no effect in this case.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Basic grid example

In this example, we have a grid that is narrower than its grid container, and we use `justify-content` to distribute the available space evenly around and between the grid columns.

#### HTML

The {{htmlelement("section")}} container, our grid container to-be, has 16 nested {{htmlelement("div")}}s that will become grid items.

```html
<section class="container">
  <div>A</div>
  <div>B</div>
  <div>C</div>
  <div>D</div>
  <div>E</div>
  <div>F</div>
  <div>G</div>
  <div>H</div>
  <div>I</div>
  <div>J</div>
  <div>K</div>
  <div>L</div>
  <div>M</div>
  <div>N</div>
  <div>O</div>
  <div>P</div>
</section>
```

#### CSS

```css hidden
.container {
  margin: 5px;
  border: 1px solid;
  box-sizing: border-box;
}

div {
  line-height: 2em;
  border: 1px solid;
  box-sizing: border-box;
  text-align: center;
}
```

We set the container width to `500px` and specify three columns, each `80px` wide, meaning there is `260px` of available space to distribute between or around them. We then set `justify-content: space-evenly`, which means there will be `65px` of space before, between, and after each column.

We set different widths (and background colors) to demonstrate how the justification is applied to the columns.

```css
.container {
  display: grid;
  grid: auto-flow / repeat(3, 80px);
  width: 500px;
  justify-content: space-evenly;
}

div {
  background-color: pink;
  width: 80px;
}

div:nth-of-type(n + 9) {
  width: 35px;
  background-color: lightgreen;
}

div:nth-last-of-type(3) {
  width: 250px;
  background-color: lightblue;
}
```

#### Result

{{EmbedLiveSample("Basic grid example", "100%", 220)}}

Note that `justify-contents` aligns the columns and has no effect on the items or alignment in grid areas. Grid items, even those that overflow their grid cell, do not impact column justification.

### The safe keyterm

This example demonstrates the `safe` keyterm. We specify four centered flex items that are not allowed to wrap, and as a result, overflow their single flex-line container. By adding `safe` to `center` in the `justify-content` property, overflowing content behaves as if the alignment mode is `start`

```html hidden
<p><code>justify-content: center;</code></p>
<section class="container safe">
  <div>A</div>
  <div>B</div>
  <div>C</div>
  <div>D</div>
</section>
<p><code>justify-content: safe center;</code></p>
<section class="container safe-center">
  <div>A</div>
  <div>B</div>
  <div>C</div>
  <div>D</div>
</section>
<p><code>justify-content: safe center;</code> with 3 items</p>
<section class="container safe-center">
  <div>A</div>
  <div>B</div>
  <div>C</div>
</section>
```

```css hidden
.container {
  margin: 5px auto;
  border: 1px dashed;
  box-sizing: border-box;
  background-color: lightblue;
}

div {
  line-height: 1em;
  border: 1px solid;
  box-sizing: border-box;
  text-align: center;
  background-color: pink;
}
```

The container is set to `center`, with every container other than the first having the `safe` keyword added:

```css
.container {
  align-items: baseline;
  display: flex;
  width: 350px;
  height: 2em;
}

.safe {
  justify-content: center;
}

.safe-center {
  justify-content: safe center;
}

div {
  flex: 0 0 100px;
}
```

#### Result

{{EmbedLiveSample("the safe keyword", "100%", 260)}}

As an item overflows the alignment container, with `safe` included the alignment mode behaves as `start` and the `center` alignment is not implemented. The `safe` keyterm has no effect if the items do not overflow the container.

### Visualizing flex item distribution

This example includes a multi-line wrapping flex layout. The second flex item has a positive flex growth factor, consuming all the available free space in the first flex line.

#### CSS

```css hidden
#container {
  margin: 5px auto;
  border: 1px dashed black;
  box-sizing: border-box;
}

div {
  line-height: 2em;
  border: 1px solid;
  box-sizing: border-box;
  text-align: center;
}
```

```css
#container {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between; /* Can be changed in the live sample */
  width: 510px;
}

div {
  line-height: 2em;
  flex: 0 0 120px;
  background-color: pink;
}

div:nth-of-type(2) {
  flex-grow: 1;
  background-color: yellow;
}

div:nth-of-type(n + 9) {
  flex: 0 0 35px;
  background-color: lightgreen;
}
div:last-of-type {
  flex: 0 0 300px;
  background-color: lightblue;
}
```

```html hidden
<section id="container">
  <div>A</div>
  <div>GROW</div>
  <div>C</div>
  <div>D</div>
  <div>E</div>
  <div>F</div>
  <div>G</div>
  <div>H</div>
  <div>I</div>
  <div>J</div>
  <div>K</div>
  <div>L</div>
  <div>M</div>
  <div>N</div>
  <div>O</div>
  <div>P</div>
</section>
<select id="justifyContent">
  <option value="start">start</option>
  <option value="end">end</option>
  <option value="flex-start">flex-start</option>
  <option value="flex-end">flex-end</option>
  <option value="center">center</option>
  <option value="left">left</option>
  <option value="right">right</option>
  <option value="space-between" selected>space-between</option>
  <option value="space-around">space-around</option>
  <option value="space-evenly">space-evenly</option>
  <option value="stretch">stretch</option>
</select>
```

```js hidden
const justifyContent = document.getElementById("justifyContent");
justifyContent.addEventListener("change", (evt) => {
  document.getElementById("container").style.justifyContent = evt.target.value;
});
```

#### Result

{{EmbedLiveSample("Visualizing_flex_item_distribution", "100%", 180)}}

Select different keywords from the drop-down menu to visualize the different `justify-content` keyword values. Because an item on the first line can grow, there is no available space on that line for the `justify-content` property to distribute. With the `space-between` value, the first item on each line is flush with the main-start edge, and the last item is flush with the main-end edge. As a result, if a line has only one item, it will be aligned with the main-start edge (as seen in the last line). This is not the case for other `space-*` values, such as `space-evenly` and `space-around`, which center one-item flex-lines.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Basic concepts of flexbox](/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Aligning items in a flex container](/en-US/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- [Box alignment in CSS grid layouts](/en-US/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout)
- [CSS box alignment](/en-US/docs/Web/CSS/CSS_box_alignment) module
