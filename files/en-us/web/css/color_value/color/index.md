---
title: color()
slug: Web/CSS/color_value/color
page-type: css-function
browser-compat: css.types.color.color
spec-urls:
  - https://drafts.csswg.org/css-color-5/#color-function
  - https://drafts.csswg.org/css-color-5/#relative-color-function
  - https://drafts.csswg.org/css-color/#color-function
---

{{CSSRef}}

The **`color()`** functional notation allows a color to be specified in a particular, specified {{glossary("color space")}} rather than the implicit sRGB color space that most of the other color functions operate in.

Support for a particular color space can be detected with the [`color-gamut`](/en-US/docs/Web/CSS/@media/color-gamut) CSS media feature.

## Syntax

```css
/* Absolute values */
color(display-p3 1 0.5 0);
color(display-p3 1 0.5 0 / .5);

/* Relative values */
color(from green srgb r g b / 0.5)
color(from #0000FF xyz calc(x + 0.75) y calc(z - 0.35))
```

### Values

Below are descriptions of the allowed values for both absolute and [relative colors](/en-US/docs/Web/CSS/CSS_colors/Relative_colors).

#### Absolute value syntax

```plain
color(colorspace c1 c2 c3[ / A])
```

The parameters are as follows:

- `colorspace`

  - : An {{CSSXref("&lt;ident&gt;")}} denoting one of the predefined color spaces: `srgb`, `srgb-linear`, `display-p3`, `a98-rgb`, `prophoto-rgb`, `rec2020`, `xyz`, `xyz-d50`, or `xyz-d65`.

- `c1`, `c2`, `c3`

  - : Each value can be written as a {{CSSXref("number")}}, a {{CSSXref("percentage")}}, or the keyword `none` (equivalent to `0` in this case). These values represent the component values for the colorspace. When using a `<number>` value, generally, `0` to `1` represents the bounds of the color space. Values outside of that range are permitted but will be out of {{glossary("gamut")}} for the given color space. When using a percentage value, `100%` represents `1` and `0%` represents `0`.

- `A` {{optional_inline}}

  - : An {{CSSXref("&lt;alpha-value&gt;")}} representing the alpha channel value of the color, where the number `0` corresponds to `0%` (fully transparent) and `1` corresponds to `100%` (fully opaque). Additionally, the keyword `none` can be used to explicitly specify no alpha channel. If the `A` channel value is not explicitly specified, it defaults to 100%. If included, the value is preceded by a slash (`/`).

