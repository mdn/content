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

The **`hwb()`** functional notation expresses a color in the {{glossary("RGB", "sRGB")}} {{glossary("color space")}} according to its hue, whiteness, and blackness. An optional alpha component represents the color's transparency.

{{EmbedInteractiveExample("pages/css/function-hwb.html")}}

## Syntax

```css
/* Absolute values */
hwb(194 0% 0%)
hwb(194 0% 0% / .5)

/* Relative values */
hwb(from green h w b / 0.5)
hwb(from #0000FF h calc(w + 30) b)
hwb(from lch(40% 70 240deg) h w calc(b - 30))
```

## Description

This color function in the [`sRGB` color space](/en-US/docs/Glossary/Color_space#srgb) is defined by a {{CSSXref("&lt;hue&gt;")}} angle value, a whiteness value, a blackness value, and, optionally, an alpha value representing the color's transparency.

The angles corresponding to particular hues differ across the sRGB (used by {{CSSXref("color_value/hsl", "hsl()")}} and `hwb()`), CIELAB (used by {{CSSXref("color_value/lch", "lch()")}}), and Oklab (used by {{CSSXref("color_value/oklch", "oklch()")}}) color spaces. `hwb()` is in the same color space as `hsl()`, and therefore has the same hue color angles. See the {{CSSXref("&lt;hue&gt;")}} reference page for more detail and examples, or try changing the hues on the [color picker](/en-US/docs/Web/CSS/CSS_colors#colors_in_action) to see it in action.

An `hwb()` color is fully saturated when its whiteness (`W`) and blackness (`B`) values are both `0`. For any hue value `H`, `hwb(H 0% 0%)` is the same color as `hsl(H 100% 50%)`. Increasing the whiteness value lightens the color. Increasing the blackness darkens the color.

When both the blackness and whiteness are greater than 0, the color gets muted, tending towards grey. When the amount of whiteness and blackness added in are equal to or greater than 100% — in other words, if `W + B >= 100%`, the color function defines a shade of gray. When the sum of both values is greater than 100% (`W + B > 100%`), the whiteness and blackness values of the grey color are effectively normalized as `W / (W + B)` and `B / (W + B)`, respectively.

## Values

Below are descriptions of the allowed values for both absolute and [relative colors](/en-US/docs/Web/CSS/CSS_colors/Relative_colors).

### Absolute value syntax

```plain
hwb(H W B[ / A])
```

The parameters are as follows:

- `H`

  - : A {{CSSXref("&lt;number&gt;")}}, an {{CSSXref("&lt;angle&gt;")}}, or the keyword `none` (equivalent to `0deg` in this case) representing the color's {{CSSXref("&lt;hue&gt;")}} angle.

- `W`

  - : A {{CSSXref("&lt;percentage&gt;")}} representing the color's whiteness or the keyword `none` (equivalent to `0%` in this case) to mix in. `0%` represents no whiteness. `100%` represents full whiteness if `B` is `0`, otherwise both the `W` and `B` values are normalized.

- `B`

  - : A {{CSSXref("&lt;percentage&gt;")}} representing the color's blackness or the keyword `none` (equivalent to `0%` in this case) to mix in. `0%` represents no blackness. `100%` represents full blackness if `W` is `0`, otherwise both the `W` and `B` values are normalized.

- `A` {{optional_inline}}

  - : An {{CSSXref("&lt;alpha-value&gt;")}} representing the alpha channel value of the color, where the number `0` corresponds to `0%` (fully transparent) and `1` corresponds to `100%` (fully opaque). Additionally, the keyword `none` can be used to explicitly specify no alpha channel. If the `A` channel value is not explicitly specified, it defaults to 100%. If included, the value is preceded by a slash (`/`).

> [!NOTE]
> See [Missing color components](/en-US/docs/Web/CSS/color_value#missing_color_components) for more information on the effect of `none`.

> [!NOTE]
> Absolute `hwb()` colors are serialized to {{CSSXref("color_value/rgb", "rgb()")}} values. The values of the red, green, and blue components may be rounded in serialization.

### Relative value syntax

```plain
hwb(from <color> H W B[ / A])
```

The parameters are as follows:

- `from <color>`

  - : The keyword `from` is always included when defining a relative color, followed by a {{cssxref("&lt;color&gt;")}} value representing the **origin color**. This is the original color that the relative color is based on. The origin color can be _any_ valid {{cssxref("&lt;color&gt;")}} syntax, including another relative color.

- `H`

  - : A {{CSSXref("&lt;number&gt;")}}, an {{CSSXref("&lt;angle&gt;")}}, or the keyword `none` (equivalent to `0deg` in this case) representing the output color's {{CSSXref("&lt;hue&gt;")}} angle.

- `W`

  - : A {{CSSXref("&lt;percentage&gt;")}} representing the color's whiteness or the keyword `none` (equivalent to `0%` in this case) to mix in. `0%` represents no whiteness. `100%` represents full whiteness if `B` is `0`, otherwise both the `W` and `B` values are normalized.

- `B`

  - : A {{CSSXref("&lt;percentage&gt;")}} representing the color's blackness or the keyword `none` (equivalent to `0%` in this case) to mix in. `0%` represents no blackness. `100%` represents full blackness if `W` is `0`, otherwise both the `W` and `B` values are normalized.

- `A` {{optional_inline}}
  - : An {{CSSXref("&lt;alpha-value&gt;")}} representing the alpha channel value of the output color, where the number `0` corresponds to `0%` (fully transparent) and `1` corresponds to `100%` (fully opaque). Additionally, the keyword `none` can be used to explicitly specify no alpha channel. If the `A` channel value is not explicitly specified, it defaults to the alpha channel value of the origin color. If included, the value is preceded by a slash (`/`).

> [!NOTE]
> To fully enable the representation of the full spectrum of visible colors, the output of relative `hwb()` color functions is serialized to `color(srgb)`. That means that querying the output color value via the {{DOMxRef("HTMLElement.style")}} property or the {{DOMxRef("CSSStyleDeclaration.getPropertyValue()")}} method returns the output color as a [`color(srgb ...)`](/en-US/docs/Web/CSS/color_value/color) value.

### Defining relative color output channel components

When using relative color syntax inside an `hwb()` function, the browser converts the origin color into an equivalent HWB color (if it is not already specified as such). The color is defined as three distinct color channel values — `h` (hue), `w` (white), and `b` (black) — plus an alpha channel value (`alpha`). These channel values are made available inside the function to be used when defining the output color channel values:

- The `h` channel value is resolved to a `<number>` between `0` and `360`, inclusive.
- The `w` and `b` channels are each resolved to a `<number>` between `0` and `100`, inclusive.
- The `alpha` channel is resolved to a `<number>` between `0` and `1`, inclusive.

When defining a relative color, the different channels of the output color can be expressed in several different ways. Below, we'll study some examples to illustrate these.

In the first two examples below, we are using relative color syntax. However, the first one outputs the same color as the origin color and the second one outputs a color not based on the origin color at all. They don't really create relative colors! You'd be unlikely to ever use these in a real codebase, and would probably just use an absolute color value instead. We included these examples as a starting point for learning about relative `hwb()` syntax.

Let's start with an origin color of `hsl(0 100% 50%)` (equivalent to `hwb(0 0% 0%)`). The following function outputs the same color as the origin color — it uses the origin color's `h`, `w`, and `b` channel values (`0`, `0%`, and `0%`) as the output channel values:

```css
hwb(from hsl(0 100% 50%) h w b)
```

This function's output color is the sRGB `color()` equivalent of `hwb(0 0% 0%)`: `color(srgb 1 0 0)`.

The next function uses absolute values for the output color's channel values, outputting a completely different color not based on the origin color:

```css
hwb(from hsl(0 100% 50%) 240 52% 12%)
```

In the above case, the output color is the sRGB `color()` equivalent of `hwb(240 52% 12%)`: `color(srgb 0.52 0.52 0.88)`.

The following function creates a relative color based on the origin color:

```css
hwb(from hsl(0 100% 50%) h 30% b)
```

This example:

- Converts the origin color (`hsl(0 100% 50%)`) into an `hwb()` equivalent (`hwb(0 0% 0%)`).
- Sets the `H` and `B` channel values for the output color to those of the origin color `hwb()` equivalent's `H` and `B` channel values — those values are `0` and `0%`, respectively.
- Sets the output color's `W` channel value to a new value not based on the origin color: `30%`.

The final output color is the equivalent of `hwb(0 30% 0%)` in the sRGB color space — `color(srgb 1 0.3 0.3)`.

> [!NOTE]
> As mentioned above, if the output color is using a different color model to the origin color, the origin color is converted to the same model or space as the output color in the background so that it can be represented in a way that is compatible (i.e. using the same channels).

In the examples we've seen so far in this section, the alpha channels have not been explicitly specified for either the origin or output colors. When the output color alpha channel is not specified, it defaults to the same value as the origin color alpha channel. When the origin color alpha channel is not specified (and it is not a relative color), it defaults to `1`. Therefore, the origin and output alpha channel values are `1` for the above examples.

Let's look at some examples that specify origin and output alpha channel values. The first one specifies the output alpha channel value as being the same as the origin alpha channel value, whereas the second one specifies a different output alpha channel value, unrelated to the origin alpha channel value.

```css
hwb(from hsl(0 100% 50% / 0.8) h w b / alpha)
/* Computed output color: color(srgb 1 0 0 / 0.8) */

hwb(from hsl(0 100% 50% / 0.8) h w b / 0.5)
/* Computed output color: color(srgb 1 0 0 / 0.5) */
```

In the following example, the `hsl()` origin color is again converted into an `hwb()` representation — `hwb(0 0% 0%)`. {{cssxref("calc")}} calculations are applied to the `H`, `W`, `B`, and `A` values, and the final output color is the equivalent of `hwb(120 25% 10% / 0.9` in the sRGB color space: `color(srgb 0.25 0.9 0.25 / 0.9)`.

```css
hwb(from hsl(0 100% 50%) calc(h + 120) calc(w + 25) calc(b + 10) / calc(alpha - 0.1))
```

> [!NOTE]
> Because the origin color channel values are resolved to `<number>` values, you have to add numbers to them when using them in calculations, even in cases where a channel would normally accept `<percentage>`, `<angle>`, or other value types. Adding a `<percentage>` to a `<number>`, for example, doesn't work.

## Formal syntax

{{csssyntax}}

## Examples

### Using relative colors with hwb()

This example styles three {{htmlelement("div")}} elements with different background colors. The middle one is given the unmodified `--base-color`, while the left and right ones are given lightened and darkened variants of that `--base-color`.

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
- [Color picker and conversion tool](/en-US/docs/Web/CSS/CSS_colors/Color_picker_tool)
- [Using relative colors](/en-US/docs/Web/CSS/CSS_colors/Relative_colors)
- [CSS colors](/en-US/docs/Web/CSS/CSS_colors) module
- {{CSSXref("&lt;hue&gt;")}}: the data type representing a hue angle of a color
