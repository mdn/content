---
title: asin()
slug: Web/CSS/asin
tags:
  - CSS
  - CSS Function
  - Function
  - Math
  - Reference
  - Web
  - asin
  - Experimental
browser-compat: css.types.asin
spec-urls: https://drafts.csswg.org/css-values/#trig-funcs
---
{{CSSRef}}{{SeeCompatTable}}

The **`asin()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/CSS_Functions) is a trigonometric function that returns the inverse sine of a number between `-1` and `1`. The function contains a single calculation that returns the number of radians representing an {{cssxref("&lt;angle&gt;")}} between `-90deg` and `90deg`.

## Syntax

```css
/* Single <angle> values */
width: calc(asin(45deg) * 100px);
width: calc(asin(0.25turn) * 100px);
width: calc(asin(1.0471967rad) * 100px);

/* Single <number> values */
width: calc(asin(63.673) * 100px);
width: calc(asin(2 * 0.125) * 100px);

/* Other values */
width: calc(asin(pi / 2) * 100px);
width: calc(asin(e / 4) * 100px);
```

### Parameter

The `asin(number)` function accepts only one value as its parameter.

- `number`
  - : A {{cssxref("&lt;number&gt;")}} or an {{cssxref("&lt;angle&gt;")}}. When specifying unitless numbers they are interpreted as a number of radians, representing an {{cssxref("&lt;angle&gt;")}}. When specifying an angle less than `-1` or greater than `1`, or `NaN`, the result is `NaN`. When specifying `0⁻`, the result is `0⁻`.

### Formal syntax

{{CSSSyntax}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{CSSxRef("sin")}}
- {{CSSxRef("cos")}}
- {{CSSxRef("tan")}}
- {{CSSxRef("acos")}}
- {{CSSxRef("atan")}}
- {{CSSxRef("atan2")}}
