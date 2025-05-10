---
title: reading-order
slug: Web/CSS/reading-order
page-type: css-property
browser-compat: css.properties.reading-order
---

{{CSSRef}}

The **`reading-order`** [CSS](/en-US/docs/Web/CSS) property sets a {{glossary("reading order")}} ordinal group value on elements within a [block](/en-US/docs/Glossary/Block/CSS), [flex](/en-US/docs/Web/CSS/CSS_flexible_box_layout), or [grid](/en-US/docs/Web/CSS/CSS_grid_layout) container, enabling authors to override the [reading flow](/en-US/docs/Glossary/Reading_order#reading_flow) set via the container's [reading-flow](/en-US/docs/Web/CSS/reading-flow) property value.

## Syntax

```css
/* <integer> values */
reading-order: 1;
reading-order: -1;

/* Global values */
reading-order: inherit;
reading-order: initial;
reading-order: revert;
reading-order: revert-layer;
reading-order: unset;
```

### Value

The `reading-order` property takes a single {{cssxref("integer")}} value specifying which ordinal group an element belongs to.

## Description

The `reading-order` property lets the author change where in the reading order an element is read out or tabbed to. It enables authors to override the reading order set by the [reading-flow](/en-US/docs/Web/CSS/reading-flow) property on its parent.

The default `reading-order` value is `0` for elements inside a block, flex, or grid container. This puts them all in the same ordinal group. Sibling elements are ordered starting from the lowest numbered ordinal group to the highest. Therefore, to cause an element to be read out after its siblings, you could set a `reading-order` value or `1` or more on it. To cause an element to be read out before its siblings, you could set a `reading-order` value or `-1` or less on it.

## Formal definition

{{cssinfo}}

## Examples

### Grid row order

In this example there are six {{htmlelement("a")}} elements, laid out on a grid. One of them has a lower `reading-order` value set, so will be read out before the others, regardless of source or display order.

#### HTML

The six `<a>` elements are contained inside a wrapper {{htmlelement("div")}}.

```html
<div class="wrapper">
  <a href="#">Item 1</a>
  <a href="#">Item 2</a>
  <a href="#">Item 3</a>
  <a class="top" href="#">Item 4</a>
  <a href="#">Item 5</a>
  <a href="#">Item 6</a>
</div>
```

#### CSS

On the `<div>`, we set the [grid-auto-flow](/en-US/docs/Web/CSS/grid-auto-flow) property to `dense`, therefore items may display out of source order. The `reading-order` property on the `<a>` element with a class of [top](/en-US/docs/Web/CSS/top) is set to `-1`, therefore "Item 4" will be the first item in reading flow. The remaining items will be visited in the order they display in rows, as the `<div>` element's {{cssxref("reading-flow")}} property is set to [grid-rows](/en-US/docs/Web/CSS/grid-row).

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 150px);
  grid-auto-flow: dense;
  reading-flow: grid-rows;
}

.top {
  reading-order: -1;
}
```

#### Result

The above demo renders as follows:

{{EmbedLiveSample('Grid row order', '100%', '100px')}}

Try tabbing through the links, and note how "Item 4" is tabbed to first because of its modified `reading-order` value. After that, the items are tabbed to in grid row order.

### Source order override

In this example there are five {{htmlelement("a")}} elements, displayed as block-level elements. One of them has a lower `reading-order` value set, so will be read out before the others, regardless of source or display order.

#### HTML

The five `<a>` elements are contained inside a wrapper {{htmlelement("div")}}.

```html
<div class="wrapper">
  <a href="#">Item 1</a>
  <a href="#">Item 2</a>
  <a href="#">Item 3</a>
  <a href="#">Item 4</a>
  <a href="#">Item 5</a>
</div>
```

#### CSS

The `<div>` element's `reading-flow` property is set to `source-order`, which allows `reading-order` to be used to override the default source reading order. The third `<a>` element has a `reading-order` value of `-1`, therefore it is read out first, regardless of source order.

```css
.wrapper {
  reading-flow: source-order;
}

.wrapper > a {
  display: block;
}

.wrapper a:nth-child(3) {
  reading-order: -1;
}
```

#### Result

The above demo renders as follows:

{{EmbedLiveSample('Source order override', '100%', '100px')}}

Try tabbing through the links, and note how "Item 3" is tabbed to first because of its modified `reading-order` value. After that, the items are tabbed to in source order.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("reading-flow")}}
- [CSS `reading-flow` examples](https://chrome.dev/reading-flow-examples/) via chrome.dev
