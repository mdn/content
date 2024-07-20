---
title: Using relative colors
slug: Web/CSS/CSS_colors/Relative_colors
page-type: guide
---

{{CSSRef}}

The [CSS colors module](/en-US/docs/Web/CSS/CSS_colors) defines **relative color syntax**, which allows a CSS {{cssxref("&lt;color&gt;")}} value to be defined relative to another color. This is a powerful feature that enables easy creation of complements to existing colors — such as lighter, darker, saturated, semi-transparent, or inverted variants — enabling more effective color palette creation.

This article explains relative color syntax, shows what the different options are, and looks at some illustrative examples.

## General syntax

A relative CSS color value has the following general syntax structure:

```text
color-function(from origin-color channel1 channel2 channel3)
color-function(from origin-color channel1 channel2 channel3 / alpha)

// color space included in the case of color() functions
color(from origin-color colorspace channel1 channel2 channel3)
color(from origin-color colorspace channel1 channel2 channel3 / alpha)
```

Relative colors are created using the same [color functions](/en-US/docs/Web/CSS/CSS_colors#functions) as absolute colors, but with different parameters:

1. Include a basic color function (represented by _`color-function()`_ above) such as [`rgb()`](/en-US/docs/Web/CSS/color_value/rgb), [`hsl()`](/en-US/docs/Web/CSS/color_value/hsl), etc. Which one you pick depends on the color model you want to use for the relative color you are creating (the **output color**).
2. Pass in the **origin color** (represented above by _`origin-color`_) your relative color will be based on, preceded by the `from` keyword. This can be any valid {{cssxref("&lt;color&gt;")}} value using any available color model including a color value contained in a [CSS custom property](/en-US/docs/Web/CSS/Using_CSS_custom_properties), system colors, `currentColor`, or even another relative color.
3. In the case of the [`color()`](/en-US/docs/Web/CSS/color_value/color) function, include the _[`colorspace`](/en-US/docs/Web/CSS/color_value/color#colorspace)_ of the output color.
4. Provide an output value for each individual channel. The output color is defined after the origin color — represented above by the _`channel1`_, _`channel2`_, and _`channel3`_ placeholders. The channels defined here depend on the [color function](/en-US/docs/Web/CSS/CSS_colors#functions) you are using for your relative color. For example, if you are using [`hsl()`](/en-US/docs/Web/CSS/color_value/hsl), you would need to define the values for hue, saturation, and lightness. Each channel value can be a new value, the same as the original value, or a value relative to the channel value of the origin color.
5. Optionally, an `alpha` channel value for the output color can be defined, preceded by a slash (`/`). If the `alpha` channel value is not explicitly specified, it defaults to the alpha channel value of the _`origin-color`_ (not 100%, which is the case for absolute color values).

The browser converts the origin color to a syntax compatible with the color function then destructures it into component color channels (plus the `alpha` channel if the origin color has one). These are made available as appropriately-named values inside the color function — `r`, `g`, `b`, and `alpha` in the case of the `rgb()` function, `l`, `a`, `b`, and `alpha` in the case of the `lab()` function, `h`, `w`, `b`, and `alpha` in the case of `hwb()`, etc. — that can be used to calculate new output channel values.

Let's look at relative color syntax in action. The below CSS is used to style two {{htmlelement("div")}} elements, one with a absolute background color — `red` — and one with a relative background color created with the `rgb()` function, based on the same `red` color value:

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

The relative color uses the [`rgb()`](/en-US/docs/Web/CSS/color_value/rgb) function, which takes `red` as the origin color, converts it to an equivalent `rgb()` color (`rgb(255 0 0)`) and then defines the new color as having a red channel of value `200` and green and blue channels with a value the same as the origin color (it uses the `g` and `b` values made available inside the function by the browser, which are both equal to `0`).

This results in an output of `rgb(200 0 0)` — a slightly darker red. If we had specified a red channel value of `255` (or just the `r` value), the resulting output color would be exactly the same as the input value. The browser's final output color (the computed value) is an sRGB `color()` value equivalent to `rgb(200 0 0)` — `color(srgb 0.784314 0 0)`.

> **Note:** As mentioned above, when calculating a relative color the first thing the browser does is to convert the provided origin color (`red` in the above example) into a value compatible with the color function being used (in this case, `rgb()`). This is done so that the browser is able to calculate the output color from the origin color. While the calculations are performed relative to the color function used, the actual output color value depends on the color's color space:
>
> - Older sRGB color functions cannot express the full spectrum of visible colors. The output colors of ([`hsl()`](/en-US/docs/Web/CSS/color_value/hsl), [`hwb()`](/en-US/docs/Web/CSS/color_value/hwb), and [`rgb()`](/en-US/docs/Web/CSS/color_value/rgb)) are serialized to `color(srgb)` to avoid these limitations. That means that querying the output color value via the {{domxref("HTMLElement.style")}} property or the {{domxref("CSSStyleDeclaration.getPropertyValue()")}} method returns the output color as a [`color(srgb ...)`](/en-US/docs/Web/CSS/color_value/color) value.
> - For more recent color functions (`lab()`, `oklab()`, `lch()`, and `oklch()`), relative color output values are expressed in the same syntax as the color function used. For example, if a [`lab()`](/en-US/docs/Web/CSS/color_value/lab) color function is being used, the output color will be a `lab()` value.

These five lines all produce an equivalent output color:

```text
red
rgb(255 0 0)
rgb(from red r g b)
rgb(from red 255 g b)
rgb(from red 255 0 0)
```

## Syntax flexibility

There is an important distinction to be made between the destructured origin color channel values made available in the function, and the channel values of the output color set by the developer.

To reiterate, when a relative color is defined, the channel values of the origin color are made available in the function to use when defining the output color channel values. The following example defines a relative color using an `rgb()` function and uses the origin color channel values (made available as `r`, `g`, and `b`) for the output channel values, meaning that the output color is the same as the origin color:

```css
rgb(from red r g b)
```

However, when specifying the output values, you don't need to use the origin color channel values at all. You need to provide the output channel values in the right order (e.g. red, then green, then blue in the case of `rgb()`), but they can be any values you wish provided they are valid values for those channels. This gives relative CSS colors a high degree of flexibility.

For example, if you wanted to, you could specify absolute values like those shown below, transforming `red` into `blue`:

```css
rgb(from red 0 0 255)
/* output color is equivalent to rgb(0 0 255), full blue */
```

> **Note:** If you are using relative color syntax but outputting the same color as the origin color or a color not based on the origin color at all, you are not really creating a relative color. You'd be unlikely to ever do this in a real codebase, and would probably just use an absolute color value instead. But, we felt it useful to explain that you _can_ do this with relative color syntax, as a starting point for learning about it.

You can even mix up or repeat the provided values. The following takes a slightly darker red as an input and outputs a light gray color — the output color's `r`, `g`, and `b` channels are all set to the origin color's `r` channel value:

```css
rgb(from rgb(200 0 0) r r r)
/* output color is equivalent to rgb(200 200 200), light gray */
```

The following uses the origin color's channel values for the output color's `r`, `g`, and `b` channel values, but in reverse order:

```css
rgb(from rgb(200 170 0) b g r)
/* output color is equivalent to rgb(0 170 200) */
```

## Color functions that support relative colors

In the section above we only saw relative colors defined via the [`rgb()`](/en-US/docs/Web/CSS/color_value/rgb) function. However, relative colors can be defined using any modern CSS color function — [`color()`](/en-US/docs/Web/CSS/color_value/color), [`hsl()`](/en-US/docs/Web/CSS/color_value/hsl), [`hwb()`](/en-US/docs/Web/CSS/color_value/hwb), [`lab()`](/en-US/docs/Web/CSS/color_value/lab), [`lch()`](/en-US/docs/Web/CSS/color_value/lch), [`oklab()`](/en-US/docs/Web/CSS/color_value/oklab), [`oklch()`](/en-US/docs/Web/CSS/color_value/oklch), or [`rgb()`](/en-US/docs/Web/CSS/color_value/rgb). The general syntax structure is the same in each case, although the origin color values have different names appropriate for the function being used.

Below you can find relative color syntax examples for each color function. Each case is the simplest possible, with the output color channel values exactly matching the origin color channel values:

```css
/* color() with and without alpha channel */
color(from red a98-rgb r g b)
color(from red a98-rgb r g b / alpha)

color(from red xyz-d50 x y z)
color(from red xyz-d50 x y z / alpha)

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

It is worth mentioning again that the color system of the origin color doesn't need to match the color system being used to create the output color. Again, this provides a lot of flexibility. Generally you won't be interested in and might not even know the system the origin color is defined in (you might just have a [custom property value](#using_custom_properties) to manipulate). You'll just want to input a color and, for example, create a lighter variant of it by putting it into an `hsl()` function and varying the lightness value.

> **Note:** Aliases such as `rgba()` or `hsla()` can be used to output relative colors, and to specify origin colors. When using legacy color functions to output a relative color, you must use the comma-less modern syntax and can't mix percentages and numbers.

## Using custom properties

When creating a relative color, you can use values defined in [CSS custom properties](/en-US/docs/Web/CSS/Using_CSS_custom_properties) both for the origin color and within the output color channel value definitions. Let's look at an example.

In the below CSS we define two custom properties:

- `--base-color` contains our base brand color — `purple`. Here we are using a named color keyword, but relative colors can accept any color syntax for the origin color.
- `--standard-opacity` contains the standard brand opacity value that we want to apply to semi-transparent boxes — `0.75`.

We then give two {{htmlelement("div")}} elements a background color. One is given an absolute color — our `--base-color` brand purple. The other one is given a relative color equal to our brand purple, transformed to add an alpha channel equal to our standard opacity value.

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

You can use CSS [math functions](/en-US/docs/Web/CSS/CSS_Functions#math_functions) such as {{cssxref("calc")}} to calculate values for the output color channels. Let's look at an example.

The below CSS is used to style three {{htmlelement("div")}} elements with different background colors. The middle one is given an unmodified `--base-color`, while the left and right ones are given lightened and darkened variants of that `--base-color`. These variants are defined using relative colors — the `--base-color` is passed into an `lch()` function, and the output color has its lightness channel modified to achieve the desired effect via a `calc()` function. The lightened color has 20% added to the lightness channel, and the darkened color has 20% subtracted from it.

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

## Channel values resolve to `<number>` values

To make channel value calculations work in relative colors, all origin color channel values resolve to appropriate {{cssxref("&lt;number&gt;")}} values. For example, in the `lch()` examples above, we are calculating new lightness values by adding or subtracting numbers from the origin color's `l` channel value. If we tried to do `calc(l + 20%)`, that would result in an invalid color — `l` is a `<number>` and cannot have a {{cssxref("&lt;percentage&gt;")}} added to it.

- Channel values originally specified as a `<percentage>` resolve to a `<number>` appropriate for the output color function.
- Channel values originally specified as a {{cssxref("&lt;hue&gt;")}} angle resolve to a number of degrees in a range of `0` to `360`, inclusive.

Check the different [color function pages](/en-US/docs/Web/CSS/CSS_colors#functions) for the specifics of what their origin channel values resolve to.

## Checking for browser support

You can check that a browser supports relative color syntax by running it through a {{cssxref("@supports")}} at-rule.

For example:

```css
@supports (color: hsl(from white h s l)) {
  /* safe to use hsl() relative color syntax */
}
```

## Examples

> **Note:** You can find additional examples demonstrating the use of relative color syntax in the different functional notation types on their dedicated pages: [`color()`](/en-US/docs/Web/CSS/color_value/color#using_relative_colors_with_color), [`hsl()`](/en-US/docs/Web/CSS/color_value/hsl#using_relative_colors_with_hsl), [`hwb()`](/en-US/docs/Web/CSS/color_value/hwb#using_relative_colors_with_hwb), [`lab()`](/en-US/docs/Web/CSS/color_value/lab#using_relative_colors_with_lab), [`lch()`](/en-US/docs/Web/CSS/color_value/lch#using_relative_colors_with_lch), [`oklab()`](/en-US/docs/Web/CSS/color_value/oklab#using_relative_colors_with_oklab), [`oklch()`](/en-US/docs/Web/CSS/color_value/oklch#using_relative_colors_with_oklch), [`rgb()`](/en-US/docs/Web/CSS/color_value/rgb#using_relative_colors_with_rgb).

### Color palette generator

This example allows you to choose a base color and a color palette type. The browser will then show an appropriate palette of colors based on the chosen base color. The color palette choices are as follows:

- **Complementary**: Includes two colors that are at opposite sides of a color wheel, or to put it another way, _opposite hues_ (see the {{cssxref("&lt;hue&gt;")}} data type for more information on hues and color wheels). The two colors are defined as a base color, and the base color with hue channel +180 degrees.
- **Triadic**: Includes three colors equal distances apart around the color wheel. The three colors are defined as a base color, base color with hue channel -120 degrees, and base color with hue channel +120 degrees.
- **Tetradic**: Includes four colors equal distances apart around the color wheel. The four colors are defined as a base color, and base color with hue channel +90, +180, and +270 degrees.
- **Monochrome**: Includes multiple colors with the same hue but varying lightness values. In our example we've defined five colors in a monochrome palette — base color, and base color with lightness channel -20, -10, +10, and +20.

#### HTML

The full HTML is included below for reference. The most interesting parts are as follows:

- The `--base-color` custom property is stored as an inline [`style`](/en-US/docs/Web/HTML/Global_attributes/style) on the {{htmlelement("div")}} element with the ID of `container`. We've placed it there so it is easy to update the value using JavaScript. We've provided an initial value of `#ff0000` (`red`) to show a color palette based on that value when the example loads. Note that normally we'd probably set this on the {{htmlelement("html")}} element, but the MDN live sample was removing it when rendering.
- The base color picker is created using an [`<input type="color">`](/en-US/docs/Web/HTML/Element/input/color) control. When a new value is set in this control, the `--base-color` custom property is set to this value using JavaScript, which in turn generates a new color palette. All the displayed colors are relative colors based on `--base-color`.
- The set of [`<input type="radio">`](/en-US/docs/Web/HTML/Element/input/radio) controls enables choosing a color palette type to generate. When a new value is chosen here, JavaScript is used to set a new class on the `container` `<div>` to represent the chosen palette. In the CSS, descendant selectors are used to target the child `<div>`s (e.g. `.comp :nth-child(1)`) so they can have the correct colors applied to them and hide the unused `<div>` nodes.
- The `container` `<div>` containing the child `<div>`s that display the colors of the generated palette. Note that an initial class of `comp` is set on it, so that the page will display a complementary color scheme when first loaded.

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
    <div></div>
    <div></div>
    <div></div>
  </div>
</div>
```

#### CSS

Below we are only showing the CSS that sets the palette colors. Note how, in each case, descendent selectors are used to apply the correct {{cssxref("background-color")}} to each child `<div>` for the chosen palette. We care more about the position of the `<div>`s in the source order than the type of element, so we have used {{cssxref(":nth-child")}} to target them.

In the last rule we've used the [general sibling selector (`~`)](/en-US/docs/Web/CSS/Subsequent-sibling_combinator) to target the unused `<div>` elements in each palette type, setting [`display: none`](/en-US/docs/Web/CSS/Subsequent-sibling_combinator) to stop them being rendered.

The colors themselves include the `--base-color`, plus relative colors derived from that `--base-color`. The relative colors use the [`lch()`](/en-US/docs/Web/CSS/color_value/lch) function — passing in the origin `--base-color` and defining an output color with an adjusted lightness or hue channel as appropriate.

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

/* Palette container styling */

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
/* Complementary colors */
/* Base color, and base color with hue channel +180 degrees */

.comp :nth-child(1) {
  background-color: var(--base-color);
}

.comp :nth-child(2) {
  background-color: lch(from var(--base-color) l c calc(h + 180));
}

/* Use @supports to add in support old syntax that requires deg units
   to be specified in hue calculations. This is required for Safari 16.4+. */
@supports (color: lch(from red l c calc(h + 180deg))) {
  .comp :nth-child(2) {
    background-color: lch(from var(--base-color) l c calc(h + 180deg));
  }
}

/* Triadic colors */
/* Base color, base color with hue channel -120 degrees, and base color */
/* with hue channel +120 degrees */

.triadic :nth-child(1) {
  background-color: var(--base-color);
}

.triadic :nth-child(2) {
  background-color: lch(from var(--base-color) l c calc(h - 120));
}

.triadic :nth-child(3) {
  background-color: lch(from var(--base-color) l c calc(h + 120));
}

/* Use @supports to add in support old syntax that requires deg units
   to be specified in hue calculations. This is required for Safari 16.4+. */
@supports (color: lch(from red l c calc(h + 120deg))) {
  .triadic :nth-child(2) {
    background-color: lch(from var(--base-color) l c calc(h - 120deg));
  }

  .triadic :nth-child(3) {
    background-color: lch(from var(--base-color) l c calc(h + 120deg));
  }
}

/* Tetradic colors */
/* Base color, and base color with hue channel +90, +180, and +270 degrees */

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

/* Use @supports to add in support old syntax that requires deg units
   to be specified in hue calculations. This is required for Safari 16.4+. */
@supports (color: lch(from red l c calc(h + 90deg))) {
  .tetradic :nth-child(2) {
    background-color: lch(from var(--base-color) l c calc(h + 90deg));
  }

  .tetradic :nth-child(3) {
    background-color: lch(from var(--base-color) l c calc(h + 180deg));
  }

  .tetradic :nth-child(4) {
    background-color: lch(from var(--base-color) l c calc(h + 270deg));
  }
}

/* Monochrome colors */
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

/* Hide unused swatches for each palette type */
.comp :nth-child(2) ~ div,
.triadic :nth-child(3) ~ div,
.tetradic :nth-child(4) ~ div {
  display: none;
}
```

##### An aside on `@supports` testing

In the example CSS you'll notice {{cssxref("@supports")}} blocks being used to provide different {{cssxref("background-color")}} values to browsers that support a previous draft specification of the relative color syntax. These are required because Safari's initial implementation was based on an older version of the spec in which origin color channel values resolved to {{cssxref("&lt;number&gt;")}}s or other unit types depending on the context. This meant that values sometimes required units when performing additions and subtractions, which created confusion. In newer implementations, origin color channel values always resolve to an equivalent {{cssxref("&lt;number&gt;")}} value, which means calculations are always done with unitless values.

Note how the support test in each case is done using a simple declaration — `color: lch(from red l c calc(h + 90deg))` for example — rather than the actual value that we need to vary for other browsers. When testing complex values like these, you should use the simplest possible declaration that still contains the syntactic difference you want to test for.

Including a custom property in the `@supports` test doesn't work — the test always comes back as positive regardless of what value the custom property is given. This is because a custom property value only becomes invalid when assigned to be an invalid value (or part of an invalid value) of a regular CSS property. To work around this, in each test we have replaced `var(--base-color)` with the `red` keyword.

#### JavaScript

In the JavaScript, we:

- Add a [`change`](/en-US/docs/Web/API/HTMLElement/change_event) event listener to the radio buttons so that when one is selected, the `setContainer()` function runs. This function updates the `class` value of the `<div>` with `id="container"` with the value of the selected radio button so that the correct background colors will be applied to the child `<div>`s for the chosen palette type.
- Add an [`input`](/en-US/docs/Web/API/Element/input_event) event listener to the color picker control so that when a new color is selected, the `setBaseColor()` function runs. This function sets the `--base-color` custom property's value to the new color.

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
}

function setBaseColor(e) {
  console.log("color changed");
  containerElem.style.setProperty("--base-color", e.target.value);
}
```

#### Results

The output is as follows. This starts to show the power of relative CSS colors — we are defining multiple colors and generating palettes that are updated live by adjusting a single custom property.

{{ EmbedLiveSample("Color palette generator", "100%", "470") }}

### Live UI color scheme updater

This example shows a card containing a heading and text, but with a twist — below the card is a slider ([`<input type="range">`](/en-US/docs/Web/HTML/Element/input/range)) control. When its value is changed, JavaScript is used to set a `--hue` custom property value to the new slider value.

This in turn adjusts the color scheme for the entire UI:

- The `--base-color` value is a relative color with its hue channel set to the value of `--hue`.
- The other colors used in the design are relative colors based on `--base-color`. As a result, they change when the `--base-color` changes.

#### HTML

The HTML for the example is shown below.

- The {{htmlelement("main")}} element acts as an outer wrapper to contain the rest of the content, allowing the card and form to be centered vertically and horizontally inside `<main>` as one unit.
- The {{htmlelement("section")}} element contains the [`<h1>`](/en-US/docs/Web/HTML/Element/Heading_Elements) and {{htmlelement("p")}} elements that define the card's content.
- The {{htmlelement("form")}} element contains the ([`<input type="range">`](/en-US/docs/Web/HTML/Element/input/range)) control and its {{htmlelement("label")}}.

```html
<main>
  <section>
    <h1>A love of colors</h1>
    <p>
      Colors, the vibrant essence of our surroundings, are truly awe-inspiring.
      From the fiery warmth of reds to the calming coolness of blues, they bring
      unparalleled richness to our world. Colors stir emotions, ignite
      creativity, and shape perceptions, acting as a universal language of
      expression. In their brilliance, colors create a visually enchanting
      tapestry that invites admiration and sparks joy.
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
</main>
```

#### CSS

In the CSS the `:root` has a default `--hue` value set on it, relative [`lch()`](/en-US/docs/Web/CSS/color_value/lch) colors to define the color scheme, plus a radial gradient that fills the whole body.

The relative colors are as follows:

- `--base-color`: The base color takes an origin color of `red` (although any full color would do) and adjusts its hue value to the value set in the `--hue` custom property.
- `--bg-color`: A much lighter variant of `--base-color`, intended to be used as a background. This is created by taking an origin color of `--base-color` and adding 40 to its lightness value.
- `--complementary-color`: A complementary color 180 degrees around the color wheel from `--base-color`. This is created by taking an origin color of `--base-color` and adding 180 to its hue value.

Now have a look at the rest of the CSS and take note of all the places where these colors are used. This includes [backgrounds](/en-US/docs/Web/CSS/background), [borders](/en-US/docs/Web/CSS/border), [`text-shadow`](/en-US/docs/Web/CSS/text-shadow), and even the [`accent-color`](/en-US/docs/Web/CSS/accent-color) of the slider.

> **Note:** For brevity, only the parts of the CSS relevant to relative color usage are shown.

```css hidden
html {
  font-family: sans-serif;
}

main {
  width: 80vw;
  margin: 2rem auto;
}

h1 {
  text-align: center;
  margin: 0;
  color: black;
  border-radius: 16px 16px 0 0;
  font-size: 3rem;
  letter-spacing: -1px;
}

p {
  line-height: 1.5;
  margin: 0;
  padding: 1.2rem;
}

form {
  width: fit-content;
  display: flex;
  margin: 2rem auto;
  padding: 0.4rem;
}
```

```css
:root {
  /* Default hue value */
  --hue: 240;

  /* Relative color definitions */
  --base-color: lch(from red l c var(--hue));
  --bg-color: lch(from var(--base-color) calc(l + 40) c h);
  --complementary-color: lch(from var(--base-color) l c calc(h + 180));

  background: radial-gradient(ellipse at center, white 20%, var(--base-color));
}

/* Use @supports to add in support for --complementary-color with old
   syntax that requires deg units to be specified in hue calculations.
   This is required for in Safari 16.4+. */
@supports (color: lch(from red l c calc(h + 180deg))) {
  body {
    --complementary-color: lch(from var(--base-color) l c calc(h + 180deg));
  }
}

/* Box styling */

section {
  background-color: var(--bg-color);
  border: 3px solid var(--base-color);
  border-radius: 20px;
  box-shadow: 10px 10px 30px rgb(0 0 0 / 0.5);
}

h1 {
  background-color: var(--base-color);
  text-shadow:
    1px 1px 1px var(--complementary-color),
    -1px -1px 1px var(--complementary-color),
    0 0 3px var(--complementary-color);
}

/* Range slider styling */

form {
  background-color: var(--bg-color);
  border: 3px solid var(--base-color);
}

input {
  accent-color: var(--complementary-color);
}
```

#### JavaScript

The JavaScript adds an [`input`](/en-US/docs/Web/API/Element/input_event) event listener to the slider control so that when a new value is set, the `setHue()` function runs. This function sets a new inline `--hue` custom property value on the `:root` (the `<html>` element) that overrides the original default value we set in our CSS.

```js
const rootElem = document.querySelector(":root");
const slider = document.getElementById("hue-adjust");

slider.addEventListener("input", setHue);

function setHue(e) {
  rootElem.style.setProperty("--hue", e.target.value);
}
```

#### Results

The output is shown below. Relative CSS colors are being used here to control the color scheme of an entire UI, which can be adjusted live as a single value is modified.

{{ EmbedLiveSample("Live UI color scheme updater", "100%", "400") }}

## See also

- The {{CSSXref("&lt;color&gt;")}} data type
- [CSS colors](/en-US/docs/Web/CSS/CSS_colors) module
- [sRGB](https://en.wikipedia.org/wiki/SRGB) on Wikipedia
- [CIELAB](https://en.wikipedia.org/wiki/CIELAB_color_space) on Wikipedia
- [CSS relative color syntax](https://developer.chrome.com/blog/css-relative-color-syntax) on developer.chrome.com (2023)
