---
title: CSS mask properties
slug: Web/CSS/CSS_masking/Multiple_masks
page-type: guide
---

{{CSSRef}}

CSS masking is a technique that enables you to define visible portions of an element by applying a mask, which selectively reveals or hides parts of the element based on the alpha channels, and optionally colors, of applied mask image or images. In this guide we discuss declaring multiple mask images using [the `mask-image` property](#the_mask-image_property) and [the `mask` shorthand](#the-mask-shorthand).

When including multiple mask images, you can define the way the [mask layers are composited](#the_mask-composite_property), or combined. While each mask image is [positioned](/en-US/docs/Web/CSS/CSS_masking/Mask_properties#the_mask-position_property) relative to an [origin](/en-US/docs/Web/CSS/CSS_masking/Mask_properties#the_mask-origin_property) box, and can be [sized](/en-US/docs/Web/CSS/CSS_masking/Mask_properties#the_mask-size_property), [repeated](/en-US/docs/Web/CSS/CSS_masking/Mask_properties#the_mask-repeat_property), and [clipped](/en-US/docs/Web/CSS/CSS_masking/Mask_properties#the_mask-clip_property), those features are described in the [masking properties guide](/en-US/docs/Web/CSS/CSS_masking/Mask_properties). This guide is focused on the syntax for multiple mask images.

## CSS masks

In CSS, masks are used to hide and partially hide element areas. CSS masks are the opposite of mask worn at masquerade balls where the wearer's face is hidden wherever the mask is opaque. In CSS, the mask areas that are fully opaque reveal the element while transparent areas hide the element.

Each mask layers consists of a {{cssxref("mask-image")}}. These mask images can be gradients, images, or SVG sources. The [introductory guide to masking](/en-US/docs/Web/CSS/CSS_masking) introduces the different types of mask images and their modes.

## The `mask-image` property

CSS masks are composed of one or more mask images defined using the {{cssxref("mask-image")}} property with a value other than `none`. This property is analogous to the {{cssxref("background-image")}} property. Each mask value is defined using a [CSS gradient](/en-US/docs/Web/CSS/CSS_images/Using_CSS_gradients), a [raster image](/en-US/docs/Web/CSS/CSS_masking/Masking#with_impoorted_images) (such as PNGs), or an SVG {{svgelment("mask")}} element.

```css
.gradient-mask {
  mask-image: linear-gradient(to right, black, transparent);
}

.raster-mask {
  mask-image: url(alphaImage.png);
}

.mask-element-mask {
  mask-image: url(#svg-mask);
}
```

Just as with the `background-image` property, to include multiple mask images, the image values are separated by a comma.

```css
.multiple-gradient-mask {
  mask-image:
    linear-gradient(to right, black, transparent),
    radial-gradient(circle, white 50%, transparent 75%);
}
```

## Mask layers and the `none` keyword

CSS masks are composed of one or more mask layers.
Each mask image in a multiple image declaration creates a mask layers. Of the previous examples, all the elements have one mask layer, except for any `multiple-gradient-mask` elements, which have two.
The minimum required to create a layer is a {{cssxref("mask-image")}} value with one value that is not `none`.

A mask layer is created for every value in the comma separated list of `mask-image` values, whether the value is a mask source or the keyword `none`. These layers are then composited together to create the final visual mask on the element.

The keyword `none` within a list of mask sources creates a mask layer, albeit a transparent black image layer. Any elements with the class `masked-element` will have five mask layers:

```css
.masked-element {
  mask-image:
    url(alphaImage.png), linear-gradient(to right, black, transparent),
    radial-gradient(circle, white 50%, transparent 75%), none, url(#svg-mask);
}
```

If a value in the comma separated list of values is an empty image, fails to download, references a `<mask>` element that doesn't exist, or otherwise cannot be displayed, it still counts as a mask image layer, rendering a transparent black mask image that has no visual effect.

If `none` is the only value of the `mask-image` property, no masking occurs.

```css
.no-masks {
  mask-image: none;
}
```

A computed value of other than `none` creates a [CSS stacking context](/en-US/docs/Web/CSS/CSS_positioned_layout/Stacking_context).

## The `mask` shorthand

The mask images can be declared using the `mask-image` property or with the {{cssxref("mask")}} shorthand. The `masked-element` example could also have been written as:

```css
.masked-element {
  mask:
    url(alphaImage.png), linear-gradient(to right, black, transparent),
    radial-gradient(circle, white 50%, transparent 75%), none, url(#svg-mask);
}
```

This declaration also creates five mask layers, applying four mask images to the `.masked-element`element. However, this declaration sets all the other properties that make up the `mask` shorthand, as well as all the `mask-border-*` properties, to their `initial` value. The `mask` declaration implicitly sets the following:

```css
mask-mode: match-source;
mask-position: 0% 0%;
mask-size: auto;
mask-repeat: repeat;
mask-origin: border-box;
mask-clip: border-box;
mask-composite: add;

mask-border-source: none;
mask-border-mode: alpha;
mask-border-outset: 0;
mask-border-repeat: stretch;
mask-border-slice: 0;
mask-border-width: auto;
```

### Component properties

The `mask` property takes as it's value a comma-separated list of mask layers. In addition to the `mask-image` value, which may be set to `none`, the other component properties include:

- `mask-mode`

  - : The {{cssxref("mask-mode")}} property sets the mode of each mask layer to either `alpha` or `luminance`, or allow it to default to the source's mode by setting the value to `match-source`. If we don't explicitly set the `mask-mode` property, it will default to `match-source` for each layer.

- `mask-position`

  - : The {{cssxref("mask-position")}} property sets the initial position of the mask image relative to the mask layer's origin box, defined by [the `mask-origin` property](#mask-origin). The value is one, two, or four {{cssxref("&lt;position&gt;")}} values. The property is analogous to the {{cssxref("background-position")}} property and syntax follows the [`background-position`'s `<position>` syntax](/en-US/docs/Web/CSS/background-position#position). The default of `0% 0%` positions the top-left corner of the mask at the top-left corner of the mask origin box.

- `mask-origin`

  - : The {{cssxref("mask-origin")}} property specifies the _mask positioning area_, which is the mask origin box area within which a mask image is positioned. For example, if the `mask-position` is `top left`, this property defines whether that is relative to the border's outer edge, the padding's outer edge, or the content's outer edge. The `mask-origin` property is analogous to the {{cssxref("background-origin")}} property.

- `mask-clip`

  - : The {{cssxref("mask-clip")}} property determines the area the element which will be affected by a mask. It is analogous to the {{cssxref("background-clip")}} property. The `mask-clip` property defines whether the mask painting area, or the area affected by the mask, is the border, padding, or content box, restricting the painted content of the element to this area. If the mask layer's {{cssxref("mask-image")}} source is an SVG `<mask>` element, the `mask-clip` property has no affect.

- `mask-size`

  - : The {{cssxref("mask-size")}} property is used to size mask layers. This property is analogous to the {{cssxref("background-size")}} property. The value is either the `cover` or `contain` keyword, one length, percentage, or the keyword `auto`, or two space-separated values composed of lengths, percentages or the keyword `auto`.

- `mask-repeat`

  - : The {{cssxref("mask-repeat")}} property determines how the mask layer image is tiled after it has been sized and positioned. It is analogous to the {{cssxref("background-repeat")}} property.

- `mask-composite`

  - : The {{cssxref("mask-composite")}} property defines how a mask is combined with the mask layers below it. Each mask layer is either added to, subtract from, include with or excluded from the previously composited mask layers below it. Similar to `mask-mode`, there is no analogous `background-*` property.

To learn more about these individual properties, see [CSS mask properties](/en-US/docs/Web/CSS/CSS_masking/Mask_properties).

### Layer syntax

The `mask` property takes as it's value a comma-separated list of mask layers. All the components are optional in each layer, remembering if the `mask-image` value is omitted it defaults to a transparent black image.

The syntax is:

`<image> <position> / <size> <repeat> <origin> <clip> <composite> <mode>`

For the most part, the order of the properties is flexible, but there are a few quirks and exceptions.

The `mask-origin` and `mask-clip` values are similar. Both accept [`<geometry-box>`](/en-US/docs/Web/CSS/box-edge#geometry-box) values, with `mask-clip` also supporting `no-clip`. If one `<geometry-box>` value and the `no-clip` keyword are present then the `<geometry-box>` sets `mask-origin` value and `mask-clip` is set to `no-clip`. In this case the order doesn't matter. If only one `<geometry-box>` value is present (and there is no `no-clip`), but the `mask-origin` and `mask-clip` components are set to that value. As there is only one value, no order matters here either. The order matters only if two `<geometry-box>` values are present; in this case, the first `<geometry-box>` sets the `mask-origin` component and the second `<geometry-box>` value is the `mask-clip` component.

```css
mask:
  url(star.svg) bottom 2em right 4em / auto 2vw no-repeat padding-box
    content-box luminance,
  url(circle.svg) 100px 100px / 50% repeat-x border-box padding-box alpha;
```

The other properties that are very similar are `mask-size` and a `mask-position`. If only one pair of `<length-percentage>` values are present, they will set the `mask-position` property, and the `mask-size` will be `auto`. If a layer includes both a `mask-size` and a `mask-position`, the `mask-size` property value must come after the `mask-position` property value and the values must be separated by a forward slash (`/`). The slash is required even if the `mask-size` is set to a value that is not a valid `mask-position` value.

```css example-bad
mask: url(star.svg) 10px 10px cover;
mask: url(star.svg) top right 100px 100px;
```

```css example-good
mask: url(star.svg) 10px 10px / cover;
mask: url(star.svg) top 100px right 100px;
mask: url(star.svg) top right / 100px 100px;
```

It's important to include the slash! Including both a size and position in a mask layer without including the slash between the two will invalidate the entire declaration.

## See also

- [Introduction to CSS masking](/en-US/docs/Web/CSS/CSS_masking/Masking)
- [CSS mask properties](/en-US/docs/Web/CSS/CSS_masking/Mask_properties)
- [Introduction to CSS clipping](/en-US/docs/Web/CSS/CSS_masking/Clipping)
- [CSS masking](/en-US/docs/Web/CSS/CSS_masking) module
