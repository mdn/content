---
title: align-items
slug: Web/CSS/align-items
page-type: css-property
browser-compat: css.properties.align-items
---

{{CSSRef}}

The [CSS](/en-US/docs/Web/CSS) **`align-items`** property sets the {{cssxref("align-self")}} value on all direct children as a group. In flexbox, it controls the alignment of items on the {{glossary("cross axis")}}. In grid layout, it controls the alignment of items on the block axis within their {{glossary("grid areas")}}.

{{EmbedInteractiveExample("pages/css/align-items.html")}}

The interactive example below demonstrates some of the values for `align-items` using grid and flex layout.

## Syntax

```css
/* Basic keywords */
align-items: normal;
align-items: stretch;

/* Positional alignment */
/* align-items does not take left and right values */
align-items: center;
align-items: start;
align-items: end;
align-items: flex-start;
align-items: flex-end;
align-items: self-start;
align-items: self-end;
align-items: anchor-center;

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
    - For grid items, this keyword leads to a behavior similar to the one of `stretch`, except for boxes with an {{glossary("aspect ratio")}} or an intrinsic size where it behaves like `start`.
    - The property doesn't apply to block-level boxes, and to table cells.

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

  - : If the items are smaller than the alignment container, auto-sized items will be equally enlarged to fill the container, respecting the items' width and height limits.

- `anchor-center`

  - : In the case of [anchor-positioned](/en-US/docs/Web/CSS/CSS_anchor_positioning) elements, aligns the items to the center of the associated anchor element in the block direction. See [Centering on the anchor using `anchor-center`](/en-US/docs/Web/CSS/CSS_anchor_positioning/Using#centering_on_the_anchor_using_anchor-center).

- `safe`

  - : Used alongside an alignment keyword. If the chosen keyword means that the item overflows the alignment container causing data loss, the item is instead aligned as if the alignment mode were `start`.

- `unsafe`

  - : Used alongside an alignment keyword. Regardless of the relative sizes of the item and alignment container and whether overflow which causes data loss might happen, the given alignment value is honored.

There are also two values that were defined for flexbox, as they are base on [flex model axes](/en-US/docs/Learn_web_development/Core/CSS_layout/Flexbox#the_flex_model) concepts, that work in grid layouts as well:

- `flex-start`

  - : Used in flex layout only, aligns the flex items flush against the flex container's main-start or cross-start side. When used outside of a flex formatting context, this value behaves as `start`.

- `flex-end`
  - : Used in flex layout only, aligns the flex items flush against the flex container's main-end or cross-end side. When used outside of a flex formatting context, this value behaves as `end`.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

In this example we have a container with six children. A {{htmlelement("select")}} dropdown menu enables toggling the {{cssxref("display")}} of the container between `grid` and `flex`. A second menu enables changing the value of the container's `align-items` property.

### CSS

We style a the container and items in a manner that ensures we have two lines or rows or items. We defined `.flex` and `.grid` classes, which will be applied to the container with JavaScript. They set the {{cssxref("display")}} value of the container, and change its background and border colors providing an additional indicator that the layout has changed. The six flex items each have a different background color, with the 4th item being two lines long and the 6th item having an enlarged font.

```css
.flex,
.grid {
  height: 200px;
  width: 500px;
  align-items: initial; /* Change the value in the live sample */
  border: solid 5px transparent;
  gap: 3px;
}

.flex {
  display: flex;
  flex-wrap: wrap;
  background-color: #8c8c9f;
  border-color: magenta;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, 100px);
  background-color: #9f8c8c;
  border-color: slateblue;
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
```

```css hidden
select {
  font-size: 16px;
}

.row {
  margin-top: 10px;
}

div > div {
  box-sizing: border-box;
  border: 2px solid #fff;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

### HTML

We include a container {{htmlelement("div")}} with six nested `<div>` children. The HTML for the form and the JavaScript that changes the container's class have been hidden for the sake of brevity.

```html
<div id="container" class="flex">
  <div id="item1">1</div>
  <div id="item2">2</div>
  <div id="item3">3</div>
  <div id="item4">4<br />line 2</div>
  <div id="item5">5</div>
  <div id="item6">6</div>
</div>
```

```html hidden
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

{{EmbedLiveSample("Examples", "260", "290")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("align-self")}}
- {{cssxref("align-content")}}
- {{cssxref("justify-items")}}
- {{cssxref("place-items")}} shorthand
- [Basic concepts of flexbox](/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Aligning items in a flex container](/en-US/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- [Box alignment in grid layout](/en-US/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout)
- [CSS box alignment](/en-US/docs/Web/CSS/CSS_box_alignment) module
- [CSS flexible box layout](/en-US/docs/Web/CSS/CSS_flexible_box_layout) module
- [CSS grid layout](/en-US/docs/Web/CSS/CSS_grid_layout) module
