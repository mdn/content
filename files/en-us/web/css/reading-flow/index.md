---
title: reading-flow
slug: Web/CSS/reading-flow
page-type: css-property
browser-compat: css.properties.reading-flow
---

{{CSSRef}}

The **`reading-flow`** [CSS](/en-US/docs/Web/CSS) property enables modifying the {{glossary("reading order")}} of child elements of a [block](/en-US/docs/Glossary/Block/CSS), [flex](/en-US/docs/Web/CSS/CSS_flexible_box_layout), or [grid](/en-US/docs/Web/CSS/CSS_grid_layout) layout. This affects the order in which they are rendered to speech and navigated to when using sequential navigation such as tabbing to links or buttons.

## Syntax

```css
/* Keyword values */
reading-flow: normal;
reading-flow: flex-visual;
reading-flow: flex-flow;
reading-flow: grid-columns;
reading-flow: grid-rows;
reading-flow: grid-order;
reading-flow: source-order;

/* Global values */
reading-flow: inherit;
reading-flow: initial;
reading-flow: revert;
reading-flow: revert-layer;
reading-flow: unset;
```

### Value

The `reading-flow` property takes one of the following keywords as its value:

- `normal`

  - : The default value. The reading order follows the order of elements in the DOM.

- `flex-visual`

  - : Only affects {{glossary("Flex Container", "flex containers")}}. The reading order follows the visual order of the `flex` items, taking the {{cssxref("writing-mode")}} into account. Therefore, a document in English with `flex-direction: row-reverse` and `reading-flow: flex-visual` set would have a reading order of left-to-right.

- `flex-flow`

  - : Only affects flex containers. The reading order follows the {{cssxref("flex-flow")}} direction.

- `grid-columns`

  - : Only affects {{glossary("Grid Container", "grid containers")}}. The reading order follows the visual order of grid items, column by column, taking the writing mode into account.

- `grid-rows`

  - : Only affects grid containers. The reading order follows the visual order of grid items, row by row, taking the writing mode into account.

- `grid-order`

  - : Only affects grid containers. if the {{cssxref("order")}} property is applied to any of the container's children, the reading order follows the modified item order. If the `order` property is not applied to the grid items, `grid-order` behaves as `normal`.

- `source-order`
  - : Affects grid, flex, and block containers. Has no effect on its own — the container's reading order continues to follow the order of elements in the DOM — but allows the reading order to be modified by setting the {{cssxref("reading-order")}} property on the container's children.

## Description

The `reading-flow` property modifies the {{glossary("reading order")}} of elements within a [block](/en-US/docs/Glossary/Block/CSS), [flex](/en-US/docs/Web/CSS/CSS_flexible_box_layout), or [grid](/en-US/docs/Web/CSS/CSS_grid_layout) container when set to a value other than `normal`. Such a container is referred to as a [reading flow container](/en-US/docs/Glossary/Reading_order#reading_flow_container).

By default, web content is read out in DOM source order. Generally, the source order should express a sensible reading order for the content, and this should also be reflected by the visual order in the content layout. However, sometimes the visual order or tab order differs from the source order. For example, when applying multiple flexbox or grid layouts to a document via [media queries](/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries) to suit different device or user requirements, the content order may differ based on the viewport width. In such a case, the `reading-flow` can be used to ensure the reading and tabbing order reflect the visual order.

In some cases you may wish to further fine-tune the reading order within a reading flow container. You can use {{cssxref("reading-order")}} property values on the container's children, putting them into ordinal groups which are then read out in numerical order.

## Formal definition

{{cssinfo}}

## Examples

### Flex value comparison

In this example, we demonstrate the effects of different `reading-flow` values on a flex container with reversed flex items.

#### HTML

The markup includes a {{htmlelement("select")}} element for selecting different `reading-flow` values, and a wrapper {{htmlelement("div")}} containing three {{htmlelement("a")}} elements.

```html
<form>
  <label for="reading-flow">Choose reading flow:</label>
  <select id="reading-flow">
    <option>normal</option>
    <option>flex-visual</option>
    <option>flex-flow</option>
  </select>
</form>
<div class="wrapper">
  <a href="#">Item 1</a>
  <a href="#">Item 2</a>
  <a href="#">Item 3</a>
</div>
```

#### CSS

We use a {{cssxref("display")}} value of `flex` to turn the `<div>` into a flex container, and display the flex items in a row in reverse DOM order with a {{cssxref("flex-direction")}} value of `row-reverse`. Initially, we set a `reading-flow` of `normal` so the items are read or tabbed through in DOM source order.

We also set an {{cssxref("order")}} value of `1` on the first `<a>` element to cause it to display after the second and third item in the flex flow. The resulting visual order of the flex items from left to right is "Item 1", "Item 3", then "Item 2", but the DOM order remains unchanged.

```css
.wrapper {
  display: flex;
  flex-direction: row-reverse;
  reading-flow: normal;
  gap: 1em;
}

a:first-child {
  order: 1;
}
```

#### JavaScript

In our script, we grab references to the `<select>` element and wrapper `<div>`, then add a [`change`](/en-US/docs/Web/API/HTMLElement/change_event) event listener to the `<select>` element. When a new value is selected, it is set as a `reading-flow` property value on the wrapper.

```js
const selectElem = document.getElementById("reading-flow");
const wrapperElem = document.querySelector(".wrapper");

selectElem.addEventListener("change", () => {
  wrapperElem.style.readingFlow = selectElem.value;
});
```

#### Result

The demo renders like this:

{{EmbedLiveSample('Flex value comparison', '', '100px')}}

First, try tabbing through the links with `reading-flow: normal` set. The tabbing order is "Item 1", "Item 2", then "Item 3", as that is the order of the elements in the DOM.

Now try changing the `reading-flow` value and tabbing through the links again:

- A value of `flex-visual` causes the items to be tabbed through in the order "Item 1", "Item 3", then "Item 2", which is the visual display order resulting from the applied flexbox properties.
- A value of `flex-flow` causes the items to be tabbed through in the order "Item 2", "Item 3", then "Item 1", which is the direction of the flex flow in this `row-reverse` case, where the tabbing order is the reverse of the display order.

### Grid value comparison

In this example, we demonstrate the effects of different `reading-flow` values on a grid container.

#### HTML

The markup includes a {{htmlelement("select")}} element for selecting different `reading-flow` values, and a wrapper {{htmlelement("div")}} containing four {{htmlelement("a")}} elements.

```html
<form>
  <label for="reading-flow">Choose reading flow:</label>
  <select id="reading-flow">
    <option>normal</option>
    <option>grid-rows</option>
    <option>grid-columns</option>
    <option>grid-order</option>
  </select>
</form>
<div class="wrapper">
  <a class="a" href="#">Item A</a>
  <a class="b" href="#">Item B</a>
  <a class="c" href="#">Item C</a>
  <a class="d" href="#">Item D</a>
</div>
```

#### CSS

We use a {{cssxref("display")}} value of `grid` to turn the `<div>` into a grid container, and display the grid items in three columns using {{cssxref("grid-template-columns")}}. We also set {{cssxref("grid-template-areas")}} to describe different placement areas in those columns, and place the `<a>` elements in those areas using {{cssxref("grid-area")}}. Initially, we set a `reading-flow` of `normal` so the items are read or tabbed through in the default DOM source order.

Finally, we set an {{cssxref("order")}} value of `1` on the first `<a>` element; this has no effect on the layout because it does not override the grid area placement, but it does have an effect when a certain `reading-flow` value is set, as you'll se later on.

Reading from left to right, the resulting display order of the grid items is "Item D", "Item B", "Item C", then "Item A".

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 150px);
  grid-template-areas:
    "d b b"
    "c c a";
  reading-flow: normal;
}

