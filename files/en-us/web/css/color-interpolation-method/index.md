---
title: <color-interpolation-method>
slug: Web/CSS/color-interpolation-method
page-type: css-type
browser-compat:
  - css.types.color.color-mix
  - css.types.image.gradient.conic-gradient.interpolation_color_space
  - css.types.image.gradient.linear-gradient.interpolation_color_space
  - css.types.image.gradient.radial-gradient.interpolation_color_space
  - css.types.image.gradient.repeating-conic-gradient.interpolation_color_space
  - css.types.image.gradient.repeating-linear-gradient.interpolation_color_space
  - css.types.image.gradient.repeating-radial-gradient.interpolation_color_space
spec-urls: https://drafts.csswg.org/css-color/#interpolation-space
---

{{CSSRef}}

The **`<color-interpolation-method>`** [CSS](/en-US/docs/Web/CSS) [data type](/en-US/docs/Web/CSS/CSS_Types) represents the [color space](/en-US/docs/Glossary/Color_space) used for interpolation between {{CSSXref("&lt;color&gt;")}} values. It can be used to override the default interpolation color space for color-related functional notations such as {{CSSXref("color_value/color-mix", "color-mix()")}} and {{CSSXref("gradient/linear-gradient", "linear-gradient()")}}.

When interpolating `<color>` values, the interpolation color space defaults to Oklab.

## Syntax

The `<color-interpolation-method>` specifies whether interpolation should use a rectangular color space or a polar color space with an optional hue interpolation method:

```plain
in <rectangular-color-space>
// or
in <polar-color-space>[ <hue-interpolation method>]
```

### Values

- `<rectangular-color-space>`

  - : One of the keywords `srgb`, `srgb-linear`, `display-p3`, `a98-rgb`, `prophoto-rgb`, `rec2020`, `lab`, `oklab`, `xyz`, `xyz-d50`, or `xyz-d65`.

- `<polar-color-space>`

  - : One of the keywords `hsl`, `hwb`, `lch`, or `oklch`.

- {{CSSXref("&lt;hue-interpolation-method&gt;")}} {{optional_inline}}

  - : The algorithm for hue interpolation. It defaults to `shorter hue`.

## Formal syntax

{{CSSSyntax}}

## Examples

### Comparing interpolation color spaces using gradients

The following example shows the effect of using different interpolation color spaces for {{CSSXref("gradient/linear-gradient", "linear-gradient()")}}.

#### HTML

```html
<div>sRGB:</div>
<div class="gradient srgb"></div>
<div>Oklab:</div>
<div class="gradient oklab"></div>
<div>Oklch (with <code>longer hue</code>):</div>
<div class="gradient oklch-longer"></div>
```

#### CSS

```css
.gradient {
  height: 50px;
  width: 100%;
}
.srgb {
  background-image: linear-gradient(in srgb to right, blue, red);
}
.oklab {
  background-image: linear-gradient(in oklab to right, blue, red);
}
.oklch-longer {
  background-image: linear-gradient(in oklch longer hue to right, blue, red);
}
```

#### Result

{{EmbedLiveSample("comparing_interpolation_color_spaces_using_gradients", "100%", 250)}}

### Color interpolation in repeating gradients

The following example shows how to specify a color space when interpolating colors in repeating gradients.
Three boxes show different types of repeating gradients using the [`repeating-conic-gradient()`](/en-US/docs/Web/CSS/gradient/repeating-conic-gradient), [`repeating-linear-gradient()`](/en-US/docs/Web/CSS/gradient/repeating-linear-gradient), and [`repeating-radial-gradient()`](/en-US/docs/Web/CSS/gradient/repeating-radial-gradient) functions.

#### HTML

```html
<div class="gradient conic">conic</div>
<div class="gradient linear">linear</div>
<div class="gradient radial">radial</div>
```

#### CSS

```css hidden
.gradient {
  height: 200px;
  width: 200px;
  display: inline-block;
  font-family: monospace;
  margin: 10px;
  font-size: 16px;
}
```

```css
.conic {
  background-image: repeating-conic-gradient(
    in hsl,
    aquamarine,
    cornflowerblue 120deg
  );
}

.linear {
  background-image: repeating-linear-gradient(
    in oklch decreasing hue,
    burlywood,
    blueviolet 75px
  );
}

.radial {
  background-image: repeating-radial-gradient(
    in oklch longer hue,
    cornflowerblue 50px,
    burlywood 100px
  );
}
```

#### Result

{{EmbedLiveSample("hue_interpolation_in_repeating_gradients", "100%", 250)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{CSSXref("&lt;color&gt;")}}, {{CSSXref("&lt;gradient&gt;")}}
- {{CSSXref("&lt;hue-interpolation-method&gt;")}}
