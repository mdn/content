---
title: mask-size
slug: Web/CSS/mask-size
page-type: css-property
browser-compat: css.properties.mask-size
---

{{CSSRef}}

The **`mask-size`** [CSS](/en-US/docs/Web/CSS) property specifies the sizes of the mask images. The size of the image can be fully or partially constrained in order to preserve its intrinsic ratio.

> [!NOTE]
> If the value of this property is not set in a {{cssxref("mask")}} shorthand property that is applied to the element after the `mask-size` CSS property, the value of this property is then reset to its initial value by the shorthand property.

## Syntax

```css
/* Keywords syntax */
mask-size: cover;
mask-size: contain;
mask-size: auto;

/* One-value syntax */
/* the width of the image (height set to 'auto') */
mask-size: 50%;
mask-size: 3em;
mask-size: 12px;

/* Two-value syntax */
/* first value: width of the mask, second value: height */
mask-size: 3em 25%;
mask-size: auto 6px;
mask-size: auto 50%;

/* Multiple values */
mask-size: auto, contain;
mask-size:
  50%,
  50% 25%,
  25%;
mask-size: 6px, auto, contain;

/* Global values */
mask-size: inherit;
mask-size: initial;
mask-size: revert;
mask-size: revert-layer;
mask-size: unset;
```

### Values

The property accepts a comma-separated list of `<bg-size>` values. Each `<bg-size>` value in the list is a pair of values, the first defining the width and the second defining the height of the mask, or a shorthand value defining both values. Values include:

- `contain`

  - : Scales the mask image up or down, while preserving its aspect-ratio, making as large as possible within its container without cropping or stretching the mask.
    If the mask image is smaller than the container, the mask will tile, or repeat, unless the {{cssxref("mask-repeat")}} property is set to `no-repeat`.

- `cover`

  - : Scales the mask image to the smallest possible size to fill the container while preserving its aspect-ratio. If the aspect-ratio of the mask differ from the element, the mask image will be cropped either vertically or horizontally. With the mask image completely _covering_ the container with no empty space, the mask image will not repeat.

- `auto`

  - : Maintains the original aspect ratio of the mask source. When set for both the width and height, the origin size of the mask resource is used. Otherwise, `auto` scales the mask image in the corresponding direction such that its original aspect ratio is maintained.

- {{cssxref("&lt;length&gt;")}}

  - : Renders the mask image in the corresponding dimension to the specified length. Negative values are not allowed.

- {{cssxref("&lt;percentage&gt;")}}
  - : Renders the mask image in the corresponding dimension to the specified percentage of the box origina area as defined by the {{cssxref("mask-origin")}} property, which defaults to `padding-box`. Negative values are not allowed.

## Description

An element can have multiple mask layers applied. Masks layers can be sized with the `mask-size` property. The number of layers is determined by the number of comma-separated values in the {{cssxref("mask-image")}} property value (even if a value is `none`). Each `mask-size` value in the comma-separated list of values is matched up with the associated mask layer as defined by the list of `mask-image` values, in order. If the number of values in the two properties differs, and excess values of `mask-size` are not used, or, if `mask-size` has fewer values than `mask-image`, the `mask-size` values are repeated.

Each `mask-size` is a `<bg-size>` values. Each `<bg-size>` takes two values or one shorthand value. If two values are defined, the first defines the width of the mask while the second value defines its height. If only one value is defined, this value defines the width of the mask image, and the height is set to `auto`, maintaining the mask-image's original aspect ration.

A `<bg-size>` can be specified in multiple ways:

- Using the keyword `auto`. This is the default.
- Using the keyword `contain`.
- Using the keyword `cover`.
- Using width and height values as a {{cssxref("&lt;length&gt;")}} or {{cssxref("&lt;percentage&gt;")}}.

When specifying the mask size using width and height, the first sets the mask's width and the second sets its height. If only one value is given, it defines the width and the height is set to `auto`.

The rendered size of the mask image is then computed as follows:

- If both components of `mask-size` are specified and are not `auto`:
  - : The mask image renders at the specified size.
- If the `mask-size` is `contain` or `cover`:
  - : The image is rendered by preserving its aspect ratio at the largest size contained within or covering the mask positioning area. If the image has no intrinsic proportion, such as with gradients, then it is rendered at the size of the mask positioning area.
- If the `mask-size` is `auto` (or `auto auto`):
  - : If the image has both intrinsic dimensions, it is rendered at that size. If it has no intrinsic dimensions and no intrinsic proportion, it is rendered at the size of the mask positioning area.

The interpretation of possible values depends on the image's intrinsic dimensions (width and height) and aspect ration, or the intrinsic proportion which is the ratio of the width and height. While bitmap images have both intrinsic dimensions and proportion, gradients do not.
If it has no dimensions but has a proportion, it's rendered as if `contain` had been specified instead. If the image has one intrinsic dimension and a proportion, it's rendered at the size determined by that one dimension and the proportion. If the image has one intrinsic dimension but no proportion, it's rendered using the intrinsic dimension and the corresponding dimension of the mask positioning area.

- If `mask-size` has one `auto` component and one non-`auto` component:
  - : If the image has an intrinsic proportion, then render it using the specified dimension and compute the other dimension from the specified dimension and the intrinsic proportion. If the image has no intrinsic proportion, use the specified dimension for that dimension. For the other dimension, use the image's corresponding intrinsic dimension if there is one. If there is no such intrinsic dimension, use the corresponding dimension of the mask positioning area.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting mask size as a percentage

```html live-sample___mask-size-example
<div class="masked"></div>
```

```css live-sample___mask-size-example
.masked {
  width: 200px;
  height: 200px;
  background: blue linear-gradient(red, blue);
  margin-bottom: 10px;

  mask-image: url(https://mdn.github.io/shared-assets/images/examples/mdn.svg);
  mask-size: 50%;
}
```

{{EmbedLiveSample("mask-size-example", "", "250px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Clipping and Masking in CSS](https://css-tricks.com/clipping-masking-css/)
