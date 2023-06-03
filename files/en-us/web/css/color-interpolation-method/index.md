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

The **`<color-interpolation-method>`** [CSS](/en-US/docs/Web/CSS) [data type](/en-US/docs/Web/CSS/CSS_Types) represents the color space used for interpolation between {{CSSXref("&lt;color&gt;")}} values. It can be used to override the default interpolation color space for color-related functional notations such as {{CSSXref("color_value/color-mix", "color-mix()")}} and {{CSSXref("gradient/linear-gradient", "linear-gradient()")}}.

When interpolating `<color>` values, the interpolation color space defaults to Oklab.

## Syntax

The `<color-interpolation-method>` specifies whether interpolation should use a rectangular color space or a polar color space with an optional hue interpolation method:

```
in <rectangular-color-space>
in <polar-color-space>[ <hue-interpolation method>]
```

### Values

- `<rectangular-color-space>`

  - : One of the keywords `srgb`, `srgb-linear`, `lab`, `oklab`, `xyz`, `xyz-d50`, or `xyz-d65`.

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

```css hidden
/* Fallback styles */
```

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

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{CSSXref("&lt;color&gt;")}}, {{CSSXref("&lt;gradient&gt;")}}
- {{CSSXref("&lt;hue-interpolation-method&gt;")}}
