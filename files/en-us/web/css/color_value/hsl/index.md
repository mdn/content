---
title: hsl()
slug: Web/CSS/color_value/hsl
tags:
  - CSS
  - CSS Data Type
  - Data Type
  - Reference
  - Web
  - color
  - hsl
browser-compat: css.types.color.hsl
---
{{CSSRef}}

The **`hsl()`** functional notation expresses an [sRGB](https://en.wikipedia.org/wiki/SRGB) color according to its _hue_, _saturation_, and _lightness_ components. An optional _alpha_ component represents the color's transparency.

## Syntax

```css
/* Syntax with comma-separated values */
hsl(hue, saturation, lightness)
hsl(hue, saturation, lightness, alpha)

/* Syntax with space-separated values */
hsl(hue saturation lightness)
hsl(hue saturation lightness / alpha)
```

### Values

- `hue`
  - : An {{cssxref("&lt;angle&gt;")}} of the color circle given in `deg`s, `rad`s, `grad`s, or `turn`s in {{SpecName("CSS4 Colors","#the-hsl-notation")}}. When written as a unitless {{cssxref("&lt;number&gt;")}}, it is interpreted as degrees. By definition, _red_ is `0deg`, with the other colors spread around the circle, so _green_ is `120deg`, _blue_ is `240deg`, etc. As an `<angle>` is periodic, it implicitly wraps around such that `-120deg` = `240deg`, `480deg` = `120deg`, `-1turn` = `1turn?, etc.

- `saturation`
  - : A {{cssref("&lt;percentage&gt;")}} where `100%` is completely saturated, while `0%` is completely unsaturated (gray).
  
- `lightness`  
  - : A {{cssref("&lt;percentage&gt;")}} where `100%` is white, `0%` lightness is black, and `50%` lightness is "normal".

- `alpha` {{optional_inline}}
  - : A {{cssxref("&lt;number&gt;")}} between `0` and `1`, or a {{cssxref("&lt;percentage&gt;")}}, where the number `1` corresponds to `100%` and means full opacity, while `0`, corresponding to `0%` means fully transparent.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The function {{cssxref("hsla()")}}, an historical alias for this method.
- The {{cssxref("&lt;color&gt;")}} type that represents any color.
