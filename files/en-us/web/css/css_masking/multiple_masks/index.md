---
title: Declaring multiple masks
slug: Web/CSS/CSS_masking/Multiple_masks
page-type: guide
---

{{CSSRef}}

CSS masking is a technique that enables you to use images as masks, defining which sections of an element are fully visible or semi-opaque. The CSS mask selectively reveals or hides parts of the element based on the alpha channel and in some cases the brightness of the colors of the applied mask images.

CSS masks are the opposite of masks worn at masquerade balls where the wearer's face is hidden wherever the mask is opaque and visible wherever you can see through the mask. In CSS, the areas where the composited mask layers are fully opaque reveal the element, while transparent areas hide the element.

CSS masks are made up of one or more mask layers. In this guide, we discuss the concept of mask layers and how to declare multiple mask layers using the {{cssxref("mask")}} shorthand property.

## Understanding mask layers

All HTML elements and most SVG elements can have CSS masking applied, with the mask being made of one or more composited mask layers. The number of layers is determined by the number of comma-separated values in the {{cssxref("mask")}} shorthand property or the {{cssxref("mask-image")}} property value (even if a value is `none`).

Each mask layer can contain a [mask image](#the-mask-image-property), positioned relative to the mask's origin box, that can be sized, repeated, and clipped. If you include more than one mask image, you can define the way the mask layers are composited, or combined. (These features are briefly introduced in this guide. For more details and examples, see the [masking properties guide](/en-US/docs/Web/CSS/CSS_masking/Mask_properties).)

### Layer syntax

The `mask` shorthand property takes as its value a comma-separated list of mask layers. The syntax for each layer is:

`<image> <position> / <size> <repeat> <origin> <clip> <composite> <mode>`

All the components are optional in each layer, but if the `mask-image` value is omitted it defaults to a transparent black image, revealing none of the element that layer is masking.

The `mask` shorthand declaration sets values for all the properties that make up the `mask` shorthand, defaulting to their initial value if the component is not declared within a layer. The `mask` property also resets all the `mask-border-*` properties, to their initial value. A `mask` declaration that only includes a `mask-image` value implicitly sets the following:

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

### The `mask-image` property

As long as a comma-separated {{cssxref("mask-image")}} property declaration includes at least one non-`none` value, a mask layer is created for every value in the declaration, even for the `none` values. These mask images can be gradients, images, or SVG sources, defined using a [CSS gradient](/en-US/docs/Web/CSS/CSS_images/Using_CSS_gradients), a [raster image](/en-US/docs/Web/CSS/CSS_masking/Masking#with_impoorted_images) (such as PNGs), or an SVG {{svgelement("mask")}} element. This holds true whether using the `mask-image` property or the `mask` shorthand.

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

The [introductory guide to masking](/en-US/docs/Web/CSS/CSS_masking) introduces the different types of mask images and their modes.

The `mask-image` property is analogous to the {{cssxref("background-image")}} property. Just as with the `background-image` property, to include multiple mask images, the image values are separated by a comma.

```css
.multiple-gradient-mask {
  mask-image:
    linear-gradient(to right, black, transparent),
    radial-gradient(circle, white 50%, transparent 75%);
}
```

Each mask image in a multiple image declaration creates a mask layer. All the examples in this section create one mask layer except the `multiple-gradient-mask` declaration which creates two.

### Mask layers and the `none` keyword

If `none` is the only value of the `mask-image` property, no mask layers are created and no masking occurs.

```css
.no-masks {
  mask-image: none;
}
```

Similarly, when using the `mask` shorthand, if no `mask-image` value is present other than `none`, no masking occurs. If any of the following are declared, no mask layers are created and nothing is hidden:

```css
mask: none;
mask: none 100px 100px no-repeat;
mask: 100px 100px no-repeat;
```

Otherwise, as long as there is a `mask-image` declared that isn't set to `none`, a mask layer is created for every value in the comma separated list of values, even when the mask image is omitted from a value in the comma-separated list or is explicitly set to `none`. In other words, a layer is created for each valid comma-separated values unless the entire property resolves to `none`.

```css
.masked-element {
  mask-image:
    url(alphaImage.png), linear-gradient(to right, black, transparent),
    radial-gradient(circle, white 50%, transparent 75%), none, url(#svg-mask);
}
```

The keyword `none` within a list of mask sources creates a mask layer, albeit a transparent black image layer. Any elements with the class `masked-element` will have five mask layers:

We can also create the layers using the `mask` shorthand:

```css
.masked-element {
  mask:
    url(alphaImage.png), linear-gradient(to right, black, transparent),
    radial-gradient(circle, white 50%, transparent 75%), none, url(#svg-mask);
}
```

If a value in the comma-separated list of values is an empty image, fails to download, references a `<mask>` element that doesn't exist, or otherwise cannot be displayed (or is set to `none`), it still counts as a mask image layer, rendering a transparent black mask image that has no visual effect. If all of the values do this, the element will be fully hidden.

Only if the entire property resolves to `none` does no masking occur; leaving the element fully visible. On the other hand, if there are multiple layers with at least one layer that does not resolve to `none`, the `none` layers don't reveal any part of the element or make any part of the element visible. In this case, the value did not resolve to `none`, so if none of the non-`none` images exist, masking does occur, and the element will be fully hidden.

A computed value other than `none` creates a [CSS stacking context](/en-US/docs/Web/CSS/CSS_positioned_layout/Stacking_context).

### The importance of mask layers

The number of mask layers is important if you are using individual `mask-*` properties after or with more specificity than your `mask` declaration.

The `mask-*` properties include:

- {{cssxref("mask-mode")}}: Sets the mode of each mask layer to either `alpha` or `luminance`, or allows it to default to the source's mode by setting the value to `match-source`. The default is `match-source`.

- {{cssxref("mask-position")}}: Analogous to the {{cssxref("background-position")}} property with syntax that follows the [`background-position`'s `<position>` syntax](/en-US/docs/Web/CSS/background-position#position), it sets the initial position of the mask image relative to the mask layer's origin box, defined by the `mask-origin` property. The value is one, two, or four {{cssxref("&lt;position&gt;")}} values. The default `0% 0%` positions the top-left corner of the mask at the top-left corner of the mask origin box.

- {{cssxref("mask-origin")}}: Analogous to the {{cssxref("background-origin")}} property, it specifies the _mask positioning area_, which is the mask origin box area within which a mask image is positioned. For example, if the `mask-position` is `top left`, this property defines whether that is relative to the border's outer edge, the padding's outer edge, or the content's outer edge.

- {{cssxref("mask-clip")}}: Analogous to the {{cssxref("background-clip")}} property, it determines the area of the element affected by a mask. It defines whether the mask painting area is the border, padding, or content box, restricting the painted content of the element to this area. If the mask layer's {{cssxref("mask-image")}} source is an SVG `<mask>` element, the `mask-clip` property has no effect.

- {{cssxref("mask-size")}}: Analogous to the {{cssxref("background-size")}} property, this is used to size the mask layer. The value is either the `cover` or `contain` keyword, one length, percentage, or the keyword `auto`, or two space-separated values composed of lengths, percentages or the keyword `auto`, defaulting to `auto`.

- {{cssxref("mask-repeat")}}: Analogous to the {{cssxref("background-repeat")}} property, this defines how the mask layer image is tiled after it has been sized and positioned.

- {{cssxref("mask-composite")}}: Defines how a mask is combined with the mask layers below it. Each mask layer is either added to, subtracted from, included with, or excluded from the previously composited mask layers below it. Similar to `mask-mode`, there is no analogous `background-*` property.

Each `mask-*` value in a comma-separated list of `mask` component properties applies to a separate mask layer. As we now know, an element can have multiple mask layers applied and the number of layers is determined by the number of comma-separated values in the `mask-image` or `mask` properties. Each `mask-*` value is matched up with a mask layer, in order. If the number of values in the `mask-*` property is greater than the number of mask layers, any excess values are ignored. If the mask component property has fewer values than the number of mask layers, the `mask-*` values are repeated.

> [!NOTE]
> To learn more about these individual properties, see [CSS mask properties](/en-US/docs/Web/CSS/CSS_masking/Mask_properties).

## Shorthand component property order

For the most part, the order of the properties is flexible, but there are a few quirks and exceptions.

### `mask-origin` and `mask-clip` order

The `mask-origin` value, listed in the syntax as `<origin>`, comes before the `mask-clip` values, listed in the syntax as `<clip>`.

`<image> <position> / <size> <repeat> <origin> <clip> <composite> <mode>`

Both are [`<geometry-box>`](/en-US/docs/Web/CSS/box-edge#geometry-box) values, with `mask-clip` also supporting `no-clip`. Because of this, the order matters when you want to set `mask-clip` to any value other than `no-clip`.

- If one `<geometry-box>` value is present along with the `no-clip` keyword, then the `<geometry-box>` sets the `mask-origin` value and `mask-clip` is set to `no-clip`. In this case, the order didn't matter.

- If only one `<geometry-box>` value is present and there is no `no-clip` keyword, both the `mask-origin` and `mask-clip` components are set to that value. As there is only one value, again the ordering isn't an issue.

- If there are two `<geometry-box>` values are present, the first `<geometry-box>` sets the `mask-origin` component and the second `<geometry-box>` value is the `mask-clip` component value. Here the order is very important.

Setting the incorrect order for the `mask-origin` and `mask-clip` values may effect the appearance, but will not cause the declaration to fail.

### `mask-size` and `mask-position` syntax

You may have noticed a slash between `mask-position` and `mask-size`, listed in the syntax as `<position>` and `<size>`, in the layer syntax. They too accept similar values.

`<image> <position> / <size> <repeat> <origin> <clip> <composite> <mode>`

In this case, the order is very important. If only one or a pair of {{cssxref("length-percentage")}} values are present, that will define the position of the image, not the size. Including both a size and position in a mask layer without including the slash between the two will invalidate the entire declaration.

```css
mask:
  url(star.svg) bottom 2em right 4em / auto 2vw no-repeat padding-box
    content-box luminance,
  url(circle.svg) 100px 100px / 50% repeat-x border-box padding-box alpha;
```

If a single pair of `<length-percentage>` values is present, it sets the `mask-position` property, and the `mask-size` will be `auto`. If a layer includes both a `mask-size` and a `mask-position`, the `mask-size` property value must come after the `mask-position` property value and the values must be separated by a forward slash (`/`). The slash is required even if the `mask-size` is set to a value that is not a valid `mask-position` value.

```css example-bad
mask: url(star.svg) contain;
mask: url(star.svg) 10px 10px cover;
mask: url(star.svg) top right 100px 100px;
```

```css example-good
mask: url(star.svg) 10px 10px / cover;
mask: url(star.svg) top 100px right 100px;
mask: url(star.svg) top right / 100px 100px;
```

To include a `mask-size` in a mask layer using the `mask` shorthand, you must include a `mask-position` value and a slash immediately before it.

> [!WARNING]
> Including both a size and position in a mask layer without including the slash between the two will invalidate the entire declaration.

## See also

- [Introduction to CSS masking](/en-US/docs/Web/CSS/CSS_masking/Masking)
- [CSS mask properties](/en-US/docs/Web/CSS/CSS_masking/Mask_properties)
- [Introduction to CSS clipping](/en-US/docs/Web/CSS/CSS_masking/Clipping)
- [CSS masking](/en-US/docs/Web/CSS/CSS_masking) module
