---
title: mask-repeat
slug: Web/CSS/mask-repeat
page-type: css-property
browser-compat: css.properties.mask-repeat
---

{{CSSRef}}

The **`mask-repeat`** [CSS](/en-US/docs/Web/CSS) property sets how mask images are repeated. A mask image can be repeated along the horizontal axis, the vertical axis, both axes, or not repeated at all.

## Syntax

```css
/* One-value syntax */
mask-repeat: repeat-x;
mask-repeat: repeat-y;
mask-repeat: repeat;
mask-repeat: space;
mask-repeat: round;
mask-repeat: no-repeat;

/* Two-value syntax: horizontal | vertical */
mask-repeat: repeat space;
mask-repeat: repeat repeat;
mask-repeat: round space;
mask-repeat: no-repeat round;

/* Multiple values */
mask-repeat:
  space round,
  no-repeat;
mask-repeat:
  round repeat,
  space,
  repeat-x;

/* Global values */
mask-repeat: inherit;
mask-repeat: initial;
mask-repeat: revert;
mask-repeat: revert-layer;
mask-repeat: unset;
```

### Values

The `mask-repeat` property is a comma-separated list of two `<repeat-style>` values,
with the first `<repeat-style>` value being the horizontal repetition value and the second value the vertical repetition value, or one keyword value that is a shorthand for two `<repeat-style>` values.

#### `<repeat-style>` values

The `<repeat-style>` values include:

- `repeat`
  - : The image is repeated as much as needed to cover the whole mask painting area. Mask images along the edges are clipped when the size of the [mask origin box](/en-US/docs/Web/CSS/mask-origin) is not an exact multiple of the mask image's size.

- `space`
  - : The mask image is repeated as many times as possible without clipping. If the element's origin size is at least twice the size as the mask image's size in the associated dimension, the {{cssxref("mask-position")}} property is ignored and the first and last images are positioned at the edges of the mask origin container. If the mask origin box is not an exact multiple of the mask image's size, whitespace is distributed evenly between the repeated mask images.

    If the origin box size is less than twice the mask image's size in the given dimension, only one mask image can be displayed. In this case, the image is positioned as defined by the `mask-position` property, which defaults to `0% 0%`. The mask image will only be clipped if the mask image is larger than the mask origin box.

- `round`
  - : The mask image is repeated as many times as possible in its original dimensions. If the size of the mask origin box is not an exact multiple of the mask image's size, all mask images will be rescaled, [shrinking or stretching](#rounded_repetitions) to ensure no repetitions are clipped.

- `no-repeat`
  - : The mask image is not repeated (and hence the mask painting area will not necessarily be entirely covered). The position of the non-repeated mask image is defined by the {{cssxref("mask-position")}} CSS property.

#### Shorthand values

The one-value syntax is a shorthand for the full two-value syntax:

<table class="standard-table">
  <thead>
    <tr>
      <th>Single value</th>
      <th>Two-value equivalent</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>repeat-x</code></td>
      <td><code>repeat no-repeat</code></td>
    </tr>
    <tr>
      <td><code>repeat-y</code></td>
      <td><code>no-repeat repeat</code></td>
    </tr>
    <tr>
      <td><code>repeat</code></td>
      <td><code>repeat repeat</code></td>
    </tr>
    <tr>
      <td><code>space</code></td>
      <td><code>space space</code></td>
    </tr>
    <tr>
      <td><code>round</code></td>
      <td><code>round round</code></td>
    </tr>
    <tr>
      <td><code>no-repeat</code></td>
      <td><code>no-repeat no-repeat</code></td>
    </tr>
  </tbody>
</table>

- `repeat-x`
  - : The equivalent of `repeat no-repeat`. The image is repeated in the horizontal direction as many times as needed to cover the width of the mask painting area. Mask images along the right or left edges, or both depending on the {{cssxref("mask-position")}} value, will be clipped if the width of the mask origin box is not an exact multiple of the mask image's width.

- `repeat-y`
  - : The equivalent of `no-repeat repeat`. The image is repeated in the vertical direction as many times as needed to cover the height of the mask painting area. Mask images along the top or bottom edges, or both depending on the {{cssxref("mask-position")}} value, will be clipped if the height of the mask origin box is not an exact multiple of the mask image's height.

## Description

