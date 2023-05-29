---
title: <color>
slug: Web/CSS/color_value
page-type: css-type
browser-compat: css.types.color
---

{{CSSRef}}

The **`<color>`** [CSS](/en-US/docs/Web/CSS) [data type](/en-US/docs/Web/CSS/CSS_Types) represents a color.
A `<color>` may also include an [alpha-channel](https://en.wikipedia.org/wiki/Alpha_compositing) _transparency value_, indicating how the color should [composite](https://www.w3.org/TR/compositing-1/#simplealphacompositing) with its background.

> **Note:** Although `<color>` values are precisely defined, their actual appearance may vary (sometimes significantly) from device to device. This is because most devices are not calibrated, and some browsers do not support output devices' [color profiles](https://en.wikipedia.org/wiki/ICC_profile).

## Syntax

A `<color>` value can be specified using one of the methods listed below:

- By keyword: {{CSSXref("&lt;named-color&gt;")}}, {{CSSXref("&lt;system-color&gt;")}}, and [`currentcolor`](#currentcolor_keyword).
- By paramters in a color space:
  - [sRGB](https://en.wikipedia.org/wiki/SRGB) color space: {{CSSXref("color_value/hsl", "hsl()")}}, {{CSSXref("color_value/hwb", "hwb()")}}, {{CSSXref("color_value/rgb", "rgb()")}};
  - [CIELAB](https://en.wikipedia.org/wiki/CIELAB_color_space) color space: {{CSSXref("color_value/lab", "lab()")}}, {{CSSXref("color_value/lch", "lch()")}};
  - [Oklab](https://bottosson.github.io/posts/oklab/) color space: {{CSSXref("color_value/oklab", "oklab()")}}, {{CSSXref("color_value/oklch", "oklch()")}};
  - Other color spaces: {{CSSXref("color_value/color", "color()")}}.
- By mixing two colors: {{CSSXref("color_value/color-mix", "color-mix()")}}.

### currentcolor keyword

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

## Interpolation

Color interpolation happens with [gradients](/en-US/docs/Web/CSS/gradient), [transitions](/en-US/docs/Web/CSS/CSS_transitions/Using_CSS_transitions), and [animations](/en-US/docs/Web/CSS/CSS_animations/Using_CSS_animations).

When interpolating `<color>` values, they are first converted to a given color space, and then each component of the [computed values](/en-US/docs/Web/CSS/computed_value) are interpolated linearly. The interpolation color space defaults to Oklab, but can be overriden through {{CSSXref("&lt;color-interpolation-method&gt;")}} in some color-related functional notations.

## Accessibility considerations

Some people have difficulty distinguishing colors. The [WCAG 2.0](/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Use_of_color) recommendation strongly advises against using color as the only means of conveying a specific message, action, or result. See [color and color contrast](/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast) for more information.

## Formal syntax

{{csssyntax}}

## Examples

### Color value tester

In this example we provide a `<div>` and a text input. Entering a valid color into the input causes the `<div>` to adopt that color, allowing you to test our color values.

#### HTML

```html
<div></div>
<hr />
<label for="color">Enter a valid color value:</label>
<input type="text" id="color" />
```

#### CSS

```css
div {
  width: 100%;
  height: 200px;
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

{{EmbedLiveSample("color_value_tester", "100%", 300)}}

### Reds of different shades

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
div {
  display: inline-block;
  margin: 10px;
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
}
```

#### Result

{{EmbedLiveSample("reds_of_different_shades", "100%", 200)}}

### Reds of different saturations

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
div {
  display: inline-block;
  margin: 10px;
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

{{EmbedLiveSample("reds_of_different_saturations", "100%", 200)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{CSSXref("opacity")}}: the property defining transparency at the element level
- {{CSSXref("&lt;hue&gt;")}}: the data type representing the hue angle of a color
- {{CSSXref("color")}}, {{CSSXref("background-color")}}, {{CSSXref("border-color")}}, {{CSSXref("box-shadow")}}, {{CSSXref("outline-color")}}, {{CSSXref("text-shadow")}}: common properties that use `<color>`
- [Applying color to HTML elements using CSS](/en-US/docs/Web/CSS/CSS_colors/Applying_color)
- [New functions, gradients, and hues in CSS colors (Level 4)](/en-US/blog/css-color-module-level-4/) on MDN blog (May 3, 2023)
