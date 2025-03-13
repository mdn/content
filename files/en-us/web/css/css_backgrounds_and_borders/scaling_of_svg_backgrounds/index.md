---
title: Scaling of SVG backgrounds
slug: Web/CSS/CSS_backgrounds_and_borders/Scaling_of_SVG_backgrounds
page-type: guide
---

{{CSSRef}}

Given the flexibility of SVG images, there's a lot to keep in mind when using them as background images with the {{ cssxref("background-image") }} property, and even more to keep in mind when scaling them using the {{ cssxref("background-size") }} property. This article describes how scaling of SVG images is handled when using these properties.

## The background sizing algorithm

The algorithm used to determine the background size of a background image can, for the most part, be summarized by these four rules. There are some edge cases that aren't covered by these rules, but this covers the majority of cases.

1. If {{ cssxref("background-size") }} specifies a fixed dimension (that is, percentages and relative units are fixed by their context), that dimension wins.
2. If the image has an intrinsic ratio (that is, its width:height ratio is constant, such as 16:9, 4:3, 2.39:1, 1:1, and so forth), the rendered size preserves that ratio.
3. If the image specifies a size, and the size isn't modified by `constrain` or `cover`, that specified size wins.
4. If none of the above cases are met, the image is rendered at the same size as the background area.

It's worth noting that the background sizing algorithm only cares about the image's dimensions and proportions, or lack thereof. An SVG image with fixed dimensions will be treated just like a raster image of the same size.

> [!NOTE]
> If you are trying to stretch your SVG to a different {{glossary("aspect ratio")}} with CSS—for example in order to stretch it over the page background—make sure your SVG includes `preserveAspectRatio="none"`. Find out more about {{svgattr("preserveAspectRatio")}}.

## Source image examples

Before diving in to look at the results of using different kinds of SVG source images and seeing how they look when used with {{ cssxref("background-size") }}, it will be helpful to look at a few example source images that have different dimensions and sizing settings, which we will later use as our `background-image` values in our examples. The browser renders {{SVGelement("svg")}} images as `300px` wide and `150px` tall by default.

### Dimensionless and proportionless

This SVG gradient image is both dimensionless and proportionless. It doesn't care what size it is, nor does it care about remaining at a particular aspect ratio. This would make a good gradient desktop background that would work regardless of your screen size and its aspect ratio.

```html
<svg>
  <title>Corner-to-corner gradient</title>
  <defs>
    <linearGradient id="g" x1="0%" x2="100%" y1="0%" y2="100%">
      <stop style="stop-color:pink" offset="0" />
      <stop style="stop-color:goldenrod" offset="1" />
    </linearGradient>
  </defs>
  <rect style="fill: url(#g)" width="100%" height="100%" />
</svg>
```

{{ EmbedLiveSample('Dimensionless_and_proportionless', 200, 180) }}

### One specified dimension and proportionless

This image specifies a width of 100 pixels but no height or intrinsic ratio. This is, basically, a thin strip of wallpaper that could be stretched across the entire height of a block.

```html
<svg width="100">
  <title>Vertical gradient, with a fixed width</title>
  <defs>
    <linearGradient id="g" x1="0%" x2="0%" y1="0%" y2="100%">
      <stop style="stop-color: purple;" offset="0" />
      <stop style="stop-color: lime;" offset="1" />
    </linearGradient>
  </defs>
  <rect style="fill: url(#g);" width="100%" height="100%" />
</svg>
```

{{ EmbedLiveSample('One specified dimension and proportionless', 200, 180) }}

### One specified dimension with intrinsic ratio

This image specifies a 100 pixel height but no width. It also specifies an intrinsic aspect ratio of 3:4. This ensures that its width:height ratio is always 3:4, unless it's deliberately scaled to a disproportionate size (that is, by explicitly specifying both width and height that aren't of that ratio).

This is very much like specifying a specific width and height; since once you have one dimension and a ratio, the other dimension is implied.

