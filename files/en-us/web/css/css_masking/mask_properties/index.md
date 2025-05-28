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
- The `mask-mode` property
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
    radial-gradient(circle, white 50%, transparent 75%), none, url(#svg-mask);
}
```

This declaration creates five mask layers, applying four mask images to the `.masked-element`element.

## The `mask-mode` property

The `mask-mode` property can be used to set the mode of each mask layer to either `alpha` or `luminance`, or allow it to default to the source's mode by setting the value to `match-source`, which is the default.

### Mask types: `alpha` and `luminance`

Each mask is either an `alpha` or a `luminance` mask.

With alpha masks, the alpha-transparency of each mask pixel is important. Wherever the mask is opaque the corresponding parts of the element will be visible. Wherever the transparent is transparent, the corresponding parts of the element will be hidden. Wherever the mask is semi-opaque the element will be equally semi-opaque. The color of the mask doesn't matter; just the alpha-transparency of the colors.

With `luminance` masks, the [brightness of mask's colors](/en-US/docs/Web/CSS/CSS_masking/Masking#alpha_transparency_versus_luminance) along with the alpha channel, determine the opaqueness of the masked areas.

> [!NOTE]
> All examples with be using the following image as the underlying element upon which masks will be applied:
>
> <img src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg" alt="Pride flag" />

This example demonstrates the difference between `alpha` and `luminance` masks. The masks are the same, but in the `alpha` mask, only the alpha-transparency of the gradient mask colors matter. In the `luminance` example, the R, G, B, and A all matter.

```html hidden
<div class="alpha">
  <img
    src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
    alt="Pride flag" />
</div>
<div class="luminance">
  <img
    src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
    alt="Pride flag" />
</div>
<div class="gradient"></div>
```

```css hidden
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

### The `mask-mode` default value: `match-source`

In the `masked-element` example, if we don't explicitly set the `mask-mode` property, it will default to `match-source` for each layer, as if we had set the following:

```css
.masked-element {
  mask-mode: match-source;
}
```

The first mask layer, `url(alphaImage.png)`, defined an external image file. In this case, the `mask-mode` resolves to `alpha`, with the opaque parts of this image making the corresponding parts of the element visible, while the transparent or semi-transparent parts are invisible or partially visible. If the `mask-mode` property was declared and its first or only value was `luminance`, the [brightness of the colors of the raster image would impact the opaqueness of the masked areas](/en-US/docs/Web/CSS/CSS_masking/Masking#alpha_transparency_versus_luminance).

The `linear-gradient(to right, black, transparent)` is the second mask layer and `radial-gradient(circle, white 50%, transparent 75%)` is the third. The `match-source` value resolves to `alpha` here too, so the masking effect of these layers is determined by the [opaqueness of the gradient mask](/en-US/docs/Web/CSS/CSS_masking/Masking#opaqueness_versus_transparency) by default.

The fourth mask layer has `none` declared, meaning this layer creates no masking effect. As each comma-separated value in the `mask-image` property defines an independent mask layer, the fourth value of any other mask properties is applied to this `none` layer.

The fifth mask layer is comprised of an SVG {{svgelement("mask")}} element that has `svg-mask` as it's [`id`](/en-US/docs/Web/HTML/Reference/Global_attributes/id). While the mask mode of the other layers defaults to `alpha`, the default [mask type of SVG `<mask>` elements](/en-US/docs/Web/CSS/CSS_masking/Masking#svg_mask_as_mask_source) is `luminance`. In other words, the colors that make up the `<mask>` defined what areas of the element are masked.

If we don't declare the `mask-mode` property at all, and allow it default to `match-source` for each mask layer, the result in this `.masked-element` case would resolve to:

```css
.masked-element {
  mask-mode: alpha, alpha, alpha, match-source, luminance;
}
```

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
