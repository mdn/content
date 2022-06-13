---
title: rgb()
slug: Web/CSS/color_value/rgb()
tags:
  - CSS
  - CSS Data Type
  - Data Type
  - Reference
  - Web
  - color
  - rgb
---
{{CSSRef}}

The **`rgb()`** functional notation expresses a color according to its red, green, and blue components. An optional alpha component represents the color's transparency.

> **Note:** CSS Colors Level 4 made some changes to `rgb()`. In browsers that support the standard {{cssxref("color_value/rgba()","rgba()")}} is an alias for `rgb()`, they accept the same parameters and behave the same way.
>
> The Level 4 specification also allows for space-separated in addition to comma-separated values.

## Syntax

```css
rgb(255,255,255) /* white */
rgb(255,255,255,.5) /* white with 50% opacity */
rgb(255 255 255); /* CSS Colors 4 space-separated values */
```

### Values

- Functional notation: `rgb[a](R, G, B[, A])`
  - : `R` (red), `G` (green), and `B` (blue) can be either {{cssxref("&lt;number&gt;")}}s or {{cssxref("&lt;percentage&gt;")}}s, where the number `255` corresponds to `100%`. `A` (alpha) can be a {{cssxref("&lt;number&gt;")}} between `0` and `1`, or a {{cssxref("&lt;percentage&gt;")}}, where the number `1` corresponds to `100%` (full opacity).
- Functional notation: `rgb[a](R G B[ / A])`
  - : CSS Colors Level 4 adds support for space-separated values in the functional notation.

## Browser compatibility

{{Compat("css.types.color.rgb_functional_notation")}}

### Space-separated values

{{Compat("css.types.color.space_separated_functional_notation")}}

### Accepts alpha value

{{Compat("css.types.color.rgb_function_accepts_alpha")}}
