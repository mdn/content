---
title: CSS mask properties
slug: Web/CSS/CSS_masking/Mask_properties
page-type: guide
---

{{CSSRef}}

CSS masking is a technique that enables you to define visible portions of an element by applying a mask, which selectively reveals or hides parts of the element based on the alpha channels, and optionally colors, of the applied mask images.

The [introductory guide to masking](/en-US/docs/Web/CSS/CSS_masking) introduces the different types of mask images and their modes. The guide to [declaring multiple masks](/en-US/docs/Web/CSS/CSS_masking/Multiple_masks) discusses the [mask layers](/en-US/docs/Web/CSS/CSS_masking/Multiple_masks#understanding_mask_layers) and the {{cssxref("mask")}} shorthand property, providing a brief introduction to the shorthand's component properties. In this guide, we explore these component properties in greater detail and look at how they interact. We also explain how, in cases where multiple mask images are declared, the [mask layers are composited](#the_mask-composite_property), or combined.

CSS masks are composed of one or more mask layers, with a mask layer created for every value in the comma-separated list of `mask` or `mask-image` values, whether the values are images, mask sources, or the keyword `none`. Every {{cssxref("mask-image")}} is [positioned](#the_mask-position_property) relative to an [origin](#the_mask-origin_property) box. The mask images can be [sized](#the_mask-size_property), [repeated](#the_mask-repeat_property), and [clipped](#the_mask-clip_property), then composited together with previous layers to create the final visual mask on the element.

## The `mask-image` property

The minimum requirement to create a mask is a {{cssxref("mask-image")}} property set to a value other than `none`.
The keyword `none` within a list of mask sources creates a mask layer. However, if `none` is the only value of the `mask-image` property, no masking occurs.

The mask image can be a [CSS gradient](/en-US/docs/Web/CSS/CSS_images/Using_CSS_gradients), an [imported image](/en-US/docs/Web/CSS/CSS_masking/Masking#with_imported_images) (such as a PNG, SVG, etc.), or an SVG {{svgelement("mask")}} element.

In this example, we create five mask layers, including an imported image, two gradients, a layer with no image, and an SVG `<mask>` source as the mask image.

```css
.masked-element {
  mask-image:
    url(alphaImage.png), linear-gradient(to right, black, transparent),
    radial-gradient(circle, white 50%, transparent 75%), none, url(#svg-mask);
}
```

Because one of the mask images is specified as `none`, only four mask images are applied to the `.masked-element` element, while creating five mask layers.

### The importance of `none`

The `none` layer generally has no visual effect (see the [`mask-composite` property](#the_mask-composite_property) for how it impacts the applied mask), but as each value in a comma-separated list of `mask-*` values applies to a separate mask layer, the `none` value serves an important purpose even when it doesn't change the composited mask.

This fourth layer in our five-layer structure will match the fourth value of any other comma-separated `mask-*` property values. As previously mentioned, the number of layers is determined by the number of comma-separated values in the {{cssxref("mask-image")}} property value, even if a value is `none`. Each `mask-*` value is matched up with the `mask-image` values, in order. If the number of values in a `mask-*` property differs from the number of mask layers, any excess values are ignored, or, if the property has fewer values than the number of mask layers, the values are repeated.

If a `mask-*` property has a single value, this value applies to all the layers. If we have five values, the fourth value applies to the `none` layer, with the last value being applied to the `<mask>` source layer. If there are two comma-separated values, the first value will apply to all the odd layers only, including that `<mask>` source layer. For example, each `mask-*` property may have a different number of values:

```css
.masked-element {
  mask-image:
    url(alphaImage.png), linear-gradient(to right, black, transparent),
    radial-gradient(circle, white 50%, transparent 75%), none, url(#svg-mask);
  mask-repeat: repeat-x, repeat-y;
  mask-position:
    center,
    top left,
    bottom right;
}
```

In this case, every odd layer will be repeated along the x-axis while every even layer is repeated along the y-axis. The first and fourth layer images will be centered, while the second and fifth will be positioned in the top left corner. The `none` means the fifth layer's `#svg-mask` image will be repeated along the x-axis starting at the top left corner.

Learn more about [mask layers and the `none` keyword](/en-US/docs/Web/CSS/CSS_masking/Multiple_masks#mask_layers_and_the_none_keyword).

## The `mask-mode` property

The {{cssxref("mask-mode")}} property can be used to set the mode of each mask layer to either `alpha` or `luminance`, or allow it to default to the source's mode by setting the value to `match-source`, which is the default. While most `mask-*` properties have an analogous `background-*` property (`mask-image` is analogous to the {{cssxref("background-image")}} property, for example), `mask-mode` and [`mask-composite`](#the_mask-composite_property) have no analogous {{cssxref("background")}} property.

### Mask types: `alpha` and `luminance`

Each mask is either an `alpha` or a `luminance` mask.

With `alpha` masks, the alpha-transparency of each mask pixel is important. Wherever the mask is opaque, the corresponding parts of the element will be visible. Wherever the mask is transparent, the corresponding parts of the element will be hidden. Wherever the mask is semi-opaque, the element will be equally semi-opaque. The color of the mask doesn't matter, just the alpha-transparency of the colors.

With `luminance` masks, both the [brightness of mask's colors](/en-US/docs/Web/CSS/CSS_masking/Masking#alpha_transparency_versus_luminance) and the alpha channel determine the opaqueness of the masked areas.

> [!NOTE]
> All subsequent examples use the following image as a `background-image` on an element to which masks will be applied:
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

```css hidden live-sample___mode live-sample___position live-sample___position_no-repeat live-sample___clip live-sample___origin live-sample___size live-sample___composite live-sample___composite2 live-sample___composite3
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

{{EmbedLiveSample("mode", "", "270px")}}

In the `alpha` case, only the transparency of the gradient's colors matter. Where the gradient is opaque red, the image is opaque. Where the gradient is transparent, the image is hidden. Where the gradient is 50% opaque, the image is 50% opaque. In the `luminance` case, the color's brightness matters! See [Alpha transparency versus luminance](/en-US/docs/Web/CSS/CSS_masking/Masking#alpha_transparency_versus_luminance) to learn about the equation that uses the color's R, G, B, and A channels to determine the opacity of the mask.

### The `mask-mode` default value: `match-source`

The default value of the `mask-mode` property is `match-source`. This value sets the `mask-mode` to match the mask's mode type. The `match-source` value resolves to `alpha` for every mask except masks where the mask source is an SVG {{svgelement("mask")}} element.

When an SVG `<mask>` element is used as the mask source, the `match-source` value resolves to the value of the `<mask>` element's {{cssxref("mask-type")}} property. If the `<mask>` element (not the "masked element") doesn't have the CSS `mask-type` property defined, this property defaults to the value of the SVG {{svgAttr("mask-type")}} attribute, if present. If that is omitted as well, the `match-source` value will resolve to `luminance`.

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

The first mask layer, `url(alphaImage.png)`, references an image. As this isn't a `<mask>` element within an `<svg>`, the `mask-mode` resolves to `alpha`, with the opaque parts of this image making the corresponding parts of the element visible, while the transparent or semi-transparent parts are invisible or partially visible.

The `linear-gradient(to right, black, transparent)` is the second mask layer and `radial-gradient(circle, white 50%, transparent 75%)` is the third. Again, these aren't `<mask>` elements, so the `match-source` value resolves to `alpha`. The masking effect of these layers is determined by the [opaqueness of the gradient mask](/en-US/docs/Web/CSS/CSS_masking/Masking#opaqueness_versus_transparency) by default.

The fourth mask layer has `none` declared, meaning the mask for this layer is transparent black. The `.masked-element` class sets `mask-mode: match-source;`. Had `mask-mode` instead been a comma-separated list of five different values, the fourth value would have applied to this `none` layer, allowing the fifth value to apply to the fifth layer.

The fifth mask layer is comprised of an SVG {{svgelement("mask")}} element that has `svg-mask` as its [`id`](/en-US/docs/Web/HTML/Reference/Global_attributes/id). While the default mask mode of the other layers is `alpha`, the default [mask type of SVG `<mask>` elements](/en-US/docs/Web/CSS/CSS_masking/Masking#svg_mask_as_mask_source) is the `mask-type` value, or, if not set, the `mask-type` attribute. If that isn't defined either, the value defaults to `luminance`. In other words, the masking effect of the `<mask>` is determined by both the brightness and transparency of the `<mask>` element's colors.

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

Analogous to the {{cssxref("background-position")}} property, the {{cssxref("mask-position")}} property sets the initial position of the mask image relative to the mask layer's origin box, defined by [the `mask-origin` property](#the_mask-origin_property). The syntax follows the [`background-position`'s `<position>` syntax](/en-US/docs/Web/CSS/background-position#position), with the value being one, two, or four {{cssxref("&lt;position&gt;")}} values, defining one to two relative or absolute position offsets.

### One-value syntax

If only one keyword value is specified, that value specifies the mask origin edge against which the mask will be placed with the other dimension being `center`.

If only one {{cssxref("&lt;length-percentage&gt;")}} value is specified, this specifies the X coordinate relative to the left edge of the mask origin, with the Y coordinate set to `50%`.

If two keyword values are specified, the order of the value doesn't matter, but the value can not include two vertical or two horizontal axis values; `left right` and `top bottom` are both invalid.

### Two-value syntax

If two values are present, including one keyword and one `<length-percentage>` value, the order only matters if the keyword is `center`:

- If the keyword is `left` or `right`, it defines the X coordinate relative to the left edge, and the value defines the Y coordinate relative to the top edge.
- Similarly, a `top` or `bottom` keyword defines the Y coordinate positioning the element against the top or bottom edge, respectively, with the other value defining the X value relative to the left edge of the mask origin box.
- When one value is the `center` keyword and the other is a `<length-percentage>`, the first value defines the horizontal position and the second value defines the vertical position.

If two values are present and both are `<length-percentage>` values, the order again matters; the first value defines the horizontal positioning as an offset from the left edge of the mask-positioning area while the second value defines the vertical position as an offset from the top edge of the mask-positioning area.

### Four-value syntax

Mask positions can also be relative to corners other than the top left. The four-value syntax enables offsetting the mask from any corner. The value includes two {{cssxref("length-percentage")}} offsets, each preceded by the origin side for that offset. Whether you declare the horizontal or vertical pair first doesn't matter, but you must declare the origin-side keyword (`left`, `right`, `top`, `bottom`, `x-start`, `x-end`, `y-start`, `y-end`, `block-start`, `block-end`, `inline-start`, or `inline-end`) before the offset `<length-percentage>` in each pair, and the two origin-sides can't be from the same axis.

In the two `<length-percentage>` syntax, the origin sides are `top` and `left`, in that order. For example, `mask-position: 10px 20px` is the equivalent of `mask-position: left 10px top 20px`. When offsetting from the top and left, the offset sides aren't required, but the order matters. With the four value syntax, you can use `mask-position` to offset the mask image from any edge combinations, such as `left 10px bottom 20px`, and the order of the sides doesn't matter, as the offset edge is defined by the keyword preceding it rather than the declaration order.

### Percentage values

When offsetting using percentage values, the mask's dimension is subtracted from the element's dimension, just as is done with [percentage offsets with `background-position`](/en-US/docs/Web/CSS/background-position#regarding_percentages).

### Positioning repeating mask images

The `mask-position` property defines the initial position of the mask image. By "initial position", if the [mask repeats](#the_mask-repeat_property), the browser places the first mask image in the position defined by the `mask-position` property, thus defining the placement of the mask repetitions.

In this example, we set the position of the first image to `bottom right`, meaning the first mask will be placed at the bottom right edge of the mask origin box. Because mask images repeat by default, the repeating masks will be positioned against the first placed mask's top and left sides.

```html hidden live-sample___position live-sample___position_no-repeat
<div class="keywords">
  <img
    src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
    alt="Pride flag" />
</div>
<div class="twoValue">
  <img
    src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
    alt="Pride flag" />
</div>
<div class="fourValue">
  <img
    src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
    alt="Pride flag" />
</div>
```

```css hidden live-sample___position live-sample___position_no-repeat
div,
img {
  width: calc(30vw - 20px);
}
```

```css live-sample___position live-sample___position_no-repeat
img {
  mask-image: url(https://mdn.github.io/shared-assets/images/examples/mask-star.svg);
}
.keywords img {
  mask-position: bottom right;
}
.twoValue img {
  mask-position: -20px -10px;
}
.fourValue img {
  mask-position: right -20px bottom -10px;
}
```

```css hidden live-sample___position live-sample___position_no-repeat
div::before {
  content: 'class="' attr(class) '"';
  display: block;
  text-align: center;
  font-family: monospace;
}
body {
  flex-flow: row wrap;
}
```

The `mask-position` defines the position of the first mask image's placement. This demo shows where the first image is placed:

```css hidden live-sample___position_no-repeat
img {
  mask-repeat: no-repeat;
}
```

{{EmbedLiveSample("position_no-repeat", "", "260px")}}

Because the default value for the [`mask-repeat` property](#the_mask-repeat_property) is `repeat`, the images are repeated along the X and Y axes, based on the position of that first mask:

{{EmbedLiveSample("position", "", "260px")}}

The two-value example defines the top and left offsets of the original mask. The four-value example combines the previous two previous examples, position the first mask using the same offsets as the second image, but from the same edges as demonstrated in the first image.

In the first image, the first star to be placed is the one on the bottom right, with the repeated stars above and to the left. Because of this positioning, the initial star is not clipped, but the top-most and left-most stars are.

If we don't explicitly set the `mask-position` property, it will default to `0% 0%` for each layer, with the top-left corner of the mask abutting the top-left corner of the mask origin box. Continuing with the `masked-element` example, it is as if we had set the following:

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

When an element has padding, a border, or both, the {{cssxref("mask-origin")}} property defines which of these box edge values acts as the mask origin box, or the _mask positioning area_, within which a mask image is positioned, for that layer. The `mask-origin` property is analogous to the {{cssxref("background-origin")}} property, but with a different initial value and SVG-only values.

HTML elements can have masks contained within their content border box, padding box, or content box. For example, if the `mask-position` is `top left`, is that relative to the border's outer edge, the padding's outer edge, or the content's outer edge?

In the [`mask-position`](#the_mask-position_property) masking example, the position defined was relative to the border-box (the default behavior), although it is worth noting that the `<img>` had no border or padding set, therefore the content-box, padding-box, and border-box origins would all be the same in this case.

```html hidden live-sample___origin
<div class="border-box">
  <img
    src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
    alt="Pride flag" />
</div>
<fieldset>
  <legend>Set the <code>mask-origin</code> value</legend>
  <label
    ><input type="radio" name="origin" id="origin_border-box" checked />
    border-box</label
  >
  <label
    ><input type="radio" name="origin" id="origin_padding-box" />
    padding-box</label
  >
  <label
    ><input type="radio" name="origin" id="origin_content-box" />
    content-box</label
  >
</fieldset>
```

```css hidden live-sample___origin live-sample___clip live-sample___size
div {
  all: unset;
}
legend {
  align-self: baseline;
}
label {
  display: block;
}
```

In this example, the `mask-position` places the initial mask in the top left corner of the `<img>` element that has a large border and padding, with a green background color to enable seeing the star masking on the padding area.

```css live-sample___origin live-sample___clip
img {
  mask-image: url(https://mdn.github.io/shared-assets/images/examples/mask-star.svg);
  mask-position: top left;
  padding: 15px;
  border: 15px solid;
  background-color: green;
}
:has(#origin_border-box:checked) img {
  mask-origin: border-box;
}
:has(#origin_padding-box:checked) img {
  mask-origin: padding-box;
}
:has(#origin_content-box:checked) img {
  mask-origin: content-box;
}
```

Change the value of the `mask-origin` property by changing the selected radio button, looking at the position of the top left star mask as you do so.

{{EmbedLiveSample("origin", "", "350px")}}

The default value is `border-box`. With this value, the initial mask is placed at the border's top-left edge and is not clipped. When the initial mask is placed at the outer or inner edge of the padding, there is room above it and to the left; these repeating masks are clipped.

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
    url(alphaImage.png) 0% 0% border-box match-source,
    linear-gradient(to right, black, transparent) 0% 0% border-box match-source,
    radial-gradient(circle, white 50%, transparent 75%) 0% 0% border-box
      match-source,
    none 0% 0% border-box match-source,
    url(#svg-mask) 0% 0% border-box match-source;
}
```

For SVG elements, which don't have the associated CSS layout boxes, a mask can be contained inside the SVG element's fill, stroke, or view box.

## The `mask-clip` property

The {{cssxref("mask-clip")}} property determines the area of the element that will be affected by a mask, effectively clipping the element at the defined box edge. It is analogous to the {{cssxref("background-clip")}} property, but with some different values.

Because the `mask-clip` property accepts all the `mask-origin` values and both have the same `border-box` default value, the two properties may seem similar, but they serve very different purposes. While `mask-origin` determines where a mask image will be positioned, the `mask-clip` property causes the original element to have its content clipped to the specified box. It is important to understand them both: if the `mask-origin` causes the `mask-position` to place the mask image outside the clipping area, the mask will be clipped.

The `mask-clip` property accepts all the `mask-origin` values, as well as its own `no-clip` value. The `no-clip` value sets the painted content not to be clipped. You can still cause the mask image to be clipped by positioning it outside of the border content area using `mask-position` values that are less than zero or resolve to greater than 100%.

Setting the `mask-clip` and `mask-origin` to different values can cause the mask layer image to be clipped. For example, if an element with a border and padding has `mask-clip` set to `content-box` and `mask-origin` set to `border-box`, and the `mask-position` is set to the `top left` edge, the mask layer image will be clipped at the top-left edge.

The next example adds clipping options to the previous example to demonstrate the different non-SVG `mask-clip` values and to show how they impact the different `mask-origin` values.

```html hidden live-sample___clip
<div class="border-box">
  <img
    src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
    alt="Pride flag" />
</div>
<fieldset>
  <legend>Set the <code>mask-clip</code> value</legend>
  <label
    ><input type="radio" name="clip" id="clip_border-box" checked />
    border-box</label
  >
  <label
    ><input type="radio" name="clip" id="clip_padding-box" /> padding-box</label
  >
  <label
    ><input type="radio" name="clip" id="clip_content-box" /> content-box</label
  >

  <label><input type="radio" name="clip" id="clip_no-clip" /> no-clip</label>
</fieldset>
<fieldset>
  <legend>Set the <code>mask-origin</code> value</legend>
  <label
    ><input type="radio" name="origin" id="origin_border-box" checked />
    border-box</label
  >
  <label
    ><input type="radio" name="origin" id="origin_padding-box" />
    padding-box</label
  >
  <label
    ><input type="radio" name="origin" id="origin_content-box" />
    content-box</label
  >
</fieldset>
```

```css live-sample___clip
:has(#clip_border-box:checked) img {
  mask-clip: border-box;
}
:has(#clip_padding-box:checked) img {
  mask-clip: padding-box;
}
:has(#clip_content-box:checked) img {
  mask-clip: content-box;
}
```

{{EmbedLiveSample("clip", "", "350px")}}

The first mask is placed at the top-left edge of the mask origin container, then repeated. If the origin box is the `border-box` and the clipping region is the `content-box`, the top and left areas of the mask origin container will be clipped. Generally, you will want the `mask-clip` to be the same as the `mask-origin`.

Continuing with the `masked-element` example, if we don't explicitly set the `mask-clip` property, it will default to `border-box` for each layer, as if we had set the following:

```css
.masked-element {
  mask-image:
    url(alphaImage.png), linear-gradient(to right, black, transparent),
    radial-gradient(circle, white 50%, transparent 75%), none, url(#svg-mask);
  mask-mode: match-source;
  mask-position: 0% 0%;
  mask-origin: border-box;
  mask-clip: border-box;
}
```

or, expanding on the example using the `mask` shorthand:

```css
.masked-element {
  mask:
    url(alphaImage.png) 0% 0% border-box border-box match-source,
    linear-gradient(to right, black, transparent) 0% 0% border-box border-box
      match-source,
    radial-gradient(circle, white 50%, transparent 75%) 0% 0% border-box
      border-box match-source,
    none 0% 0% border-box border-box match-source,
    url(#svg-mask) 0% 0% border-box border-box match-source;
}
```

In the `mask` shorthand, if only one [`<geometry-box>`](/en-US/docs/Web/CSS/clip-path#geometry-box) value is given, it sets both the `mask-origin` and `mask-clip` property values. If two `<geometry-box>` values are present, the first defines the `mask-origin` and the second defines the `mask-clip`.

For mask layer images that do not reference an SVG {{svgelement("mask")}} element, the `mask-clip` property defines whether the mask painting area, or the area affected by the mask, is the border, padding, or content box. The painted content of the element will be restricted to this area.

When the mask layer's {{cssxref("mask-image")}} source is a `<mask>`, the `mask-clip` property has no effect. Rather, the `<mask>` element's {{svgAttr("x")}}, {{svgAttr("y")}}, {{svgAttr("width")}}, {{svgAttr("height")}}, and {{svgAttr("maskUnits")}} attributes determine the mask painting area.

## The `mask-size` property

The {{cssxref("mask-size")}} property is used to size mask layers. This property is analogous to the {{cssxref("background-size")}} property, taking the same values. When sizing your masks, remember that areas of the element not covered by the mask images are hidden.

There are three ways to declare a `mask-size`:

- the `cover` or `contain` keyword,
- one length, percentage, or the keyword `auto`, or
- two values that are a combination of lengths, percentages, and the keyword `auto`.

The mask image can be left to its natural size, stretched, or constrained to fit the available space. The {{glossary("aspect ratio")}} of the mask image is maintained by default, but declaring two `<length-percentage>` values can distort the mask image if the ratio of the two values is not the same as the original image (`mask-repeat: round` is the other property/value pair that may distort the mask image).

If the `mask-size` is set to `contain`, the mask image will be the largest size it can be while being fully contained within the mask positioning area. In this case, the mask image is not clipped, but rather, it is fully contained.

When set to `cover`, the mask image will be the smallest size it can be to fully cover the entire mask-positioning area, with the mask being clipped if the mask's aspect ratio differs from the aspect ratio of the mask-positioning area.

In other words, With `cover` and `contain`, at least one dimension of the mask will be the same size as the mask-positioning area's same dimension; the mask image either grows or shrinks so that either the width is the same width as the mask positioning area or the mask image's height is equal to the mask positioning area's height.

With `cover`, `contain`, and `<percentage>` values, the size is relative to the origin box. In our star-mask and flag image example, the aspect ratio of both the mask image and the `<img>` are `1:1`, meaning in this case `cover`, `contain`, and `100%` will all produce the same sized mask. This example demonstrates how, when `mask-size` is set to `cover`, `contain` or a `<percentage>` value, the actual size of the mask may differ depending on the value of the [`mask-origin` property](#the_mask-origin_property):

```html hidden live-sample___size
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

```css hidden live-sample___size
img {
  mask-image: url(https://mdn.github.io/shared-assets/images/examples/mask-star.svg);
  mask-position: top left;
  padding: 15px;
  border: 15px solid;
  background-color: green;
}
```

```css live-sample___size
img {
  mask-size: 100%;
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

Change the value of the `mask-origin` property to see how the different values impact the mask size:

{{EmbedLiveSample("size", "", "350px")}}

This example included one `<percentage>` value. When one `<length-percentage>` value is specified, it defines only the mask width, with the height defaulting to `auto`, which maintains the aspect ratio. When two values are specified, the first defines the mask width and the second defines its height.

The default value of `mask-size` is `auto`, rendering the mask at its {{glossary("intrinsic size")}}, the size at which the mask would be displayed if no CSS were applied. The underlying {{glossary("aspect ratio")}} of the mask image is maintained if you set a single `<length-percentage>` value, or two values in the same ratio as the aspect ratio. If you declare two values not in the same ratio as the aspect ratio, the mask image is distorted.

Like with all longhand components of shorthand property, if the {{cssxref("mask")}} shorthand property is set and the value of the `mask-size` property is not defined within any mask layer, the `mask-size` value is reset to its initial value of `auto` for those mask layers.

If the image has no intrinsic proportion, for example in the case of a [CSS gradient](/en-US/docs/Web/CSS/gradient), the default `auto` is the entirety of the mask positioning area as set by [the `mask-origin` property](#the_mask-origin_property).

Continuing with the `masked-element` example, if we don't explicitly set the `mask-size` property, it will default to `auto` for each layer, as if we had set the following:

```css
.masked-element {
  mask-image:
    url(alphaImage.png), linear-gradient(to right, black, transparent),
    radial-gradient(circle, white 50%, transparent 75%), none, url(#svg-mask);
  mask-mode: match-source;
  mask-position: 0% 0%;
  mask-origin: border-box;
  mask-clip: border-box;
  mask-size: auto;
}
```

or, expanding on the example using the `mask` shorthand, with the `mask-size` component going after the `mask-position` value, separated by a forward slash (/):

```css
.masked-element {
  mask:
    url(alphaImage.png) 0% 0% / auto border-box border-box match-source,
    linear-gradient(to right, black, transparent) 0% 0% / auto border-box
      border-box match-source,
    radial-gradient(circle, white 50%, transparent 75%) 0% 0% / auto border-box
      border-box match-source,
    none 0% 0% / auto border-box border-box match-source,
    url(#svg-mask) 0% 0% / auto border-box border-box match-source;
}
```

## The `mask-repeat` property

The {{cssxref("mask-repeat")}} property defines how mask images are repeated, or tiled, after the initial mask image has been sized and positioned. The `mask-repeat` property defines if and how that mask image is repeated along the horizontal and vertical axes. In most of the previous examples, you may have noticed the star mask repeated along the X and Y axes. This is because `repeat` is the default value.

The `mask-repeat` property is analogous to the {{cssxref("background-repeat")}} property, accepting the same [`<repeat-style>`](/en-US/docs/Web/CSS/mask-repeat#values) values. As is the case with `background-repeat`, the first (and possibly only) mask-image repetition is positioned by [the `*-position` property](#the_mask-position_property) and sized by [the `*-size` property](#the_mask-size_property). The positions of the repeated background or mask images are based on this initial image instance.

Continuing with the `masked-element` example, if we don't explicitly set the `mask-repeat` property, it will default to `repeat` for each layer, as if we had set the following:

```css
.masked-element {
  mask-image:
    url(alphaImage.png), linear-gradient(to right, black, transparent),
    radial-gradient(circle, white 50%, transparent 75%), none, url(#svg-mask);
  mask-mode: match-source;
  mask-position: 0% 0%;
  mask-origin: border-box;
  mask-clip: border-box;
  mask-size: auto;
  mask-repeat: repeat;
}
```

or, expanding on the example using the `mask` shorthand:

```css
.masked-element {
  mask:
    url(alphaImage.png) 0% 0% / auto repeat border-box border-box match-source,
    linear-gradient(to right, black, transparent) 0% 0% / auto repeat border-box
      border-box match-source,
    radial-gradient(circle, white 50%, transparent 75%) 0% 0% / auto repeat
      border-box border-box match-source,
    none 0% 0% / auto repeat border-box border-box match-source,
    url(#svg-mask) 0% 0% / auto repeat border-box border-box match-source;
}
```

## The `mask-composite` property

The {{cssxref("mask")}} shorthand includes the {{cssxref("mask-composite")}} property, which defines how multiple masks are combined to create the final mask effect. Each value in the comma-separated list of values determines whether the browser should `add`, `subtract`, `intersect`, or `exclude` the associated mask layer from or to the mask layers below it. Similar to `mask-mode`, and the other `mask-*` properties, there is no property in the {{cssxref("background")}} shorthand that is analogous.

```html hidden live-sample___composite live-sample___composite3
<div class="add">
  <img
    src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
    alt="Pride flag" />
</div>
<div class="subtract">
  <img
    src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
    alt="Pride flag" />
</div>
<div class="intersect">
  <img
    src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
    alt="Pride flag" />
</div>
<div class="exclude">
  <img
    src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
    alt="Pride flag" />
</div>
```

In this example, we include two `mask-image` values, including the star and the gradient from the previous examples as mask images:

```css live-sample___composite
img {
  mask-image:
    repeating-linear-gradient(
      to bottom right,
      #f00 0 20px,
      #f005 20px 40px,
      transparent 40px 60px
    ),
    url(https://mdn.github.io/shared-assets/images/examples/mask-star.svg);
}
```

We set a different `mask-composite` value for each image:

```css live-sample___composite live-sample___composite2 live-sample___composite3
.add img {
  mask-composite: add;
}
.subtract img {
  mask-composite: subtract;
}
.intersect img {
  mask-composite: intersect;
}
.exclude img {
  mask-composite: exclude;
}
```

```css hidden live-sample___composite live-sample___composite2 live-sample___composite3
div::before {
  content: "mask-composite: " attr(class);
  display: block;
  text-align: center;
  font-family: monospace;
}
body {
  flex-flow: row wrap;
}
```

{{EmbedLiveSample("composite", "", "600px")}}

The semi-transparent star mask is added to, subtracted from, intersected with, or excluded from the striped mask, depending on the `mask-composite` value.

The `mask-composite` property is only relevant in cases with two or more mask layers. This reads "mask layers", not "mask images" because, if `none` is included, the transparent black mask is composited. A `none` value can have a profound effect on masking in the case of `subtract` and `intersect`. For example, if the `mask-mode` resolves to `luminance`, subtracting a black mask will remove the entire mask (the element will be hidden). Similarly, if `none` is the last layer with `mask-composite: intersect` set for that layer, the entire element will be hidden. Here, we add a third layer, with `none`, to the previous example:

```css live-sample___composite3
img {
  mask-image:
    url(https://mdn.github.io/shared-assets/images/examples/mask-star.svg),
    repeating-linear-gradient(
      to bottom right,
      #f00 0 20px,
      #f005 20px 40px,
      transparent 40px 60px
    ),
    none;
}
```

{{EmbedLiveSample("composite3", "", "600px")}}

Note how the `intersect` example excludes everything because the transparent black mask doesn't intersect anything.

If we reverse the order of the mask layers, we can also get very different results:

```html hidden live-sample___composite2
<div class="subtract">
  <img
    class="gradientFirst"
    src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
    alt="Pride flag" />
</div>
<div class="subtract">
  <img
    class="starFirst"
    src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
    alt="Pride flag" />
</div>
```

```css live-sample___composite2
.gradientFirst {
  mask-image:
    repeating-linear-gradient(
      to bottom right,
      #f00 0 20px,
      #f005 20px 40px,
      transparent 40px 60px
    ),
    url(https://mdn.github.io/shared-assets/images/examples/mask-star.svg);
}
.starFirst {
  mask-image:
    url(https://mdn.github.io/shared-assets/images/examples/mask-star.svg),
    repeating-linear-gradient(
      to bottom right,
      #f00 0 20px,
      #f005 20px 40px,
      transparent 40px 60px
    );
}
```

{{EmbedLiveSample("composite2", "", "350px")}}

In the first example, the stars are subtracted from the stripes. In the second, the stripes are subtracted from the stars.

Like all the other `mask` component properties, `mask-composite` takes a comma-separated list of values. Because the property effects how masks are combined, this property is only relevant for multiple mask layers and the number of used values is one less than the number of mask layers.

The last pair of masks is composited first. The previous mask image is then composited with the previous composition.

Continuing with the `masked-element` example, if we don't explicitly set the `mask-composite` property, it will default to `add` for each layer, as if we had set the following:

```css
.masked-element {
  mask-image:
    url(alphaImage.png), linear-gradient(to right, black, transparent),
    radial-gradient(circle, white 50%, transparent 75%), none, url(#svg-mask);
  mask-mode: match-source;
  mask-position: 0% 0%;
  mask-origin: border-box;
  mask-clip: border-box;
  mask-size: auto;
  mask-repeat: repeat;
  mask-composite: add;
}
```

In this case, the `<mask>` element will be composited with the `none` layer. Then the radial gradient will be composited with the result of the previous composition, and so on.

Like we saw with all the other component properties, we could have used the `mask` shorthand:

```css
.masked-element {
  mask:
    url(alphaImage.png) 0% 0% / auto repeat border-box border-box add
      match-source,
    linear-gradient(to right, black, transparent) 0% 0% / auto repeat border-box
      border-box add match-source,
    radial-gradient(circle, white 50%, transparent 75%) 0% 0% / auto repeat
      border-box border-box add match-source,
    none 0% 0% / auto repeat border-box border-box add match-source,
    url(#svg-mask) 0% 0% / auto repeat border-box border-box add match-source;
}
```

## See also

- [Introduction to CSS masking](/en-US/docs/Web/CSS/CSS_masking/Masking)
- [Introduction to CSS clipping](/en-US/docs/Web/CSS/CSS_masking/Clipping)
- [CSS masking](/en-US/docs/Web/CSS/CSS_masking) module
