---
title: <hex-color>
slug: Web/CSS/hex-color
tags:
  - Reference
  - CSS
  - CSS Data Type
browser-compat: css.types.color.rgb_hexadecimal_notation
---
{{CSSRef}}

The **`<hex-color>`** [CSS](/en-US/docs/Web/CSS) [data type](/en-US/docs/Web/CSS/CSS_Types) is a notation for describing the _hexadecimal color syntax_ of an [sRGB](/en-US/docs/Glossary/RGB) color using its primary color components (red, green, blue) written as hexadecimal numbers, as well as its transparency. It can be used everywhere a [`<color>`](/en-US/docs/Web/CSS/color_value) type is allowed.

A `<hex-color>` value can be used everywhere where a [`<color>`](/en-US/docs/Web/CSS/color_value) can be used.

## Syntax

```
#RGB        // The three-value syntax
#RGBA       // The four-value syntax
#RRGGBB     // The six-value syntax
#RRGGBBAA   // The eight-value syntax
```

### Value

- `R` or `RR`
  - : The _red_ component of the color, as a case-insensitive hexadecimal number between `0` and `ff` (255)). If there is only one number, it is duplicated: `1` means `11`.
- `G` or `GG`
  - : The _green_ component of the color, as a case-insensitive hexadecimal number between `0` and `ff` (255)). If there is only one number, it is duplicated: `c` means `cc`.
- `B` or `BB`
  - : The _blue_ component of the color, as a case-insensitive hexadecimal number between `0` and `ff` (255)). If there is only one number, it is duplicated: `9` means `99`.
- `A` or `AA` {{optional_inline}}
  - : The _alpha_ component of the color, indicating its transparency, as a case-insensitive hexadecimal number between `0` and `ff` (255)). If there is only one number, it is duplicated: `e` means `ee`. `0` represents a fully transparent color, and `ff`a fully opaque one.

> **Note:** The syntax is case-insensitive `#00ff00` is the same as `#00FF00`.

## Examples

```html
/* Hexadecimal syntax for a fully opaque hot pink */
#f09 <div class="c1"></div>
#F09 <div class="c2"></div>
#ff0099 <div class="c3"></div>
#FF0099 <div class="c4"></div>
```

```css
div {width: 40px; height: 40px;}
.c1 { background: #f09}
.c2 { background: #F09}
.c3 { background: #ff0099}
.c4 { background: #FF0099}
```

{{EmbedLiveSample("Examples", "100%", "450")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`<color>`](/en-US/docs/Web/CSS/color_value) the data type these values belong to.
- [`rgb()`](/en-US/docs/Web/CSS/color_value/rgb), the function allowing to set the three components of the color, as well as its transparency, using decimal values.
