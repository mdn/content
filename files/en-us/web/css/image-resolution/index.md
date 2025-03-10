---
title: image-resolution
slug: Web/CSS/image-resolution
page-type: css-property
status:
  - experimental
spec-urls: https://drafts.csswg.org/css-images-4/#the-image-resolution
---

{{CSSRef}}{{SeeCompatTable}}

The **`image-resolution`** [CSS](/en-US/docs/Web/CSS) property specifies the intrinsic resolution of all raster images used in or on the element. It affects content images such as replaced elements and generated content, and decorative images such as `background-image` images.

The image resolution is defined as the number of image pixels per unit length, e.g., pixels per inch. By default, CSS assumes a resolution of one image pixel per CSS px unit; however, the `image-resolution` property allows a different resolution to be specified.

## Syntax

```css
image-resolution: from-image;
image-resolution: 300dpi;
image-resolution: from-image 300dpi;
image-resolution: 300dpi snap;

/* Global values */
image-resolution: inherit;
image-resolution: initial;
image-resolution: revert;
image-resolution: revert-layer;
image-resolution: unset;
```

### Values

- {{cssxref("&lt;resolution&gt;")}}
  - : Specifies the intrinsic resolution explicitly.
- `from-image`
  - : Uses the intrinsic resolution as specified by the image format. If the image does not specify its own resolution, the explicitly specified resolution is used (if given), else it defaults to `1dppx` (1 image pixel per CSS px unit).
- `snap`
  - : If the `snap` keyword is provided, the computed resolution is the specified resolution rounded to the nearest value that would map one image pixel to an integer number of {{glossary("device pixel", "device pixels")}}. If the resolution is taken from the image, then the used intrinsic resolution is the image's native resolution similarly adjusted.

> [!NOTE]
> As vector formats such as SVG do not have an intrinsic resolution, this property has no effect on vector images.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting a high dpi for print

When printing the document, use a higher resolution.

```css
@media print {
  .my-image {
    image-resolution: 300dpi;
  }
}
```

### Use image resolution with fallback

Uses the resolution from the image. If the image does not have a resolution, use 300dpi rather than the default 1dppx.

```css
.my-image {
  image-resolution: from-image 300dpi;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

No browser currently supports this property.

## See also

- Other image-related CSS properties: {{cssxref("object-fit")}}, {{cssxref("object-position")}}, {{cssxref("image-orientation")}}, {{cssxref("image-rendering")}}.
- [Chromium bug: 1086473](https://crbug.com/1086473).
