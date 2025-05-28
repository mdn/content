---
title: CSS mask properties
slug: Web/CSS/CSS_masking/Mask_properties
page-type: guide
---

{{CSSRef}}

CSS masking is a technique that enables you to define visible portions of an element by applying a mask, which selectively reveals or hides parts of the element based on the alpha channels, and optionally colors, of applied mask image or images. These mask images can be gradients, images, or SVG sources. The [introductory guide to masking](/en-US/docs/Web/CSS/CSS_masking) introduces the different types of mask images and their modes.

In CSS, masks are used to hide and partially hide element areas. CSS masks are the opposite of mask worn at masquerade balls where the wearer's face is hidden wherever the mask is opaque. In CSS, the mask areas that are fully opaque reveal the element while transparent areas hide the element.

Each mask layers consists of a {{cssxref("mask-image")}}, which is [positioned](#XXX) relative to an origin box. The mask images can be [sized](#XXX), [repeated](#XXX), and [clipped](#XXX). In cases where multiple mask images are declared, the way the [mask layers are composited](#the_mask-composite_property), or combined, can be set. This guide explores these CSS masking and the `mask` shorthand component properties, with explanations and examples.

- [Mask layers and the `mask-image` property](#mask_layers_and_the_mask-image_property)
- [The `mask-mode` property](#the-mask-mode-property)
- Sizing
- Repeating
- Positioning
- Clipping
- [Compositing](#the_mask-composite_property)
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

or, using the {{cssxref("mask")}} shorthand:

```css
.masked-element {
  mask:
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

Two containers contain images, while the last is empty but is included to display the gradient we will be using as our `mask-image`.

```html live-sample___mode
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

```css hidden live-sample___mode
body {
  display: flex;
  gap: 20px;
  padding: 15px;
  background-image: conic-gradient(
    rgb(0 0 0 / 0) 90deg,
    rgb(0 0 0 / 0.05) 90deg 180deg,
    rgb(0 0 0 / 0) 180deg 270deg,
    rgb(0 0 0 / 0.05) 270deg
  );
  background-size: 30px 30px;
}
div,
svg,
img {
  width: 220px;
  aspect-ratio: 1;
}
div {
  border: 1px solid black;
}
```

We declare a [`repeating-linear-gradient`](/en-US/docs/Web/CSS/gradient/repeating-linear-gradient) with red, transparent, and semi-transparent red diagonal stripes. This gradient is used as our mask and, for the last container, as the background image:

```css live-sample___mode
img {
  mask-image: repeating-linear-gradient(
    to bottom right,
    #f00 0 20px,
    #f005 20px 40px,
    transparent 40px 60px
  );
}
.gradient {
  background: repeating-linear-gradient(
    to bottom right,
    #f00 0 20px,
    #f005 20px 40px,
    transparent 40px 60px
  );
}
```

We set different values for the `mask-mode` property for each image:

```css live-sample___mode
.alpha img {
  mask-mode: alpha;
}

.luminance img {
  mask-mode: luminance;
}
```

{{EmbedLiveSample("mode", "", "250px")}}

In the `alpha` case, only the transparency of the gradient's colors matter. Where the gradient is opaque red, the image is opaque. Where the gradient is transparent, the image is hidden. Where the gradient is 50% opaque, the image is 50% opaque. In the `luminance` case, the color's brightness matters! See [Alpha transparency versus luminance](/en-US/docs/Web/CSS/CSS_masking/Masking#alpha_transparency_versus_luminance) to learn about the equation that uses the color's R, G, B, and A channels to determine the opacity of the mask.

### The `mask-mode` default value: `match-source`

In the previous example, we set the `mask-mode` property to `alpha` or `luminance`. Neither of these is the default value. Rather, `match-source`, which sets the mask-mode to match the mask type, is the default. Every mask is a `alpha` mask except masks where the mask source is an SVG {{svgelement("mask")}} element, in which case the {{cssxref("mask-type")}} property defaults to the value of the {{cssxref("mask-type")}} property, if present, or the SVG {{svgAttr("mask-type")}} attribute if present, or `luminance` if the neither the property nor attribute are explicitly set on the `<mask>` element itself.

Continuing with the `masked-element` example, if we don't explicitly set the `mask-mode` property, it will default to `match-source` for each layer, as if we had set the following:

```css
.masked-element {
  mask-mode: match-source;
}
```

or, using the `mask` shorthand:

```css
.masked-element {
  mask:
    url(alphaImage.png) match-source,
    linear-gradient(to right, black, transparent) match-source,
    radial-gradient(circle, white 50%, transparent 75%) match-source,
    none match-source,
    url(#svg-mask) match-source;
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

or, using the `mask` shorthand:

```css
.masked-element {
  mask:
    url(alphaImage.png) alpha,
    linear-gradient(to right, black, transparent) alpha,
    radial-gradient(circle, white 50%, transparent 75%) alpha,
    none match-source,
    url(#svg-mask) luminance;
}
```

## The `mask-size` property

## The `mask-repeat` property

## The `mask-position` property

## The `mask-origin` property

The `mask-origin` property sets the origin of a mask, determining the origin of the `mask-position` property, also known as the _mask positioning area_. For example, if the `mask-position` is `top left`, is that relative to the border's outer edge, the padding's outer edge, or the content's outer edge?

By default, HTML elements have masks their masks positioned relative to the `border-box`, which is the outer edge of the border. Continuing with the `masked-element` example, if we don't explicitly set the `mask-origin` property, it will default to `border-box` for each layer, as if we had set the following:

```css
.masked-element {
  mask-mode: border-box;
}
```

For HTML elements, you can use the `mask-origin` property to set it to `padding-box` or `content-box` as well.

For SVG elements, which don't have the associated CSS layout boxes, a mask can be contained inside the SVG element's fill, stroke, or view box.

## The `mask-clip` property

The `mask-clip` property determines the area the element which will be affected by a mask. It is analogous to the {{cssxref("background-clip")}} property,

Continuing with the `masked-element` example, if we don't explicitly set the `mask-origin` property, it will default to `border-box` for each layer, as if we had set the following:

For mask layer images that do not reference an SVG {{svgelement("mask")}} element, the `mask-clip` property defines whether the mask painting area, or the area affected by the mask, is the border, padding, or content box. The painted content of the element will be restricted to this area.

Setting the `mask-clip` and `mask-origin` to different values can cause the mask layer image to be clipped. For example, If an element's has a border and padding, if `mask-clip` is set to `content-box` while `mask-origin` is set to `border-box`, and the `mask-position` is set to the `top left` edge, the mask layer image will be clipped at the top-left edge.

Generally, you will want the mask-clip to be the same as the mask origin. In the `mask` shorthand, if only one [`<geometry-box>`](/en-US/docs/Web/CSS/clip-path#geometry-box) value is given, it sets both the `mask-origin` and `mask-clip` property values. If two `<geometry-box>` values are present, the first defines the `mask-origin` and the second defines the `mask-clip`. The `no-clip` value sets the painted content to not be clipped.

When the mask layer's {{cssxref("mask-image")}} source is a `<mask>`, the `mask-clip` property has no affect. Rather, the `<mask>` element's {{svgAttr("x")}}, {{svgAttr("y")}}, {{svgAttr("width")}}, {{svgAttr("height")}}, and {{svgAttr("maskUnits")}} attributes determine the mask painting area.

## The `mask-composite` property

The `mask` shorthand includes the {{cssxref("mask-composite")}} property which, in multiple mask declarations. This property defines how the multiple masks interact with each other, or are combined, in creating the final mask effect. Each value in the comma-separated list of values determines whether the browser should `add`, `subtract`, `include` or `exclude` the associated mask layer to or from the mask layers below it. There is no equivalent property for background images.

Continuing with the `masked-element` example, if we don't explicitly set the `mask-composite` property, it will default to `add` for each layer, as if we had set the following:

```css
.masked-element {
  mask-composite: add;
}
```

The `mask-composite` property is explored in detail in the [Multiple masks and their interactions](/en-US/docs/Web/CSS/CSS_masking/Multiple_masks) guide.

## See also

- [Introduction to CSS masking](/en-US/docs/Web/CSS/CSS_masking/Masking)
- [Introduction to CSS clipping](/en-US/docs/Web/CSS/CSS_masking/Clipping)
- [CSS masking](/en-US/docs/Web/CSS/CSS_masking) module
