---
title: mask-mode
slug: Web/CSS/mask-mode
page-type: css-property
browser-compat: css.properties.mask-mode
---

{{CSSRef}}

The **`mask-mode`** [CSS](/en-US/docs/Web/CSS) property sets whether the mask reference defined as the {{cssxref("mask-image")}} is treated as a luminance or alpha mask.

## Syntax

```css
/* Keyword values */
mask-mode: alpha;
mask-mode: luminance;
mask-mode: match-source;

/* Multiple values */
mask-mode: alpha, match-source;

/* Global values */
mask-mode: inherit;
mask-mode: initial;
mask-mode: revert;
mask-mode: revert-layer;
mask-mode: unset;
```

### Values

The `mask-mode` property is a comma-separated list of `<masking-mode>` keyword values, including:

- `alpha`

  - : Indicates that the transparency (alpha channel) values of the mask layer image should be used as the mask values.

- `luminance`

  - : Indicates that the luminance values of the mask layer image should be used as the mask values.

- `match-source`
  - : If the {{cssxref("mask-image")}} property values is a reference to an SVG {{svgelement("mask")}}, the `<mask>` element's {{cssxref("mask-type")}} property value is used, or it's {{svgattribute("mask-type")}} attribute, if present. If neither is explicitly set, in the case of the `<mask>` element as the mask source, this value defaults to `luminance`. Otherwise, if the mask image source is an {{cssxref("image")}}, rather than an SVG `<mask>`, the `alpha` values of the mask layer image is used.

### Description

A mask transfers its transparency and, depending on the mask type, it's luminescence, to the element it is masking.
If the mask is of type {{cssxref("&lt;image&gt;")}}, by default the alpha values of the mask layer image is used as the mask values; where the mask is opaque, the pixels of the masked object are opaque. Where the mask is translucent, the element is as well, with those areas of the element being hidden. This is what happens with `<image>` masks, when the `mask-mode` property is set or defaults to `match-source`, and in all cases when the `mask-mode` is explicitly set to `alpha`.

In the case of `luminance` masks, whether the areas masked by an opaque mask are opaque themselves depends partially on the lightness of the color of the opaque areas. White opaque areas (100% luminance) will be masked and visible, transparent and black areas (0% luminance) will be clipped, and anything in between will be partially masked, reflecting the luminance and alpha-transparency of each color making up the mask.

The opacity of a `luminance` mask is determined by the `R`, `G`, `B`, and `A` values of an `rgb()` color. The equation is `((0.2125 * R) + (0.7154 * G) + (0.0721 * B)) * A`. In a `luminance` mask, the color `green` being `#008000`, or `rgb(0% 50% 0% / 1)`, any area masked by a solid `green` mask will be `35.77%` opaque. If the `mask-mode` for this mask is set to `alpha`, as `green` is a fully opaque color, the masked area will be `100%` opaque.

Each `mask-mode` value in the comma-separated list of values. When multiple values are present, each value will match up to the image in the same position in the {{cssxref("mask-image")}} value. The value defines whether the associated mask image is treated as a `luminance` or `alpha` mask.

In the case of `match-source`, whether `luminance` or `alpha` is used depends on the mask mode of the mask source. If the `mask-image` property values is a reference to an SVG {{svgelement("mask")}} element, the `<mask>` element's {{cssxref("mask-type")}} property value is used. If there is no CSS `mask-type` property set on the `<mask>` element, the value of the `<mask>` element's {{svgattribute("mask-type")}} attribute is used, if present and supported. If neither is explicitly set, this value defaults to `luminance`; but only in the case of the `<mask>` element as the mask source. Otherwise, as noted before, if the mask image source is an {{cssxref("image")}}, rather than an SVG `<mask>`, the `alpha` values of the mask layer image is used.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Using `mask-mode`

This example demonstrates the basic usage and different values of the `mask-mode` property.

#### HTML

We include three `<div>` elements, so we can demonstrate the three enumerated `mask-mode` keyword values.

```html
<div class="alpha">ALPHA</div>
<div class="luminance">LUMINANCE</div>
<div class="matchSource">MATCH-SOURCE</div>
```

#### CSS

Each `<div>` is provided with the same background and masking image. The only difference between each `<div>` is the value of the `mask-mode` property:

```css hidden
div {
  float: left;
  text-align: center;
  line-height: 65px;
  color: white;
  text-shadow: 1px 1px 2px black;
  font-family: sans-serif;
}
```

```css
div {
  width: 227px;
  height: 200px;
  background: blue linear-gradient(red, blue);
  mask-image: url(https://mdn.github.io/shared-assets/images/examples/mdn.svg);
}

.alpha {
  mask-mode: alpha;
}

.luminance {
  mask-mode: luminance;
}

.matchSource {
  mask-mode: match-source;
}
```

#### Results

{{EmbedLiveSample("Using mask-mode", "", "250px")}}

Because the mask source is an `<image>`, and not a `<mask>`, the `match-source` value resolves to `alpha`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("mask-type")}}
- {{cssxref("mask-image")}}
- {{cssxref("mask")}} shorthand
- [CSS masking](/en-US/docs/Web/CSS/CSS_masking) module
