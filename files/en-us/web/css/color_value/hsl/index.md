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

> [!NOTE]
> The `hsla()` functional notation is an alias for `hsl()`. They are exactly equivalent. It is recommended to use `hsl()`.

The **`hsl()`** functional notation expresses a color in the {{glossary("RGB", "sRGB")}} {{glossary("color space")}} according to its _hue_, _saturation_, and _lightness_ components. An optional _alpha_ component represents the color's transparency.

{{EmbedInteractiveExample("pages/css/function-hsl.html")}}

Defining _complementary colors_ with `hsl()` can be done by adding or subtracting 180 degrees from the hue value, as they are positioned on the same diameter of the {{glossary("color wheel")}}. For example, if the hue angle of a color is `10deg`, its complementary has `190deg` as its hue angle.

## Syntax

```css
/* Absolute values */
hsl(120deg 75% 25%)
hsl(120 75 25) /* deg and % units are optional */
hsl(120deg 75% 25% / 60%)
hsl(none 75% 25%)

/* Relative values */
hsl(from green h s l / 0.5)
hsl(from #0000FF h s calc(l + 20))
hsl(from rgb(200 0 0) calc(h + 30) s calc(l + 30))

/* Legacy 'hsla()' alias */
hsla(120deg 75% 25% / 60%)

/* Legacy format */
hsl(120, 75%, 25%)
hsl(120deg, 75%, 25%, 0.8)
```

> **Note:** `hsl()`/`hsla()` can also be written in a legacy form in which all values are separated with commas, for example `hsl(120, 75%, 25%)` or `hsla(120deg, 75%, 25%, 0.8)`. The `none` value is not permitted in the comma-separated legacy syntax, the `deg` on the hue value is optional, and the `%` units are required for the saturation and lightness values.

### Values

Below are descriptions of the allowed values for both absolute and [relative colors](/en-US/docs/Web/CSS/CSS_colors/Relative_colors).

#### Absolute value syntax

```plain
hsl(H S L[ / A])
```

The parameters are as follows:

- `H`

  - : A {{CSSXref("&lt;number&gt;")}}, an {{CSSXref("&lt;angle&gt;")}}, or the keyword `none` (equivalent to `0deg` in this case) representing the color's {{CSSXref("&lt;hue&gt;")}} angle.

    > [!NOTE]
    > The angles corresponding to particular hues differ across the sRGB (used by `hsl()` and {{CSSXref("color_value/hwb", "hwb()")}}), CIELAB (used by {{CSSXref("color_value/lch", "lch()")}}), and Oklab (used by {{CSSXref("color_value/oklch", "oklch()")}}) color spaces. See the {{CSSXref("&lt;hue&gt;")}} reference page for more detail and examples.

- `S`
  - : A {{CSSXref("&lt;percentage&gt;")}} or the keyword `none` (equivalent to `0%` in this case). This value represents the color's saturation. Here `100%` is completely saturated, while `0%` is completely unsaturated (gray).
- `L`
  - : A {{CSSXref("&lt;percentage&gt;")}} or the keyword `none` (equivalent to `0%` in this case). This value represents the color's lightness. Here `100%` is white, `0%` is black, and `50%` is "normal".
- `A` {{optional_inline}}
  - : An {{CSSXref("&lt;alpha-value&gt;")}} representing the alpha channel value of the color, where the number `0` corresponds to `0%` (fully transparent) and `1` corresponds to `100%` (fully opaque). Additionally, the keyword `none` can be used to explicitly specify no alpha channel. If the `A` channel value is not explicitly specified, it defaults to 100%. If included, the value is preceded by a slash (`/`).

