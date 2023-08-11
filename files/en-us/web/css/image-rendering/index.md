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
- `smooth` {{Experimental_Inline}}
  - : The image should be scaled with an algorithm that maximizes the appearance of the image. In particular, scaling algorithms that "smooth" colors are acceptable, such as bilinear interpolation. This is intended for images such as photos.
- `high-quality` {{Experimental_Inline}}
  - : Identical to `smooth`, but with a preference for higher-quality scaling. If system resources are constrained, images with `high-quality` should be prioritized over those with any other value, when considering which images to degrade the quality of and to what degree.
- `crisp-edges`
  - : The image is scaled with an algorithm that preserves contrast and edges in the image. Generally intended for images such as pixel art or line drawings, no blurring or color smoothing occurs.
- `pixelated`
  - : The image is scaled with the "nearest neighbor" or similar algorithm, preserving a "pixelated" look as the image changes in size.

> **Note:** The values `optimizeQuality` and `optimizeSpeed` present in an early draft (and coming from its SVG counterpart {{SVGAttr("image-rendering")}}) are defined as synonyms for the `smooth` and `pixelated` values respectively.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting image scaling algorithms

In practical use, the `pixelated` and `crisp-edges` rules can be combined to provide some fallback for each other. (Just prepend the actual rules with the fallback.) The [Canvas API](/en-US/docs/Web/API/Canvas_API) can provide a [fallback solution for `pixelated`](http://phrogz.net/tmp/canvas_image_zoom.html) through manual image data manipulation or with [`imageSmoothingEnabled`](/en-US/docs/Web/API/CanvasRenderingContext2D/imageSmoothingEnabled).

```html hidden
<div>
  <img
    class="auto"
    alt="A small photo of some white and yellow flower against a leafy green background. The image is about 33% smaller than the size it is being displayed at. This upscaling causes the image to appear blurry, with notable soft edges between objects."
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

.pixelated {
  image-rendering: pixelated;
}

.crisp-edges {
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
}
```

#### Result

{{EmbedLiveSample('Setting_image_scaling_algorithms')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

> **Note:** Although `crisp-edges` is supposed to use a pixel-art scaler like in the specification example, in practice no browsers (as of January 2020) do so. [In Firefox](https://searchfox.org/mozilla-central/rev/1061fae5e225a99ef5e43dbdf560a91a0c0d00d1/gfx/wr/webrender/src/resource_cache.rs#1356), `crisp-edges` or `pixelated` is interpreted as nearest-neighbor, and `auto` is interpolated as trilinear or linear.
>
> For behavior on Chromium and Safari (WebKit), see the [`GetInterpolationQuality`](https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink/renderer/core/style/computed_style.cc;l=1160) function and [`CSSPrimitiveValue::operator ImageRendering()`](https://github.com/WebKit/WebKit/blob/9b26fc6081e0db8a1304cf4b4f8f1c67efb9bc0c/Source/WebCore/css/CSSPrimitiveValueMappings.h#L4045) respectively.

## See also

- Other image-related CSS properties: {{cssxref("object-fit")}}, {{cssxref("object-position")}}, {{cssxref("image-orientation")}}, {{cssxref("image-rendering")}}, {{cssxref("image-resolution")}}.