```html
<svg height="100" viewBox="0 0 3 4" preserveAspectRatio="none">
  <title>Vertical gradient, with a fixed height and intrinsic ratio</title>
  <defs>
    <linearGradient id="g" x1="0%" x2="0%" y1="0%" y2="100%">
      <stop style="stop-color: teal;" offset="0" />
      <stop style="stop-color: orange;" offset="1" />
    </linearGradient>
  </defs>
  <rect style="fill: url(#g);" width="100%" height="100%" />
</svg>
```

{{ EmbedLiveSample('One specified dimension with intrinsic ratio', 200, 180) }}

### No width or height with intrinsic ratio

This image doesn't specify either a width or a height; instead, it specifies an intrinsic ratio of 1:1. It's always square, and is usable at any size, such as 32x32, 128x128, or 512x512, for example.

```html
<svg viewBox="0 0 1 1" preserveAspectRatio="none">
  <title>Intrinsic ratio</title>
  <defs>
    <linearGradient id="g" x1="0%" x2="100%" y1="0%" y2="0%">
      <stop style="stop-color: navy;" offset="0" />
      <stop style="stop-color: maroon;" offset="1" />
    </linearGradient>
  </defs>
  <rect style="fill: url(#g);" width="100%" height="100%" />
</svg>
```

{{ EmbedLiveSample('No width or height with intrinsic ratio', 200, 180) }}

## Scaling examples

Now let's see some examples of what happens as we apply different scaling to these images. In each of the examples below, the enclosing {{htmlelement("div")}} elements are 300 pixels wide and 200 pixels tall, with a 2 pixel-wide border. To ensure we display the SVG background image only once for these demonstrations, we set {{ cssxref("background-repeat") }} to `no-repeat`.

```css
div {
  width: 300px;
  height: 200px;
  background-repeat: no-repeat;
  border: 2px solid black;
}
```

### Specifying fixed lengths for both dimensions

If you use {{ cssxref("background-size") }} to specify fixed lengths for both dimensions, those lengths are always used, per rule 1 above. In other words, the image will always get stretched to the dimensions you specify, regardless of whether or not the source image has specified its dimensions and/or aspect ratio.

#### No dimensions or intrinsic ratio

In this example, the image has no dimensions or intrinsic ratio set:

```html hidden live-sample___scaling1
<div></div>
```

```css hidden live-sample___scaling1
div {
  width: 300px;
  height: 200px;
  background-repeat: no-repeat;
  border: 2px solid black;
}
```

```css live-sample___scaling1
div {
  background-image: url(no-dimensions-or-ratio.svg);
  background-size: 125px 175px;
}
```

{{ EmbedLiveSample('scaling1', 200, 230) }}

#### One specified dimension, no intrinsic ratio

In this example, the image has one dimension specified, and no intrinsic ratio set:

```html hidden live-sample___scaling2
<div></div>
```

```css hidden live-sample___scaling2
div {
  width: 300px;
  height: 200px;
  background-repeat: no-repeat;
  border: 2px solid black;
}
```

```css live-sample___scaling2
div {
  background-image: url(100px-wide-no-height-or-ratio.svg);
  background-size: 250px 150px;
}
```

{{ EmbedLiveSample('scaling2', 200, 230) }}

#### One specified dimension with intrinsic ratio

```html hidden live-sample___scaling3
<div></div>
```

In this example, the image has one dimension explicitly set, along with an intrinsic ratio, meaning both dimensions are effectively defined. Setting an absolute height and width for `background-size` overrides the dimensions set in the SVG:

```css hidden live-sample___scaling3
div {
  width: 300px;
  height: 200px;
  background-repeat: no-repeat;
  border: 2px solid black;
}
```

```css live-sample___scaling3
div {
  background-image: url(100px-height-3x4-ratio.svg);
  background-size: 275px 125px;
}
```

{{ EmbedLiveSample('scaling3', 200, 230) }}

#### No specified width or height with intrinsic ratio

In this example, the image has an intrinsic ratio but no dimensions set:

