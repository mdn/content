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

RGB (Red/Green/Blue) functional notation, like hexadecimal string notation, represents colors using their red, green, and blue components (as well as, optionally, an alpha channel component for opacity). However, instead of using a string, the color is defined using the CSS function {{cssxref("color_value", "rgb()", "rgb()")}}. This function accepts as its input parameters the values of the red, green, and blue components and an optional fourth parameter, the value for the alpha channel.

Legal values for each of these parameters are:

- `red`, `green`, and `blue`
  - : Each must be an {{cssxref("&lt;integer&gt;")}} value between 0 and 255 (inclusive), or a {{cssxref("&lt;percentage&gt;")}} from 0% to 100%.
- `alpha`
  - : The alpha channel is specified as a percentage between 0% (fully transparent) and 100% (fully opaque), or a number between 0.0 (equivalent to 0%) and 1.0 (equivalent to 100%).

For example, a bright red that's 50% opaque can be represented as `rgb(255 0 0 / 50%)` or `rgb(100% 0 0 / 0.5)`.

See the {{cssxref("color_value", "rgb()", "rgb()")}} color function for more information on the RGB functional notation.

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

The `lch()` and `oklch()` functions use lightness (L), chroma (C), and hue (H).

Similar to the sRGB hue color functions, the hue (`h`) value in `lch()` and `oklch()` are a number, an angle, or the keyword `none` (equivalent to 0deg) representing the color's `<hue>` angle. However, the angles corresponding to particular hues differ across the sRGB, CIELAB (used by `lch()`), and Oklab (used by `oklch()`) color spaces.

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
    lch(50% 150 0deg),
    lch(50% 150 90deg),
    lch(50% 150 180deg),
    lch(50% 150 270deg),
    lch(50% 150 360deg)
  );
}
#oklch {
  background: linear-gradient(
    to right,
    oklch(50% 0.4 0deg),
    oklch(50% 0.4 90deg),
    oklch(50% 0.4 180deg),
    oklch(50% 0.4 270deg),
    oklch(50% 0.4 360deg)
  );
}
```

{{embedlivesample("hues", '100', '260') }}

Select the checkbox in the example above to convert the hue gradient to greyscale.

See the {{cssxref("hue")}} reference page for more details and examples.

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

## Using color wisely

Making the right choices when selecting colors when designing a website can be a tricky process, especially if you aren't well-grounded in art, design, or at least basic color theory. The wrong color choice can render your site unattractive, or even worse, leave the content unreadable due to problems with contrast or conflicting colors. Worse still, if using the wrong colors can result in your content being outright unusable by people with certain vision problems, particularly color blindness.

### Finding the right colors

Coming up with just the right colors can be tricky, especially without training in art or design. Fortunately, there are tools available that can help you. While they can't replace having a good designer helping you make these decisions, they can definitely get you started.

#### Base color

The first step is to choose your **base color**. This is the color that in some way defines your website or the subject matter of the site. Just as we associate green with the beverage [Mountain Dew](https://en.wikipedia.org/wiki/Mountain_Dew) and one might think of the color blue in relationship with the sky or the ocean, choosing an appropriate base color to represent your site is a good place to start. There are plenty of ways to select a base color; a few ideas include:

- A color that is naturally associated with the topic of your content, such as the existing color identified with a product or idea or a color representative of the emotion you wish to convey.
- A color that comes from imagery associated with what your content is about. If you're creating a website about a given item or product, choose a color that's physically present on that item.
- Browse websites that let you look at lots of existing color palettes and images to find inspiration.

When trying to decide upon a base color, you may find that browser extensions that let you select colors from web content can be particularly handy. Some of these are even specifically designed to help with this sort of work. For example, the website [ColorZilla](https://www.colorzilla.com/) offers an extension ([Chrome](https://www.colorzilla.com/chrome/) / [Firefox](https://www.colorzilla.com/firefox/)) that offers an eyedropper tool for picking colors from the web. It can also take averages of the colors of pixels in various sized areas or even a selected area of the page.

> **Note:** The advantage to averaging colors can be that often what looks like a solid color is actually a surprisingly varied number of related colors all used in concert, blending to create a desired effect. Picking just one of these pixels can result in getting a color that on its own looks very out of place.

#### Fleshing out the palette

Once you have decided on your base color, there are plenty of online tools that can help you build out a palette of appropriate colors to use along with your base color by applying color theory to your base color to determine appropriate added colors. Many of these tools also support viewing the colors filtered so you can see what they would look like to people with various forms of color blindness. See [Color and accessibility](#color_and_accessibility) for a brief explanation of why this matters.

A few examples (all free to use as of the time this list was last revised):

- [MDN's color picker tool](/en-US/docs/Web/CSS/CSS_colors/Color_picker_tool)
- [Paletton](https://paletton.com/)
- [Adobe Color CC online color wheel](https://color.adobe.com/create/color-wheel)

When designing your palette, be sure to keep in mind that in addition to the colors these tools typically generate, you'll probably also need to add some core neutral colors such as white (or nearly white), black (or nearly black), and some number of shades of gray.

> **Note:** Usually, you are far better off using the smallest number of colors possible. By using color to accentuate rather than adding color to everything on the page, you keep your content easy to read and the colors you do use have far more impact.

### Color theory resources

A full review of color theory is beyond the scope of this article, but there are plenty of articles about color theory available, as well as courses you can find at nearby schools and universities. A couple of useful resources about color theory:

- [Color Science](https://www.khanacademy.org/computing/pixar/color) ([Khan Academy](https://www.khanacademy.org/) in association with [Pixar](https://www.pixar.com/))
  - : An online course which introduces concepts such as what color is, how it's perceived, and how to use colors to express ideas. Presented by Pixar artists and designers.
- [Color theory](https://en.wikipedia.org/wiki/Color_theory) on Wikipedia
  - : Wikipedia's entry on color theory, which has a lot of great information from a technical perspective. It's not really a resource for helping you with the color selection process, but is still full of useful information.

### Color and accessibility

There are several ways color can be an {{Glossary("accessibility")}} problem. Improper or careless use of color can result in a website or app that a percentage of your target audience may not be able to use adequately, resulting in lost traffic, lost business, and possibly even a public relations problem. So it's important to consider your use of color carefully.

You should do at least basic research into [color blindness](https://en.wikipedia.org/wiki/Color_blindness). There are several kinds; the most common is red-green color blindness, which causes people to be unable to differentiate between the colors red and green. There are others, too, ranging from inabilities to tell the difference between certain colors to total inability to see color at all.

> **Note:** The most important rule: never use color as the only way to know something. If, for example, you indicate success or failure of an operation by changing the color of a shape from white to green for success and red for failure, users with red-green color-blindness won't be able to use your site properly. Instead, perhaps use both text and color together, so that everyone can understand what's happening.

For more information about color blindness, see the following articles:

- [Medline Plus: Color Blindness](https://medlineplus.gov/colorblindness.html) (United States National Institute of Health)
- [American Academy of Ophthalmology: What Is Color Blindness?](https://www.aao.org/eye-health/diseases/what-is-color-blindness)
- [Color Blindness & Web Design](https://www.usability.gov/get-involved/blog/2010/02/color-blindness.html) (Usability.gov: United States Department of Health and Human Services)

### Palette design example

Let's consider a quick example of selecting an appropriate color palette for a site. Imagine that you're building a website for a new game that takes place on the planet Mars. So let's do a [Google search for photos of Mars](https://www.google.com/search?q=Mars&tbm=isch). Lots of good examples of Martian coloration there. We carefully avoid the mockups and the photos from movies. And we decide to use a photo taken by one of the Mars landers humanity has parked on the surface over the last few decades, since the game takes place on the planet's surface. We use a color picker tool to select a sample of the color we choose.

Using an eyedropper tool, we identify a color we like and determine that the color in question is `#D79C7A`, which is an appropriate rusty orange-red color that's so stereotypical of the Martian surface.

