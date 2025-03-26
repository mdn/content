---
title: lab()
slug: Web/CSS/color_value/lab
page-type: css-function
browser-compat: css.types.color.lab
spec-urls:
  - https://drafts.csswg.org/css-color-5/#relative-Lab
  - https://drafts.csswg.org/css-color/#lab-colors
---

{{CSSRef}}

The **`lab()`** functional notation expresses a given color in the CIE L\*a\*b\* {{glossary("color space")}}.

Lab represents the entire range of colors that humans can see by specifying the color's lightness, a red/green axis value, a blue/yellow axis value, and an optional alpha transparency value.

## Syntax

```css
/* Absolute values */
lab(29.2345% 39.3825 20.0664);
lab(52.2345% 40.1645 59.9971);
lab(52.2345% 40.1645 59.9971 / .5);

/* Relative values */
lab(from green l a b / 0.5)
lab(from #0000FF calc(l + 10) a b)
lab(from hsl(180 100% 50%) calc(l - 10) a b)
```

### Values

Below are descriptions of the allowed values for both absolute and [relative colors](/en-US/docs/Web/CSS/CSS_colors/Relative_colors).

#### Absolute value syntax

```plain
lab(L a b[ / A])
```

The parameters are as follows:

- `L`
  - : A {{CSSXref("&lt;number&gt;")}} between `0` and `100`, a {{CSSXref("&lt;percentage&gt;")}} between `0%` and `100%`, or the keyword `none` (equivalent to `0%` in this case). This value specifies the color's lightness. Here the number `0` corresponds to `0%` (black) and the number `100` corresponds to `100%` (white).
- `a`
  - : A {{CSSXref("&lt;number&gt;")}} between `-125` and `125`, a {{CSSXref("&lt;percentage&gt;")}} between `-100%` and `100%`, or the keyword `none` (equivalent to `0%` in this case). This value specifies the color's distance along the `a` axis, which defines how green (moving towards `-125`) or red (moving towards `+125`) the color is. Note that these values are signed (allowing both positive and negative values) and theoretically unbounded, meaning that you can set values outside the `±125` (`±100%`) limits. In practice, values cannot exceed `±160`.
- `b`
  - : A {{CSSXref("&lt;number&gt;")}} between `-125` and `125`, a {{CSSXref("&lt;percentage&gt;")}} between `-100%` and `100%`, or the keyword `none` (equivalent to `0%` in this case). This value specifies the color's distance along the `b` axis, which defines how blue (moving towards `-125`) or yellow ( moving towards `+125`) the color is. Note that these values are signed (allowing both positive and negative values) and theoretically unbounded, meaning that you can set values outside the `±125` (`±100%`) limits. In practice, values cannot exceed `±160`.
- `A` {{optional_inline}}
  - : An {{CSSXref("&lt;alpha-value&gt;")}} representing the alpha channel value of the color, where the number `0` corresponds to `0%` (fully transparent) and `1` corresponds to `100%` (fully opaque). Additionally, the keyword `none` can be used to explicitly specify no alpha channel. If the `A` channel value is not explicitly specified, it defaults to 100%. If included, the value is preceded by a slash (`/`).

