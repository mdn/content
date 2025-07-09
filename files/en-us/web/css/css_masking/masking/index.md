---
title: Introduction to CSS masking
slug: Web/CSS/CSS_masking/Masking
page-type: guide
---

{{CSSRef}}

CSS masking enables you to reveal or hide parts of an element selectively by applying one or more mask images to it. These mask images can be gradients, images, or SVG sources. Unlike [CSS clipping](/en-US/docs/Web/CSS/CSS_masking/Clipping), which either fully shows or hides areas of an element based on the shape of a single path, masking allows for nuanced transparency and blending effects based on the alpha transparency and, optionally, luminance of the mask images.

This guide introduces the concept of masking, the various mask image types, and how the luminance and alpha-transparency of the mask impact the portions of the element that are masked (made visible), versus the portions that are clipped (or hidden).

## What is masking in CSS?

In CSS, masks can be used to define areas of an element that are visible and other areas that are hidden. Mask layers, defined by one or more {{cssxref("mask-image")}} sources, determine the areas of an element that should be visible and at what opacity.

> [!NOTE]
> Multiple CSS masking property values can be set using the {{cssxref("mask")}} shorthand property.

With `alpha` masks, the opacity of the masked element matches the opacity of the mask applied. In CSS, masking is the opposite of a masquerade mask, where the face is hidden wherever the mask is opaque. In CSS, the areas of the element where its mask is fully opaque will be fully opaque and visible. Wherever the mask is fully transparent, the element will be fully hidden. Areas of the element that are masked by partially opaque mask areas will be partially opaque, matching the mask's opacity.

