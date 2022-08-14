---
title: place-items
slug: Web/CSS/place-items
tags:
  - CSS
  - CSS Flexible Boxes
  - CSS Grid
  - CSS Property
  - Reference
  - recipe:css-shorthand-property
browser-compat: css.properties.place-items
---
{{CSSRef}}

The [CSS](/en-US/docs/Web/CSS) **`place-items`** [shorthand property](/en-US/docs/Web/CSS/Shorthand_properties) allows you to align items along both the block and inline directions at once (i.e. the {{CSSxRef("align-items")}} and {{CSSxRef("justify-items")}} properties) in a relevant layout system such as [Grid](/en-US/docs/Web/CSS/CSS_Grid_Layout) or [Flexbox](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout). If the second value is not set, the first value is also used for it.

{{EmbedInteractiveExample("pages/css/place-items.html")}}

## Constituent properties

This property is a shorthand for the following CSS properties:

- [`align-items`](/en-US/docs/Web/CSS/align-items)
- [`justify-items`](/en-US/docs/Web/CSS/justify-items)

## Syntax

```css
/* Keyword values */
place-items: center;
place-items: normal start;

/* Positional alignment */
place-items: center normal;
place-items: start legacy;
place-items: end normal;
place-items: self-start legacy;
place-items: self-end normal;
place-items: flex-start legacy;
place-items: flex-end normal;
place-items: left legacy;
place-items: right normal;

/* Baseline alignment */
place-items: baseline normal;
place-items: first baseline legacy;
place-items: last baseline normal;
place-items: stretch legacy;

/* Global values */
place-items: inherit;
place-items: initial;
place-items: revert;
place-items: revert-layer;
place-items: unset;
```

### Values

One of the following forms:

- A single {{cssxref("align-items")}} value, which is used to set alignment in both block and inline directions.
- An {{cssxref("align-items")}} value, which sets alignment in the block direction, followed by a {{cssxref("justify-items")}} value, which sets alignment in the inline direction.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Placing items in a flex container

In flexbox {{cssxref("justify-self")}} or {{cssxref("justify-items")}} do not apply, as on the main axis items are treated as a group. Therefore, the second value will be ignored.

```css hidden
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
  font-size: 2em;
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
}

select {
  font-size: 16px;
}

.row {
  margin-top: 10px;
}
```

```html hidden
<div id="container">
  <div id="item1">1</div>
  <div id="item2">2</div>
  <div id="item3">3</div>
</div>

<div class="row">
  <label for="values">place-items: </label>
  <select id="values">
    <option value="stretch">stretch</option>
    <option value="start">start</option>
    <option value="center">center</option>
    <option value="end">end</option>
    <option value="left">left</option>
    <option value="right">right</option>
    <option value="auto center">auto center</option>
    <option value="normal start">normal start</option>
    <option value="center normal">center normal</option>
    <option value="start auto">start auto</option>
    <option value="end normal">end normal</option>
    <option value="self-start auto">self-start auto</option>
    <option value="self-end normal">self-end normal</option>
    <option value="flex-start auto">flex-start auto</option>
    <option value="flex-end normal">flex-end normal</option>
    <option value="left auto">left auto</option>
    <option value="right normal">right normal</option>
    <option value="baseline normal">baseline normal</option>
    <option value="first baseline auto">first baseline auto</option>
    <option value="last baseline normal">last baseline normal</option>
    <option value="stretch auto">stretch auto</option>
  </select>
</div>
```

```js hidden
const values = document.getElementById('values');
const container = document.getElementById('container');

values.addEventListener('change', (evt) => {
  container.style.placeItems = evt.target.value;
});
```

#### CSS

```css
#container {
  height:200px;
  width: 240px;
  place-items: stretch; /* You can change this value by selecting another option in the list */
  background-color: #8c8c8c;
  display: flex;
}
```

#### Result

{{EmbedLiveSample("Placing_items_in_a_flex_container", 260, 290)}}

### Placing items in a grid container

The following grid container has items which are smaller than the grid areas they are placed in, therefore `place-items` will move them in the block and inline dimensions.

```css hidden
div > div {
  box-sizing: border-box;
  border: 2px solid #8c8c8c;
}

#item1 {
  background-color: #8cffa0;
  min-height: 30px;
  font-size: 2em;
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
}

select {
  font-size: 16px;
}

.row {
  margin-top: 10px;
}
```

```html hidden
<div id="gridcontainer">
  <div id="item1">1</div>
  <div id="item2">2</div>
  <div id="item3">3</div>
  <div id="item4">4</div>
  <div id="item5">5</div>
</div>

<div class="row">
  <label for="gridvalues">place-items: </label>
  <select id="gridvalues">
    <option value="stretch">stretch</option>
    <option value="start">start</option>
    <option value="center">center</option>
    <option value="end">end</option>
    <option value="left">left</option>
    <option value="right">right</option>
    <option value="auto center">auto center</option>
    <option value="normal start">normal start</option>
    <option value="center normal">center normal</option>
    <option value="start auto">start auto</option>
    <option value="end normal">end normal</option>
    <option value="self-start auto">self-start auto</option>
    <option value="self-end normal">self-end normal</option>
    <option value="flex-start auto">flex-start auto</option>
    <option value="flex-end normal">flex-end normal</option>
    <option value="left auto">left auto</option>
    <option value="right normal">right normal</option>
    <option value="baseline normal">baseline normal</option>
    <option value="first baseline auto">first baseline auto</option>
    <option value="last baseline normal">last baseline normal</option>
    <option value="stretch auto">stretch auto</option>
  </select>
</div>
```

```js hidden
const values = document.getElementById('gridvalues');
const container = document.getElementById('gridcontainer');

values.addEventListener('change', (evt) => {
  container.style.placeItems = evt.target.value;
});
```

#### CSS

```css
#gridcontainer {
  height:200px;
  width: 240px;
  place-items: stretch; /* You can change this value by selecting another option in the list */
  background-color: #8c8c8c;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

#gridcontainer > div {
  width: 50px;
}
```

#### Result

{{EmbedLiveSample("Placing_items_in_a_grid_container", 260, 290)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- CSS Flexbox Guide: _[Basic Concepts of Flexbox](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)_
- CSS Flexbox Guide: _[Aligning items in a flex container](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container)_
- CSS Grid Guide: _[Box alignment in CSS Grid layouts](/en-US/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout)_
- [CSS Box Alignment](/en-US/docs/Web/CSS/CSS_Box_Alignment)
- The {{CSSxRef("align-items")}} property
- The {{CSSxRef("align-self")}} property
- The {{CSSxRef("justify-items")}} property
- The {{CSSxRef("justify-self")}} property
