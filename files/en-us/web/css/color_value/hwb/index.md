---
title: hwb()
slug: Web/CSS/color_value/hwb
page-type: css-function
browser-compat: css.types.color.hwb
spec-urls:
  - https://drafts.csswg.org/css-color-5/#relative-HWB
  - https://drafts.csswg.org/css-color/#the-hwb-notation
---

{{CSSRef}}

The **`hwb()`** functional notation expresses an {{glossary("RGB", "sRGB")}} color according to its hue, whiteness, and blackness. An optional alpha component represents the color's transparency.

{{EmbedInteractiveExample("pages/css/function-hwb.html")}}

## Syntax

```css
/* Absolute values */
hwb(194 0% 0%) /* #00c3ff */
hwb(194 0% 0% / .5) /* #00c3ff with 50% opacity */

/* Relative values */
hwb(from green h w b / 0.5)
hwb(from #0000FF h calc(w + 30) b)
hwb(from lch(40%, 70, 240deg) h w calc(b - 30))
```

### Values

Below are descriptions of the allowed values for both absolute and [relative colors](/en-US/docs/Web/CSS/CSS_colors/Relative_colors).

> **Note:** Absolute and relative functional notation serializes to sRGB values, and the values of the red, green, blue components may be rounded in serialization.

#### Absolute value syntax

```text
hwb(H W B[ / A])
```

The parameters are as follows:

- `H`

  - : A {{CSSXref("&lt;number&gt;")}}, an {{CSSXref("&lt;angle&gt;")}}, or the keyword `none` (equivalent to `0deg` in this case). This represents the color's hue angle. More details on this type can be found on the {{CSSXref("&lt;hue&gt;")}} reference.

- `W`, `B`

  - : Each one is a {{CSSXref("&lt;percentage&gt;")}} or the keyword `none` (equivalent to `0%` in this case). These values represent the color's whiteness and blackness, respectively. They specify the amount of white and black to mix in, from `0%` (no whiteness or blackness) to `100%` (full whiteness or blackness).

    If `W + B = 100%`, it defines some shade of gray. If `W + B > 100%`, `W` and `B` are effectively normalized as `W / (W + B)` and `B / (W + B)`, respectively.

- `A` {{optional_inline}}

  - : An {{CSSXref("&lt;alpha-value&gt;")}} where the number `0` corresponds to `0%` (fully transparent) and `1` corresponds to `100%` (full opacity), or the keyword `none` explicitly specifies no alpha channel. If included, the value is preceded by a slash (`/`).

