---
title: Introduction to masking
slug: Web/CSS/CSS_masking/masking
page-type: guide
---

{{CSSRef}}

CSS masking enables you to define visible portions of an element by applying a mask, which selectively hides or reveals parts of the element. This guide explores the `mask` properties, with explanations and examples.

Masking is a CSS technique used to hide portions of an element while revealing others based on a mask image or shape. Masks can be gradients, images, or SVG sources. Unlike CSS clipping, which either fully shows or hides areas of an element based on a shape of a single path, masking allows for nuanced transparency and blending effects based on the alpha transparency and, optionally, luminance of one or more shapes.

## What is masking in CSS?

In CSS, masks can be used to define areas of an element that are visible and other areas that are hidden. Mask layers, defined by one or more {{cssxref("mask-image")}} sources, optionally as part of the {{cssxref("mask")}} shorthand property, determine which areas of the element on which they are applied, are visible at all, and at what opacity.

With alpha masks, the areas of the element where the mask is fully opaque will be visible. Wherever the mask is fully transparent will be fully hidden. Areas of the element that are masked by partially opaque section of a mask will be partially opaque, matching the opacity of the mask applied to it.

With alpha masks, the color of the mask is irrelevant. Only the opacity of the mask matters. In the case of [luminance masks](redxxx), the luminance, or brightness, of the mask, also comes in to play.

Masks can be defined using CSS gradients, raster images (such as PNGs), and SVG {{svgelem("mask")}} elements. Each mask layers consists of a {{cssxref("mask-image")}}, which is positioned relative to an origin box. The mask images can be [sized](redxxx), [repeated](redxxx), and [clipped](redxxx). The way individual mask layers are combined, or "composited", with other mask layers can also be defined.

> [!NOTE]
> All examples with be using the following image as the underlying element upon which masks will be applied:
>
> <img src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg" alt="Pride flag" />

### Opaqueness versus transparency

With alpha masks, the areas of the element that are visible depend on the alpha-transparency of the mask applied to it. Wherever the mask is fully opaque, the element will be visible. At every pixel where the mask is fully transparent will be fully hidden. Areas of the element that are masked by partially opaque section of a mask will be partially opaque, matching the opacity of the mask applied to it.

```html hidden live-sample___gradient1 live-sample___gradient2 live-sample___image1   live-sample___luminance1 live-sample___luminance2 live-sample___luminance3
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag"
  class="applied-mask" />
<div class="mask-source"></div>
```

```css hidden live-sample___gradient1 live-sample___gradient2 live-sample___image1   live-sample___luminance1 live-sample___luminance2 live-sample___luminance3
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
img {
  width: 220px;
  aspect-ratio: 1;
}
```

To demonstrate this, let's look at an example using a conic-gradient as the mask image; setting `mask-image` with a gradient definition.
CSS gradients can be used to create smooth transitions between visible and hidden areas. In this case, the top-right corner of the mask is fully opaque, to top left quadrant is fully transparent, with the bottom half being a smooth transition between opaque and transparent.

```css live-sample___gradient1
.applied-mask {
  mask-image: conic-gradient(rgb(0 0 0 / 1) 90deg, rgba(0 0 0 / 0) 270deg);
}
.mask-source {
  background: conic-gradient(rgb(0 0 0 / 1) 90deg, rgba(0 0 0 / 0) 270deg);
}
```

Note how the element on which the mask is applied has a fully visible top-right corner, an invisible top left quarter, with a bottom half that transitions smoothly from visible to transparent reflecting the visibility of the applied mask image.

{{EmbedLiveSample("gradient1", "", "250px")}}

In this example, we have a striped gradient with fully opaque red, semi-opaque, and fully transparent stripes.

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

Note how the fully opaque mask areas reveal fully opaque element pixels, semi-transparent mask areas create semi-transparency in our elements, and fully transparent mask areas hide the associated element areas completely.

{{EmbedLiveSample("gradient2", "", "250px")}}

The previous two examples used gradients as masks and background images. The mask image can be an external image or an SVG.

In this case we use an external image of an opaque colorful heart with a transparent background.

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

### Alpha transparency versus luminance

We can force the colors of the mask to matter with the {{cssxref("mask-mode")}} property. Here we change the `mask-mode` to from the default of `match-source`, which sets the `mask-mode` to the mask's {{cssxref("mask-type")}}. The `mask-type` defaults to `alpha` for all mask types other than mask sources that are SVG {{svgelement("mask")}} elements.

```css live-sample___luminance1
.applied-mask {
  mask-mode: luminance;
}
```

Using the same mask as in the previous example, you'll note the areas where the mask is **lightest** the element is more opaque. The area where the mask is **darker** is less opaque.

{{EmbedLiveSample("luminance1", "", "250px")}}

The opacity of a luminance mask is determined by the `R`, `G`, `B`, and `A` values of an {{glossary("RGB")}} color using the formula:

`((0.2125 * R) + (0.7154 * G) + (0.0721 * B)) * A`

For example, the newest {{cssxref("named-color")}} is `rebeccapurple`, which is `#663399`. While one might assume the lightness might be equivalent to the L of the `hsl()` color function, it's not that simple. The value `#663399` is the equivalent of `rgb(40% 20% 60% / 1)` and `hsl(270 50% 40% / 1)`.

`((0.2125 * 0.4) + (0.7154 * 0.2) + (0.0721 * 0.6)) * 1 = 0.27134`

White has a value of `100%`.

`((0.2125 * 1) + (0.7154 * 1) + (0.0721 * 1)) * 1 = 1`

Black is `0%`.

`((0.2125 * 0) + (0.7154 * 0) + (0.0721 * 0)) * 1 = 0`

We can `rebeccapurple`, `white`, and `black` with a white (`rgb(100% 100% 100%)`) with a lightness of `100%` at `27.234%` opacity.

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

The areas with a `white` mask are fully opaque. The areas with a `black` mask will be fully transparent. The areas with a `rebeccapurple` mask and a `27.1234%` opaque white mask will both be 27.1234% opaque.

{{EmbedLiveSample("luminance2", "", "250px")}}

If you toggle the `mask-mode` to alpha, the colors will no longer matter. The entire element will be opaque except the areas covered by the semi-opaque white.

The `mask-mode` property enables using raster images without alpha transparency, such as JPEG, as mask images. A JPEG is made of opaque pixels. Using a JPEG as a mask with its default `alpha` mask type value would hide the entire element. The `luminance` value of the `mask-mode`, on the other hand, clips the element where the mask is black (has no lightness), is fully opaque where the mask is opaque white (100% lightness), with other areas being semi-transparent based reflecting the lightness of the mask area masking it.

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

The sky is clipped and not visible where the sky is black. The image is most visible where the moon is at it's lightest.

{{EmbedLiveSample("luminance3", "", "250px")}}

In this case, if you toggle the mask-mode to `alpha`, the entire element will be visible as the entire mask is opaque.

### SVG `<mask>` as mask source

The `mask-type` defaults to `alpha` for all mask types other than mask sources that are SVG {{svgelement("mask")}} elements. In the case of `<mask>`, the `mask-type` defaults to either the value defaults to `luminance` unless the {{svgattr("mask-type")}} attribute is explicitly set to `alpha`.

```html
<svg>
  <mask id="heart">
    <path
      d="M20,70 A40,40,0,0,1,100,70 A40,40,0,0,1,180,70 Q180,130,100,190 Q20,130,20,70 Z"
      fill="none"
      stroke="white"
      stroke-width="20" />
  </mask>
  <svg></svg>
</svg>
```