> [!NOTE]
> See [Missing color components](/en-US/docs/Web/CSS/color_value#missing_color_components) for more information on the effect of `none`.

#### Relative value syntax

```plain
color(from <color> colorspace c1 c2 c3[ / A])
```

The parameters are as follows:

- `from <color>`
  - : The keyword `from` is always included when defining a relative color, followed by a {{cssxref("&lt;color&gt;")}} value representing the **origin color**. This is the original color that the relative color is based on. The origin color can be _any_ valid {{cssxref("&lt;color&gt;")}} syntax, including another relative color.
- `colorspace`
  - : An {{CSSXref("&lt;ident&gt;")}} denoting the {{glossary("color space")}} of the output color, generally one of the predefined color spaces: `srgb`, `srgb-linear`, `display-p3`, `a98-rgb`, `prophoto-rgb`, `rec2020`, `xyz`, `xyz-d50`, or `xyz-d65`.
- `c1`, `c2`, `c3`
  - : Each value can be written as a {{CSSXref("number")}}, a {{CSSXref("percentage")}}, or the keyword `none` (equivalent to `0` in this case). These values represent the component values for the output color. When using a `<number>` value, generally `0` to `1` represents the bounds of the color space. Values outside of that range are permitted but will be out of {{glossary("gamut")}} for the given color space. Generally, when using a percentage value, `100%` represents `1` and `0%` represents `0`.
- `A` {{optional_inline}}
  - : An {{CSSXref("&lt;alpha-value&gt;")}} representing the alpha channel value of the output color, where the number `0` corresponds to `0%` (fully transparent) and `1` corresponds to `100%` (fully opaque). Additionally, the keyword `none` can be used to explicitly specify no alpha channel. If the `A` channel value is not explicitly specified, it defaults to the alpha channel value of the origin color. If included, the value is preceded by a slash (`/`).

#### Defining relative color output channel components

When using relative color syntax inside a `color()` function, the browser converts the origin color into an equivalent color in the specified color space (if it is not already specified as such). The color is defined as three distinct color channel values plus an alpha channel value (`alpha`). These channel values are made available inside the function to be used when defining the output color channel values:

- The three color channel values of the origin color are resolved to a `<number>`. For predefined color spaces, depending on which is specified, these values will be one of the following:

  - `r`, `g`, and `b`: Color channel values for the RGB-based color spaces `srgb`, `srgb-linear`, `display-p3`, `a98-rgb`, `prophoto-rgb`, and `rec2020`.
  - `x`, `y`, and `z`: Color channel values for the CIE XYZ-based color spaces `xyz`, `xyz-d50`, and `xyz-d65`.

    > [!NOTE]
    > Each of these values is usually between `0` and `1` but, as explained above, they may be outside these bounds.

    > [!NOTE]
    > Referencing `r`, `g`, and `b` values inside a `color()` function with a XYZ-based colorspace, `x`, `y`, and `z` values inside a `color()` function with an RGB-based colorspace, or any other characters, is invalid. The origin color channel values available inside the function must match the specified type of colorspace.

- `alpha`: The color's transparency value, resolved to a `<number>` between `0` and `1`, inclusive.

When defining a relative color, the different channels of the output color can be expressed in several different ways. Below, we'll study some examples to illustrate these.

In the first two examples below, we are using relative color syntax. However, the first one outputs the same color as the origin color and the second one outputs a color not based on the origin color at all. They don't really create relative colors! You'd be unlikely to ever use these in a real codebase, and would probably just use an absolute color value instead. We included these examples as a starting point for learning about relative `color()` syntax.

Let's start with an origin color of `hsl(0 100% 50%)` (equivalent to `red`). While you are unlikely to ever write the following functions because they output the same color as the origin color, this demonstrates how to use the origin color channel values as the output channel values:

```css
color(from hsl(0 100% 50%) srgb r g b)
color(from hsl(0 100% 50%) xyz x y z)
```

These functions' output colors are `color(srgb 1 0 0)` and `color(xyz-d65 0.412426 0.212648 0.0193173)`, respectively.

The next functions use absolute values for the output color channel values, outputting completely different colors not based on the origin color:

```css
color(from hsl(0 100% 50%) srgb 0.749938 0 0.609579)
/* Computed output color: color(srgb 0.749938 0 0.609579) */

color(from hsl(0 100% 50%) xyz 0.75 0.6554 0.1)
/* Computed output color: color(xyz-d65 0.75 0.6554 0.1 */
```

The following functions use two of the origin color channel values for the output color channel values (`r` and `b`, and `x` and `y`, respectively), but use a new value for the other output channel value (`g` and `z`, respectively), creating a relative color based on the origin color in each case:

```css
color(from hsl(0 100% 50%) srgb r 1 b)
/* Computed output color: color(srgb 1 1 0) */

color(from hsl(0 100% 50%) xyz x y 0.5)
/* Computed output color: color(xyz-d65 0.412426 0.212648 0.5) */
```

> [!NOTE]
> As mentioned above, if the output color is using a different color model to the origin color, the origin color is converted to the same model as the output color in the background so that it can be represented in a way that is compatible (i.e. using the same channels). For example, the {{cssxref("color_value/hsl", "hsl()")}} color `hsl(0 100% 50%)` is converted to `color(srgb 1 0 0)` in the first case above and `color(xyz 0.412426 0.212648 0.5)` in the second case.

In the examples we've seen so far in this section, the alpha channels have not been explicitly specified for either the origin or output colors. When the output color alpha channel is not specified, it defaults to the same value as the origin color alpha channel. When the origin color alpha channel is not specified (and it is not a relative color), it defaults to `1`. Therefore, the origin and output alpha channel values are `1` for the above examples.

Let's look at some examples that specify origin and output alpha channel values. The first one specifies the output alpha channel value as being the same as the origin alpha channel value, whereas the second one specifies a different output alpha channel value, unrelated to the origin alpha channel value.

```css
color(from hsl(0 100% 50% / 0.8) srgb r g b / alpha)
/* Computed output color: color(srgb 1 0 0 / 0.8) */

color(from hsl(0 100% 50% / 0.8) xyz x y z / 0.5)
/* Computed output color: color(xyz-d65 0.412426 0.212648 0.0193173 / 0.5) */
```

The following examples use {{cssxref("calc")}} functions to calculate new channel values for the output colors that are relative to the origin color channel values:

```css
color(from hsl(0 100% 50%) srgb calc(r - 0.4) calc(g + 0.1) calc(b + 0.6) / calc(alpha - 0.1))
/* Computed output color: color(srgb 0.6 0.1 0.6 / 0.9)  */

color(from hsl(0 100% 50%) xyz calc(x - 0.3) calc(y + 0.3) calc(z + 0.3) / calc(alpha - 0.1))
/* Computed output color: color(xyz-d65 0.112426 0.512648 0.319317 / 0.9) */
```

> [!NOTE]
> Because the origin color channel values are resolved to `<number>` values, you have to add numbers to them when using them in calculations, even in cases where a channel would normally accept `<percentage>`, `<angle>`, or other value types. Adding a `<percentage>` to a `<number>`, for example, doesn't work.

## Formal syntax

{{CSSSyntax}}

## Examples

### Using predefined color spaces with color()

The following example shows the effect of varying the lightness, a-axis, and b-axis values of the `color()` function.

#### HTML

```html
<div data-color="red-a98-rgb"></div>
<div data-color="red-prophoto-rgb"></div>
<div data-color="green-srgb-linear"></div>
<div data-color="green-display-p3"></div>
<div data-color="blue-rec2020"></div>
<div data-color="blue-srgb"></div>
```

#### CSS

```css hidden
div {
  width: 50px;
  height: 50px;
  padding: 5px;
  margin: 5px;
  display: inline-block;
  border: 1px solid black;
}
```

```css
[data-color="red-a98-rgb"] {
  background-color: color(a98-rgb 1 0 0);
}
[data-color="red-prophoto-rgb"] {
  background-color: color(prophoto-rgb 1 0 0);
}
[data-color="green-srgb-linear"] {
  background-color: color(srgb-linear 0 1 0);
}
[data-color="green-display-p3"] {
  background-color: color(display-p3 0 1 0);
}
[data-color="blue-rec2020"] {
  background-color: color(rec2020 0 0 1);
}
[data-color="blue-srgb"] {
  background-color: color(srgb 0 0 1);
}
```

#### Result

{{EmbedLiveSample("using_predefined_color_spaces_with_color")}}

### Using the xyz color space with color()

The following example shows how to use the `xyz` color space to specify a color.

#### HTML

```html
<div data-color="red"></div>
<div data-color="green"></div>
<div data-color="blue"></div>
```

#### CSS

```css hidden
div {
  width: 50px;
  height: 50px;
  padding: 5px;
  margin: 5px;
  display: inline-block;
  border: 1px solid black;
}
```

```css
[data-color="red"] {
  background-color: color(xyz 45 20 0);
}

[data-color="green"] {
  background-color: color(xyz-d50 0.3 80 0.3);
}

[data-color="blue"] {
  background-color: color(xyz-d65 5 0 50);
}
```

#### Result

{{EmbedLiveSample("using_the_xyz_color_space_with_color")}}

### Using color-gamut media queries with color()

This example shows how to use the [`color-gamut`](/en-US/docs/Web/CSS/@media/color-gamut) media query to detect support for a particular color space and use that color space to specify a color.

#### HTML

```html
<div></div>
<div></div>
<div></div>
```

#### CSS

```css hidden
div {
  width: 50px;
  height: 50px;
  padding: 5px;
  margin: 5px;
  display: inline-block;
  border: 1px solid black;
}
```

```css
@media (color-gamut: p3) {
  div {
    background-color: color(display-p3 1 0 0);
  }
}

@media (color-gamut: srgb) {
  div:nth-child(2) {
    background-color: color(srgb 1 0 0);
  }
}

@media (color-gamut: rec2020) {
  div:nth-child(3) {
    background-color: color(rec2020 1 0 0);
  }
}
```

#### Result

{{EmbedLiveSample("using_color-gamut_media_queries_with_color")}}

### Using relative colors with color()

This example styles three {{htmlelement("div")}} elements with different background colors. The middle one is given the unmodified `--base-color`, while the left and right ones are given lightened and darkened variants of that `--base-color`.

These variants are defined using relative colors — the `--base-color` [custom property](/en-US/docs/Web/CSS/--*) is passed into a `color()` function, and the output colors have their `g` and `b` channels modified to achieve the desired effect via `calc()` functions. The lightened color has 15% added to those channels, and the darkened color has 15% subtracted from those channels.

```html hidden
<div id="container">
  <div class="item" id="one"></div>
  <div class="item" id="two"></div>
  <div class="item" id="three"></div>
</div>
```

#### CSS

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
  background-color: color(
    from var(--base-color) display-p3 r calc(g + 0.15) calc(b + 0.15)
  );
}