```html hidden live-sample___scaling4
<div></div>
```

```css hidden live-sample___scaling4
div {
  width: 300px;
  height: 200px;
  background-repeat: no-repeat;
  border: 2px solid black;
}
```

```css live-sample___scaling4
div {
  background-image: url(no-dimensions-1x1-ratio.svg);
  background-size: 250px 100px;
}
```

{{ EmbedLiveSample('scaling4', 200, 230) }}

### Using contain or cover

Specifying `cover` for {{ cssxref("background-size") }} makes the picture as small as possible while still covering the entire background area. `contain`, on the other hand, makes the image as large as possible while not being clipped by the background area.

For an image with an intrinsic ratio, exactly one size matches the `cover`/fit criteria alone. But if there is no intrinsic ratio specified, `cover`/fit isn't sufficient, so the large/small constraints choose the resulting size.

#### No dimensions or intrinsic ratio

In this example, the image has no dimensions or intrinsic ratio set. If an image doesn't specify either dimensions or an intrinsic ratio, neither rule 2 nor rule 3 apply, so rule 4 takes over: the background image is rendered covering the entire background area. This satisfies the largest-or-smallest constraint.

```html hidden live-sample___cc1
<div></div>
```

```css hidden live-sample___cc1
div {
  width: 300px;
  height: 200px;
  background-repeat: no-repeat;
  border: 2px solid black;
}
```

```css live-sample___cc1
div {
  background-image: url(no-dimensions-or-ratio.svg);
  background-size: contain;
}
```

{{ EmbedLiveSample('cc1', 200, 230) }}

#### One specified dimension, no intrinsic ratio

In this example, with the image having one dimension specified but no intrinsic ratio, rule 4 applies, and the image is scaled to cover the entire background area.

```html hidden live-sample___cc2
<div></div>
```

```css hidden live-sample___cc2
div {
  width: 300px;
  height: 200px;
  background-repeat: no-repeat;
  border: 2px solid black;
}
```

```css live-sample___cc2
div {
  background-image: url(100px-wide-no-height-or-ratio.svg);
  background-size: contain;
}
```

{{ EmbedLiveSample('cc2', 200, 230) }}

#### One specified dimension with intrinsic ratio

In these examples, the image has one dimension explicitly set, along with an intrinsic ratio.

Things change when you specify an intrinsic ratio. In this case, rule 1 isn't relevant, so rule 2 is applied: we try to preserve any intrinsic ratio (while respecting `contain` or `cover`). For example, preserving a 3:4 intrinsic aspect ratio for a 300x200 box with `contain` means drawing a 150x200 background.

##### contain case

```html hidden live-sample___cc3
<div></div>
```

Given this CSS:

```css hidden live-sample___cc3
div {
  width: 300px;
  height: 200px;
  background-repeat: no-repeat;
  border: 2px solid black;
}
```

```css live-sample___cc3
div {
  background-image: url(100px-height-3x4-ratio.svg);
  background-size: contain;
}
```

{{ EmbedLiveSample('cc3', 200, 230) }}

Notice how the entire image is rendered, fitting as best as possible into the box without clipping any of it away.

##### cover case

```html hidden live-sample___cc5
<div></div>
```

```css hidden live-sample___cc5
div {
  width: 300px;
  height: 200px;
  background-repeat: no-repeat;
  border: 2px solid black;
}
```

```css live-sample___cc5
div {
  background-image: url(100px-height-3x4-ratio.svg);
  background-size: cover;
}
```

{{ EmbedLiveSample('cc5', 200, 230) }}

Here, the 3:4 ratio is preserved while still stretching the image to fill the entire box. That causes the bottom of the image to be clipped away.

#### No dimensions with intrinsic ratio

These example use the image with an intrinsic ratio set but no defined dimensions. When using an image with no intrinsic dimensions but an intrinsic ratio, things work similarly.

##### contain case

```html hidden live-sample___cc6
<div></div>
```

