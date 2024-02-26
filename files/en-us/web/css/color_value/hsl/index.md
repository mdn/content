---
title: hsl()
slug: Web/CSS/color_value/hsl
page-type: css-function
browser-compat: css.types.color.hsl
spec-urls:
  - https://drafts.csswg.org/css-color-5/#relative-HSL
  - https://drafts.csswg.org/css-color/#the-hsl-notation
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

hsl(from green h s l / 0.5)
hsl(from #0000FF h s calc(l + 20))
hsl(from rgb(200 0 0) calc(h + 30) s calc(l + 30))
```

The absolute values can also be written in a legacy form in which all values are separated with commas.

### Values

Below are descriptions of the allowed values for both absolute and [relative colors](/en-US/docs/Web/CSS/CSS_colors/Relative_colors).

> **Note:** Absolute and relative functional notation serializes to sRGB values, and the values of the red, green, blue components may be rounded in serialization.

#### Absolute value syntax

```text
hsl(H S L[ / A])
```

The parameters are as follows:

- `H`
  - : A {{CSSXref("&lt;number&gt;")}}, an {{CSSXref("&lt;angle&gt;")}}, or the keyword `none` (equivalent to `0deg` in this case). This value represents the hue angle. More details on this type can be found on the {{CSSXref("&lt;hue&gt;")}} reference page.
- `S`
  - : A {{CSSXref("&lt;percentage&gt;")}} or the keyword `none` (equivalent to `0%` in this case). This value represents the color's saturation. Here `100%` is completely saturated, while `0%` is completely unsaturated (gray).
- `L`
  - : A {{CSSXref("&lt;percentage&gt;")}} or the keyword `none` (equivalent to `0%` in this case). This value represents the color's lightness. Here `100%` is white, `0%` is black, and `50%` is "normal".
- `A` {{optional_inline}}
  - : An {{CSSXref("&lt;alpha-value&gt;")}} where the number `1` corresponds to `100%` (full opacity), or the keyword `none` to explicitly specify no alpha channel. If the `alpha` channel value is not explicitly specified, it defaults to 100%. If included, the value is preceded by a slash (`/`).

> **Note:** See [Missing color components](/en-US/docs/Web/CSS/color_value#missing_color_components) for more information on the effect of `none`.

#### Relative value syntax

````text
hsl(from <color> H S L[ / A])
```text

The parameters are as follows:

- `from <color>`
  - : The keyword `from` is always included when defining a relative color, followed by a {{cssxref("&lt;color&gt;")}} value representing the **origin color**. This is the original color that the relative color is based on. Note that the origin color can be _any_ valid {{cssxref("&lt;color&gt;")}} syntax, including another relative color.
- `H`
  - : A {{CSSXref("&lt;number&gt;")}}, an {{CSSXref("&lt;angle&gt;")}}, or the keyword `none` (equivalent to `0deg` in this case). This represents the hue angle of the output color.
- `S`
  - : A {{CSSXref("&lt;percentage&gt;")}} or the keyword `none` (equivalent to `0%` in this case). This represents the saturation of the output color. Here `100%` is completely saturated, while `0%` is completely unsaturated (gray).
- `L`
  - : A {{CSSXref("&lt;percentage&gt;")}} or the keyword `none` (equivalent to `0%` in this case). This represents the lightness of the output color. Here `100%` is white, `0%` is black, and `50%` is "normal".
- `A` {{optional_inline}}
  - : An {{CSSXref("&lt;alpha-value&gt;")}} where the number `1` corresponds to `100%` (full opacity), or the keyword `none` to explicitly specify no alpha channel. This represents the alpha channel value of the output color. If the `A` channel value is not explicitly specified, it defaults to the alpha channel value of the origin color. If included, the value is preceded by a slash (`/`).

#### Defining relative color output channel components

When using relative color syntax inside an `hsl()` function, the browser converts the origin color into an equivalent HSL color (if it is not already specified as such) The color is defined as three distinct color channel values — `h` (hue), `s` (saturation), and `l` (lightness) — plus an alpha channel value (`alpha`). These channel values are made available inside the function to be used when defining the output color channel values:

- The `h` value is resolved to a {{cssxref("&lt;number&gt;")}} between 0 and 360 that represents the origin color's {{cssxref("&lt;hue&gt;")}} degree value.
- The `s` and `l` values are each resolved to a `<number>` between 0 and 100.
- The `alpha` value is resolved to a `<number>` between 0 and 1.

When defining a relative color, the different channels of the output color can be expressed in several different ways. Below, we'll study some examples to illustrate these.

It is important to bear in mind that, in the first two examples below, we are using relative color syntax. However, the first one outputs the same color as the origin color and the second one outputs a color not based on the origin color at all. They don't really create relative colors! You'd be unlikely to ever use these in a real codebase, and would probably just use an absolute color value instead. We included these examples as a starting point for learning about relative color syntax.

Let's start with an origin color of `rgb(255 0 0)` (equivalent to `red`). The following function outputs the same color as the origin color — it uses the origin color's `h`, `s`, and `l` channel values as the output channel values:

```css
hsl(from rgb(255 0 0) h s l)
````

> **Note:** As mentioned above, if the output color is using a different color model to the origin color, the origin color is converted to the same model as the output color in the background so that it can be represented in a way that is compatible (i.e. using the same channels). For example, in the above case the {{cssxref("color_value/rgb", "rgb()")}} color `rgb(255 0 0)` is converted to `hsl(0 100 50)`.

This function uses absolute values for the output color's channel values, outputting a completely different color not based on the origin color:

```css
hsl(from rgb(255 0 0) 240 60% 70%)
```

The following function uses the origin color's `h` channel value for the output color's `h` channel value, but uses new values for output color's `s` and `l` channel values, creating a relative color based on the origin color:

```css
hsl(from rgb(255 0 0) h 30% 60%)
```

The following example uses {{cssxref("calc")}} functions to calculate new channel values for the output color that are relative to the origin color channel values:

```css
hsl(from rgb(255 0 0 / 0.8) calc(h + 60) calc(s - 20) calc(l - 10) / calc(alpha - 0.1))
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
  /* As per the spec, l + 20% should be specified like this
  background-color: hsl(from var(--base-color) h s calc(l + 20)); */

  /* In Chrome 121+, s and l channel values incorrectly resolve to numbers between 0-1
     rather than 0-100, hence l + 20% currently being specified like this */
  background-color: hsl(from var(--base-color) h s calc(l + 0.2));
}

#two {
  background-color: var(--base-color);
}

#three {
  /* As per the spec, l - 20% should be specified like this
  background-color: hsl(from var(--base-color) h s calc(l - 20)); */

  /* In Chrome 121+, s and l channel values incorrectly resolve to numbers between 0-1
     rather than 0-100, hence l - 20% currently being specified like this */
  background-color: hsl(from var(--base-color) h s calc(l - 0.2));
}

/* Use @supports to add in support for Safari 16.4+, which supports old
   syntax that requires % units to be specified in lightness calculations */
@supports (color: hsl(from red h s calc(l - 20%))) {
  #one {
    background-color: hsl(from var(--base-color) h s calc(l + 20%));
  }

  #three {
    background-color: hsl(from var(--base-color) h s calc(l - 20%));
  }
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
- [Using relative colors](/en-US/docs/Web/CSS/CSS_colors/Relative_colors)
- [Color picker tool](/en-US/docs/Web/CSS/CSS_colors/Color_picker_tool) on MDN
- [Color picker](https://colorjs.io/apps/picker/) by Lea Verou
