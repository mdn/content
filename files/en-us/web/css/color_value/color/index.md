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
color(display-p3 1 0.5 0);
color(display-p3 1 0.5 0 / .5);
```

### Values

Functional notation: `color(colorspace p1 p2 p3[ / A])`

- `colorspace`

  - : An {{CSSXref("&lt;ident&gt;")}} denoting one of the predefined color spaces: `srgb`, `srgb-linear`, `display-p3`, `a98-rgb`, `prophoto-rgb`, `rec2020`, `xyz`, `xyz-d50`, and `xyz-d65`.

- `p1`, `p2`, `p3`

  - : {{CSSXref("number")}} or {{CSSXref("percentage")}} values providing the parameter values that the color space takes.

- `A` {{optional_inline}}

  - : An {{CSSXref("&lt;alpha-value&gt;")}}, where the number `1` corresponds to `100%` (full opacity).

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

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [The `<color>` data type](/en-US/docs/Web/CSS/color_value) for a list of all color notations
- [`color-gamut`](/en-US/docs/Web/CSS/@media/color-gamut) media feature
- [Wide Gamut Color in CSS with Display-p3](https://webkit.org/blog/10042/wide-gamut-color-in-css-with-display-p3/)
