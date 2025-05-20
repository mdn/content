---
title: reading-order
slug: Web/CSS/reading-order
page-type: css-property
browser-compat: css.properties.reading-order
---

{{CSSRef}}

The **`reading-order`** [CSS](/en-US/docs/Web/CSS) property enables defining a {{glossary("reading order")}} for the children of a [reading flow container](/en-US/docs/Glossary/Reading_order#reading_flow_container).

When an element's [block](/en-US/docs/Glossary/Block/CSS), [flex](/en-US/docs/Web/CSS/CSS_flexible_box_layout), or [grid](/en-US/docs/Web/CSS/CSS_grid_layout) parent container has a {{cssxref("reading-flow")}} resolving to a value other than `normal`, the `reading-order` property can be used to set the element's [reading flow](/en-US/docs/Glossary/Reading_order#reading_flow) position relative to that of its siblings.

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

- {{cssxref("&lt;integer&gt;")}}
  - : Represents the ordinal group an element belongs to.

## Description

The `reading-order` property lets the author define where in the reading order an element is read out or tabbed to relative to its siblings within a reading flow container parent, optionally overriding the reading order set by the [reading-flow](/en-US/docs/Web/CSS/reading-flow) property on that parent.

For reading and navigation, elements inside a block, flex, or grid container are sorted by ascending `reading-order` value. If multiple siblings have the same `reading-order` value, those items are sorted according to the container's `reading-flow` value. Siblings not given an explicit `reading-order` value are assigned the default value of `0`, which puts all the children of a reading flow container in the same ordinal group by default.

Sibling elements are ordered starting from the lowest numbered ordinal group to the highest. Therefore, to cause an element to be read out after its siblings, you could set a `reading-order` value or `1` or more on it. To cause an element to be read out before its siblings, you could set a `reading-order` value or `-1` or less on it.

The `reading-order` defines the reading and tabbing order, but has no effect on visual order.

## Formal definition

{{cssinfo}}

## Examples

### Grid row order

In this example there are six {{htmlelement("a")}} elements, laid out on a grid. One of them has a lower `reading-order` value set, so will be read out before the others, and another has a higher `reading-order` value set, so will be read out after the others, regardless of source or display order.

#### HTML

The six `<a>` elements are contained inside a wrapper {{htmlelement("div")}}.

```html
<div class="wrapper">
  <a href="#">Item 1</a>
  <a class="bottom" href="#">Item 2</a>
  <a href="#">Item 3</a>
  <a class="top" href="#">Item 4</a>
  <a href="#">Item 5</a>
  <a href="#">Item 6</a>
</div>
```

#### CSS

On the `<div>`, we set the [grid-auto-flow](/en-US/docs/Web/CSS/grid-auto-flow) property to `dense`, therefore items may display out of source order. The `reading-order` property on the `<a>` element with a class of `top` is set to `-1`, therefore "Item 4" will be the first item in reading flow. The `reading-order` property on the `<a>` element with a class of `bottom` is set to `21`, therefore "Item 4" will be the last item in the reading flow. The remaining items will be visited in between, in the order they display in rows, as the `<div>` element's {{cssxref("reading-flow")}} property is set to [grid-rows](/en-US/docs/Web/CSS/grid-row).

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

.bottom {
  reading-order: 21;
}
```

#### Result

The above demo renders as follows:

{{EmbedLiveSample('Grid row order', '100%', '100px')}}

Try tabbing through the links. Note how "Item 4" is tabbed to first and "Item 2" is tabbed to last because of their modified `reading-order` values. In between, the items are tabbed to in grid row order.

### Source order override

In this example there are five {{htmlelement("a")}} elements, displayed as block-level elements. The odd-number items have a lower `reading-order` value set, so will be read out before the others, regardless of source or display order.

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

The `<div>` element's `reading-flow` property is set to `source-order`, which allows `reading-order` to be used to override the default source reading order. The odd-numbered `<a>` elements have a `reading-order` value of `-1`, therefore they are read out before the even-numbered items, regardless of source order.

```css
.wrapper {
  reading-flow: source-order;
}

.wrapper > a {
  display: block;
}

.wrapper a:nth-child(odd) {
  reading-order: -1;
}
```

#### Result

The above demo renders as follows:

{{EmbedLiveSample('Source order override', '100%', '100px')}}

Try tabbing through the links, and note how "Item 1", "Item 3", and "Item 5" are tabbed to first because of their modified `reading-order`. After that, the items are tabbed to in source order.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("reading-flow")}}
- [CSS `reading-flow` examples](https://chrome.dev/reading-flow-examples/) via chrome.dev
