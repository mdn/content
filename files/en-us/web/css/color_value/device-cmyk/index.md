---
title: device-cmyk()
slug: Web/CSS/color_value/device-cmyk
page-type: css-function
browser-compat: css.types.color.device-cmyk
---

{{CSSRef}}

The **`device-cmyk()`** functional notation is used to express CMYK colors in a device dependent way, specifying the cyan, magenta, yellow, and black components.

This approach to color is useful when creating material to be output to a particular printer, when the output for particular ink combinations is known. CSS processors may attempt to approximate the color, however the end result is likely to be different to the printed result.

## Syntax

```css
device-cmyk(0 81% 81% 30%);
device-cmyk(0 81% 81% 30% / .5);
device-cmyk(0 81% 81% 30% / .5, rgb(178 34 34));
```

### Values

Functional notation: `device-cmyk(C M Y K[ / A][, color])`

- `C`, `M`, `Y`, `K`

  - : {{CSSXref("number")}} or {{CSSXref("percentage")}} values providing the cyan, magenta, yellow, and black components of CMYK color.

- `A` {{optional_inline}}

  - : An {{CSSXref("&lt;alpha-value&gt;")}}, where the number `1` corresponds to `100%` (full opacity).

- `color` {{optional_inline}}

  - : An optional fallback {{CSSXref("&lt;color&gt;")}} to use if the user agent does not know how to translate the CMYK color to RGB.

### Formal syntax

{{csssyntax}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
