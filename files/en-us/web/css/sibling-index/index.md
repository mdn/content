---
title: sibling-index()
slug: Web/CSS/sibling-index
page-type: css-function
browser-compat: css.types.sibling-index
---

{{CSSRef}}

The **`sibling-index()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) represents an integer of current element in the DOM tree on which the notation is used among its siblings. In other words, the `sibling-index()` selector returns a number of the child element according to its position among all the sibling elements within a parent element.

> [!NOTE]
> Like the {{CSSxRef(":nth-child()")}} pseudo-class, `sibling-index()` starts from 1, not 0.

## Syntax

```css
li {
  width: calc(sibling-index() * 100px);
}
```

### Parameters

The `sibling-index()` function doesn't accept parameters.

### Return value

A number representing the current element in the DOM tree among its siblings.

## Formal syntax

{{CSSSyntax}}

## Examples

### Dynamic list width

For example, set the list item width dynamically based on the `<li>` elements order in a list.

#### HTML

```html
<ul>
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
  <li>Four</li>
</ul>
```

#### CSS

```css
li {
  width: calc(sibling-index() * 100px);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{CSSxRef("sibling-count", "sibling-count()")}}
