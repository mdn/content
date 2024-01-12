---
title: rgb()
slug: Web/CSS/color_value/rgb
page-type: css-function
browser-compat: css.types.color.rgb
---

{{CSSRef}}

The **`rgb()`** functional notation expresses a color according to its red, green, and blue components. An optional alpha component represents the color's transparency.

> **Note:** The legacy `rgba()` syntax is an alias for `rgb()`, accepting the same parameters and behaving in the same way.

{{EmbedInteractiveExample("pages/css/function-rgb.html")}}

## Syntax

```css
/* Absolute values */

rgb(255 255 255)
rgb(255 255 255 / 50%)

/* Relative values */

/* Change the r g b channel values to absolute values to transform red to blue */
rgb(from red 0 0 255)
/* Add a semi-transparent alpha channel to green */
rgb(from green r g b / 0.5)
/* Create a lighter blue variant by setting the output r and g channel */
/* values to the origin color's r and g values plus 40 */
rgb(from blue calc(r + 40) calc(g + 40) b)
```

The absolute syntax can also be written in a legacy form in which all values are separated with commas.

### Values

Below we have provided descriptions of the allowed values for both absolute and relative colors.

> **Note:** Absolute and relative functional notation serializes to sRGB values, and the values of the red, green, blue components may be rounded in serialization.

> **Note:** See [Missing color components](/en-US/docs/Web/CSS/color_value#missing_color_components) for the effect of `none`.

#### Absolute values

Functional notation of absolute values: `rgb(R G B[ / A])`

- `R`, `G`, `B`
  - : Each value can be represented as a {{CSSXref("&lt;number&gt;")}} between `0` and `255`, a {{CSSXref("&lt;percentage&gt;")}} between `0%` and `100%`, or the keyword `none`. These values represent the red, green, and blue channels, respectively.
- `A` {{optional_inline}}
  - : An {{CSSXref("&lt;alpha-value&gt;")}} or the keyword `none`, where the number `1` corresponds to `100%` (full opacity).

#### Relative values

Functional notation of relative values: `rgb(from color red green blue[ / alpha])`

- `from`
  - : The keyword `from` is always included when defining a relative color.
- `color`
  - : A {{cssxref("&lt;color&gt;")}} value representing the **origin color** that the relative color is based on. Note that this can be _any_ valid {{cssxref("&lt;color&gt;")}} syntax, including another relative color.
- `red`, `green`, `blue`
  - : Each value can be represented as a {{CSSXref("&lt;number&gt;")}} between `0` and `255`, a {{CSSXref("&lt;percentage&gt;")}} between `0%` and `100%`, or the keyword `none`. These values represent the red, green, and blue channel values of the output color, respectively.
- `alpha` {{optional_inline}}
  - : An {{CSSXref("&lt;alpha-value&gt;")}} or the keyword `none`, where the number `1` corresponds to `100%` (full opacity). This represents the alpha channel value of the output color. If the `alpha` channel value is not explicitly specified, it defaults to the alpha channel value of the origin color.

#### Defining relative color output channel components

The browser destructures the origin color into `rgb()` component values that are made available inside the function as `r` (red), `g` (green), `b` (blue), and `alpha`. These can be used in defining the output color channel values if desired, and take the following values:

- The `r`, `g` and `b` values are resolved to `<number>`s between 0 and 255 that represent the origin color's red, green, and blue values.
- The `alpha` channel is resolved to a `<number>` between 0 and 1 that represents the origin color's alpha value.

When defining a relative color, the different channels of the output color can be expressed in several different ways.

For example, let's start with an origin color of `hsl(0 100% 50%)` (equivalent to `red`). The following function outputs the same color as the origin color — it uses the origin color's `r`, `g`, and `b` channel values as the output channel values:

```css
rgb(from hsl(0 100% 50%) r g b)
```

> **Note:** If the output color is using a different color model to the origin color, the origin color is converted to the same model as the output color in the background so that it can be represented in a way that is compatible (i.e. using the same channels).

This function uses absolute values for the output color's channel values, outputting a completely different color not based on the origin color:

```css
rgb(from hsl(0 100% 50%) 132 132 224)
```

The following function uses the origin color's channel values inside {{cssxref("calc")}} functions to calculate new channel values for the output color:

```css
rgb(from hsl(0 100% 50%) calc(r/2) calc(g + 25) calc(b + 175) / calc(alpha - 0.1))
```

### Formal syntax

{{csssyntax}}

## Examples

### Using relative colors with rgb()

The below example styles three {{htmlelement("div")}} elements with different background colors. The left-hand one is given the unmodified `--base-color`, while the middle and right ones are given variants of that `--base-color` that successively remove more from the red channel and add more to the blue channel.

These variants are defined using relative colors — the `--base-color` [custom property](/en-US/docs/Web/CSS/--*) is passed into an `rgb()` function, and the output color has its red and blue channels modified to achieve the desired effect via `calc()` functions, while the green channel is left unchanged.

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
  background-color: var(--base-color);
}

