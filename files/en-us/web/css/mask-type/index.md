---
title: mask-type
slug: Web/CSS/mask-type
page-type: css-property
browser-compat: css.properties.mask-type
sidebar: cssref
---

The **`mask-type`** [CSS](/en-US/docs/Web/CSS) property applies to the SVG {{svgElement("mask")}} element. It defines whether to use the _luminance_ (brightness) or _alpha_ (transparency) content of the mask. This property may be overridden by the {{cssxref("mask-mode")}} property. The `mask-type` property has no effect on image or gradient masks.

## Syntax

```css
/* Keyword values */
mask-type: luminance;
mask-type: alpha;

/* Global values */
mask-type: inherit;
mask-type: initial;
mask-type: revert;
mask-type: revert-layer;
mask-type: unset;
```

### Values

- `alpha`
  - : Indicates that the alpha (transparency) values of the `<mask>` should be used.
- `luminance`
  - : Indicates that the [luminance (brightness) values](#understanding_luminance) of the `<mask>` should be used.

## Description

The `mask-type` property is only relevant for the SVG `<mask>` element. If you set `mask-type: luminance`, the mask will use how bright each part of the mask is; if you set `mask-type: alpha`, it will use how transparent or opaque each part of the mask is.

### Default behavior

By default, the SVG `<mask>` element uses `mask-type: luminance`. This means both the color and the transparency of the mask content affect masking. Whether the mask is opaque partially depends on the lightness of the color of the opaque areas:

- Fully opaque white areas (100% luminance) will be masked and visible.
- Black (0% luminance) or fully transparent areas will be clipped and invisible.
- Areas with intermediate luminance values will be partially masked, reflecting both the luminance, or lightness of the mask color, and the alpha transparency of each area of the mask.

### Understanding luminance

The opacity of a `luminance` mask is determined by the `R`, `G`, `B`, and `A` values of an `rgb()` color using the following formula:

`((0.2125 * R) + (0.7154 * G) + (0.0721 * B)) * A`

For example, the color `green` (`#008000` or `rgb(0% 50% 0% / 1)`) has a luminance value of `35.77%`. Any area masked by a solid `green` luminance mask will be `35.77%` visible. If the `mask-type` is set to `alpha`, the same fully opaque `green` color will make the masked area `100%` visible.

If the SVG `<mask>` element has `fill="rgb(0 0 0 / 0.5)"`, which is a 50% transparent black, the corresponding shape on the masked element will display at 50% opacity when `mask-type` is set to `alpha` because the alpha values is `0.5` (50% opacity). But if the `mask-type` defaults to or is set as `luminance` the masked area will be fully clipped and invisible because its luminance is `0`.

### Effect of `mask-mode` on `mask-type`

While the `mask-type` property is set on the SVG `<mask>` element, the {{cssxref("mask-mode")}} property is set on the element being masked (the element you're applying the mask to).
If the mask image source is not an SVG `<mask>`, this property has no effect.

The default value of `mask-mode` is `match-source`, which means the browser uses the `mask-type` value from the `<mask>` element to determine how to interpret it. If `mask-mode` is set to a value other than `match-source`, that value takes precedence and overrides the `mask-type` value of the applied mask.

If the `<mask>` is defined as the mask image's source, and the `mask-mode` is set as or defaults to `match-source`, the `mask-mode` will resolve to the `<mask>` element's `mask-type` value: `luminance` or `alpha`. If not explicitly set, the value defaults to `luminance`.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Using the `mask-type` property

This example demonstrates how to use the `mask-type` property and the effect of its different values.

#### HTML

We've included two images that will be masked. Other than their class names, the two images are identical.
We've also included an SVG with two `<mask>` elements. Other than their `id` values, the two masks are also identical: each has a green and white heart shape and a semi-transparent white-and-black-filled circle.

```html
<img
  class="alphaMaskType"
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag" />
<img
  class="luminanceMaskType"
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag" />

<svg height="0" width="0">
  <mask id="alphaMask">
    <path
      d="M20,70 A40,40,0,0,1,100,70 A40,40,0,0,1,180,70 Q180,130,100,190 Q20,130,20,70 Z"
      fill="green"
      stroke="white"
      stroke-width="20" />
    <circle
      cx="170"
      cy="170"
      r="40"
      fill="rgb(0 0 0 / 0.5)"
      stroke="rgb(255 255 255 / 0.5)"
      stroke-width="20" />
  </mask>
  <mask id="luminanceMask">
    <path
      d="M20,70 A40,40,0,0,1,100,70 A40,40,0,0,1,180,70 Q180,130,100,190 Q20,130,20,70 Z"
      fill="green"
      stroke="white"
      stroke-width="20" />
    <circle
      cx="170"
      cy="170"
      r="40"
      fill="rgb(0 0 0 / 0.5)"
      stroke="rgb(255 255 255 / 0.5)"
      stroke-width="20" />
  </mask>
</svg>
```

#### CSS

We apply the `mask-type` property to the `<mask>` elements, and then apply the `<mask>` elements and the mask source to the images.

```css
mask#alphaMask {
  mask-type: alpha;
}

mask#luminanceMask {
  mask-type: luminance;
}

img.alphaMaskType {
  mask-image: url("#alphaMask");
}

img.luminanceMaskType {
  mask-image: url("#luminanceMask");
}
```

#### Result

{{EmbedLiveSample("Examples", "", "250")}}

As the default value for the `mask-mode` property is `match-source`, the first mask uses the alpha channels only to define the mask: the white and green are fully opaque, and the 50% white and black colors are 50% opaque because only the alpha value of the colors matters. The second example uses the luminance of the colors to determine the opacity of the mask, with white being brighter than green, and semi-transparent white being brighter than semi-transparent black.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("mask")}}
- {{cssxref("mask-mode")}}
- [Introduction to CSS masking](/en-US/docs/Web/CSS/CSS_masking/Masking)
- [CSS masking](/en-US/docs/Web/CSS/CSS_masking) module
- SVG {{svgattr("mask-type")}} attribute
