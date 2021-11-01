---
title: hsl()
slug: Web/CSS/color_value/hsl()
tags:
  - CSS
  - CSS Data Type
  - Data Type
  - Reference
  - Web
  - color
  - hsl
---
{{CSSRef}}

The **`hsl()`** functional notation expresses a given color according to its hue, saturation, and lightness components. An optional alpha component represents the color's transparency.

> **Note:** CSS Colors Level 4 made some changes to `hsl()`. In browsers that support the standard {{cssxref("color_value/hsla()","hsla()")}} is an alias for `hsl()`, they accept the same parameters and behave the same way.
>
> The Level 4 specification also allows for space-separated in addition to comma-separated values.

## Syntax

```css
hsl(100, 100%, 50%) /* #5f0 */
hsl(235, 100%, 50%, .5) /* #0015ff with 50% opacity */
hsl(235 100% 50%) /* CSS Colors 4 space-separated values */
hsl(235 100% 50% / .5); /* #0015ff with 50% opacity, using CSS Colors 4 space-separated values */
```

### Values

- Functional notation: `hsl[a](H, S, L[, A])`

  - : `H` (hue) is an {{cssxref("&lt;angle&gt;")}} of the color circle given in `deg`s, `rad`s, `grad`s, or `turn`s in {{SpecName("CSS4 Colors","#the-hsl-notation")}}. When written as a unitless {{cssxref("&lt;number&gt;")}}, it is interpreted as degrees, as specified in {{SpecName("CSS3 Colors", "#hsl-color")}}. By definition, red=0deg=360deg, with the other colors spread around the circle, so green=120deg, blue=240deg, etc. As an `<angle>`, it implicitly wraps around such that -120deg=240deg, 480deg=120deg, -1turn=1turn, etc.

    `S` (saturation) and `L` (lightness) are percentages. `100%` **saturation** is completely saturated, while `0%` is completely unsaturated (gray). `100%` **lightness** is white, `0%` lightness is black, and `50%` lightness is “normal.”

    `A` (alpha) can be a {{cssxref("&lt;number&gt;")}} between `0` and `1`, or a {{cssxref("&lt;percentage&gt;")}}, where the number `1` corresponds to `100%` (full opacity).

- Functional notation: `hsl[a](H S L[ / A])`
  - : CSS Colors Level 4 adds support for space-separated values in the functional notation.

## Browser compatibility

{{Compat("css.types.color.hsl")}}

### Space-separated values

{{Compat("css.types.color.space_separated_functional_notation")}}

### Accepts alpha value

{{Compat("css.types.color.hsl_function_accepts_alpha")}}
