---
title: image-rendering
slug: Web/CSS/image-rendering
page-type: css-property
browser-compat: css.properties.image-rendering
---

{{CSSRef}}

The **`image-rendering`** [CSS](/en-US/docs/Web/CSS) property sets an image scaling algorithm. The property applies to an element itself, to any images set in its other properties, and to its descendants.

{{EmbedInteractiveExample("pages/css/image-rendering.html")}}

The {{Glossary("user agent")}} will scale an image when the page author specifies dimensions other than its natural size. Scaling may also occur due to user interaction (zooming). For example, if the natural size of an image is `100×100px`_,_ but its actual dimensions are `200×200px` (or `50×50px`), then the image will be upscaled (or downscaled) using the algorithm specified by `image-rendering`. This property has no effect on non-scaled images.

## Syntax

```css
/* Keyword values */
image-rendering: auto;
image-rendering: smooth;
image-rendering: crisp-edges;
image-rendering: pixelated;

/* Global values */
image-rendering: inherit;
image-rendering: initial;
image-rendering: revert;
image-rendering: revert-layer;
image-rendering: unset;
```

### Values

- `auto`
  - : The scaling algorithm is UA dependent. Since version 1.9 (Firefox 3.0), Gecko uses _bilinear_ resampling (high quality).
- `smooth`
  - : The image should be scaled with an algorithm that maximizes the appearance of the image. In particular, scaling algorithms that "smooth" colors are acceptable, such as bilinear interpolation. This is intended for images such as photos.
- `crisp-edges`
  - : The image is scaled with an algorithm such as "nearest neighbor" that preserves contrast and edges in the image. Generally intended for images such as pixel art or line drawings, no blurring or color smoothing occurs.
- `pixelated`
  - : The image is scaled with the "nearest neighbor" or similar algorithm to the nearest integer multiple of the original image size, then uses smooth interpolation to bring the image to the final desired size. This is intended to preserve a "pixelated" look without introducing scaling artifacts when the upscaled resolution isn't an integer multiple of the original.

> [!NOTE]
> The values `optimizeQuality` and `optimizeSpeed` present in an early draft (and coming from its SVG counterpart {{SVGAttr("image-rendering")}}) are defined as synonyms for the `smooth` and `pixelated` values respectively.

> [!NOTE]
> The [CSS images](/en-US/docs/Web/CSS/CSS_images) module defines a `high-quality` value for the `image-rendering` property to provide a preference for higher-quality scaling, however, this is not supported in any browsers.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting image scaling algorithms

In this example, an image is repeated three times, with each having a different `image-rendering` value applied.

```html hidden
<div>
  <img
    class="auto"
    alt="A small photo of some white and yellow flower against a leafy green background. The image is about 33% smaller than the size it is being displayed at. This upscaling causes the image to appear blurry, with notable soft edges between objects."
    src="blumen.jpg" />
  <img
    class="smooth"
    alt="The same photo as the previous image, which is also being upscaled the same amount. Browsers that support the smooth value for the image-rendering property display the image with the maximize appearance."
    src="blumen.jpg" />
  <img
    class="pixelated"
    alt="The same photo as the previous image, which is also being upscaled the same amount. Browsers that support the pixelated value for the image-rendering property display the image as very pixelated. Individual pixels are clearly visible and edges appear much sharper."
    src="blumen.jpg" />
  <img
    class="crisp-edges"
    alt="The same photo as the previous images, which is also being upscaled the same amount. Browsers that support the crisp-edges value for the image-rendering property display the image as very pixelated. In these examples, there is virtually no perceivable difference between the pixelated and crisp-edges versions."
    src="blumen.jpg" />
</div>
```

```css hidden
img {
  height: 200px;
}
```

#### CSS

```css
.auto {
  image-rendering: auto;
}

.smooth {
  image-rendering: smooth;
}

.pixelated {
  image-rendering: pixelated;
}

.crisp-edges {
  image-rendering: crisp-edges;
}
```

#### Result

{{EmbedLiveSample('Setting_image_scaling_algorithms', 260, 260)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("object-fit")}}
- {{cssxref("object-position")}}
- {{cssxref("image-orientation")}}
- {{cssxref("image-resolution")}}
- [CSS images](/en-US/docs/Web/CSS/CSS_images) module
- SVG {{SVGAttr("image-rendering")}} attribute
