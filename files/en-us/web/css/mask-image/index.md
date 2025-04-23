---
title: mask-image
slug: Web/CSS/mask-image
page-type: css-property
browser-compat: css.properties.mask-image
---

{{CSSRef}}

The **`mask-image`** [CSS](/en-US/docs/Web/CSS) property sets the image that is used as the mask layer for an element, hiding sections of the element on which the masking image is set based on the alpha channel of the mask image and, depending on the {{cssxref("mask-mode")}} property value, the luminance of the mask image's colors.

## Syntax

```css
/* Keyword value */
mask-image: none;

/* <mask-source> value */
mask-image: url(masks.svg#mask1);

/* <image> values */
mask-image: linear-gradient(rgb(0 0 0 / 100%), transparent);
mask-image: image(url(mask.png), skyblue);

/* Multiple values */
mask-image: url(mask.png), linear-gradient(black 25%, transparent 35%);

/* Global values */
mask-image: inherit;
mask-image: initial;
mask-image: revert;
mask-image: revert-layer;
mask-image: unset;
```

### Values

- `none`

  - : This keyword is interpreted as a transparent black image layer.

- `<mask-source>`

  - : A {{cssxref("url_value", "&lt;url&gt;")}} reference to a {{SVGElement("mask")}} or to a CSS image.

- {{cssxref("&lt;image&gt;")}}
  - : An image value used as a mask image layer.

## Description

The `mask-image` property provides a mask that hides part of the element to which it is applied.

The default value of the {{cssxref("mask-mode")}} property is `match-source`; therefore, whether the alpha transparency of the mask depends on the image source's alpha channel values alone or a combination of those and the mask's luminance depends on the source:

- In all cases, the alpha transparency of the mask matters; element areas masked by opaque sections of the `mask-image` will be rendered, while areas masked by transparent image sections are hidden.
- In `alpha` cases, the colors of the opaque and the semi-opaque regions don't matter.
- If the {{cssxref("mask-mode")}} property is set to `luminance` or defaults to `luminance` because that is the default or set `mask-type` of the SVG mask source, the masking value is the luminance value of each color multiplied by its alpha value.

A mask will be counted as a transparent black image layer, not revealing anything, in the following cases:

- the mask image is empty (zero width or zero height)
- the mask image fails to download
- the mask image format is not supported by the browser
- the mask image doesn't exist
- the mask value doesn't point to a mask image

