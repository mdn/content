---
title: mask-border
slug: Web/CSS/mask-border
page-type: css-shorthand-property
browser-compat: css.properties.mask-border
---

{{CSSRef}}

The **`mask-border`** [CSS](/en-US/docs/Web/CSS) [shorthand property](/en-US/docs/Web/CSS/Shorthand_properties) lets you create a mask along the edge of an element's border.

## Constituent properties

This property is a shorthand for the following CSS properties:

- [`mask-border-mode`](/en-US/docs/Web/CSS/mask-border-mode)
- [`mask-border-outset`](/en-US/docs/Web/CSS/mask-border-outset)
- [`mask-border-repeat`](/en-US/docs/Web/CSS/mask-border-repeat)
- [`mask-border-slice`](/en-US/docs/Web/CSS/mask-border-slice)
- [`mask-border-source`](/en-US/docs/Web/CSS/mask-border-source)
- [`mask-border-width`](/en-US/docs/Web/CSS/mask-border-width)

## Syntax

```css
/* source | slice */
mask-border: url("border-mask.png") 25;

/* source | slice | repeat */
mask-border: url("border-mask.png") 25 space;

/* source | slice | width */
mask-border: url("border-mask.png") 25 / 35px;

/* source | slice | width | outset | repeat | mode */
mask-border: url("border-mask.png") 25 / 35px / 12px space alpha;

/* Global values */
mask-border: inherit;
mask-border: initial;
mask-border: revert;
mask-border: revert-layer;
mask-border: unset;
```

### Values

- `<'mask-border-source'>`
  - : The source image. See {{cssxref("mask-border-source")}}.
- `<'mask-border-slice'>`
  - : The dimensions for slicing the source image into regions. Up to four values may be specified. See {{cssxref("mask-border-slice")}}.
- `<'mask-border-width'>`
  - : The width of the border mask. Up to four values may be specified. See {{cssxref("mask-border-width")}}.
- `<'mask-border-outset'>`
  - : The distance of the border mask from the element's outside edge. Up to four values may be specified. See {{cssxref("mask-border-outset")}}.
- `<'mask-border-repeat'>`
  - : Defines how the edge regions of the source image are adjusted to fit the dimensions of the border mask. Up to two values may be specified. See {{cssxref("mask-border-repeat")}}.
- `<'mask-border-mode'>`
  - : Defines whether the source image is treated as a luminance mask or alpha mask. See {{cssxref("mask-border-mode")}}.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting a bitmap-based mask border

In this example, we will mask an element's border with a diamond pattern. The source for the mask is a ".png" file of 90 by 90 pixels, with three diamonds going vertically and horizontally:

![The image used for the mask examples on this page. The mask is a transparent square with three rows of three diamonds each. The diamonds are a very light, almost white, shade of grey. The middle part between the diamonds is also solid grey. The parts between the outside of the diamonds and the edge of the image are transparent.](mask-border-diamonds.png)

To match the size of a single diamond, we will use a value of 90 divided by 3, or `30`, for slicing the image into corner and edge regions. A repeat value of `round` will make the mask slices fit evenly, i.e., without clipping or gaps.

{{EmbedGHLiveSample("css-examples/masking/mask-border.html", '100%', 800)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("mask-border-mode")}}
- {{cssxref("mask-border-outset")}}
- {{cssxref("mask-border-repeat")}}
- {{cssxref("mask-border-source")}}
- {{cssxref("mask-border-width")}}
