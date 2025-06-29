---
title: sibling-count()
slug: Web/CSS/sibling-count
page-type: css-function
browser-compat: css.types.sibling-count
---

{{CSSRef}}

The **`sibling-count()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) represents an integer of the total number of direct child DOM elements on the element it is used.

> [!NOTE]
> The {{CSSxRef("counter()")}} function provides a similar result but it returns a `<string>`, while `sibling-count()` returns an `<integer>` which can be used for calculations.

## Syntax

```css
--total-sibling-elements: sibling-count();
```

### Parameters

The `sibling-count()` function doesn't accepts parameters.

### Return value

A number representing the total number of direct child DOM elements.

## Formal syntax

{{CSSSyntax}}

## Examples

### Dynamic column count

For example, set the number of columns based on the number `<li>` elements in a list.

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
ul {
  column-count: sibling-count();
  text-align: center;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{CSSxRef("sibling-index")}}