Having selected our base color, we need to build out our palette. We decide to use [Paletton](https://www.paletton.com/) to come up with the other colors we need. Upon opening Paletton, we see:

![Right after loading Paletton.](paletton1.png)

Next, we enter our color's hex code (`D79C7A`) into the "Base RGB" box at the bottom-left corner of the tool:

![After entering base color](paletton2.png)

We now see a monochromatic palette based on the color we picked from the Mars photo. If you need a lot of related colors for some reason, those are likely to be good ones. But what we really want is an accent color. Something that will pop along side the base color. To find that, we click the "add complementary" toggle underneath the menu that lets you select the palette type (currently "Monochromatic"). Paletton computes an appropriate accent color; clicking on the accent color down in the bottom-right corner tells us that this color is `#508D7C`.

![Now with complementary colors included.](paletton3.png)

If you're unhappy with the color that's proposed to you, you can change the color scheme, to see if you find something you like better. For example, if we don't like the proposed greenish-blue color, we can click the Triad color scheme icon, which presents us with the following:

![Triad color scheme selected](paletton4.png)

That greyish blue in the top-right looks pretty good. Clicking on it, we find that it's `#556E8D`. That would be used as the accent color, to be used sparingly to make things stand out, such as in headlines or in the highlighting of tabs or other indicators on the site:

![Triad color scheme selected](paletton-color-detail.png)

Now we have our base color and our accent. On top of that, we have a few complementary shades of each, just in case we need them for gradients and the like. The colors can then be exported in a number of formats so you can make use of them.

Once you have these colors, you will probably still need to select appropriate neutral colors. Common design practice is to try to find the sweet spot where there's just enough contrast that the text is crisp and readable but not enough contrast to become harsh for the eyes. It's easy to go too far in one way or another so be sure to get feedback on your colors once you've selected them and have examples of them in use available. If the contrast is too low, your text will tend to be washed out by the background, leaving it unreadable, but if your contrast is too high, the user may find your site garish and unpleasant to look at.

### Color, backgrounds, contrast, and printing

What looks good on screen may look very different on paper.
In addition, ink can be expensive, and if a user is printing your page, they don't necessarily need all the backgrounds and such using up their precious ink when all that matters is the text itself.
Most browsers, by default, remove background images when printing documents.

If your background colors and images have been selected carefully and/or are crucial to the usefulness of the content, you can use the CSS {{cssxref("print-color-adjust")}} property to tell the browser that it should not make adjustments to the appearance of content.

The default value of `print-color-adjust`, `economy`, indicates that the browser is allowed to make appearance changes as it deems necessary in order to try to optimize the legibility and/or print economy of the content, given the type of output device the document is being drawn onto.

You can set `print-color-adjust` to `exact` to tell the browser that the element or elements on which you use it have been designed specifically to best work with the colors and images left as they are.
With this set, the browser won't tamper with the appearance of the element, and will draw it as indicated by your CSS.

> **Note:** There is no guarantee, though, that `print-color-adjust: exact` will result in your CSS being used exactly as given.
> If the browser provides user preferences to change the output (such as a "don't print backgrounds" checkbox in a print dialog box), that overrides the value of `print-color-adjust`.

## See also

- [Drawing graphics](/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Drawing_graphics)
- [Graphics on the web](/en-US/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML#other_graphics_on_the_web)
- [Using relative colors](/en-US/docs/Web/CSS/CSS_colors/Relative_colors)
- [CSS color module](/en-US/docs/Web/CSS/CSS_colors)
