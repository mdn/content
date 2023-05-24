---
title: color-mix()
slug: Web/CSS/color_value/color-mix
page-type: css-function
browser-compat: css.types.color.color-mix
---

{{CSSRef}}

The **`color-mix()`** functional notation takes two {{cssxref("&lt;color&gt;")}} values and returns the result of mixing them in a given colorspace by a given amount.

## Syntax

```css
color-mix(in lch, plum, pink);
color-mix(in lch, plum 40%, pink);
color-mix(in srgb, #34c9eb 20%, white);
color-mix(in hsl longer hue, hsl(120 100% 50%) 20%, white);
```

### Values

Functional notation: `color-mix(method, color1[ p1], color2[ p2])`

- `method`
  - : A {{CSSXref("&lt;color-interpolation-method&gt;")}} specifying the interpolation color space.
- `color1`, `color2`
  - : {{CSSXref("&lt;color&gt;")}} values to mix.
- `p1`, `p2` {{optional_inline}}
  - : {{CSSXref("&lt;percentage&gt;")}} values between `0%` and `100%`, specifying the amount of each color to mix. They are normalized as follows:

### Formal syntax

{{csssyntax}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("color_value")}}
- {{CSSXref("&lt;color-interpolation-method&gt;")}}
- {{cssxref("&lt;hue&gt;")}}
