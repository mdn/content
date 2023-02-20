---
title: hypot()
slug: Web/CSS/hypot
page-type: css-function
tags:
  - CSS
  - CSS Function
  - Function
  - Layout
  - Reference
  - Web
  - hypot
  - Experimental
browser-compat: css.types.hypot
---

{{CSSRef}}{{SeeCompatTable}}

The **`hypot()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/CSS_Functions) is an exponential function that returns the [square root](https://en.wikipedia.org/wiki/Square_root) of the sum of squares of its parameters.

While {{CSSxRef("pow")}} and {{CSSxRef("sqrt")}} only work on unitless numbers, `hypot()` accepts values with units, but they all must have the same [type](/en-US/docs/Web/CSS/CSS_Types).

## Syntax

```css
/* A <number> value */
width: hypot(2em); /* 2em */
width: hypot(3em, 4em); /* 5em */
width: hypot(30px, 40px); /* 50px */
width: hypot(48px, 64px); /* 80px */
width: hypot(3px, 4px, 5px); /* 7.0710678118654755px */
```

### Parameters

The `hypot(x [, ...]#)` function accepts one or more comma-separated calculations as its parameters.

- `x`, `x2`, ..., `xN`
  - : A calculation that resolves to a {{CSSxRef("&lt;number&gt;")}}, {{CSSxRef("&lt;dimension&gt;")}}, or {{CSSxRef("&lt;percentage&gt;")}}.

### Return value

Returns a {{CSSxRef("&lt;number&gt;")}}, {{CSSxRef("&lt;dimension&gt;")}}, or {{CSSxRef("&lt;percentage&gt;")}} (based on the inputs), which is the square root of the sum of squares of its parameters.

- If any of the inputs is `infinite`, the result is `+∞`.
- If a single parameter is provided, the result is the absolute value of its input. `hypot(2em)` and `hypot(-2em)` both resolve to `2em`.

### Formal syntax

{{CSSSyntax}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{CSSxRef("pow")}}
- {{CSSxRef("sqrt")}}
- {{CSSxRef("log")}}
- {{CSSxRef("exp")}}
