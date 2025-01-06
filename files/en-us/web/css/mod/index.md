---
title: mod()
slug: Web/CSS/mod
page-type: css-function
browser-compat: css.types.mod
---

{{CSSRef}}

The **`mod()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/CSS_Functions) returns a modulus left over when the first parameter is divided by the second parameter, similar to the JavaScript [remainder operator (`%`)](/en-US/docs/Web/JavaScript/Reference/Operators/Remainder). The modulus is the value left over when one operand, the dividend, is divided by a second operand, the divisor. It always takes the sign of the divisor.

The calculation is `a - (Math.floor(a / b) * b)`. For example, the CSS `mod(21, -4)` function returns the remainder of `-3`. The full calculation is `21 - (Math.floor(21 / -4) * -4)`. When dividing `21` by `-4`, the result is `-5.25`. This is floored to `-6`. Multiplying `-6` by `-4` is `24`. Subtracting this `24` from the original `21`, the remainder is -3.

## Syntax

```css
/* Unitless <number> */
line-height: mod(7, 2); /* 1 */
line-height: mod(14, 5); /* 4 */
line-height: mod(3.5, 2); /* 1.5 */

/* Unit based <percentage> and <dimension> */
margin: mod(15%, 2%); /* 1% */
margin: mod(18px, 4px); /* 2px */
margin: mod(19rem, 5rem); /* 4rem */
margin: mod(29vmin, 6vmin); /* 5vmin */
margin: mod(1000px, 29rem); /* 72px - if root font-size is 16px */

/* Negative/positive values */
rotate: mod(100deg, 30deg); /* 10deg */
rotate: mod(135deg, -90deg); /* -45deg */
rotate: mod(-70deg, 20deg); /* 10deg */
rotate: mod(-70deg, -15deg); /* -10deg */

/* Calculations */
scale: mod(10 * 2, 1.7); /* 1.3 */
rotate: mod(10turn, 18turn / 3); /* 4turn */
transition-duration: mod(20s / 2, 3000ms * 2); /* 4s */
```

### Parameters

The `mod(dividend, divisor)` function accepts two comma-separated values as its parameters. Both parameters must have the same type, [number](/en-US/docs/Web/CSS/number), [dimension](/en-US/docs/Web/CSS/dimension), or {{cssxref("percentage")}}, for the function to be valid. While the units in the two parameters don't need to be the same, they do need of the same dimension type, such as {{cssxref("length")}}, {{cssxref("angle")}}, {{cssxref("time")}}, or {{cssxref("frequency")}} to be valid.

- `dividend`

  - : A calculation that resolves to a {{CSSxREF("&lt;number&gt;")}}, {{CSSxREF("&lt;dimension&gt;")}}, or {{CSSxREF("&lt;percentage&gt;")}} representing the dividend.

- `divisor`
  - : A calculation that resolves to a {{CSSxREF("&lt;number&gt;")}}, {{CSSxREF("&lt;dimension&gt;")}}, or {{CSSxREF("&lt;percentage&gt;")}} representing the divisor.

### Return value

Returns a {{CSSxREF("&lt;number&gt;")}}, {{CSSxREF("&lt;dimension&gt;")}}, or {{CSSxREF("&lt;percentage&gt;")}} (corresponds to the parameters' type) representing the modulus, that is, the operation left over.

- If `divisor` is `0`, the result is `NaN`.
- If `dividend` is `infinite`, the result is `NaN`.
- If `divisor` is positive the result is positive (`0⁺`), and if `divisor` is negative the result is negative (`0⁻`).

## Formal syntax

{{CSSSyntax}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{CSSxRef("round")}}
- {{CSSxRef("rem")}}
