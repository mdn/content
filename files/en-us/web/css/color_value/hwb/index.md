---
title: hwb()
slug: Web/CSS/color_value/hwb
page-type: css-function
browser-compat: css.types.color.hwb
---

{{CSSRef}}

The **`hwb()`** functional notation expresses a given color according to its hue, whiteness, and blackness. An optional alpha component represents the color's transparency.

{{EmbedInteractiveExample("pages/css/function-hwb.html")}}

## Syntax

```css
hwb(194 0% 0%) /* #00c3ff */
hwb(194 0% 0% / .5) /* #00c3ff with 50% opacity */
```

### Values

Functional notation: `hwb(H W B[ / A])`

- `H`

  - : An {{cssxref("&lt;angle&gt;")}} of the color circle given in `deg`s, `rad`s, `grad`s, or `turn`s in the [CSS Color](https://drafts.csswg.org/css-color/#typedef-hue) specification. When written as a unitless {{cssxref("&lt;number&gt;")}}, it is interpreted as degrees, as specified in the [CSS Color Level 3](https://drafts.csswg.org/css-color-3/#hsl-color) specification. By definition, red=0deg=360deg, with the other colors spread around the circle, so green=120deg, blue=240deg, etc. As an `<angle>`, it implicitly wraps around such that -120deg=240deg, 480deg=120deg, -1turn=1turn, etc.

- `W`, `B`

  - : {{CSSXref("&lt;percentage&gt;")}} representing whiteness and blackness, respectively, that specifies the amount of white and black to mix in, from 0% (no whiteness or blackness) to 100% (full whiteness or blackness).

      If `W + B = 100%`, it defines some shade of gray. If `W + B > 100%`, `W` and `B` are effectively normalized as `W / (W + B)` and `B / (W + B)`, respectively.

- `A` {{optional_inline}}

  - : An {{CSSXref("&lt;alpha-value&gt;")}}, where the number `1` corresponds to `100%` (full opacity).

### Formal syntax

{{csssyntax}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
