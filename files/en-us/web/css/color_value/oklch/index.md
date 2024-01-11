---
title: oklch()
slug: Web/CSS/color_value/oklch
page-type: css-function
browser-compat: css.types.color.oklch
---

{{CSSRef}}

The **`oklch()`** functional notation expresses a given color in the Oklch color space. It has the same L axis as {{cssxref("color_value/oklab","oklab()")}}, but uses polar coordinates C (Chroma) and H (Hue).

## Syntax

```css
/* Absolute values */
oklch(40.1% 0.123 21.57)
oklch(59.69% 0.156 49.77)
oklch(59.69% 0.156 49.77 / .5)

/* Relative values */

/* Change the l, c, and h channels to transform red to purple */
oklch(from rgb(255 0 0) 42.1% 48.25% 328.363deg)
/* Add a semi-transparent alpha channel to green */
oklch(from green l c h / 0.5)
/* Create lighter and darker blue variants by setting the output
   colors' l channel values equal to the origin color's l
   channel value plus or minus 10% */
oklch(from blue calc(l + 0.1) c h)
oklch(from blue calc(l - 0.1) c h)
```

## Values

Below we have provided descriptions of the allowed values for both absolute and relative colors.

> **Note:** See [Missing color components](/en-US/docs/Web/CSS/color_value#missing_color_components) for the effect of `none`.

### Absolute values

Functional notation of absolute values: `oklch(L C H[ / A])`

- `L`
  - : A {{CSSXref("&lt;number&gt;")}} between `0` and `1`, a {{CSSXref("&lt;percentage&gt;")}} between `0%` and `100%`, or the keyword `none`, where the number `0` corresponds to `0%` (black) and the number `1` corresponds to `100%` (white). `L` specifies the perceived lightness.
- `C`
  - : A {{CSSXref("&lt;number&gt;")}}, a {{CSSXref("&lt;percentage&gt;")}}, or the keyword `none`, where `0%` is `0` and `100%` is the number `0.4`. It is a measure of the chroma (roughly representing the "amount of color"). Its minimum useful value is `0`, while the maximum is theoretically unbounded (but in practice does not exceed `0.5`).
- `H`
  - : A {{CSSXref("&lt;number&gt;")}}, an {{CSSXref("&lt;angle&gt;")}}, or the keyword `none`, which represents the hue angle. More details on this type can be found on the {{CSSXref("&lt;hue&gt;")}} reference.
- `A` {{optional_inline}}
  - : An {{CSSXref("&lt;alpha-value&gt;")}} or the keyword `none`, where the number `1` corresponds to `100%` (full opacity).

### Relative values

Functional notation of relative values: `oklch(from color lightness chroma hue[ / alpha])`

- `from`
  - : The keyword `from` is always included when defining a relative color.
- `color`
  - : A {{cssxref("&lt;color&gt;")}} value representing the **origin color** that the relative color is based on. Note that this can be _any_ valid {{cssxref("&lt;color&gt;")}} syntax, including another relative color.
- `lightness`
  - : A {{CSSXref("&lt;number&gt;")}} between `0` and `1`, a {{CSSXref("&lt;percentage&gt;")}} between `0%` and `100%`, or the keyword `none`. This represents the lightness value of the output color. Here the number `0` corresponds to `0%` (black) and the number `100` corresponds to `100%` (white).
- `chroma`
  - : A {{CSSXref("&lt;number&gt;")}}, a {{CSSXref("&lt;percentage&gt;")}}, or the keyword `none`, where `0%` is `0` and `100%` is the number `0.4`. This represents the output color's chroma value (roughly representing the "amount of color"). Its minimum useful value is `0`, while its maximum is theoretically unbounded (but in practice does not exceed `0.5`).
- `hue`
  - : A {{CSSXref("&lt;number&gt;")}}, an {{CSSXref("&lt;angle&gt;")}}, or the keyword `none`. This represents the output color's hue angle. More details on this type can be found on the {{CSSXref("&lt;hue&gt;")}} reference.
- `alpha` {{optional_inline}}
  - : An {{CSSXref("&lt;alpha-value&gt;")}} or the keyword `none`, where the number `1` corresponds to `100%` (full opacity). This represents the alpha channel value of the output color. If the `alpha` channel value is not explicitly specified, it defaults to the alpha channel value of the origin color.

### Defining relative color output channel components

The browser destructures the origin color into `oklch()` component values that are made available inside the function as `l` (lightness), `c` (chroma), `h` (hue), and `alpha`. These can be used in defining the output color channel values if desired, and take the following values:

- The `l` channel value is resolved to a `<number>` between 0 and 1 which represents the origin color's lightness.
- The `c` channel value is resolved to a `<number>` between 0 and 0.4 which represents the origin color's chroma.
- The `h` channel value is resolved to a `<number>` between 0 and 360 which represents the origin color's hue.
- The `alpha` channel is resolved to a `<number>` between 0 and 1 which represents the origin color's alpha value.

When defining a relative color, the different channels of the output color can be expressed in several different ways.

For example, let's start with an origin color of `hsl(0 100% 50%)` (equivalent to `red`). The following function outputs the same color as the origin color — it uses the origin color's `l`, `c`, and `h` channel values as the output channel values:

```css
oklch(from hsl(0 100% 50%) l c h)
```

> **Note:** If the output color is using a different color model to the origin color, the origin color is converted to the same model as the output color in the background so that it can be represented in a way that is compatible (i.e. using the same channels).

This function uses absolute values for the output color's channel values, outputting a completely different color not based on the origin color:

```css
oklch(from hsl(0 100% 50%) 42.1 48.25 328.363)
```

The following function uses the origin color's channel values inside {{cssxref("calc()")}} functions to calculate new channel values for the output color:

```css
oklch(from hsl(0 100% 50%) calc(l + 0.2) calc(c + 0.1) calc(h - 20) / calc(alpha - 0.1))
```

## Formal syntax

{{csssyntax}}

## Examples

### Adjusting the lightness, chroma, and hue of a color

The following example shows the effect of varying the `L` (lightness), `C` (chroma), and `H` (hue) values of the `oklch()` color function.

#### HTML

```html
<div data-color="blue"></div>
<div data-color="blue-light"></div>

<div data-color="red"></div>
<div data-color="red-chroma"></div>

<div data-color="green"></div>
<div data-color="green-hue"></div>
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
  background-color: oklch(60% 0.4 240);
}
[data-color="blue-light"] {
  background-color: oklch(90% 0.4 240);
}

[data-color="red"] {
  background-color: oklch(100% 0.4 30);
}
[data-color="red-chroma"] {
  background-color: oklch(100% 0.3 40);
}

[data-color="green"] {
  background-color: oklch(60% 0.57 161);
}
[data-color="green-hue"] {
  background-color: oklch(60% 0.57 181);
}
```

#### Result

{{EmbedLiveSample("adjusting_the_lightness_chroma_and_hue_of_a_color")}}

### Adjusting the alpha value of a color

The following example shows the effect of varying the `A` (alpha) value of the `oklch()` color function.
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
  background-color: oklch(100% 0.57 217);
  width: 150px;
  height: 40px;
}
```

```css
[data-color="red"] {
  background-color: oklch(50% 0.5 20);
}
[data-color="red-alpha"] {
  background-color: oklch(50% 0.5 20 / 0.4);
}
```

#### Result

{{EmbedLiveSample("adjusting_the_alpha_value_of_a_color")}}

### Using relative colors with oklch()

The below example styles three {{htmlelement("div")}} elements with different background colors. The middle one is given the unmodified `--base-color`, while the left and right ones are given lightened and darkened variants of that `--base-color`.

These variants are defined using relative colors — the `--base-color` [custom property](/en-US/docs/Web/CSS/--*) is passed into an `oklch()` function, and the output colors have their lightness channel modified to achieve the desired effect via a `calc()` function. The lightened color has 15% added to the lightness channel, and the darkened color has 15% subtracted from the lightness channel.

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
  background-color: oklch(from var(--base-color) calc(l + 0.15) c h);
}

#two {
  background-color: var(--base-color);
}

#three {
  background-color: oklch(from var(--base-color) calc(l - 0.15) c h);
}
```

#### Result

The output is as follows:

{{ EmbedLiveSample("Using relative colors with oklch()", "100%", "200") }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [List of all color notations](/en-US/docs/Web/CSS/color_value)
- [Using relative colors](/en-US/docs/Web/CSS/CSS_colors/Relative_colors)
- {{CSSXref("&lt;hue&gt;")}} data type
- [A perceptual color space for image processing](https://bottosson.github.io/posts/oklab/)
- [OKLCH in CSS](https://evilmartians.com/chronicles/oklch-in-css-why-quit-rgb-hsl)
