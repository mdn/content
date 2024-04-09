---
title: color-mix()
slug: Web/CSS/color_value/color-mix
page-type: css-function
browser-compat: css.types.color.color-mix
---

{{CSSRef}}

The **`color-mix()`** functional notation takes two {{cssxref("&lt;color&gt;")}} values and returns the result of mixing them in a given colorspace by a given amount.

## Syntax

```css
color-mix(in lch, plum, pink);
color-mix(in lch, plum 40%, pink);
color-mix(in srgb, #34c9eb 20%, white);
color-mix(in hsl longer hue, hsl(120 100% 50%) 20%, white);
```

### Values

Functional notation: `color-mix(method, color1[ p1], color2[ p2])`

- `method`

  - : The method is the {{CSSXref("&lt;color-interpolation-method&gt;")}}, including the {{glossary("color space")}} preceded by `in`, optionally followed by a {{CSSXref("&lt;hue-interpolation-method&gt;")}}.

> **Note:** When browsers support {{cssxref("@color-profile")}}, custom color spaces may be supported. Currently, the color space must be one of the available color spaces listed in the [formal_syntax](#formal_syntax).

- `color1`, `color2`

  - : {{CSSXref("&lt;color&gt;")}} values to mix.

- `p1`, `p2` {{optional_inline}}

  - : {{CSSXref("&lt;percentage&gt;")}} values between `0%` and `100%`, specifying the amount of each color to mix. They are normalized as follows:

    - If both `p1` and `p2` are omitted, then `p1 = p2 = 50%`.
    - If `p1` is omitted, then `p1 = 100% - p2`.
    - If `p2` is omitted, then `p2 = 100% - p1`.
    - If `p1 = p2 = 0%`, the function is invalid.
    - If `p1 + p2 ≠ 100%`, then `p1' = p1 / (p1 + p2)` and `p2' = p2 / (p1 + p2)`, where `p1'` and `p2'` are the normalization results.

### Formal syntax

{{csssyntax}}

## Examples

### Mixing two colors

This example demonstrates mixing two colors, blue `#34c9eb` at different percentages and white with no percentage given. The higher the percentage of `#34c9eb` is mixed, the more blue and less white the output color is.

#### HTML

```html
<ul>
  <li>0%</li>
  <li>25%</li>
  <li>50%</li>
  <li>75%</li>
  <li>100%</li>
  <li></li>
</ul>
```

#### CSS

The `color-mix()` function is used to add increasing percentages of blue, up to 100%. The 6th {{htmlelement("li")}} doesn't include a percentage for either color.

```css hidden
ul {
  display: flex;
  list-style-type: none;
  font-size: 150%;
  gap: 10px;
  border: 2px solid;
  padding: 10px;
}

li {
  padding: 10px;
  flex: 1;
  box-sizing: border-box;
  font-family: monospace;
  outline: 1px solid #34c9eb;
  text-align: center;
}
```

```css
li:nth-child(1) {
  background-color: color-mix(in srgb, #34c9eb 0%, white);
}

li:nth-child(2) {
  background-color: color-mix(in srgb, #34c9eb 25%, white);
}

li:nth-child(3) {
  background-color: color-mix(in srgb, #34c9eb 50%, white);
}

li:nth-child(4) {
  background-color: color-mix(in srgb, #34c9eb 75%, white);
}

li:nth-child(5) {
  background-color: color-mix(in srgb, #34c9eb 100%, white);
}

li:nth-child(6) {
  background-color: color-mix(in srgb, #34c9eb, white);
}
```

#### Result

{{EmbedLiveSample("mixing_two_colors", "100%", 150)}}

When only one color has a percentage assigned, the total value of both colors is 100%. The above {{htmlelement("li")}} elements are 100%, 75%, 50%, 25%, 0%, and 50% white, respectively. In the last {{htmlelement("li")}}, when neither color was assigned a percentage, both defaulted to 50%.

### Adding transparency

This example demonstrates using the `ccolor-mix()` function to add transparency to a color by mixing any color with `transparent`.

#### HTML

```html
<ul>
  <li>0%</li>
  <li>25%</li>
  <li>50%</li>
  <li>75%</li>
  <li>100%</li>
  <li></li>
</ul>
```

#### CSS

The `color-mix()` function is used to add increasing percentages of a color, in this case `red` declared using a {{cssxref('--*', 'CSS custom property')}} named `--base`, defined on the {{cssxref(":root")}}. The 6th {{htmlelement("li")}} doesn't include a percentage, creating an output color that is half as opaque as the `--base` color. We include a striped background on the {{htmlelement("ul")}} to make the transparency visible.

```css hidden
ul {
  display: flex;
  list-style-type: none;
  font-size: 150%;
  gap: 10px;
  border: 2px solid;
  padding: 10px;
}

li {
  padding: 10px;
  flex: 1;
  box-sizing: border-box;
  font-family: monospace;
  outline: 1px solid var(--base);
  text-align: center;
}
```

```css
:root {
  --base: red;
}

ul {
  background: repeating-linear-gradient(
    45deg,
    palegoldenrod 0px 2px,
    white 2px 4px
  );
}

li:nth-child(1) {
  background-color: color-mix(in srgb, var(--base) 0%, transparent);
}

li:nth-child(2) {
  background-color: color-mix(in srgb, var(--base) 25%, transparent);
}

li:nth-child(3) {
  background-color: color-mix(in srgb, var(--base) 50%, transparent);
}

li:nth-child(4) {
  background-color: color-mix(in srgb, var(--base) 75%, transparent);
}

li:nth-child(5) {
  background-color: color-mix(in srgb, var(--base) 100%, transparent);
}

li:nth-child(6) {
  background-color: color-mix(in srgb, var(--base), transparent);
}
```

#### Result

{{EmbedLiveSample("adding transparency", "100%", 150)}}

The `color-mix()` function can be used to add transparency to colors, but not to reduce transparency. [Use relative colors](/en-US/docs/Web/CSS/CSS_colors/Relative_colors) to alter the value of any color channel, including the alpha color channel, in any CSS [color function](/en-US/docs/Web/CSS/CSS_colors#functions).

### Using hue interpolation in color-mix()

When using shorter hue [interpolation](/en-US/docs/Web/CSS/color_value#interpolation), the resulting hue angle is halfway between the input angles when taking the shortest route around the color wheel.
The longer hue interpolation method results in a hue angle which is the midpoint when taking the longer route around the color wheel.
For more information, see {{cssxref("&lt;hue-interpolation-method&gt;")}}.

```html
<div class="color-one">color one</div>
<div class="color-two">color two</div>
<div class="shorter">mixed shorter</div>
<div class="longer">mixed longer</div>
```

#### CSS

```css hidden
body {
  display: flex;
  flex-wrap: wrap;
}
div {
  border: 1px solid;
  font: bold 150% monospace;
  height: 100px;
  margin: 10px 5%;
  width: 30%;
}
```

```css
.color-one {
  background-color: hsl(10 100% 50%);
}
.color-two {
  background-color: hsl(60 100% 50%);
}
.shorter {
  background-color: color-mix(
    in hsl shorter hue,
    hsl(10 100% 50%),
    hsl(60 100% 50%)
  );
}
.longer {
  background-color: color-mix(
    in hsl longer hue,
    hsl(10 100% 50%),
    hsl(60 100% 50%)
  );
}
```

#### Result

{{EmbedLiveSample("using_hue_interpolation_in_color_mix", "100%", 250)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{CSSXref("&lt;color&gt;")}}
- {{CSSXref("&lt;color-interpolation-method&gt;")}}
- {{cssxref("&lt;hue&gt;")}}
- [CSS relative colors](/en-US/docs/Web/CSS/CSS_colors/Relative_colors)
