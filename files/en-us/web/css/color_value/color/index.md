---
title: color()
slug: Web/CSS/color_value/color
page-type: css-function
browser-compat: css.types.color.color
---

{{CSSRef}}

The **`color()`** functional notation allows a color to be specified in a particular, specified colorspace rather than the implicit sRGB colorspace that most of the other color functions operate in.

Support for a particular colorspace can be detected with the [`color-gamut`](/en-US/docs/Web/CSS/@media/color-gamut) CSS media feature.

The [`@color-profile`](/en-US/docs/Web/CSS/@color-profile) [CSS](/en-US/docs/Web/CSS) [at-rule](/en-US/docs/Web/CSS/At-rule) can be used to define and name a color profile to be used in the `color()` function to specify a color.

## Syntax

```css
color(display-p3 1 0.5 0);
color(display-p3 1 0.5 0 / .5);
```

### Values

- Functional notation: `color( [ [<ident> | <dashed-ident>]? [ <number-percentage>+ ] [ / <alpha-value> ]? ] )`

  - : `[<ident> | <dashed-ident>]` is an optional {{cssxref("ident")}} or {{cssxref("dashed-ident")}} denoting the colorspace. If this is an `<ident>` it denotes one of the predefined colorspaces (such as display-p3); if it is a `<dashed-ident>` it denotes a custom colorspace, defined by a [`@color-profile`](/en-US/docs/Web/CSS/@color-profile) rule.

    `[ <number-percentage>+ ]` is one or more {{cssxref("number")}} or {{cssxref("percentage")}} values providing the parameter values that the colorspace takes.

    `/ <alpha-value>` (alpha) can be a {{cssxref("&lt;number&gt;")}} between `0` and `1`, or a {{cssxref("&lt;percentage&gt;")}}, where the number `1` corresponds to `100%` (full opacity).

### Formal syntax

{{csssyntax}}

## Examples

### Using predefined colorspaces with color()

The following example shows the effect of varying the lightness, a-axis, and b-axis values of the `color()` function.

```html
<div id="red-a98-rgb"></div>
<div id="red-prophoto-rgb"></div>
<div id="green-srgb-linear"></div>
<div id="green-display-p3"></div>
<div id="blue-rec2020"></div>
<div id="blue-srgb"></div>
```

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
#red-a98-rgb {
  background-color: color(a98-rgb 1 0 0);
}
#red-prophoto-rgb {
  background-color: color(prophoto-rgb 1 0 0);
}
#green-srgb-linear {
  background-color: color(srgb-linear 0 1 0);
}
#green-display-p3 {
  background-color: color(display-p3 0 1 0);
}
#blue-rec2020 {
  background-color: color(rec2020 0 0 1);
}
#blue-srgb {
  background-color: color(srgb 0 0 1);
}
```

{{EmbedLiveSample('Using_predefined_colorspaces_with_color')}}

### Using xyz colorspaces with color()

The following example shows how to use `xyz` colorspaces to specify a color.

```html
<div id="red"></div>
<div id="green"></div>
<div id="blue"></div>
```

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
#red {
  background-color: color(xyz 45 20 0);
}

#green {
  background-color: color(xyz-d50 0.3 80 0.3);
}

#blue {
  background-color: color(xyz-d65 5 0 50);
}
```

{{EmbedLiveSample('Using_xyz_colorspaces_with_color')}}

### Using color-gamut media queries with color()

The following example shows how to use the `color-gamut` media query to detect support for `srgb` and to apply a different color in that case.

```html
<div class="blue"></div>
```

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
.blue {
  background-color: lightblue;
}

@media (color-gamut: srgb) {
  .blue {
    background-color: color(srgb 48% 86% 92%);
  }
}
```

{{EmbedLiveSample('Using_color-gamut_media_queries_with_color')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [The `<color >` data type](/en-US/docs/Web/CSS/color_value) for a list of all color notations
- [`color-gamut`](/en-US/docs/Web/CSS/@media/color-gamut) media feature
- [Wide Gamut Color in CSS with Display-p3](https://webkit.org/blog/10042/wide-gamut-color-in-css-with-display-p3/)
