---
title: color-mix()
slug: Web/CSS/color_value/color-mix
page-type: css-function
browser-compat: css.types.color.color-mix
sidebar: cssref
---

The **`color-mix()`** functional notation takes two {{cssxref("&lt;color&gt;")}} values and returns the result of mixing them in a given colorspace by a given amount.

## Syntax

```css
/* Polar color space */
color-mix(in hsl, hsl(200 50 80), coral)
color-mix(in hsl, hsl(200 50 80) 20%, coral 80%)

/* Rectangular color space */
color-mix(in srgb, plum, #123456)
color-mix(in lab, plum 60%, #123456 50%)

/* With hue interpolation method */
color-mix(in lch increasing hue, hsl(200deg 50% 80%), coral)
color-mix(in lch longer hue, hsl(200deg 50% 80%) 44%, coral 16%)
```

### Parameters

The `color-mix( <color-interpolation-method>, <color> [<percentage>], <color> [<percentage>] )` accepts the following parameters:

- {{CSSXref("&lt;color-interpolation-method&gt;")}}
  - : Specifies what interpolation method should be used to mix the colors. It consists of the `in` keyword followed by a {{glossary("color space")}} (one of the color spaces listed in the [formal syntax](#formal_syntax)), and, optionally, a {{CSSXref("&lt;hue-interpolation-method&gt;")}}.

- {{CSSXref("&lt;color&gt;")}}
  - : A color to mix; can be any valid `<color>` value.

- {{CSSXref("&lt;percentage&gt;")}} {{optional_inline}}
  - : A percentage value specifying the amount of the corresponding color to mix; can be any `<percentage>` value between `0%` and `100%`, inclusive.

### Return value

A `<color>`; the result of mixing the colors, in the given `<color-space>`, in the specified amounts and hue direction.

## Description

The `color-mix()` function enables mixing two {{cssxref("&lt;color&gt;")}} values of any type, in a specific ratio, in a given colorspace, using either a shorter or longer hue interpolation method. Browsers support a plethora of color spaces; the `color-mix()` function enables a wide range of colors to be mixed, not limited to the sRGB color space.

{{EmbedGHLiveSample("css-examples/tools/color-mixer/", '100%', 400)}}

This demo allows you to select two colors, `color-one` and `color-two`, and mix them, optionally setting each color's percentage, the color space in which the colors are mixed, and the interpolation method. The source colors are shown on the outside, and the mixed color is shown in the middle. You can change colors by clicking on them and choosing a new color using the resulting color picker. Change the percentage values of each color using the sliders. Change the color space via the drop-down menu.

### Choosing a color space

Choosing the correct color space is important for producing desired results. Given the same colors to mix, different color spaces may be more appropriate depending on the interpolation use case.

- If the result of physically mixing two colored lights is desired, the CIE XYZ or srgb-linear color space is appropriate, because they are linear in light intensity.
- If colors need to be evenly spaced perceptually (such as in a gradient), the Oklab (and older Lab) color spaces are appropriate, because they are designed to be perceptually uniform.
- If avoiding graying out in color mixing is desired, i.e., maximizing chroma throughout the transition, the Oklch (and older LCH) color spaces work well.
- Only use sRGB if you need to match the behavior of a specific device or software that uses sRGB. The sRGB color space is neither linear-light nor perceptually uniform, and produces poorer results such as overly dark or grayish mixes.

### Color interpolation method

The {{CSSXref("&lt;color-interpolation-method&gt;")}} specifies what interpolation method should be used to mix the colors. It consists of the `in` keyword and the color space the colors should be mixed in.
The color space must be one of the available color spaces listed in the [formal syntax](#formal_syntax). Depending on the color space used, you can optionally direct the hue to be mixed along a longer or shorter path.

The [`<rectangular-color-space>`](/en-US/docs/Web/CSS/color-interpolation-method#rectangular-color-space) category includes [`srgb`](/en-US/docs/Glossary/Color_space#srgb), [`srgb-linear`](/en-US/docs/Glossary/Color_space#srgb-linear), [`display-p3`](/en-US/docs/Glossary/Color_space#display-p3), [`a98-rgb`](/en-US/docs/Glossary/Color_space#a98-rgb), [`prophoto-rgb`](/en-US/docs/Glossary/Color_space#prophoto-rgb), [`rec2020`](/en-US/docs/Glossary/Color_space#rec2020), [`lab`](/en-US/docs/Glossary/Color_space#cielab_color_spaces), [`oklab`](/en-US/docs/Glossary/Color_space#oklab), [`xyz`](/en-US/docs/Glossary/Color_space#xyz_color_spaces), [`xyz-d50`](/en-US/docs/Glossary/Color_space#xyz), and [`xyz-d65`](/en-US/docs/Glossary/Color_space#xyz-d50).

The `<polar-color-space>` category includes [`hsl`](/en-US/docs/Web/CSS/color_value/hsl), [`hwb`](/en-US/docs/Web/CSS/color_value/hwb), [`lch`](/en-US/docs/Web/CSS/color_value/lch), and [`oklch`](/en-US/docs/Web/CSS/color_value/oklch). With these you can optionally follow the color space name with a {{CSSXref("&lt;hue-interpolation-method&gt;")}}. This value defaults to `shorter hue`, but can also be set to `longer hue`, `increasing hue`, or `decreasing hue`.

### Color percentages

Each of the two colors can be declared with a `<percentage>` value between `0%` and `100%`, which specifies the amount of the corresponding color to mix. The percentages are normalized if the total value of the declared percentages does not equal `100%`.

The two color percentages (we'll refer to them as `p1` and `p2`) are normalized as follows:

- If both `p1` and `p2` are omitted, then `p1 = p2 = 50%`.
- If `p1` is omitted, then `p1 = 100% - p2`.
- If `p2` is omitted, then `p2 = 100% - p1`.
- If `p1 = p2 = 0%`, the function is invalid.
- If `p1 + p2 ≠ 100%`, then `p1' = p1 / (p1 + p2)` and `p2' = p2 / (p1 + p2)`, where `p1'` and `p2'` are the normalization results.
  - If `p1 + p2 < 100%`, then an alpha multiplier of `p1 + p2` is applied to the resulting color. This is similar to mixing in [`transparent`](/en-US/docs/Web/CSS/named-color#transparent), with percentage `pt = 100% - p1 - p2`.

## Formal syntax

{{CSSSyntax}}

## Examples

### Mixing two colors

This example demonstrates mixing two colors, red `#a71e14` at different percentages and white with no percentage given. The higher the percentage of `#a71e14` is mixed, the more red and less white the output color is.

#### HTML

```html
<ul>
  <li>0%</li>
  <li>25%</li>
  <li>50%</li>
  <li>75%</li>
  <li>100%</li>
  <li></li>
</ul>
```

#### CSS

The `color-mix()` function is used to add increasing percentages of red, up to 100%. The 6th {{htmlelement("li")}} doesn't include a percentage for either color.

```css hidden
ul {
  display: flex;
  list-style-type: none;
  font-size: 150%;
  gap: 10px;
  border: 2px solid;
  padding: 10px;
}

li {
  padding: 10px;
  flex: 1;
  box-sizing: border-box;
  font-family: monospace;
  outline: 3px solid #a71e14;
  text-align: center;
}
```

```css
li:nth-child(1) {
  background-color: color-mix(in oklab, #a71e14 0%, white);
}

li:nth-child(2) {
  background-color: color-mix(in oklab, #a71e14 25%, white);
}

li:nth-child(3) {
  background-color: color-mix(in oklab, #a71e14 50%, white);
}

li:nth-child(4) {
  background-color: color-mix(in oklab, #a71e14 75%, white);
}

li:nth-child(5) {
  background-color: color-mix(in oklab, #a71e14 100%, white);
}

li:nth-child(6) {
  background-color: color-mix(in oklab, #a71e14, white);
}
```

#### Result

{{EmbedLiveSample("mixing_two_colors", "100%", 120)}}

The total value of both colors in a `color-mix()` function is 100%, even if the values set by the developer don't total 100%. In this example, as only one color has a percentage assigned, the other color is implicitly given a percentage value so that the combined total equals 100%. In the last {{htmlelement("li")}}, where neither color is assigned a percentage, both default to 50%.

### Adding transparency

This example demonstrates using the `color-mix()` function to add transparency to a color by mixing any color with [`transparent`](/en-US/docs/Web/CSS/named-color#transparent).

#### HTML

```html
<ul>
  <li>0%</li>
  <li>25%</li>
  <li>50%</li>
  <li>75%</li>
  <li>100%</li>
  <li></li>
</ul>
```

#### CSS

The `color-mix()` function is used to add increasing percentages of `red`, which is declared using a [custom property](/en-US/docs/Web/CSS/--*) named `--base`, defined on the {{cssxref(":root")}}. The 6th {{htmlelement("li")}} doesn't include a percentage, creating an output color that is half as opaque as the `--base` color. We include a striped background on the {{htmlelement("ul")}} to make the transparency visible.

```css hidden
ul {
  display: flex;
  list-style-type: none;
  font-size: 150%;
  gap: 10px;
  border: 2px solid;
  padding: 10px;
}

li {
  padding: 10px;
  flex: 1;
  box-sizing: border-box;
  font-family: monospace;
  outline: 1px solid var(--base);
  text-align: center;
}
```

```css
:root {
  --base: red;
}

ul {
  background: repeating-linear-gradient(
    45deg,
    chocolate 0px 2px,
    white 2px 12px
  );
}

li:nth-child(1) {
  background-color: color-mix(in srgb, var(--base) 0%, transparent);
}

li:nth-child(2) {
  background-color: color-mix(in srgb, var(--base) 25%, transparent);
}

li:nth-child(3) {
  background-color: color-mix(in srgb, var(--base) 50%, transparent);
}

li:nth-child(4) {
  background-color: color-mix(in srgb, var(--base) 75%, transparent);
}

li:nth-child(5) {
  background-color: color-mix(in srgb, var(--base) 100%, transparent);
}

li:nth-child(6) {
  background-color: color-mix(in srgb, var(--base), transparent);
}
```

#### Result

{{EmbedLiveSample("adding transparency", "100%", 120)}}

In this way, the `color-mix()` function can be used to add transparency to any color, even if the color is already non-opaque (with an alpha channel value < 1). However, `color-mix()` can't be used to make a semi-transparent color fully opaque. For this, use a [relative color](/en-US/docs/Web/CSS/CSS_colors/Relative_colors) with a CSS [color function](/en-US/docs/Web/CSS/CSS_colors#functions). Relative colors can alter the value of any color channel, including increasing a color's alpha channel to render the color fully opaque.

### Using hue interpolation in color-mix()

This example demonstrates the hue interpolation methods available to the `color-mix()` function. When using hue [interpolation](/en-US/docs/Web/CSS/color_value#interpolation), the resulting hue is between the hue values of the two colors being mixed. The value will be different based on which route is taken around the color wheel.

For more information, see {{cssxref("&lt;hue-interpolation-method&gt;")}}.

```html hidden
<p>longer</p>
<ul>
  <li>100%</li>
  <li>80%</li>
  <li>60%</li>
  <li>40%</li>
  <li>20%</li>
  <li>0%</li>
</ul>
<p>shorter</p>
<ul>
  <li>100%</li>
  <li>80%</li>
  <li>60%</li>
  <li>40%</li>
  <li>20%</li>
  <li>0%</li>
</ul>
<p>increasing</p>
<ul>
  <li>100%</li>
  <li>80%</li>
  <li>60%</li>
  <li>40%</li>
  <li>20%</li>
  <li>0%</li>
</ul>
<p>decreasing</p>
<ul>
  <li>100%</li>
  <li>80%</li>
  <li>60%</li>
  <li>40%</li>
  <li>20%</li>
  <li>0%</li>
</ul>
```

#### CSS

The `shorter hue` interpolation method takes the shorter route around the color wheel, whereas the `longer hue` interpolation method takes the longer route. With `increasing hue`, the route starts with increasing values. With `decreasing hue` the value decreases. We mix two {{cssxref("named-color")}} values to create a series of `lch()` intermediary colors that differ based on which route is taken around the color wheel. The mixed colors include `red`, `blue`, and `yellow` with LCH hue values of approximately 41deg, 301deg, and 100deg, respectively.

To reduce code redundancy, we used [CSS custom properties](/en-US/docs/Web/CSS/--*) for both colors and for the interpolation method, setting different values on each {{htmlelement("ul")}}.

```css hidden
body {
  font-family: monospace;
}
ul {
  display: flex;
  list-style-type: none;
  font-size: 150%;
  gap: 10px;
  padding: 10px;
  margin: 0;
}

li {
  padding: 10px;
  flex: 1;
  outline: 1px solid var(--base);
  text-align: center;
}
```

```css
ul:nth-of-type(1) {
  --distance: longer; /* 52 degree hue increments */
  --base: red;
  --mixin: blue;
}
ul:nth-of-type(2) {
  /* 20 degree hue decrements */
  --distance: shorter;
  --base: red;
  --mixin: blue;
}
ul:nth-of-type(3) {
  /* 40 degree hue increments */
  --distance: increasing;
  --base: yellow;
  --mixin: blue;
}
ul:nth-of-type(4) {
  /* 32 degree hue decrements */
  --distance: decreasing;
  --base: yellow;
  --mixin: blue;
}

li:nth-child(1) {
  background-color: color-mix(
    in lch var(--distance) hue,
    var(--base) 100%,
    var(--mixin)
  );
}

li:nth-child(2) {
  background-color: color-mix(
    in lch var(--distance) hue,
    var(--base) 80%,
    var(--mixin)
  );
}

li:nth-child(3) {
  background-color: color-mix(
    in lch var(--distance) hue,
    var(--base) 60%,
    var(--mixin)
  );
}

li:nth-child(4) {
  background-color: color-mix(
    in lch var(--distance) hue,
    var(--base) 40%,
    var(--mixin)
  );
}

li:nth-child(5) {
  background-color: color-mix(
    in lch var(--distance) hue,
    var(--base) 20%,
    var(--mixin)
  );
}

li:nth-child(6) {
  background-color: color-mix(
    in lch var(--distance) hue,
    var(--base) 0%,
    var(--mixin)
  );
}
```

#### Result

{{EmbedLiveSample("using_hue_interpolation_in_color_mix", "100%", 440)}}

With `longer hue` the increments or decrements between colors will always be the same or larger than when using `shorter hue`. Use `increasing hue` or `decreasing hue` when the direction of the hue value change is more important than the length between values.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{CSSXref("&lt;color&gt;")}}
- {{CSSXref("&lt;color-interpolation-method&gt;")}}
- {{cssxref("&lt;hue&gt;")}}
- [CSS relative colors](/en-US/docs/Web/CSS/CSS_colors/Relative_colors)
