---
title: pow()
slug: Web/CSS/pow
tags:
  - CSS
  - CSS Function
  - Function
  - Math
  - Reference
  - Web
  - pow
  - Experimental
browser-compat: css.types.pow
spec-urls: https://www.w3.org/TR/css-values-4/#exponent-funcs
---

{{CSSRef}}{{SeeCompatTable}}

The **`pow()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/CSS_Functions) is an exponential function that returns the value of a base raised to the power of a number.

The {{CSSxRef("exp")}} function is a special case of `pow()` where the value of the base is `e`.

## Syntax

```css
/* A <number> value */
width: calc(100px * pow(-1)); /* 100px * 0.367879441171442 = 36px */
width: calc(100px * pow(0));  /* 100px * 1 = 100px */
width: calc(100px * pow(1));  /* 100px * 2.718281828459045 = 217px */
```

### Parameters

The `pow(base, number)` function accepts two comma-separated values as its parameters.

- `base`
  - : A {{cssxref("&lt;number&gt;")}} representing the base.

- `number`
  - : A {{cssxref("&lt;number&gt;")}} representing the exponent number.

### Return value

Returns a {{cssxref("&lt;number&gt;")}} representing `base` taken to the power of a `number`.

### Formal syntax

{{CSSSyntax}}

## Example

The `pow()` function can be useful for strategies like CSS Modular Scale, which relates all the font-sizes on a page to each other by a fixed ratio.

These sizes can be easily written into custom properties like:

```css
:root {
  --h1: calc(1rem * pow(1.5, 4));
  --h2: calc(1rem * pow(1.5, 3));
  --h3: calc(1rem * pow(1.5, 2));
  --h4: calc(1rem * pow(1.5, 1));
  --h5: calc(1rem * pow(1.5, 0));
  --h6: calc(1rem * pow(1.5, -1));
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{CSSxRef("sqrt")}}
- {{CSSxRef("hypot")}}
- {{CSSxRef("exp")}}
- {{CSSxRef("log")}}
