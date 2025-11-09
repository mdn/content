---
title: device-cmyk()
slug: Web/CSS/Reference/Values/color_value/device-cmyk
page-type: css-function
spec-urls: https://drafts.csswg.org/css-color-5/#device-cmyk
sidebar: cssref
---

The **`device-cmyk()`** functional notation is used to express CMYK colors in a device dependent way, specifying the cyan, magenta, yellow, and black components.

This approach to color is useful when creating material to be output to a particular printer, when the output for particular ink combinations is known. CSS processors may attempt to approximate the color for other media; however, the end result is likely to be different from the printed result without knowing the precise output colorimetry. A {{cssxref("@color-profile")}} declaration for `device-cmyk` can specify the exact color profile for conversion.

## Syntax

```css
device-cmyk(0 81% 81% 30%);
device-cmyk(none 0.81 0.81 0.3);
device-cmyk(0 81% 81% 30% / .5);
device-cmyk(0 81% 81% 30% / .5, rgb(178 34 34));
```

### Values

Functional notation: `device-cmyk(C M Y K[ / A][, color])`

- `C`, `M`, `Y`, `K`
  - : Each a {{CSSXref("number")}}, a {{CSSXref("percentage")}}, or the keyword `none` providing the cyan, magenta, yellow, and black components of CMYK color.
    > [!NOTE]
    > See [Missing color components](/en-US/docs/Web/CSS/Reference/Values/color_value#missing_color_components) for more information on the effect of `none`.

- `A` {{optional_inline}}
  - : An {{CSSXref("&lt;alpha-value&gt;")}}, where the number `1` corresponds to `100%` (full opacity).

- `color` {{optional_inline}}
  - : An optional fallback {{CSSXref("&lt;color&gt;")}} to use if the user agent does not know how to translate the CMYK color to RGB.

## Formal syntax

{{CSSSyntax}}

## Specifications

{{Specifications}}

## Browser compatibility

Currently, no browsers support this feature.

## See also

- [CSS colors](/en-US/docs/Web/CSS/Guides/Colors) module
- {{cssxref("@page")}}