.a {
  grid-area: a;
}
.b {
  grid-area: b;
}
.c {
  grid-area: c;
}
.d {
  grid-area: d;
}

a:first-child {
  order: 1;
}
```

#### JavaScript

In our script, we grab references to the `<select>` element and wrapper `<div>`, then add a [`change`](/en-US/docs/Web/API/HTMLElement/change_event) event listener to the `<select>` element. When a new value is selected, it is set as a `reading-flow` property value on the wrapper.

```js
const selectElem = document.getElementById("reading-flow");
const wrapperElem = document.querySelector(".wrapper");

selectElem.addEventListener("change", () => {
  wrapperElem.style.readingFlow = selectElem.value;
});
```

#### Result

The demo renders like this:

{{EmbedLiveSample('Grid value comparison', '', '100px')}}

First, try tabbing through the links with `reading-flow: normal` set. The tabbing order is "Item A", "Item B", "Item C", and "Item D", as that is the order of the elements in the DOM.

Now change the `reading-flow` value and then try tabbing through the links again:

- A value of `grid-rows` causes the items to be tabbed through in the visual display order by row. This is "Item D", "Item B", "Item C", then "Item A".
- A value of `grid-columns` causes the items to be tabbed through in the visual display order by column. This is "Item D", "Item C", "Item B", then "Item A".
- A value of `grid-order` causes the items to be tabbed through in DOM order, but takes into account any `order` value changes. Since we have `order: 1;` set on the first `<a>` element, the tabbing order is "Item B", "Item C", "Item D", then "Item A".

### Reading order adjustment on block containers

In this example, we demonstrate the effects of the `reading-flow: source-order` value on a block container.

#### HTML

The markup includes a wrapper {{htmlelement("div")}} containing four {{htmlelement("a")}} elements.

```html
<div class="wrapper">
  <a class="a" href="#">Item A</a>
  <a class="b" href="#">Item B</a>
  <a class="c" href="#">Item C</a>
  <a class="d" href="#">Item D</a>
</div>
```

#### CSS

We set a `reading-flow` of `source-order` so the items are read or tabbed through in DOM source order, but modifications are allowed to the reading order via {{cssxref("reading-order")}}. We set a `reading-order` value of `1` on the first `<a>` element.

```css
.wrapper {
  reading-flow: source-order;
}

a:first-child {
  reading-order: 1;
}
```

#### Result

The demo renders like this:

{{EmbedLiveSample('Reading flow adjustment on block containers', '', '100px')}}

Try tabbing through the links: the tabbing order is "Item B", "Item C", "Item D", then "Item A" — the order of the elements in the DOM is followed, but Item A has been put in a higher reading order ordinal group than the others (the default `reading-order` value is `0`), therefore it is tabbed to last.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("reading-order")}}
- [CSS `reading-flow` examples](https://chrome.dev/reading-flow-examples/) via chrome.dev
