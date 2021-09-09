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
place-items: auto center;
place-items: normal start;

/* Positional alignment */
place-items: center normal;
place-items: start auto;
place-items: end normal;
place-items: self-start auto;
place-items: self-end normal;
place-items: flex-start auto;
place-items: flex-end normal;
place-items: left auto;
place-items: right normal;

/* Baseline alignment */
place-items: baseline normal;
place-items: first baseline auto;
place-items: last baseline normal;
place-items: stretch auto;

/* Global values */
place-items: inherit;
place-items: initial;
place-items: revert;
place-items: unset;
```

### Values

- `auto`
  - : The value used is the value of the `justify-items` property of the parents box, unless the box has no parent, or is absolutely positioned, in these cases, `auto` represents `normal`.
- `normal`

  - : The effect of this keyword is dependent of the layout mode we are in:

    - In block-level layouts, the keyword is a synonym of `start`.
    - In absolutely-positioned layouts, the keyword behaved like `start` on _replaced_ absolutely-positioned boxes, and as `stretch` on _all other_ absolutely-positioned boxes.
    - In table cell layouts, this keyword has no meaning as this property is _ignored_.
    - In flexbox layouts, this keyword has no meaning as this property is _ignored._
    - In grid layouts, this keyword leads to a behavior similar to the one of `stretch`, except for boxes with an aspect ratio or an intrinsic sizes where it behaves like `start`.

- `start`
  - : The item is packed flush to each other toward the start edge of the alignment container in the appropriate axis.
- `end`
  - : The item is packed flush to each other toward the end edge of the alignment container in the appropriate axis.
- `flex-start`
  - : The item is packed flush to each other toward the edge of the alignment container depending on the flex container's main-start or cross-start side.
    This only applies to flex layout items. For items that are not children of a flex container, this value is treated like `start`.
- `flex-end`
  - : The item is packed flush to each other toward the edge of the alignment container depending on the flex container's main-end or cross-end side.
    This only applies to flex layout items. For items that are not children of a flex container, this value is treated like `end`.
- `self-start`
  - : The item is packed flush to the edge of the alignment container of the start side of the item, in the appropriate axis.
- `self-end`
  - : The item is packed flush to the edge of the alignment container of the end side of the item, in the appropriate axis.
- `center`
  - : The items are packed flush to each other toward the center of the of the alignment container.
- `left`
  - : The items are packed flush to each other toward the left edge of the alignment container. If the property’s axis is not parallel with the inline axis, this value behaves like `start`.
- `right`
  - : The items are packed flush to each other toward the right edge of the alignment container in the appropriate axis. If the property’s axis is not parallel with the inline axis, this value behaves like `start`.
- `baseline first baseline`
  `last baseline`
  - : Specifies participation in first- or last-baseline alignment: aligns the alignment baseline of the box’s first or last baseline set with the corresponding baseline in the shared first or last baseline set of all the boxes in its baseline-sharing group.
    The fallback alignment for `first baseline` is `start`, the one for `last baseline` is `end`.
- `stretch`
  - : If the combined size of the items is less than the size of the alignment container, any `auto`-sized items have their size increased equally (not proportionally), while still respecting the constraints imposed by {{CSSxRef("max-height")}}/{{CSSxRef("max-width")}} (or equivalent functionality), so that the combined size exactly fills the alignment container.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Placing items in a flex container

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

```html hidden
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
  <label for="values">place-items: </label>
  <select id="values">
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
var values = document.getElementById('values');
var display = document.getElementById('display');
var container = document.getElementById('container');

values.addEventListener('change', function (evt) {
  container.style.placeItems = evt.target.value;
});

display.addEventListener('change', function (evt) {
  container.className = evt.target.value;
});
```

#### CSS

```css
#container {
  height:200px;
  width: 240px;
  place-items: center; /* You can change this value by selecting another option in the list */
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
```

#### Result

{{EmbedLiveSample("Placing_items_in_a_flex_container", 260, 290)}}

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
