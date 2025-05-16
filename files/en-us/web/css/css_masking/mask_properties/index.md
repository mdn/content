---
title: CSS mask properties
slug: Web/CSS/CSS_masking/Mask_properties
page-type: guide
---

{{CSSRef}}

CSS masking is a technique that enables you to define visible portions of an element by applying a mask, which selectively reveals or hides parts of the element based on the alpha channels, and optionally colors, of applied mask image or images. These mask images can be gradients, images, or SVG sources. The [introductory guide to masking](/en-US/docs/Web/CSS/CSS_masking) introduces the different types of mask images and their modes.

In CSS, masks are used to hide and partially hide element areas. CSS masks are the opposite of mask worn at masquerade balls where the wearer's face is hidden wherever the mask is opaque. In CSS, the mask areas that are fully opaque reveal the element while transparent areas hide the element.

Each mask layers consists of a {{cssxref("mask-image")}}, which is [positioned](#XXX) relative to an origin box. The mask images can be [sized](#XXX), [repeated](#XXX), and [clipped](#XXX). In cases where multiple mask images are declared, the way the [mask layers are composited](#XXX), or combined, can be set. This guide explores these CSS masking and the `mask` shorthand component properties, with explanations and examples.

- [Mask layers and the `mask-image` property](#mask_layers_and_the_mask-image_property)
- Mask
- Sizing
- Repeating
- Positioning
- Clipping
- Compositing
-

## Mask layers and the `mask-image` property

CSS masks are composed of one or more mask layers. The minimum required to create a layer is a {{cssxref("mask-image")}} value with a value other than `none`. A mask layer is created for every value in the comma separated list of `mask-image` values, whether the value is a mask source or the keyword `none`. These layers are then composited together to create the final visual mask on the element.

A mask can be defined using [CSS gradients](/en-US/docs/Web/CSS/CSS_images/Using_CSS_gradients), [raster images](/en-US/docs/Web/CSS/CSS_masking/Masking#with_impoorted_images) (such as PNGs), and SVG {{svgelment("mask")}} elements. The keyword `none` within a list of mask sources creates a mask layer. However, if `none` is the only value of the `mask-image` property, no masking occurs.

```css
.masked-element {
  mask-image:
    url(alphaImage.png), linear-gradient(to right, black, transparent),
    radial-gradient(circle, white 50%, transparent 75%), none,
    url(#mask-element);
}
```

This declaration creates five mask layers, applying four mask images to the `.masked-element`element:

The first mask layer, url(alphaImage.png), defines an external image file. The opaque parts of this image will make the corresponding parts of the element visible, while the transparent or semi-transparent parts will make them invisible or partially visible.

The `linear-gradient(to right, black, transparent)` is the second mask layer and `radial-gradient(circle, white 50%, transparent 75%)` is the third.

The fourth mask layer has `none` declared, meaning this layer creates no masking effect.

. Each comma-separated value in the `mask-image` property defined an independent mask layer. Other mask properties, like {{cssxref("mask-size")}}, could also be applied. If that property also have five comma-separated value,

In this example,

> [!NOTE]
> All examples with be using the following image as the underlying element upon which masks will be applied:
>
> <img src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg" alt="Pride flag" />:

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