> [!NOTE]
> See [Missing color components](/en-US/docs/Web/CSS/color_value#missing_color_components) for more information on the effect of `none`.

> [!NOTE]
> Absolute `hsl()` colors are serialized to {{CSSXref("color_value/rgb", "rgb()")}} values. The values of the red, green, and blue components may be rounded in serialization.

#### Relative value syntax

```plain
hsl(from <color> H S L[ / A])
```

The parameters are as follows:

- `from <color>`
  - : The keyword `from` is always included when defining a relative color, followed by a {{cssxref("&lt;color&gt;")}} value representing the **origin color**. This is the original color that the relative color is based on. The origin color can be _any_ valid {{cssxref("&lt;color&gt;")}} syntax, including another relative color.
- `H`
  - : A {{CSSXref("&lt;number&gt;")}}, an {{CSSXref("&lt;angle&gt;")}}, or the keyword `none` (equivalent to `0deg` in this case) representing the output color's {{CSSXref("&lt;hue&gt;")}} angle.
- `S`
  - : A {{CSSXref("&lt;percentage&gt;")}} or the keyword `none` (equivalent to `0%` in this case). This represents the saturation of the output color. Here `100%` is completely saturated, while `0%` is completely unsaturated (gray).
- `L`
  - : A {{CSSXref("&lt;percentage&gt;")}} or the keyword `none` (equivalent to `0%` in this case). This represents the lightness of the output color. Here `100%` is white, `0%` is black, and `50%` is "normal".
- `A` {{optional_inline}}
  - : An {{CSSXref("&lt;alpha-value&gt;")}} representing the alpha channel value of the output color, where the number `0` corresponds to `0%` (fully transparent) and `1` corresponds to `100%` (fully opaque). Additionally, the keyword `none` can be used to explicitly specify no alpha channel. If the `A` channel value is not explicitly specified, it defaults to the alpha channel value of the origin color. If included, the value is preceded by a slash (`/`).

> [!NOTE]
> To fully enable the representation of the full spectrum of visible colors, the output of relative `hsl()` color functions is serialized to `color(srgb)`. That means that querying the output color value via the {{DOMxRef("HTMLElement.style")}} property or the {{DOMxRef("CSSStyleDeclaration.getPropertyValue()")}} method returns the output color as a [`color(srgb ...)`](/en-US/docs/Web/CSS/color_value/color) value.

#### Defining relative color output channel components

When using relative color syntax inside an `hsl()` function, the browser converts the origin color into an equivalent HSL color (if it is not already specified as such). The color is defined as three distinct color channel values — `h` (hue), `s` (saturation), and `l` (lightness) — plus an alpha channel value (`alpha`). These channel values are made available inside the function to be used when defining the output color channel values:

- The `h` value is resolved to a {{cssxref("&lt;number&gt;")}} between `0` and `360`, inclusive, that represents the origin color's {{cssxref("&lt;hue&gt;")}} degree value.
- The `s` and `l` values are each resolved to a `<number>` between `0` and `100`, inclusive, where `100` is equivalent to `100%`.
- The `alpha` value is resolved to a `<number>` between `0` and `1`, inclusive.

When defining a relative color, the different channels of the output color can be expressed in several different ways. Below, we'll study some examples to illustrate these.

In the first two examples below, we are using relative color syntax. However, the first one outputs the same color as the origin color and the second one outputs a color not based on the origin color at all. They don't really create relative colors! You'd be unlikely to ever use these in a real codebase, and would probably just use an absolute color value instead. We included these examples as a starting point for learning about relative `hsl()` syntax.

Let's start with an origin color of `rgb(255 0 0)` (equivalent to `hsl(0 100% 50%)`). The following function outputs the same color as the origin color — it uses the origin color's `h`, `s`, and `l` channel values (`0`, `100%`, and `50%`) as the output channel values:

```css
hsl(from rgb(255 0 0) h s l)
```

This function's output color is the sRGB `color()` equivalent of `hsl(0 100% 50%)`: `color(srgb 1 0 0)`.

The next function uses absolute values for the output color's channel values, outputting a completely different color not based on the origin color:

```css
hsl(from rgb(255 0 0) 240 60% 70%)
```

In the above case, the output color is the sRGB `color()` equivalent of `hsl(240 60% 70%)`: `color(srgb 0.52 0.52 0.88)`.

The following function creates a relative color based on the origin color:

```css
hsl(from rgb(255 0 0) h 30% 60%)
```

This example:

- Converts the origin color (`rgb(255 0 0)`) into an `hsl()` equivalent (`hsl(0 100% 50%)`).
- Sets the `H` channel value for the output color to those of the origin color `hsl()` equivalent's `H` channel value — `0`.
- Sets the output color's `S` and `L` channel values to new values not based on the origin color: `30%` and `60%`, respectively.

The final output color is the equivalent of `hsl(0 30% 60%)` in the sRGB color space — `color(srgb 0.72 0.48 0.48)`.

> [!NOTE]
> As mentioned above, if the output color is using a different color model to the origin color, the origin color is converted to the same model as the output color in the background so that it can be represented in a way that is compatible (i.e. using the same channels).

In the examples we've seen so far in this section, the alpha channels have not been explicitly specified for either the origin or output colors. When the output color alpha channel is not specified, it defaults to the same value as the origin color alpha channel. When the origin color alpha channel is not specified (and it is not a relative color), it defaults to `1`. Therefore, the origin and output alpha channel values are `1` for the above examples.

Let's look at some examples that specify origin and output alpha channel values. The first one specifies the output alpha channel value as being the same as the origin alpha channel value, whereas the second one specifies a different output alpha channel value, unrelated to the origin alpha channel value.

```css
hsl(from rgb(255 0 0 / 0.8) h s l / alpha)
/* Computed output color: color(srgb 1 0 0 / 0.8) */

hsl(from rgb(255 0 0 / 0.8) h s l / 0.5)
/* Computed output color: color(srgb 1 0 0 / 0.5) */
```

In the following example, the `rgb()` origin color is again converted into an `hsl()` representation — `hsl(0 100% 50% / 0.8)`. {{cssxref("calc")}} calculations are applied to the `H`, `S`, `L`, and `A` values, and the final output color is the equivalent of `hsl(60 80% 30% / 0.7)` in the sRGB color space: `color(srgb 0.72 0.72 0.08 / 0.7)`.

```css
hsl(from rgb(255 0 0 / 0.8) calc(h + 60) calc(s - 20) calc(l - 10) / calc(alpha - 0.1))
```

> [!NOTE]
> Because the origin color channel values are resolved to `<number>` values, you have to add numbers to them when using them in calculations, even in cases where a channel would normally accept `<percentage>`, `<angle>`, or other value types. Adding a `<percentage>` to a `<number>`, for example, doesn't work.

## Formal syntax

{{CSSSyntax}}

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

This example styles three {{htmlelement("div")}} elements with different background colors. The middle one is given the unmodified `--base-color`, while the left and right ones are given lightened and darkened variants of that `--base-color`.

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

/* As per the spec, s and l values should resolve to a number between 0-100
   However, Chrome 121+ incorrectly resolves them to numbers between 0-1
   hence currently using calculations like l + 0.2 instead of l + 20 */

#one {
  background-color: hsl(from var(--base-color) h s calc(l + 0.2));
}

