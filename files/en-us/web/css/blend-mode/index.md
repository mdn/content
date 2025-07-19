---
title: <blend-mode>
slug: Web/CSS/blend-mode
page-type: css-type
browser-compat: css.types.blend-mode
sidebar: cssref
---

The **`<blend-mode>`** [CSS](/en-US/docs/Web/CSS) [data type](/en-US/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) describes how colors should appear when elements overlap. It is used in the {{cssxref("background-blend-mode")}} and {{cssxref("mix-blend-mode")}} properties.

## Syntax

The `<blend-mode>` data type is defined using a keyword value chosen from the list below.

### Values

- `normal`
  - : The final color is the top color, regardless of what the bottom color is.
    The effect is like two opaque pieces of paper overlapping.
- `multiply`
  - : The final color is the result of multiplying the top and bottom colors.
    A black layer leads to a black final layer, and a white layer leads to no change.
    The effect is like two images printed on transparent film overlapping.
- `screen`
  - : The final color is the result of inverting the colors, multiplying them, and inverting that value.
    A black layer leads to no change, and a white layer leads to a white final layer.
    The effect is like two images shone onto a projection screen.
- `overlay`
  - : The final color is the result of `multiply` if the bottom color is darker, or `screen` if the bottom color is lighter.
    This blend mode is equivalent to `hard-light` but with the layers swapped.
- `darken`
  - : The final color is composed of the darkest values of each color channel.
- `lighten`
  - : The final color is composed of the lightest values of each color channel.
- `color-dodge`
  - : The final color is the result of dividing the bottom color by the inverse of the top color.
    A black foreground leads to no change. A foreground with the inverse color of the backdrop leads to a fully lit color.
    This blend mode is similar to `screen`, but the foreground need only be as light as the inverse of the backdrop to create a fully lit color.
- `color-burn`
  - : The final color is the result of inverting the bottom color, dividing the value by the top color, and inverting that value.
    A white foreground leads to no change. A foreground with the inverse color of the backdrop leads to a black final image.
    This blend mode is similar to `multiply`, but the foreground need only be as dark as the inverse of the backdrop to make the final image black.
- `hard-light`
  - : The final color is the result of `multiply` if the top color is darker, or `screen` if the top color is lighter.
    This blend mode is equivalent to `overlay` but with the layers swapped.
    The effect is similar to shining a _harsh_ spotlight on the backdrop.
- `soft-light`
  - : The final color is similar to `hard-light`, but softer.
    This blend mode behaves similar to `hard-light`.
    The effect is similar to shining a _diffused_ spotlight on the backdrop.
- `difference`
  - : The final color is the result of subtracting the darker of the two colors from the lighter one.
    A black layer has no effect, while a white layer inverts the other layer's color.
- `exclusion`
  - : The final color is similar to `difference`, but with less contrast.
    As with `difference`, a black layer has no effect, while a white layer inverts the other layer's color.
- `hue`
  - : The final color has the _hue_ of the top color, while using the _saturation_ and _luminosity_ of the bottom color.
- `saturation`
  - : The final color has the _saturation_ of the top color, while using the _hue_ and _luminosity_ of the bottom color.
    A pure gray backdrop, having no saturation, will have no effect.
- `color`
  - : The final color has the _hue_ and _saturation_ of the top color, while using the _luminosity_ of the bottom color.
    The effect preserves gray levels and can be used to colorize the foreground.
- `luminosity`
  - : The final color has the _luminosity_ of the top color, while using the _hue_ and _saturation_ of the bottom color.
    This blend mode is equivalent to `color`, but with the layers swapped.

## Description

For each pixel among the layers to which it is applied, a blend mode takes the colors of the foreground and the background, performs a calculation on them, and returns a new color value.

Changes between blend modes are not interpolated. Any change occurs immediately.

## Formal syntax

{{csssyntax}}

## Examples

### Example using "normal"

```html hidden
<div id="div"></div>
```

```css
#div {
  width: 150px;
  height: 150px;
  background: url("br.png"), url("tr.png");
  background-blend-mode: normal;
}
```

Set other values for `background-blend-mode`, you will get different results.

{{ EmbedLiveSample('Example using "normal"', "300", "300") }}

### Comparison between different values with `background-blend-mode`

```html hidden
<div class="container"></div>
```

```css
.container {
  width: 720px;
  height: 760px;
  display: grid;
  grid: auto-flow 190px / repeat(4, 180px);
  border-top: 1px solid #d8d8d8;
  border-left: 1px solid #d8d8d8;
}

.container > div {
  border-right: 1px solid #d8d8d8;
  border-bottom: 1px solid #d8d8d8;
}

.container div div {
  margin-left: 15px;
  width: 150px;
  height: 150px;
  background: url("br.png"), url("tr.png");
}

.container div p {
  line-height: 30px;
  margin: 0;
  color: #a33333;
  text-align: center;
}
```

