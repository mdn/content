---
title: oklch()
slug: Web/CSS/color_value/oklch
page-type: css-function
browser-compat: css.types.color.oklch
spec-urls:
  - https://drafts.csswg.org/css-color-5/#relative-Oklch
  - https://drafts.csswg.org/css-color/#ok-lab
---

{{CSSRef}}

The **`oklch()`** functional notation expresses a given color in the Oklab {{glossary("color space")}}. `oklch()` is the cylindrical form of {{CSSXref("color_value/oklab", "oklab()")}}, using the same `L` axis, but with polar Chroma (`C`) and Hue (`h`) coordinates.

## Syntax

```css
/* Absolute values */
oklch(40.1% 0.123 21.57)
oklch(59.69% 0.156 49.77)
oklch(59.69% 0.156 49.77 / .5)

/* Relative values */
oklch(from green l c h / 0.5)
oklch(from #0000FF calc(l + 0.1) c h)
oklch(from hsl(180 100% 50%) calc(l - 0.1) c h)
oklch(from var(--aColor) l c h / calc(alpha - 0.1))
```

### Values

Below are descriptions of the allowed values for both absolute and [relative colors](/en-US/docs/Web/CSS/CSS_colors/Relative_colors).

> [!NOTE]
> Usually when percentage values have a numeric equivalent in CSS, `100%` is equal to the number `1`.
> This is not the case for all of the `oklch()` component values. Here, `100%` is equal to `0.4` for the `C` value.

#### Absolute value syntax

```plain
oklch(L C H[ / A])
```

The parameters are as follows:

- `L`

  - : A {{CSSXref("&lt;number&gt;")}} between `0` and `1`, a {{CSSXref("&lt;percentage&gt;")}} between `0%` and `100%`, or the keyword `none` (equivalent to `0%` in this case). In this case, the number `0` corresponds to `0%` (black) and the number `1` corresponds to `100%` (white). This value specifies the color's perceived lightness, or "brightness".

    > [!NOTE]
    > The `L` in `oklch()` is the perceived lightness, which refers to the "brightness" we visually perceive with our eyes. This is different from the `L` in `hsl()`, where it represents lightness as compared to other colors.

- `C`

  - : A {{CSSXref("&lt;number&gt;")}}, a {{CSSXref("&lt;percentage&gt;")}}, or the keyword `none` (equivalent to `0%` in this case). This value is a measure of the color's chroma (roughly representing the "amount of color"). Its minimum useful value is `0`, while the maximum is theoretically unbounded (but in practice does not exceed `0.5`). In this case, `0%` is `0` and `100%` is the number `0.4`.

