---
title: hwb()
slug: Web/CSS/color_value/hwb()
tags:
  - CSS
  - CSS Data Type
  - Data Type
  - Reference
  - Web
  - color
  - hwb
browser-compat: css.types.color.hwb
---
{{CSSRef}}

The **`hwb()`** functional notation expresses a given color according to its hue, whiteness, and blackness. An optional alpha component represents the color's transparency.

## Syntax

```css
hwb(194 0% 0%) /* #00c3ff */
hwb(194 0% 0% / .5) /* #00c3ff with 50% opacity */
hwb(194, 0%, 0%, .5); /* with comma-separated values */
```

### Values

- Functional notation: `hwb[a](H W B[/ A])`

  - : `H` (hue) is an {{cssxref("&lt;angle&gt;")}} of the color circle given in `deg`s, `rad`s, `grad`s, or `turn`s in {{SpecName("CSS4 Colors","#the-hsl-notation")}}. When written as a unitless {{cssxref("&lt;number&gt;")}}, it is interpreted as degrees, as specified in {{SpecName("CSS3 Colors", "#hsl-color")}}. By definition, red=0deg=360deg, with the other colors spread around the circle, so green=120deg, blue=240deg, etc. As an `<angle>`, it implicitly wraps around such that -120deg=240deg, 480deg=120deg, -1turn=1turn, etc.

    `W` (whiteness) specifies the amount of white to mix in, as a percentage from 0% (no whiteness) to 100% (full whiteness).

    `B` (blackness) specifies the amount of black to mix in, also from 0% (no blackness) to 100% (full blackness).

    `A` (alpha) can be a {{cssxref("&lt;number&gt;")}} between `0` and `1`, or a {{cssxref("&lt;percentage&gt;")}}, where the number `1` corresponds to `100%` (full opacity).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

The `hwb()` value has yet to be implemented in any browser. [Mozilla bug: 1352755](https://bugzilla.mozilla.org/show_bug.cgi?id=1352755)
