---
title: color()
slug: Web/CSS/color_value/color
page-type: css-function
browser-compat: css.types.color.color
---

{{CSSRef}}

The **`color()`** functional notation allows a color to be specified in a particular, specified colorspace rather than the implicit sRGB colorspace that most of the other color functions operate in.

Support for a particular colorspace can be detected with the [`color-gamut`](/en-US/docs/Web/CSS/@media/color-gamut) CSS media feature.

## Syntax

```css
/* Absolute values */

color(display-p3 1 0.5 0);
color(display-p3 1 0.5 0 / .5);

/* Relative values */

/* Change the r g and b channels to transform red to purple */
color(from rgb(255 0 0) srgb-linear 0.215811 -1.07102e-8 0.215811)
/* Add a semi-transparent alpha channel to green */
color(from green xyz-d50 x y z / 0.5)
/* Create a magenta color from blue by setting the output
   color's r and b channel values equal to modified
   versions of the origin color's r and b values */
color(from blue display-p3 calc(r + 0.75) g calc(b - 0.35))
```

### Values

Below we have provided descriptions of the allowed values for both absolute and relative colors.

> **Note:** See [Missing color components](/en-US/docs/Web/CSS/color_value#missing_color_components) for the effect of `none`.

#### Absolute values

Functional notation of absolute values: `color(colorspace c1 c2 c3[ / A])`

- `colorspace`

  - : An {{CSSXref("&lt;ident&gt;")}} denoting one of the predefined colorspaces: `srgb`, `srgb-linear`, `display-p3`, `a98-rgb`, `prophoto-rgb`, `rec2020`, `xyz`, `xyz-d50`, or `xyz-d65`.

- `c1`, `c2`, `c3`

  - : Each value can be written as a {{CSSXref("number")}} between 0 and 1, a {{CSSXref("percentage")}}, or the keyword `none`. These values represent the component values for the colorspace.

- `A` {{optional_inline}}

  - : An {{CSSXref("&lt;alpha-value&gt;")}} or the keyword `none`, where the number `1` corresponds to `100%` (full opacity).

#### Relative values

Functional notation of relative values: `color(from color colorspace c1 c2 c3[ / alpha])`

- `from`
  - : The keyword `from` is always included when defining a relative color.
- `color`
  - : A {{cssxref("&lt;color&gt;")}} value representing the **origin color** that the relative color is based on. Note that this can be _any_ valid {{cssxref("&lt;color&gt;")}} syntax, including another relative color.
- `colorspace`
  - : An {{CSSXref("&lt;ident&gt;")}} denoting one of the predefined colorspaces: `srgb`, `srgb-linear`, `display-p3`, `a98-rgb`, `prophoto-rgb`, `rec2020`, `xyz`, `xyz-d50`, or `xyz-d65`.
- `c1`, `c2`, `c3`
  - : Each value can be written as a {{CSSXref("number")}} between 0 and 1, a {{CSSXref("percentage")}}, or the keyword `none`. These values represent the component values for the output color.
- `alpha` {{optional_inline}}
  - : An {{CSSXref("&lt;alpha-value&gt;")}} or the keyword `none`, where the number `1` corresponds to `100%` (full opacity). This represents the alpha channel value of the output color. If the `alpha` channel value is not explicitly specified, it defaults to the alpha channel value of the origin color.

#### Defining relative color output channel components

The browser destructures the origin color into `color()` component values for the specified colorspace that are made available inside the function as three color channel values, and `alpha`. These can be used in defining the output color channel values if desired, and take the following values:

- The three color channel values are resolved to a `<number>` between 0 and 1. Depending on the specified colorspace, these values will be one of the following:
  - `r`, `g`, and `b`: Color channel values for RGB-based colorspaces, that is `srgb`, `srgb-linear`, `display-p3`, `a98-rgb`, `prophoto-rgb`, and `rec2020`.
  - `x`, `y`, and `z`: Color channel values for CIE XYZ-based colorspaces, that is `xyz`, `xyz-d50`, and `xyz-d65`.
    > **Note:** As per spec, specifying `r`, `g`, and `b` values inside a `color()` function with a CIE XYZ-based colorspace, or specifying `x`, `y`, and `z` values inside a `color()` function with an RGB-based colorspace, will result in an invalid color value. The origin color values have to match the specified type of colorspace.
- The `alpha` channel is resolved to a `<number>` between 0 and 1 which represents the origin color's alpha value.

When defining a relative color, the different channels of the output color can be expressed in several different ways.

For example, let's start with an origin color of `hsl(0 100% 50%)` (equivalent to `red`). The following functions output the same color as the origin color — they use the origin color's color channel values as the output channel values:

```css
color(from hsl(0 100% 50%) srgb r g b)
color(from hsl(0 100% 50%) xyz x y z)
```

> **Note:** If the output color is using a different color model to the origin color, the origin color is converted to the same model as the output color in the background so that it can be represented in a way that is compatible (i.e. using the same channels).

These functions use absolute values for the output color channel values, outputting completely different colors not based on the origin color:

```css
color(from hsl(0 100% 50%) srgb 0.749938 0 0.609579)
color(from hsl(0 100% 50%) xyz 0.75 0.6554 0.1)
```

The following functions use the origin color channel values inside {{cssxref("calc()")}} functions to calculate new channel values for the output colors:

```css
color(from hsl(0 100% 50%) srgb calc(r - 0.4) calc(g + 0.1) calc(b + 0.6))
color(from hsl(0 100% 50%) xyz calc(x - 0.3) calc(y + 0.3) calc(z + 0.3))
```

### Formal syntax

{{csssyntax}}

## Examples

### Using predefined colorspaces with color()

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

{{EmbedLiveSample("using_predefined_colorspaces_with_color")}}

### Using the xyz colorspace with color()

The following example shows how to use the `xyz` colorspace to specify a color.

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

{{EmbedLiveSample("using_the_xyz_colorspace_with_color")}}

### Using color-gamut media queries with color()

This example shows how to use the [`color-gamut`](/en-US/docs/Web/CSS/@media/color-gamut) media query to detect support for a particular colorspace and use that colorspace to specify a color.

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
    background-color: color(display-p3 0 0 1);
  }
}

@media (color-gamut: srgb) {
  div:nth-child(2) {
    background-color: color(srgb 0 0 1);
  }
}

@media (color-gamut: rec2020) {
  div:nth-child(3) {
    background-color: color(rec2020 0 0 1);
  }
}
```

#### Result

{{EmbedLiveSample("using_color-gamut_media_queries_with_color")}}

### Using relative colors with color()

The below example styles three {{htmlelement("div")}} elements with different background colors. The middle one is given the unmodified `--base-color`, while the left and right ones are given lightened and darkened variants of that `--base-color`.

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

/* Use @supports to add in support for Safari 16.4+, which supports old
   syntax that requires r g b values to be specified as percentages (with
   units) in calculations */
@supports (color: color(from red r g calc(b + 30%))) {
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
- [`color-gamut`](/en-US/docs/Web/CSS/@media/color-gamut) media feature
- [Wide Gamut Color in CSS with Display-p3](https://webkit.org/blog/10042/wide-gamut-color-in-css-with-display-p3/)
