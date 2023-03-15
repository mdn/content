---
title: <hue>
slug: Web/CSS/hue
page-type: css-type
browser-compat:
  - css.types.color.oklch
  - css.types.color.lch
  - css.types.color.hwb
  - css.types.color.hsl
---

{{CSSRef}}

The **`<hue>`** [CSS](/en-US/docs/Web/CSS) [data type](/en-US/docs/Web/CSS/CSS_Types) represents a value that can be either a {{cssxref("&lt;number&gt;")}} or an {{cssxref("&lt;angle&gt;")}} specifying a hue angle (a cylindrical polar color) in degrees of a full circle.
It is used in color functions that accept hue expressed as a single value, specifically [`hsl()`](/en-US/docs/Web/CSS/color_value/hsl), [`hwb()`](/en-US/docs/Web/CSS/color_value/hwb), [`lch()`](/en-US/docs/Web/CSS/color_value/lch), and [`oklch()`](/en-US/docs/Web/CSS/color_value/oklch) functional notations.

> **Note:** The angles corresponding to particular hues depend on the color space.
> For example, [sRGB](https://en.wikipedia.org/wiki/SRGB) green in [`hsl()`](/en-US/docs/Web/CSS/color_value/hsl) is at `120deg`, while in [`lch()`](/en-US/docs/Web/CSS/color_value/lch) it is at `134.39deg`.

## Syntax

```css
/* hsl(<hue> <saturation> <lightness>) */
hsl(270 100% 50%);
hsl(270.5 100% 50%);
hsl(270deg 100% 50%);
hsl(4.7rad 100% 50%);
hsl(0.75turn 100% 50%);
hsl(270grad 100% 50%);

/* hwb(<hue> <whiteness> <blackness>) */
hwb(90 0% 0%);
/* lch(<hue> <chroma> <lightness>) */
lch(134.39 100% 50%);
/* … */
```

### Values

- `<angle>` is a number followed by a unit (e.g. `deg`, `grad`, `rad`, or `turn`) specifying an {{cssxref("&lt;angle&gt;")}} between `0` to `360` degrees.
- `<number>` is a number between `0` and `360` degrees representing a hue angle.
  May be an integer or a floating point number.

### Formal syntax

{{csssyntax}}

## Examples

### Changing the hue of a color using a slider

The following example shows the effect of changing the `hue` value of the [`hsl()`](/en-US/docs/Web/CSS/color_value/hsl) functional notation on a color.

```html
<input type="range" min="0" max="360" value="0" step="0.1" id="hue-slider" />
<p>Hue: <span id="hue-value">0</span></p>
<div id="box"></div>
```

```css hidden
div {
  width: 100px;
  height: 100px;
  margin: 10px;
  border: 1px solid black;
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

```js
const hue = document.querySelector("#hue-slider");
const box = document.querySelector("#box");
hue.addEventListener("input", () => {
  box.style.backgroundColor = `hsl(${hue.value} 100% 50%)`;
  document.querySelector("#hue-value").textContent = hue.value;
});
```

{{EmbedLiveSample("Changing the hue of a color using a slider", "100%", "200")}}

### Approximating red hues in different color spaces

The following example shows a similar red color in different color spaces.
The values in the `lch()` and `oklch()` functions are rounded for readability.

```html
<div data-color="hsl-red"></div>
<div data-color="hwb-red"></div>
<div data-color="lch-red"></div>
<div data-color="oklch-red"></div>
```

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
  width: 100px;
  height: 100px;
  margin: 10px;
  border: 1px solid black;
  display: inline-block;
}
```

{{EmbedLiveSample("Approximating red hues in different color spaces", "100%", "150")}}

### Interpolating hue values

The [`color-mix()`](/en-US/docs/web/CSS/color_value/color-mix) functional notation can be used to interpolate the hue of two colors.
Four methods are available for interpolating the hue value: `shorter`, `longer`, `increasing`, and `decreasing`.
The `shorter` method is the default for interpolation and the result will be the shortest distance between the two angles in degrees.
Conversely, `longer` uses the larger value between the two hue angles.

> **Note:** For more information on using this functional notation, see the [`color-mix()`](/en-US/docs/Web/CSS/color_value/color-mix) reference.

```html
<div id="shorter"></div>
<div id="longer"></div>
```

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

{{EmbedLiveSample('Interpolating hue values', '100%', '200')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`<color>`](/en-US/docs/Web/CSS/color_value) the data type these values belong to.
