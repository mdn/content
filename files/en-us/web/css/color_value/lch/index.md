---
title: lch()
slug: Web/CSS/color_value/lch
page-type: css-function
browser-compat: css.types.color.lch
spec-urls:
  - https://drafts.csswg.org/css-color-5/#relative-LCH
  - https://drafts.csswg.org/css-color/#lab-colors
---

{{CSSRef}}

The **`lch()`** functional notation expresses a given color using the LCH {{glossary("color space")}}, which represents lightness, chroma, and hue. It uses the same `L` axis as the {{cssxref("color_value/lab","lab()")}} color function of the [CIELab color space](/en-US/docs/Glossary/Color_space#cielab_color_spaces), but it uses the polar coordinates `C` (Chroma) and `H` (Hue).

## Syntax

```css
/* Absolute values */
lch(29.2345% 44.2 27);
lch(52.2345% 72.2 56.2);
lch(52.2345% 72.2 56.2 / .5);

/* Relative values */
lch(from green l c h / 0.5)
lch(from #0000FF calc(l + 10) c h)
lch(from hsl(180 100% 50%) calc(l - 10) c h)
lch(from var(--aColorValue) l c h / calc(alpha - 0.1))
```

### Values

Below are descriptions of the allowed values for both absolute and [relative colors](/en-US/docs/Web/CSS/CSS_colors/Relative_colors).

> [!NOTE]
> Usually when percentage values have a numeric equivalent in CSS, `100%` is equal to the number `1`.
> This is not the case for `lch()`. Here `100%` is equal to the number `100` for the `L` value and `150` for the `C` value.

#### Absolute value syntax

```plain
lch(L C H[ / A])
```

The parameters are as follows:

- `L`

  - : A {{CSSXref("&lt;number&gt;")}} between `0` and `100`, a {{CSSXref("&lt;percentage&gt;")}} between `0%` and `100%`, or the keyword `none` (equivalent to `0%`). The number `0` corresponds to `0%` (black), and the number `100` corresponds to `100%` (white). This value specifies the color's brightness in the [CIELab color space](/en-US/docs/Glossary/Color_space#cielab_color_spaces).

    > [!NOTE]
    > The `L` in `lch()` is the perceived lightness, which refers to the "brightness" we visually perceive with our eyes. This is different from the `L` in `hsl()`, where it represents lightness as compared to other colors.

- `C`

  - : A {{CSSXref("&lt;number&gt;")}}, a {{CSSXref("&lt;percentage&gt;")}}, or the keyword `none` (equivalent to `0%` in this case). This value is a measure of the color's chroma (roughly representing the "amount of color"). Its minimum useful value is `0%`, or `0`, while its maximum is theoretically unbounded (but in practice does not exceed `230`), with `100%` being equivalent to `150`.

- `H`

  - : A {{CSSXref("&lt;number&gt;")}}, an {{CSSXref("&lt;angle&gt;")}}, or the keyword `none` (equivalent to `0deg`) representing the color's {{CSSXref("&lt;hue&gt;")}} angle.

    > [!NOTE]
    > The angles corresponding to particular hues differ across the sRGB (used by {{CSSXref("color_value/hsl", "hsl()")}} and {{CSSXref("color_value/hwb", "hwb()")}}), CIELAB (used by `lch()`), and Oklab (used by {{CSSXref("color_value/oklch", "oklch()")}}) color spaces. See the [hues in LCH](#hues_in_lch) example below and the {{CSSXref("&lt;hue&gt;")}} reference page for more detail and examples.

- `A` {{optional_inline}}

  - : An {{CSSXref("&lt;alpha-value&gt;")}} representing the alpha channel value of the color, where the number `0` corresponds to `0%` (fully transparent) and `1` corresponds to `100%` (fully opaque). Additionally, the keyword `none` can be used to explicitly specify no alpha channel. If the `A` channel value is not explicitly specified, it defaults to 100%. If included, the value is preceded by a slash (`/`).

> [!NOTE]
> See [Missing color components](/en-US/docs/Web/CSS/color_value#missing_color_components) for more information on the effect of `none`.

#### Relative value syntax

```plain
lch(from <color> L C H[ / A])
```

The parameters are as follows:

- `from <color>`

  - : The keyword `from` is always included when defining a relative color, followed by a {{cssxref("&lt;color&gt;")}} value representing the **origin color**. This is the original color that the relative color is based on. The origin color can be _any_ valid {{cssxref("&lt;color&gt;")}} syntax, including another relative color.

- `L`

  - : A {{CSSXref("&lt;number&gt;")}} between `0` and `100`, a {{CSSXref("&lt;percentage&gt;")}} between `0%` and `100%`, or the keyword `none` (equivalent to `0%`). The number `0` corresponds to `0%` (black), and the number `100` corresponds to `100%` (white). This value specifies the color's brightness in the CIELab color space.

- `C`

  - : A {{CSSXref("&lt;number&gt;")}}, a {{CSSXref("&lt;percentage&gt;")}}, or the keyword `none` (equivalent to `0%` in this case). This value represents the output color's chroma value (roughly representing the "amount of color"). Its minimum useful value is `0%`, or `0`, while its maximum is theoretically unbounded (but in practice does not exceed `230`), with `100%` being equivalent to `150`.

- `H`

  - : A {{CSSXref("&lt;number&gt;")}}, an {{CSSXref("&lt;angle&gt;")}}, or the keyword `none` (equivalent to `0deg`) representing the output color's {{CSSXref("&lt;hue&gt;")}} angle. See the [hue example](#result_3) below.

- `A` {{optional_inline}}

  - : An {{CSSXref("&lt;alpha-value&gt;")}} representing the alpha channel value of the output color, where the number `0` corresponds to `0%` (fully transparent) and `1` corresponds to `100%` (fully opaque). Additionally, the keyword `none` can be used to explicitly specify no alpha channel. If the `A` channel value is not explicitly specified, it defaults to the alpha channel value of the origin color. If included, the value is preceded by a slash (`/`).

#### Defining relative color output channel components

When using relative color syntax inside an `lch()` function, the browser converts the origin color into an equivalent Lch color (if it is not already specified as such) The color is defined as three distinct color channel values — `l` (lightness), `c` (chroma), and `h` (hue) — plus an alpha channel value (`alpha`). These channel values are made available inside the function to be used when defining the output color channel values:

- The `l` channel value is resolved to a `<number>` between `0` and `100`, inclusive.
- The `c` channel value is resolved to a `<number>` between `0` and `150`, inclusive.
- The `h` channel value is resolved to a `<number>` between `0` and `360`, inclusive.
- The `alpha` channel is resolved to a `<number>` between `0` and `1`, inclusive.

When defining a relative color, the different channels of the output color can be expressed in several different ways. Below, we'll study some examples to illustrate these.

In the first two examples below, we are using relative color syntax. However, the first one outputs the same color as the origin color and the second one outputs a color not based on the origin color at all. They don't really create relative colors! You'd be unlikely to ever use these in a real codebase, and would probably just use an absolute color value instead. We included these examples as a starting point for learning about relative `lch()` syntax.

Let's start with an origin color of `hsl(0 100% 50%)` (equivalent to `red`). The following function outputs the same color as the origin color — it uses the origin color's `l`, `c`, and `h` channel values (`54.29`, `106.854`, and `40.856`) as the output channel values:

```css
lch(from hsl(0 100% 50%) l c h)
```

This function's output color is `lch(54.29 106.854 40.856)`.

The next function uses absolute values for the output color's channel values, outputting a completely different color not based on the origin color:

```css
lch(from hsl(0 100% 50%) 29.6871% 66.83 327.109)
```

In the above case, the output color is `lch(29.6871 66.83 327.109)`.

The following function creates a relative color based on the origin color:

```css
lch(from hsl(0 100% 50%) 70 150 h)
```

This example:

- Converts the `hsl()` origin color to an equivalent `lch()` color — `lch(54.29 106.854 40.856)`.
- Sets the `H` channel value for the output color to that of the origin `lch()` equivalent's `H` channel value — `40.856`.
- Sets the output color's `L` and `C` channel values to new values not based on the origin color: `70` and `150` respectively.

The final output color is `lch(70 150 40.856)`.

> [!NOTE]
> As mentioned above, if the output color is using a different color model to the origin color, the origin color is converted to the same model as the output color in the background so that it can be represented in a way that is compatible (i.e. using the same channels).

In the examples we've seen so far in this section, the alpha channels have not been explicitly specified for either the origin or output colors. When the output color alpha channel is not specified, it defaults to the same value as the origin color alpha channel. When the origin color alpha channel is not specified (and it is not a relative color), it defaults to `1`. Therefore, the origin and output alpha channel values are `1` for the above examples.

Let's look at some examples that specify origin and output alpha channel values. The first one specifies the output alpha channel value as being the same as the origin alpha channel value, whereas the second one specifies a different output alpha channel value, unrelated to the origin alpha channel value.

```css
lch(from hsl(0 100% 50% / 0.8) l c h / alpha)
/* Computed output color: lch(54.29 106.854 40.856 / 0.8) */

lch(from hsl(0 100% 50% / 0.8) l c h / 0.5)
/* Computed output color: lch(54.29 106.854 40.856 / 0.5) */
```

In the following example, the `hsl()` origin color is again converted to the `lch()` equivalent — `lch(54.29 106.854 40.856)`. {{cssxref("calc")}} calculations are applied to the `L`, `C`, `H`, and `A` values, resulting in an output color of `lch(74.29 86.8541 0.856018 / 0.9)`:

```css
lch(from hsl(0 100% 50%) calc(l + 20) calc(c - 20) calc(h - 40) / calc(alpha - 0.1))
```

> [!NOTE]
> Because the origin color channel values are resolved to `<number>` values, you have to add numbers to them when using them in calculations, even in cases where a channel would normally accept `<percentage>`, `<angle>`, or other value types. Adding a `<percentage>` to a `<number>`, for example, doesn't work.

## Formal syntax

{{csssyntax}}

## Examples

### Adjusting the brightness of a color

This example shows the effect of varying the `L` (lightness) value of the `lch()` functional notation.

#### HTML

```html
<div data-color="blue-dark"></div>
<div data-color="blue"></div>
<div data-color="blue-light"></div>

<div data-color="red-dark"></div>
<div data-color="red"></div>
<div data-color="red-light"></div>

<div data-color="green-dark"></div>
<div data-color="green"></div>
<div data-color="green-light"></div>
```

#### CSS

```css hidden
body {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
}
div {
  height: 50px;
  border: 1px solid black;
}
```

```css
[data-color="blue-dark"] {
  background-color: lch(10% 100 240);
}
[data-color="blue"] {
  background-color: lch(50% 100 240);
}
[data-color="blue-light"] {
  background-color: lch(90% 100 240);
}

[data-color="red-dark"] {
  background-color: lch(10% 130 20);
}
[data-color="red"] {
  background-color: lch(50% 130 20);
}
[data-color="red-light"] {
  background-color: lch(90% 130 20);
}

[data-color="green-dark"] {
  background-color: lch(10% 132 130);
}
[data-color="green"] {
  background-color: lch(50% 132 130);
}
[data-color="green-light"] {
  background-color: lch(90% 132 130);
}
```

#### Result

{{EmbedLiveSample("Adjusting the brightness of a color", "", "200")}}

### Adjusting color intensity via chroma

The following example shows the effect of varying the `C` (chroma) value of the `lch()` functional notation, with colors decreasing in intensity as the `C` value decreases from fully saturated to almost grey.

#### HTML

```html
<div data-color="blue"></div>
<div data-color="blue-chroma1"></div>
<div data-color="blue-chroma2"></div>
<div data-color="blue-chroma3"></div>

<div data-color="red"></div>
<div data-color="red-chroma1"></div>
<div data-color="red-chroma2"></div>
<div data-color="red-chroma3"></div>

<div data-color="green"></div>
<div data-color="green-chroma1"></div>
<div data-color="green-chroma2"></div>
<div data-color="green-chroma3"></div>
```

#### CSS

With the initial starting colors blue, red, and green, we declare progressively smaller values for chroma on them: starting from full color saturation at the highest value of `150` (equivalent to `100%`) down to `3` (equivalent to `2%`), which is almost grey for all the colors.

```css hidden
body {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
}
div {
  height: 50px;
  border: 1px solid black;
}
```

```css
[data-color="blue"] {
  background-color: lch(50% 150 240);
}
[data-color="blue-chroma1"] {
  background-color: lch(50% 105 240);
}
[data-color="blue-chroma2"] {
  background-color: lch(50% 54 240);
}
[data-color="blue-chroma3"] {
  background-color: lch(50% 3 240);
}

[data-color="red"] {
  background-color: lch(50% 100% 20deg);
}
[data-color="red-chroma1"] {
  background-color: lch(50% 70% 20deg);
}
[data-color="red-chroma2"] {
  background-color: lch(50% 36% 20deg);
}
[data-color="red-chroma3"] {
  background-color: lch(50% 2% 20deg);
}

[data-color="green"] {
  background-color: lch(50% 150 130);
}
[data-color="green-chroma1"] {
  background-color: lch(50% 105 130);
}
[data-color="green-chroma2"] {
  background-color: lch(50% 54 130);
}
[data-color="green-chroma3"] {
  background-color: lch(50% 3 130);
}
```

#### Result

{{EmbedLiveSample("Adjusting color intensity via chroma", '', '200')}}

If we had used `0` instead of `3` and `2%`, with the same lightness values, the colors would have all been the same shade of grey. In this example, they are almost grey.

### Hues in LCH

The following example shows swatches with different `H` (hue) values of the `lch()` functional notation.

#### HTML

```html
<div data-color="0">0deg</div>
<div data-color="20">20deg</div>
<div data-color="40">40deg</div>
<div data-color="60">60deg</div>
```

and so on.

```html hidden
<div data-color="80">80deg</div>
<div data-color="100">100deg</div>
<div data-color="120">120deg</div>
<div data-color="140">140deg</div>
<div data-color="160">160deg</div>
<div data-color="180">180deg</div>
<div data-color="200">200deg</div>
<div data-color="220">220deg</div>
<div data-color="240">240deg</div>
<div data-color="260">260deg</div>
<div data-color="280">280deg</div>
<div data-color="300">300deg</div>
<div data-color="320">320deg</div>
<div data-color="340">340deg</div>
<div data-color="360">360deg</div>
```

#### CSS

```css hidden
body {
  display: flex;
  flex-wrap: wrap;
  gap: 3px;
}
div {
  flex: 0 0 4em;
  text-align: center;
  line-height: 4em;
  display: inline-block;
  border: 1px solid black;
  color: white;
  font-family: monospace;
}
```

```css
[data-color="0"] {
  background-color: lch(50% 150 0deg);
}
[data-color="20"] {
  background-color: lch(50% 150 20deg);
}
[data-color="40"] {
  background-color: lch(50% 150 40deg);
}
[data-color="60"] {
  background-color: lch(50% 150 60deg);
}
```

and so on.

```css hidden
[data-color="80"] {
  background-color: lch(50% 150 80deg);
}
[data-color="100"] {
  background-color: lch(50% 150 100deg);
}
[data-color="120"] {
  background-color: lch(50% 150 120deg);
}
[data-color="140"] {
  background-color: lch(50% 150 140deg);
}
[data-color="160"] {
  background-color: lch(50% 150 160deg);
}
[data-color="180"] {
  background-color: lch(50% 150 180deg);
}
[data-color="200"] {
  background-color: lch(50% 150 200deg);
}
[data-color="220"] {
  background-color: lch(50% 150 220deg);
}
[data-color="240"] {
  background-color: lch(50% 150 240deg);
}
[data-color="260"] {
  background-color: lch(50% 150 260deg);
}
[data-color="280"] {
  background-color: lch(50% 150 280deg);
}
[data-color="300"] {
  background-color: lch(50% 150 300deg);
}
[data-color="320"] {
  background-color: lch(50% 150 320deg);
}
[data-color="340"] {
  background-color: lch(50% 150 340deg);
}
[data-color="360"] {
  background-color: lch(50% 150 360deg);
}
```

#### Result

{{EmbedLiveSample("hues in lch")}}

The hue angles in `lch()` are different from those in {{CSSXref("color_value/hsl", "hsl()")}}. See {{cssxref("hue")}} for more information. In `hsl()`, the sRGB color `0deg` represents red. However, in the CIELab color space, `0deg` corresponds to magenta, while red is approximately `41deg`.

### Adjusting opacity with lch()

The following example shows the effect of varying the `A` (alpha) value of the `lch()` functional notation.
The `red` and `red-alpha` elements overlap the `#background-div` element to demonstrate the effect of opacity.
Giving `A` a value of `0.4` makes the color 40% opaque.

#### HTML

```html
<div id="background-div">
  <div data-color="red"></div>
  <div data-color="red-alpha"></div>
</div>
```

#### CSS

```css hidden
div {
  width: 50px;
  height: 50px;
  padding: 5px;
  margin: 5px;
  display: inline-block;
  border: 1px solid black;
}
#background-div {
  background-color: lch(100% 100 240);
  width: 150px;
  height: 40px;
}
```

```css
[data-color="red"] {
  background-color: lch(50% 130 20);
}
[data-color="red-alpha"] {
  background-color: lch(50% 130 20 / 0.4);
}
```

#### Result

{{EmbedLiveSample("adjusting_opacity_with_lch")}}

### Using relative colors with lch()

This example styles three {{htmlelement("div")}} elements with different background colors, demonstrating the use of relative colors to change a color's brightness using the `lch()` color function. The middle `<div>` retains the original `--base-color`, while the left and right `<div>`s are given lightened and darkened variants of the `--base-color`.

These variants are defined using relative colors — the `--base-color` [custom property](/en-US/docs/Web/CSS/--*) is passed into an `lch()` function, and the output colors have their lightness channel modified to achieve the desired effect via a `calc()` function. The lightened color has 15% added to the lightness channel, and the darkened color has 15% subtracted from the lightness channel.

```html hidden
<div id="container">
  <div class="item" id="one"></div>
  <div class="item" id="two"></div>
  <div class="item" id="three"></div>
</div>
```

#### CSS

```css hidden
#container {
  display: flex;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
}

.item {
  flex: 1;
  margin: 20px;
}
```

```css
:root {
  --base-color: orange;
}

#one {
  background-color: lch(from var(--base-color) calc(l + 15) c h);
}

#two {
  background-color: var(--base-color);
}

#three {
  background-color: lch(from var(--base-color) calc(l - 15) c h);
}
```

#### Result

The output is as follows:

{{ EmbedLiveSample("Using relative colors with lch()", "100%", "200") }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [List of all color notations](/en-US/docs/Web/CSS/color_value)
- [Using relative colors](/en-US/docs/Web/CSS/CSS_colors/Relative_colors)
- [CSS colors](/en-US/docs/Web/CSS/CSS_colors) module
- {{CSSXref("&lt;hue&gt;")}} data type
- [LCH colors in CSS: what, why, and how?](https://lea.verou.me/blog/2020/04/lch-colors-in-css-what-why-and-how/) by Lea Verou (2020)