#two {
  background-color: var(--base-color);
}

#three {
  background-color: hsl(from var(--base-color) h s calc(l - 0.2));
}

/* Use @supports to add in support for old syntax that requires % units to
   be specified in lightness calculations. This is required for
   Safari 16.4+ */
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

### Legacy versus modern syntax

The example demonstrates how the `hsla()` syntax is an alias for `hsl()`; both are supported using both modern and legacy (comma-separated) syntaxes.

#### HTML

```html
<div class="modern">HSL</div>
<div class="legacy">HSL</div>
<div class="modernWithAlpha">HSL</div>
<div class="modernHSLA">HSLA</div>
<div class="legacyHSLA">HSLA</div>
```

#### CSS

```css
div {
  width: 100px;
  min-height: 50px;
  font-family: sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
}
body {
  display: flex;
  gap: 20px;
}
```

```css
div.modern {
  background-color: hsl(90 80% 50%);
}

div.legacy {
  background-color: hsl(90, 80%, 50%);
}

div.modernWithAlpha {
  background-color: hsl(90 80% 50% / 50%);
}

div.modernHSLA {
  background-color: hsla(90 80% 50% / 50%);
}

div.legacyHSLA {
  background-color: hsla(90, 80%, 50%, 0.5);
}
```

#### Result

{{EmbedLiveSample("legacy_versus_modern_syntax", "100%", 70)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{CSSXref("&lt;hue&gt;")}} data type
- [`lch()`](/en-US/docs/Web/CSS/color_value/lch) and [`hwb()`](/en-US/docs/Web/CSS/color_value/hwb) color functions
- [Hue interpolation in `color-mix()`](/en-US/docs/Web/CSS/color_value/color-mix#using_hue_interpolation_in_color-mix)
- [List of all color notations](/en-US/docs/Web/CSS/color_value)
- [sRGB color picker and conversion tool](/en-US/docs/Web/CSS/CSS_colors/Color_picker_tool)
- [Using relative colors](/en-US/docs/Web/CSS/CSS_colors/Relative_colors)
- [CSS colors](/en-US/docs/Web/CSS/CSS_colors) module
- [Color picker tool](https://apps.colorjs.io/picker/) by Lea Verou
