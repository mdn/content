---
title: <hex-color>
slug: Web/CSS/hex-color
page-type: css-type
browser-compat: css.types.color.rgb_hexadecimal_notation
---

{{CSSRef}}

The **`<hex-color>`** [CSS](/en-US/docs/Web/CSS) [data type](/en-US/docs/Web/CSS/CSS_Types) is a notation for describing the _hexadecimal color syntax_ of an [sRGB](/en-US/docs/Glossary/RGB) color using its primary color components (red, green, blue) written as hexadecimal numbers, as well as its transparency.

A `<hex-color>` value can be used everywhere where a [`<color>`](/en-US/docs/Web/CSS/color_value) can be used.

## Syntax

```plain
#RGB        // The three-value syntax
#RGBA       // The four-value syntax
#RRGGBB     // The six-value syntax
#RRGGBBAA   // The eight-value syntax
```

### Value

- `R` or `RR`
  - : The _red_ component of the color, as a case-insensitive hexadecimal number between `0` and `ff` (255). If there is only one number, it is duplicated: `1` means `11`.
- `G` or `GG`
  - : The _green_ component of the color, as a case-insensitive hexadecimal number between `0` and `ff` (255). If there is only one number, it is duplicated: `c` means `cc`.
- `B` or `BB`
  - : The _blue_ component of the color, as a case-insensitive hexadecimal number between `0` and `ff` (255). If there is only one number, it is duplicated: `9` means `99`.
- `A` or `AA` {{optional_inline}}
  - : The _alpha_ component of the color, indicating its transparency, as a case-insensitive hexadecimal number between `0` and `ff` (255). If there is only one number, it is duplicated: `e` means `ee`. `0`, or `00`, represents a fully transparent color, and `f`, or `ff`, a fully opaque one.

> **Note:** The syntax is case-insensitive: `#00ff00` is the same as `#00FF00`.

## Examples

### Hexadecimal syntax for a fully opaque hot pink

#### HTML

```html
<span>
  #f09
  <div class="c1"></div>
</span>
<span>
  #F09
  <div class="c2"></div>
</span>
<span>
  #ff0099
  <div class="c3"></div>
</span>
<span>
  #FF0099
  <div class="c4"></div>
</span>
```

#### CSS

```css hidden
body {
  display: flex;
  justify-content: space-evenly;
}
```

```css
div {
  width: 40px;
  height: 40px;
}
.c1 {
  background: #f09;
}
.c2 {
  background: #f09;
}
.c3 {
  background: #ff0099;
}
.c4 {
  background: #ff0099;
}
```

#### Result

{{EmbedLiveSample("Hexadecimal_syntax_for_a_fully_opaque_hot_pink", "100%", 100)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`<color>`](/en-US/docs/Web/CSS/color_value): the color data type
- [`rgb()`](/en-US/docs/Web/CSS/color_value/rgb): the function allowing to set the three components of the color, as well as its transparency, using decimal values
