---
title: lab()
slug: Web/CSS/color_value/lab
page-type: css-function
browser-compat: css.types.color.lab
---

{{CSSRef}}

The **`lab()`** functional notation expresses a given color in the CIE L\*a\*b\* color space. Lab represents the entire range of color that humans can see.

## Syntax

```css
lab(29.2345% 39.3825 20.0664);
lab(52.2345% 40.1645 59.9971);
lab(52.2345% 40.1645 59.9971 / .5);
```

### Values

Functional notation: `lab(L a b[ / A])`

- `L`
  - : A {{CSSXref("&lt;number&gt;")}} between `0` and `100`, a {{CSSXref("&lt;percentage&gt;")}} between `0%` and `100%`, or the keyword `none`, which specifies the CIE Lightness. Here the number `0` corresponds to `0%` (black) and the number `100` corresponds to `100%` (white).
- `a`
  - : A {{CSSXref("&lt;number&gt;")}} between `-125` and `125`, a {{CSSXref("&lt;percentage&gt;")}} between `-100%` and `100%`, or the keyword `none`, which specifies the distance along the `a` axis in the CIELAB colorspace, that is how green/red the color is.
- `b`
  - : A {{CSSXref("&lt;number&gt;")}} between `-125` and `125`, a {{CSSXref("&lt;percentage&gt;")}} between `-100%` and `100%`, or the keyword `none`, which specifies the distance along the `b` axis in the CIELAB colorspace, that is how blue/yellow the color is.
- `A` {{optional_inline}}
  - : An {{CSSXref("&lt;alpha-value&gt;")}} or the keyword `none`, where the number `1` corresponds to `100%` (full opacity).

> **Note:** Usually when percentage values have a numeric equivalent in CSS, `100%` is equal to the number `1`.
> This case is notable where `100%` is equal to the number `100` for the `L` value and `125` for the `a` and `b` values.

> **Note:** See [Missing color components](/en-US/docs/Web/CSS/color_value#missing_color_components) for the effect of `none`.

### Formal syntax

{{csssyntax}}

## Examples

### Adjusting lightness and color axes with lab()

The following example shows the effect of varying the lightness, a-axis, and b-axis values of the `lab()` function.

#### HTML

```html
<div data-color="red"></div>
<div data-color="red-a"></div>

<div data-color="green"></div>
<div data-color="green-b"></div>

<div data-color="blue"></div>
<div data-color="blue-light"></div>
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
  background-color: lab(100 125 125);
}
[data-color="red-a"] {
  background-color: lab(100 110 125);
}

[data-color="green"] {
  background-color: lab(75% -120 125);
}
[data-color="green-b"] {
  background-color: lab(75% -120 10);
}

[data-color="blue"] {
  background-color: lab(0 -120 -120);
}
[data-color="blue-light"] {
  background-color: lab(70 -120 -120);
}
```

#### Result

{{EmbedLiveSample("Adjusting_lightness_and_color_axes_with_lab")}}

### Adjusting opacity with lab()

The following example shows the effect of varying the `A` (alpha) value of the `lab()` functional notation.
The `red` and `red-alpha` elements overlap the `#background-div` element to demonstrate the effect of opacity.
Giving `A` a value of `0.4` makes the color 40% opaque.

#### HTML

```html
<div id="background-div">
  <div data-color="red"></div>
  <div data-color="red-alpha"></div>
</div>
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
#background-div {
  background-color: lightblue;
  width: 150px;
  height: 40px;
}
```

```css
[data-color="red"] {
  background-color: lab(100 125 125);
}
[data-color="red-alpha"] {
  background-color: lab(100 125 125 / 0.4);
}
```

#### Result

{{EmbedLiveSample('Adjusting_opacity_with_lab')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [`<color>` data type](/en-US/docs/Web/CSS/color_value) for a list of all color notations
- [LCH colors in CSS: what, why, and how?](https://lea.verou.me/2020/04/lch-colors-in-css-what-why-and-how/)
- [Safari Technology Preview 122 release notes](https://webkit.org/blog/11577/release-notes-for-safari-technology-preview-122/): includes `lab()` and {{cssxref("color_value/lch",'lch()')}} colors