With alpha masks, the color of the mask is irrelevant. Only the opacity of the mask matters. With [luminance masks](#alpha_transparency_versus_luminance), the brightness of the mask colors is taken into account when determining the opacity of the masked element. The brighter and more opaque the color, the more opaque the element. The darker and more transparent the color, the less opaque the mask will be.

Masks can be defined using CSS gradients, raster images (such as PNGs), and SVG {{svgelement("mask")}} elements. In this guide, we introduce the various mask image types as we discuss [opaqueness and transparency](#opaqueness_versus_transparency), [luminance](#alpha_transparency_versus_luminance), and [masking versus CSS clipping](#svg_mask_as_mask_source).

Each mask layer consists of a {{cssxref("mask-image")}}, which is [positioned](/en-US/docs/Web/CSS/mask-position) relative to an origin box. The mask images can be [sized](/en-US/docs/Web/CSS/mask-size), [repeated](/en-US/docs/Web/CSS/mask-repeat), and [clipped](/en-US/docs/Web/CSS/mask-clip). In cases where multiple mask images are declared, the way the [mask layers are composited](/en-US/docs/Web/CSS/mask-composite), or combined, can be set. These are discussed in the [masking properties guide](/en-US/docs/Web/CSS/CSS_masking/Mask_properties).

> [!NOTE]
> All examples will be using the following image as the underlying element upon which masks will be applied:
>
> <img src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg" alt="Pride flag" />

## Opaqueness versus transparency

```html hidden live-sample___gradient1 live-sample___gradient2 live-sample___image1   live-sample___luminance1 live-sample___luminance2 live-sample___luminance3
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag"
  class="applied-mask" />
<div class="mask-source"></div>
```

```css hidden live-sample___gradient1 live-sample___gradient2 live-sample___image1   live-sample___luminance1 live-sample___luminance2 live-sample___luminance3 live-sample___svg1
body {
  display: flex;
  gap: 20px;
  padding: 15px;
  background-image:
    linear-gradient(to right, rgb(0 0 0 / 0) 50%, rgb(0 0 0 / 0.05) 50%),
    linear-gradient(to bottom, rgb(0 0 0 / 0) 50%, rgb(0 0 0 / 0.05) 50%);
  background-size: 20px 20px;
}
div,
svg,
img {
  width: 220px;
  aspect-ratio: 1;
}
```

With alpha masks, the visible areas of an element are defined by the alpha-transparency of the mask applied to it. Wherever the mask is fully opaque, the element will be visible. At every pixel where the mask is fully transparent, the element too will be fully hidden. Areas of the element that are masked by a partially opaque section of a mask will be partially opaque, matching the opacity of the mask applied to it.

### With gradients

To demonstrate this, let's look at an example using a {{cssxref("conic-gradient")}} as the `mask-image`. CSS gradients, including conic gradients, can be used to create smooth transitions between visible and hidden areas.

In this case, the top-right corner of the mask is fully opaque, the top-left quadrant is fully transparent, and the bottom half has a smooth transition between opaque and transparent.

```css live-sample___gradient1
.applied-mask {
  mask-image: conic-gradient(rgb(0 0 0 / 1) 90deg, rgb(0 0 0 / 0) 270deg);
}
.mask-source {
  background: conic-gradient(rgb(0 0 0 / 1) 90deg, rgb(0 0 0 / 0) 270deg);
}
```

Note how the element on which the mask is applied has a fully visible top-right corner, the top-left quarter is hidden, and the bottom half transitions smoothly from visible to transparent, reflecting the visibility of the applied mask image.

{{EmbedLiveSample("gradient1", "", "250px")}}

With alpha masks, the color of the mask doesn't matter, only the transparency. In this example, we have a striped gradient with fully opaque red, semi-opaque red, and fully transparent stripes.

```css live-sample___gradient2
.applied-mask {
  mask-image: repeating-linear-gradient(
    to bottom right,
    #f00 0 20px,
    #f005 20px 40px,
    transparent 40px 60px
  );
}
.mask-source {
  background: repeating-linear-gradient(
    to bottom right,
    #f00 0 20px,
    #f005 20px 40px,
    transparent 40px 60px
  );
}
```

Note how the fully opaque mask areas reveal fully opaque element pixels, semi-transparent mask areas create semi-transparent areas, and fully transparent mask areas hide the associated areas completely.

{{EmbedLiveSample("gradient2", "", "250px")}}

### With imported images

The previous two examples used gradients as masks and background images. The mask image doesn't have to be a CSS image. It can be an external image or an SVG.

In this case we use an external PNG. The image contains a colorful heart with a transparent background.

```css live-sample___image1 live-sample___luminance1
.applied-mask {
  mask-image: url(https://mdn.github.io/shared-assets/images/examples/colorful-heart.png);
  mask-size: 220px 220px;
}
.mask-source {
  background: url(https://mdn.github.io/shared-assets/images/examples/colorful-heart.png);
  background-size: 220px 220px;
}
```

Note how the transparent mask areas crop the element; the only parts of the element that are visible are the areas where the mask is opaque. The color of the mask itself doesn't matter.

{{EmbedLiveSample("image1", "", "250px")}}

## Alpha transparency versus luminance

The `mask-mode` property's default value — `match-source` — sets the mode to either `alpha` or `luminance`, depending on the value. The `match-source` value resolves to `alpha` for all mask sources other than SVG {{svgelement("mask")}} elements. If the mask source is a `<mask>` element, `match-source` resolves to the `<mask>`'s {{cssxref("mask-type")}} property value, if set. Otherwise, it resolves to the value of the SVG {{svgattr("mask-type")}} attribute set on the `<mask>` element. If that is not explicitly set either, `match-source` will resolve to `luminance`.

If `mask-mode` resolves to `luminance`, or we explicitly set it to `luminance`, the colors of the mask will affect the mask opacity. In the previous demo, the `mask-mode` was not set, so the value defaulted to `match-source`. As the colorful heart image is a transparent PNG, `match-source` resolves to `alpha`. By explicitly setting this property, we can control the mode. In this demo, we change the `mask-mode` to `luminance`.

```css live-sample___luminance1
.applied-mask {
  mask-mode: luminance;
}
```

When applying `mask-mode: luminance` to the same mask as in the previous example, the areas of the element where the mask is **lightest** are more opaque, while **darker** areas are less opaque.

{{EmbedLiveSample("luminance1", "", "250px")}}

The opacity of a luminance mask is determined by the `R`, `G`, `B`, and `A` values of an {{glossary("RGB")}} color using the formula:

`((0.2125 * R) + (0.7154 * G) + (0.0721 * B)) * A`

For example, the newest {{cssxref("named-color")}} is `rebeccapurple`, which is `#663399`. While one might assume the lightness might be equivalent to the L of the `hsl()` color function, it's not that simple. The value `#663399` is equivalent to `rgb(40% 20% 60% / 1)` and `hsl(270 50% 40% / 1)`, but the brightness value is `27.134%`, not `40%`.

`((0.2125 * 0.4) + (0.7154 * 0.2) + (0.0721 * 0.6)) * 1 = 0.27134`

White has a brightness value of `100%`.

`((0.2125 * 1) + (0.7154 * 1) + (0.0721 * 1)) * 1 = 1`

Black's brightness is `0%`.

`((0.2125 * 0) + (0.7154 * 0) + (0.0721 * 0)) * 1 = 0`

We'll demonstrate this by adding white (`rgb(100% 100% 100%)`) with a lightness of `100%` at `27.234%` opacity to a `rebeccapurple`, `white`, and `black` linear gradient, which we'll then use to mask our image. This white resolves to the same opacity value:

`((0.2125 * 1) + (0.7154 * 1) + (0.0721 * 1)) * 0.27134 = 0.27134`

```css live-sample___luminance2
.applied-mask {
  mask-image: repeating-linear-gradient(
    to bottom left,
    rebeccapurple 0 20px,
    rgb(100% 100% 100% / 0.27134) 20px 40px,
    black 40px 45px,
    white 45px 50px
  );
  mask-mode: luminance;
}
.mask-source {
  background: repeating-linear-gradient(
    to bottom left,
    rebeccapurple 0 20px,
    rgb(100% 100% 100% / 0.27134) 20px 40px,
    black 40px 45px,
    white 45px 50px
  );
}
```

```css hidden live-sample___luminance2 live-sample___luminance3
:has(:checked) .applied-mask {
  mask-mode: alpha;
}
```

```html hidden live-sample___luminance2   live-sample___luminance3
<label><input type="checkbox" /><code>mask-mode: alpha;</code></label>
```

The areas with a `white` mask are fully opaque. The areas with a `black` mask are fully transparent. The areas with a `rebeccapurple` mask and the areas with a `27.1234%` opaque white mask are both `27.1234%` opaque.

{{EmbedLiveSample("luminance2", "", "250px")}}

If you toggle the `mask-mode` to `alpha`, the color of the gradient no longer matters. The entire element will be opaque except the areas covered by the semi-opaque white.

The `mask-mode` property enables using raster images without alpha transparency, such as JPEGs, as mask images. A JPEG is made up of opaque pixels. Using a JPEG as a mask with its default `alpha` mask mode would hide the entire element. The `luminance` value of `mask-mode`, on the other hand, clips the element where the mask is black (has no lightness), is fully opaque where the mask is opaque white (100% lightness), with other areas being semi-transparent based on the lightness of the mask area masking it.

In this example, we have a white moon against a black night sky.

```css live-sample___luminance3
.applied-mask {
  mask-image: url(https://mdn.github.io/shared-assets/images/examples/moon.jpg);
  mask-mode: luminance;
  mask-size: 220px;
}
.mask-source {
  background: url(https://mdn.github.io/shared-assets/images/examples/moon.jpg);
  background-size: 220px;
}
```

The element is clipped and not visible where the sky is black. The image is most visible where the moon is at it's lightest.

{{EmbedLiveSample("luminance3", "", "250px")}}

In this case, if you toggle the `mask-mode` to `alpha`, the entire element will be visible as the entire mask is opaque.

## SVG `<mask>` as mask source

A mask can be any type of CSS {{cssxref("image")}} or a `<mask-source>`. A `<mask-source>` is a {{cssxref("url_value", "&lt;url&gt;")}} reference to an SVG {{SVGElement("mask")}} element. This is similar to clipping with the CSS {{cssxref("clip-path")}} property, in which case the "mask" is an SVG {{SVGElement("clipPath")}} element instead (with `clip-path`, the luminance of the path doesn't matter).

In this example, we define an SVG with a `<mask>` element, an identical {{SVGElement("clipPath")}} element, and an identical {{SVGElement("path")}} element so you can view the mask and clip path source.

```html live-sample___svg1
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag"
  class="applied-mask" />
<svg class="mask-source">
  <mask id="mask-heart">
    <path
      d="M20,70 A40,40,0,0,1,100,70 A40,40,0,0,1,180,70 Q180,130,100,190 Q20,130,20,70 Z"
      fill="rgb(255 0 0 / 0.5)"
      stroke="rgb(255 255 255 / 1)"
      stroke-width="20" />
  </mask>
  <clippath id="clip-heart">
    <path
      d="M20,70 A40,40,0,0,1,100,70 A40,40,0,0,1,180,70 Q180,130,100,190 Q20,130,20,70 Z"
      fill="rgb(255 0 0 / 0.5)"
      stroke="rgb(255 255 255 / 1)"
      stroke-width="20" />
  </clippath>
  <path
    d="M20,70 A40,40,0,0,1,100,70 A40,40,0,0,1,180,70 Q180,130,100,190 Q20,130,20,70 Z"
    fill="rgb(255 0 0 / 0.5)"
    stroke="rgb(255 255 255 / 1)"
    stroke-width="20" />
</svg>
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag"
  class="applied-clip" />
```

```css live-sample___svg1
.applied-mask {
  mask-image: url(#mask-heart);
}
.applied-clip {
  clip-path: url(#clip-heart);
}
```

```css hidden live-sample___svg1
:has(:checked) .applied-mask {
  mask-mode: alpha;
}
body {
  flex-flow: row wrap;
}
```

```html hidden live-sample___svg1
<label><input type="checkbox" /><code>mask-mode: alpha;</code></label>
```

Because the image source is a `<mask>`, and the mask has neither the `mask-type` CSS property nor the `mask-type` SVG attribute set, the `mask-type` defaults to `alpha`, so the default of `mask-mode: match-source` resolves to `luminance`. This is because, for mask sources that are SVG {{svgelement("mask")}} elements, the `mask-type` defaults to `luminance` unless the {{svgattr("mask-type")}} attribute is explicitly set to `alpha`.

{{EmbedLiveSample("svg1", "", "300px")}}

As we haven't set the `mask-type` attribute or CSS property on our mask, the `mask-mode` property default of `match-source` resolves to `luminance`. Toggle the checkbox to set the `mask-mode` value to `alpha` or allow it to default to `match-source`.

This example also demonstrated the difference between masking and clipping in CSS. You'll note that luminance and alpha-transparency are relevant to masking but not to clipping. Masking can be used to control the opacity of an element, while clipping shows everything inside the clipping path and fully hides the parts of the element outside the clip path. Clipped areas are completely invisible, whereas masked areas can be partially or fully visible.

If all you need are shapes, clipping may suffice. But if you need fading, variable opacity, or even control of position and size (which we'll discuss in a separate guide), masking is more suitable.

## See also

- [Introduction to CSS clipping](/en-US/docs/Web/CSS/CSS_masking/Clipping)
- [CSS `mask` properties](/en-US/docs/Web/CSS/CSS_masking/Mask_properties)
- [Declaring multiple masks](/en-US/docs/Web/CSS/CSS_masking/Multiple_masks)
- [CSS masking](/en-US/docs/Web/CSS/CSS_masking) module