- `H`

  - : A {{CSSXref("&lt;number&gt;")}}, an {{CSSXref("&lt;angle&gt;")}}, or the keyword `none` (equivalent to `0deg` in this case) representing the color's {{CSSXref("&lt;hue&gt;")}} angle.

    > [!NOTE]
    > The angles corresponding to particular hues differ across the sRGB (used by {{CSSXref("color_value/hsl", "hsl()")}} and {{CSSXref("color_value/hwb", "hwb()")}}), CIELAB (used by {{CSSXref("color_value/lch", "lch()")}}), and Oklab (used by `oklch()`) color spaces. See the [Hues in `oklch()`](#hues_in_oklch) example below and the {{CSSXref("&lt;hue&gt;")}} reference page for more details and examples.

- `A` {{optional_inline}}

  - : An {{CSSXref("&lt;alpha-value&gt;")}} representing the alpha channel value of the color, where the number `0` corresponds to `0%` (fully transparent) and `1` corresponds to `100%` (fully opaque). Additionally, the keyword `none` can be used to explicitly specify no alpha channel. If the `A` channel value is not explicitly specified, it defaults to 100%. If included, the value is preceded by a slash (`/`).

> [!NOTE]
> See [Missing color components](/en-US/docs/Web/CSS/color_value#missing_color_components) for more information on the effect of `none`.

#### Relative value syntax

```plain
oklch(from <color> L C H[ / A])
```

The parameters are as follows:

- `from <color>`

  - : The keyword `from` is always included when defining a relative color, followed by a {{cssxref("&lt;color&gt;")}} value representing the **origin color**: This is the original color that the relative color is based on. The origin color can be _any_ valid {{cssxref("&lt;color&gt;")}} syntax, including another relative color.

- `L`

  - : A {{CSSXref("&lt;number&gt;")}} between `0` and `1`, a {{CSSXref("&lt;percentage&gt;")}} between `0%` and `100%`, or the keyword `none` (equivalent to `0%` in this case). This represents the lightness value of the output color. Here the number `0` corresponds to `0%` (black) and the number `1` corresponds to `100%` (white).

- `C`

  - : A {{CSSXref("&lt;number&gt;")}}, a {{CSSXref("&lt;percentage&gt;")}}, or the keyword `none` (equivalent to `0%` in this case). This value represents the output color's chroma value (roughly representing the "amount of color"). Its minimum useful value is `0`, while its maximum is theoretically unbounded (but in practice does not exceed `0.5`). In this case, `0%` is `0` and `100%` is the number `0.4`.

- `H`

  - : A {{CSSXref("&lt;number&gt;")}}, an {{CSSXref("&lt;angle&gt;")}}, or the keyword `none` (equivalent to `0deg` in this case) representing the output color's {{CSSXref("&lt;hue&gt;")}} angle. See a [sample of different hues](#result_3) in the [Examples](#examples) section below.

- `A` {{optional_inline}}

  - : An {{CSSXref("&lt;alpha-value&gt;")}} representing the alpha channel value of the output color, where the number `0` corresponds to `0%` (fully transparent) and `1` corresponds to `100%` (fully opaque). Additionally, the keyword `none` can be used to explicitly specify no alpha channel. If the `A` channel value is not explicitly specified, it defaults to the alpha channel value of the origin color. If included, the value is preceded by a slash (`/`).

#### Defining relative color output channel components

When using relative color syntax inside an `oklch()` function, the browser converts the origin color into an equivalent Oklch color (if it is not already specified as such). The color is defined as three distinct color channel values — `l` (lightness), `c` (chroma), and `h` (hue) — plus an alpha channel value (`alpha`). These channel values are made available inside the function to be used when defining the output color channel values:

- The `l` channel value is resolved to a `<number>` between `0` and `1`, inclusive.
- The `c` channel value is resolved to a `<number>` between `0` and `0.4`, inclusive.
- The `h` channel value is resolved to a `<number>` between `0` and `360`, inclusive.
- The `alpha` channel is resolved to a `<number>` between `0` and `1`, inclusive.

When defining a relative color, the different channels of the output color can be expressed in several different ways. Below, we'll study some examples to illustrate these.

In the first two examples below, we are using relative color syntax. However, the first one outputs the same color as the origin color and the second one outputs a color not based on the origin color at all. They don't really create relative colors! You'd be unlikely to ever use these in a real codebase, and would probably just use an absolute color value instead. We included these examples as a starting point for learning about relative `oklch()` syntax.

Let's start with an origin color of `hsl(0 100% 50%)` (equivalent to `red`). The following function outputs the same color as the origin color — it uses the origin color's `l`, `c`, and `h` channel values (`0.627966`, `0.257704`, and `29.2346`) as the output channel values:

```css
oklch(from hsl(0 100% 50%) l c h)
```

This function's output color is `oklch(0.627966 0.257704 29.2346)`.

The next function uses absolute values for the output color's channel values, outputting a completely different color not based on the origin color:

```css
oklch(from hsl(0 100% 50%) 42.1% 0.25 328.363)
```

In the above case, the output color is `oklch(0.421 0.25 328.363)`.

The following function creates a relative color based on the origin color:

```css
oklch(from hsl(0 100% 50%) 0.8 0.4 h)
```

This example:

- Converts the `hsl()` origin color to an equivalent `oklch()` color — `oklch(0.627966 0.257704 29.2346)`.
- Sets the `H` channel value for the output color to that of the origin `oklch()` equivalent's `H` channel value — `29.2346`.
- Sets the output color's `L` and `C` channel values to new values not based on the origin color: `0.8` and `0.4` respectively.

The final output color is `oklch(0.8 0.4 29.2346)`.

> [!NOTE]
> As mentioned above, if the output color is using a different color model to the origin color, the origin color is converted to the same model as the output color in the background so that it can be represented in a way that is compatible (i.e. using the same channels).

In the examples we've seen so far in this section, the alpha channels have not been explicitly specified for either the origin or output colors. When the output color alpha channel is not specified, it defaults to the same value as the origin color alpha channel. When the origin color alpha channel is not specified (and it is not a relative color), it defaults to `1`. Therefore, the origin and output alpha channel values are `1` for the above examples.

Let's look at some examples that specify origin and output alpha channel values. The first one specifies the output alpha channel value as being the same as the origin alpha channel value, whereas the second one specifies a different output alpha channel value, unrelated to the origin alpha channel value.

```css
oklch(from hsl(0 100% 50% / 0.8) l c h / alpha)
/* Computed output color: oklch(0.627966 0.257704 29.2346 / 0.8) */

oklch(from hsl(0 100% 50% / 0.8) l c h / 0.5)
/* Computed output color: oklch(0.627966 0.257704 29.2346 / 0.5) */
```

In the following example, the `hsl()` origin color is again converted to the `oklch()` equivalent — `oklch(0.627966 0.257704 29.2346)`. {{cssxref("calc")}} calculations are applied to the `L`, `C`, `H`, and `A` values, resulting in an output color of `oklch(0.827966 0.357704 9.23462 / 0.9)`:

```css
oklch(from hsl(0 100% 50%) calc(l + 0.2) calc(c + 0.1) calc(h - 20) / calc(alpha - 0.1))
```

> [!NOTE]
> Because the origin color channel values are resolved to `<number>` values, you have to add numbers to them when using them in calculations, even in cases where a channel would normally accept `<percentage>`, `<angle>`, or other value types. Adding a `<percentage>` to a `<number>`, for example, doesn't work.

## Formal syntax

{{csssyntax}}

## Examples

### Adjusting the brightness of a color

This example shows the effect of varying the `L` (lightness) value of the `oklch()` functional notation.

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
  background-color: oklch(10% 0.4 240);
}
[data-color="blue"] {
  background-color: oklch(50% 0.4 240);
}
[data-color="blue-light"] {
  background-color: oklch(90% 0.4 240);
}

[data-color="red-dark"] {
  background-color: oklch(10% 0.4 20);
}
[data-color="red"] {
  background-color: oklch(50% 0.4 20);
}
[data-color="red-light"] {
  background-color: oklch(90% 0.4 20);
}

[data-color="green-dark"] {
  background-color: oklch(10% 0.4 130);
}
[data-color="green"] {
  background-color: oklch(50% 0.4 130);
}
[data-color="green-light"] {
  background-color: oklch(90% 0.4 130);
}
```

#### Result

{{EmbedLiveSample("Adjusting the brightness of a color", "", "200")}}

### Adjusting color intensity via chroma

The following example shows the effect of varying the `C` (chroma) value of the `oklch()` functional notation, with colors decreasing in intensity as the `C` value decreases from fully saturated to almost grey.

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

With the initial starting colors blue, red, and green, we declare progressively smaller values for chroma on them: starting from full color saturation at the high value of `0.4` (equivalent to `100%`) down to `0.01` (equivalent to `2%`), which is almost grey for all the colors.

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
  background-color: oklch(50% 0.4 240);
}
[data-color="blue-chroma1"] {
  background-color: oklch(50% 0.2 240);
}
[data-color="blue-chroma2"] {
  background-color: oklch(50% 0.1 240);
}
[data-color="blue-chroma3"] {
  background-color: oklch(50% 0.01 240);
}

[data-color="red"] {
  background-color: oklch(50% 100% 20deg);
}
[data-color="red-chroma1"] {
  background-color: oklch(50% 50% 20deg);
}
[data-color="red-chroma2"] {
  background-color: oklch(50% 25% 20deg);
}
[data-color="red-chroma3"] {
  background-color: oklch(50% 2% 20deg);
}

[data-color="green"] {
  background-color: oklch(50% 0.4 130);
}
[data-color="green-chroma1"] {
  background-color: oklch(50% 0.2 130);
}
[data-color="green-chroma2"] {
  background-color: oklch(50% 0.1 130);
}
[data-color="green-chroma3"] {
  background-color: oklch(50% 0.01 130);
}
```

#### Result

{{EmbedLiveSample("Adjusting color intensity via chroma", '', '200')}}

If we had used `0` instead of `0.01` and `2%`, with the same lightness values, the colors would have all been the same shade of grey. In this example, they are almost grey.

### Hues in oklch

The following example shows swatches with different `H` (hue) values of the `oklch()` functional notation.

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
  background-color: oklch(50% 0.4 0deg);
}
[data-color="20"] {
  background-color: oklch(50% 0.4 20deg);
}
[data-color="40"] {
  background-color: oklch(50% 0.4 40deg);
}
[data-color="60"] {
  background-color: oklch(50% 0.4 60deg);
}
```

and so on.

```css hidden
[data-color="80"] {
  background-color: oklch(50% 0.4 80deg);
}
[data-color="100"] {
  background-color: oklch(50% 0.4 100deg);
}
[data-color="120"] {
  background-color: oklch(50% 0.4 120deg);
}
[data-color="140"] {
  background-color: oklch(50% 0.4 140deg);
}
[data-color="160"] {
  background-color: oklch(50% 0.4 160deg);
}
[data-color="180"] {
  background-color: oklch(50% 0.4 180deg);
}
[data-color="200"] {
  background-color: oklch(50% 0.4 200deg);
}
[data-color="220"] {
  background-color: oklch(50% 0.4 220deg);
}
[data-color="240"] {
  background-color: oklch(50% 0.4 240deg);
}
[data-color="260"] {
  background-color: oklch(50% 0.4 260deg);
}
[data-color="280"] {
  background-color: oklch(50% 0.4 280deg);
}
[data-color="300"] {
  background-color: oklch(50% 0.4 300deg);
}
[data-color="320"] {
  background-color: oklch(50% 0.4 320deg);
}
[data-color="340"] {
  background-color: oklch(50% 0.4 340deg);
}
[data-color="360"] {
  background-color: oklch(50% 0.4 360deg);
}
```

#### Result

{{EmbedLiveSample("hues in oklch")}}

The hue angles in `oklch()` are different from those in {{CSSXref("color_value/hsl", "hsl()")}}. See {{cssxref("hue")}} for more information. In `hsl()`, the sRGB color `0deg` represents red. However, in the CIELab color space, `0deg` corresponds to magenta, while red is approximately `41deg`.

### Adjusting the alpha value of a color

The following example shows the effect of varying the `A` (alpha) value of the `oklch()` color function.
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
  background-color: oklch(100% 0.57 217);
  width: 150px;
  height: 40px;
}
```

