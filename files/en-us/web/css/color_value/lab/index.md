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
/* Absolute values */

lab(29.2345% 39.3825 20.0664);
lab(52.2345% 40.1645 59.9971);
lab(52.2345% 40.1645 59.9971 / .5);

/* Relative values */

/* Change the l, a, and b channels to transform red to purple */
lab(from rgb(255 0 0) 29.692% 44.89% -29.034%)
/* Add a semi-transparent alpha channel to green */
lab(from green l a b / 0.5)
/* Create lighter and darker blue variants by setting the output
   colors' l channel values equal to the origin color's l
   channel value plus or minus 10% */
lab(from blue calc(l + 10) a b)
lab(from blue calc(l - 10) a b)
```

### Values

Below we have provided descriptions of the allowed values for both absolute and relative colors.

> **Note:** Usually when percentage values have a numeric equivalent in CSS, `100%` is equal to the number `1`.
> This case is notable where `100%` is equal to the number `100` for the `L` value and `125` for the `a` and `b` values.

> **Note:** See [Missing color components](/en-US/docs/Web/CSS/color_value#missing_color_components) for the effect of `none`.

#### Absolute values

Functional notation of absolute values: `lab(L a b[ / A])`

- `L`
  - : A {{CSSXref("&lt;number&gt;")}} between `0` and `100`, a {{CSSXref("&lt;percentage&gt;")}} between `0%` and `100%`, or the keyword `none`, which specifies the CIE Lightness. Here the number `0` corresponds to `0%` (black) and the number `100` corresponds to `100%` (white).
- `a`
  - : A {{CSSXref("&lt;number&gt;")}} between `-125` and `125`, a {{CSSXref("&lt;percentage&gt;")}} between `-100%` and `100%`, or the keyword `none`, which specifies the distance along the `a` axis in the CIELAB colorspace, that is how green/red the color is.
- `b`
  - : A {{CSSXref("&lt;number&gt;")}} between `-125` and `125`, a {{CSSXref("&lt;percentage&gt;")}} between `-100%` and `100%`, or the keyword `none`, which specifies the distance along the `b` axis in the CIELAB colorspace, that is how blue/yellow the color is.
- `A` {{optional_inline}}
  - : An {{CSSXref("&lt;alpha-value&gt;")}} or the keyword `none`, where the number `1` corresponds to `100%` (full opacity).

#### Relative values

Functional notation of relative values: `lab(from color lightness a b[ / alpha])`

- `from`
  - : The keyword `from` is always included when defining a relative color.
- `color`
  - : A {{cssxref("&lt;color&gt;")}} value representing the **origin color** that the relative color is based on. Note that this can be _any_ valid {{cssxref("&lt;color&gt;")}} syntax, including another relative color.
- `lightness`
  - : A {{CSSXref("&lt;number&gt;")}} between `0` and `100`, a {{CSSXref("&lt;percentage&gt;")}} between `0%` and `100%`, or the keyword `none`, which represents the lightness of the output color. Here `100%` is white, `0%` is black, and `50%` is "normal".
- `a`
  - : A {{CSSXref("&lt;number&gt;")}} between `-125` and `125`, a {{CSSXref("&lt;percentage&gt;")}} between `-100%` and `100%`, or the keyword `none`. This represents the output color's distance along the `a` axis in the CIELAB colorspace, that is how green/red the color is.
- `b`
  - : A {{CSSXref("&lt;number&gt;")}} between `-125` and `125`, a {{CSSXref("&lt;percentage&gt;")}} between `-100%` and `100%`, or the keyword `none`, This represents the output color's distance along the `b` axis in the CIELAB colorspace, that is how blue/yellow the color is.
- `alpha` {{optional_inline}}
  - : An {{CSSXref("&lt;alpha-value&gt;")}} or the keyword `none`, where the number `1` corresponds to `100%` (full opacity). This represents the alpha channel value of the output color. If the `alpha` channel value is not explicitly specified, it defaults to the alpha channel value of the origin color.

#### Defining relative color output channel components

The browser destructures the origin color into `lab()` component values that are made available inside the function as `l` (lightness), `a` (green/red axis), `b` (blue/yellow axis), and `alpha`. These can be used in defining the output color channel values if desired, and take the following values:

- The `l` channel value is resolved to a `<number>` between 0 and 100 that represents the origin color's lightness.
- The `a` and `b` channels are resolved to a `<number>` between -125 and 125 which represents the origin color's a and b axis positions.
- The `alpha` channel is resolved to a `<number>` between 0 and 1 which represents the origin color's alpha value.

When defining a relative color, the different channels of the output color can be expressed in several different ways.

For example, let's start with an origin color of `hsl(0 100% 50%)` (equivalent to `red`). The following function outputs the same color as the origin color — it uses the origin color's `l`, `a`, and `b` channel values as the output channel values:

```css
lab(from hsl(0 100% 50%) l a b)
```

> **Note:** If the output color is using a different color model to the origin color, the origin color is converted to the same model as the output color in the background so that it can be represented in a way that is compatible (i.e. using the same channels).

This function uses absolute values for the output color's channel values, outputting a completely different color not based on the origin color:

```css
lab(from hsl(0 100% 50%) 29.692% 44.89% -29.034%)
```

The following function uses the origin color's channel values inside {{cssxref("calc()")}} functions to calculate new channel values for the output color:

```css
lab(from hsl(0 100% 50%) calc(l + 20) calc(a - 20) calc(b - 40) / calc(alpha - 0.1))
```

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

### Using relative colors with lab()

The below example styles three {{htmlelement("div")}} elements with different background colors. The middle one is given the unmodified `--base-color`, while the left and right ones are given lightened and darkened variants of that `--base-color`.

These variants are defined using relative colors — the `--base-color` [custom property](/en-US/docs/Web/CSS/--*) is passed into a `lab()` function, and the output colors have their lightness channel modified to achieve the desired effect via a `calc()` function. The lightened color has 15% added to the lightness channel, and the darkened color has 15% subtracted from the lightness channel.

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
  background-color: lab(from var(--base-color) calc(l + 15) a b);
}

#two {
  background-color: var(--base-color);
}

#three {
  background-color: lab(from var(--base-color) calc(l - 15) a b);
}
```

#### Result

The output is as follows:

{{ EmbedLiveSample("Using relative colors with lab()", "100%", "200") }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [`<color>` data type](/en-US/docs/Web/CSS/color_value) for a list of all color notations
- [Using relative colors](/en-US/docs/Web/CSS/CSS_colors/Relative_colors)
- [LCH colors in CSS: what, why, and how?](https://lea.verou.me/2020/04/lch-colors-in-css-what-why-and-how/)
- [Safari Technology Preview 122 release notes](https://webkit.org/blog/11577/release-notes-for-safari-technology-preview-122/): includes `lab()` and {{cssxref("color_value/lch",'lch()')}} colors
