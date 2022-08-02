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

The **`hsl()`** functional notation expresses an {{glossary("RGB", "sRGB")}} color according to its _hue_, _saturation_, and _lightness_ components. An optional _alpha_ component represents the color's transparency.

{{EmbedInteractiveExample("pages/css/function-hsl.html")}}

Defining _complementary colors_ with `hsl()` can be done with a single formula, as they are positioned on the same diameter of the {{glossary("color wheel")}}. If `theta` is the angle of a color, its complementary one will have `180deg-theta` as its _hue_ coordinate.

## Syntax

```css
/* Syntax with space-separated values */
hsl(hue saturation lightness)
hsl(hue saturation lightness / alpha)

/* Syntax with comma-separated values */
hsl(hue, saturation, lightness)
hsl(hue, saturation, lightness, alpha)
```

### Values

- `hue`
  - : An {{cssxref("&lt;angle&gt;")}} of the {{glossary("color wheel")}} given in one of the following units: `deg`, `rad`, `grad`, or `turn`. When written as a unitless {{cssxref("&lt;number&gt;")}}, it is interpreted as degrees. By definition, _red_ is `0deg`, with the other colors spread around the circle, so _green_ is `120deg`, _blue_ is `240deg`, etc. As an `<angle>` is periodic, it implicitly wraps around such that `-120deg` = `240deg`, `480deg` = `120deg`, `-1turn` = `1turn`, and so on. This color wheel helps finding the angle associated with a color: ![A color wheel indicating the angle for the hue of the primary (red-green-blue) and secondary (yellow-cyan-magenta) colors](hue-wheel.png)

- `saturation`
  - : A {{cssxref("&lt;percentage&gt;")}} where `100%` is completely saturated, while `0%` is completely unsaturated (gray).

- `lightness`
  - : A {{cssxref("&lt;percentage&gt;")}} where `100%` is white, `0%` is black, and `50%` is "normal".

- `alpha` {{optional_inline}}
  - : A {{cssxref("&lt;percentage&gt;")}} or a {{cssxref("&lt;number&gt;")}} between `0` and `1`, where the number `1` corresponds to `100%` and means full opacity, while `0` corresponds to `0%` and means fully transparent.

## Examples

The `hsl()` function works well with [`conic-gradient()`](/en-US/docs/Web/CSS/gradient/conic-gradient) as both deal with angles.

```html hidden
<div></div>
```

```css
div {
  width: 100px;
  height: 100px;
  background: conic-gradient(
    hsl(360, 100%, 50%),
    hsl(315, 100%, 50%),
    hsl(270, 100%, 50%),
    hsl(225, 100%, 50%),
    hsl(180, 100%, 50%),
    hsl(135, 100%, 50%),
    hsl(90, 100%, 50%),
    hsl(45, 100%, 50%),
    hsl(0, 100%, 50%)
  );
  clip-path: circle(closest-side);
}
```

{{EmbedLiveSample('Examples', '100%', '140px')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The function [`hsla()`](/en-US/docs/Web/CSS/color_value/hsla), an historical alias for this function.
- The {{cssxref("&lt;color&gt;")}} type that represents any color.
- [HSL Color Picker](https://hslpicker.com/)