```css hidden live-sample___cc6
div {
  width: 300px;
  height: 200px;
  background-repeat: no-repeat;
  border: 2px solid black;
}
```

```css live-sample___cc6
div {
  background-image: url(no-dimensions-1x1-ratio.svg);
  background-size: contain;
}
```

{{ EmbedLiveSample('cc6', 200, 230) }}

Notice that the image is sized to fit the smallest dimension while preserving the 1:1 aspect ratio.

##### cover case

```html hidden live-sample___cc7
<div></div>
```

```css hidden live-sample___cc7
div {
  width: 300px;
  height: 200px;
  background-repeat: no-repeat;
  border: 2px solid black;
}
```

```css live-sample___cc7
div {
  background-image: url(no-dimensions-1x1-ratio.svg);
  background-size: cover;
}
```

{{ EmbedLiveSample('cc7', 200, 230) }}

Here, the image is sized so that it fills the largest dimension. The 1:1 aspect ratio has been preserved, although with this source image, that can be difficult to see.

### Automatic sizing using "auto" for both dimensions

If {{ cssxref("background-size") }} is set to `auto` or `auto auto`, rule 2 says that rendering must preserve any intrinsic ratio that's provided.

#### No dimensions or intrinsic ratio

When auto-sizing background images with no intrinsic ratio or dimensions specified, rule 4 takes effect, and the image is rendered to fill the background area.

```html hidden live-sample___both-auto1
<div></div>
```

```css hidden live-sample___both-auto1
div {
  width: 300px;
  height: 200px;
  background-repeat: no-repeat;
  border: 2px solid black;
}
```

```css live-sample___both-auto1
div {
  background-image: url(no-dimensions-or-ratio.svg);
  background-size: auto auto;
}
```

{{ EmbedLiveSample('both-auto1', 200, 230) }}

#### One dimension and no intrinsic ratio

If no intrinsic ratio is specified, but at least one dimension is specified, rule 3 takes effect, and we render the image obeying those dimensions.

```html hidden live-sample___both-auto2
<div></div>
```

```css hidden live-sample___both-auto2
div {
  width: 300px;
  height: 200px;
  background-repeat: no-repeat;
  border: 2px solid black;
}
```

```css live-sample___both-auto2
div {
  background-image: url(100px-wide-no-height-or-ratio.svg);
  background-size: auto auto;
}
```

{{ EmbedLiveSample('both-auto2', 200, 230) }}

Note here that the width, which is specified in the source SVG at 100 pixels, is obeyed, while the height fills the background area since it's not specified (either explicitly or by an intrinsic ratio).

#### One dimension and an intrinsic ratio

If we have an intrinsic ratio with a fixed dimension, that fixes both dimensions in place. As previously mentioned, knowing one dimension and a ratio is the same as specifying both dimensions explicitly.

```html hidden live-sample___both-auto3
<div></div>
```

```css hidden live-sample___both-auto3
div {
  width: 300px;
  height: 200px;
  background-repeat: no-repeat;
  border: 2px solid black;
}
```

```css live-sample___both-auto3
div {
  background-image: url(100px-height-3x4-ratio.svg);
  background-size: auto auto;
}
```

{{ EmbedLiveSample('both-auto3', 200, 230) }}

Since this image has an explicit height of `100px`. With the 3:4 ratio set in the SVG, in the case of `auto`, the image's width is 75 pixels.

#### No fixed dimensions with intrinsic ratio

When an intrinsic ratio is specified, but no dimensions, rule 4 is applied — except that rule 2 also applies. The image is therefore rendered just like for the `contain` case.

```html hidden live-sample___both-auto4
<div></div>
```

```css hidden live-sample___both-auto4
div {
  width: 300px;
  height: 200px;
  background-repeat: no-repeat;
  border: 2px solid black;
}
```

```css live-sample___both-auto4
div {
  background-image: url(no-dimensions-1x1-ratio.svg);
  background-size: auto auto;
}
```

{{ EmbedLiveSample('both-auto4', 200, 230) }}

