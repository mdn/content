---
title: device-cmyk()
slug: Web/CSS/color_value/device-cmyk
tags:
  - CSS
  - CSS Data Type
  - Data Type
  - Reference
  - Web
  - device-cmyk
browser-compat: css.types.color.device-cmyk
---
{{CSSRef}}

The **`device-cmyk()`** functional notation is used to express CMYK colors in a device independent way, specifying the cyan, magenta, yellow, and black components.

This approach to color is useful when creating material to be output to a particular printer, when the output for particular ink combinations is known. CSS processors may attempt to approximate the color, however the end result is likely to be different to the printed result.

## Syntax

```css
device-cmyk(0 81% 81% 30%);
device-cmyk(0 81% 81% 30% / .5);
device-cmyk(0 81% 81% 30% / .5, rgb(178 34 34));
```

### Values

- Functional notation: `device-cmyk( <cmyk-component>{4} [ / <alpha-value> ]? , <color>? )`

  - : `<cmyk-component>` is a list of 4 {{cssxref("number")}} or {{cssxref("percentage")}} values providing the cyan, magenta, yellow, and black components of CMYK color.

    `/ <alpha-value>` (alpha) can be a {{cssxref("&lt;number&gt;")}} between `0` and `1`, or a {{cssxref("&lt;percentage&gt;")}}, where the number `1` corresponds to `100%` (full opacity).

    `<color>` is an optional fallback {{cssxref("&lt;color&gt;")}} to use if the user agent does not know how to translate the CMYK color to RGB.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
