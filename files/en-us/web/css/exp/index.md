---
title: exp()
slug: Web/CSS/exp
tags:
  - CSS
  - CSS Function
  - Function
  - Math
  - Reference
  - Web
  - exp
  - Experimental
browser-compat: css.types.exp
spec-urls: https://www.w3.org/TR/css-values-4/#exponent-funcs
---

{{CSSRef}}{{SeeCompatTable}}

The **`exp()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/CSS_Functions) is an exponential function that returns `e` raised to the power of a number.

The function contains a calculation which returns the same value as {{CSSxRef("pow", "pow(e, number)")}}.

## Syntax

```css
/* A <number> value */
width: calc(100px * exp(-1)); /* 100px * 0.367879441171442 = 36px */
width: calc(100px * exp(0));  /* 100px * 1 = 100px */
width: calc(100px * exp(1));  /* 100px * 2.718281828459045 = 217px */
```

### Parameter

The `exp(number)` function accepts only one value as its parameter.

- `number`
  - : A {{cssxref("&lt;number&gt;")}} greater than or equal to 0. Representing the value to be raised by a power of `e`.

### Return value

Returns A {{cssxref("&lt;number&gt;")}} of `e` raised to the power of a `number`.

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
- {{CSSxRef("log")}}
