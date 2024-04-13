---
title: CSS color values
slug: Web/CSS/CSS_colors/Color_values
page-type: guide
---

{{CSSRef}}

This article is a primer introducing colors in CSS.

We'll also take a look at how to [let the user pick a color](#letting_the_user_pick_a_color).

For the CIELAB color space, you can use the `lab()`, `oklab()`, `lch()` and `oklch()` functions.
The `lch()` and `oklch()` functions use lightness (L), chroma (C), and hue (H). and the Lab model uses lightness (L), red/green-ness, and yellow/blue-ness along the "a" and "b" axes (rectangular coordinates) in the color space.

## How to describe a color

To represent a color in CSS, you have to find a way to translate the analog concept of "color" into a digital form that a computer can use. This is typically done by breaking down the color into components, such as how much of each of a set of primary colors to mix together, or how bright to make the color. Defined color models ensure that colors will appear the same no matter where they are rendered.

A color model is the mathematical model that represents colors using numeric values. Color models describe how to create the available colors within a color space. RGB was the first color model for the web. The sRGB color space of the RGB color model, the standard red, green, and blue color space, was created in 1996 for computer monitors and the web. A color space is a system for grouping colors so that describing any given color is consistent. If you transform a color between different color spaces, it should look identical.

Originally, monitors were limited in how many colors they could render, and CSS colors were limited by those constraints, expanding as capabilities expanded. With modern devices no longer limited to RGB, new color models are based on human perception rather, with a much wider {{glossary("gamut")}} of colors. There are several ways you can describe color in CSS, and the options keep expanding.

This guide introduces the different color value types. For more detailed discussion of each of the color value types, see the reference for each of the CSS {{cssxref("&lt;color&gt;")}} types introduce below.

### Keywords

A set of standard color names is defined that lets you use keywords instead of numeric representations if you choose this way of describing colors, although there must be a keyword representing the exact color you want to use. Color keywords include the standard primary and secondary colors (such as `red`, `blue`, or `orange`), shades of gray (from `black` to `white`, including colors like `darkgray` and `lightgrey`), and a variety of other blended colors, including `lightseagreen`, `cornflowerblue`, and `rebeccapurple`. Named colors use the [RGB](/en-US/docs/Glossary/RGB) model and are associated with the sRGB (`srgb`) color space.

