---
title: CSS mask properties
slug: Web/CSS/CSS_masking/Mask_properties
page-type: guide
---

{{CSSRef}}

CSS masking is a technique that enables you to define visible portions of an element by applying a mask, which selectively reveals or hides parts of the element based on the alpha channels, and optionally colors, of applied mask image or images. These mask images can be gradients, images, or SVG sources. The [introductory guide to masking](/en-US/docs/Web/CSS/CSS_masking) introduces the different types of mask images and their modes.

In CSS, masks are used to hide and partially hide element areas. CSS masks are the opposite of mask worn at masquerade balls where the wearer's face is hidden wherever the mask is opaque. In CSS, the mask areas that are fully opaque reveal the element while transparent areas hide the element.

Each mask layers consists of a {{cssxref("mask-image")}}, which is [positioned](#XXX) relative to an origin box. The mask images can be [sized](#XXX), [repeated](#XXX), and [clipped](#XXX). In cases where multiple mask images are declared, the way the [mask layers are composited](#XXX), or combined, can be set. This guide explores these CSS masking and the `mask` shorthand component properties, with explanations and examples.

- Mask layers and the `mask-image` property
- Mask
- Sizing
- Repeating
- Positioning
- Clipping
- Compositing
-

## Mask layers and the `mask-image` property

CSS masks are composed of one or more mask layers. The minimum required to create a layer is a {{cssxref("mask-image")}} value. A mask layer is created for every value in the comma separated list of `mask-image` values, whether the value is a mask source or the keyword `none`.

Masks can be defined using CSS gradients, raster images (such as PNGs), and SVG {{svgelem("mask")}} elements.

> [!NOTE]
> All examples with be using the following image as the underlying element upon which masks will be applied:
>
> <img src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg" alt="Pride flag" />

## Opaqueness versus transparency

```html hidden live-sample___xxx
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag"
  class="applied-mask" />
<div class="mask-source"></div>
```

```css hidden live-sample___xxx
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

{{EmbedLiveSample("xxx", "", "250px")}}

## See also

- [Introduction to CSS masking](/en-US/docs/Web/CSS/CSS_masking/Masking)
- [Introduction to CSS clipping](/en-US/docs/Web/CSS/CSS_masking/Clipping)
- [CSS masking](/en-US/docs/Web/CSS/CSS_masking) module
