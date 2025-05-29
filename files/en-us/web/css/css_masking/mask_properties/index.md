---
title: CSS mask properties
slug: Web/CSS/CSS_masking/Mask_properties
page-type: guide
---

{{CSSRef}}

CSS masking is a technique that enables you to define visible portions of an element by applying a mask, which selectively reveals or hides parts of the element based on the alpha channels, and optionally colors, of applied mask image or images. These mask images can be gradients, images, or SVG sources. The [introductory guide to masking](/en-US/docs/Web/CSS/CSS_masking) introduces the different types of mask images and their modes.

In CSS, masks are used to hide and partially hide element areas. CSS masks are the opposite of mask worn at masquerade balls where the wearer's face is hidden wherever the mask is opaque. In CSS, the mask areas that are fully opaque reveal the element while transparent areas hide the element.

Each mask layers consists of a {{cssxref("mask-image")}}, which is [positioned](#the_mask-position_property) relative to an [origin](#the_mask-origin_property) box. The mask images can be [sized](#the_mask-size_property), [repeated](#the_mask-repeat_property), and [clipped](#the_mask-clip_property). In cases where multiple mask images are declared, the way the [mask layers are composited](#the_mask-composite_property), or combined, can be set. This guide explores these CSS masking and the {{cssxref("mask")}} shorthand component properties, with explanations and examples.

## Mask layers and the `mask-image` property

CSS masks are composed of one or more mask layers. The minimum required to create a layer is a {{cssxref("mask-image")}} value with a value other than `none`. This property analogous to the {{cssxref("background-image")}} property. A mask layer is created for every value in the comma separated list of `mask-image` values, whether the value is a mask source or the keyword `none`. These layers are then composited together to create the final visual mask on the element.

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

The {{cssxref("mask-mode")}} property can be used to set the mode of each mask layer to either `alpha` or `luminance`, or allow it to default to the source's mode by setting the value to `match-source`, which is the default. While most `mask-*` properties have an analogous `background-*` property, such as the `mask-image`to the {{cssxref("background-image")}} property, `mask-mode` property (and [the `mask-composite` property](#the_mask-composite_property)) has no property in the {{cssxref("background")}} shorthand that is analogous.

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

```css hidden live-sample___mode live-sample___position live-sample___clip live-sample___origin live-sample___repeat live-sample___size
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

In the previous example, we set the {{cssxref("mask-mode")}} property to `alpha` or `luminance`. Neither of these is the default value. Rather, `match-source`, which sets the mask-mode to match the mask type, is the default. Every mask is a `alpha` mask except masks where the mask source is an SVG {{svgelement("mask")}} element, in which case the {{cssxref("mask-type")}} property defaults to the value of the {{cssxref("mask-type")}} property, if present, or the SVG {{svgAttr("mask-type")}} attribute if present, or `luminance` if the neither the property nor attribute are explicitly set on the `<mask>` element itself.

Continuing with the `masked-element` example, if we don't explicitly set the `mask-mode` property, it will default to `match-source` for each layer, as if we had set the following:

```css
.masked-element {
  mask-image:
    url(alphaImage.png), linear-gradient(to right, black, transparent),
    radial-gradient(circle, white 50%, transparent 75%), none, url(#svg-mask);
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
  mask-image:
    url(alphaImage.png), linear-gradient(to right, black, transparent),
    radial-gradient(circle, white 50%, transparent 75%), none, url(#svg-mask);
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

## The `mask-position` property

The {{cssxref("mask-position")}} property sets the initial position of the mask image relative to the mask layer's origin box, defined by [the `mask-origin` property](#the_mask-origin_property). It is analogous to the {{cssxref("background-position")}} property.

The value is one, two, or four {{cssxref("&lt;position&gt;")}} values. The value includes one to two relative or absolute offsets. When a pair of {{cssxref("length-percentage")}} offsets is included, you can optionally include two keywords defining the origin sides for those offsets. If the origin sides are not included, the position originates from the top left of the mask origin box. The syntax follows the [`background-position`'s `<position>` syntax](/en-US/docs/Web/CSS/background-position#position). When offsetting using percentage values, the mask's dimension is subtracted from the element's dimension, just as is done with [percentage offsets with `background-position`](/en-US/docs/Web/CSS/background-position#regarding_percentages).

The `mask-position` property defines only the initial position of the mask image. By "initial position", if the [mask repeats](#the_mask-repeat_property), the browser places the first mask image in the position defined by the `mask-position` property, thus defining the placement of the mask repetitions.

For example, if we set the position to `bottom right`, the first mask will be placed at the bottom right edge of the mask origin box, with the repeating masks positioned against the mask's top and left.

```html hidden live-sample___position
<div>
  <img
    src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
    alt="Pride flag" />
</div>
```

```css live-sample___position
img {
  mask-image: url(https://mdn.github.io/shared-assets/images/examples/mask-star.svg);
  mask-position: bottom right;
}
```

{{EmbedLiveSample("position", "", "250px")}}

The first star to be placed is the one on the bottom right, with the repeated stars above and to the left. Because of this positioning, the initial star is not clipped, but the top-most and left-most stars are.

Continuing with the `masked-element` example, if we don't explicitly set the `mask-position` property, it will default to `0% 0%` for each layer, with the top-left corner of the mask abutting the top-left corner of the mask origin box, as if we had set the following:

```css
.masked-element {
  mask-image:
    url(alphaImage.png), linear-gradient(to right, black, transparent),
    radial-gradient(circle, white 50%, transparent 75%), none, url(#svg-mask);
  mask-mode: match-source;
  mask-position: 0% 0%;
}
```

or, expanding on the example using the `mask` shorthand:

```css
.masked-element {
  mask:
    url(alphaImage.png) 0% 0% match-source,
    linear-gradient(to right, black, transparent) 0% 0% match-source,
    radial-gradient(circle, white 50%, transparent 75%) 0% 0% match-source,
    none 0% 0% match-source,
    url(#svg-mask) 0% 0% match-source;
}
```

## The `mask-origin` property

The {{cssxref("mask-origin")}} property specifies the _mask positioning area_, which is the mask origin box area within which a mask image is positioned. It is analogous to the {{cssxref("background-origin")}} property.

HTML elements can have masks contained within their content border box, padding box, or content box. The `mask-position` is relative to this origin box.

```html hidden live-sample___origin
<div class="border-box">
  <img
    src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
    alt="Pride flag" />
</div>
<fieldset>
  <legend>Set the <code>mask-origin</code> value</legend>
  <label
    ><input type="radio" name="origin" id="border-box" checked />
    border-box</label
  >
  <label
    ><input type="radio" name="origin" id="padding-box" /> padding-box</label
  >
  <label
    ><input type="radio" name="origin" id="content-box" /> content-box</label
  >
</fieldset>
```

```css hidden live-sample___origin
div {
  all: unset;
}
legend {
  align-self: baseline;
}
```

Expanding on the previous `mask-position` example where we positioned the mask in the bottom right corner, you'll note the difference this property can make on elements with large borders and padding. We've added a green background color to enable seeing the star masking on the padding area.

```css live-sample___origin
img {
  mask-image: url(https://mdn.github.io/shared-assets/images/examples/mask-star.svg);
  mask-position: bottom right;
  padding: 15px;
  border: 15px solid;
  background-color: green;
}
:has(#border-box:checked) img {
  mask-origin: border-box;
}
:has(#padding-box:checked) img {
  mask-origin: padding-box;
}
:has(#content-box:checked) img {
  mask-origin: content-box;
}
```

{{EmbedLiveSample("origin", "", "450px")}}

You can change the value of the `mask-origin` property.

The default value is `border-box`. With this value, the initial mask is placed at the borders bottom right edge and is not clipped. When the initial mask is placed at the outer or inner edge of the padding, there is room below it and to the right; these repeating masks are clipped.

Had we had no border and no padding, `border-box`, `padding-box`, and `content-box` would have rendered identically.

Continuing with the `masked-element` example, if we don't explicitly set the `mask-origin` property, it will default to `border-box` for each layer, as if we had set the following:

```css
.masked-element {
  mask-image:
    url(alphaImage.png), linear-gradient(to right, black, transparent),
    radial-gradient(circle, white 50%, transparent 75%), none, url(#svg-mask);
  mask-mode: match-source;
  mask-position: 0% 0%;
  mask-origin: border-box;
}
```

or, expanding on the example using the `mask` shorthand:

```css
.masked-element {
  mask:
    url(alphaImage.png) 0% 0% match-source,
    linear-gradient(to right, black, transparent) 0% 0% match-source,
    radial-gradient(circle, white 50%, transparent 75%) 0% 0% match-source,
    none 0% 0% match-source,
    url(#svg-mask) 0% 0% match-source;
}
```

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

The {{cssxref("mask-clip")}} property determines the area the element which will be affected by a mask. It is analogous to the {{cssxref("background-clip")}} property.

{{EmbedLiveSample("clip", "", "250px")}}

Continuing with the `masked-element` example, if we don't explicitly set the `mask-origin` property, it will default to `border-box` for each layer, as if we had set the following:

For mask layer images that do not reference an SVG {{svgelement("mask")}} element, the `mask-clip` property defines whether the mask painting area, or the area affected by the mask, is the border, padding, or content box. The painted content of the element will be restricted to this area.

Setting the `mask-clip` and `mask-origin` to different values can cause the mask layer image to be clipped. For example, If an element's has a border and padding, if `mask-clip` is set to `content-box` while `mask-origin` is set to `border-box`, and the `mask-position` is set to the `top left` edge, the mask layer image will be clipped at the top-left edge.

Generally, you will want the mask-clip to be the same as the mask origin. In the `mask` shorthand, if only one [`<geometry-box>`](/en-US/docs/Web/CSS/clip-path#geometry-box) value is given, it sets both the `mask-origin` and `mask-clip` property values. If two `<geometry-box>` values are present, the first defines the `mask-origin` and the second defines the `mask-clip`. The `no-clip` value sets the painted content to not be clipped.

When the mask layer's {{cssxref("mask-image")}} source is a `<mask>`, the `mask-clip` property has no affect. Rather, the `<mask>` element's {{svgAttr("x")}}, {{svgAttr("y")}}, {{svgAttr("width")}}, {{svgAttr("height")}}, and {{svgAttr("maskUnits")}} attributes determine the mask painting area.

## The `mask-size` property

The {{cssxref("mask-size")}} property is used to size mask layers. This property is analogous to the {{cssxref("background-size")}} property; taking the same values.

There are three ways to declare a `mask-size`: one `cover` or `contain` keyword, one length, percentage, or `auto`, or two lengths, percentages or the keyword `auto`. All these methods maintain the underlying {{glossary("aspect ratio")}} of the mask image except if you declare a two-value length-percentage value that distorts the mask image. When two values are specified, the first defines the mask width and the second defines its height. When one value is specified, it defines only the mask width, with the height defaulting to `auto`, which maintains the aspect ratio.

{{EmbedLiveSample("size", "", "250px")}}

The default value of `mask-size` is `auto`, rendering the mask at its {{glossary("intrinsic size")}}, the size at which the mask would be displayed if no CSS were applied. In the case with [CSS gradients](/en-US/docs/Web/CSS/gradient), which has no intrinsic dimensions and no intrinsic proportion, the default `auto` is the entirety of the mask positioning area as set by [the `mask-origin` property](#the_mask-origin_property), which defaults to `border-box`.

Continuing with the `masked-element` example, if we don't explicitly set the `mask-size` property, it will default to `auto` for each layer, as if we had set the following:

```css
.masked-element {
  mask-mode: auto;
}
```

or, expanding on the example using the `mask` shorthand, with the `mask-size` component going after the `mask-position` value, separated by a forward slash (/):

The rendered size of the mask image is computed as follows:

- If both components of `mask-size` are specified and are not `auto`, the mask image renders at the specified size.
- If the `mask-size` is `contain` or `cover`, the image is rendered by preserving its aspect ratio at the largest size contained within or covering the mask positioning area. If the image has no intrinsic proportion, such as with gradients, then it is rendered at the size of the mask positioning area.

- If `mask-size` has one `auto` component and one non-`auto` component, which applies to all single-value values, the aspect ratio is maintained if the mask source has an intrinsic proportion. If there are no intrinsic proportions, the `auto` value is assumed to be the dimension of the mask positioning area.

Like with all longhand components of shorthand property, if the {{cssxref("mask")}} shorthand property is set and the value of the `mask-size` property is not defined within any mask layer, the `mask-size` value is reset to its initial value of `auto` for those mask layers.

## The `mask-repeat` property

The {{cssxref("mask-repeat")}} property determines**\_\_**. It is analogous to the {{cssxref("background-repeat")}} property.

Continuing with the `masked-element` example, if we don't explicitly set the `mask-repeat` property, it will default to `repeat` for each layer, as if we had set the following:

```css
.masked-element {
  mask-repeat: repeat;
}
```

or, expanding on the example using the `mask` shorthand:

## The `mask-composite` property

The {{cssxref("mask")}} shorthand includes the {{cssxref("mask-composite")}} property which, in multiple mask declarations. This property defines how the multiple masks interact with each other, or are combined, in creating the final mask effect. Each value in the comma-separated list of values determines whether the browser should `add`, `subtract`, `include` or `exclude` the associated mask layer to or from the mask layers below it. Similar to `mask-mode`, and the other `mask-*` properties, there is no property in the {{cssxref("background")}} shorthand that is analogous.

Continuing with the `masked-element` example, if we don't explicitly set the `mask-composite` property, it will default to `add` for each layer, as if we had set the following:

```css
.masked-element {
  mask-composite: add;
}
```

or, expanding on the example using the `mask` shorthand:

The `mask-composite` property is explored in detail in the [Multiple masks and their interactions](/en-US/docs/Web/CSS/CSS_masking/Multiple_masks) guide.

## See also

- [Introduction to CSS masking](/en-US/docs/Web/CSS/CSS_masking/Masking)
- [Introduction to CSS clipping](/en-US/docs/Web/CSS/CSS_masking/Clipping)
- [CSS masking](/en-US/docs/Web/CSS/CSS_masking) module