> [!NOTE]
> See [Missing color components](/en-US/docs/Web/CSS/color_value#missing_color_components) for more information on the effect of `none`.

#### Relative value syntax

```plain
lab(from <color> L a b[ / A])
```

The parameters are as follows:

- `from <color>`
  - : The keyword `from` is always included when defining a relative color, followed by a {{cssxref("&lt;color&gt;")}} value representing the **origin color**. This is the original color that the relative color is based on. The origin color can be _any_ valid {{cssxref("&lt;color&gt;")}} syntax, including another relative color.
- `L`
  - : A {{CSSXref("&lt;number&gt;")}} between `0` and `100`, a {{CSSXref("&lt;percentage&gt;")}} between `0%` and `100%`, or the keyword `none` (equivalent to `0%` in this case) This value represents the lightness of the output color. Here the number `0` corresponds to `0%` (black) and the number `100` corresponds to `100%` (white).
- `a`
  - : A {{CSSXref("&lt;number&gt;")}} between `-125` and `125`, a {{CSSXref("&lt;percentage&gt;")}} between `-100%` and `100%`, or the keyword `none` (equivalent to `0%` in this case). This value represents the output color's distance along the `a` axis, which defines how green (moving towards `-125`) or red (moving towards `+125`) the color is. Note that these values are signed (allowing both positive and negative values) and theoretically unbounded, meaning that you can set values outside the `±125` (`±100%`) limits. In practice, values cannot exceed `±160`.
- `b`
  - : A {{CSSXref("&lt;number&gt;")}} between `-125` and `125`, a {{CSSXref("&lt;percentage&gt;")}} between `-100%` and `100%`, or the keyword `none` (equivalent to `0%` in this case). This value represents the output color's distance along the `b` axis, which defines how blue (moving towards `-125`) or yellow (moving towards `+125`) the color is. Note that these values are signed (allowing both positive and negative values) and theoretically unbounded, meaning that you can set values outside the `±125` (`±100%`) limits. In practice, values cannot exceed `±160`.
- `A` {{optional_inline}}
  - : An {{CSSXref("&lt;alpha-value&gt;")}} representing the alpha channel value of the output color, where the number `0` corresponds to `0%` (fully transparent) and `1` corresponds to `100%` (fully opaque). Additionally, the keyword `none` can be used to explicitly specify no alpha channel. If the `A` channel value is not explicitly specified, it defaults to the alpha channel value of the origin color. If included, the value is preceded by a slash (`/`).

> [!NOTE]
> Usually when percentage values have a numeric equivalent in CSS, `100%` is equal to the number `1`. This is not always the case for LAB's lightness and `a` and `b` axes, as mentioned above. With `L`, the range is from 0 to 100, with `100%` equal to `100`. The `a` and `b` values support both negative and positive values, with `100%` being equal to `125` and `-100%` being equal to `-125`.

#### Defining relative color output channel components

When using relative color syntax inside a `lab()` function, the browser converts the origin color into an equivalent Lab color (if it is not already specified as such). The color is defined as three distinct color channel values — `l` (lightness), `a` (green/red axis), and `b` (blue/yellow axis) — plus an alpha channel value (`alpha`). These channel values are made available inside the function to be used when defining the output color channel values:

- The `l` channel value is resolved to a `<number>` between `0` and `100`, inclusive.
- The `a` and `b` channels are each resolved to a `<number>` between `-125` and `125`, inclusive.
- The `alpha` channel is resolved to a `<number>` between `0` and `1`, inclusive.

When defining a relative color, the different channels of the output color can be expressed in several different ways. Below, we'll study some examples to illustrate these.

In the first two examples below, we are using relative color syntax. However, the first one outputs the same color as the origin color and the second one outputs a color not based on the origin color at all. They don't really create relative colors! You'd be unlikely to ever use these in a real codebase, and would probably just use an absolute color value instead. We included these examples as a starting point for learning about relative `lab()` syntax.

Let's start with an origin color of `hsl(0 100% 50%)` (equivalent to `red`). The following function outputs the same color as the origin color — it uses the origin color's `l`, `a`, and `b` channel values (`54.29`, `80.8198`, and `69.8997`) as the output channel values:

```css
lab(from hsl(0 100% 50%) l a b)
```

This function's output color is `lab(54.29 80.8198 69.8997)`.

The next function uses absolute values for the output color's channel values, outputting a completely different color not based on the origin color:

```css
lab(from hsl(0 100% 50%) 29.692% 44.89% -29.034%)
```

In the above case, the output color is `lab(29.692 56.1125 -36.2925)`.

The following function creates a relative color based on the origin color:

```css
lab(from hsl(0 100% 50%) l -100 b)
```

This example:

- Converts the `hsl()` origin color to an equivalent `lab()` color — `lab(54.29 80.8198 69.8997)`.
- Sets the `l` and `b` channel values for the output color to those of the origin `lab()` equivalent's `L` and `b` channel values — those values are `54.29` and `69.8997`, respectively.
- Sets the output color's `a` channel value to a new value not based on the origin color: `-100`.

The final output color is `lab(54.29 -100 69.8997)`.

> [!NOTE]
> As mentioned above, if the output color is using a different color model to the origin color, the origin color is converted to the same model as the output color in the background so that it can be represented in a way that is compatible (i.e. using the same channels).

In the examples we've seen so far in this section, the alpha channels have not been explicitly specified for either the origin or output colors. When the output color alpha channel is not specified, it defaults to the same value as the origin color alpha channel. When the origin color alpha channel is not specified (and it is not a relative color), it defaults to `1`. Therefore, the origin and output alpha channel values are `1` for the above examples.

Let's look at some examples that specify origin and output alpha channel values. The first one specifies the output alpha channel value as being the same as the origin alpha channel value, whereas the second one specifies a different output alpha channel value, unrelated to the origin alpha channel value.

```css
lab(from hsl(0 100% 50% / 0.8) l a b / alpha)
/* Computed output color: lab(54.29 80.8198 69.8997 / 0.8) */

lab(from hsl(0 100% 50% / 0.8) l a b / 0.5)
/* Computed output color: lab(54.29 80.8198 69.8997 / 0.5) */
```

In the following example, the `hsl()` origin color is again converted to the `lab()` equivalent — `lab(54.29 80.8198 69.8997)`. {{cssxref("calc")}} calculations are applied to the `L`, `a`, `b`, and `A` values, resulting in an output color of `lab(74.29 60.8198 29.8997 / 0.9)`:

```css
lab(from hsl(0 100% 50%) calc(l + 20) calc(a - 20) calc(b - 40) / calc(alpha - 0.1))
```

> [!NOTE]
> Because the origin color channel values are resolved to `<number>` values, you have to add numbers to them when using them in calculations, even in cases where a channel would normally accept `<percentage>`, `<angle>`, or other value types. Adding a `<percentage>` to a `<number>`, for example, doesn't work.

## Formal syntax

{{CSSSyntax}}

## Examples

### Adjusting lightness

The following example shows the effect of varying the lightness value of the `lab()` function.

#### HTML

```html
<div data-color="red-dark"></div>
<div data-color="red"></div>
<div data-color="red-light"></div>

<div data-color="green-dark"></div>
<div data-color="green"></div>
<div data-color="green-light"></div>

<div data-color="blue-dark"></div>
<div data-color="blue"></div>
<div data-color="blue-light"></div>
```

#### CSS

```css hidden
body {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
div {
  height: 50px;
  flex: 0 0 28%;
  border: 1px solid black;
}
```

```css
[data-color="red-dark"] {
  background-color: lab(5 125 71);
}
[data-color="red"] {
  background-color: lab(40 125 71);
}
[data-color="red-light"] {
  background-color: lab(95 125 71);
}

[data-color="green-dark"] {
  background-color: lab(10% -120 125);
}
[data-color="green"] {
  background-color: lab(50% -120 125);
}
[data-color="green-light"] {
  background-color: lab(90% -120 125);
}

[data-color="blue-dark"] {
  background-color: lab(10 -120 -120);
}
[data-color="blue"] {
  background-color: lab(50 -120 -120);
}
[data-color="blue-light"] {
  background-color: lab(90 -120 -120);
}
```

#### Result

{{EmbedLiveSample("Adjusting_lightness", "", "200")}}

### Adjusting color axes

This example demonstrates the effects of setting the `a` and `b` values of the `lab()` function to the ends and midpoints of the a-axis, which goes from green (-125) to red (125) and the b-axis, which goes from yellow (-125) to blue (125).

#### HTML

```html
<div data-color="red-yellow"></div>
<div data-color="red-zero"></div>
<div data-color="red-blue"></div>

<div data-color="zero-yellow"></div>
<div data-color="zero-zero"></div>
<div data-color="zero-blue"></div>

<div data-color="green-yellow"></div>
<div data-color="green-zero"></div>
<div data-color="green-blue"></div>
```

#### CSS

Using the CSS {{cssxref("background-color")}} property, we vary the `a` and `b` values of the `lab()` color function along the a-axis and b-axis, showing the effects of maximum, midpoint, and minimum values in each case.

```css hidden
body {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
}
div {
  height: 50px;
  flex: 0 0 28%;
  border: 1px solid black;
}
```

```css
/* a-axis max, variable b-axis */
[data-color="red-yellow"] {
  background-color: lab(50 125 125);
}
[data-color="red-zero"] {
  background-color: lab(50 125 0);
}
[data-color="red-blue"] {
  background-color: lab(50 125 -125);
}

/* a-axis center, variable b-axis */
[data-color="zero-yellow"] {
  background-color: lab(50 0 125);
}
[data-color="zero-zero"] {
  background-color: lab(50 0 0);
}
[data-color="zero-blue"] {
  background-color: lab(50 0 -125);
}

/* a-axis min, variable b-axis */
[data-color="green-yellow"] {
  background-color: lab(50 -125 125);
}
[data-color="green-zero"] {
  background-color: lab(50 -125 0);
}
[data-color="green-blue"] {
  background-color: lab(50 -125 -125);
}
```

#### Result

{{EmbedLiveSample("Adjusting_color_axes", "", "200")}}

The left column is at the yellow end (-125) of the b-axis and the right column is at the blue end (125). The top row displays colors at the red end of the a-axis (-125) and the bottom row is at the green end (125). The middle column and row are at the midpoints (0) of each axis, with the middle cell being grey; it contains no red, green, yellow, or blue, with a `0` value for both axes.

### Linear gradients along the a-axis and b-axis

This example includes linear gradients to demonstrate the progression of values of the `lab()` function along the a-axis (from red to green) and along the b-axis (from yellow to blue). In each gradient image, one axis remains static while the other axis progresses from the low end to the high end of the axis values.

```html hidden
<div data-color="red-to-green-yellow">
  <span>red</span><span>`b`= -125 (yellow)</span><span>green</span>
</div>
<div data-color="red-to-green-zero">
  <span>red</span><span>no yellow or blue</span><span>green</span>
</div>
<div data-color="red-to-green-blue">
  <span>red</span><span>`b`= 125 (blue)</span><span>green</span>
</div>

<div data-color="yellow-to-blue-red">
  <span>yellow</span><span>`a` = -125 (red)</span><span>blue</span>
</div>
<div data-color="yellow-to-blue-zero">
  <span>yellow</span><span>no red or green</span><span>blue</span>
</div>
<div data-color="yellow-to-blue-green">
  <span>yellow</span><span>`a` = 125 (green)</span><span>blue</span>
</div>
```

#### CSS

```css hidden
div {
  height: 50px;
  padding: 5px;
  margin: 5px;
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
span {
  background-color: #ffffffcc;
  padding: 3px;
}
```

```css-nolint
/* a-axis gradients */
[data-color="red-to-green-yellow"] {
  background-image: linear-gradient(to right, lab(50 125 125), lab(50 -125 125));
}
[data-color="red-to-green-zero"] {
  background-image: linear-gradient(to right, lab(50 125 0), lab(50 -125 0));
}
[data-color="red-to-green-blue"] {
  background-image: linear-gradient(to right, lab(50 125 -125), lab(50 -125 -125));
}

/* b-axis gradients */
[data-color="yellow-to-blue-red"] {
  background-image: linear-gradient(to right, lab(50 125 125), lab(50 125 -125));
}
[data-color="yellow-to-blue-zero"] {
  background-image: linear-gradient(to right, lab(50 0 125), lab(50 0 -125));
}
[data-color="yellow-to-blue-green"] {
  background-image: linear-gradient(to right, lab(50 -125 125),lab(50 -125 -125));
}
```

#### Result

{{EmbedLiveSample("Linear gradients along the a-axis and b-axis", '', '420')}}

### Adjusting opacity

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
  background-color: lab(80 125 125);
}
[data-color="red-alpha"] {
  background-color: lab(80 125 125 / 0.4);
}
```

#### Result

{{EmbedLiveSample('Adjusting_opacity')}}

### Using relative colors with lab()

This example styles three {{htmlelement("div")}} elements with different background colors. The middle one is given the unmodified `--base-color`, while the left and right ones are given lightened and darkened variants of that `--base-color`.

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
  /* equivalent of lab(75 24 79) */
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

{{ EmbedLiveSample("Using relative colors with lab", "100%", "200") }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`<color>`](/en-US/docs/Web/CSS/color_value) data type
- [`<color-function>`](/en-US/docs/Web/CSS/CSS_colors#functions) data type
- [Using relative colors](/en-US/docs/Web/CSS/CSS_colors/Relative_colors)
- [CSS colors](/en-US/docs/Web/CSS/CSS_colors) module
- [LCH colors in CSS: what, why, and how?](https://lea.verou.me/blog/2020/04/lch-colors-in-css-what-why-and-how/) by Lea Verou (2020)
- [Safari Technology Preview 122 release notes](https://webkit.org/blog/11577/release-notes-for-safari-technology-preview-122/): includes `lab()` and {{cssxref("color_value/lch",'lch()')}} colors
