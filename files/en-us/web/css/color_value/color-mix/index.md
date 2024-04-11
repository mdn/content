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

The total value of both colors in a `color-mix()` function is 100%, even if the values set by the developer don't total 100%. In this example, as only one color has a percentage assigned, the other color is implicitly given a percentage value so that the combined total equals 100%. In the last {{htmlelement("li")}}, where neither color is assigned a percentage, both default to 50%.

### Adding transparency

This example demonstrates using the `color-mix()` function to add transparency to a color by mixing any color with [`transparent`](/en-US/docs/Web/CSS/named-color#transparent).

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

The `color-mix()` function is used to add increasing percentages of `red`, which is declared using a {{cssxref('--*', 'CSS custom property')}} named `--base`, defined on the {{cssxref(":root")}}. The 6th {{htmlelement("li")}} doesn't include a percentage, creating an output color that is half as opaque as the `--base` color. We include a striped background on the {{htmlelement("ul")}} to make the transparency visible.

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

In this way, the `color-mix()` function can be used to add transparency to any color, even if the color is already non-opaque (with an alpha channel value < 1). However, `color-mix()` can't be used to make a semi-transparent color fully opaque. For this, use a [relative color](/en-US/docs/Web/CSS/CSS_colors/Relative_colors) with a CSS [color function](/en-US/docs/Web/CSS/CSS_colors#functions). Relative colors can alter the value of any color channel, including increasing a color's alpha channel to render the color fully opaque.

### Using hue interpolation in color-mix()

This example demonstrates the hue interpolation methods available to the `color-mix()` function. When using hue [interpolation](/en-US/docs/Web/CSS/color_value#interpolation), the resulting hue is between the hue values of the two colors being mixed. The value will be different based on which route is taken around the color wheel.

For more information, see {{cssxref("&lt;hue-interpolation-method&gt;")}}.

```html hidden
<p>longer</p>
<ul>
  <li>100%</li>
  <li>80%</li>
  <li>60%</li>
  <li>40%</li>
  <li>20%</li>
  <li>0%</li>
</ul>
<p>shorter</p>
<ul>
  <li>100%</li>
  <li>80%</li>
  <li>60%</li>
  <li>40%</li>
  <li>20%</li>
  <li>0%</li>
</ul>
<p>increasing</p>
<ul>
  <li>100%</li>
  <li>80%</li>
  <li>60%</li>
  <li>40%</li>
  <li>20%</li>
  <li>0%</li>
</ul>
<p>decreasing</p>
<ul>
  <li>100%</li>
  <li>80%</li>
  <li>60%</li>
  <li>40%</li>
  <li>20%</li>
  <li>0%</li>
</ul>
```

#### CSS

The `shorter hue` interpolation method takes the shorter route around the color wheel, whereas the `longer hue` interpolation method takes the longer route. With `increasing hue`, the route starts with increasing values. With `decreasing hue` the value decreases. We mix two {{cssxref("named-color")}} values to create a series of `lch()` intermediary colors that differ based on which route is taken around the color wheel. The mixed colors include `red`, `blue`, and `yellow` with LCH hue values of approximately 41deg, 301deg, and 100deg, respectively.

To reduce code redundancy, we used {{cssxref('--*', 'CSS custom properties')}} for both colors and for the interpolation method, setting different values on each {{htmlelement("ul")}}.

```css hidden
body {
  font-family: monospace;
}
ul {
  display: flex;
  list-style-type: none;
  font-size: 150%;
  gap: 10px;
  padding: 10px;
  margin: 0;
}

li {
  padding: 10px;
  flex: 1;
  outline: 1px solid var(--base);
  text-align: center;
}
```

```css
ul:nth-of-type(1) {
  --distance: longer; /* 52 degree hue increments */
  --base: red;
  --mixin: blue;
}
ul:nth-of-type(2) {
  /* 20 degree hue decrements */
  --distance: shorter;
  --base: red;
  --mixin: blue;
}
ul:nth-of-type(3) {
  /* 40 degree hue increments */
  --distance: increasing;
  --base: yellow;
  --mixin: blue;
}
ul:nth-of-type(4) {
  /* 32 degree hue decrements */
  --distance: decreasing;
  --base: yellow;
  --mixin: blue;
}

li:nth-child(1) {
  background-color: color-mix(
    in lch var(--distance) hue,
    var(--base) 100%,
    var(--mixin)
  );
}

li:nth-child(2) {
  background-color: color-mix(
    in lch var(--distance) hue,
    var(--base) 80%,
    var(--mixin)
  );
}

li:nth-child(3) {
  background-color: color-mix(
    in lch var(--distance) hue,
    var(--base) 60%,
    var(--mixin)
  );
}

li:nth-child(4) {
  background-color: color-mix(
    in lch var(--distance) hue,
    var(--base) 40%,
    var(--mixin)
  );
}

li:nth-child(5) {
  background-color: color-mix(
    in lch var(--distance) hue,
    var(--base) 20%,
    var(--mixin)
  );
}

li:nth-child(6) {
  background-color: color-mix(
    in lch var(--distance) hue,
    var(--base) 0%,
    var(--mixin)
  );
}
```

#### Result

{{EmbedLiveSample("using_hue_interpolation_in_color_mix", "100%", 440)}}

With `longer hue` the increments or decrements between colors will always be the same or larger than when using `shorter hue`. Use `increasing hue` or `descreasing hue` when the direction of the hue value change is more important than the length between values.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{CSSXref("&lt;color&gt;")}}
- {{CSSXref("&lt;color-interpolation-method&gt;")}}
- {{cssxref("&lt;hue&gt;")}}
- [CSS relative colors](/en-US/docs/Web/CSS/CSS_colors/Relative_colors)
