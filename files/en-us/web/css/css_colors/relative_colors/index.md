---
title: Using relative colors
slug: Web/CSS/CSS_colors/Relative_colors
page-type: guide
---

{{CSSRef}}

The [CSS Color Module Level 5](https://drafts.csswg.org/css-color-5) specification defines **relative color syntax**, which allows CSS {{cssxref("&lt;color&gt;")}} values to be defined relative to other existing colors, rather than defining a color value from scratch each time. This is a very powerful feature that enables easy creation of complements to existing colors — such as lighter, darker, saturated, semi-transparent, or inverted variants — paving the way towards more effective color palette creation.

This article explains the syntax, shows what the different options are, and looks at some illustrative examples.

## General syntax

A relative CSS color value looks something like this:

```text
rgb(from red r g b)
rgb(from red r g b / alpha)
```

1. You pass an **originating color** into a CSS color function, preceded by the `from` keyword. This can be any {{cssxref("&lt;color&gt;")}} value, including a color value contained in a [CSS custom property](/en-US/docs/Web/CSS/Using_CSS_custom_properties).
2. This causes supporting browsers to destructure the originating color into its component color channels (plus, optionally, the alpha channel) as represented in the color system you are passing the color in to. These are made available as appropriately-named values inside the color function — `r`, `g`, and `b` in this case.
3. The color components of the new color are then defined after the originating color — these could be static values, or values based on the originating color's channel values.

Let's look at relative syntax in action. The below CSS is used to style two {{htmlelement("div")}} elements, one with a absolute background color — `red` — and one with a relative background color created with the `rgb()` function, based on the same `red` keyword value:

```html hidden
<div id="container">
  <div class="item" id="one"></div>
  <div class="item" id="two"></div>
</div>
```

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
#one {
  background-color: red;
}

#two {
  background-color: rgb(from red 200 g b);
}
```

The output is as follows:

{{ EmbedLiveSample("General syntax", "100%", "200") }}

The relative color uses the [`rgb()`](/en-US/docs/Web/CSS/color_value/rgb) function, takes `red` as an input (equivalent to `rgb(255 0 0)`), and then defines the new color as having an `r` channel of value `200` and `g` and `b` channels with a value the same as the input color (the `g` and `b` values). This results in a slightly darker red. If we had specified an `r` channel value of `255` (or just the `r` value), the resulting output color would be exactly the same as the input value.

```text
/* These four all produce an equivalent output */
red
rgb(255 0 0)
rgb(from red r g b)
rgb(from red 255 g b)
```

## Syntax flexibility

There is an important distinction to be made between the destructured channel values made available in the function, and the channel values of the output color set by the developer.

Take `rgb(from red r g b)` as an example. When a relative color is defined via an `rgb()` function, its red, green, and blue channel values are made available in the `r`, `g`, and `b` values, but when specifying the output values, you don't need to use these values at all. You need to provide the channel values in the right order, and they can be any value values you wish, giving relative CSS colors a high degree of flexibility.

For example, if you wanted to, you could transform red into blue, like so:

```css
rgb(from red 0 0 255)
/* output color is rgb(0 0 255), full blue */
```

You can even mix up or repeat the provided values. The following takes a slightly darker red as an input and outputs a light gray color with the channels all defined by the input color's `r` channel value:

```css
rgb(from rgb(200 0 0) r r r)
/* output color is rgb(200 200 200), light gray */
```

The following reverses the order of the channel values:

```css
rgb(from rgb(200 170 0) b g r)
/* output color is rgb(0 170 200) */
```

## Color functions that support relative colors

In the section above we only saw relative colors defined via the [`rgb()`](/en-US/docs/Web/CSS/color_value/rgb) function. However, relative colors can be defined using any modern CSS function — [`color()`](/en-US/docs/Web/CSS/color_value/color), [`hsl()`](/en-US/docs/Web/CSS/color_value/hsl), [`hwb()`](/en-US/docs/Web/CSS/color_value/hwb), [`lab()`](/en-US/docs/Web/CSS/color_value/lab), [`lch()`](/en-US/docs/Web/CSS/color_value/lch), [`oklab()`](/en-US/docs/Web/CSS/color_value/oklab), [`oklch()`](/en-US/docs/Web/CSS/color_value/oklch), or [`rgb()`](/en-US/docs/Web/CSS/color_value/rgb). The syntax structure is exactly the same in each case — the only thing that differs is the names of the provided originating color channel values.

Relative color examples follow of each. Each case is the simplest possible, with the output channels exactly matching the originating color channels:

```css
/* color() with and without alpha channel */
color(from red a98-rgb r g b)
color(from red a98-rgb r g b / alpha)

