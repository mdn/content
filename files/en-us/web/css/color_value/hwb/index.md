---
title: hwb()
slug: Web/CSS/color_value/hwb
page-type: css-function
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

The **`hwb()`** functional notation expresses an {{glossary("sRGB", "RGB")}} color according to its _hue_, _whiteness_, and _blackness_ components. An optional alpha component represents the color's transparency.

Defining _complementary colors_ with `hsl()` can be done with a single formula, as they are positioned on the same diameter of the {{glossary("color wheel")}}. If `theta` is the angle of a color, its complementary one will have `180deg-theta` as its _hue_ coordinate.

{{EmbedInteractiveExample("pages/css/function-hwb.html")}}

## Syntax

```css
hwb(hue whiteness lightness)
hwb(hue whiteness lightness / alpha)
```

> **Note:** The `hwb()` function does _not_ use commas to separate its values and the optional alpha value needs to be preceded with a forward slash (`/`) if specified.

### Values

- `hue`
  - : An {{cssxref("&lt;angle&gt;")}} of the {{glossary("color wheel")}} given in one of the following units: `deg`, `rad`, `grad`, or `turn`. By definition, _red_ is `0deg`, with the other colors spread around the circle, so _green_ is `120deg`, _blue_ is `240deg`, etc. As an `<angle>` is periodic, it implicitly wraps around such that `-120deg` is `240deg`, `480deg` is `120deg`, `-1turn` is `1turn`, and so on. This color wheel helps finding the angle associated with a color: ![A color wheel indicating the angle for the hue of the primary (red-green-blue) and secondary (yellow-cyan-magenta) colors](hue-wheel.png)
- `whiteness`
  - : A {{cssxref("percentage")}} that specifies the amount of white to mix in, from `0%`, meaning no whiteness, to `100%` meaning full whiteness.
- `blackness`
  - : A {{cssxref("percentage")}} that specifies the amount of black to mix in, from `0%`, meaning no blackness, to `100%` meaning full blackness.
- `alpha` {{optional_inline}}
  - A {{cssxref("&lt;percentage&gt;")}} or a {{cssxref("&lt;number&gt;")}} between `0` and `1`, where the number `1` corresponds to `100%` and means full opacity, while `0` corresponds to `0%` and means fully transparent.

## Examples

A table showing how _whiteness_ and _blackness_ interact with a fixed _hue_.

```html
<table>
  <tr><td class="c11"></td><td class="c12"></td><td class="c13"></td>
      <td class="c14"></td><td class="c15"></td><td class="c16"></td></tr>
  <tr><td class="c21"></td><td class="c22"></td><td class="c23"></td>
      <td class="c24"></td><td class="c25"></td><td class="c26"></td></tr>
  <tr><td class="c31"></td><td class="c32"></td><td class="c33"></td>
      <td class="c34"></td><td class="c35"></td><td class="c36"></td></tr>
  <tr><td class="c41"></td><td class="c42"></td><td class="c43"></td>
      <td class="c44"></td><td class="c45"></td><td class="c46"></td></tr>
  <tr><td class="c51"></td><td class="c52"></td><td class="c53"></td>
      <td class="c54"></td><td class="c55"></td><td class="c56"></td></tr>
  <tr><td class="c61"></td><td class="c62"></td><td class="c63"></td>
      <td class="c64"></td><td class="c65"></td><td class="c66"></td></tr>
</table>
```

```css
  table { border-collapse: collapse;}
  td { border: 1px solid black; width: 20px; height: 10px;}
  .c11 { background: hbw(60deg,   0%,  0%); } .c12 { background: hbw(60deg,   0%,  20%); } 
  .c13 { background: hbw(60deg,   0%, 40%); } .c14 { background: hbw(60deg,   0%,  60%); } 
  .c15 { background: hbw(60deg,   0%, 80%); } .c16 { background: hbw(60deg,   0%, 100%); }
  .c21 { background: hbw(60deg,  20%,  0%); } .c22 { background: hbw(60deg,  20%,  20%); } 
  .c23 { background: hbw(60deg,  20%, 40%); } .c24 { background: hbw(60deg,  20%,  60%); } 
  .c25 { background: hbw(60deg,  20%, 80%); } .c26 { background: hbw(60deg,  20%, 100%); }
  .c31 { background: hbw(60deg,  40%,  0%); } .c32 { background: hbw(60deg,  40%,  20%); } 
  .c33 { background: hbw(60deg,  40%, 40%); } .c34 { background: hbw(60deg,  40%,  60%); } 
  .c35 { background: hbw(60deg,  40%, 80%); } .c36 { background: hbw(60deg,  40%, 100%); }
  .c41 { background: hbw(60deg,  60%,  0%); } .c42 { background: hbw(60deg,  60%,  20%); } 
  .c43 { background: hbw(60deg,  60%, 40%); } .c44 { background: hbw(60deg,  60%,  60%); } 
  .c45 { background: hbw(60deg,  60%, 80%); } .c46 { background: hbw(60deg,  60%, 100%); }
  .c51 { background: hbw(60deg,  80%,  0%); } .c52 { background: hbw(60deg,  80%,  20%); } 
  .c53 { background: hbw(60deg,  80%, 40%); } .c54 { background: hbw(60deg,  80%,  60%); } 
  .c55 { background: hbw(60deg,  80%, 80%); } .c56 { background: hbw(60deg,  80%, 100%); }
  .c61 { background: hbw(60deg, 100%,  0%); } .c62 { background: hbw(60deg, 100%,  20%); } 
  .c63 { background: hbw(60deg, 100%, 40%); } .c64 { background: hbw(60deg, 100%,  60%); } 
  .c65 { background: hbw(60deg, 100%, 80%); } .c66 { background: hbw(60deg, 100%, 100%); }
```

{{EmbedLiveSample("Examples", "100%", "150px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [`<color>`](/en-US/docs/Web/CSS/color_value) type that represents any color.