#two {
  /* As per the spec, - and + 30% should be specified roughly like this
  background-color: rgb(from var(--base-color) calc(r - 75) g calc(b + 75));

  /* In Chrome 121+, r, g, and b channel values incorrectly resolve to numbers
     between 0-1 rather than 0-255, hence + and - 30% currently being specified
     like this */
  background-color: rgb(from var(--base-color) calc(r - 0.3) g calc(b + 0.3));
}

#three {
  /* As per the spec, - and + 60% should be specified roughly like this
  background-color: rgb(from var(--base-color) calc(r - 150) g calc(b + 150));

  /* In Chrome 121+, r, g, and b channel values incorrectly resolve to numbers
     between 0-1 rather than 0-255, hence + and - 60% currently being specified
     like this */
  background-color: rgb(from var(--base-color) calc(r - 0.6) g calc(b + 0.6));
}

/* Use @supports to add in support for Safari 16.4+, which supports old
   syntax that requires r g b values to be specified as percentages (with
   units) in calculations */
@supports (color: rgb(from red r g calc(b + 30%))) {
  #two {
    background-color: rgb(from var(--base-color) calc(r - 30%) g calc(b + 30%));
  }

  #three {
    background-color: rgb(from var(--base-color) calc(r - 60%) g calc(b + 60%));
  }
}
```

#### Result

The output is as follows:

{{ EmbedLiveSample("Using relative colors with rgb()", "100%", "200") }}

### Legacy syntax: comma-separated values

For legacy reasons, the `rgb()` function accepts a form in which all values are separated using commas.

#### HTML

```html
<div class="space-separated"></div>
<div class="comma-separated"></div>
```

#### CSS

```css
div {
  width: 100px;
  height: 50px;
  margin: 1rem;
}

div.space-separated {
  background-color: rgb(255 0 0 / 50%);
}

div.comma-separated {
  background-color: rgb(255, 0, 0, 0.5);
}
```

#### Result

{{EmbedLiveSample('Legacy syntax: comma-separated values', '100%', '150px')}}

### Legacy syntax: rgba()

The legacy `rgba()` syntax is an alias for `rgb()`.

#### HTML

```html
<div class="rgb"></div>
<div class="rgba"></div>
```

#### CSS

```css
div {
  width: 100px;
  height: 50px;
  margin: 1rem;
}

div.rgb {
  background-color: rgb(255 0 0 / 50%);
}

div.rgba {
  background-color: rgba(255 0 0 / 0.5);
}
```

#### Result

{{EmbedLiveSample('Legacy syntax: rgba()', '100%', '150px')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{CSSXref("&lt;color&gt;")}} data type for a list of all color notations
- [Using relative colors](/en-US/docs/Web/CSS/CSS_colors/Relative_colors)
