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
width: calc(100px * rem(21, 2));  // 100px
width: calc(100px * rem(14, 5));  // 400px
width: calc(100px * rem(5.5, 2)); // 150px

margin: rem(-18px, 5px); // -3px

rotate: rem(140deg, -90deg); // 50deg
rotate: rem(140deg, -90deg); // 50deg
rotate: rem(140deg, -90deg); // 50deg
```

### Parameter

The `rem(dividend, divisor)` function accepts two comma-separated values as its parameters. Both parameters must have the same type, or else the function is invalid.

- `dividend`
  - : A calculation that resolves to a  {{CSSxREF("&lt;number&gt;")}}, {{CSSxREF("&lt;dimension&gt;")}}, or {{CSSxREF("&lt;percentage&gt;")}} representing the dividend.
  
- `divisor`
  - : A calculation that resolves to a  {{CSSxREF("&lt;number&gt;")}}, {{CSSxREF("&lt;dimension&gt;")}}, or {{CSSxREF("&lt;percentage&gt;")}} representing the divisor.

### Return value

Returns a {{CSSxREF("&lt;number&gt;")}} representing the remainder, that is, the operation left over.

- If `divisor` is `0`, the result is `NaN`.
- If `dividend` is `infinite`, the result is `NaN`.

### Formal syntax

{{CSSSyntax}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{CSSxRef("round")}}
- {{CSSxRef("mod")}}