/* hsl() with and without alpha channel */
hsl(from red h s l)
hsl(from red h s l / alpha)

/* hwb() with and without alpha channel */
hwb(from red h w b)
hwb(from red h w b / alpha)

/* lab() with and without alpha channel */
lab(from red l a b)
lab(from red l a b / alpha)

/* lch() with and without alpha channel */
lch(from red l c h)
lch(from red l c h / alpha)

/* oklab() with and without alpha channel */
oklab(from red l a b)
oklab(from red l a b / alpha)

/* oklch() with and without alpha channel */
oklch(from red l c h)
oklch(from red l c h / alpha)

/* rgb() with and without alpha channel */
rgb(from red r g b)
rgb(from red r g b / alpha)
```

As you can see from the above example, the color system of the originating color doesn't need to match the color system being used to create the output color. Again, this provides a lot of flexibility — generally you won't be interested in (and might not even know) the system a color is defined in. You'll just want to grab the color and, for example, create a lighter variant of it by putting it into an `hsl()` function and varying the lightness (`l`) value.

> **Note:** Although included in the specification, current implementations don't allow relative colors to be defined via the legacy `rgba()` and `hsla()` functions.

## Using custom properties

When creating a relative color, you can use values defined in [CSS custom properties](/en-US/docs/Web/CSS/Using_CSS_custom_properties) both for the originating color and when defining the output color channel values. Let's look at an example.

In the below CSS we define two custom properties:

- `--base-color` contains our base brand color, a nice purple.
- `--standard-opacity` contains the standard opacity value that we want to apply to semi-transparent boxes.

We then give two {{htmlelement("div")}} elements a background color. One is given an absolute color — our brand purple. The other one is given a relative color equal to our brand purple, transformed to have an alpha channel equal to our standard opacity value.

```html hidden
<div id="container">
  <div class="item" id="one"></div>
  <div class="item" id="two"></div>
</div>
```

```css hidden
#container {
  display: flex;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  background-image: repeating-linear-gradient(
    45deg,
    white,
    white 24px,
    black 25px,
    black 50px
  );
}

.item {
  flex: 1;
  margin: 20px;
}
```

```css
:root {
  --base-color: purple;
  --standard-opacity: 0.75;
}

#one {
  background-color: var(--base-color);
}

#two {
  background-color: hwb(from var(--base-color) h w b / var(--standard-opacity));
}
```

The output is as follows:

{{ EmbedLiveSample("Using custom properties", "100%", "200") }}

## Using math functions

You can use CSS math functions such as {{cssxref("calc()")}} to calculate values for the output color channels, in exactly the same way as you'd use them in other appropriate places in CSS. Let's look at an example.

The below CSS is used to style three {{htmlelement("div")}} elements with different background colors. The middle one is given the unmodified `--base-color`, while the left and right ones are given lightened and darkened variants of that `--base-color`. These variants are defined using relative colors — the `--base-color` is passed into an `lch()` function, and the output color has its `l` (lightness) channel modified to achieve the desired effect via a `calc()` function. The lightened color has 20% added to the lightness channel, and the darkened color has 20% subtracted from it.

```html hidden
<div id="container">
  <div class="item" id="one"></div>
  <div class="item" id="two"></div>
  <div class="item" id="three"></div>
