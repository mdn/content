---
title: align-items
slug: Web/CSS/align-items
page-type: css-property
browser-compat: css.properties.align-items
---

{{CSSRef}}

The [CSS](/en-US/docs/Web/CSS) **`align-items`** property sets the {{cssxref("align-self")}} value on all direct children as a group. In Flexbox, it controls the alignment of items on the {{glossary("Cross Axis")}}. In Grid Layout, it controls the alignment of items on the Block Axis within their {{glossary("Grid Areas", "grid area")}}.

The interactive example below demonstrates some of the values for `align-items` using grid layout.

{{EmbedInteractiveExample("pages/css/align-items.html")}}

## Syntax

```css
/* Basic keywords */
align-items: normal;
align-items: stretch;

/* Positional alignment */
/* align-items does not take left and right values */
align-items: center; /* Pack items around the center */
align-items: start; /* Pack items from the start */
align-items: end; /* Pack items from the end */
align-items: flex-start; /* Pack flex items from the start */
align-items: flex-end; /* Pack flex items from the end */
align-items: self-start; /* Pack flex items from the start */
align-items: self-end; /* Pack flex items from the end */

/* Baseline alignment */
align-items: baseline;
align-items: first baseline;
align-items: last baseline; /* Overflow alignment (for positional alignment only) */
align-items: safe center;
align-items: unsafe center;

/* Global values */
align-items: inherit;
align-items: initial;
align-items: revert;
align-items: revert-layer;
align-items: unset;
```

### Values

- `normal`

  - : The effect of this keyword is dependent of the layout mode we are in:

    - In absolutely-positioned layouts, the keyword behaves like `start` on _replaced_ absolutely-positioned boxes, and as `stretch` on _all other_ absolutely-positioned boxes.
    - In static position of absolutely-positioned layouts, the keyword behaves as `stretch`.
    - For flex items, the keyword behaves as `stretch`.
    - For grid items, this keyword leads to a behavior similar to the one of `stretch`, except for boxes with an aspect ratio or an intrinsic sizes where it behaves like `start`.
    - The property doesn't apply to block-level boxes, and to table cells.

- `flex-start`
  - : The cross-start margin edges of the flex items are flushed with the cross-start edge of the line.
- `flex-end`
  - : The cross-end margin edges of the flex items are flushed with the cross-end edge of the line.
- `center`
  - : The flex items' margin boxes are centered within the line on the cross-axis. If the cross-size of an item is larger than the flex container, it will overflow equally in both directions.
- `start`
  - : The items are packed flush to each other toward the start edge of the alignment container in the appropriate axis.
- `end`
  - : The items are packed flush to each other toward the end edge of the alignment container in the appropriate axis.
- `self-start`
  - : The items are packed flush to the edge of the alignment container's start side of the item, in the appropriate axis.
- `self-end`
  - : The items are packed flush to the edge of the alignment container's end side of the item, in the appropriate axis.
- `baseline`, `first baseline`, `last baseline`
  - : All flex items are aligned such that their [flex container baselines](https://drafts.csswg.org/css-flexbox-1/#flex-baselines) align. The item with the largest distance between its cross-start margin edge and its baseline is flushed with the cross-start edge of the line.
- `stretch`
  - : Flex items are stretched such that the cross-size of the item's margin box is the same as the line while respecting width and height constraints.
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
  align-items: center; /* Can be changed in the live sample */
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
  <label for="values">align-items: </label>
  <select id="values">
    <option value="normal">normal</option>
    <option value="flex-start">flex-start</option>
    <option value="flex-end">flex-end</option>
    <option value="center" selected>center</option>
    <option value="baseline">baseline</option>
    <option value="stretch">stretch</option>

    <option value="start">start</option>
    <option value="end">end</option>
    <option value="self-start">self-start</option>
    <option value="self-end">self-end</option>

    <option value="first baseline">first baseline</option>
    <option value="last baseline">last baseline</option>

    <option value="safe center">safe center</option>
    <option value="unsafe center">unsafe center</option>
    <option value="safe right">safe right</option>
    <option value="unsafe right">unsafe right</option>
    <option value="safe end">safe end</option>
    <option value="unsafe end">unsafe end</option>
    <option value="safe self-end">safe self-end</option>
    <option value="unsafe self-end">unsafe self-end</option>
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
  container.style.alignItems = evt.target.value;
});

display.addEventListener("change", (evt) => {
  container.className = evt.target.value;
});
```

### Result

{{EmbedLiveSample("Examples", "260px", "290px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- CSS Flexbox Guide: _[Basic Concepts of Flexbox](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)_
- CSS Flexbox Guide: _[Aligning items in a flex container](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container)_
- CSS Grid Guide: _[Box alignment in CSS Grid layouts](/en-US/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout)_
- [CSS Box Alignment](/en-US/docs/Web/CSS/CSS_Box_Alignment)
- The {{cssxref("align-self")}} property
