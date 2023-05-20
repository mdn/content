---
title: <hue>
slug: Web/CSS/hue
page-type: css-type
browser-compat: css.types.hue
spec-urls: https://drafts.csswg.org/css-color/#typedef-hue
---

{{CSSRef}}

The **`<hue>`** [CSS](/en-US/docs/Web/CSS) [data type](/en-US/docs/Web/CSS/CSS_Types) represents a value that can be either a {{cssxref("&lt;number&gt;")}} or an {{cssxref("&lt;angle&gt;")}} specifying a hue angle (a cylindrical polar color) in degrees of a full circle.
It is used in the color functions that accept hue expressed as a single value, specifically [`hsl()`](/en-US/docs/Web/CSS/color_value/hsl), [`hwb()`](/en-US/docs/Web/CSS/color_value/hwb), [`lch()`](/en-US/docs/Web/CSS/color_value/lch), and [`oklch()`](/en-US/docs/Web/CSS/color_value/oklch) functional notations.

> **Note:** The angles corresponding to particular hues depend on the color space. For example, green in [`hsl()`](/en-US/docs/Web/CSS/color_value/hsl) and [`hwb()`](/en-US/docs/Web/CSS/color_value/hwb), which use the [sRGB](https://en.wikipedia.org/wiki/SRGB) color space, is at `120deg`. In [`lch()`](/en-US/docs/Web/CSS/color_value/lch), which uses the CIELAB color wheel, green is at `134.39deg`.

![A sRGB color wheel indicating the angle for the hue of the primary (red-green-blue) and secondary (yellow-cyan-magenta) colors](hue-wheel.png)

In the sRGB color space, for [`hsl()`](/en-US/docs/Web/CSS/color_value/hsl) and [`hwb()`](/en-US/docs/Web/CSS/color_value/hwb), _red_ is `0deg`, _yellow_ is `60deg`, _green_ is `120deg`, _cyan_ is `180deg`, _blue_ is `240deg`, and _magenta_ is `300deg`.

## Syntax

```css
/* hsl(<hue> <saturation> <lightness>) */
hsl(270 100% 50%);
hsl(270deg 100% 50%);
hsl(300grad 100% 50%);
hsl(0.75turn 100% 50%);
hsl(4.71rad 100% 50%);

/* hwb(<hue> <whiteness> <blackness>) */
hwb(270 0% 0%);
/* lch(<hue> <chroma> <lightness>) */
lch(39.35 121.2% -51.94%);
/* … */
```

### Values

- `<angle>`
  - : An {{cssxref("&lt;angle&gt;")}} values expressed in degrees, gradians, radians, or turns using the `deg`, `grad`, `rad`, or `turn`, respectively.
- `<number>`
  - : An integer or floating point number, representing degrees of the hue angle.

As an `<angle>` is periodic, normalized to the range of `0deg` to `360deg`. It implicitly wraps around such that `480deg` is the same as `120deg`, `-120deg` is the same as `240deg`, `-1turn` is the same as `1turn`, and so on.

### Formal syntax

{{csssyntax}}

## Examples

### Changing the hue of a color using a slider

The following example shows the effect of changing the `hue` value of the [`hsl()`](/en-US/docs/Web/CSS/color_value/hsl) functional notation on a color.

#### HTML

```html
<input type="range" min="0" max="360" value="0" id="hue-slider" />
<p>Hue: <span id="hue-value">0deg</span></p>
<div id="box"></div>
```

#### CSS

```css hidden
div {
  width: 100px;
  height: 100px;
  margin: 10px;
  border: 1px solid black;
}
p {
  font-family: sans-serif;
}
span {
  font-family: monospace;
  background: rgb(0 0 0 / 0.1);
  padding: 3px;
}
#hue-slider {
  width: 90%;
}
```

```css
#box {
  background-color: hsl(0 100% 50%);
}
```

#### JavaScript

```js
const hue = document.querySelector("#hue-slider");
const box = document.querySelector("#box");
hue.addEventListener("input", () => {
  box.style.backgroundColor = `hsl(${hue.value} 100% 50%)`;
  document.querySelector("#hue-value").textContent = `${hue.value}deg`;
});
```

#### Result

{{EmbedLiveSample("Changing the hue of a color using a slider", "100%", "200")}}

### Approximating red hues in different color spaces

The following example shows a similar red color in different color spaces.
The values in the `lch()` and `oklch()` functions are rounded for readability.

#### HTML

```html
<div data-color="hsl-red">hsl()</div>
<div data-color="hwb-red">hwb()</div>
<div data-color="lch-red">lch()</div>
<div data-color="oklch-red">oklch()</div>
```

#### CSS

```css
[data-color="hsl-red"] {
  /* hsl(<hue> <saturation> <lightness>) */
  background-color: hsl(0 100% 50%);
}
[data-color="hwb-red"] {
  /* hwb(<hue> <whiteness> <blackness>) */
  background-color: hwb(0 0% 0%);
}
[data-color="lch-red"] {
  /* lch(<lightness> <chroma> <hue>) */
  background-color: lch(50 150 40);
}
[data-color="oklch-red"] {
  /* oklch(<lightness> <chroma> <hue>) */
  background-color: oklch(0.6 0.4 20);
}
```

```css hidden
div {
  font-family: monospace;
  width: 100px;
  height: 100px;
  margin: 10px;
  border: 1px solid black;
  display: inline-block;
}
```

#### Result

{{EmbedLiveSample("Approximating red hues in different color spaces", "100%", "150")}}

### Interpolating hue values

The [`color-mix()`](/en-US/docs/Web/CSS/color_value/color-mix) functional notation can be used to interpolate the hue of two colors.
Four methods are available for interpolating the hue value: `shorter`, `longer`, `increasing`, and `decreasing`.
The `shorter` method is the default for interpolation and the result will be the shortest distance between the two angles in degrees.
Conversely, `longer` uses the larger value between the two hue angles.

> **Note:** For more information on using this functional notation, see the [`color-mix()`](/en-US/docs/Web/CSS/color_value/color-mix) reference.

#### HTML

```html
<div id="shorter"></div>
<div id="longer"></div>
```

#### CSS

```css hidden
div {
  width: 100px;
  height: 100px;
  margin: 10px;
  border: 1px solid;
  display: inline-block;
}
```

```css
/* 20 degrees */
#shorter {
  background-color: color-mix(
    in hsl shorter hue,
    hsl(10 100% 50%),
    hsl(350 100% 50%)
  );
}

/* 340 degrees */
#longer {
  background-color: color-mix(
    in hsl longer hue,
    hsl(10 100% 50%),
    hsl(350 100% 50%)
  );
}
```

#### Result

{{EmbedLiveSample('Interpolating hue values', '100%', '200')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`<color>`](/en-US/docs/Web/CSS/color_value)
