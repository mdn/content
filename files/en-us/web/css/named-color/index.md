---
title: <named-color>
slug: Web/CSS/named-color
tags:
  - Reference
  - CSS Data Type
  - color
browser-compat: css.types.color.color_keywords
---
{{CSSRef}}

The **`<named-color>`** [CSS](/en-US/docs/Web/CSS) [data type](/en-US/docs/Web/CSS/CSS_Types) is the name of a color, such as `red`, `blue`, `black`, or `lightseagreen`. Syntactically, a `<named-color>` is an [`<ident>`](/en-US/docs/Web/CSS/ident).

A `<named-color>` value can be used anywhere a [`<color>`](/en-US/docs/Web/CSS/color_value) can be used.

## Syntax

```css
color: red;
color: orange;
color: tan;
color: rebeccapurple;
color: transparent;
```

### Value

#### CSS Level 1 values

[CSS Level 1](https://www.w3.org/TR/CSS1/) only included 16 basic colors, called the _VGA colors_ as they were taken from the set of displayable colors on [VGA](https://en.wikipedia.org/wiki/VGA) graphics cards.

<table>
  <thead>
    <tr>
      <th scope="col">Keyword</th>
      <th scope="col">RGB hex value</th>
      <th scope="col">Sample</th>
    </tr>
  </thead>
  <tbody>
    <tr>
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
  </tbody>
</table>

### CSS Level 2 values

The following value is defined in [CSS Level 2](https://www.w3.org/TR/CSS2/).

<table>
  <thead>
    <tr>
      <th scope="col">Keyword</th>
      <th scope="col">RGB hex value</th>
      <th scope="col">Sample</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align: center"><code>orange</code></td>
      <td><code>#ffa500</code></td>
      <td style="background: orange"></td>
    </tr>
  </tbody>
</table>

### CSS Level 3 values

Although various colors not in the specification (mostly adapted from the X11 colors list) were supported by early browsers, it wasn't until SVG 1.0 and [CSS Colors Level 3](https://drafts.csswg.org/css-color-3/) that they were formally defined. They are called the _extended color keywords_, the _X11 colors_, or the _SVG colors_.

<table>
  <thead>
    <tr>
      <th scope="col">Keyword</th>
      <th scope="col">RGB hex value</th>
      <th scope="col">Sample</th>
    </tr>
  </thead>
  <tbody>
    <tr>
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
      <td style="text-align: center"><code>transparent</code></td>
      <td>See <a href="#transparent">transparent</a>.</td>
      <td style="background: transparent"></td>
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
  </tbody>
</table>

##### transparent

The `transparent` keyword represents a fully transparent color. This makes the background behind the colored item completely visible. Technically, `transparent` is a shortcut for `rgba(0,0,0,0)`.

To prevent unexpected behavior, such as in a {{cssxref("gradient")}}, the current CSS spec states that `transparent` should be calculated in the [alpha-premultiplied color space](https://www.w3.org/TR/css-color-4/#interpolation-alpha). However, be aware that older browsers may treat it as black with an alpha value of `0`.

The `transparent` keyword wasn't a true color in CSS Level 2 (Revision 1). It was a special keyword that could be used instead of a regular `<color>` value on two CSS properties: {{Cssxref("background")}} and {{Cssxref("border")}}. It was essentially added to allow developers to override an inherited solid color. With the advent of alpha channels in CSS Colors Level 3, `transparent` was redefined as a true color. It can now be used wherever a `<color>` value can be used.

#### CSS Level 4 values

[CSS Colors Level 4](https://drafts.csswg.org/css-color-4/) added the `rebeccapurple` keyword [to honor web pioneer Eric Meyer](https://codepen.io/trezy/post/honoring-a-great-man).

<table>
  <thead>
    <tr>
      <th scope="col">Keyword</th>
      <th scope="col">RGB hex value</th>
      <th scope="col">Sample</th>
    </tr>
  </thead>
  <tbody>
    <tr>
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

## Description

All names specify a color in the [sRGB color space](https://en.wikipedia.org/wiki/SRGB). Although the names more or less describe their respective colors, they are essentially artificial, without a strict rationale behind the terms used.

The color keywords all represent plain, solid colors without transparency.

Several keywords are aliases for each other:

- `aqua` / `cyan`
- `fuchsia` / `magenta`
- `darkgray` / `darkgrey`
- `darkslategray` / `darkslategrey`
- `dimgray` / `dimgrey`
- `lightgray` / `lightgrey`
- `lightslategray` / `lightslategrey`
- `gray` / `grey`
- `slategray` / `slategrey`

Though many keywords have been adapted from [X11](https://en.wikipedia.org/wiki/X_Window_System), their RGB values may differ from the corresponding color on X11 systems since manufacturers sometimes tailor X11 colors to their specific hardware.

## Examples

### Using named colors

#### HTML

```html
<div id="container">
  <div id="one"></div>
  <div id="two"></div>
  <div id="three"></div>
</div>
```

#### CSS

```css
#container {
  display: flex;
  justify-content: space-around;
  background-color: darkslateblue;
  padding: 20px;
}

#container>div {
  height: 100px;
  width: 100px;
  margin: 3px;
  border: 2px solid black;
}

#one {
  background-color: red;
}

#two {
  background-color: lavender;
}

#three {
  background-color: transparent;
}
```

#### Result

{{EmbedLiveSample("Using named colors")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`<color>`](/en-US/docs/Web/CSS/color_value): the data type of whose definition `<named-color>` is a constituent part.
