---
title: mask-size
slug: Web/CSS/mask-size
tags:
  - CSS
  - CSS Masking
  - CSS Property
  - Reference
  - recipe:css-property
browser-compat: css.properties.mask-size
---
{{CSSRef}}

The **`mask-size`** [CSS](/en-US/docs/Web/CSS) property specifies the sizes of the mask images. The size of the image can be fully or partially constrained in order to preserve its intrinsic ratio.

```css
/* Keywords syntax */
mask-size: cover;
mask-size: contain;

/* One-value syntax */
/* the width of the image (height set to 'auto') */
mask-size: 50%;
mask-size: 3em;
mask-size: 12px;
mask-size: auto;

/* Two-value syntax */
/* first value: width of the image, second value: height */
mask-size: 50% auto;
mask-size: 3em 25%;
mask-size: auto 6px;
mask-size: auto auto;

/* Multiple values */
/* Do not confuse this with mask-size: auto auto */
mask-size: auto, auto;
mask-size: 50%, 25%, 25%;
mask-size: 6px, auto, contain;

/* Global values */
mask-size: inherit;
mask-size: initial;
mask-size: revert;
mask-size: revert-layer;
mask-size: unset;
```

> **Note:** If the value of this property is not set in a {{cssxref("mask")}} shorthand property that is applied to the element after the `mask-size` CSS property, the value of this property is then reset to its initial value by the shorthand property.

## Syntax

One or more `<bg-size>` values, separated by commas.

A `<bg-size>` can be specified in one of three ways:

- using the keyword `contain`
- using the keyword `cover`
- using width and height values

To specify a size using width and height, you can supply one or two values:

- If only one value is given it sets the width, with the height set to `auto`.
- If two values are given, the first sets width and the second sets height.

Each value can be a `<length>`, a `<percentage>`, or `auto`.

### Values

- `<length>`
  - : A `{{cssxref("&lt;length&gt;")}}` value scales the mask image to the specified length in the corresponding dimension. Negative lengths are not allowed.
- `<percentage>`
  - : A {{cssxref("&lt;percentage&gt;")}} value scales the mask image in the corresponding dimension to the specified percentage of the mask positioning area, which is determined by the value of {{cssxref("mask-origin")}}. The mask positioning area is, by default, the area containing the content of the box and its padding; the area may also be changed to just the content or to the area containing borders, padding and content. Negative percentages are not allowed.
- `auto`
  - : A keyword that scales the mask image in the corresponding directions in order to maintain its intrinsic proportion.
- `contain`
  - : A keyword that scales the image as large as possible and maintains image aspect ratio (image doesn't get squished). The image is _letterboxed_ within the container. The image is automatically centered unless over-ridden by another property such as {{cssxref("mask-position")}}.
- `cover`
  - : A keyword that is the inverse of `contain`. Scales the image as large as possible and maintains image aspect ratio (image doesn't get squished). The image "covers" the entire width or height of the container. When the image and container have different dimensions, _the image is clipped_ either on left/right or at top/bottom.

The interpretation of possible values depends on the image's intrinsic dimensions (width and height) and intrinsic proportion (ratio of width and height). A bitmap image always has intrinsic dimensions and an intrinsic proportion. A vector image may have both intrinsic dimensions and thus it has an intrinsic proportion too. It also may have one or no intrinsic dimensions and in either case it might or might not have an intrinsic proportion. Gradients are treated as images with no intrinsic dimensions or intrinsic proportion.

The rendered size of the mask image is then computed as follows:

- If both components of `mask-size` are specified and are not `auto`:
  - : The mask image renders at the specified size.
- If the `mask-size` is `contain` or `cover`:
  - : The image is rendered by preserving its intrinsic proportion at the largest size contained within or covering the mask positioning area. If the image has no intrinsic proportion, then it is rendered at the size of the mask positioning area.
- If the `mask-size` is `auto` or `auto auto`:
  - : If the image has both intrinsic dimensions, it is rendered at that size. If it has no intrinsic dimensions and no intrinsic proportion, it is rendered at the size of the mask positioning area. If it has no dimensions but has a proportion, it's rendered as if `contain` had been specified instead. If the image has one intrinsic dimension and a proportion, it's rendered at the size determined by that one dimension and the proportion. If the image has one intrinsic dimension but no proportion, it's rendered using the intrinsic dimension and the corresponding dimension of the mask positioning area.
- If `mask-size` has one `auto` component and one non-`auto` component:
  - : If the image has an intrinsic proportion, then render it using the specified dimension and compute the other dimension from the specified dimension and the intrinsic proportion. If the image has no intrinsic proportion, use the specified dimension for that dimension. For the other dimension, use the image's corresponding intrinsic dimension if there is one. If there is no such intrinsic dimension, use the corresponding dimension of the mask positioning area.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting mask size as a percentage

{{EmbedGHLiveSample("css-examples/masking/mask-size.html", '100%', 700)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Clipping and Masking in CSS](https://css-tricks.com/clipping-masking-css/)
