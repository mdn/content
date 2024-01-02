---
title: hsl()
slug: Web/CSS/color_value/hsl
page-type: css-function
browser-compat: css.types.color.hsl
---

{{CSSRef}}

The **`hsl()`** functional notation expresses an {{glossary("RGB", "sRGB")}} color according to its _hue_, _saturation_, and _lightness_ components. An optional _alpha_ component represents the color's transparency.

> **Note:** The legacy `hsla()` syntax is an alias for `hsl()`, accepting the same parameters and behaving in the same way.

{{EmbedInteractiveExample("pages/css/function-hsl.html")}}

Defining _complementary colors_ with `hsl()` can be done with a single formula, as they are positioned on the same diameter of the {{glossary("color wheel")}}. If `θ` is the hue angle of a color, its complementary one will have `180deg - θ` as its hue angle.

## Syntax

```css
/* Absolute values */

hsl(120deg 75% 25%)
hsl(120 75% 25%) /* deg unit is optional */
hsl(120deg 75% 25% / 60%)
hsl(none 75% 25%)

/* Relative values */

/* Change the hue value to 240 degrees to transform red to blue */
hsl(from red 240deg s l)
/* Add a semi-transparent alpha channel to green */
hsl(from green h s l / 0.5)
/* Create a lighter blue variant by setting the output lightness */
/* to the originating color's lightness channel value plus 0.6 */
hsl(from blue h s calc(l + 0.2)) /* Chromiums */
hsl(from blue h s calc(l + 20%)) /* Safari */

The function also accepts a legacy syntax in which all values are separated with commas.

## Values

Below we have provided descriptions of the allowed values for both absolute and relative colors.

> **Note:** Absolute and relative functional notation serializes to sRGB values, and the values of the red, green, blue components may be rounded in serialization.

### Absolute values

Functional notation of absolute values: `hsl(H S L[ / A])`

- `H`
  - : A {{CSSXref("&lt;number&gt;")}}, an {{CSSXref("&lt;angle&gt;")}}, or the keyword `none`, which represents the hue angle. More details on this type can be found on the {{CSSXref("&lt;hue&gt;")}} reference page.
- `S`
  - : A {{CSSXref("&lt;percentage&gt;")}} or the keyword `none`, which represents saturation. Here `100%` is completely saturated, while `0%` is completely unsaturated (gray).
- `L`
  - : A {{CSSXref("&lt;percentage&gt;")}} or the keyword `none`, which represents lightness. Here `100%` is white, `0%` is black, and `50%` is "normal".
- `A` {{optional_inline}}
  - : An {{CSSXref("&lt;alpha-value&gt;")}} or the keyword `none`, where the number `1` corresponds to `100%` (full opacity).

### Relative values

Functional notation of relative values: `hsl(from color hue saturation lightness[ / alpha])`

- `from`
  - : The keyword `from` is always included when defining a relative color.
- `color`
  - : A {{cssxref("&lt;color&gt;")}} value representing the **originating color** that the relative color is based on. Note that this can be _any_ valid {{cssxref("&lt;color&gt;")}} syntax, including another relative color.
- `hue`
  - : A {{CSSXref("&lt;number&gt;")}}, an {{CSSXref("&lt;angle&gt;")}}, or the keyword `none`, which represents the hue angle of the output color.
- `saturation`
  - : A {{CSSXref("&lt;percentage&gt;")}} or the keyword `none`, which represents the saturation of the output color. Here `100%` is completely saturated, while `0%` is completely unsaturated (gray).
- `lightness`
  - : A {{CSSXref("&lt;percentage&gt;")}} or the keyword `none`, which represents the lightness of the output color. Here `100%` is white, `0%` is black, and `50%` is "normal".
- `alpha` {{optional_inline}}
  - : An {{CSSXref("&lt;alpha-value&gt;")}} or the keyword `none`, where the number `1` corresponds to `100%` (full opacity). This represents the alpha channel value of the output color.

### `none` values

In color syntax, setting `none` is equivalent to setting a value of `0` with an appropriate unit for the channel — it is equivalent to `0deg` for hue, `0%` for saturation, and `0%` for lightness. The alpha channel works slightly differently — setting `none` for the alpha value equates to a value of `none`, meaning no alpha channel.

> **Note:** See [Missing color components](/en-US/docs/Web/CSS/color_value#missing_color_components) for more details on the effect of `none`.

### Defining relative color output channel components

When defining a relative color, the diffferent channels of the output color can be expressed in several different ways.

The browser destructures the originating color into its component channels and makes these values available inside the function as `h` (hue), `s` (saturation), `l` (lightness), and `alpha`. These can be used in defining the output color channel values if desired.

For example, let's start with an originating color of `rgb(255 0 0)` (equivalent to `red`). The following function outputs the same color as the originating color — it uses exactly the same channel values:

```css
hsl(from rgb(255 0 0) h s l)
```

This function uses absolute values for the output color's channel values, outputting a completely different color not based on the originating color:

```css
hsl(from rgb(255 0 0) 240 60 70)
```

The following function use some of the originating color's channel values inside {{cssxref("calc()")}} functions to calculate new channel values for the output color:

```css
hsl(from rgb(255 0 0) calc(h + 60) calc(s - 0.2) calc(l - 0.1)) /* Chrome */
hsl(from rgb(255 0 0) calc(h + 60deg) calc(s - 20%) calc(l - 10%)) /* Safari */
```

> **Note:** When expressing absolute percentage values, e.g. for the `s` and `l` channels, you can express them as whole numbers or percentages (e.g. `60` or `60%` will represent "sixty percent"). However,

> **Note:** See [Using relative colors](/en-US/docs/Web/CSS/CSS_colors/Relative_colors) for a detailed guide to relative colors and their use cases, with more detailed examples than the ones available on this page.

### Browser support differences

There are currently some syntax differences between browsers for `hsl()`, which warrant some explanation. Chrome supports unitless values for percentages, and other browsers don't. It is therefore advised to specify the units:

```css
hsl(60deg 40% 70%) /* Works in all browsers */
hsl(60deg 40 70) /* Only works in Chromiums */

