---
title: palette-mix()
slug: Web/CSS/font-palette/palette-mix
page-type: css-function
browser-compat: css.properties.font-palette.palette-mix_function
---

{{CSSRef}}

The **`palette-mix()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/CSS_Functions) can be used to create a new {{cssxref("font-palette")}} value by blending together two `font-palette` values by specified percentages and color interpolation methods.

## Syntax

```css
/* Blending font-defined palettes */
font-palette: palette-mix(in lch, normal, dark)

/* Blending author-defined palettes */
font-palette: palette-mix(in lch, --blue, --yellow)

/* Varying percentage of each palette mixed */
font-palette: palette-mix(in lch, --blue 50%, --yellow 50%)
font-palette: palette-mix(in lch, --blue 70%, --yellow 30%)
font-palette: palette-mix(in lch, --blue 30%, --yellow 70%)

/* Varying color interpolation method */
font-palette: palette-mix(in srgb, --blue, --yellow)
font-palette: palette-mix(in hsl, --blue, --yellow)
font-palette: palette-mix(in hsl shorter hue, --blue, --yellow)

```

### Values

Functional notation:

```text
palette-mix(method, palette1 [p1], palette2 [p2])
```

- `<method>`
  - : A {{cssxref("&lt;color-interpolation-method&gt;")}} specifying the interpolation color space.
- `palette1`, `palette2`
  - : The {{cssxref("font-palette")}} values to blend together. These can be _any_ `font-palette` values, including `palette-mix()` functions.
- `p1`, `p2` {{optional_inline}}
  - : {{cssxref("&lt;percentage&gt;")}} values between `0%` and `100%` specifying the amount of each palette to mix. The percentages follow the same [normalization rules](/en-US/docs/Web/CSS/color_value/color-mix#p1) as the {{cssxref("color_value/color-mix", "color-mix()")}} function.

## Examples

### Using `palette-mix()` to blend two palettes

This example shows how to use the `palette-mix()` function to create a new palette by blending two others.

#### HTML

The HTML contains three paragraphs to apply our font information to:

```html
<p class="yellow">Yellow palette</p>
<p class="blue">Blue palette</p>
<p class="mix">Mixed palette</p>
```

#### CSS

In the CSS, we import a color font from Google Fonts, and define two custom `font-palette` values using the {{cssxref("@font-palette-values")}} at-rule. We then apply three different `font-palette` values to the paragraphs — `--yellow`, `--blue`, and a new green palette, created using `palette-mix()` to blend the blue and yellow palettes together.

```css
@import url("https://fonts.googleapis.com/css2?family=Nabla&display=swap");

@font-palette-values --blue {
  font-family: Nabla;
  base-palette: 2;
}

@font-palette-values --yellow {
  font-family: Nabla;
  base-palette: 7;
}

p {
  font-family: "Nabla";
  font-size: 4rem;
  text-align: center;
  margin: 0;
}

.yellow {
  font-palette: --yellow;
}

.blue {
  font-palette: --blue;
}

.mix {
  font-palette: palette-mix(in lch, --blue, --yellow);
}
```

#### Result

The output looks like this:

{{EmbedLiveSample("Using `palette-mix()` to blend two palettes", "100%", 350)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("font-palette")}}
- {{cssxref("color_value/color-mix", "color-mix()")}}
