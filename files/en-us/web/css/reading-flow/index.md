---
title: reading-flow
slug: Web/CSS/reading-flow
page-type: css-property
browser-compat: css.properties.reading-flow
---

{{CSSRef}}

The **`reading-flow`** [CSS](/en-US/docs/Web/CSS) property defines the reading order of elements within a [flex](/en-US/docs/Web/CSS/CSS_flexible_box_layout) or [grid](/en-US/docs/Web/CSS/CSS_grid_layout) container when set to a value other than `normal`.

The **`rendering-defined sibling reading flow`** of a reading flow container is an ordered list of in-flow children of the container. All children must render to an element and are considered siblings in the reading flow container. The order is determined by the `reading-flow` property.

## Syntax

```css
reading-flow: normal;
reading-flow: flex-visual;
reading-flow: flex-flow;
reading-flow: grid-rows;
reading-flow: grid-columns;
reading-flow: grid-order;
```

### Value

The `reading-flow` property takes one of the following keywords as its value:

- `normal`

  - : Follows the order of elements in the DOM. This is the default value if `reading-flow` is not explicitly set.

- `flex-visual`

  - : Only takes effect on `flex` containers. Follows the visual reading order of `flex` items, taking the writing mode into account. Therefore, a document in English, with `flex-direction: row-reverse` and `reading-flow: flex-visual` would have a reading order of [left](/en-US/docs/Web/CSS/left) to [right](/en-US/docs/Web/CSS/right).

- `flex-flow`

  - : Follows the [flex-flow](/en-US/docs/Web/CSS/flex-flow) direction. Only affects flex containers. 

- `grid-rows`

  - : Follows the visual order of grid items by row, taking the writing mode into account. Only affects {{glossary("Grid Container", "grid containers")}}. 

- `grid-columns`

  - : Follows the visual order of grid items by column, taking the writing mode into account. Only affects grid containers.

- `grid-order`
  - : Follows the order-modified document order resulting from using the {{cssxref("order")}} property to change the order of items. Behaves as `normal` if no `order` was set.

## Formal definition

{{cssinfo}}

The `reading-flow` property controls the order in which elements in a flex or grid layout are rendered to speech or are navigated to when using (linear) sequential navigation methods.

## Examples

### Flex visual

In this example, there are three flex items displayed as a row, with `reading-flow: flex-visual` and `flex-direction: row-reverse`. We are in English with a text direction of [left](/en-US/docs/Web/CSS/left) to [right](/en-US/docs/Web/CSS/right). The reading order of these items is therefore `"Item 3"`, `"Item 2"`, `"Item 1"`, reading from [left](/en-US/docs/Web/CSS/left) to [right](/en-US/docs/Web/CSS/right).

#### HTML

```html
<div class="wrapper">
  <a href="#">Item 1</a>
  <a href="#">Item 2</a>
  <a href="#">Item 3</a>
</div>
```

#### CSS

```css
.wrapper {
  display: flex;
  flex-direction: row-reverse;
  reading-flow: flex-visual;
}
```

{{EmbedLiveSample('Flex_visual', '', '50px')}}

### Grid Grow

In this example there are four grid items, placed on a grid and displayed visually out of DOM order. The `reading-flow` property has a value of `grid-rows`, and the document is in English. The reading order of these items is therefore `"Item 4"`, `"Item 2"`, `"Item 3"`, `"Item 1"`.

#### HTML

```html
<div class="wrapper">
  <a class="a" href="#">Item 1</a>
  <a class="b" href="#">Item 2</a>
  <a class="c" href="#">Item 3</a>
  <a class="d" href="#">Item 4</a>
</div>
```

#### CSS

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 150px);
  grid-template-areas:
    "d b b"
    "c c a";
  reading-flow: grid-rows;
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
```

{{EmbedLiveSample('Grid_rows', '', '50px')}}

The `reading-flow` property affects neither layout nor painting order and therefore has no effect on rendering to the visual `canvas`.

When using a [flex-\*](/en-US/docs/Web/CSS/flex) or [grid-\*](/en-US/docs/Web/CSS/grid) keyword value, the order property is taken into account.

### Flex Flow

In this example, there are three flex items displayed as a row, with `reading-flow: flex-flow`. The third item in the DOM has `order=-1`. The reading order of these items is therefore `"Item 3"`, `"Item 1"`, `"Item 2"`.

#### HTML

```html
<div class="wrapper">
  <a href="#">Item 1</a>
  <a href="#">Item 2</a>
  <a href="#">Item 3</a>
</div>
```

#### CSS

```css
.wrapper a:nth-child(3) {
  order: -1;
}

.wrapper {
  display: flex;
  reading-flow: flex-flow;
}
```

{{EmbedLiveSample('Flex_flow', '', '50px')}}

> [!NOTE]
> The source document should express the underlying logical order of elements. The `reading-flow` property exists for cases where a given document can have multiple reading orders depending on layout changes, e.g. in response to [media queries](/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries). In such cases, the most common or most fundamental reading order should be encoded in the source order so that the document is sensical without CSS.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("reading-order")}}
- [CSS `reading-flow` examples](https://chrome.dev/reading-flow-examples/) via chrome.dev
