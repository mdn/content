---
title: <color>
slug: Web/CSS/color_value
tags:
  - CSS
  - CSS Data Type
  - Data Type
  - Layout
  - Reference
  - Web
  - color
  - hsl
  - hsla
  - rgb
  - rgba
  - unit
  - lch
  - lab
  - lwb
browser-compat: css.types.color
---
{{CSSRef}}

The **`<color>`** [CSS](/en-US/docs/Web/CSS) [data type](/en-US/docs/Web/CSS/CSS_Types) represents a color.
A `<color>` may also include an [alpha-channel](https://en.wikipedia.org/wiki/Alpha_compositing) _transparency value_, indicating how the color should [composite](https://www.w3.org/TR/2003/REC-SVG11-20030114/masking.html#SimpleAlphaBlending) with its background.

A `<color>` can be defined in any of the following ways:

- Using a keyword (such as `blue` or `transparent`). All existing keywords specify a color in the [sRGB color space](https://en.wikipedia.org/wiki/SRGB).
- Using the [RGB cubic-coordinate](https://en.wikipedia.org/wiki/RGB_color_model#Geometric_representation) system (via the #-hexadecimal or the `rgb()` and `rgba()` functional notations).
  These always specify a color in the [sRGB color space](https://en.wikipedia.org/wiki/SRGB).
- Using the [HSL cylindrical-coordinate](https://en.wikipedia.org/wiki/HSL_and_HSV) system (via the {{cssxref("color_value/hsl","hsl()")}} and {{cssxref("color_value/hsla","hsla()")}} functional notations).
  These always specify a color in the [sRGB color space](https://en.wikipedia.org/wiki/SRGB).
- Using the [HWB cylindrical-coordinate](https://en.wikipedia.org/wiki/HWB_color_model) system (via the {{cssxref("color_value/hwb","hwb()")}} functional notation).
  These always specify a color in the [sRGB color space](https://en.wikipedia.org/wiki/SRGB).
- Using the [LCH cylindrical coordinate system](https://en.wikipedia.org/wiki/CIELAB_color_space#Cylindrical_representation:_CIELCh_or_CIEHLC), via the {{cssxref("color_value/lch","lch()")}} functional notation.
  This can specify any visible color.
- Using the [Lab coordinate system](https://en.wikipedia.org/wiki/CIELAB_color_space), via the {{cssxref("color_value/lab","lab()")}} functional notation.
  This can specify any visible color.
- Using the {{cssxref("color_value/color","color()")}} functional notation, to specify a color in a variety of predefined or custom color spaces.

> **Note:** This article describes the `<color>` data type in detail. To learn more about using color in HTML, see [Applying color to HTML elements using CSS](/en-US/docs/Web/CSS/CSS_Colors/Applying_color).

## Syntax

The `<color>` data type is specified using one of the options listed below.

> **Note:** Although `<color>` values are precisely defined, their actual appearance may vary (sometimes significantly) from device to device. This is because most devices are not calibrated, and some browsers do not support output devices' [color profiles](https://en.wikipedia.org/wiki/ICC_profile).

### Named colors

Named colors are case-insensitive identifiers that represent a specific color, such as `red`, `blue`, `black`, or `lightseagreen`. Although the names more or less describe their respective colors, they are essentially artificial, without a strict rationale behind the names used.

The complete list of such keywords is available [here](/en-US/docs/Web/CSS/named-color).

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

{{EmbedLiveSample('currentcolor_keyword', 600, 80)}}

### RGB color model

The RGB color model defines a given color in the [sRGB color space](https://en.wikipedia.org/wiki/SRGB) according to its red, green, and blue components. An optional alpha component represents the color's transparency.

RGB colors can be expressed through both hexadecimal (prefixed with `#`) and functional (`rgb()`, `rgba()`) notations.

- [Hexadecimal notation](/en-US/docs/Web/CSS/hex-color): `#RGB[A]` or`#RRGGBB[AA]`
  - : `R` (red), `G` (green), `B` (blue), and `A` (alpha) are hexadecimal characters (0–9, A–F). `A` is optional. For example, `#ff0000` is equivalent to `#ff0000ff`. The three-digit notation (`#RGB`) is a shorter version of the six-digit form (`#RRGGBB`). For example, `#f09` is the same color as `#ff0099`. Likewise, the four-digit RGB notation (`#RGBA`) is a shorter version of the eight-digit form (`#RRGGBBAA`). For example, `#0f38` is the same color as `#00ff3388`.
- [`rgb()`](/en-US/docs/Web/CSS/color_value/rgb) or [`rgba()`](/en-US/docs/Web/CSS/color_value/rgba): `rgb[a](R, G, B[, A])` or `rgb[a](R G B[ / A])`
  - : `R` (red), `G` (green), and `B` (blue) can be either {{cssxref("&lt;number&gt;")}}s or {{cssxref("&lt;percentage&gt;")}}s, where the number `255` corresponds to `100%`. `A` (alpha) can be a {{cssxref("&lt;number&gt;")}} between `0` and `1`, or a {{cssxref("&lt;percentage&gt;")}}, where the number `1` corresponds to `100%` (full opacity).

### HSL color model

The HSL color model defines a given color in the [sRGB color space](https://en.wikipedia.org/wiki/SRGB) according to its hue, saturation, and lightness components. An optional alpha component represents the color's transparency.

Many designers find HSL more intuitive than RGB, since it allows hue, saturation, and lightness to each be adjusted independently. HSL can also make it easier to create a set of matching colors (such as when you want multiple shades of a single hue).
However, using HSL to create color variations can produce surprising results, as it is not [perceptually uniform](https://en.wikipedia.org/wiki/Color_difference#Tolerance). For example, both `hsl(240 100% 50%)` and `hsl(60 100% 50%)` have the same lightness, even though the former is much darker than the latter.

HSL colors are expressed through the functional `hsl()` and `hsla()` notations.

- [`hsl()`](/en-US/docs/Web/CSS/color_value/hsl) or [`hsla()`](/en-US/docs/Web/CSS/color_value/hsla): `hsl[a](H, S, L[, A])` or `hsl[a](H S L[ / A])`

  - : `H` (hue) is an {{cssxref("&lt;angle&gt;")}} of the color circle given in `deg`s, `rad`s, `grad`s, or `turn`s in the [CSS Color](https://drafts.csswg.org/css-color/#the-hsl-notation) specification. When written as a unitless {{cssxref("&lt;number&gt;")}}, it is interpreted as degrees, as specified in the [CSS Color Level 3](https://drafts.csswg.org/css-color-3/#hsl-color) specification. By definition, red=0deg=360deg, with the other colors spread around the circle, so green=120deg, blue=240deg, etc. As an `<angle>`, it implicitly wraps around such that -120deg=240deg, 480deg=120deg, -1turn=1turn, etc.

    `S` (saturation) and `L` (lightness) are percentages. `100%` **saturation** is completely saturated, while `0%` is completely unsaturated (gray). `100%` **lightness** is white, `0%` lightness is black, and `50%` lightness is "normal".

    `A` (alpha) can be a {{cssxref("&lt;number&gt;")}} between `0` and `1`, or a {{cssxref("&lt;percentage&gt;")}}, where the number `1` corresponds to `100%` (full opacity).

### HWB color model

Similar to HSL color model, the HWB color model defines a given color in the [sRGB color space](https://en.wikipedia.org/wiki/SRGB) according to its hue, whiteness and blackness components.

As with HSL, HWB can be more intuitive to use than RGB. A hue is specified in the same way, followed by the amount of whiteness and blackness, respectively, in percentage values. This function also accepts a alpha value.

> **Note:** There is **no** separate `hwba()` function as there is with HSL, the alpha value is an optional parameter, if it is not specified an alpha value of 1 (or 100%) is used. To specify this value a forward slash (`/`) must follow the blackness value before the alpha value is specified.

HWB colors are expressed through the functional `hwb()` notation.

> **Note:** The HWB function does **not** use commas to separate its values as with previous color functions.

- [`hwb()`](/en-US/docs/Web/CSS/color_value/hwb): `hwb(H W B[ / A])`

  - : Same as HSL: `H` (hue) is an {{cssxref("&lt;angle&gt;")}} of the color circle given in `deg`s, `rad`s, `grad`s, or `turn`s in the [CSS Color](https://drafts.csswg.org/css-color/#the-hsl-notation) specification. When written as a unitless {{cssxref("&lt;number&gt;")}}, it is interpreted as degrees, as specified in the [CSS Color Level 3](https://drafts.csswg.org/css-color-3/#hsl-color) specification. By definition, red=0deg=360deg, with the other colors spread around the circle, so green=120deg, blue=240deg, etc. As an `<angle>`, it implicitly wraps around such that -120deg=240deg, 480deg=120deg, -1turn=1turn, etc.

    `W` (whiteness) and `B` (blackness) are percentages. These two colors mix, so you would need `0%` **whiteness** and `100%` **blackness** to produce the color black. And vice versa `100%` whiteness and `0%` blackness for the color white. `50%` of both values renders a mid grey and any other variations a shade of the hue specified.

    `A` (alpha), optional, can be a {{cssxref("&lt;number&gt;")}} between `0` and `1`, or a {{cssxref("&lt;percentage&gt;")}}, where the number `1` corresponds to `100%` (full opacity). When specifying an alpha value it must be preceded with a forward slash (`/`).

### System Colors

In _forced colors mode_ (detectable with the [forced-colors](/en-US/docs/Web/CSS/@media/forced-colors) media query), most colors are restricted into a user- and browser-defined palette. These system colors are exposed by the following keywords, which can be used to ensure that the rest of the page integrates well with the restricted palette. These values may also be used in other contexts, but are not widely supported by browsers.

The keywords in the following list are defined by the CSS Color Module Level 4 specification: `ActiveText`, `ButtonBorder`, `ButtonFace`, `ButtonText`, `Canvas`, `CanvasText`, `Field`, `FieldText`, `GrayText`, `Highlight`, `HighlightText`, `LinkText`, `Mark`, `MarkText`, `VisitedText`.

> **Note:** Note that these keywords are _case insensitive_, but are listed here with mixed case for readability.

### Lab colors

CSS Color 4 introduced Lab colors.
Lab colors are specified via the {{cssxref("color_value/lab","lab()")}} functional notation.
They are not limited to a specific color space, and can represent the entire spectrum of human vision.

### LCH color model

CSS Color 4 introduced LCH colors.
LCH colors are specified via the {{cssxref("color_value/lch","lch()")}} functional notation.
They are not limited to a specific color space, and can represent the entire spectrum of human vision.

In fact, LCH is the polar form of Lab. It is more human friendly than Lab, as its chroma and hue components specify qualities of the desired color, as opposed to mixing.
It is similar to HSL in that way, although it is far more perceptually uniform.
Unlike HSL that describes both `hsl(60 100% 50%)` `hsl(240 100% 50%)` as having the same lightness, LCH (and Lab) correctly ascribes different lightnesses to them:
the former (yellow) has an L of 97.6 and the latter (blue) an L of 29.6.
Therefore, LCH can be used to create palettes across entirely different colors, with predictable results.
Please note that LCH hue is not the same as HSL hue and LCH chroma is not the same as HSL saturation, although they do share some conceptual similarities.

### color() colors

CSS Color 4 introduced this notation.
Colors specified via the {{cssxref("color_value/color","color()")}} function can specify a color in any of the predefined color spaces,
as well as custom color spaces, defined via the [`@color-profile`](/en-US/docs/Web/CSS/@color-profile) rule.

## Interpolation

In animations and [gradients](/en-US/docs/Web/CSS/CSS_Images/Using_CSS_gradients), `<color>` values are {{Glossary("interpolation", "interpolated")}} on each of their red, green, and blue components. Each component is interpolated as a real, floating-point number. Note that interpolation of colors happens in the [alpha-premultiplied sRGBA color space](https://www.w3.org/TR/css-color-4/#interpolation-alpha) to prevent unexpected gray colors from appearing. In animations, the interpolation's speed is determined by the [timing function](/en-US/docs/Web/CSS/easing-function).

## Accessibility considerations

Some people have difficulty distinguishing colors. The [WCAG 2.0](https://www.w3.org/TR/WCAG/#visual-audio-contrast) recommendation strongly advises against using color as the only means of conveying a specific message, action, or result. See [Color and color contrast](/en-US/docs/Learn/Accessibility/CSS_and_JavaScript#color_and_color_contrast) for more information.

## Formal syntax

{{csssyntax}}

## Examples

### Color value tester

In this example we provide a `<div>` and a text input. Entering a valid color into the input causes the `<div>` to adopt that color, allowing you to test our color values.

#### HTML

```html
<div></div>
<hr>
<label for="color">Enter a valid color value:</label>
<input type="text" id="color">
```

#### CSS

```css
div {
  width: 100%;
  height: 200px;
}
```

```js hidden
const inputElem = document.querySelector('input');
const divElem = document.querySelector('div');

function validTextColor(stringToTest) {
  if (stringToTest === "") { return false; }
  if (stringToTest === "inherit") { return false; }
  if (stringToTest === "transparent") { return false; }

  const image = document.createElement("img");
  image.style.color = "rgb(0, 0, 0)";
  image.style.color = stringToTest;
  if (image.style.color !== "rgb(0, 0, 0)") { return true; }
  image.style.color = "rgb(255, 255, 255)";
  image.style.color = stringToTest;
  return image.style.color !== "rgb(255, 255, 255)";
}

inputElem.addEventListener('change', () => {
  if (validTextColor(inputElem.value)) {
    divElem.style.backgroundColor = inputElem.value;
    divElem.textContent = '';
  } else {
    divElem.style.backgroundColor = 'white';
    divElem.textContent = 'Invalid color value';
  }
});
```

#### Result

{{EmbedLiveSample('Color_value_tester','100%', 300)}}

### RGB syntax variations

This example shows the many ways in which a single color can be created with the various RGB color syntaxes.

```css
/* These syntax variations all specify the same color: a fully opaque hot pink. */

/* Hexadecimal syntax */
#f09
#F09
#ff0099
#FF0099

/* Functional syntax */
rgb(255,0,153)
rgb(255, 0, 153)
rgb(255, 0, 153.0)
rgb(100%,0%,60%)
rgb(100%, 0%, 60%)
rgb(100%, 0, 60%) /* ERROR! Don't mix numbers and percentages. */
rgb(255 0 153)

/* Hexadecimal syntax with alpha value */
#f09f
#F09F
#ff0099ff
#FF0099FF

/* Functional syntax with alpha value */
rgb(255, 0, 153, 1)
rgb(255, 0, 153, 100%)

/* Whitespace syntax */
rgb(255 0 153 / 1)
rgb(255 0 153 / 100%)

/* Functional syntax with floats value */
rgb(255, 0, 153.6, 1)
rgb(2.55e2, 0e0, 1.53e2, 1e2%)
```

### RGB transparency variations

```css
/* Hexadecimal syntax */
#3a30                    /*   0% opaque green */
#3A3F                    /* full opaque green */
#33aa3300                /*   0% opaque green */
#33AA3380                /*  50% opaque green */

/* Functional syntax */
rgba(51, 170, 51, .1)    /*  10% opaque green */
rgba(51, 170, 51, .4)    /*  40% opaque green */
rgba(51, 170, 51, .7)    /*  70% opaque green */
rgba(51, 170, 51,  1)    /* full opaque green */

/* Whitespace syntax */
rgba(51 170 51 / 0.4)    /*  40% opaque green */
rgba(51 170 51 / 40%)    /*  40% opaque green */

/* Functional syntax with floats value */
rgba(51, 170, 51.6, 1)
rgba(5.1e1, 1.7e2, 5.1e1, 1e2%)
```

### HSL syntax variations

```css
/* These examples all specify the same color: a lavender. */
hsl(270,60%,70%)
hsl(270, 60%, 70%)
hsl(270 60% 70%)
hsl(270deg, 60%, 70%)
hsl(4.71239rad, 60%, 70%)
hsl(.75turn, 60%, 70%)

/* These examples all specify the same color: a lavender that is 15% opaque. */
hsl(270, 60%, 50%, .15)
hsl(270, 60%, 50%, 15%)
hsl(270 60% 50% / .15)
hsl(270 60% 50% / 15%)
```

### HWB syntax variations

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

### Fully saturated colors

<table>
  <thead>
    <tr>
      <th scope="col">Notation</th>
      <th scope="col">Description</th>
      <th scope="col">Live</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>hsl(0, 100%, 50%)</code></td>
      <td>red</td>
      <td style="background: hsl(0, 100%, 50%)"></td>
    </tr>
    <tr>
      <td><code>hsl(30, 100%, 50%)</code></td>
      <td>orange</td>
      <td style="background: hsl(30, 100%, 50%)"></td>
    </tr>
    <tr>
      <td><code>hsl(60, 100%, 50%)</code></td>
      <td>yellow</td>
      <td style="background: hsl(60, 100%, 50%)"></td>
    </tr>
    <tr>
      <td><code>hsl(90, 100%, 50%)</code></td>
      <td>lime green</td>
      <td style="background: hsl(90, 100%, 50%)"></td>
    </tr>
    <tr>
      <td><code>hsl(120, 100%, 50%)</code></td>
      <td>green</td>
      <td style="background: hsl(120, 100%, 50%)"></td>
    </tr>
    <tr>
      <td><code>hsl(150, 100%, 50%)</code></td>
      <td>blue-green</td>
      <td style="background: hsl(150, 100%, 50%)"></td>
    </tr>
    <tr>
      <td><code>hsl(180, 100%, 50%)</code></td>
      <td>cyan</td>
      <td style="background: hsl(180, 100%, 50%)"></td>
    </tr>
    <tr>
      <td><code>hsl(210, 100%, 50%)</code></td>
      <td>sky blue</td>
      <td style="background: hsl(210, 100%, 50%)"></td>
    </tr>
    <tr>
      <td><code>hsl(240, 100%, 50%)</code></td>
      <td>blue</td>
      <td style="background: hsl(240, 100%, 50%)"></td>
    </tr>
    <tr>
      <td><code>hsl(270, 100%, 50%)</code></td>
      <td>purple</td>
      <td style="background: hsl(270, 100%, 50%)"></td>
    </tr>
    <tr>
      <td><code>hsl(300, 100%, 50%)</code></td>
      <td>magenta</td>
      <td style="background: hsl(300, 100%, 50%)"></td>
    </tr>
    <tr>
      <td><code>hsl(330, 100%, 50%)</code></td>
      <td>pink</td>
      <td style="background: hsl(330, 100%, 50%)"></td>
    </tr>
    <tr>
      <td><code>hsl(360, 100%, 50%)</code></td>
      <td>red</td>
      <td style="background: hsl(360, 100%, 50%)"></td>
    </tr>
  </tbody>
</table>

### Lighter and darker greens

<table>
  <thead>
    <tr>
      <th scope="col">Notation</th>
      <th scope="col">Description</th>
      <th scope="col">Live</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>hsl(120, 100%, 0%)</code></td>
      <td>black</td>
      <td style="background: hsl(120, 100%, 0%)"></td>
    </tr>
    <tr>
      <td><code>hsl(120, 100%, 20%)</code></td>
      <td></td>
      <td style="background: hsl(120, 100%, 20%)"></td>
    </tr>
    <tr>
      <td><code>hsl(120, 100%, 40%)</code></td>
      <td></td>
      <td style="background: hsl(120, 100%, 40%)"></td>
    </tr>
    <tr>
      <td><code>hsl(120, 100%, 60%)</code></td>
      <td></td>
      <td style="background: hsl(120, 100%, 60%)"></td>
    </tr>
    <tr>
      <td><code>hsl(120, 100%, 80%)</code></td>
      <td></td>
      <td style="background: hsl(120, 100%, 80%)"></td>
    </tr>
    <tr>
      <td><code>hsl(120, 100%, 100%)</code></td>
      <td>white</td>
      <td style="background: hsl(120, 100%, 100%)"></td>
    </tr>
  </tbody>
</table>

### Saturated and desaturated greens

<table>
  <thead>
    <tr>
      <th scope="col">Notation</th>
      <th scope="col">Description</th>
      <th scope="col">Live</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>hsl(120, 100%, 50%)</code></td>
      <td>green</td>
      <td style="background: hsl(120, 100%, 50%)"></td>
    </tr>
    <tr>
      <td><code>hsl(120, 80%, 50%)</code></td>
      <td></td>
      <td style="background: hsl(120, 80%, 50%)"></td>
    </tr>
    <tr>
      <td><code>hsl(120, 60%, 50%)</code></td>
      <td></td>
      <td style="background: hsl(120, 60%, 50%)"></td>
    </tr>
    <tr>
      <td><code>hsl(120, 40%, 50%)</code></td>
      <td></td>
      <td style="background: hsl(120, 40%, 50%)"></td>
    </tr>
    <tr>
      <td><code>hsl(120, 20%, 50%)</code></td>
      <td></td>
      <td style="background: hsl(120, 20%, 50%)"></td>
    </tr>
    <tr>
      <td><code>hsl(120, 0%, 50%)</code></td>
      <td>gray</td>
      <td style="background: hsl(120, 0%, 50%)"></td>
    </tr>
  </tbody>
</table>

### HSL transparency variations

```css
hsla(240, 100%, 50%, .05)     /*   5% opaque blue */
hsla(240, 100%, 50%, .4)      /*  40% opaque blue */
hsla(240, 100%, 50%, .7)      /*  70% opaque blue */
hsla(240, 100%, 50%, 1)       /* full opaque blue */

/* Whitespace syntax */
hsla(240 100% 50% / .05)      /*   5% opaque blue */

/* Percentage value for alpha */
hsla(240 100% 50% / 5%)       /*   5% opaque blue */
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{Cssxref("opacity")}} property lets you define transparency at the element level.
- Some common properties that use this data type: {{Cssxref("color")}}, {{Cssxref("background-color")}}, {{Cssxref("border-color")}}, {{Cssxref("box-shadow")}}, {{Cssxref("outline-color")}}, {{Cssxref("text-shadow")}}
- [Applying color to HTML elements using CSS](/en-US/docs/Web/CSS/CSS_Colors/Applying_color)