```js
const list = [
  "normal",
  "multiply",
  "screen",
  "overlay",
  "darken",
  "lighten",
  "color-dodge",
  "color-burn",
  "hard-light",
  "soft-light",
  "difference",
  "exclusion",
  "hue",
  "saturation",
  "color",
  "luminosity",
];

const containerElem = document.querySelector(".container");

list.forEach((item) => {
  const innerElem = document.createElement("div");
  innerElem.style.backgroundBlendMode = item;

  const textElem = document.createElement("p");
  textElem.innerText = item;

  const outerElem = document.createElement("div");
  outerElem.appendChild(textElem);
  outerElem.appendChild(innerElem);

  containerElem.appendChild(outerElem);
});
```

Create multiple `div` elements by traversaing a list and set different `backgroundBlendMode` value for each.

{{ EmbedLiveSample('Comparison between different values with `background-blend-mode`', "720", "760") }}

### Comparison between different values with `mix-blend-mode`

```html hidden
<div class="container"></div>
```

```css hidden
.container {
  width: 640px;
  height: 800px;
  display: grid;
  grid: auto-flow 160px / repeat(4, 160px);
  border-top: 1px solid #d8d8d8;
  border-left: 1px solid #d8d8d8;
}

.container > div {
  border-right: 1px solid #d8d8d8;
  border-bottom: 1px solid #d8d8d8;
}

.container > div > div {
  position: relative;
  margin-left: 20px;
  width: 120px;
  height: 120px;
}

.container div p {
  margin: 0;
  line-height: 30px;
  color: #a33333;
  text-align: center;
}
.circle {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  mix-blend-mode: screen;
  position: absolute;
}

.circle-1 {
  background: red;
}

.circle-2 {
  background: lightgreen;
  left: 40px;
}

.circle-3 {
  background: blue;
  left: 20px;
  top: 40px;
}

.isolate {
  isolation: isolate; /* Without isolation, the background color will be taken into account */
  position: relative;
}
```

```js hidden
const list = [
  "normal",
  "multiply",
  "screen",
  "overlay",
  "darken",
  "lighten",
  "color-dodge",
  "color-burn",
  "hard-light",
  "soft-light",
  "difference",
  "exclusion",
  "hue",
  "saturation",
  "color",
  "luminosity",
  "plus-darker",
  "plus-lighter",
];

const containerElem = document.querySelector(".container");

list.forEach((item) => {
  const innerElem = document.createElement("div");
  innerElem.innerHTML = `
    <div class="circle circle-1"></div>
    <div class="circle circle-2"></div>
    <div class="circle circle-3"></div>
  `;

  innerElem.querySelectorAll(".circle").forEach((circle) => {
    circle.style.mixBlendMode = item;
  });

  const textElem = document.createElement("p");
  textElem.innerText = item;

  const outerElem = document.createElement("div");
  outerElem.appendChild(textElem);
  outerElem.appendChild(innerElem);

  containerElem.appendChild(outerElem);
});
```

In the following example, we create multiple `div` elements by traversaing a list and set different `mixBlendMode` value for each.

{{ EmbedLiveSample('Comparison between different values with `mix-blend-mode`', "640", "800") }}

### Blend mode comparison

In the following example, we have a `<div>` with two background images set on it — a Firefox logo on top of a linear gradient. Below it, we have a provided a `<select>` menu that allows you to change the `background-blend-mode` applied to the `<div>`, allowing you to compare the different blend mode effects.

#### HTML

```html
<div></div>
<p>Choose a blend-mode:</p>
<select>
  <option selected>normal</option>
  <option>multiply</option>
  <option>screen</option>
  <option>overlay</option>
  <option>darken</option>
  <option>lighten</option>
  <option>color-dodge</option>
  <option>color-burn</option>
  <option>hard-light</option>
  <option>soft-light</option>
  <option>difference</option>
  <option>exclusion</option>
  <option>hue</option>
  <option>saturation</option>
  <option>color</option>
  <option>luminosity</option>
</select>
```

#### CSS

```css
div {
  width: 300px;
  height: 300px;
  background:
    url(https://mdn.dev/archives/media/attachments/2020/07/29/17350/3b4892b7e820122ac6dd7678891d4507/firefox.png)
      no-repeat center,
    linear-gradient(to bottom, blue, orange);
}
```

#### JavaScript

```js
const selectElem = document.querySelector("select");
const divElem = document.querySelector("div");

selectElem.addEventListener("change", () => {
  divElem.style.backgroundBlendMode = selectElem.value;
});
```

#### Result

{{EmbedLiveSample('Blend_mode_comparison', '100%', 400)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [CSS compositing and blending](/en-US/docs/Web/CSS/CSS_compositing_and_blending) module that defines the `<blend-mode>` values.
- Properties that use this data type: {{cssxref("background-blend-mode")}}, {{cssxref("mix-blend-mode")}}

Description to various blend modes on other website:

- [Blend modes](https://en.wikipedia.org/wiki/Blend_modes) on Wikipedia
- [Blending modes in Adobe Photoshop](https://helpx.adobe.com/photoshop/using/blending-modes.html) by Adobe
