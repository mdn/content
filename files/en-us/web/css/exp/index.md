---
title: exp()
slug: Web/CSS/exp
page-type: css-function
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
---

{{CSSRef}}{{SeeCompatTable}}

The **`exp()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/CSS_Functions) is an exponential function that takes an number as an argument and returns the mathematical constant `e` raised to the power of the given number.

The mathematical constant [e](https://en.wikipedia.org/wiki/E_(mathematical_constant)) represents Euler's number and is the base of natural logarithms, and is approximately `2.71828`.

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
  - : A calculation which resolves to a {{cssxref("&lt;number&gt;")}}. Representing the value to be raised by a power of `e`.

### Return value

Returns a {{cssxref("&lt;number&gt;")}} which is the result of calculating `e` raised to the power of `number`.

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
