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

  - : A {{CSSXref("&lt;number&gt;")}} or an {{CSSXref("&lt;angle&gt;")}} representing the hue angle. More details on this type can be found on the {{CSSXref("&lt;hue&gt;")}} reference.

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

## See also

- {{CSSXref("&lt;color&gt;")}}: For a list of all color notations