#two {
  background-color: var(--base-color);
}

#three {
  background-color: color(
    from var(--base-color) display-p3 r calc(g - 0.15) calc(b - 0.15)
  );
}

/* Use @supports to add in support old syntax that requires r g b values
   to be specified as percentages (with units) in calculations.
   This is required for Safari 16.4+ */
@supports (color: color(from red display-p3 r g calc(b + 30%))) {
  #one {
    background-color: color(
      from var(--base-color) display-p3 r calc(g + 15%) calc(b + 15%)
    );
  }

  #three {
    background-color: color(
      from var(--base-color) display-p3 r calc(g - 15%) calc(b - 15%)
    );
  }
}
```

#### Result

The output is as follows:

{{ EmbedLiveSample("Using relative colors with color()", "100%", "200") }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [The `<color>` data type](/en-US/docs/Web/CSS/color_value) for a list of all color notations
- [Using relative colors](/en-US/docs/Web/CSS/CSS_colors/Relative_colors)
- [sRGB color picker and conversion tool](/en-US/docs/Web/CSS/CSS_colors/Color_picker_tool)
- [CSS colors](/en-US/docs/Web/CSS/CSS_colors) module
- [`color-gamut`](/en-US/docs/Web/CSS/@media/color-gamut) media feature
- [Wide Gamut Color in CSS with Display-p3](https://webkit.org/blog/10042/wide-gamut-color-in-css-with-display-p3/)
