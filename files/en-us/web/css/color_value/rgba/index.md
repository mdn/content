---
title: rgba()
slug: Web/CSS/color_value/rgba
tags:
  - CSS
  - CSS Data Type
  - Data Type
  - Reference
  - Web
  - color
  - rgba
browser-compat:
  - css.types.color.rgba
---
{{CSSRef}}

The **`rgba()`** functional notation expresses a color according to its red, green, and blue components. An optional alpha component represents the color's transparency.

{{EmbedInteractiveExample("pages/css/function-rgba.html")}}

> **Note:** CSS Colors Level 4 allows for space-separated in addition to comma-separated values.

## Syntax

```css
rgba(255, 255, 255) /* white */
rgba(255, 255, 255, .5) /* white with 50% opacity */
rgba(255 255 255 / 0.5); /* CSS Colors 4 space-separated values */
```

### Values

- Functional notation: `rgba(R, G, B[, A])`
  - : `R` (red), `G` (green), and `B` (blue) can be either {{cssxref("&lt;number&gt;")}}s or {{cssxref("&lt;percentage&gt;")}}s, where the number `255` corresponds to `100%`. `A` (alpha) can be a {{cssxref("&lt;number&gt;")}} between `0` and `1`, or a {{cssxref("&lt;percentage&gt;")}}, where the number `1` corresponds to `100%` (full opacity).
- Functional notation: `rgba(R G B[ / A])`
  - : CSS Colors Level 4 adds support for space-separated values in the functional notation.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