</div>
```

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
  background-color: lch(from var(--base-color) calc(l + 20) c h);
}

#two {
  background-color: var(--base-color);
}

#three {
  background-color: lch(from var(--base-color) calc(l - 20) c h);
}
```

The output is as follows:

{{ EmbedLiveSample("Using math functions", "100%", "200") }}

## Checking for browser support

You can check that a browser supports relative color syntax by running through a {{cssxref("@supports")}} at-rule.

For example:

```css
@supports (color: hsl(from white h s l)) {
  /* safe to use relative color syntax */
}
```

## Examples

> **Note:** You can also find basic examples demonstrating the use of relative color syntax in the different functional notation types on their dedicated pages: [`color()`](/en-US/docs/Web/CSS/color_value/color#using_relative_colors_with_color), [`hsl()`](/en-US/docs/Web/CSS/color_value/hsl#using_relative_colors_with_hsl), [`hwb()`](/en-US/docs/Web/CSS/color_value/hwb#using_relative_colors_with_hwb), [`lab()`](/en-US/docs/Web/CSS/color_value/lab#using_relative_colors_with_lab), [`lch()`](/en-US/docs/Web/CSS/color_value/lch#using_relative_colors_with_lch), [`oklab()`](/en-US/docs/Web/CSS/color_value/oklab#using_relative_colors_with_oklab), [`oklch()`](/en-US/docs/Web/CSS/color_value/oklch#using_relative_colors_with_oklch), [`rgb()`](/en-US/docs/Web/CSS/color_value/rgb#using_relative_colors_with_rgb).

### Color palette generator

This example creates a basic color palette generator, which allows you to choose a base color and a color palette type. The browser will then show an appropriate palette of colors based on the chosen base color. The color palettes are as follows:

- Complementary: Includes two colors that are at opposite sides of a color wheel, or to put it another way, _opposite hues_ (see the {{cssxref("&lt;hue&gt;")}} data type for more information on hues and color wheels). To put it technically, the two colors would be base color, and base color with hue channel + 180 degrees.
- Triadic: Includes three colors equal distances apart around the color wheel. To put it technically, the three colors would be base color, base color with hue channel -120 degrees, and base color with hue channel +120 degrees.
- Tetradic: Includes four colors equal distances apart around the color wheel. To put it technically, the four colors would be base color, and base color with hue channel +90, +180, and +270 degrees.
- Monochrome: Includes multiple colors with the same hue, but varying lightness values. In our example we've defined five colors in a monochrome palette — base color, and base color with lightness channel -20, -10, +10, and +20.

#### HTML

The full HTML is included below for reference. The most interesting parts are:

- The `--base-color` custom property stored as an inline style on the {{htmlelement("div")}} element with the ID of `container`. We've placed it there so it is easy to update the value using JavaScript. We've provided an initial value of `#ff0000` (full red) so we can show a color palette based on it when the example first loads. Note that normally we'd probably set this on the {{htmlelement("html")}} element, but the MDN live sample was stripping it out from there during rendering.
- The base color picker, created using a [`<input type="color">`](/en-US/docs/Web/HTML/Element/input/color) control. When a new value is set in this control, the `--base-color` custom property is set to this value using JavaScript, which in turn generates a new color palette. All the displayed colors are relative colors based on `--base-color`.
- The set of [`<input type="radio">`](/en-US/docs/Web/HTML/Element/input/radio) controls that allow you to choose a color palette type to generate. When a new value is chosen here, JavaScript is used to set a new class on the `container` `<div>` to represent the chosen palette and generate the right number of child `<div>`s inside it to display the colors for that palette. In the CSS, descendant selectors are used to target the child `<div>`s (e.g. `.comp :nth-child(1)`) so they can have the correct colors applied to them.
- The aforementioned `container` `<div>` containing the child `<div>`s that display the colors of the generated palette. Note how an initial class of `comp` is set on it, so that the page will display a complementary color scheme when first loaded.

```html
<div>
  <h1>Color palette generator</h1>
  <form>
    <div id="color-picker">
      <label for="color">Select a base color:</label>
      <input type="color" id="color" name="color" value="#ff0000" />
    </div>
    <div>
      <fieldset>
        <legend>Select a color palette type:</legend>

        <div>
          <input
            type="radio"
            id="comp"
            name="palette-type"
            value="comp"
            checked />
          <label for="comp">Complementary</label>
        </div>

        <div>
          <input
            type="radio"
            id="triadic"
            name="palette-type"
            value="triadic" />
          <label for="triadic">Triadic</label>
        </div>

        <div>
          <input
            type="radio"
            id="tetradic"
            name="palette-type"
            value="tetradic" />
          <label for="tetradic">Tetradic</label>
        </div>

        <div>
          <input
            type="radio"
            id="monochrome"
            name="palette-type"
            value="monochrome" />
          <label for="monochrome">Monochrome</label>
        </div>
      </fieldset>
    </div>
  </form>
  <div id="container" class="comp" style="--base-color: #ff0000;">
    <div></div>
    <div></div>
  </div>
</div>
```

#### CSS

Below we are only showing the CSS that sets the palette colors. Note how, in each case, descendent selectors are used to apply the correct {{cssxref("background-color")}} to each child `<div>` for the chosen palette. We care more about the position of the `<div>`s in the source order than the type of element, so we have used {{cssxref(":nth-child()")}} to target them.

The colors themselves include the `--base-color`, plus relative colors derived from that `--base-color`. The relative colors use the [`lch()`](/en-US/docs/Web/CSS/color_value/lch) function — passing in the originating `--base-color` and defining an output color with an adjusted `l` (lightness) or `h` (hue) channel as appropriate.

```css hidden
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

h1 {
  margin-left: 16px;
}

/* Simple form styling */

#color-picker {
  margin-left: 16px;
  margin-bottom: 20px;
}

#color-picker label,
legend {
  display: block;
  font-size: 0.8rem;
  margin-bottom: 10px;
}

input[type="color"] {
  width: 200px;
  display: block;
}

fieldset {
  display: flex;
  gap: 20px;
  border: 0;
}

/* palette container styling */

#container {
  display: flex;
  width: 100vw;
  height: 250px;
  box-sizing: border-box;
}

#container div {
  flex: 1;
}
```

```css
/* complementary colors */
/* base color, and base color with hue channel + 180 degrees */

.comp :nth-child(1) {
  background-color: var(--base-color);
}

.comp :nth-child(2) {
  background-color: lch(from var(--base-color) l c calc(h + 180));
}

/* triadic colors */
/* base color, base color with hue channel - 120 degrees, and base color */
/* with hue channel + 120 degrees */

.triadic :nth-child(1) {
  background-color: var(--base-color);
}

.triadic :nth-child(2) {
  background-color: lch(from var(--base-color) l c calc(h - 120));
}

.triadic :nth-child(3) {
  background-color: lch(from var(--base-color) l c calc(h + 120));
}

/* tetradic colors */
/* base color, and base color with hue channel + 90, 180, and 270 degrees */

.tetradic :nth-child(1) {
  background-color: var(--base-color);
}

.tetradic :nth-child(2) {
  background-color: lch(from var(--base-color) l c calc(h + 90));
}

.tetradic :nth-child(3) {
  background-color: lch(from var(--base-color) l c calc(h + 180));
}

.tetradic :nth-child(4) {
  background-color: lch(from var(--base-color) l c calc(h + 270));
}

/* monochrome colors */
/* Base color, and base color with lightness channel -20, -10, +10, and +20 */

.monochrome :nth-child(1) {
  background-color: lch(from var(--base-color) calc(l - 20) c h);
}

.monochrome :nth-child(2) {
  background-color: lch(from var(--base-color) calc(l - 10) c h);
}

.monochrome :nth-child(3) {
  background-color: var(--base-color);
}

.monochrome :nth-child(4) {
  background-color: lch(from var(--base-color) calc(l + 10) c h);
}

.monochrome :nth-child(5) {
  background-color: lch(from var(--base-color) calc(l + 20) c h);
}
```

#### JavaScript

In the JavaScript, we:

- Add a [`change`](/en-US/docs/Web/API/HTMLElement/change_event) event listener to the radio buttons so that when one is selected, the `setContainer()` function runs. This function does three things:
  1. Updates the `class` value of the `<div>` with `id="container"` with the value of the selected radio button so that the correct background colors will be applied to the child `<div>`s for the chosen palette type.
  2. Removes the existing child `<div>`s from the `container` `<div>`.
  3. Adds the correct number of child `<div>`s back into the `container` `<div>` for the chosen palette type.
- Add an [`input`](/en-US/docs/Web/API/HTMLElement/input_event) event listener to the color picker control so that when a new color is selected, the `setBaseColor()` function runs. This function sets the `--base-color` custom property's value to the new color.

```js
const form = document.forms[0];
const radios = form.elements["palette-type"];
const colorPicker = form.elements["color"];
const containerElem = document.getElementById("container");

for (const radio of radios) {
  radio.addEventListener("change", setContainer);
}

colorPicker.addEventListener("input", setBaseColor);

function setContainer(e) {
  const palType = e.target.value;
  console.log("radio changed");
  containerElem.setAttribute("class", palType);

  containerElem.innerHTML = "";

  let num;
  if (palType === "comp") {
    num = 2;
  } else if (palType === "triadic") {
    num = 3;
  } else if (palType === "tetradic") {
    num = 4;
  } else {
    num = 5;
  }

  for (let i = 1; i <= num; i++) {
    const divElem = document.createElement("div");
    containerElem.append(divElem);
  }
}

function setBaseColor(e) {
  console.log("color changed");
  containerElem.style.setProperty("--base-color", e.target.value);
}
```

#### Output

The output is as follows. This starts to show the power of relative CSS colors — we are defining multiple colors and generating palettes that are updated live by adjusting a single custom property.

{{ EmbedLiveSample("Color palette generator", "100%", "470") }}

### Live UI color scheme updater

This example shows a card containing a heading and text, but with a twist — below the card is a slider ([`<input type="range">`](/en-US/docs/Web/HTML/Element/input/range)) control. When its value is changed, JavaScript is used to set the `--hue` custom property value to the new slider value.

This in turn adjusts the color scheme for the entire UI:

- The `--base-color` value is a relative color with its `h` (hue) channel set to the value of `--hue`.
- The other colors used in the design are relative colors based on `--base-color`.

#### HTML

The HTML for the example is shown below.

- The {{htmlelement("main")}} element acts as an outer wrapper to contain the `--hue` value. It also has a radial gradient set on it that fills the whole body.
- The {{htmlelement("div")}} element with an ID of `container` acts as an inner container. It keeps the card and form together, allowing them to be centered vertically and horizontally inside `<main>` as one unit.
- The {{htmlelement("section")}} element contains the {{htmlelement("h1")}} and {{htmlelement("p")}} elements that define the card's content.
- The {{htmlelement("form")}} element contains the ([`<input type="range">`](/en-US/docs/Web/HTML/Element/input/range)) control and its {{htmlelement("label")}}.

```html
<main style="--hue: 240;">
  <div id="container">
    <section>
      <h1>A love of colors</h1>
      <p>
        Colors, the vibrant essence of our surroundings, are truly
        awe-inspiring. From the fiery warmth of reds to the calming coolness of
        blues, they bring unparalleled richness to our world. Colors stir
        emotions, ignite creativity, and shape perceptions, acting as a
        universal language of expression. Whether in a breathtaking sunset, a
        bustling marketplace, or an artist's canvas, colors transcend the visual
        spectrum, turning the ordinary into the extraordinary. In their
        brilliance, colors create a visually enchanting tapestry that invites
        admiration and sparks joy.
      </p>
    </section>
    <form>
      <label for="hue-adjust">Adjust the hue:</label>
      <input
        type="range"
        name="hue-adjust"
        id="hue-adjust"
        value="240"
        min="0"
        max="360" />
    </form>
  </div>
</main>
```

#### CSS

In the CSS, first of all note the colors set for the color scheme inside the `main` ruleset:

- `--base-color`: The base color is a relative color — it uses the [`lch()`](/en-US/docs/Web/CSS/color_value/lch) function to take `red` (although any full color would do) and adjust its `h` (hue) channel to the value set in the `--hue` custom property.
- `--complementary-color`: A complementary color 180 degrees around the color wheel from `--base-color`. This is achieved by creating a relative color with 180 added to the `h` channel.
- `--bg-color`: A much lighter variant of `--base-color`, intended to be used as a background. This is achieved by creating a relative color with 40 added to the `l` (lightness) channel.

Now have a look at the rest of the CSS and take note of all the places where these colors are used. This includes [backgrounds](/en-US/docs/Web/CSS/background), [borders](/en-US/docs/Web/CSS/border), [`text-shadow`](/en-US/docs/Web/CSS/text-shadow), and even the [`accent-color`](/en-US/docs/Web/CSS/accent-color) of the slider.

```css hidden
html {
  font-family: sans-serif;
}

body {
  margin: 0;
  height: 100vh;
}

#container {
  width: 600px;
}
```

```css
main {
  /* Relative color definitions */
  --base-color: lch(from red l c var(--hue));
  --complementary-color: lch(from var(--base-color) l c calc(h + 180));
  --bg-color: lch(from var(--base-color) calc(l + 40) c h);

  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(white, var(--base-color));
}

/* box styling */

section {
  background-color: var(--bg-color);
  border: 3px solid var(--base-color);
  border-radius: 20px;
  box-shadow: 10px 10px 30px rgb(0 0 0 / 0.5);
}

h1 {
  text-align: center;
  margin: 0;
  padding: 20px;
  background-color: var(--base-color);
  color: black;
  border-radius: 16px 16px 0 0;
  font-size: 3rem;
  letter-spacing: -1px;
  text-shadow:
    1px 1px 1px var(--complementary-color),
    -1px -1px 1px var(--complementary-color),
    0 0 3px var(--complementary-color);
}

p {
  line-height: 1.5;
  margin: 0;
  padding: 20px;
}

/* form styling */

form {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
}

label {
  padding-right: 10px;
}

input {
  accent-color: var(--base-color);
}
```

#### JavaScript

The JavaScript adds an [`input`](/en-US/docs/Web/API/HTMLElement/input_event) event listener to the slider control so that when a new value is set, the `setHue()` function runs. This function sets the `--hue` custom property's value to the new value.

```js
const mainElem = document.querySelector("main");
const slider = document.getElementById("hue-adjust");

slider.addEventListener("input", setHue);

function setHue(e) {
  console.log("hue changed");
  mainElem.style.setProperty("--hue", e.target.value);
}
```

#### Output

The output is shown below. Relative CSS colors are being used here to control the color scheme of an entire UI, which can be adjusted live as a single value is modified.

{{ EmbedLiveSample("Live UI color scheme updater", "100%", "500") }}

## See also

- The {{CSSXref("&lt;color&gt;", "&lt;color&gt;")}} data type
- functional notation typess:
  - [sRGB](https://en.wikipedia.org/wiki/SRGB) color space: {{CSSXref("color_value/hsl", "hsl()")}}, {{CSSXref("color_value/hwb", "hwb()")}}, {{CSSXref("color_value/rgb", "rgb()")}};
  - [CIELAB](https://en.wikipedia.org/wiki/CIELAB_color_space) color space: {{CSSXref("color_value/lab", "lab()")}}, {{CSSXref("color_value/lch", "lch()")}};
  - [Oklab](https://bottosson.github.io/posts/oklab/) color space: {{CSSXref("color_value/oklab", "oklab()")}}, {{CSSXref("color_value/oklch", "oklch()")}};
- Other color spaces: {{CSSXref("color_value/color", "color()")}}.
- [CSS relative color syntax](https://developer.chrome.com/blog/css-relative-color-syntax) on developer.chrome.com (2023)
