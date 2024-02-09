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

> **Note:** See [Missing color components](/en-US/docs/Web/CSS/color_value#missing_color_components) for more information on the effect of `none`.

#### Absolute values

Functional notation of absolute values: `hwb(H W B[ / A])`

- `H`

  - : A {{CSSXref("&lt;number&gt;")}}, an {{CSSXref("&lt;angle&gt;")}}, or the keyword `none` (equivalent to `0deg` in this case). This represents the color's hue angle. More details on this type can be found on the {{CSSXref("&lt;hue&gt;")}} reference.

- `W`, `B`

  - : Each one is a {{CSSXref("&lt;percentage&gt;")}} or the keyword `none` (equivalent to `0%` in this case). These values represent the color's whiteness and blackness, respectively. They specify the amount of white and black to mix in, from `0%` (no whiteness or blackness) to `100%` (full whiteness or blackness).

    If `W + B = 100%`, it defines some shade of gray. If `W + B > 100%`, `W` and `B` are effectively normalized as `W / (W + B)` and `B / (W + B)`, respectively.

- `A` {{optional_inline}}

  - : An {{CSSXref("&lt;alpha-value&gt;")}} where the number `1` corresponds to `100%` (full opacity), or the keyword `none` to explicitly specify no alpha channel.

#### Relative values

Functional notation of relative values: `hwb(from <color> H W B[ / A])`

- `from <color>`
  - : The keyword `from` is always included when defining a relative color, followed by a {{cssxref("&lt;color&gt;")}} value representing the **origin color**. This is the original color that the relative color is based on. Note that the origin color can be _any_ valid {{cssxref("&lt;color&gt;")}} syntax, including another relative color.
- `H`
  - : A {{CSSXref("&lt;number&gt;")}}, an {{CSSXref("&lt;angle&gt;")}}, or the keyword `none` (equivalent to `0deg` in this case). This represents the hue angle of the output color.
- `W`, `B`
  - : Each value can be written as a {{CSSXref("&lt;percentage&gt;")}} or the keyword `none` (equivalent to `0%` in this case). These values represent the whiteness and blackness channel values of the output color, respectively. They specify the amount of white and black to mix in, from `0%` (no whiteness or blackness) to `100%` (full whiteness or blackness). If `W + B = 100%`, it defines some shade of gray. If `W + B > 100%`, `W` and `B` are effectively normalized as `W / (W + B)` and `B / (W + B)`, respectively.
- `A` {{optional_inline}}
  - : An {{CSSXref("&lt;alpha-value&gt;")}} where the number `1` corresponds to `100%` (full opacity), or the keyword `none` to explicitly specify no alpha channel. This represents the alpha channel value of the output color. If the `A` channel value is not explicitly specified, it defaults to the alpha channel value of the origin color.

#### Defining relative color output channel components

When using relative color syntax inside an `hwb()` function, the browser converts the origin color into an equivalent HWB color (if it is not already specified as such). The color is defined as three distinct color channel values — `h` (hue), `w` (white), and `b` (black) — plus an alpha channel value (`alpha`). These channel values are made available inside the function to be used when defining the output color channel values:

- The `h` channel value is resolved to a `<number>` between 0 and 360.
- The `w` and `b` channels are resolved to a `<number>` between 0 and 100.
- The `alpha` channel is resolved to a `<number>` between 0 and 1.

When defining a relative color, the different channels of the output color can be expressed in several different ways. Below, we'll study some examples to illustrate these.

It is important to bear in mind that, in the first two examples below, we are using relative color syntax. However, the first one outputs the same color as the origin color and the second one outputs a color not based on the origin color at all. They don't really create relative colors! You'd be unlikely to ever use these in a real codebase, and would probably just use an absolute color value instead. We included these examples as a starting point for learning about relative color syntax.

Let's start with an origin color of `hsl(0 100% 50%)` (equivalent to `red`). The following function outputs the same color as the origin color — it uses the origin color's `h`, `w`, and `b` channel values as the output channel values:

```css
hwb(from hsl(0 100% 50%) h w b)
```

> **Note:** As mentioned above, if the output color is using a different color model to the origin color, the origin color is converted to the same model as the output color in the background so that it can be represented in a way that is compatible (i.e. using the same channels). For example, in the above case the {{cssxref("color_value/hsl", "hsl()")}} color `hsl(0 100% 50%)` is converted to `hwb(0 0 0)`.

This function uses absolute values for the output color's channel values, outputting a completely different color not based on the origin color:

```css
hwb(from hsl(0 100% 50%) 240 52% 12%)
```

The following function uses the origin color's `h` and `b` channel values for the output color's `h` and `b` channel values, but uses a new value for the output color's `w` channel value, creating a relative color based on the origin color:

```css
hwb(from hsl(0 100% 50%) h 30% b)
```

The following example uses {{cssxref("calc")}} functions to calculate new channel values for the output color that are relative to the origin color channel values:

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

#one {
  /* As per the spec, w + 30% should be specified like this
  background-color: hwb(from var(--base-color) h calc(w + 30) b); */

  /* In Chrome 121+, w and b channel values incorrectly resolve to numbers between 0-1
     rather than 0-100, hence w + 30% currently being specified like this */
  background-color: hwb(from var(--base-color) h calc(w + 0.3) b);
}

#two {
  background-color: var(--base-color);
}

#three {
  /* As per the spec, b + 30% should be specified like this
  background-color: hwb(from var(--base-color) h w calc(b + 30)); */

  /* In Chrome 121+, w and b channel values incorrectly resolve to numbers between 0-1
     rather than 0-100, hence b + 30% currently being specified like this */
  background-color: hwb(from var(--base-color) h w calc(b + 0.3));
}

/* Use @supports to add in support for Safari 16.4+, which supports old
   syntax that requires % units to be specified in w and b calculations */
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