Only image sources served over HTTP and HTTPS protocols are accepted as `<image>` values due to the [CORS](/en-US/docs/Glossary/CORS) policy. Images served locally, including relative or absolute `file://` protocols, are not accepted, and will render as transparent black. To test URL image sources locally, [set up a local server](/en-US/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection#localhost).

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Gradient as a mask image

In this example, we use an `<image>` value as a mask, defining a CSS [radial gradient](/en-US/docs/Web/CSS/gradient/radial-gradient) as our mask image to create a round image with a soft edge.

#### HTML

We include an HTML {{htmlelement("img")}} element, which will also be used in all other examples.

```html live-sample___example-image live-sample___first-example
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag" />
```

{{EmbedLiveSample("example-image", "100%", 250)}}

#### CSS

We use the CSS {{CSSxRef("gradient/radial-gradient")}} function to create a mask that has a black circle with a radius that is half the width of the mask, before transition to being transparent over 10%.

```css live-sample___first-example
img {
  mask-image: radial-gradient(black 50%, transparent 60%);
}
```

#### Results

{{EmbedLiveSample("first-example", "100%", 250)}}

The part of the original element that is masked by the black circle is fully opaque, fading to transparent as the mask fades to transparent.

### Image resource as a mask image

In this example, the `<mask-source>` used as our mask image is an external SVG.

#### HTML

We include the same image as the previous example. We've also included the image we will be using as the mask; a star whose {{cssxref("fill-opacity")}} is `0.5`, or 50% opaque.

```html
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag" />

<img
  src="https://mdn.github.io/shared-assets/images/examples/mask-star.svg"
  alt="A star" />
```

#### CSS

We use `mask-star.svg` as a mask image on our first image:

```css
img:first-of-type {
  mask-image: url(https://mdn.github.io/shared-assets/images/examples/mask-star.svg);
}
```

#### Results

{{EmbedLiveSample("Image resource as a mask image", "100%", 250)}}

The mask is semi-opaque, which is why the colors are not as vibrant as the previous example. The part of the image that is visible is 50% opaque; the opacity of the mask applied.
The mask is smaller than the image, so repeats by default. We could have used {{cssxref("mask-repeat")}} to control the repeating or {{cssxref("mask-size")}} to change the size of the mask, which we do in the next example.

### Multiple masks

This example demonstrates applying multiple masks.

```html hidden
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag" />
```

#### CSS

We apply two masks — the same semi-transparent SVG as in the previous example, and a {{CSSxRef("gradient/repeating-radial-gradient")}}. We control the size of the masks using the {{cssxref("mask-size")}} property. Because our first mask is not 100%, we make sure our masks are centered and don't repeat with the {{cssxref("mask-position")}} and {{cssxref("mask-repeat")}} properties, respectively.

```css
img {
  mask-size: 95%, 100%;
  mask-position: center;
  mask-repeat: no-repeat;
  mask-image:
    url(https://mdn.github.io/shared-assets/images/examples/mask-star.svg),
    repeating-radial-gradient(transparent 0 5px, black 5px 10px);
}
```

#### Results

{{EmbedLiveSample("multiple masks", "100%", 250)}}

### Masking with SVG `<mask>`

This example demonstrates using SVG {{svgelement("mask")}} elements as masks. In this case, the color of the mask matters as the {{cssxref("mask-type")}} value for SVG masks defaults to `luminance`, which means white opaque areas (100% luminance) will be masked and visible, transparent and black areas (0% luminance) will be clipped, and anything in between will be partially masked.

#### HTML

We've included an `id` for each of our four images, and an SVG that contains an equal number of `<mask>` elements.

```html
<img
  id="green"
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag" />
<img
  id="stroke"
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag" />
<img
  id="both"
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag" />
<img
  id="alphaMode"
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag" />

<svg height="0" width="0">
  <mask id="greenMask">
    <path
      d="M20,70 A40,40,0,0,1,100,70 A40,40,0,0,1,180,70 Q180,130,100,190 Q20,130,20,70 Z"
      fill="green" />
  </mask>
  <mask id="strokeMask">
    <path
      d="M20,70 A40,40,0,0,1,100,70 A40,40,0,0,1,180,70 Q180,130,100,190 Q20,130,20,70 Z"
      fill="none"
      stroke="white"
      stroke-width="20" />
  </mask>
  <mask id="bothMask">
    <path
      d="M20,70 A40,40,0,0,1,100,70 A40,40,0,0,1,180,70 Q180,130,100,190 Q20,130,20,70 Z"
      fill="green"
      stroke="white"
      stroke-width="20" />
  </mask>
  <mask id="black">
    <path
      d="M20,70 A40,40,0,0,1,100,70 A40,40,0,0,1,180,70 Q180,130,100,190 Q20,130,20,70 Z"
      fill="black" />
  </mask>
</svg>
```

```html hidden
<p>
  <label>
    <input type="checkbox" />
    Set the <code>mask-mode</code> to <code>alpha</code>.
  </label>
</p>
```

#### CSS

We apply a different `<mask>` to each `<img>`. No part of the last image, with the `black` fill, will be visible by default because, in this case, while all colors used in this example are fully opaque, the `mask-mode` defaults to `match-type`, which resolves to `luminance` in this case.

```css
#green {
  mask-image: url(#greenMask);
}
#stroke {
  mask-image: url(#strokeMask);
}
#both {
  mask-image: url(#bothMask);
}
#alphaMode {
  mask-image: url(#black);
}

body:has(:checked) img {
  mask-mode: alpha;
}
```

The luminance values of `black`, `white`, and `green` are `0`, `100`, and [`46.228`](https://www.colorhexa.com/008000), respectively. This means the areas where the mask is white will be visible, whereas areas where the mask is black or fully transparent will be clipped (not visible). Areas where the mask is green will be visible but lighter, equivalent to having a white mask that is 46.228% opaque.

#### Results

{{EmbedLiveSample("SVG elements as masks", "100%", 540)}}

Toggle the checkbox to toggle the value of last image's `mask-mode` between `alpha` (checked) and the initial value which resolves to `luminance` (unchecked). When `alpha` is used, the color of the mask doesn't matter; all that matters is the alpha-transparency. When the value resolves to `luminance`, `white` areas are visible, `black` areas are not, and `green` areas are visible but at an opacity that matches the luminance of the color `green`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("mask")}} shorthand
- {{cssxref("mask-origin")}}
- {{cssxref("mask-position")}}
- {{cssxref("mask-repeat")}}
- {{cssxref("mask-size")}}
- {{cssxref("mask-border")}}
- {{cssxref("clip-path")}}
- [CSS masking](/en-US/docs/Web/CSS/CSS_masking) module