> **Note:** See [Missing color components](/en-US/docs/Web/CSS/color_value#missing_color_components) for more information on the effect of `none`.

#### Relative value syntax

```text
hwb(from <color> H W B[ / A])
```

The parameters are as follows:

- `from <color>`
  - : The keyword `from` is always included when defining a relative color, followed by a {{cssxref("&lt;color&gt;")}} value representing the **origin color**. This is the original color that the relative color is based on. Note that the origin color can be _any_ valid {{cssxref("&lt;color&gt;")}} syntax, including another relative color.
- `H`
  - : A {{CSSXref("&lt;number&gt;")}}, an {{CSSXref("&lt;angle&gt;")}}, or the keyword `none` (equivalent to `0deg` in this case). This represents the hue angle of the output color.
- `W`, `B`
  - : Each value can be written as a {{CSSXref("&lt;percentage&gt;")}} or the keyword `none` (equivalent to `0%` in this case). These values represent the whiteness and blackness channel values of the output color, respectively. They specify the amount of white and black to mix in, from `0%` (no whiteness or blackness) to `100%` (full whiteness or blackness). If `W + B = 100%`, it defines some shade of gray. If `W + B > 100%`, `W` and `B` are effectively normalized as `W / (W + B)` and `B / (W + B)`, respectively.
- `A` {{optional_inline}}
  - : An {{CSSXref("&lt;alpha-value&gt;")}} where the number `0` corresponds to `0%` (fully transparent) and `1` corresponds to `100%` (full opacity), or the keyword `none` explicitly specifies no alpha channel. This represents the alpha channel value of the output color. If the `A` channel value is not explicitly specified, it defaults to the alpha channel value of the origin color. If included, the value is preceded by a slash (`/`).

#### Defining relative color output channel components

When using relative color syntax inside an `hwb()` function, the browser converts the origin color into an equivalent HWB color (if it is not already specified as such). The color is defined as three distinct color channel values — `h` (hue), `w` (white), and `b` (black) — plus an alpha channel value (`alpha`). These channel values are made available inside the function to be used when defining the output color channel values:

- The `h` channel value is resolved to a `<number>` between `0` and `360`.
- The `w` and `b` channels are each resolved to a `<number>` between `0` and `100`.
- The `alpha` channel is resolved to a `<number>` between `0` and `1`, inclusive.

When defining a relative color, the different channels of the output color can be expressed in several different ways. Below, we'll study some examples to illustrate these.

It is important to bear in mind that, in the first two examples below, we are using relative color syntax. However, the first one outputs the same color as the origin color and the second one outputs a color not based on the origin color at all. They don't really create relative colors! You'd be unlikely to ever use these in a real codebase, and would probably just use an absolute color value instead. We included these examples as a starting point for learning about relative `hwb()` syntax.

Let's start with an origin color of `hsl(0 100% 50%)` (equivalent to `red`). The following function outputs the same color as the origin color — it uses the origin color's `h`, `w`, and `b` channel values as the output channel values:

```css
hwb(from hsl(0 100% 50%) h w b)
```

> **Note:** As mentioned above, if the output color is using a different color model to the origin color, the origin color is converted to the same model or space as the output color in the background so that it can be represented in a way that is compatible (i.e. using the same channels). For example, in the above case the {{cssxref("color_value/hsl", "hsl()")}} color `hsl(0 100% 50%)` is converted to an sRGB `color()` function equivalent to `hwb(0 0 0)`: `color(srgb 1 0 0)`.

This function uses absolute values for the output color's channel values, outputting a completely different color not based on the origin color:

```css
hwb(from hsl(0 100% 50%) 240 52% 12%)
```

In the above case, the output color is the sRGB `color()` equivalent of `hwb(240 52% 12%)`: `color(srgb 0.52 0.52 0.88)`.

The following function creates a relative color based on the origin color:

```css
hwb(from hsl(0 100% 50%) h 30% b)
```

This example:

- Converts the `hsl()` origin color to an equivalent of the `hwb()` representation in the sRGB color space — `color(srgb 1 0 0)` behind the scenes.
- Sets the `H` and `B` channel values for the output color to those of the origin `color()` equivalent's `H` and `B` channel values — those values are `1` and `0`, respectively.
- Sets the output color's `W` channel value to a new value not based on the origin color: `30%`.

The above example's output color is `color(srgb 1 0.3 0.3)`.

In the examples we've seen so far in this section, the alpha channels have not been explicitly specified, for either the origin or output colors. When the output color alpha channel is not specified, it defaults to the same value as the origin color alpha channel. When the origin color alpha channel is not specified (and it is not a relative color), it defaults to `1`. Therefore, the origin and output channel values are `1` for the above examples.

Let's look at some examples that specify origin and output alpha channel values. The first one specifies the output alpha channel value as being the same as the origin alpha channel value, whereas the second one specifies a different output alpha channel value, unrelated to the origin alpha channel value.

```css
hwb(from hsl(0 100% 50% / 0.8) h w b / alpha)
/* Computed output color: color(srgb 1 0 0 / 0.8) */

hwb(from hsl(0 100% 50% / 0.8) h w b / 0.5)
/* Computed output color: color(srgb 1 0 0 / 0.5) */
```

In the following example, the `hsl()` origin color is again converted into an equivalent of the `hwb()` representation in the sRGB color space — `color(srgb 1 0 0)`. {{cssxref("calc")}} calculations are applied to the `H`, `W`, `B`, and `A` values, resulting in an output color of `color(srgb 0.714286 0.714286 0.714286 / 0.9)`:

```css
hwb(from hsl(0 100% 50%) calc(h + 120) calc(w + 25) calc(b + 10) / calc(alpha - 0.1))
```

### Formal syntax

{{csssyntax}}

## Examples

### Using relative colors with hwb()

The below example styles three {{htmlelement("div")}} elements with different background colors. The middle one is given the unmodified `--base-color`, while the left and right ones are given lightened and darkened variants of that `--base-color`.

These variants are defined using relative colors — the `--base-color` [custom property](/en-US/docs/Web/CSS/--*) is passed into an `hwb()` function, and the output colors have their white and black channels modified to achieve the desired effect via a `calc()` function. The lightened color has 30% added to the white channel, and the darkened color has 30% added to the black channel.

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

/* As per the spec, w and b values should resolve to a number between 0-100
   However, Chrome 121+ incorrectly resolves them to numbers between 0-1
   hence currently using calculations like w + 0.3 instead of w + 30 */

#one {
  background-color: hwb(from var(--base-color) h calc(w + 0.3) b);
}

#two {
  background-color: var(--base-color);
}

#three {
  background-color: hwb(from var(--base-color) h w calc(b + 0.3));
}

/* Use @supports to add in support for old syntax that requires % units to
   be specified in w and b calculations. This is required for Safari 16.4+. */
@supports (color: hwb(from red h w calc(b + 30%))) {
  #one {
    background-color: hwb(from var(--base-color) h calc(w + 30%) b);
  }

  #three {
    background-color: hwb(from var(--base-color) h w calc(b + 30%));
  }
}
```

#### Result

The output is as follows:

{{ EmbedLiveSample("Using relative colors with hwb()", "100%", "200") }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{CSSXref("&lt;color&gt;")}}: For a list of all color notations
- [Using relative colors](/en-US/docs/Web/CSS/CSS_colors/Relative_colors)
- {{CSSXref("&lt;hue&gt;")}}: the data type representing a hue angle of a color
