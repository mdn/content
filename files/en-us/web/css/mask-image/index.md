---
title: mask-image
slug: Web/CSS/mask-image
page-type: css-property
browser-compat: css.properties.mask-image
---

{{CSSRef}}

The **`mask-image`** [CSS](/en-US/docs/Web/CSS) property sets the image that is used as mask layer for an element.
By default this means the alpha channel of the mask image will be multiplied with the alpha channel of the element. This can be controlled with the {{cssxref("mask-mode")}} property.

```css
/* Keyword value */
mask-image: none;

/* <mask-source> value */
mask-image: url(masks.svg#mask1);

/* <image> values */
mask-image: linear-gradient(rgba(0, 0, 0, 1), transparent);
mask-image: image(url(mask.png), skyblue);

/* Multiple values */
mask-image: image(url(mask.png), skyblue), linear-gradient(rgba(0, 0, 0, 1), transparent);

/* Global values */
mask-image: inherit;
mask-image: initial;
mask-image: revert;
mask-image: revert-layer;
mask-image: unset;
```

## Syntax

### Values

- `none`
  - : This keyword is interpreted as an opaque white image layer.
- `<mask-source>`
  - : A {{cssxref("url","url()")}} reference to a {{SVGElement("mask")}} or to a CSS image.
- {{cssxref("&lt;image&gt;")}}
  - : An image value used as mask image layer.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting a mask image with a URL

{{EmbedGHLiveSample("css-examples/masking/mask-image.html", '100%', 560)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Clipping and Masking in CSS](https://css-tricks.com/clipping-masking-css/)
- [Apply effects to images with CSS's mask-image property](https://web.dev/css-masking/)