hsl(from rgb(255 0 0) 60deg 40% 70%) /* Works in Chromiums and Safari */
hsl(from rgb(255 0 0) 60 40 70) /* Works only in Chromiums */
```

In relative color syntax, there are additional quirks to be aware of when performing calculations using mathematical expressions:

- Chrome requires you explicitly to not include units on any values, i.e. `deg` or `%`.
- When expressing relative percentage values based on the originating color's channel values, you need to express the modifiers as percentages in Safari, but decimal equivalents in Chrome.

Therefore, at the time of writing, cross-browser support for relative colors involving math functions requires a different property per rendering engine:

```css
/* Chromiums */
background-color: hsl(
  from rgb(255 0 0) calc(h + 60) calc(s - 0.2) calc(l - 0.1)
);

/* Safari */
background-color: hsl(
  from rgb(255 0 0) calc(h + 60deg) calc(s - 20%) calc(l - 10%)
);
```

### Formal syntax

{{csssyntax}}

## Examples

### Using hsl() with conic-gradient()

The `hsl()` function works well with [`conic-gradient()`](/en-US/docs/Web/CSS/gradient/conic-gradient) as both deal with angles.

```html hidden
<div></div>
```

#### CSS

```css
div {
  width: 100px;
  height: 100px;
  background: conic-gradient(
    hsl(360 100% 50%),
    hsl(315 100% 50%),
    hsl(270 100% 50%),
    hsl(225 100% 50%),
    hsl(180 100% 50%),
    hsl(135 100% 50%),
    hsl(90 100% 50%),
    hsl(45 100% 50%),
    hsl(0 100% 50%)
  );
  clip-path: circle(closest-side);
}
```

#### Result

{{EmbedLiveSample("using_hsl_with_conic-gradient", "100%", 140)}}

### Using relative colors with hsl()

The below example styles three {{htmlelement("div")}} elements with different background colors. The middle one is given the unmodified `--base-color`, while the left and right ones are given lightened and darkened variants of that `--base-color`.

These variants are defined using relative colors — the `--base-color` [custom property](/en-US/docs/Web/CSS/--*) is passed into an `hsl()` function, and the output color has its lightness channel modified to achieve the desired effect via a `calc()` function, while the hue and saturation are left unchanged. The lightened color has 20% added to the lightness channel, and the darkened color has 20% subtracted from it.

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
  /* Chromiums */
  background-color: hsl(from var(--base-color) h s calc(l + 0.2));

  /* Safari */
  background-color: hsl(from var(--base-color) h s calc(l + 20%));
}

#two {
  background-color: var(--base-color);
}

#three {
  /* Chromiums */
  background-color: hsl(from var(--base-color) h s calc(l - 0.2));

  /* Safari */
  background-color: hsl(from var(--base-color) h s calc(l - 20%));
}
```

#### Result

The output is as follows:

{{ EmbedLiveSample("Using relative colors with hsl()", "100%", "200") }}

### Legacy syntax: comma-separated values

For legacy reasons, the `hsl()` function accepts a form in which all values are separated using commas.

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
  background-color: hsl(0 100% 50% / 50%);
}

div.comma-separated {
  background-color: hsl(0, 100%, 50%, 0.5);
}
```

#### Result

{{EmbedLiveSample("legacy_syntax_comma-separated_values", "100%", 150)}}

### Legacy syntax: hsla()

The legacy `hsla()` syntax is an alias for `hsl()`.

#### HTML

```html
<div class="hsl"></div>
<div class="hsla"></div>
```

#### CSS

```css
div {
  width: 100px;
  height: 50px;
  margin: 1rem;
}

div.hsl {
  background-color: hsl(0 100% 50% / 50%);
}

div.hsla {
  background-color: hsla(0, 100%, 50%, 0.5);
}
```

#### Result

{{EmbedLiveSample("legacy_syntax_hsla", "100%", 150)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [List of all color notations](/en-US/docs/Web/CSS/color)
- {{CSSXref("&lt;hue&gt;")}} data type
- [Color picker tool](/en-US/docs/Web/CSS/CSS_colors/Color_picker_tool) on MDN
- [Color picker](https://colorjs.io/apps/picker/) by Lea Verou
