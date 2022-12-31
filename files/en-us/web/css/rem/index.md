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

The **`rem()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/CSS_Functions) returns a remainder (with the same sign as the dividend) when dividing one number by another. The remainder is a leftover when one operand is divided by a second operand. It always takes the sign of the dividend.

> When dividing 27 by 5, the result is 5 with a remainder of 2. The full calculation is `27 / 5 = 5 * 5 + 2`. The `rem(27, 5)` function returns the remainder of `2`.

## Syntax

```css
/* Unitless <number> */
line-height: rem(21, 2);  /* 1 */
line-height: rem(14, 5);  /* 4 */
line-height: rem(5.5, 2); /* 1.5 */

/* Unit based <percentage> and <dimension> */
margin: rem(14%, 3%);       /* 2% */
margin: rem(18px, 5px);     /* 3px */
margin: rem(10rem, 6rem);   /* 4rem */
margin: rem(26vmin, 7vmin); /* 5vmin */

/* Negative/positive values */
rotate: rem(200deg, 30deg);  /* 20deg */
rotate: rem(140deg, -90deg); /* 50deg */
rotate: rem(-90deg, 20deg);  /* -10deg */
rotate: rem(-55deg, -15deg); /* -10deg */
```

### Parameter

The `rem(dividend, divisor)` function accepts two comma-separated values as its parameters. Both parameters must have the same type for the function to be valid.

- `dividend`
  - : A calculation that resolves to a {{CSSxREF("&lt;number&gt;")}}, {{CSSxREF("&lt;dimension&gt;")}}, or {{CSSxREF("&lt;percentage&gt;")}} representing the dividend.

- `divisor`
  - : A calculation that resolves to a {{CSSxREF("&lt;number&gt;")}}, {{CSSxREF("&lt;dimension&gt;")}}, or {{CSSxREF("&lt;percentage&gt;")}} representing the divisor.

### Return value

Returns a {{CSSxREF("&lt;number&gt;")}}, {{CSSxREF("&lt;dimension&gt;")}}, or {{CSSxREF("&lt;percentage&gt;")}} (corresponds to the parameters' type) representing the remainder, that is, the operation leftover.

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
