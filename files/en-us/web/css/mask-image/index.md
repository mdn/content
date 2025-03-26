---
title: mask-image
slug: Web/CSS/mask-image
page-type: css-property
browser-compat: css.properties.mask-image
---

{{CSSRef}}

The **`mask-image`** [CSS](/en-US/docs/Web/CSS) property sets the image that is used as mask layer for an element.
By default this means the alpha channel of the mask image will be multiplied with the alpha channel of the element. This can be controlled with the {{cssxref("mask-mode")}} property.

## Syntax

```css
/* Keyword value */
mask-image: none;

/* <mask-source> value */
mask-image: url(masks.svg#mask1);

/* <image> values */
mask-image: linear-gradient(rgb(0 0 0 / 100%), transparent);
mask-image: image(url(mask.png), skyblue);

/* Multiple values */
mask-image:
  image(url(mask.png), skyblue), linear-gradient(rgb(0 0 0 / 100%), transparent);

/* Global values */
mask-image: inherit;
mask-image: initial;
mask-image: revert;
mask-image: revert-layer;
mask-image: unset;
```

### Values

- `none`

  - : This keyword is interpreted as a transparent black image layer.

- `<mask-source>`

  - : A {{cssxref("url_value", "&lt;url&gt;")}} reference to a {{SVGElement("mask")}} or to a CSS image.

    > [!NOTE]
    > Only the image sources served over HTTP and HTTPS protocols are accepted due to the [CORS](/en-US/docs/Glossary/CORS) policy. Images served locally, including relative or absolute `file://` protocols, are not accepted. To test URL image sources locally, [set up a local server](/en-US/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection#localhost).

- {{cssxref("&lt;image&gt;")}}
  - : An image value used as a mask image layer.

In the following cases, the mask is counted as a transparent black image layer:

- the mask image is empty (zero width or zero height)
- the mask image fails to download
- the mask image format is not supported by the browser
- the mask image doesn't exist
- the mask value doesn't point to a mask image

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting a mask image with a URL and a gradient

```html live-sample___mask-image-example
<div class="masked"></div>
```

```css live-sample___mask-image-example
.masked {
  width: 200px;
  height: 200px;
  mask-repeat: no-repeat;
  mask-size: 100%;

  background: red;
  mask-image:
    url(https://mdn.github.io/shared-assets/images/examples/mask-star.svg),
    radial-gradient(transparent 50%, black);
}
```

{{EmbedLiveSample("mask-image-example", "100%", 250)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Clipping and Masking in CSS](https://css-tricks.com/clipping-masking-css/)
- [Apply effects to images with CSS's `mask-image` property](https://web.dev/articles/css-masking)