The `mask-repeat` property accepts a comma-separated pair of values or one [shorthand value](#shorthand_values). In the two-value syntax, the first value represents the horizontal repetition behavior and the second value represents the vertical behavior.

### Multiple values

Each `mask-repeat` value in this comma-separated list applies to a separate mask layer. An element can have multiple mask layers applied. The number of layers is determined by the number of comma-separated values in the {{cssxref("mask-image")}} property value (even if a value is `none`). Each `mask-repeat` value is matched up with the `mask-image` values, in order. If the number of values in the two properties differs, any excess values of `mask-repeat` values are ignored, or, if `mask-repeat` has fewer values than `mask-image`, the `mask-repeat` values are repeated.

### Sizing and positioning

The `mask-repeat` property value defines how mask images are tiled after they have been [sized](/en-US/docs/Web/CSS/mask-size) and [positioned](/en-US/docs/Web/CSS/mask-position). The first (and possibly only) mask-image repetition is positioned by the {{cssxref("mask-position")}} property, which defaults to `0% 0%`, the top-left corner of the origin box. The size is defined by the {{cssxref("mask-size")}} property, which defaults to `auto`. The positions of the repeated masks are based on this initial mask instance.

### Clipping

Mask images will not repeat but will be clipped if the mask image's size is larger than the origin box, except in the case of `round`, where a single mask will be scaled down to fit the origin box.

With `repeat` values, mask images may be clipped at the edge of the origin box if the dimension (width or height) of the box is not an exact multiple of the mask's.

### Aspect ratio

By default, mask images maintain the aspect ratio set by the {{cssxref("mask-size")}} property or their default aspect ratio if the `mask-size` defaults to or is explicitly set to `auto`. Only in the case of `round` value in both directions might the mask aspect ratio be distorted.

If `round` is set in both directions, the resulting repeated mask images will match the aspect ratio of the origin box. As the mask images are scaled to fit, they may be distorted, ensuring the mask images are not clipped. If `round` is set in only one dimension, the aspect ratio of the mask size is respected.

### Rounded repetitions

In the case of `round`, mask images are scaled up or down to fit the mask image in the positioning area a whole number of times. The mask size increases or decreases to fit the nearest natural number or masks, with a minimum of one mask.

The rendered dimensions of the mask is the size of the origin box divided by the number of iterations of masks in that dimension, where the iterations being an integer greater than zero. The number of iterations is: `X' = D / round(D / X)` where `D` is the width or height, and `round()` is a function that returns the nearest integer greater than zero.

For example, if `mask-repeat` is set to `round` and the `mask-size` sets the mask to be `40px` wide, when the origin box is present (greater than `0px` wide) but less than `60px` wide, there will be a single iteration that is 100% of the width of that box. If the box is at least `60px` wide but less than `100px` wide, there will be two iterations that are each `50%` of the box. From 100px to 140px, three masks will fit along the horizontal axis. These "`40px`-wide" masks will only be `40px` wide if the origin box is an exact multiple of `40px`.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Basic usage

This example demonstrates setting the `mask-repeat` property for a single mask.

#### HTML

Our HTML includes a basic {{htmlelement("div")}} element:

```html
<div></div>
```

#### CSS

We define a `250px` square with a red to blue gradient with a `100px` by `100px` star as a mask image. We use the `mask-repeat` property, setting `round` for the horizontal direction and `space` for the vertical value.

```css
div {
  width: 250px;
  height: 250px;
  background-image: linear-gradient(red, blue);

  mask-image: url(https://mdn.github.io/shared-assets/images/examples/mask-star.svg);
  mask-size: 100px 100px;

  mask-repeat: round space;
}
```

#### Results

{{EmbedLiveSample("basic usage", "", "300px")}}

With `space` and `round` on a mask image that is smaller than the origin box, the mask is not clipped. Rather, the `round` value distorts the star to prevent clipping and preventing white space, while `space` maintains the star's aspect ratio, but adds space as needed between masks.

### Round iterations

Using the same HTML and CSS, this demonstration includes a slider that changes the width of the container to show how, with `round`, masks will grow as space allows until another iteration of the mask fits, or shrink until the number of iterations no longer fits.

```html hidden
<div></div>
<label
  >width: <output></output><br />
  <input type="range" min="0" max="400" value="250" id="width" />
</label>
```

```css hidden
div {
  width: 250px;
  height: 250px;
  background-image: linear-gradient(red, blue);

  mask-image: url(https://mdn.github.io/shared-assets/images/examples/mask-star.svg);
  mask-size: 100px 100px;

  mask-repeat: round space;
}
input {
  clear: both;
  width: 90%;
}
```

```js hidden
const div = document.querySelector("div");
const range = document.getElementById("width");
const output = document.querySelector("output");

range.addEventListener("change", () => {
  const value = `${range.value}px`;
  output.innerText = value;
  div.style.width = value;
});
```

{{EmbedLiveSample("round iterations", "", "300px")}}

The mask is defined as `100px` wide. There is a single star when the origin box is from `1px` to `149px` wide, two stars from `150px` to `249px`, three stars from `250px` to `349px`, and so on.

### The shorthand values

This examples demonstrates all `mask-repeat` shorthand (single-keyword) values.

#### HTML

We include several {{htmlelement("section")}} elements each containing a `<div>`, each with a different class name.

```html
<section class="repeat">
  <div></div>
</section>
<section class="space">
  <div></div>
</section>
<section class="round">
  <div></div>
</section>
<section class="no-repeat">
  <div></div>
</section>
<section class="repeat-x">
  <div></div>
</section>
<section class="repeat-y">
  <div></div>
</section>
```

#### CSS

We give every `<div>` the same CSS, except for the `mask-repeat` value, which we match to their parent's class name. We define a mask size, setting the initial `mask-image` at the bottom right, meaning any clipping will occur on the top-most and left-most masks, on their top and left sides.

```css
div {
  width: 180px;
  height: 180px;
  background-image: linear-gradient(red, blue);

  mask-image: url(https://mdn.github.io/shared-assets/images/examples/mask-star.svg);

  mask-size: 50px 50px;
  mask-position: bottom right;
}

.repeat div {
  mask-repeat: repeat;
}
.space div {
  mask-repeat: space;
}
.round div {
  mask-repeat: round;
}
.no-repeat div {
  mask-repeat: no-repeat;
}
.repeat-x div {
  mask-repeat: repeat-x;
}
.repeat-y div {
  mask-repeat: repeat-y;
}
```

We display the class name using generated content.

```css
section::before {
  content: attr(class);
  display: block;
  text-align: center;
  border-bottom: 1px solid;
}
```

```css hidden
body {
  display: flex;
  flex-flow: row wrap;
  gap: 10px;
}
section {
  border: 1px solid;
}
```

#### Results

{{EmbedLiveSample("The shorthand values", "", "450px")}}

The first (and, in the case of `no-repeat`, only) mask star is [sized](/en-US/docs/Web/CSS/mask-size) to be 50px by 50px, and [positioned](/en-US/docs/Web/CSS/mask-position) at the bottom-right of the painting area, with repeated stars placed above and/or to the left of it with any clipping occurring on the top and left of the top-most and left-most stars. Note that all the stars are the same size and shape, except for `round`, where all the masks shrank to 45px x 45px to fit four complete masks in each direction. Had the container been 174px, there would have been three stars in each direction, instead of four, and each star would have been stretched.

### Multiple mask images and repeats

You can specify a different `<repeat-style>` for each mask image, separated by commas:

```css
.extra-repeats {
  mask-image: url("mask1.png"), url("mask2.png");
  mask-repeat: repeat-x, repeat-y, space;
}
```

Each image is matched with the corresponding repeat style. As there are more `mask-repeat` values than `mask-image` values, the excess `mask-repeat` values are ignored.

```css
.missing-repeats {
  mask-image:
    url("mask1.png"), url("mask2.png"), url("mask3.png"), url("mask4.png");
  mask-repeat: repeat-x, repeat-y;
}
```

Each image is matched with a corresponding repeat style. As there are more `mask-image` values than `mask-repeat` values, the `mask-repeat` is repeated until every `mask-image` has an associated `mask-repeat` value. Here, odd numbered masks repeat along the x-axis, while the even numbered masks repeat along the y-axis.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("background-repeat")}}
- {{cssxref("mask-border-repeat")}}
- [Introduction to CSS masking](/en-US/docs/Web/CSS/CSS_masking/Masking)
- [CSS `mask` properties](/en-US/docs/Web/CSS/CSS_masking/Mask_properties)
- [Declaring multiple masks](/en-US/docs/Web/CSS/CSS_masking/Multiple_masks)
- [CSS masking](/en-US/docs/Web/CSS/CSS_masking) module
