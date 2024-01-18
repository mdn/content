---
title: oklab()
slug: Web/CSS/color_value/oklab
page-type: css-function
browser-compat: css.types.color.oklab
---

{{CSSRef}}

The **`oklab()`** functional notation expresses a given color in the Oklab color space, which attempts to mimic how color is perceived by the human eye. The `oklab()` works with a Cartesian coordinate system on the Oklab color space, the a- and b-axes. If you want a polar color system, chroma and hue, use {{cssxref("color_value/oklch", "oklch()")}}.

Oklab is a perceptual color space and is useful to:

- Transform an image to grayscale, without changing its lightness.
- Modify the saturation of colors, while keeping user perception of hue and lightness
- Create smooth and uniform gradients of colors (when interpolated manually, for example, in a {{HTMLElement("canvas")}} element).

The function `oklab()` can represent any color from the Oklab color space that is wider than RGB and include wide gamut and P3 colors.

## Syntax

```css
/* Absolute values */

oklab(40.1% 0.1143 0.045);
oklab(59.69% 0.1007 0.1191);
oklab(59.69% 0.1007 0.1191 / 0.5);

/* Relative values */

/* Add a semi-transparent alpha channel to green */
oklab(from green l a b / 0.5)
/* Create lighter and darker blue variants by setting the output
   colors' l channel values equal to the origin color's l
   channel value plus or minus 10% */
oklab(from blue calc(l + 0.1) a b)
oklab(from blue calc(l - 0.1) a b)
```

### Values

Below we have provided descriptions of the allowed values for both absolute and relative colors.

