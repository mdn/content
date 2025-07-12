---
title: sibling-count()
slug: Web/CSS/sibling-count
page-type: css-function
status:
  - experimental
browser-compat: css.types.sibling-count
---

{{CSSRef}}{{SeeCompatTable}}

The **`sibling-count()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) returns an integer representing the total number of direct child DOM elements of the parent element on which it is used.

> [!NOTE]
> The {{CSSxRef("counter()")}} function provides a similar result but it returns a `<string>`, while `sibling-count()` returns an `<integer>` which can be used for calculations.

## Syntax

```css
--total-sibling-elements: sibling-count();
```

### Parameters

The `sibling-count()` function doesn't accept parameters.

### Return value

An integer; the total number of direct child DOM elements.

## Examples

### Dynamic column count

This example demonstrates setting the number of columns on a container to be equal to the number of its children, enabling placing each child in its own column.

#### HTML

We include a {{htmlelement("ul")}} container and several {{htmlelement("li")}} elements children.

```html
<ul>
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
  <li>Four</li>
</ul>
```

#### CSS

We set the {{CSSxRef("column-count")}} of the container to be equal to the quantity of direct children it contains. We also set every odd element to have a {{CSSxRef("background-color")}} to better demonstrate the resulting effect.

```css
ul {
  column-count: sibling-count();
  text-align: center;
  list-style-type: none;
  padding: 0;
  margin: 0;
}

li:nth-of-type(odd) {
  background-color: rgb(0 0 0 / 0.05);
}
```

#### Results

{{EmbedLiveSample("Dynamic column count", "300", "80")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{CSSxRef("sibling-index()")}}
- {{CSSxRef("calc")}}
