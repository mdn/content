---
title: sibling-count()
slug: Web/CSS/sibling-count
page-type: css-function
status:
  - experimental
browser-compat: css.types.sibling-count
sidebar: cssref
---

{{SeeCompatTable}}

The **`sibling-count()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) returns an integer representing the total number of sibling DOM elements (direct children of the parent) of the element on which it is used, including itself.

> [!NOTE]
> The {{CSSxRef("counter()")}} function provides a similar result but it returns a `<string>`, while `sibling-count()` returns an `<integer>` which can be used for calculations.

## Syntax

```css-nolint
sibling-count()
```

### Parameters

The `sibling-count()` function doesn't accept parameters.

### Return value

An integer; the total number of sibling DOM elements including the element itself.

## Examples

### Dynamic column count

This example demonstrates setting the width of each item in a list based on the number of items, enabling placing each child in its own column.

#### HTML

We include a {{htmlelement("ul")}} container and several {{htmlelement("li")}} elements children.

```html
<ul>
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
  <li>Four</li>
  <li>Five</li>
</ul>
```

#### CSS

We divide the {{CSSxRef("width")}} of each list item by the number of direct children the list contains. We also set every odd element to have a {{CSSxRef("background-color")}} to better demonstrate the resulting effect.

```css
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  text-align: center;
  display: flex;
}

li {
  width: calc(100% / sibling-count());
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
