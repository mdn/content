---
title: reading-order
slug: Web/CSS/reading-order
page-type: css-property
browser-compat: css.properties.reading-order
---

{{CSSRef}}

The **`reading-order`** property lets the author change where in the reading flow an item is visited, overriding the position set by the [reading-flow](/en-US/docs/Web/CSS/reading-flow) property on its parent. It takes a single `<integer>` value, which specifies which ordinal group the item belongs to. Sibling elements are ordered starting from the lowest numbered ordinal group and going up.

If the reading order of two items is equivalent, the [reading-flow](/en-US/docs/Web/CSS/reading-flow) property breaks the tie.

## Syntax

```css
reading-flow: <integer>;
```

## Formal definition

{{cssinfo}}

## Examples

### Grid Rows

In this example there are six grid items, the [grid-auto-flow](/en-US/docs/Web/CSS/grid-auto-flow) property has a value of dense, therefore items may display out of source order. The `reading-order` property on the item with a class of [top](/en-US/docs/Web/CSS/top) is -1 Therefore Item 4 will be the first item in reading flow. The remaining items will be visited in the order they display in rows, as [reading-flow](/en-US/docs/Web/CSS/reading-flow) has a value of [grid-rows](/en-US/docs/Web/CSS/grid-row).

#### HTML

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

{{EmbedLiveSample('Grid_rows', '', '50px')}}

### Source Order

In this example there are five direct block-level children of a block container where [reading-flow](/en-US/docs/Web/CSS/reading-flow) has a value of `source-order`. The third item has a `reading-order` value of -1. The reading flow visits the third item first, then the rest in source order.

#### HTML

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

{{EmbedLiveSample('Source_order', '', '50px')}}

> [!NOTE]
> The source document should express the underlying logical order of elements. The [reading-flow](/en-US/docs/Web/CSS/reading-flow) and `reading-order` properties exist for cases where a given document can have multiple reading orders depending on layout changes, e.g., in response to [media queries](/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries). In such cases, the most common or most fundamental reading order should be encoded in the source order so that the document is sensical without CSS.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("reading-flow")}}
- [CSS `reading-flow` examples](https://chrome.dev/reading-flow-examples/) via chrome.dev