There are approximately 140 named colors. There are named colors of special interest: [`transparent`](/en-US/docs/Web/CSS/named-color#transparent) is, well, transparent and [`currentcolor`](/en-US/docs/Web/CSS/color_value#currentcolor_keyword) is the current value of the CSS {{cssxref("color")}} property.

See the {{cssxref("named-color")}} data type for more information on color keywords.

### RGB values

There are two ways to define an {{glossary("RGB")}} color by their red, green, and blue components in CSS. Like named colors, the hexadecimal and `rgb()` colors all use the [RGB](/en-US/docs/Glossary/RGB) model and are associated with the sRGB (`srgb`) color space, but provide for defining a much, much wider range of colors.

#### Hexadecimal string notation

Hexadecimal string notation represents a color using hexadecimal digits to represent each of the color components (red, green, and blue). It may also include a fourth component: the alpha channel (or opacity). Each color component can be represented as a number between 0 and 255 (0x00 and 0xFF) or, optionally, as a number between 0 and 15 (0x0 and 0xF). All components _must_ be specified using the same number of digits. If you use the single-digit notation, the final color is computed by using each component's digit twice; that is, `"#D"` becomes `"#DD"` when drawing.

A color in hexadecimal string notation always begins with the character `"#"`. After that comes the hexadecimal digits of the color code. The string is case-insensitive.

- `"#rrggbb"`
  - : Specifies a fully-opaque color whose red component is the hexadecimal number `0xrr`, green component is `0xgg`, and blue component is `0xbb`.
- `"#rrggbbaa"`
  - : Specifies a color whose red component is the hexadecimal number `0xrr`, green component is `0xgg`, and blue component is `0xbb`. The alpha channel is specified by `0xaa`; the lower this value is, the more translucent the color becomes.
- `"#rgb"`
  - : Specifies a color whose red component is the hexadecimal number `0xrr`, green component is `0xgg`, and blue component is `0xbb`.
- `"#rgba"`
  - : Specifies a color whose red component is the hexadecimal number `0xrr`, green component is `0xgg`, and blue component is `0xbb`. The alpha channel is specified by `0xaa`; the lower this value is, the more translucent the color becomes.

As an example, you can represent the opaque color bright blue as `"#0000ff"` or `"#00f"`. To make it 25% opaque, you can use `"#0000ff44"` or `"#00f4"`.

See the {{cssxref("hex-color")}} data type for more information on hexadecimal string notation for colors.

#### RGB functional notation

RGB (Red/Green/Blue) functional notation, like hexadecimal string notation, represents colors using their red, green, and blue components (as well as, optionally, an alpha channel component for opacity). However, instead of using a string, the color is defined using the CSS function {{cssxref("color_value"/rgb", "rgb()")}}. This function accepts as its input parameters the values of the red, green, and blue components and an optional fourth parameter, the value for the alpha channel.

Legal values for each of these parameters are:

- `red`, `green`, and `blue`
  - : Each must be an {{cssxref("&lt;integer&gt;")}} value between 0 and 255 (inclusive), or a {{cssxref("&lt;percentage&gt;")}} from 0% to 100%.
- `alpha`
  - : The alpha channel is specified as a percentage between 0% (fully transparent) and 100% (fully opaque), or a number between 0.0 (equivalent to 0%) and 1.0 (equivalent to 100%).

For example, a bright red that's 50% opaque can be represented as `rgb(255 0 0 / 50%)` or `rgb(100% 0 0 / 0.5)`.

See the {{cssxref("color_value/rgb", "rgb()")}} color function for more information on the RGB functional notation.

### Color functions with a hue component

The color functions that have a hue component include the cylindrical `srgb` color functions `hsl()` and `hwb()` and the `display-p3` gamut supporting CIElab `lch()` and `oklch()` color functions.

These colors all include a [`<hue>`](/en-US/docs/Web/CSS/hue) component, an [`<angle>`](/en-US/docs/Web/CSS/angle) from that color models {{glossary("color wheel")}}. These color functions are more intuitive as the hue allows us to tell the difference or similarity between colors like red, orange, yellow, green, blue, etc.

The `hsl()` and `hwb()` functions we've used above use the sRGB color space, and both use _cylindrical_ models; this is why a `<hue>` angle lets you control the color's properties like on a [color wheel](/en-US/docs/Glossary/Color_wheel).

#### HSL functional notation

The `hsl()` CSS color function was the first hue-based color function. Unlike `rgb()` hex, or `hsl()` is human readable.Defining a color based on a hue (`h`), the saturation (`s`) and lightness (`l`) much more intuitive than declaring colors as red, green, and blue channel values, and HSL is also similar to the HSB (hue, saturation and brightness), color picker in Photoshop, so many people were familiar with this type of color selection when `hsl()` was first supported in browsers.

The diagram below shows an HSL color cylinder. Hue defines the color as an [`<angle>`](/en-US/docs/Web/CSS/angle) on a circular {{glossary("color wheel")}}.
Saturation is a percentage of how much of the way between being a shade of gray and having the maximum possible amount of the given hue.
As the value of lightness increases, the color transitions from the darkest to the lightest possible (from black to white).

![HSL color cylinder](640px-hsl_color_solid_cylinder.png)

Image courtesy of user [SharkD](https://commons.wikimedia.org/wiki/User:SharkD) on [Wikipedia](https://en.wikipedia.org/), distributed under the [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) license.

The value of the hue (H) component of an HSL (and HWB) color is an angle from red around through yellow, green, cyan, blue, and magenta (ending up back at red again at 360°) that identifies what the base color is. The value can be specified in any {{cssxref("&lt;angle&gt;")}} unit supported by CSS, including degrees (`deg`), radians (`rad`), gradians (`grad`), or turns (`turn`). The hue angle defines the hue or shade of color, but doesn't control how vivid or dull, or how light or dark the color is.

The saturation (S) component of the color specifies what percentage of the final color is comprised of the specified hue, with 100% being fully saturated and 0% being a complete lack of color (grey, white, or black). The rest is defined by the grey level provided by the lightness (L) component. You can also optionally include an alpha channel, to make the color less than 100% opaque.

Here are some sample colors in HSL notation:

```css hidden
table {
  border: 1px solid black;
  font:
    16px "Open Sans",
    Helvetica,
    Arial,
    sans-serif;
  border-spacing: 0;
  border-collapse: collapse;
}

th,
td {
  border: 1px solid black;
  padding: 4px 6px;
  text-align: left;
}

th {
  background-color: hsl(0 0% 75%);
}
```

```html
<table>
  <thead>
    <tr>
      <th scope="col">Color in HSL notation</th>
      <th scope="col">Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>hsl(90deg 0% 50%)</code></td>
      <td style="background-color: hsl(90deg 0% 50%);">&nbsp;</td>
    </tr>
    <tr>
      <td><code>hsl(90 100% 50%)</code></td>
      <td style="background-color: hsl(90 100% 50%);">&nbsp;</td>
    </tr>
    <tr>
      <td><code>hsl(0.15turn 50% 75%)</code></td>
      <td style="background-color: hsl(0.15turn 50% 75%);">&nbsp;</td>
    </tr>
    <tr>
      <td><code>hsl(0.15turn 90% 75%)</code></td>
      <td style="background-color: hsl(0.15turn 90% 75%);">&nbsp;</td>
    </tr>
    <tr>
      <td><code>hsl(0.15turn 90% 50%)</code></td>
      <td style="background-color: hsl(0.15turn 90% 50%);">&nbsp;</td>
    </tr>
    <tr>
      <td><code>hsl(270deg 90% 50%)</code></td>
      <td style="background-color: hsl(270deg 90% 50%);">&nbsp;</td>
    </tr>
  </tbody>
</table>
```

{{EmbedLiveSample("HSL_functional_notation", 300, 200)}}

> **Note:** When you omit the hue's unit, it's assumed to be in degrees (`deg`).

#### HWB functional notation

Much like the HSL functional notation above, the [`hwb()`](/en-US/docs/Web/CSS/color_value/hwb) color function uses the same hue coordinate system as `hsl()`, with `0deg` being red. Instead of `hsl`'s lightness and saturation, you specify whiteness (`W`) and blackness (`B`). This function is intuitive for those who find picking a hue and then mixing in white and or black to be intuitive to reach the desired color to be intuitive.

The values of `W` and `B` and range from `0%` to `100%` (or `0` to `1`). If the combined values of `W` and `B` is 100% (or `1`) or greater, the color will be grey, similar to setting the `s` to `0%` with `hsl()`. As with `hsl()`, an optional alpha value can be included, preceded by a forward slash `/`.

Here are some examples of using HWB notation:

```css
/* These examples all specify varying shades of a lime green. */
hwb(90 10% 10%)
hwb(90 50% 10%)
hwb(90deg 10% 10%)
hwb(1.5708rad 60% 0%)
hwb(.25turn 0% 40%)

/* Same lime green but with an alpha value */
hwb(90 10% 10% / 0.5)
hwb(90 10% 10% / 50%)
```

Here are some sample colors in HWB notation. The hues are the same as the HSL example, but we are adding whiteness and blackness to each hue instead of saturation and lightness:

```css hidden
{/*end the bad selector*/}
table {
  border: 1px solid black;
  font:
    16px "Open Sans",
    Helvetica,
    Arial,
    sans-serif;
  border-spacing: 0;
  border-collapse: collapse;
}

th,
td {
  border: 1px solid black;
  padding: 4px 6px;
  text-align: left;
}

th {
  background-color: hwb(0 75% 25%);
}
```

```html
<table>
  <thead>
    <tr>
      <th scope="col">Color in HWB notation</th>
      <th scope="col">Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>hwb(90deg 50% 50%)</code></td>
      <td style="background-color: hwb(90deg 50% 50%);">&nbsp;</td>
    </tr>
    <tr>
      <td><code>hwb(90 0% 0%)</code></td>
      <td style="background-color: hwb(90 0% 0%);">&nbsp;</td>
    </tr>
    <tr>
      <td><code>hwb(0.15turn 25% 0%)</code></td>
      <td style="background-color: hwb(0.15turn 25% 0%);">&nbsp;</td>
    </tr>
    <tr>
      <td><code>hwb(0.15turn 10% 25%)</code></td>
      <td style="background-color: hwb(0.15turn 10% 25%);">&nbsp;</td>
    </tr>
    <tr>
      <td><code>hwb(1turn 10% 65%)</code></td>
      <td style="background-color: hwb(1turn 10% 65%);">&nbsp;</td>
    </tr>
    <tr>
      <td><code>hwb(270deg 75% 10%)</code></td>
      <td style="background-color: hwb(270deg 75% 10%);">&nbsp;</td>
    </tr>
  </tbody>
</table>
```

{{EmbedLiveSample("HWB_functional_notation", 300, 200)}}

#### LCH and OKLCH: CIELAB and Oklab color spaces

While `hsl()` and `hwb()` are intuitive, there is a major drawback of cylindrical color spaces. With these functions, every fully saturated hue angle (`hsl(<angle> 100% 50%)` or `hsl(<angle> 0% 0%)`) has the same the same lightess, but that is not how human vision or monitors work. Putting white text on blue (`hsl(240deg 100% 50%)`) is legible, but that same text on yellow (`hsl(60deg 100% 50%)`) is not only illegible, but it will hurt your eyes. Not all hues have the same max saturation. The lightness of a color in these functions is in comparison to other colors, not to human perception.

Wouldn't it be fantastic if you could simply change a hue of a color on a site without making text illegible? You can in the CIELAB and Oklab color spaces using the `lch()` and `oklch()` color functions.

The CIELAB and Oklab color spaces are based on human vision experiments and represent the entire range of colors that humans can see. The primary purpose of these models is that they are uniform so that a given distance between any two points in the color space should appear equally different to a viewer.

Similar to the sRGB hue color functions, the hue (`h`) value in `lch()` and `oklch()` are a number, an angle, or the keyword `none` (equivalent to 0deg) representing the color's `<hue>` angle. However, the angles corresponding to particular hues differ across the sRGB, CIELAB (used by `lch()`), and Oklab (used by `oklch()`) color spaces. But the main benefit of these color functions is that that the "lightness" is perceived lightness; it is the brightness of a color as perceived by the human eye rather than the lightness as compared to other colors.

```html hidden live-sample___hues
<p>sRGB</p>
<div id="srgb"></div>
<p>LCH</p>
<div id="lch"></div>
<p>OKLCH</p>
<div id="oklch"></div>
<p>
  <label><input type="checkbox" /> Toggle black and white</label>
</p>
```

```css hidden live-sample___hues
div:has(~ p input:checked) {
  filter: grayscale(100%);
}
p:not(:last-of-type) {
  margin: 0 5px;
}
div {
  height: 50px;
}
#srgb {
  background: linear-gradient(
    to right,
    hsl(0deg 100% 50%),
    hsl(90deg 100% 50%),
    hsl(180deg 100% 50%),
    hsl(270deg 100% 50%),
    hsl(360deg 100% 50%)
  );
}
#lch {
  background: linear-gradient(
    to right,
    lch(50% 100% 0deg),
    lch(50% 100% 90deg),
    lch(50% 100% 180deg),
    lch(50% 100% 270deg),
    lch(50% 100% 360deg)
  );
}
#oklch {
  background: linear-gradient(
    to right,
    oklch(50% 100% 0deg),
    oklch(50% 100% 90deg),
    oklch(50% 100% 180deg),
    oklch(50% 100% 270deg),
    oklch(50% 100% 360deg)
  );
}
```

{{embedlivesample("hues", '100', '260') }}

Select the checkbox in the example above to convert the hue gradient to greyscale. You'll notice how the OKLCH gradient is more uniform in terms of lightness, and HSL is the least uniform.

The `lch()` and `oklch()` functions use lightness (L), chroma (C), and hue (H).

The example below shows the effect of changing component values in the `lch()` functions where each row modifies a single component.
The first row shows changes to the `lch()` lightness value, while the second row changes the `lch()` hue component.
The third row changes the `lab()` "b" axis, so we have a different effect than `lch()` as we're gradually adding more yellow to the color rather than cycling through the entire color wheel:

```css hidden live-sample___lch-colors
/* Varying shades of purple */
.container {
  display: grid;
  font-family: sans-serif;
  font-size: 14px;
  color: white;
  grid-template-columns: repeat(6, 1fr);
  gap: 4px;
}

.container div {
  border-radius: 8px;
  padding: 0.75rem;
}

#lch-20 {
  background-color: lch(20 40 0);
}
#lch-30 {
  background-color: lch(30 40 0);
}
#lch-40 {
  background-color: lch(40 40 0);
}

#lch-50 {
  background-color: lch(50 40 0);
}
#lch-60 {
  background-color: lch(60 40 0);
}
#lch-70 {
  background-color: lch(70 40 0);
}

#lch-hue-10 {
  background-color: lch(70 40 10);
}
#lch-hue-20 {
  background-color: lch(70 40 20);
}
#lch-hue-30 {
  background-color: lch(70 40 30);
}
#lch-hue-40 {
  background-color: lch(70 40 40);
}
#lch-hue-50 {
  background-color: lch(70 40 50);
}
#lch-hue-60 {
  background-color: lch(70 40 60);
}
#lab-10 {
  background-color: lab(70 40 10);
}
#lab-20 {
  background-color: lab(70 40 20);
}
#lab-30 {
  background-color: lab(70 40 30);
}
#lab-40 {
  background-color: lab(70 40 40);
}
#lab-50 {
  background-color: lab(70 40 50);
}
#lab-60 {
  background-color: lab(70 40 60);
}
```

```html hidden live-sample___lch-colors
<div class="container">
  <div id="lch-20">lch(20 40 0)</div>
  <div id="lch-30">lch(30 40 0)</div>
  <div id="lch-40">lch(40 40 0)</div>
  <div id="lch-50">lch(50 40 0)</div>
  <div id="lch-60">lch(60 40 0)</div>
  <div id="lch-70">lch(70 40 0)</div>
  <div id="lch-hue-10">lch(70 40 10)</div>
  <div id="lch-hue-20">lch(70 40 20)</div>
  <div id="lch-hue-30">lch(70 40 30)</div>
  <div id="lch-hue-40">lch(70 40 40)</div>
  <div id="lch-hue-50">lch(70 40 50)</div>
  <div id="lch-hue-50">lch(70 40 60)</div>
  <div id="lab-10">lab(70 40 10)</div>
  <div id="lab-20">lab(70 40 20)</div>
  <div id="lab-30">lab(70 40 30)</div>
  <div id="lab-40">lab(70 40 40)</div>
  <div id="lab-50">lab(70 40 50)</div>
  <div id="lab-60">lab(70 40 60)</div>
</div>
```

{{embedlivesample("lch-colors", '100', '150') }}

Oklab is a color space that uses the same model type as CIELAB but is built using additional numerical optimization steps, so the values are considered to be more accurate than CIELAB.
Because of this optimization, hues are more perceptually uniform, making Oklab an excellent choice for gradients.
If you already understand `lab()` and `lch()`, you can use these functions in a similar way:

```css
.oklch-red {
  color: oklch(0.93 0.39 28);
}
.oklab-green {
  color: oklab(0.87 -0.2 0.18);
}
```

#### The `color()` function

If you want explicit control over color spaces when defining colors, you can use the [`color()`](/en-US/docs/Web/CSS/color_value/color) function.
This is useful to describe a color for high-definition devices with wider color [gamuts](/en-US/docs/Glossary/Gamut).
For example, if we wanted to show the `display-p3 0 0 1` color, which is outside of the sRGB gamut, you can use a [`@media`](/en-US/docs/Web/CSS/@media/color-gamut) at-rule for detecting if the client hardware supports colors in this range:

```css
.vibrant {
  background-color: color(display-p3 0 0 1);
  /* Equivalent to out-of-gamut rgb(-27 55 153) */
}

@media (color-gamut: p3) {
  .vibrant {
    background-color: color(display-p3 0 0 1);
  }
}
```

### Relative colors

The [CSS colors module](/en-US/docs/Web/CSS/CSS_colors) defines [**relative color syntax**](/en-US/docs/Web/CSS/CSS_colors/Relative_colors), which allows {{cssxref("&lt;color&gt;")}} values to be defined relative to other existing colors, rather than defining a color value from scratch each time. This powerful feature enables the creation of complements to existing colors — such as lighter, darker, saturated, semi-transparent, or inverted variants of an original color. Relative colors provide an effective mechanism to create palettes and define color adjustments.

## Letting the user pick a color

There are many situations in which your website may need to let the user select a color. Perhaps you have a customizable user interface, or you're implementing a drawing app. Maybe you have editable text and need to let the user choose the text color. Or perhaps your app lets the user assign colors to folders or items. Although historically it's been necessary to implement your own [color picker](https://en.wikipedia.org/wiki/Color_picker), HTML now provides support for browsers to provide one for your use through the {{HTMLElement("input")}} element, by using `"color"` as the value of its [`type`](/en-US/docs/Web/HTML/Element/input#type) attribute.

The `<input>` element represents a color only in the [hexadecimal string notation](#hexadecimal_string_notation) covered above.

### Example: Picking a color

Let's look at a simple example, in which the user can choose a color. As the user adjusts the color, the border around the example changes to reflect the new color. After finishing up and picking the final color, the color picker's value is displayed.

{{EmbedLiveSample("Example_Picking_a_color", 525, 275)}}

> **Note:** On macOS, you indicate that you've finalized selection of the color by closing the color picker window.

#### HTML

The HTML here creates a box that contains a color picker control (with a label created using the {{HTMLElement("label")}} element) and an empty paragraph element ({{HTMLElement("p")}}) into which we'll output some text from our JavaScript code.

```html
<div id="box">
  <label for="colorPicker">Border color:</label>
  <input type="color" value="#8888ff" id="colorPicker" />
  <p id="output"></p>
</div>
```

#### CSS

The CSS establishes a size for the box and some basic styling for appearances. The border is also established with a 2-pixel width and a border color.

```css
#box {
  width: 500px;
  height: 200px;
  border: 2px solid rgb(245 220 225);
  padding: 4px 6px;
  font:
    16px "Lucida Grande",
    "Helvetica",
    "Arial",
    "sans-serif";
}
```

#### JavaScript

The script here handles the task of updating the starting color of the border to match the color picker's value. Then two event handlers are added to deal with input from the [`<input type="color">`](/en-US/docs/Web/HTML/Element/input/color) element.

```js
const colorPicker = document.getElementById("colorPicker");
const box = document.getElementById("box");
const output = document.getElementById("output");

box.style.borderColor = colorPicker.value;

colorPicker.addEventListener(
  "input",
  (event) => {
    box.style.borderColor = event.target.value;
  },
  false,
);

colorPicker.addEventListener(
  "change",
  (event) => {
    output.innerText = `Color set to ${colorPicker.value}.`;
  },
  false,
);
```

The {{domxref("Element/input_event", "input")}} event is sent every time the value of the element changes; that is, every time the user adjusts the color in the color picker. Each time this event arrives, we set the box's border color to match the color picker's current value.

The {{domxref("HTMLElement/change_event", "change")}} event is received when the color picker's value is finalized. We respond by setting the contents of the `<p>` element with the ID `"output"` to a string describing the finally selected color.

## See also

- [Drawing graphics](/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Drawing_graphics)
- [Graphics on the web](/en-US/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML#other_graphics_on_the_web)
- [Using relative colors](/en-US/docs/Web/CSS/CSS_colors/Relative_colors)
- [CSS color module](/en-US/docs/Web/CSS/CSS_colors)
