---
title: <color>
slug: Web/CSS/color_value
page-type: css-type
browser-compat: css.types.color
---

{{CSSRef}}

The **`<color>`** [CSS](/en-US/docs/Web/CSS) [data type](/en-US/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) represents a color.
A `<color>` may also include an [alpha-channel](https://en.wikipedia.org/wiki/Alpha_compositing) _transparency value_, indicating how the color should [composite](https://www.w3.org/TR/compositing-1/#simplealphacompositing) with its background.

> [!NOTE]
> Although `<color>` values are precisely defined, their actual appearance may vary (sometimes significantly) from device to device. This is because most devices are not calibrated, and some browsers do not support output devices' [color profiles](https://en.wikipedia.org/wiki/ICC_profile).

## Syntax

```css
/* Named colors */
rebeccapurple
aliceblue

/* RGB Hexadecimal */
#f09
#ff0099

/* RGB (Red, Green, Blue) */
rgb(255 0 153)
rgb(255 0 153 / 80%)

/* HSL (Hue, Saturation, Lightness) */
hsl(150 30% 60%)
hsl(150 30% 60% / 80%)

/* HWB (Hue, Whiteness, Blackness) */
hwb(12 50% 0%)
hwb(194 0% 0% / 0.5)

/* LAB (Lightness, A-axis, B-axis) */
lab(50% 40 59.5)
lab(50% 40 59.5 / 0.5)

/* LCH (Lightness, Chroma, Hue) */
lch(52.2% 72.2 50)
lch(52.2% 72.2 50 / 0.5)

/* Oklab (Lightness, A-axis, B-axis) */
oklab(59% 0.1 0.1)
oklab(59% 0.1 0.1 / 0.5)

/* Oklch (Lightness, Chroma, Hue) */
oklch(60% 0.15 50)
oklch(60% 0.15 50 / 0.5)

/* Relative CSS colors */
/* HSL hue change */
hsl(from red 240deg s l)
/* HWB alpha channel change */
hwb(from green h w b / 0.5)
/* LCH lightness change */
lch(from blue calc(l + 20) c h)

/* light-dark */
light-dark(white, black)
light-dark(rgb(255 255 255), rgb(0 0 0))
```

A `<color>` value can be specified using one of the methods listed below:

- By keywords: {{CSSXref("&lt;named-color&gt;")}} (such as `blue` or `pink`), {{CSSXref("&lt;system-color&gt;")}}, and [`currentcolor`](#currentcolor_keyword).
- By hexadecimal notations: {{CSSXref("&lt;hex-color&gt;")}} (such as `#ff0000`).
- By `<color-function>`, with parameters in a {{glossary("color space")}} using functional notations:
  - [sRGB](https://en.wikipedia.org/wiki/SRGB) color space: {{CSSXref("color_value/hsl", "hsl()")}}, {{CSSXref("color_value/hwb", "hwb()")}}, and {{CSSXref("color_value/rgb", "rgb()")}}.
  - [CIELAB](https://en.wikipedia.org/wiki/CIELAB_color_space) color space: {{CSSXref("color_value/lab", "lab()")}} and {{CSSXref("color_value/lch", "lch()")}}.
  - [Oklab](https://bottosson.github.io/posts/oklab/) color space: {{CSSXref("color_value/oklab", "oklab()")}} and {{CSSXref("color_value/oklch", "oklch()")}}.
  - Other color spaces: {{CSSXref("color_value/color", "color()")}}.
- By using [relative color](/en-US/docs/Web/CSS/CSS_colors/Relative_colors) syntax to output a new color based on an existing color. Any of the above color functions can take an **origin color** preceded by the `from` keyword and followed by definitions of the channel values for the new **output color**.
- By mixing two colors: {{CSSXref("color_value/color-mix", "color-mix()")}}.
- By specifying two colors, using the first for light color-schemes and the second for dark color-schemes: {{CSSXref("color_value/light-dark", "light-dark()")}}.

### `currentcolor` keyword

The `currentcolor` keyword represents the value of an element's {{Cssxref("color")}} property. This lets you use the `color` value on properties that do not receive it by default.

If `currentcolor` is used as the value of the `color` property, it instead takes its value from the inherited value of the `color` property.

```html
<div style="color: blue; border: 1px dashed currentcolor;">
  The color of this text is blue.
  <div style="background: currentcolor; height:9px;"></div>
  This block is surrounded by a blue border.
</div>
```

{{EmbedLiveSample("currentcolor_keyword", "100%", 80)}}

### Missing color components

Each component of any CSS color functions - except for those using the legacy comma-separated syntax - can be specified as the keyword `none` to be a missing component.

Explicitly specifying [missing components in color interpolation](#interpolation_with_missing_components) is useful for cases where you would like to {{glossary("interpolation", "interpolate")}} some color components but not others. For all other purposes, a missing component will effectively have a zero value in an appropriate unit: `0`, `0%`, or `0deg`. For example, the following colors are equivalent when used outside of interpolation:

```css
/* These are equivalent */
color: oklab(50% none -0.25);
color: oklab(50% 0 -0.25);

/* These are equivalent */
background-color: hsl(none 100% 50%);
background-color: hsl(0deg 100% 50%);
```

## Interpolation

Color interpolation happens with [gradients](/en-US/docs/Web/CSS/gradient), [transitions](/en-US/docs/Web/CSS/CSS_transitions/Using_CSS_transitions), and [animations](/en-US/docs/Web/CSS/CSS_animations/Using_CSS_animations).

When interpolating `<color>` values, they are first converted to a given color space, and then each component of the [computed values](/en-US/docs/Web/CSS/CSS_cascade/computed_value) are interpolated linearly, with interpolation's speed being determined by the [easing function](/en-US/docs/Web/CSS/easing-function) in transitions and animations. The interpolation color space defaults to Oklab, but can be overridden through {{CSSXref("&lt;color-interpolation-method&gt;")}} in some color-related functional notations.

### Interpolation with missing components

#### Interpolating colors in the same space

When interpolating colors that are exactly in the interpolation color space, missing components from one color are replaced with existing values of the same components from the other color.
For example, the following two expressions are equivalent:

```css
color-mix(in oklch, oklch(none 0.2 10), oklch(60% none 30))
color-mix(in oklch, oklch(60% 0.2 10), oklch(60% 0.2 30))
```

> [!NOTE]
> If a component is missing from both colors, this component will be missing after the interpolation.

#### Interpolating colors from different spaces: analogous components

If any color to be interpolated is not in the interpolation color space, its missing components are transferred into the converted color based on **analogous components** of the same category as described in the following table:

| Category     | Analogous components |
| ------------ | -------------------- |
| Reds         | `R`, `X`             |
| Greens       | `G`, `Y`             |
| Blues        | `B`, `Z`             |
| Lightness    | `L`                  |
| Colorfulness | `C`, `S`             |
| Hue          | `H`                  |
| a            | `a`                  |
| b            | `b`                  |

For example:

- `X` (`0.2`) in `color(xyz 0.2 0.1 0.6)` is analogous to `R` (`50%`) in `rgb(50% 70% 30%)`.
- `H` (`0deg`) in `hsl(0deg 100% 80%)` is analogous to `H` (`140`) in `oklch(80% 0.1 140)`.

Using Oklch as the interpolation color space and the two colors below as an example:

```css
lch(80% 30 none)
color(display-p3 0.7 0.5 none)
```

The preprocessing procedure is:

1. Replace the missing components in both colors with a zero value:

   ```css
   lch(80% 30 0)
   color(display-p3 0.7 0.5 0)
   ```

2. Convert both colors into the interpolation color space:

   ```css
   oklch(83.915% 0.0902 0.28)
   oklch(63.612% 0.1522 78.748)
   ```

3. If any component of the converted colors is analogous to a missing component in the corresponding original color, reset it as a missing component:

   ```css
   oklch(83.915% 0.0902 none)
   oklch(63.612% 0.1522 78.748)
   ```

4. Replace any missing component with the same component from the other converted color:

   ```css
   oklch(83.915% 0.0902 78.748)
   oklch(63.612% 0.1522 78.748)
   ```

## Accessibility

Some people have difficulty distinguishing colors. The [WCAG 2.2](/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Use_of_color) recommendation strongly advises against using color as the only means of conveying a specific message, action, or result. See [color and color contrast](/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast) for more information.

## Formal syntax

{{csssyntax}}

## Examples

### Exploring color values

In this example, we provide a `<div>` and a text input. Entering a valid color into the input causes the `<div>` to adopt that color, allowing you to test our color values.

#### HTML

```html
<div></div>
<hr />
<label for="color">Enter a valid color value:</label>
<input type="text" id="color" />
```

```css hidden
div {
  height: 200px;
  width: 200px;
}
```

```js hidden
const inputElem = document.querySelector("input");
const divElem = document.querySelector("div");

function validTextColor(stringToTest) {
  if (stringToTest === "inherit" || stringToTest === "transparent") {
    return false;
  }

  const div = document.createElement("div");
  div.style.color = stringToTest;
  return !!div.style.color;
}

inputElem.addEventListener("input", () => {
  if (validTextColor(inputElem.value)) {
    divElem.style.backgroundColor = inputElem.value;
    divElem.textContent = "";
  } else {
    divElem.removeAttribute("style");
    divElem.textContent = "Invalid color value";
  }
});
```

#### Result

{{EmbedLiveSample("exploring_color_values", "100%", 300)}}

### Generating fully saturated sRGB colors

This example shows fully saturated sRGB colors in the sRGB color space.

#### HTML

```html
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
```

#### CSS

```css hidden
body {
  display: flex;
  flex-wrap: wrap;
}
div {
  height: 80px;
  margin: 10px;
  width: 80px;
}
```

```css
div:nth-child(1) {
  background-color: hsl(0 100% 50%);
}
div:nth-child(2) {
  background-color: hsl(30 100% 50%);
}
div:nth-child(3) {
  background-color: hsl(60 100% 50%);
}
div:nth-child(4) {
  background-color: hsl(90 100% 50%);
}
div:nth-child(5) {
  background-color: hsl(120 100% 50%);
}
div:nth-child(6) {
  background-color: hsl(150 100% 50%);
}
div:nth-child(7) {
  background-color: hsl(180 100% 50%);
}
div:nth-child(8) {
  background-color: hsl(210 100% 50%);
}
div:nth-child(9) {
  background-color: hsl(240 100% 50%);
}
div:nth-child(10) {
  background-color: hsl(270 100% 50%);
}
div:nth-child(11) {
  background-color: hsl(300 100% 50%);
}
div:nth-child(12) {
  background-color: hsl(330 100% 50%);
}
```

#### Result

{{EmbedLiveSample("generating_fully_saturated_sRGB_colors", "100%", 200)}}

### Creating different shades of red

This example shows reds of different shades in the sRGB color space.

#### HTML

```html
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
```

#### CSS

```css hidden
body {
  display: flex;
  flex-wrap: wrap;
}
div {
  box-sizing: border-box;
  height: 80px;
  margin: 10px;
  width: 80px;
}
```

```css
div:nth-child(1) {
  background-color: hsl(0 100% 0%);
}
div:nth-child(2) {
  background-color: hsl(0 100% 20%);
}
div:nth-child(3) {
  background-color: hsl(0 100% 40%);
}
div:nth-child(4) {
  background-color: hsl(0 100% 60%);
}
div:nth-child(5) {
  background-color: hsl(0 100% 80%);
}
div:nth-child(6) {
  background-color: hsl(0 100% 100%);
  border: solid;
}
```

#### Result

{{EmbedLiveSample("creating_different_shades_of_red", "100%", 150)}}

### Creating reds of different saturation

This example shows reds of different saturations in the sRGB color space.

#### HTML

```html
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
```

#### CSS

```css hidden
body {
  display: flex;
  flex-wrap: wrap;
}
div {
  height: 80px;
  margin: 10px;
  width: 80px;
}
```

```css
div:nth-child(1) {
  background-color: hsl(0 0% 50%);
}
div:nth-child(2) {
  background-color: hsl(0 20% 50%);
}
div:nth-child(3) {
  background-color: hsl(0 40% 50%);
}
div:nth-child(4) {
  background-color: hsl(0 60% 50%);
}
div:nth-child(5) {
  background-color: hsl(0 80% 50%);
}
div:nth-child(6) {
  background-color: hsl(0 100% 50%);
}
```

#### Result

{{EmbedLiveSample("creating_reds_of_different_saturation", "100%", 150)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{CSSXref("opacity")}}: the property defining transparency at the element level
- {{CSSXref("&lt;hue&gt;")}}: the data type representing the hue angle of a color
- {{CSSXref("color")}}, {{CSSXref("background-color")}}, {{CSSXref("border-color")}}, {{CSSXref("box-shadow")}}, {{CSSXref("outline-color")}}, {{CSSXref("text-shadow")}}: common properties that use `<color>`
- [Applying color to HTML elements using CSS](/en-US/docs/Web/CSS/CSS_colors/Applying_color)
- [Using relative colors](/en-US/docs/Web/CSS/CSS_colors/Relative_colors)
- [New functions, gradients, and hues in CSS colors (Level 4)](/en-US/blog/css-color-module-level-4/) on MDN blog (2023)
