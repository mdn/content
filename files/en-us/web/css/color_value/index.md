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
browser-compat: css.types.color
---
{{CSSRef}}

The **`<color>`** [CSS](/en-US/docs/Web/CSS) [data type](/en-US/docs/Web/CSS/CSS_Types) represents a color.
A `<color>` may also include an [alpha-channel](https://en.wikipedia.org/wiki/Alpha_compositing) _transparency value_, indicating how the color should [composite](https://www.w3.org/TR/2003/REC-SVG11-20030114/masking.html#SimpleAlphaBlending) with its background.

A `<color>` can be defined in any of the following ways:

- Using a keyword (such as `blue` or `transparent`). All existing keywords specify a color in the [sRGB color space](https://en.wikipedia.org/wiki/SRGB)
- Using the [RGB cubic-coordinate](https://en.wikipedia.org/wiki/RGB_color_model#Geometric_representation) system (via the #-hexadecimal or the `rgb()` and `rgba()` functional notations).
  These always specify a color in the [sRGB color space](https://en.wikipedia.org/wiki/SRGB)
- Using the [HSL cylindrical-coordinate](https://en.wikipedia.org/wiki/HSL_and_HSV) system (via the `hsl()` and `hsla()` functional notations).
  These always specify a color in the [sRGB color space](https://en.wikipedia.org/wiki/SRGB)
- Using the [LCH cylindrical coordinate system](https://en.wikipedia.org/wiki/CIELAB_color_space#Cylindrical_representation:_CIELCh_or_CIEHLC), via the `lch()` functional notation.
  This can specify any visible color.
- Using the [Lab coordinate system](https://en.wikipedia.org/wiki/CIELAB_color_space), via the `lab()` functional notation.
  This can specify any visible color.
- Using the `color()` functional notation, to specify a color in a variety of predifined or custom color spaces.

> **Note:** This article describes the `<color>` data type in detail. To learn more about using color in HTML, see [Applying color to HTML elements using CSS](/en-US/docs/Web/HTML/Applying_color).

## Syntax

The `<color>` data type is specified using one of the options listed below.

> **Note:** Although `<color>` values are precisely defined, their actual appearance may vary (sometimes significantly) from device to device. This is because most devices are not calibrated, and some browsers do not support output devices' [color profiles](https://en.wikipedia.org/wiki/ICC_profile).

### Color keywords

Color keywords are case-insensitive identifiers that represent a specific color, such as `red`, `blue`, `black`, or `lightseagreen`. Although the names more or less describes their respective colors, they are essentially artificial, without a strict rationale behind the names used.

There are a few caveats to consider when using color keywords:

- [HTML](/en-US/docs/Web/HTML) only recognizes the 16 basic color keywords found in CSS1, using a specific algorithm to convert unrecognized values (often to completely different colors). The other color keywords should only be used in CSS and [SVG](/en-US/docs/Web/SVG).
- Unlike HTML, CSS will completely ignore unknown keywords.
- The color keywords all represent plain, solid colors, without transparency.
- Several keywords are aliases for each other:

  - `aqua` / `cyan`
  - `fuchsia` / `magenta`
  - `darkgray` / `darkgrey`
  - `darkslategray` / `darkslategrey`
  - `dimgray` / `dimgrey`
  - `lightgray` / `lightgrey`
  - `lightslategray` / `lightslategrey`
  - `gray` / `grey`
  - `slategray` / `slategrey`

- Though many keywords have been adapted from [X11](https://en.wikipedia.org/wiki/X_Window_System), their RGB values may differ from the corresponding color on X11 systems since manufacturers sometimes tailor X11 colors to their specific hardware.

> **Note:** The list of accepted keywords has undergone many changes during the evolution of CSS:
>
> - CSS Level 1 only included 16 basic colors, called the _VGA colors_ as they were taken from the set of displayable colors on [VGA](https://en.wikipedia.org/wiki/VGA) graphics cards.
> - CSS Level 2 added the `orange` keyword.
> - Although various colors not in the specification (mostly adapted from the X11 colors list) were supported by early browsers, it wasn't until SVG 1.0 and CSS Colors Level 3 that they were formally defined. They are called the _extended color keywords_, the _X11 colors_, or the _SVG colors_.
> - CSS Colors Level 4 added the `rebeccapurple` keyword [to honor web pioneer Eric Meyer](https://codepen.io/trezy/post/honoring-a-great-man).

<table>
  <thead>
    <tr>
      <th scope="col">Specification</th>
      <th scope="col">Keyword</th>
      <th scope="col">RGB hex value</th>
      <th scope="col">Live keyword</th>
    </tr>
  </thead>
  <tbody>
    <tr style="position: relative">
      <td rowspan="16">{{SpecName("CSS1")}}</td>
      <td style="text-align: center"><code>black</code></td>
      <td><code>#000000</code></td>
      <td style="background: black"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>silver</code></td>
      <td><code>#c0c0c0</code></td>
      <td style="background: silver"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>gray</code></td>
      <td><code>#808080</code></td>
      <td style="background: gray"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>white</code></td>
      <td><code>#ffffff</code></td>
      <td style="background: white"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>maroon</code></td>
      <td><code>#800000</code></td>
      <td style="background: maroon"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>red</code></td>
      <td><code>#ff0000</code></td>
      <td style="background: red"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>purple</code></td>
      <td><code>#800080</code></td>
      <td style="background: purple"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>fuchsia</code></td>
      <td><code>#ff00ff</code></td>
      <td style="background: fuchsia"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>green</code></td>
      <td><code>#008000</code></td>
      <td style="background: green"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>lime</code></td>
      <td><code>#00ff00</code></td>
      <td style="background: lime"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>olive</code></td>
      <td><code>#808000</code></td>
      <td style="background: olive"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>yellow</code></td>
      <td><code>#ffff00</code></td>
      <td style="background: yellow"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>navy</code></td>
      <td><code>#000080</code></td>
      <td style="background: navy"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>blue</code></td>
      <td><code>#0000ff</code></td>
      <td style="background: blue"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>teal</code></td>
      <td><code>#008080</code></td>
      <td style="background: teal"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>aqua</code></td>
      <td><code>#00ffff</code></td>
      <td style="background: aqua"></td>
    </tr>
    <tr>
      <td>{{SpecName("CSS2.1")}}</td>
      <td style="text-align: center"><code>orange</code></td>
      <td><code>#ffa500</code></td>
      <td style="background: orange"></td>
    </tr>
    <tr>
      <td rowspan="130">{{SpecName("CSS3 Colors")}}</td>
      <td style="text-align: center"><code>aliceblue</code></td>
      <td><code>#f0f8ff</code></td>
      <td style="background: aliceblue"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>antiquewhite</code></td>
      <td><code>#faebd7</code></td>
      <td style="background: antiquewhite"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>aquamarine</code></td>
      <td><code>#7fffd4</code></td>
      <td style="background: aquamarine"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>azure</code></td>
      <td><code>#f0ffff</code></td>
      <td style="background: azure"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>beige</code></td>
      <td><code>#f5f5dc</code></td>
      <td style="background: beige"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>bisque</code></td>
      <td><code>#ffe4c4</code></td>
      <td style="background: bisque"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>blanchedalmond</code></td>
      <td><code>#ffebcd</code></td>
      <td style="background: blanchedalmond"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>blueviolet</code></td>
      <td><code>#8a2be2</code></td>
      <td style="background: blueviolet"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>brown</code></td>
      <td><code>#a52a2a</code></td>
      <td style="background: brown"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>burlywood</code></td>
      <td><code>#deb887</code></td>
      <td style="background: burlywood"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>cadetblue</code></td>
      <td><code>#5f9ea0</code></td>
      <td style="background: cadetblue"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>chartreuse</code></td>
      <td><code>#7fff00</code></td>
      <td style="background: chartreuse"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>chocolate</code></td>
      <td><code>#d2691e</code></td>
      <td style="background: chocolate"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>coral</code></td>
      <td><code>#ff7f50</code></td>
      <td style="background: coral"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>cornflowerblue</code></td>
      <td><code>#6495ed</code></td>
      <td style="background: cornflowerblue"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>cornsilk</code></td>
      <td><code>#fff8dc</code></td>
      <td style="background: cornsilk"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>crimson</code></td>
      <td><code>#dc143c</code></td>
      <td style="background: crimson"></td>
    </tr>
    <tr>
      <td style="text-align: center">
        <code>cyan</code><br />(synonym of <code>aqua</code>)
      </td>
      <td><code>#00ffff</code></td>
      <td style="background: cyan"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>darkblue</code></td>
      <td><code>#00008b</code></td>
      <td style="background: darkblue"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>darkcyan</code></td>
      <td><code>#008b8b</code></td>
      <td style="background: darkcyan"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>darkgoldenrod</code></td>
      <td><code>#b8860b</code></td>
      <td style="background: darkgoldenrod"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>darkgray</code></td>
      <td><code>#a9a9a9</code></td>
      <td style="background: darkgray"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>darkgreen</code></td>
      <td><code>#006400</code></td>
      <td style="background: darkgreen"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>darkgrey</code></td>
      <td><code>#a9a9a9</code></td>
      <td style="background: darkgrey"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>darkkhaki</code></td>
      <td><code>#bdb76b</code></td>
      <td style="background: darkkhaki"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>darkmagenta</code></td>
      <td><code>#8b008b</code></td>
      <td style="background: darkmagenta"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>darkolivegreen</code></td>
      <td><code>#556b2f</code></td>
      <td style="background: darkolivegreen"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>darkorange</code></td>
      <td><code>#ff8c00</code></td>
      <td style="background: darkorange"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>darkorchid</code></td>
      <td><code>#9932cc</code></td>
      <td style="background: darkorchid"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>darkred</code></td>
      <td><code>#8b0000</code></td>
      <td style="background: darkred"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>darksalmon</code></td>
      <td><code>#e9967a</code></td>
      <td style="background: darksalmon"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>darkseagreen</code></td>
      <td><code>#8fbc8f</code></td>
      <td style="background: darkseagreen"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>darkslateblue</code></td>
      <td><code>#483d8b</code></td>
      <td style="background: darkslateblue"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>darkslategray</code></td>
      <td><code>#2f4f4f</code></td>
      <td style="background: darkslategray"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>darkslategrey</code></td>
      <td><code>#2f4f4f</code></td>
      <td style="background: darkslategrey"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>darkturquoise</code></td>
      <td><code>#00ced1</code></td>
      <td style="background: darkturquoise"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>darkviolet</code></td>
      <td><code>#9400d3</code></td>
      <td style="background: darkviolet"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>deeppink</code></td>
      <td><code>#ff1493</code></td>
      <td style="background: deeppink"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>deepskyblue</code></td>
      <td><code>#00bfff</code></td>
      <td style="background: deepskyblue"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>dimgray</code></td>
      <td><code>#696969</code></td>
      <td style="background: dimgray"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>dimgrey</code></td>
      <td><code>#696969</code></td>
      <td style="background: dimgrey"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>dodgerblue</code></td>
      <td><code>#1e90ff</code></td>
      <td style="background: dodgerblue"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>firebrick</code></td>
      <td><code>#b22222</code></td>
      <td style="background: firebrick"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>floralwhite</code></td>
      <td><code>#fffaf0</code></td>
      <td style="background: floralwhite"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>forestgreen</code></td>
      <td><code>#228b22</code></td>
      <td style="background: forestgreen"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>gainsboro</code></td>
      <td><code>#dcdcdc</code></td>
      <td style="background: gainsboro"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>ghostwhite</code></td>
      <td><code>#f8f8ff</code></td>
      <td style="background: ghostwhite"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>gold</code></td>
      <td><code>#ffd700</code></td>
      <td style="background: gold"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>goldenrod</code></td>
      <td><code>#daa520</code></td>
      <td style="background: goldenrod"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>greenyellow</code></td>
      <td><code>#adff2f</code></td>
      <td style="background: greenyellow"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>grey</code></td>
      <td><code>#808080</code></td>
      <td style="background: grey"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>honeydew</code></td>
      <td><code>#f0fff0</code></td>
      <td style="background: honeydew"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>hotpink</code></td>
      <td><code>#ff69b4</code></td>
      <td style="background: hotpink"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>indianred</code></td>
      <td><code>#cd5c5c</code></td>
      <td style="background: indianred"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>indigo</code></td>
      <td><code>#4b0082</code></td>
      <td style="background: indigo"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>ivory</code></td>
      <td><code>#fffff0</code></td>
      <td style="background: ivory"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>khaki</code></td>
      <td><code>#f0e68c</code></td>
      <td style="background: khaki"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>lavender</code></td>
      <td><code>#e6e6fa</code></td>
      <td style="background: lavender"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>lavenderblush</code></td>
      <td><code>#fff0f5</code></td>
      <td style="background: lavenderblush"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>lawngreen</code></td>
      <td><code>#7cfc00</code></td>
      <td style="background: lawngreen"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>lemonchiffon</code></td>
      <td><code>#fffacd</code></td>
      <td style="background: lemonchiffon"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>lightblue</code></td>
      <td><code>#add8e6</code></td>
      <td style="background: lightblue"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>lightcoral</code></td>
      <td><code>#f08080</code></td>
      <td style="background: lightcoral"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>lightcyan</code></td>
      <td><code>#e0ffff</code></td>
      <td style="background: lightcyan"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>lightgoldenrodyellow</code></td>
      <td><code>#fafad2</code></td>
      <td style="background: lightgoldenrodyellow"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>lightgray</code></td>
      <td><code>#d3d3d3</code></td>
      <td style="background: lightgray"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>lightgreen</code></td>
      <td><code>#90ee90</code></td>
      <td style="background: lightgreen"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>lightgrey</code></td>
      <td><code>#d3d3d3</code></td>
      <td style="background: lightgrey"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>lightpink</code></td>
      <td><code>#ffb6c1</code></td>
      <td style="background: lightpink"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>lightsalmon</code></td>
      <td><code>#ffa07a</code></td>
      <td style="background: lightsalmon"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>lightseagreen</code></td>
      <td><code>#20b2aa</code></td>
      <td style="background: lightseagreen"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>lightskyblue</code></td>
      <td><code>#87cefa</code></td>
      <td style="background: lightskyblue"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>lightslategray</code></td>
      <td><code>#778899</code></td>
      <td style="background: lightslategray"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>lightslategrey</code></td>
      <td><code>#778899</code></td>
      <td style="background: lightslategrey"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>lightsteelblue</code></td>
      <td><code>#b0c4de</code></td>
      <td style="background: lightsteelblue"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>lightyellow</code></td>
      <td><code>#ffffe0</code></td>
      <td style="background: lightyellow"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>limegreen</code></td>
      <td><code>#32cd32</code></td>
      <td style="background: limegreen"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>linen</code></td>
      <td><code>#faf0e6</code></td>
      <td style="background: linen"></td>
    </tr>
    <tr>
      <td style="text-align: center">
        <code>magenta</code><br />(synonym of <code>fuchsia</code>)
      </td>
      <td><code>#ff00ff</code></td>
      <td style="background: magenta"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>mediumaquamarine</code></td>
      <td><code>#66cdaa</code></td>
      <td style="background: mediumaquamarine"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>mediumblue</code></td>
      <td><code>#0000cd</code></td>
      <td style="background: mediumblue"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>mediumorchid</code></td>
      <td><code>#ba55d3</code></td>
      <td style="background: mediumorchid"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>mediumpurple</code></td>
      <td><code>#9370db</code></td>
      <td style="background: mediumpurple"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>mediumseagreen</code></td>
      <td><code>#3cb371</code></td>
      <td style="background: mediumseagreen"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>mediumslateblue</code></td>
      <td><code>#7b68ee</code></td>
      <td style="background: mediumslateblue"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>mediumspringgreen</code></td>
      <td><code>#00fa9a</code></td>
      <td style="background: mediumspringgreen"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>mediumturquoise</code></td>
      <td><code>#48d1cc</code></td>
      <td style="background: mediumturquoise"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>mediumvioletred</code></td>
      <td><code>#c71585</code></td>
      <td style="background: mediumvioletred"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>midnightblue</code></td>
      <td><code>#191970</code></td>
      <td style="background: midnightblue"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>mintcream</code></td>
      <td><code>#f5fffa</code></td>
      <td style="background: mintcream"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>mistyrose</code></td>
      <td><code>#ffe4e1</code></td>
      <td style="background: mistyrose"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>moccasin</code></td>
      <td><code>#ffe4b5</code></td>
      <td style="background: moccasin"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>navajowhite</code></td>
      <td><code>#ffdead</code></td>
      <td style="background: navajowhite"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>oldlace</code></td>
      <td><code>#fdf5e6</code></td>
      <td style="background: oldlace"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>olivedrab</code></td>
      <td><code>#6b8e23</code></td>
      <td style="background: olivedrab"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>orangered</code></td>
      <td><code>#ff4500</code></td>
      <td style="background: orangered"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>orchid</code></td>
      <td><code>#da70d6</code></td>
      <td style="background: orchid"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>palegoldenrod</code></td>
      <td><code>#eee8aa</code></td>
      <td style="background: palegoldenrod"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>palegreen</code></td>
      <td><code>#98fb98</code></td>
      <td style="background: palegreen"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>paleturquoise</code></td>
      <td><code>#afeeee</code></td>
      <td style="background: paleturquoise"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>palevioletred</code></td>
      <td><code>#db7093</code></td>
      <td style="background: palevioletred"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>papayawhip</code></td>
      <td><code>#ffefd5</code></td>
      <td style="background: papayawhip"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>peachpuff</code></td>
      <td><code>#ffdab9</code></td>
      <td style="background: peachpuff"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>peru</code></td>
      <td><code>#cd853f</code></td>
      <td style="background: peru"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>pink</code></td>
      <td><code>#ffc0cb</code></td>
      <td style="background: pink"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>plum</code></td>
      <td><code>#dda0dd</code></td>
      <td style="background: plum"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>powderblue</code></td>
      <td><code>#b0e0e6</code></td>
      <td style="background: powderblue"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>rosybrown</code></td>
      <td><code>#bc8f8f</code></td>
      <td style="background: rosybrown"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>royalblue</code></td>
      <td><code>#4169e1</code></td>
      <td style="background: royalblue"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>saddlebrown</code></td>
      <td><code>#8b4513</code></td>
      <td style="background: saddlebrown"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>salmon</code></td>
      <td><code>#fa8072</code></td>
      <td style="background: salmon"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>sandybrown</code></td>
      <td><code>#f4a460</code></td>
      <td style="background: sandybrown"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>seagreen</code></td>
      <td><code>#2e8b57</code></td>
      <td style="background: seagreen"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>seashell</code></td>
      <td><code>#fff5ee</code></td>
      <td style="background: seashell"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>sienna</code></td>
      <td><code>#a0522d</code></td>
      <td style="background: sienna"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>skyblue</code></td>
      <td><code>#87ceeb</code></td>
      <td style="background: skyblue"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>slateblue</code></td>
      <td><code>#6a5acd</code></td>
      <td style="background: slateblue"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>slategray</code></td>
      <td><code>#708090</code></td>
      <td style="background: slategray"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>slategrey</code></td>
      <td><code>#708090</code></td>
      <td style="background: slategrey"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>snow</code></td>
      <td><code>#fffafa</code></td>
      <td style="background: snow"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>springgreen</code></td>
      <td><code>#00ff7f</code></td>
      <td style="background: springgreen"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>steelblue</code></td>
      <td><code>#4682b4</code></td>
      <td style="background: steelblue"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>tan</code></td>
      <td><code>#d2b48c</code></td>
      <td style="background: tan"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>thistle</code></td>
      <td><code>#d8bfd8</code></td>
      <td style="background: thistle"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>tomato</code></td>
      <td><code>#ff6347</code></td>
      <td style="background: tomato"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>turquoise</code></td>
      <td><code>#40e0d0</code></td>
      <td style="background: turquoise"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>violet</code></td>
      <td><code>#ee82ee</code></td>
      <td style="background: violet"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>wheat</code></td>
      <td><code>#f5deb3</code></td>
      <td style="background: wheat"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>whitesmoke</code></td>
      <td><code>#f5f5f5</code></td>
      <td style="background: whitesmoke"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>yellowgreen</code></td>
      <td><code>#9acd32</code></td>
      <td style="background: yellowgreen"></td>
    </tr>
    <tr>
      <td>{{SpecName("CSS4 Colors")}}</td>
      <td style="text-align: center">
        <a href="https://en.wikipedia.org/wiki/Eric_A._Meyer#Personal_life"
          ><code>rebeccapurple</code></a
        >
      </td>
      <td><code>#663399</code></td>
      <td style="background: rebeccapurple"></td>
    </tr>
  </tbody>
</table>

### `transparent` keyword

The `transparent` keyword represents a fully transparent color. This makes the background behind the colored item completely visible. Technically, `transparent` is a shortcut for `rgba(0,0,0,0)`.

> **Note:** To prevent unexpected behavior, such as in a {{cssxref("gradient")}}, the current CSS spec states that `transparent` should be calculated in the [alpha-premultiplied color space](https://www.w3.org/TR/2012/CR-css3-images-20120417/#color-stop-syntax). However, be aware that older browsers may treat it as black with an alpha value of `0`.

> **Note:** `transparent` wasn't a true color in CSS Level 2 (Revision 1). It was a special keyword that could be used instead of a regular `<color>` value on two CSS properties: {{Cssxref("background")}} and {{Cssxref("border")}}. It was essentially added to allow developers to override an inherited solid color. With the advent of alpha channels in CSS Colors Level 3, `transparent` was redefined as a true color. It can now be used wherever a `<color>` value can be used.

### `currentColor` keyword

The `currentColor` keyword represents the value of an element's {{Cssxref("color")}} property. This lets you use the `color` value on properties that do not receive it by default.

If `currentColor` is used as the value of the `color` property, it instead takes its value from the inherited value of the `color` property.

#### currentColor example

```html
<div style="color:blue; border: 1px dashed currentColor;">
  The color of this text is blue.
  <div style="background:currentColor; height:9px;"></div>
  This block is surrounded by a blue border.
</div>
```

{{EmbedLiveSample('currentColor_example', 600, 80)}}

### RGB colors

The RGB color model defines a given color in the [sRGB color space](https://en.wikipedia.org/wiki/SRGB) according to its red, green, and blue components. An optional alpha component represents the color's transparency.

#### Syntax

RGB colors can be expressed through both hexadecimal (prefixed with `#`) and functional (`rgb()`, `rgba()`) notations.

> **Note:** As of CSS Colors Level 4, `rgba()` is an alias for `rgb()`. In browsers that implement the Level 4 standard, they accept the same parameters and behave the same way.

- Hexadecimal notation: `#RRGGBB[AA]`
  - : `R` (red), `G` (green), `B` (blue), and `A` (alpha) are hexadecimal characters (0–9, A–F). `A` is optional. For example, `#ff0000` is equivalent to `#ff0000ff`.
- Hexadecimal notation: `#RGB[A]`
  - : `R` (red), `G` (green), `B` (blue), and `A` (alpha) are hexadecimal characters (0–9, A–F). `A` is optional. The three-digit notation (`#RGB`) is a shorter version of the six-digit form (`#RRGGBB`). For example, `#f09` is the same color as `#ff0099`. Likewise, the four-digit RGB notation (`#RGBA`) is a shorter version of the eight-digit form (`#RRGGBBAA`). For example, `#0f38` is the same color as `#00ff3388`.
- Functional notation: `rgb[a](R, G, B[, A])`
  - : `R` (red), `G` (green), and `B` (blue) can be either {{cssxref("&lt;number&gt;")}}s or {{cssxref("&lt;percentage&gt;")}}s, where the number `255` corresponds to `100%`. `A` (alpha) can be a {{cssxref("&lt;number&gt;")}} between `0` and `1`, or a {{cssxref("&lt;percentage&gt;")}}, where the number `1` corresponds to `100%` (full opacity).
- Functional notation: `rgb[a](R G B[ / A])`
  - : CSS Colors Level 4 adds support for space-separated values in the functional notation.

### HSL colors

The HSL color model defines a given color in the [sRGB color space](https://en.wikipedia.org/wiki/SRGB) according to its hue, saturation, and lightness components. An optional alpha component represents the color's transparency.

Many designers find HSL more intuitive than RGB, since it allows hue, saturation, and lightness to each be adjusted independently. HSL can also make it easier to create a set of matching colors (such as when you want multiple shades of a single hue).
However, using HSL to create color variations can produce surprising results, as it is not [perceptually uniform](https://en.wikipedia.org/wiki/Color_difference#Tolerance). For example, both `hsl(240 100% 50%)` and `hsl(60 100% 50%)` have the same lightness, even though the former is much darker than the latter.

#### Syntax

HSL colors are expressed through the functional `hsl()` and `hsla()` notations.

> **Note:** As of CSS Colors Level 4, `hsla()` is an alias for `hsl()`. In browsers that implement the Level 4 standard, they accept the same parameters and behave the same way.

- Functional notation: `hsl[a](H, S, L[, A])`

  - : `H` (hue) is an {{cssxref("&lt;angle&gt;")}} of the color circle given in `deg`s, `rad`s, `grad`s, or `turn`s in {{SpecName("CSS4 Colors","#the-hsl-notation")}}. When written as a unitless {{cssxref("&lt;number&gt;")}}, it is interpreted as degrees, as specified in {{SpecName("CSS3 Colors", "#hsl-color")}}. By definition, red=0deg=360deg, with the other colors spread around the circle, so green=120deg, blue=240deg, etc. As an `<angle>`, it implicitly wraps around such that -120deg=240deg, 480deg=120deg, -1turn=1turn, etc.

    `S` (saturation) and `L` (lightness) are percentages. `100%` **saturation** is completely saturated, while `0%` is completely unsaturated (gray). `100%` **lightness** is white, `0%` lightness is black, and `50%` lightness is “normal.”

    `A` (alpha) can be a {{cssxref("&lt;number&gt;")}} between `0` and `1`, or a {{cssxref("&lt;percentage&gt;")}}, where the number `1` corresponds to `100%` (full opacity).

- Functional notation: `hsl[a](H S L[ / A])`
  - : CSS Colors Level 4 adds support for space-separated values in the functional notation.

### System Colors

In _forced colors mode_ (detectable with the [forced-colors](/en-US/docs/Web/CSS/@media/forced-colors) media query), most colors are restricted into a user- and browser-defined palette. These system colors are exposed by the following keywords, which can be used to ensure that the rest of the page integrates well with the restricted palette. These values may also be used in other contexts, but are not widely supported by browsers.

The keywords in the following list are defined by the CSS Color Module Level 4 specification.

> **Note:** Note that these keywords are _case insensitive_, but are listed here with mixed case for readability.

- ActiveText
  - : Text of active links
- ButtonFace
  - : Background color of controls
- ButtonText
  - : Foreground color of controls
- Canvas
  - : Background of application content or documents
- CanvasText
  - : Foreground color in application content or documents
- Field
  - : Background of input fields
- FieldText
  - : Text in input fields
- GrayText
  - : Foreground color for disabled items (e.g. a disabled control)
- Highlight
  - : Background of selected items
- HighlightText
  - : Foreground color of selected items
- LinkText
  - : Text of non-active, non-visited links
- Mark
  - : Background of text that has been specially marked (such as by the HTML `mark` element)
- MarkText
  - : Text that has been specially marked (such as by the HTML `mark` element)
- VisitedText
  - : Text of visited links

#### Deprecated system color keywords

The following keywords were defined in earlier versions of the CSS Color Module. They are now deprecated. {{deprecated_inline}} for use on public web pages.

- ActiveBorder
  - : Active window border.
- ActiveCaption
  - : Active window caption. Should be used with `CaptionText` as foreground color.
- AppWorkspace
  - : Background color of multiple document interface.
- Background
  - : Desktop background.
- ButtonHighlight
  - : The color of the border facing the light source for 3-D elements that appear 3-D due to that layer of surrounding border.
- ButtonShadow
  - : The color of the border away from the light source for 3-D elements that appear 3-D due to that layer of surrounding border.
- CaptionText
  - : Text in caption, size box, and scrollbar arrow box. Should be used with the `ActiveCaption` background color.
- InactiveBorder
  - : Inactive window border.
- InactiveCaption
  - : Inactive window caption. Should be used with the `InactiveCaptionText` foreground color.
- InactiveCaptionText
  - : Color of text in an inactive caption. Should be used with the `InactiveCaption` background color.
- InfoBackground
  - : Background color for tooltip controls. Should be used with the `InfoText` foreground color.
- InfoText
  - : Text color for tooltip controls. Should be used with the `InfoBackground` background color.
- Menu
  - : Menu background. Should be used with the `MenuText` or `-moz-MenuBarText` foreground color.
- MenuText
  - : Text in menus. Should be used with the `Menu` background color.
- Scrollbar
  - : Background color of scroll bars.
- ThreeDDarkShadow
  - : The color of the darker (generally outer) of the two borders away from the light source for 3-D elements that appear 3-D due to two concentric layers of surrounding border.
- ThreeDFace
  - : The face background color for 3-D elements that appear 3-D due to two concentric layers of surrounding border. Should be used with the `ButtonText` foreground color.
- ThreeDHighlight
  - : The color of the lighter (generally outer) of the two borders facing the light source for 3-D elements that appear 3-D due to two concentric layers of surrounding border.
- ThreeDLightShadow
  - : The color of the darker (generally inner) of the two borders facing the light source for 3-D elements that appear 3-D due to two concentric layers of surrounding border.
- ThreeDShadow
  - : The color of the lighter (generally inner) of the two borders away from the light source for 3-D elements that appear 3-D due to two concentric layers of surrounding border.
- Window
  - : Window background. Should be used with the `WindowText` foreground color.
- WindowFrame
  - : Window frame.
- WindowText
  - : Text in windows. Should be used with the `Window` background color.

### Mozilla System Color Extensions

- \-moz-ButtonDefault
  - : The border color that goes around buttons that represent the default action for a dialog box.
- \-moz-ButtonHoverFace
  - : The background color of a button that the mouse pointer is over (which would be `ThreeDFace` or `ButtonFace` when the mouse pointer is not over it). Should be used with the `-moz-ButtonHoverText` foreground color.
- \-moz-ButtonHoverText
  - : The text color of a button that the mouse pointer is over (which would be ButtonText when the mouse pointer is not over it). Should be used with the `-moz-ButtonHoverFace background` color.
- \-moz-CellHighlight
  - : Background color for selected item in a tree widget. Should be used with the `-moz-CellHighlightText` foreground color. See also `-moz-html-CellHighlight`.
- \-moz-CellHighlightText
  - : Text color for a selected item in a tree. Should be used with the `-moz-CellHighlight background` color. See also `-moz-html-CellHighlightText`.
- \-moz-Combobox
  - : Background color for combo-boxes. Should be used with the `-moz-ComboboxText` foreground color. In versions prior to 1.9.2, use `-moz-Field` instead.
- \-moz-ComboboxText
  - : Text color for combo-boxes. Should be used with the `-moz-Combobox` background color. In versions prior to 1.9.2, use `-moz-FieldText` instead.
- \-moz-Dialog
  - : Background color for dialog boxes. Should be used with the `-moz-DialogText` foreground color.
- \-moz-DialogText
  - : Text color for dialog boxes. Should be used with the `-moz-Dialog` background color.
- \-moz-dragtargetzone, -moz-EvenTreeRow
  - : Background color for even-numbered rows in a tree. Should be used with the `-moz-FieldText` foreground color. In Gecko versions prior to 1.9, use `-moz-Field`. See also `-moz-OddTreeRow`.
- \-moz-html-CellHighlight
  - : Background color for highlighted item in HTML {{HTMLElement("select")}}s. Should be used with the `-moz-html-CellHighlightText` foreground color. Prior to Gecko 1.9, use `-moz-CellHighlight`.
- \-moz-html-CellHighlightText
  - : Text color for highlighted items in HTML {{HTMLElement("select")}}s. Should be used with the `-moz-html-CellHighlight` background color. Prior to Gecko 1.9, use `-moz-CellHighlightText`.
- \-moz-mac-accentdarkestshadow, -moz-mac-accentdarkshadow, -moz-mac-accentface, -moz-mac-accentlightesthighlight, -moz-mac-accentlightshadow, -moz-mac-accentregularhighlight, -moz-mac-accentregularshadow
  - : Accent colors.
- \-moz-mac-chrome-active, -moz-mac-chrome-inactive
  - : Colors for inactive and active browser chrome.
- \-moz-mac-focusring, -moz-mac-menuselect, -moz-mac-menushadow, -moz-mac-menutextselect, -moz-MenuHover
  - : Background color for hovered menu items. Often similar to `Highlight`. Should be used with the `-moz-MenuHoverText` or `-moz-MenuBarHoverText` foreground color.
- \-moz-MenuHoverText
  - : Text color for hovered menu items. Often similar to `HighlightText`. Should be used with the `-moz-MenuHover` background color.
- \-moz-MenuBarText
  - : Text color in menu bars. Often similar to `MenuText`. Should be used on top of `Menu` background.
- \-moz-MenuBarHoverText
  - : Color for hovered text in menu bars. Often similar to `-moz-MenuHoverText`. Should be used on top of `-moz-MenuHover` background.
- \-moz-nativehyperlinktext
  - : Default platform hyperlink color.
- \-moz-OddTreeRow
  - : Background color for odd-numbered rows in a tree. Should be used with the `-moz-FieldText` foreground color. In Gecko versions prior to 1.9, use `-moz-Field`. See also `-moz-EvenTreeRow`.
- \-moz-win-communicationstext
  - : Should be used for text in objects with `{{cssxref("appearance")}}: -moz-win-communications-toolbox;`.
- \-moz-win-mediatext
  - : Should be used for text in objects with `{{cssxref("appearance")}}: -moz-win-media-toolbox`.
- \-moz-win-accentcolor
  - : Used to access the Windows 10 custom accent color that you can set on the start menu, taskbar, title bars, etc.
- \-moz-win-accentcolortext
  - : Used to access the color of text placed over the Windows 10 custom accent color in the start menu, taskbar, title bars, etc.

### Mozilla Color Preference Extensions

- \-moz-activehyperlinktext
  - : User's preference for text color of active links. Should be used with the default document background color.
- \-moz-default-background-color
  - : User's preference for the document background color.
- \-moz-default-color
  - : User's preference for the text color.
- \-moz-hyperlinktext
  - : User's preference for the text color of unvisited links. Should be used with the default document background color.
- \-moz-visitedhyperlinktext
  - : User's preference for the text color of visited links. Should be used with the default document background color.

### Lab colors

CSS Color 4 introduced Lab colors.
Lab colors are specified via the [`lab()`](<https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/lab()>) functional notation.
They are not limited to a specific color space, and can represent the entire spectrum of human vision.

### LCH colors

CSS Color 4 introduced LCH colors.
LCH colors are specified via the [`lch()`](<https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/lch()>) functional notation.
They are not limited to a specific color space, and can represent the entire spectrum of human vision.

In fact, LCH is the polar form of Lab. It is more human friendly than Lab, as its chroma and hue components specify qualities of the desired color, as opposed to mixing.
It is similar to HSL in that way, although it is far more perceptually uniform.
Unlike HSL that describes both `hsl(60 100% 50%)` `hsl(240 100% 50%)` as having the same lightness, LCH (and Lab) correctly ascribes different lightnesses to them:
the former (yellow) has an L of 97.6 and the latter (blue) an L of 29.6.
Therefore, LCH can be used to create palettes across entirely different colors, with predictable results.
Please note that LCH hue is not the same as HSL hue and LCH chroma is not the same as HSL saturation, although they do share some conceptual similarities.

### color() colors

CSS Color 4 introduced this notation.
Colors specified via the [`color()`](<https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/color()>) function can specify a color in any of the predefined color spaces,
as well as custom color spaces, defined via the [`@color-profile`](https://developer.mozilla.org/en-US/docs/Web/CSS/@color-profile) rule.

## Interpolation

In animations and [gradients](/en-US/docs/Web/CSS/CSS_Images/Using_CSS_gradients), `<color>` values are interpolated on each of their red, green, and blue components. Each component is interpolated as a real, floating-point number. Note that interpolation of colors happens in the [alpha-premultiplied sRGBA color space](https://www.gimp.org/docs/plug-in/appendix-alpha.html) to prevent unexpected gray colors from appearing. In animations, the interpolation's speed is determined by the [timing function](/en-US/docs/Web/CSS/easing-function).

## Accessibility considerations

Some people have difficulty distinguishing colors. The [WCAG 2.0](https://www.w3.org/TR/WCAG/#visual-audio-contrast) recommendation strongly advises against using color as the only means of conveying a specific message, action, or result. See [Color and color contrast](/en-US/docs/Learn/Accessibility/CSS_and_JavaScript#color_and_color_contrast) for more information.

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
  if(validTextColor(inputElem.value)) {
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
    rgb(1e2, .5e1, .5e0, +.25e2%)

### RGB transparency variations

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
    rgba(255, 0, 153.6, 1)
    rgba(1e2, .5e1, .5e0, +.25e2%)

### HSL syntax variations

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

### Fully saturated colors

<table class="standard-table">
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

<table class="standard-table">
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

<table class="standard-table">
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

    hsla(240, 100%, 50%, .05)     /*   5% opaque blue */
    hsla(240, 100%, 50%, .4)      /*  40% opaque blue */
    hsla(240, 100%, 50%, .7)      /*  70% opaque blue */
    hsla(240, 100%, 50%, 1)       /* full opaque blue */

    /* Whitespace syntax */
    hsla(240 100% 50% / .05)      /*   5% opaque blue */

    /* Percentage value for alpha */
    hsla(240 100% 50% / 5%)       /*   5% opaque blue */

## Specifications

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Specification</th>
      <th scope="col">Status</th>
      <th scope="col">Comment</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{SpecName('CSS4 Colors', '#changes-from-3')}}</td>
      <td>{{Spec2('CSS4 Colors')}}</td>
      <td>
        Adds LCH and Lab colors, the <code>color()</code> functional notation,
        <code>rebeccapurple</code>, four- (<code>#RGBA</code>) and eight-digit
        (<code>#RRGGBBAA</code>) hexadecimal notations, <code>rgba()</code> and
        <code>hsla()</code> as aliases of <code>rgb()</code> and
        <code>hsl()</code> (both with identical parameter syntax),
        space-separated function parameters as an alternative to commas,
        percentages for alpha values, and angles for the hue component in
        <code>hsl()</code> colors.
      </td>
    </tr>
    <tr>
      <td>
        {{SpecName('CSS3 Colors', '#colorunits', '&lt;color&gt;')}}
      </td>
      <td>{{Spec2('CSS3 Colors')}}</td>
      <td>
        Deprecates system colors. Adds SVG colors and <code>rgba()</code>,
        <code>hsl()</code>, and <code>hsla()</code> functional notations.
      </td>
    </tr>
    <tr style="vertical-align: top">
      <td style="vertical-align: top">
        {{SpecName('CSS2.1', 'syndata.html#value-def-color', '&lt;color&gt;')}}
      </td>
      <td style="vertical-align: top">{{Spec2('CSS2.1')}}</td>
      <td style="vertical-align: top">
        Adds the <code>orange</code> keyword and system colors.
      </td>
    </tr>
    <tr>
      <td style="vertical-align: top">
        {{SpecName('CSS1', '#color-units', '&lt;color&gt;')}}
      </td>
      <td style="vertical-align: top">{{Spec2('CSS1')}}</td>
      <td style="vertical-align: top">
        Initial definition. Includes 16 basic color keywords.
      </td>
    </tr>
  </tbody>
</table>

## Browser compatibility

{{Compat}}

## See also

- The {{Cssxref("opacity")}} property lets you define transparency at the element level.
- Some common properties that use this data type: {{Cssxref("color")}}, {{Cssxref("background-color")}}, {{Cssxref("border-color")}}, {{Cssxref("box-shadow")}}, {{Cssxref("outline-color")}}, {{Cssxref("text-shadow")}}
- [Applying color to HTML elements using CSS](/en-US/docs/Web/HTML/Applying_color)
