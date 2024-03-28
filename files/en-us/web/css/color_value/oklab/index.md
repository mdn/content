---
title: oklab()
slug: Web/CSS/color_value/oklab
page-type: css-function
browser-compat: css.types.color.oklab
spec-urls:
  - https://drafts.csswg.org/css-color-5/#relative-Oklab
  - https://drafts.csswg.org/css-color/#ok-lab
---

{{CSSRef}}

The **`oklab()`** functional notation expresses a given color in the Oklab {{glossary("color space")}}, which attempts to mimic how color is perceived by the human eye. The `oklab()` works with a Cartesian coordinate system on the Oklab color space, the a- and b-axes. If you want a polar color system, chroma and hue, use {{cssxref("color_value/oklch", "oklch()")}}.

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
oklab(from green l a b / 0.5)
oklab(from #0000FF calc(l + 0.1) a b)
oklab(from hsl(180 100% 50%) calc(l - 0.1) a b)
```

### Values

Below are descriptions of the allowed values for both absolute and [relative colors](/en-US/docs/Web/CSS/CSS_colors/Relative_colors).

#### Absolute value syntax

```text
oklab(L a b[ / A])
```

The parameters are as follows:

- `L`
  - : A {{CSSXref("&lt;number&gt;")}} between `0` and `1`, a {{CSSXref("&lt;percentage&gt;")}} between `0%` and `100%`, or the keyword `none` (equivalent to `0%` in this case). This value specifies the color's perceived lightness. The number `0` corresponds to `0%` (black) and the number `1` corresponds to `100%` (white).
- `a`
  - : A {{CSSXref("&lt;number&gt;")}} between `-0.4` and `0.4`, a {{CSSXref("&lt;percentage&gt;")}} between `-100%` and `100%`, or the keyword `none` (equivalent to `0%` in this case). This value specifies the color's distance along the `a` axis in the Oklab color space, which defines how green (moving towards `-0.4`) or red (moving towards `+0.4`) the color is. Note that these values are signed (allowing both positive and negative values) and theoretically unbounded, meaning that you can set values outside the `±0.4` (`±100%`) limits. In practice, values cannot exceed `±0.5`.
- `b`
  - : A {{CSSXref("&lt;number&gt;")}} between `-0.4` and `0.4`, a {{CSSXref("&lt;percentage&gt;")}} between `-100%` and `100%`, or the keyword `none` (equivalent to `0%` in this case). This value specifies the color's distance along the `b` axis in the Oklab color space, which defines how blue (moving towards `-0.4`) or yellow (moving towards `+0.4`) the color is. Note that these values are signed (allowing both positive and negative values) and theoretically unbounded, meaning that you can set values outside the `±0.4` (`±100%`) limits. In practice, values cannot exceed `±0.5`.
- `A` {{optional_inline}}
  - : An {{CSSXref("&lt;alpha-value&gt;")}} representing the alpha channel value of the color, where the number `0` corresponds to `0%` (fully transparent) and `1` corresponds to `100%` (fully opaque). Additionally, the keyword `none` can be used to explicitly specify no alpha channel. If the `A` channel value is not explicitly specified, it defaults to 100%. If included, the value is preceded by a slash (`/`).

> **Note:** See [Missing color components](/en-US/docs/Web/CSS/color_value#missing_color_components) for more information on the effect of `none`.

#### Relative value syntax

```text
oklab(from <color> L a b[ / A])
```

The parameters are as follows:

- `from <color>`
  - : The keyword `from` is always included when defining a relative color, followed by a {{cssxref("&lt;color&gt;")}} value representing the **origin color**. This is the original color that the relative color is based on. The origin color can be _any_ valid {{cssxref("&lt;color&gt;")}} syntax, including another relative color.
- `L`
  - : A {{CSSXref("&lt;number&gt;")}} between `0` and `1`, a {{CSSXref("&lt;percentage&gt;")}} between `0%` and `100%`, or the keyword `none` (equivalent to `0%` in this case). This value represents the lightness of the output color. The number `0` corresponds to `0%` (black) and the number `1` corresponds to `100%` (white).
- `a`
  - : A {{CSSXref("&lt;number&gt;")}} between `-0.4` and `0.4`, a {{CSSXref("&lt;percentage&gt;")}} between `-100%` and `100%`, or the keyword `none` (equivalent to `0%` in this case). This value represents the output color's distance along the `a` axis in the Oklab color space, which defines how green (moving towards `-0.4`) or red (moving towards `+0.4`) the color is. Note that these values are signed (allowing both positive and negative values) and theoretically unbounded, meaning that you can set values outside the `±0.4` (`±100%`) limits. In practice, values cannot exceed `±0.5`.
- `b`
  - : A {{CSSXref("&lt;number&gt;")}} between `-0.4` and `0.4`, a {{CSSXref("&lt;percentage&gt;")}} between `-100%` and `100%`, or the keyword `none` (equivalent to `0%` in this case). This value represents the output color's distance along the `b` axis in the Oklab color space, which defines how blue (moving towards `-0.4`) or yellow (moving towards `+0.4`) the color is. Note that these values are signed (allowing both positive and negative values) and theoretically unbounded, meaning that you can set values outside the `±0.4` (`±100%`) limits. In practice, values cannot exceed `±0.5`.
- `A` {{optional_inline}}
  - : An {{CSSXref("&lt;alpha-value&gt;")}} representing the alpha channel value of the output color, where the number `0` corresponds to `0%` (fully transparent) and `1` corresponds to `100%` (fully opaque). Additionally, the keyword `none` can be used to explicitly specify no alpha channel. If the `A` channel value is not explicitly specified, it defaults to the alpha channel value of the origin color. If included, the value is preceded by a slash (`/`).

#### Defining relative color output channel components

When using relative color syntax inside an `oklab()` function, the browser converts the origin color into an equivalent Oklab color (if it is not already specified as such). The color defined as three distinct color channel values — `l` (lightness), `a` (green/red axis), and `b` (blue/yellow axis) — plus an alpha channel value (`alpha`). These channel values are made available inside the function to be used when defining the output color channel values:

- The `l` channel value is resolved to a `<number>` between `0` and `1`, inclusive.
- The `a` and `b` channels are each resolved to a `<number>` between `-0.4` and `0.4`, inclusive.
- The `alpha` channel is resolved to a `<number>` between `0` and `1`, inclusive.

When defining a relative color, the different channels of the output color can be expressed in several different ways. Below, we'll study some examples to illustrate these.

In the first two examples below, we are using relative color syntax. However, the first one outputs the same color as the origin color and the second one outputs a color not based on the origin color at all. They don't really create relative colors! You'd be unlikely to ever use these in a real codebase, and would probably just use an absolute color value instead. We included these examples as a starting point for learning about relative `oklab()` syntax.

Let's start with an origin color of `hsl(0 100% 50%)` (equivalent to `red`). The following function outputs the same color as the origin color — it uses the origin color's `l`, `a`, and `b` channel values (`0.627966`, `0.22488`, and `0.125859`) as the output channel values:

```css
oklab(from hsl(0 100% 50%) l a b)
```

This function's output color is `oklab(0.627966 0.22488 0.125859)`.

The next function uses absolute values for the output color's channel values, outputting a completely different color not based on the origin color:

```css
oklab(from hsl(0 100% 50%) 42.1% 0.165 -0.101)
```

In the above case, the output color is `oklab(0.421 0.165 -0.101)`.

The following function creates a relative color based on the origin color:

```css
oklab(from hsl(0 100% 50%) l -0.3 b)
```

This example:

- Converts the `hsl()` origin color to an equivalent `oklab()` color — `oklab(0.627966 0.22488 0.125859)`.
- Sets the `L` and `b` channel values for the output color to those of the origin `oklab()` equivalent's `L` and `b` channel values — those values are `0.627966` and `0.125859`, respectively.
- Sets the output color's `a` channel value to a new value not based on the origin color: `-0.3`.

The final output color is `oklab(0.627966 -0.3 0.125859)`.

> **Note:** As mentioned above, if the output color is using a different color model to the origin color, the origin color is converted to the same model as the output color in the background so that it can be represented in a way that is compatible (i.e. using the same channels).

In the examples we've seen so far in this section, the alpha channels have not been explicitly specified for either the origin or output colors. When the output color alpha channel is not specified, it defaults to the same value as the origin color alpha channel. When the origin color alpha channel is not specified (and it is not a relative color), it defaults to `1`. Therefore, the origin and output alpha channel values are `1` for the above examples.

Let's look at some examples that specify origin and output alpha channel values. The first one specifies the output alpha channel value as being the same as the origin alpha channel value, whereas the second one specifies a different output alpha channel value, unrelated to the origin alpha channel value.

```css
oklab(from hsl(0 100% 50% / 0.8) l a b / alpha)
/* Computed output color: oklab(0.627966 0.22488 0.125859 / 0.8) */

oklab(from hsl(0 100% 50% / 0.8) l a b / 0.5)
/* Computed output color: oklab(0.627966 0.22488 0.125859 / 0.5) */
```

In the following example, the `hsl()` origin color is again converted to the `oklab()` equivalent — `oklab(0.627966 0.22488 0.125859)`. {{cssxref("calc")}} calculations are applied to the `L`, `a`, `b`, and `A` values, resulting in an output color of `oklab(0.827966 0.14488 -0.0741406 / 0.9)`:

```css
oklab(from hsl(0 100% 50%) calc(l + 0.2) calc(a - 0.08) calc(b - 0.2) / calc(alpha - 0.1))
```

> **Note:** Because the origin color channel values are resolved to `<number>` values, you have to add numbers to them when using them in calculations, even in cases where a channel would normally accept `<percentage>`, `<angle>`, or other value types. Adding a `<percentage>` to a `<number>`, for example, doesn't work.

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

This example styles three {{htmlelement("div")}} elements with different background colors. The middle one is given the unmodified `--base-color`, while the left and right ones are given lightened and darkened variants of that `--base-color`.

These variants are defined using relative colors — the `--base-color` [custom property](/en-US/docs/Web/CSS/--*) is passed into an `oklab()` function, and the output colors have their lightness channel modified to achieve the desired effect via a `calc()` function. The lightened color has `0.15` (15%) added to the lightness channel, and the darkened color has `0.15` (15%) subtracted from the lightness channel.

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
- {{cssxref("color_value/lab","lab()")}} and {{cssxref("color_value/oklch","oklch()")}} color functions
- [Using relative colors](/en-US/docs/Web/CSS/CSS_colors/Relative_colors)
- [CSS colors](/en-US/docs/Web/CSS/CSS_colors) module
- [A perceptual color space for image processing](https://bottosson.github.io/posts/oklab/) on bottosson.github.io (2023)
- [OKLAB color wheel](https://observablehq.com/@shan/oklab-color-wheel) on observablehq.com
