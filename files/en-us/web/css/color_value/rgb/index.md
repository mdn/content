---
title: rgb()
slug: Web/CSS/color_value/rgb
page-type: css-function
browser-compat: css.types.color.rgb
spec-urls:
  - https://drafts.csswg.org/css-color-5/#relative-RGB
  - https://drafts.csswg.org/css-color/#rgb-functions
---

{{CSSRef}}

> [!NOTE]
> The `rgba()` functional notation is an alias for `rgb()`. They are exactly equivalent. It is recommended to use `rgb()`.

The **`rgb()`** functional notation expresses a color in the {{glossary("RGB", "sRGB")}} {{glossary("color space")}} according to its red, green, and blue components. An optional alpha component represents the color's transparency.

{{EmbedInteractiveExample("pages/css/function-rgb.html")}}

## Syntax

```css
/* Absolute values */
rgb(255 255 255)
rgb(255 255 255 / 50%)

/* Relative values */
rgb(from green r g b / 0.5)
rgb(from #0000FF calc(r + 40) calc(g + 40) b)
rgb(from hwb(120deg 10% 20%) r g calc(b + 200))

/* Legacy 'rgba()' alias */
rgba(0 255 255)

/* Legacy format */
rgb(0, 255, 255)
rgb(0, 255, 255, 50%)
```

> [!NOTE]
> For compatibility reasons, [Web API](/en-US/docs/Web/API/Window/getComputedStyle)-serialized color values are expressed as `rgb()` colors if the alpha channel value is exactly 1, and `rgba()` colors otherwise. In both cases, legacy syntax is used, with commas as separators (for example `rgb(255, 0, 0)`).

### Values

Below are descriptions of the allowed values for both absolute and [relative colors](/en-US/docs/Web/CSS/CSS_colors/Relative_colors).

#### Absolute value syntax

```plain
rgb(R G B[ / A])
```

The parameters are as follows:

- `R`, `G`, `B`
  - : Each value can be represented as a {{CSSXref("&lt;number&gt;")}} between `0` and `255`, a {{CSSXref("&lt;percentage&gt;")}} between `0%` and `100%`, or the keyword `none` (equivalent to `0%` in this case). These values represent the red, green, and blue channels, respectively.
- `A` {{optional_inline}}
  - : An {{CSSXref("&lt;alpha-value&gt;")}} representing the alpha channel value of the color, where the number `0` corresponds to `0%` (fully transparent) and `1` corresponds to `100%` (fully opaque). Additionally, the keyword `none` can be used to explicitly specify no alpha channel. If the `A` channel value is not explicitly specified, it defaults to 100%. If included, the value is preceded by a slash (`/`).

