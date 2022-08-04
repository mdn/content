---
title: cos()
slug: Web/CSS/cos
tags:
  - CSS
  - CSS Function
  - Function
  - Math
  - Reference
  - Web
  - cos
browser-compat: css.types.cos
spec-urls: https://drafts.csswg.org/css-values/#trig-funcs
---
{{CSSRef}}

The **`cos()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/CSS_Functions) is a trigonometric function that returns the cosine of a number, which is a value between `-1` and `1`. The function contains a single calculation that must resolve to either a `<number>` or an `<angle>` by interpreting the result of the argument as radians. That is, `cos(45deg)`, `cos(0.125turn)`, and `cos(3.14159 / 4)` all represent the same value, approximately `.707`.

## Syntax

```css
width: calc( cos(-45deg) * 1px );
```

The `cos()` function takes only one expression as its argument.

### Formal syntax

{{CSSSyntax}}

## Examples

### Keep rotated element size

When the element is rotated using {{cssxref("transform-function/rotate", "rotate()")}}, it goes beyond its initial size. To fix this, we will use `cos()` to update the element size.

In the following example, we have a `100px`/`100px` element. When we rotate it by `45deg`, we adjust the `width` and `height` size:

```css
div {
  /* Original */
  width: 100px;
  height: 100px;
  background-color: red;

  /* Rotated */
  transform-origin: center;
  transform:
    translate( calc( 100px / 4 * cos(45deg) ) )
    rotate(45deg);
  width: calc( 100px * cos(45deg) );
  height: calc( 100px * cos(45deg) );
  margin-inline-end: calc( 100px / 2 * cos(45deg) );
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{CSSxRef("sin")}}
- {{CSSxRef("tan")}}
- {{CSSxRef("asin")}}
- {{CSSxRef("acos")}}
- {{CSSxRef("atan")}}
- {{CSSxRef("atan2")}}
