---
title: rem()
slug: Web/CSS/rem
page-type: css-function
tags:
  - CSS
  - CSS Function
  - Function
  - Math
  - Reference
  - Web
  - rem
  - Experimental
browser-compat: css.types.rem
---

{{CSSRef}}{{SeeCompatTable}}

The **`rem()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/CSS_Functions) returns a remainder (with the same sign as the dividend) when dividing one number by another. The remainder is a left over when one operand is divided by a second operand. It always takes the sign of the dividend.

> When dividing 12 by 5, the result is 10 with a remainder of 2. The full calculation is `12 / 5 = 10 (2)`. The `rem()` function returns the reminder.

## Syntax

```css
// Unitless values
line-height: rem(21, 2);  // 1
line-height: rem(14, 5);  // 4
line-height: rem(5.5, 2); // 1.5

// Unit based values
margin: rem(14%, 3%);   // 2%
margin: rem(18px, 5px); // 3px
margin: rem(25vw, 7vw); // 4vw

// Negative/positive values
rotate: rem(200deg, 30deg);  // 20deg
rotate: rem(140deg, -90deg); // 50deg
rotate: rem(-90deg, 20deg);  // -10deg
rotate: rem(-90deg, -20deg); // -10deg
```

### Parameter

The `rem(dividend, divisor)` function accepts two comma-separated values as its parameters. Both parameters must have the same type, or else the function is invalid.

- `dividend`
  - : A calculation that resolves to a {{CSSxREF("&lt;number&gt;")}}, {{CSSxREF("&lt;dimension&gt;")}}, or {{CSSxREF("&lt;percentage&gt;")}} representing the dividend.

- `divisor`
  - : A calculation that resolves to a {{CSSxREF("&lt;number&gt;")}}, {{CSSxREF("&lt;dimension&gt;")}}, or {{CSSxREF("&lt;percentage&gt;")}} representing the divisor.

### Return value

Returns a {{CSSxREF("&lt;number&gt;")}} representing the remainder, that is, the operation left over.

- If `divisor` is `0`, the result is `NaN`.
- If `dividend` is `infinite`, the result is `NaN`.
- If `dividend` is positive the result is positive (`0⁺`), and if `dividend` is negative the result is negative (`0⁻`).

### Formal syntax

{{CSSSyntax}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{CSSxRef("round")}}
- {{CSSxRef("mod")}}
