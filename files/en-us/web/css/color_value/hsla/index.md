---
title: hsla()
slug: Web/CSS/color_value/hsla
tags:
  - CSS
  - CSS Data Type
  - Data Type
  - Reference
  - Web
  - color
  - hsla
browser-compat: css.types.color.hsla
---
{{CSSRef}}

The **`hsla()`** functional notation expresses a given color according to its hue, saturation, and lightness components. An optional alpha component represents the color's transparency.

{{EmbedInteractiveExample("pages/css/function-hsla.html")}}

> **Note:** The Level 4 specification allows for space-separated in addition to comma-separated values.

## Syntax

```css
hsla(100, 100%, 50%, 1) /* #5f0 */
hsla(235, 100%, 50%, .5) /* #0015ff with 50% opacity */
hsla(235 100% 50% / 1); /* CSS Colors 4 space-separated values */
```

### Values

- Functional notation: `hsla(H, S, L[, A])`

  - : `H` (hue) is an {{cssxref("&lt;angle&gt;")}} of the color circle given in `deg`s, `rad`s, `grad`s, or `turn`s in the [CSS Color](https://drafts.csswg.org/css-color/#the-hsl-notation) specification. When written as a unitless {{cssxref("&lt;number&gt;")}}, it is interpreted as degrees, as specified in the [CSS Color Level 3](https://drafts.csswg.org/css-color-3/#hsl-color) specification. By definition, red=0deg=360deg, with the other colors spread around the circle, so green=120deg, blue=240deg, etc. As an `<angle>`, it implicitly wraps around such that -120deg=240deg, 480deg=120deg, -1turn=1turn, etc.

    `S` (saturation) and `L` (lightness) are percentages. `100%` **saturation** is completely saturated, while `0%` is completely unsaturated (gray). `100%` **lightness** is white, `0%` lightness is black, and `50%` lightness is "normal."

    `A` (alpha) can be a {{cssxref("&lt;number&gt;")}} between `0` and `1`, or a {{cssxref("&lt;percentage&gt;")}}, where the number `1` corresponds to `100%` (full opacity).

- Functional notation: `hsla(H S L[ / A])`
  - : CSS Colors Level 4 adds support for space-separated values in the functional notation.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
