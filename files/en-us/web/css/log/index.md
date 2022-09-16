---
title: log()
slug: Web/CSS/log
tags:
  - CSS
  - CSS Function
  - Function
  - Math
  - Reference
  - Web
  - log
  - Experimental
browser-compat: css.types.log
spec-urls: https://www.w3.org/TR/css-values-4/#exponent-funcs
---

{{CSSRef}}{{SeeCompatTable}}

The **`log()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/CSS_Functions) is an exponential function that returns the logarithm of a number.

## Syntax

```css
/* A <number> value */
width: calc(100px * log(7.389));
width: calc(100px * log(8, 2));
width: calc(100px * log(625, 5));
```

### Parameter

The `log(x, y)` function accepts two comma-separated values as its parameters.

- `x`
  - : A {{cssxref("&lt;number&gt;")}} greater than or equal to 0. Representing the value to be logarithmed.

- `y`
  - : Optional. A {{cssxref("&lt;number&gt;")}} greater than or equal to 0. Representing the base of the logarithm. If not defined, the default logarithm base is `e`.

### Return value

The logarithm of `x`, when `y` is defined.

The natural logarithm (base `e`) of `x`, when `y` is not defined.

### Formal syntax

{{CSSSyntax}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{CSSxRef("pow")}}
- {{CSSxRef("sqrt")}}
- {{CSSxRef("hypot")}}
- {{CSSxRef("exp")}}
