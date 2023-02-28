---
title: sqrt()
slug: Web/CSS/sqrt
page-type: css-function
status:
  - experimental
browser-compat: css.types.sqrt
---

{{CSSRef}}{{SeeCompatTable}}

The **`sqrt()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/CSS_Functions) is an exponential function that returns the [square root](https://en.wikipedia.org/wiki/Square_root) of a number.

The function `pow(x, 0.5)` is equivalent to `sqrt(x)`.

## Syntax

```css
/* A <number> value */
width: calc(100px * sqrt(9)); /*  300px */
width: calc(100px * sqrt(25)); /*  500px */
width: calc(100px * sqrt(100)); /* 1000px */
```

### Parameters

The `sqrt(x)` function accepts only one value as its parameter.

- `x`
  - : A calculation which resolves to a {{cssxref("&lt;number&gt;")}} greater than or equal to 0.

### Return value

Returns a {{cssxref("&lt;number&gt;")}} which is the square root of `x`.

- if `x` is `+∞`, the result is `+∞`.
- If `x` is `0⁻`, the result is `0⁻`.
- If `x` is less than `0`, the result is `NaN`.

### Formal syntax

{{CSSSyntax}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{CSSxRef("pow")}}
- {{CSSxRef("hypot")}}
- {{CSSxRef("log")}}
- {{CSSxRef("exp")}}