### Using "auto" and one specific length

Given rule 1, specified dimensions are always used, so we need to use our rules only to determine the second dimension.

#### No dimensions or intrinsic ratio

If the image has no dimensions or intrinsic ratio, rule 4 applies, and we use the background area's dimension to determine the value for the `auto` dimension.

```html hidden live-sample___auto0
<div></div>
```

```css hidden live-sample___auto0
div {
  width: 300px;
  height: 200px;
  background-repeat: no-repeat;
  border: 2px solid black;
}
```

```css live-sample___auto0
div {
  background-image: url(no-dimensions-or-ratio.svg);
  background-size: auto 140px;
}
```

{{ EmbedLiveSample('auto0', 200, 230) }}

Here, the width is determined using the background area's width per rule 4, while the height is the `140px` specified in the CSS.

#### One specified dimension with no intrinsic ratio

If the image has one specified dimension but no intrinsic ratio, that specified dimension is used per rule 3 if that dimension is set to `auto` in the CSS.

```html hidden live-sample___auto1
<div></div>
```

```css hidden live-sample___auto1
div {
  width: 300px;
  height: 200px;
  background-repeat: no-repeat;
  border: 2px solid black;
}
```

```css live-sample___auto1
div {
  background-image: url(100px-wide-no-height-or-ratio.svg);
  background-size: 200px auto;
}
```

{{ EmbedLiveSample('auto1', 200, 230) }}

Here, the `200px` specified in the CSS overrides the `100px` width specified in the SVG, per rule 1. Since there's no intrinsic ratio or height provided, `auto` selects the height of the background area as the height for the rendered image.

```html hidden live-sample___auto2
<div></div>
```

```css hidden live-sample___auto2
div {
  width: 300px;
  height: 200px;
  background-repeat: no-repeat;
  border: 2px solid black;
}
```

```css live-sample___auto2
div {
  background-image: url(100px-wide-no-height-or-ratio.svg);
  background-size: auto 125px;
}
```

{{ EmbedLiveSample('auto2', 200, 230) }}

In this case, the width is specified as `auto` in the CSS, so the `100px` width specified in the SVG is selected, per rule 3. The height is set at `125px` in the CSS, so that is selected per rule 1.

#### One specified dimension with intrinsic ratio

When a dimension is specified, rule 1 applies that dimension from the SVG to the rendered background unless specifically overridden by the CSS. When an intrinsic ratio is also specified, that's used to determine the other dimension.

```html hidden live-sample___auto3
<div></div>
```

```css hidden live-sample___auto3
div {
  width: 300px;
  height: 200px;
  background-repeat: no-repeat;
  border: 2px solid black;
}
```

```css live-sample___auto3
div {
  background-image: url(100px-height-3x4-ratio.svg);
  background-size: 150px auto;
}
```

{{ EmbedLiveSample('auto3', 200, 230) }}

In this case, we use the width of the image specified in the CSS set at `150px`, so rule 1 is applied. The intrinsic 3:4 aspect ratio then determines the height for the `auto` case.

#### No specified dimensions with intrinsic ratio

If no dimensions are specified in the SVG, the specified dimension in the CSS is applied, then the intrinsic ratio is used to select the other dimension, per rule 2.

```html hidden live-sample___auto4
<div></div>
```

```css hidden live-sample___auto4
div {
  width: 300px;
  height: 200px;
  background-repeat: no-repeat;
  border: 2px solid black;
}
```

```css live-sample___auto4
div {
  background-image: url(no-dimensions-1x1-ratio.svg);
  background-size: 150px auto;
}
```

{{ EmbedLiveSample('auto4', 200, 230) }}

The width is set by the CSS to `150px`. The `auto` value for the height is computed using that width and the 1:1 aspect ratio to be `150px` as well.

## See also

- {{cssxref("background-size")}}
- [CSS backgrounds and borders](/en-US/docs/Web/CSS/CSS_backgrounds_and_borders) module