```css
[data-color="red"] {
  background-color: oklch(50% 0.5 20);
}
[data-color="red-alpha"] {
  background-color: oklch(50% 0.5 20 / 0.4);
}
```

#### Result

{{EmbedLiveSample("adjusting_the_alpha_value_of_a_color")}}

### Using relative colors with oklch()

This example styles three {{htmlelement("div")}} elements with different background colors. The middle one is given the unmodified `--base-color`, while the left and right ones are given lightened and darkened variants of that `--base-color`.

These variants are defined using relative colors — the `--base-color` [custom property](/en-US/docs/Web/CSS/--*) is passed into an `oklch()` function, and the output colors have their lightness channel modified to achieve the desired effect via a `calc()` function. The lightened color has `0.15` (15%) added to the lightness channel, and the darkened color has `0.15` (15%) subtracted from the lightness channel.

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
  background-color: oklch(from var(--base-color) calc(l + 0.15) c h);
}

#two {
  background-color: var(--base-color);
}

#three {
  background-color: oklch(from var(--base-color) calc(l - 0.15) c h);
}
```

#### Result

The output is as follows:

{{ EmbedLiveSample("Using relative colors with oklch()", "100%", "200") }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [List of all color notations](/en-US/docs/Web/CSS/color_value)
- [Using relative colors](/en-US/docs/Web/CSS/CSS_colors/Relative_colors)
- [CSS colors](/en-US/docs/Web/CSS/CSS_colors) module
- {{CSSXref("&lt;hue&gt;")}} data type
- {{cssxref("color_value/lch","lch()")}} and {{cssxref("color_value/oklab","oklab()")}} color functions
- [Interactive post on OKLCH color space](https://abhisaha.com/blog/interactive-post-oklch-color-space) (2024)
- [OKLCH in CSS: why we moved from RGB and HSL](https://evilmartians.com/chronicles/oklch-in-css-why-quit-rgb-hsl) (2024)
- [A perceptual color space for image processing](https://bottosson.github.io/posts/oklab/) (2020)
