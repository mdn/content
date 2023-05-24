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
```

### Values

Functional notation: `color-mix(method, color1[ p1], color2[ p2])`

- `method`
  - : A {{CSSXref("&lt;color-interpolation-method&gt;")}} specifying the interpolation color space.
- `color1`, `color2`
  - : {{CSSXref("&lt;color&gt;")}} values to mix.
- `p1`, `p2` {{optional_inline}}
  - : {{CSSXref("&lt;percentage&gt;")}} values between `0%` and `100%`, specifying the amount of each color to mix. They are normalized as follows:

    - If both `p1` and `p2` are omitted, then `p1 = p2 = 50%`.
    - If `p1` is omitted, then `p1 = 100% - p2`.
    - If `p2` is omitted, then `p2 = 100% - p1`.
    - If `p1 = p2 = 0%`, the function is invalid.
    - If `p1 + p2 ≠ 100%`, then `p1' = p1 / (p1 + p2)` and `p2' = p2 / (p1 + p2)`, where `p1'` and `p2'` are the normalization results.

### Formal syntax

{{csssyntax}}

## Examples

### Mixing two colors

In a supporting browser, the items have more blue, and therefore less white, as a higher percentage of `#34c9eb` is mixed in. When no value is given, the percentage defaults to 50%.

#### HTML

```html
```

#### CSS

```css hidden
```

```css
```

#### Result

{{EmbedLiveSample("mixing_two_colors", "100%", 150)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("color_value")}}
- {{CSSXref("&lt;color-interpolation-method&gt;")}}
- {{cssxref("&lt;hue&gt;")}}
