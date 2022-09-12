---
title: atan2()
slug: Web/CSS/atan2
tags:
  - CSS
  - CSS Function
  - Function
  - Math
  - Reference
  - Web
  - atan2
  - Experimental
browser-compat: css.types.atan2
spec-urls: https://drafts.csswg.org/css-values/#trig-funcs
---
{{CSSRef}}{{SeeCompatTable}}

The **`atan2()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/CSS_Functions) is a trigonometric function that returns the inverse tangent of a number between `-∞` and `∞`. The function contains a calculation that returns the number of radians representing an {{cssxref("&lt;angle&gt;")}} between `-180deg` and `180deg`.

## Syntax

```css
/* Single <number> values */
transform: rotate(atan2(90, 15));
transform: rotate(atan2(15, 90));

/* Other values */
transform: rotate(atan2(pi, 45));
transform: rotate(atan2(e, 30));
```

### Parameter

The `atan2(y, x)` function accepts two comma-separated value as its parameters.

- `y`
  - : The y coordinate of the point. A {{cssxref("&lt;number&gt;")}}, {{cssxref("&lt;dimension&gt;")}} or {{cssxref("&lt;percentage>&gt;")}}.

- `x`
  - : The y coordinate of the point. A {{cssxref("&lt;number&gt;")}}, {{cssxref("&lt;dimension&gt;")}} or {{cssxref("&lt;percentage>&gt;")}}.

### Return value

The function returns the {{cssxref("&lt;angle&gt;")}} between the positive X-axis and the point (x,y).

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
- {{CSSxRef("asin")}}
- {{CSSxRef("acos")}}
- {{CSSxRef("atan")}}