> **Note:** See [Missing color components](/en-US/docs/Web/CSS/color_value#missing_color_components) for the effect of `none`.

#### Absolute values

Functional notation of absolute values: `oklab(L a b[ / A])`

- `L`
  - : A {{CSSXref("&lt;number&gt;")}} between `0` and `1`, a {{CSSXref("&lt;percentage&gt;")}} between `0%` and `100%`, or the keyword `none`, where the number `0` corresponds to `0%` (black) and the number `1` corresponds to `100%` (white). `L` specifies the perceived lightness.
- `a`
  - : A {{CSSXref("&lt;number&gt;")}} between `-0.4` and `0.4`, a {{CSSXref("&lt;percentage&gt;")}} between `-100%` and `100%`, or the keyword `none`. It specifies the distance along the `a` axis in the Oklab colorspace, that is, how green/red the color is.
- `b`
  - : A {{CSSXref("&lt;number&gt;")}} between `-0.4` and `0.4`, a {{CSSXref("&lt;percentage&gt;")}} between `-100%` and `100%`, or the keyword `none`. It specifies the distance along the `b` axis in the Oklab colorspace, that is, how blue/yellow the color is.
- `A` {{optional_inline}}
  - : An {{CSSXref("&lt;alpha-value&gt;")}} or the keyword `none`, where the number `1` corresponds to `100%` (full opacity).

#### Relative values

Functional notation of relative values: `oklab(from color lightness a b[ / alpha])`

- `from`
  - : The keyword `from` is always included when defining a relative color.
- `color`
  - : A {{cssxref("&lt;color&gt;")}} value representing the **origin color** that the relative color is based on. Note that this can be _any_ valid {{cssxref("&lt;color&gt;")}} syntax, including another relative color.
- `lightness`
  - : A {{CSSXref("&lt;number&gt;")}} between `0` and `1`, a {{CSSXref("&lt;percentage&gt;")}} between `0%` and `100%`, or the keyword `none`, which represents the lightness of the output color. Here `100%` is white, `0%` is black, and `50%` is "normal".
- `a`
  - : A {{CSSXref("&lt;number&gt;")}} between `-0.4` and `0.4`, a {{CSSXref("&lt;percentage&gt;")}} between `-100%` and `100%`, or the keyword `none`. This represents the output color's distance along the `a` axis in the Oklab colorspace, that is how green/red the color is.
- `b`
  - : A {{CSSXref("&lt;number&gt;")}} between `-0.4` and `0.4`, a {{CSSXref("&lt;percentage&gt;")}} between `-100%` and `100%`, or the keyword `none`, This represents the output color's distance along the `b` axis in the Oklab colorspace, that is how blue/yellow the color is.
- `alpha` {{optional_inline}}
  - : An {{CSSXref("&lt;alpha-value&gt;")}} or the keyword `none`, where the number `1` corresponds to `100%` (full opacity). This represents the alpha channel value of the output color. If the `alpha` channel value is not explicitly specified, it defaults to the alpha channel value of the origin color.

#### Defining relative color output channel components

The browser destructures the origin color into `oklab()` component values that are made available inside the function as `l` (lightness), `a` (green/red axis), `b` (blue/yellow axis), and `alpha`. These can be used in defining the output color channel values if desired, and take the following values:

- The `l` channel value is resolved to a `<number>` between 0 and 1 that represents the origin color's lightness.
- The `a` and `b` channels are resolved to a `<number>` between -0.4 and 0.4 which represents the origin color's a and b axis positions.
- The `alpha` channel is resolved to a `<number>` between 0 and 1 which represents the origin color's alpha value.

When defining a relative color, the different channels of the output color can be expressed in several different ways.

For example, let's start with an origin color of `hsl(0 100% 50%)` (equivalent to `red`). The following function outputs the same color as the origin color — it uses the origin color's `l`, `a`, and `b` channel values as the output channel values:

```css
oklab(from hsl(0 100% 50%) l a b)
```

> **Note:** If the output color is using a different color model to the origin color, the origin color is converted to the same model as the output color in the background so that it can be represented in a way that is compatible (i.e. using the same channels).

This function uses absolute values for the output color's channel values, outputting a completely different color not based on the origin color:

```css
oklab(from hsl(0 100% 50%) 42.1% 41.25% -25.25%)
```

> **Note:** Bear in mind that, if you are using relative color syntax but outputting the same color as the origin color or a color not based on the origin color at all, you are not really creating a relative color. You'd be unlikely to ever do this in a real codebase, and would probably just use an absolute color value instead. But, we felt it useful to explain that you _can_ do this with relative color syntax, as a starting point for learning about it.

The following function uses two of the origin color channel values for the output color channel value, but uses a new value for the other output channel value, creating a relative color based on the origin color:

```css
oklab(from hsl(0 100% 50%) l -0.3 b)
```

The following function uses the origin color's channel values inside {{cssxref("calc")}} functions to calculate new channel values for the output color:

```css
oklab(from hsl(0 100% 50%) calc(l + 0.2) calc(a - 0.08) calc(b - 0.2) / calc(alpha - 0.1))
```

### Formal syntax

{{csssyntax}}

## Examples

### Adjusting the lightness and axes with oklab()

The following example shows the effect of varying the lightness, a-axis, and b-axis values of the `oklab()` function.

#### HTML

```html
<div data-color="blue"></div>
<div data-color="blue-light"></div>

<div data-color="red"></div>
<div data-color="red-a"></div>

<div data-color="green"></div>
<div data-color="green-b"></div>
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
[data-color="blue"] {
  background-color: oklab(0.5 -0.3 -0.4);
}
[data-color="blue-light"] {
  background-color: oklab(0.7 -0.3 -0.4);
}

[data-color="red"] {
  background-color: oklab(100% 0.4 0.4);
}
[data-color="red-a"] {
  background-color: oklab(100% 0.2 0.4);
}

[data-color="green"] {
  background-color: oklab(100% -100% 0.4);
}
[data-color="green-b"] {
  background-color: oklab(100% -100% 0.6);
}
```

#### Result

{{EmbedLiveSample("Adjusting_the_lightness_and_axes", "100%", 155)}}

### Adjusting opacity with oklab()

The following example shows the effect of varying the `A` (alpha) value of the `oklab()` function.
The `red` and `red-alpha` elements overlap the `#background-div` element to demonstrate the effect of opacity.
Giving the `red-alpha` element an opacity of `0.4` makes it appear more transparent than the `red` element.

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
  background-color: oklab(0.628 0.225 0.126);
}
[data-color="red-alpha"] {
  background-color: oklab(0.628 0.225 0.126 / 0.4);
}
```

#### Result

{{EmbedLiveSample("Adjusting_opacity_with_oklab", "100%", 155)}}

### Using relative colors with oklab()

The below example styles three {{htmlelement("div")}} elements with different background colors. The middle one is given the unmodified `--base-color`, while the left and right ones are given lightened and darkened variants of that `--base-color`.

These variants are defined using relative colors — the `--base-color` [custom property](/en-US/docs/Web/CSS/--*) is passed into an `oklab()` function, and the output colors have their lightness channel modified to achieve the desired effect via a `calc()` function. The lightened color has 15% added to the lightness channel, and the darkened color has 15% subtracted from the lightness channel.

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
  background-color: oklab(from var(--base-color) calc(l + 0.15) a b);
}

#two {
  background-color: var(--base-color);
}

#three {
  background-color: oklab(from var(--base-color) calc(l - 0.15) a b);
}
```

#### Result

The output is as follows:

{{ EmbedLiveSample("Using relative colors with oklab()", "100%", "200") }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [`<color>` data type](/en-US/docs/Web/CSS/color_value) for a list of all color notations
- {{cssxref("color_value/oklch",'oklch()')}}: Another functional notation using the same color space as `oklab()` but in a polar coordinate system
- [Using relative colors](/en-US/docs/Web/CSS/CSS_colors/Relative_colors)
- [A perceptual color space for image processing](https://bottosson.github.io/posts/oklab/) on bottosson.github.io (2023)
- [OKLAB color wheel](https://observablehq.com/@shan/oklab-color-wheel) on observablehq.com
