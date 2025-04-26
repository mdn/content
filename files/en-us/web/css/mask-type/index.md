---
title: mask-type
slug: Web/CSS/mask-type
page-type: css-property
browser-compat: css.properties.mask-type
---

{{CSSRef}}

The **`mask-type`** [CSS](/en-US/docs/Web/CSS) property defines whether the content of an SVG {{svgElement("mask")}} element's _luminance_ or _alpha_ channels are used by default when the `<mask>` element is set another element's {{cssxref("mask-image")}}.

## Syntax

```css
/* Keyword values */
mask-type: luminance;
mask-type: alpha;

/* Global values */
mask-type: initial;
mask-type: revert;
mask-type: revert-layer;
mask-type: unset;
```

### Values

The `mask-type` property value is either `alpha` or `luminance`:

- `alpha`
  - : Indicates that the alpha values of the `<mask>` should be used.
- `luminance`
  - : Indicates that the luminance values of the `<mask>` should be used.

## Description

The `mask-type` property is only relevant when applied to the `<mask>` element. The property defines the resolved value of the {{cssxref("mask-mode")}} property value if the `mask-mode` property is explicitly set to, or defaults to, `match-source`. If `mask-mode` is set to any `<masking-mode>` value other than `match-source`, that value takes precedence, overriding the `mask-type` value of the applied mask.

The `<mask>` element's default `mask-type` is `luminance`. This means the color of the mask matters in addition to the transparency of those colors. Whether the mask is opaque partially depends on the lightness of the color of the opaque areas. White opaque areas (100% luminance) will be masked and visible, transparent and black areas (0% luminance) will be clipped, and anything in between will be partially masked, reflecting the luminance and alpha-transparency of each color making up the mask.

The opacity of a `luminance` mask is determined by the `R`, `G`, `B`, and `A` values of an `rgb()` color. The equation is `((0.2125 * R) + (0.7154 * G) + (0.0721 * B)) * A`. In a `luminance` mask, the color `green`, being `#008000` or `rgb(0% 50% 0% / 1)`, any area masked by a solid `green` mask will be `35.77%` opaque. If set to `alpha`, as `green` is a fully opaque color meaning the mask is `100%` opaque.

If the `<mask>` is defined as the mask image's source, and the `mask-mode` is set or defaults to `match-source`, the `mask-mode` will resolve to the `<mask>` element's `mask-type` value; `luminance` or `alpha`. If not explicitly set, the value defaults to `luminance`.

If the mask image source is not an SVG `<mask>`, this property has no effect.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### The `mask-type` property

This examples demonstrates basic usage of the `mask-type` property, along with the effect of the different values

#### HTML

We include two images that will be masked. Other than their class names, the two images are identical.
We also include an SVG with two `<mask>` elements. Other than their id values, the two masks are also identical; each with a green and white heart and a semi-transparent white and black filled circle.

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
  mask-image: url(#alphaMask);
}

img.luminanceMaskType {
  mask-image: url(#luminanceMask);
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
- [CSS masking](/en-US/docs/Web/CSS/CSS_masking) module
