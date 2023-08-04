---
title: align-content
slug: Web/CSS/align-content
page-type: css-property
browser-compat: css.properties.align-content
---

{{CSSRef}}

The [CSS](/en-US/docs/Web/CSS) **`align-content`** property sets the distribution of space between and around content items along a [flexbox](/en-US/docs/Web/CSS/CSS_flexible_box_layout)'s cross-axis or a [grid](/en-US/docs/Web/CSS/CSS_grid_layout)'s block axis.

The interactive example below uses Grid Layout to demonstrate some of the values of this property.

{{EmbedInteractiveExample("pages/css/align-content.html")}}

This property has no effect on single line flex containers (i.e. ones with `flex-wrap: nowrap`).

## Syntax

```css
/* Basic positional alignment */
/* align-content does not take left and right values */
align-content: center; /* Pack items around the center */
align-content: start; /* Pack items from the start */
align-content: end; /* Pack items from the end */
align-content: flex-start; /* Pack flex items from the start */
align-content: flex-end; /* Pack flex items from the end */

/* Normal alignment */
align-content: normal;

/* Baseline alignment */
align-content: baseline;
align-content: first baseline;
align-content: last baseline;

/* Distributed alignment */
align-content: space-between; /* Distribute items evenly
                                 The first item is flush with the start,
                                 the last is flush with the end */
align-content: space-around; /* Distribute items evenly
                                 Items have a half-size space
                                 on either end */
align-content: space-evenly; /* Distribute items evenly
                                 Items have equal space around them */
align-content: stretch; /* Distribute items evenly
                                 Stretch 'auto'-sized items to fit
                                 the container */

/* Overflow alignment */
align-content: safe center;
align-content: unsafe center;

/* Global values */
align-content: inherit;
align-content: initial;
align-content: revert;
align-content: revert-layer;
align-content: unset;
```

### Values

- `start`
  - : The items are packed flush to each other against the start edge of the alignment container in the cross axis.
- `end`
  - : The items are packed flush to each other against the end edge of the alignment container in the cross axis.
- `flex-start`
  - : The items are packed flush to each other against the edge of the alignment container depending on the flex container's cross-start side.
    This only applies to flex layout items. For items that are not children of a flex container, this value is treated like `start`.
- `flex-end`
  - : The items are packed flush to each other against the edge of the alignment container depending on the flex container's cross-end side.
    This only applies to flex layout items. For items that are not children of a flex container, this value is treated like `end`.
- `center`
  - : The items are packed flush to each other in the center of the alignment container along the cross axis.
- `normal`
  - : The items are packed in their default position as if no `align-content` value was set.
- `baseline`, `first baseline`, `last baseline`

  - : Specifies participation in first- or last-baseline alignment: aligns the alignment baseline of the box's first or last baseline set with the corresponding baseline in the shared first or last baseline set of all the boxes in its baseline-sharing group.

    ![the baseline is the line upon which most letters "sit" and below which descenders extend.](410px-typography_line_terms.svg.png)

    The fallback alignment for `first baseline` is `start`, the one for `last baseline` is `end`.

- `space-between`
  - : The items are evenly distributed within the alignment container along the cross axis. The spacing between each pair of adjacent items is the same. The first item is flush with the start edge of the alignment container in the cross axis, and the last item is flush with the end edge of the alignment container in the cross axis.
- `space-around`
  - : The items are evenly distributed within the alignment container along the cross axis. The spacing between each pair of adjacent items is the same. The empty space before the first and after the last item equals half of the space between each pair of adjacent items.
- `space-evenly`
  - : The items are evenly distributed within the alignment container along the cross axis. The spacing between each pair of adjacent items, the start edge and the first item, and the end edge and the last item, are all exactly the same.
- `stretch`
  - : If the combined size of the items along the cross axis is less than the size of the alignment container, any `auto`-sized items have their size increased equally (not proportionally), while still respecting the constraints imposed by {{cssxref("max-height")}}/{{cssxref("max-width")}} (or equivalent functionality), so that the combined size exactly fills the alignment container along the cross axis.
- `safe`
  - : Used alongside an alignment keyword. If the chosen keyword means that the item overflows the alignment container causing data loss, the item is instead aligned as if the alignment mode were `start`.
- `unsafe`
  - : Used alongside an alignment keyword. Regardless of the relative sizes of the item and alignment container and whether overflow which causes data loss might happen, the given alignment value is honored.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

### CSS

```css
#container {
  height: 200px;
  width: 240px;
  align-content: center; /* Can be changed in the live sample */
  background-color: #8c8c8c;
}

.flex {
  display: flex;
  flex-wrap: wrap;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, 50px);
}

div > div {
  box-sizing: border-box;
  border: 2px solid #8c8c8c;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}

#item1 {
  background-color: #8cffa0;
  min-height: 30px;
}

#item2 {
  background-color: #a0c8ff;
  min-height: 50px;
}

#item3 {
  background-color: #ffa08c;
  min-height: 40px;
}

#item4 {
  background-color: #ffff8c;
  min-height: 60px;
}

#item5 {
  background-color: #ff8cff;
  min-height: 70px;
}

#item6 {
  background-color: #8cffff;
  min-height: 50px;
  font-size: 30px;
}

select {
  font-size: 16px;
}

.row {
  margin-top: 10px;
}
```

### HTML

```html
<div id="container" class="flex">
  <div id="item1">1</div>
  <div id="item2">2</div>
  <div id="item3">3</div>
  <div id="item4">4</div>
  <div id="item5">5</div>
  <div id="item6">6</div>
</div>

<div class="row">
  <label for="display">display: </label>
  <select id="display">
    <option value="flex">flex</option>
    <option value="grid">grid</option>
  </select>
</div>

<div class="row">
  <label for="values">align-content: </label>
  <select id="values">
    <option value="normal">normal</option>
    <option value="stretch">stretch</option>
    <option value="flex-start">flex-start</option>
    <option value="flex-end">flex-end</option>
    <option value="center" selected>center</option>
    <option value="space-between">space-between</option>
    <option value="space-around">space-around</option>
    <option value="space-evenly">space-evenly</option>

    <option value="start">start</option>
    <option value="end">end</option>

    <option value="baseline">baseline</option>
    <option value="first baseline">first baseline</option>
    <option value="last baseline">last baseline</option>

    <option value="safe center">safe center</option>
    <option value="unsafe center">unsafe center</option>
    <option value="safe right">safe right</option>
    <option value="unsafe right">unsafe right</option>
    <option value="safe end">safe end</option>
    <option value="unsafe end">unsafe end</option>
    <option value="safe flex-end">safe flex-end</option>
    <option value="unsafe flex-end">unsafe flex-end</option>
  </select>
</div>
```

```js hidden
const values = document.getElementById("values");
const display = document.getElementById("display");
const container = document.getElementById("container");

values.addEventListener("change", (evt) => {
  container.style.alignContent = evt.target.value;
});

display.addEventListener("change", (evt) => {
  container.className = evt.target.value;
});
```

### Result

{{EmbedLiveSample("Examples", 260, 290)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- CSS Flexbox Guide: _[Basic Concepts of Flexbox](/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)_
- CSS Flexbox Guide: _[Aligning items in a flex container](/en-US/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)_
- CSS Grid Guide: _[Box alignment in CSS Grid layouts](/en-US/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout)_
- [CSS Box Alignment](/en-US/docs/Web/CSS/CSS_box_alignment)
