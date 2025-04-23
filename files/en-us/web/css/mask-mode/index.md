---
title: mask-mode
slug: Web/CSS/mask-mode
page-type: css-property
browser-compat: css.properties.mask-mode
---

{{CSSRef}}

The **`mask-mode`** [CSS](/en-US/docs/Web/CSS) property sets whether the mask reference defined by {{cssxref("mask-image")}} is treated as a luminance or alpha mask.

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
  - : If the {{cssxref("mask-image")}} property values is a reference to an SVG {{svgelement("mask")}}, the `<mask>` element's {{cssxref("mask-type")}} property value is used, or it's {{svgattribute("mask-type")}} attribute, if present. If neither is explicitly set, this value defaults to `luminance`. Otherwise, if the mask image source is an {{cssxref("image")}}, rather than an SVG `<mask>`, the `alpha` values of the mask layer image should is used.

### Description

If it is of type {{cssxref("&lt;image&gt;")}}, the alpha values of the mask layer image should be used as the mask values.

`luminance`, which means white opaque areas (100% luminance) will be masked and visible, transparent and black areas (0% luminance) will be clipped, and anything in between will be partially masked.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Using alpha mask mode

```html live-sample___mask-mode-example
<div class="masked"></div>
```

```css live-sample___mask-mode-example
.masked {
  width: 227px;
  height: 200px;
  background: blue linear-gradient(red, blue);

  mask-image: url(https://mdn.github.io/shared-assets/images/examples/mdn.svg);
  mask-mode: alpha;
}
```

{{EmbedLiveSample("mask-mode-example", "", "250px")}}

### Masking with SVG `<mask>`

This example demonstrates using SVG {{svgelement("mask")}} elements as masks. The `mask-type` value defaults to `match-mode`, which for SVG masks resolves to the `<mask>` element's {{cssxref("mask-type")}} property value or {{svgattribute("mask-type")}} attribute. If neither is explicitly set, defaulting to `luminance`.

#### HTML

We've include four {{htmlelements("img")}} elements and an SVG defining the masks. The SVG contains three `<mask>` elements defining identical paths creating a heart shape in opaque colors and a semi-opaque black and white circle. Two include the `mask-type` attribute, the third doesn't have the attribute set.

```html
<p><code>mask-type: match-source</code> set</p>
<img
  class="matchSourceMaskType noMaskMode"
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag" />
<img
  class="matchSourceMaskType alphaMaskMode"
  id="stroke"
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag" />
<img
  class="matchSourceMaskType luminanceaMaskMode"
  id="both"
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag" />

<p><code>mask-type: alpha</code> set</p>
<img
  class="alphaMaskType noMaskMode"
  id="alphaMode"
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag" />
<img
  class="alphaMaskType alphaMaskMode"
  id="alphaMode"
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag" />
<img
  class="alphaMaskType luminanceaMaskMode"
  id="alphaMode"
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag" />

<p><code>mask-type: luminance</code> set</p>
<img
  class="luminanceMaskType noMaskMode"
  id="alphaMode"
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag" />
<img
  class="luminanceMaskType alphaMaskMode"
  id="alphaMode"
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag" />
<img
  class="luminanceMaskType luminanceaMaskMode"
  id="alphaMode"
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag" />

<svg height="0" width="0">
  <mask id="mtAlpha">
    <path
      d="M20,70 A40,40,0,0,1,100,70 A40,40,0,0,1,180,70 Q180,130,100,190 Q20,130,20,70 Z"
      fill="green"
      stroke="white"
      stroke-width="20" />
    <circle
      cx="130"
      cy="130"
      r="50"
      fill="rgb(0 0 0 / 0.5)"
      stroke="rgb(255 255 255 / 0.5)"
      stroke-width="20" />
  </mask>
  <mask id="mtLumminance">
    <path
      d="M20,70 A40,40,0,0,1,100,70 A40,40,0,0,1,180,70 Q180,130,100,190 Q20,130,20,70 Z"
      fill="green"
      stroke="white"
      stroke-width="20" />
    <circle
      cx="130"
      cy="130"
      r="50"
      fill="rgb(0 0 0 / 0.5)"
      stroke="rgb(255 255 255 / 0.5)"
      stroke-width="20" />
  </mask>
  <mask id="mtOmitted">
    <path
      d="M20,70 A40,40,0,0,1,100,70 A40,40,0,0,1,180,70 Q180,130,100,190 Q20,130,20,70 Z"
      fill="green"
      stroke="white"
      stroke-width="20" />
    <circle
      cx="130"
      cy="130"
      r="50"
      fill="rgb(0 0 0 / 0.5)"
      stroke="rgb(255 255 255 / 0.5)"
      stroke-width="20" />
  </mask>
</svg>
```

#### CSS

We apply one of the three `<mask>` elements along with one three `mask-mode` values to each of the images, creating nine combinations.

```css
.matchSourceMaskType {
  mask-image: url(#mtOmitted);
}
.alphaMaskType {
  mask-image: url(#mtAlpha);
}
.luminanceMaskType {
  mask-image: url(#mtLumminance);
}
.luminanceaMaskMode {
  mask-mode: luminance;
}
.alphaMaskMode {
  mask-mode: alpha;
}
.noMaskMode {
  mask-mode: initial;
}
```

```css hidden
img,
svg {
  width: 30vw;
  mask-size: contain;
}
```

No part of the last image, with the `black` fill, will be visible by default because, in this case, while all colors used in this example are fully opaque, the `mask-mode` defaults to `match-type`, which resolves to `luminance` in this case.

The luminance value of `black` is `0`, white is `100`, and [`green` is `46.228`](https://www.colorhexa.com/008000). This means the areas where the mask is white wll be visible, where the mask is black or fully transparent will be clipped (not visible), and where the mask is green will be visible but lighter; green areas will be masked the equivalent of having a white mask that is 46.228% opaque set.

#### Results

{{EmbedLiveSample("SVG elements as masks", "100%", 540)}}

When `alpha` is used, the color of the mask doesn't matter; all that matters is the alpha-transparency. When the value resolves to `luminance`, `white` areas are visible, `black` areas are not, and `green` areas are visible but at an opacity that matches the luminance of the color `green`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("mask")}} shorthand
- {{cssxref("mask-image")}}
- {{cssxref("mask-origin")}}
- {{cssxref("mask-position")}}
- {{cssxref("mask-repeat")}}
- {{cssxref("mask-size")}}
- {{cssxref("mask-border")}}
- [CSS masking](/en-US/docs/Web/CSS/CSS_masking) module
-