> [!NOTE]
> See [Missing color components](/en-US/docs/Web/CSS/color_value#missing_color_components) for more information on the effect of `none`.

#### Relative value syntax

```plain
rgb(from <color> R G B[ / A])
```

The parameters are as follows:

- `from <color>`
  - : The keyword `from` is always included when defining a relative color, followed by a {{cssxref("&lt;color&gt;")}} value representing the **origin color**: This is the original color that the relative color is based on. The origin color can be _any_ valid {{cssxref("&lt;color&gt;")}} syntax, including another relative color.
- `R`, `G`, `B`
  - : Each value can be represented as a {{CSSXref("&lt;number&gt;")}} between `0` and `255`, a {{CSSXref("&lt;percentage&gt;")}} between `0%` and `100%`, or the keyword `none` (equivalent to `0%` in this case). These values represent the red, green, and blue channel values of the output color, respectively.
- `A` {{optional_inline}}
  - : An {{CSSXref("&lt;alpha-value&gt;")}} representing the alpha channel value of the output color, where the number `0` corresponds to `0%` (fully transparent) and `1` corresponds to `100%` (fully opaque). Additionally, the keyword `none` can be used to explicitly specify no alpha channel. If the `A` channel value is not explicitly specified, it defaults to the alpha channel value of the origin color. If included, the value is preceded by a slash (`/`).

> [!NOTE]
> To fully enable the representation of the full spectrum of visible colors, the output of relative `rgb()` color functions is serialized to `color(srgb)`. That means that querying the output color value via the {{DOMxRef("HTMLElement.style")}} property or the {{DOMxRef("CSSStyleDeclaration.getPropertyValue()")}} method returns the output color as a [`color(srgb ...)`](/en-US/docs/Web/CSS/color_value/color) value.

#### Defining relative color output channel components

When using relative color syntax inside an `rgb()` function, the browser converts the origin color into an equivalent RGB color (if it is not already specified as such). The color is defined as three distinct color channel values — `r` (red), `g` (green), and `b` (blue) — plus an alpha channel value (`alpha`). These channel values are made available inside the function to be used when defining the output color channel values:

- The `r`, `g` and `b` values are each resolved to `<number>`s between `0` and `255`, inclusive.
- The `alpha` channel is resolved to a `<number>` between `0` and `1`, inclusive.

When defining a relative color, the different channels of the output color can be expressed in several different ways. Below, we'll study some examples to illustrate these.

In the first two examples below, we are using relative color syntax. However, the first one outputs the same color as the origin color and the second one outputs a color not based on the origin color at all. They don't really create relative colors! You'd be unlikely to ever use these in a real codebase, and would probably just use an absolute color value instead. We included these examples as a starting point for learning about relative `rgb()` syntax.

Let's start with an origin color of `hsl(0 100% 50%)` (equivalent to `rgb(255 0 0)`). The following function outputs the same color as the origin color — it uses the origin color's `r`, `g`, and `b` channel values (`255`, `0`, and `0`) as the output channel values:

```css
rgb(from hsl(0 100% 50%) r g b)
```

This function's output color is the sRGB `color()` equivalent of `rgb(255 0 0)`: `color(srgb 1 0 0)`.

The next function uses absolute values for the output color's channel values, outputting a completely different color not based on the origin color:

```css
rgb(from hsl(0 100% 50%) 132 132 224)
```

In the above case, the output color is the sRGB `color()` equivalent of `rgb(132 132 224)`: `color(srgb 0.517647 0.517647 0.878431)`.

The following function creates a relative color based on the origin color:

```css
rgb(from hsl(0 100% 50%) r 80 80)
```

This example:

- Converts the origin color (`hsl(0 100% 50%)`) into an `rgb()` equivalent (`rgb(255 0 0)`).
- Sets the `R` channel value for the output color to the origin color `rgb()` equivalent's `R` channel value — `255`.
- Sets the output color's `G` and `B` channel values to new values not based on the origin color: `80` and `80`, respectively.

The final output color is the equivalent of `rgb(255 80 80)` in the sRGB color space — `color(srgb 1 0.313726 0.313726)`.

> [!NOTE]
> As mentioned above, if the output color is using a different color model to the origin color, the origin color is converted to the same model or space as the output color in the background so that it can be represented in a way that is compatible (i.e. using the same channels).

In the examples we've seen so far in this section, the alpha channels have not been explicitly specified for either the origin or output colors. When the output color alpha channel is not specified, it defaults to the same value as the origin color alpha channel. When the origin color alpha channel is not specified (and it is not a relative color), it defaults to `1`. Therefore, the origin and output alpha channel values are `1` for the above examples.

Let's look at some examples that specify origin and output alpha channel values. The first one specifies the output alpha channel value as being the same as the origin alpha channel value, whereas the second one specifies a different output alpha channel value, unrelated to the origin alpha channel value.

```css
rgb(from hsl(0 100% 50% / 0.8) r g b / alpha)
/* Computed output color: color(srgb 1 0 0 / 0.8) */

rgb(from hsl(0 100% 50% / 0.8) r g b / 0.5)
/* Computed output color: color(srgb 1 0 0 / 0.5) */
```

In the following example, the `hsl()` origin color is again converted into an `rgb()` representation — `rgb(255 0 0)`. {{cssxref("calc")}} calculations are applied to the `R`, `G`, `B`, and `A` values. After calculating, the R, G, B and A values are `127.5`, `25`, `175`, and `0.9` respectively. The final output color is the equivalent of `rgb(127.5 25 175 / 0.9)` in the sRGB color space: `color(srgb 0.5 0.0980392 0.686275 / 0.9)`.

```css
rgb(from hsl(0 100% 50%) calc(r/2) calc(g + 25) calc(b + 175) / calc(alpha - 0.1))
```

> [!NOTE]
> Because the origin color channel values are resolved to `<number>` values, you have to add numbers to them when using them in calculations, even in cases where a channel would normally accept `<percentage>`, `<angle>`, or other value types. Adding a `<percentage>` to a `<number>`, for example, doesn't work.

## Formal syntax

{{CSSSyntax}}

## Examples

### Basic syntax

In this example, we have three {{htmlelement("div")}} elements with different background colors displayed over a striped background.

#### HTML

```html
<div>
  <div id="integer"></div>
  <div id="percent"></div>
  <div id="alpha"></div>
</div>
```

#### CSS

The background colors are set using the `rgb()` color function. The three colors are the same. The third is semi-transparent, so we included a {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}} on the {{htmlelement("body")}} to better demonstrate the transparency of alpha channels.

```css hidden
div {
  display: flex;
  gap: 20px;
  height: 50px;
  flex: 1;
}
body {
  height: calc(100vh - 20px);
}
```

```css
body {
  background: repeating-linear-gradient(-45deg, #eee 0 2px, #fff 2px 6px);
  padding: 10px;
}

#integer {
  background-color: rgb(189 85 218);
}

#percent {
  background-color: rgb(74% 33% 85%);
}

#alpha {
  background-color: rgb(189 85 218 / 0.25);
}
```

#### Result

{{ EmbedLiveSample("Basic syntax", "100%", "75") }}

### Using relative colors with rgb()

This example styles three {{htmlelement("div")}} elements with different background colors. The left-hand one is given the unmodified `--base-color`, while the middle and right ones are given variants of that `--base-color` that successively remove more from the red channel and add more to the blue channel.

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
  /* equal to rgb(255 165 0) */
}

#one {
  background-color: var(--base-color);
}

#two {
  background-color: rgb(from var(--base-color) calc(r - 76.5) g calc(b + 76.5));
  /* 76.5 is 30% of 255 */
}

#three {
  background-color: rgb(from var(--base-color) calc(r - 153) g calc(b + 153));
  /* 153 is 60% of 255 */
}

/* Use @supports to add in support for old syntax that requires r g b values to
   be specified as percentages (with units) in calculations. This is required
   for Safari 16.4+. */
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

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{CSSXref("&lt;color&gt;")}} data type for a list of all color notations
- [sRGB color picker and conversion tool](/en-US/docs/Web/CSS/CSS_colors/Color_picker_tool)
- [Using relative colors](/en-US/docs/Web/CSS/CSS_colors/Relative_colors)
- [CSS colors](/en-US/docs/Web/CSS/CSS_colors) module
