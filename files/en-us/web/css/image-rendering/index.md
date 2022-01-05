---
title: image-rendering
slug: Web/CSS/image-rendering
tags:
  - CSS
  - CSS Images
  - CSS Property
  - Reference
  - image-rendering
  - recipe:css-property
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
  - : The image must be scaled with an algorithm that preserves contrast and edges in the image, and which does not smooth colors or introduce blur to the image in the process. Suitable algorithms include nearest-neighbor and [other non-smoothing scaling algorithms](https://en.wikipedia.org/wiki/Pixel-art_scaling_algorithms) such as 2×SaI and [hqx-family](https://en.wikipedia.org/wiki/Hqx) algorithms. This value is intended for pixel-art images, such as in browser games.
- `pixelated`
  - : When scaling the image up, the nearest-neighbor algorithm must be used, so that the image appears to be composed of large pixels. When scaling down, this is the same as `auto`.

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
  <img class="auto" alt="auto" src="blumen.jpg" />
  <img class="pixelated" alt="pixelated" src="blumen.jpg" />
  <img class="crisp-edges" alt="crisp-edges" src="blumen.jpg" />
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
  -ms-interpolation-mode: nearest-neighbor;
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

> **Note:** Although `crisp-edges` is supposed to use a pixel-art scaler like in the specification example, in practice no browsers (as of January 2020) does so. [In Firefox](https://dxr.mozilla.org/mozilla-central/rev/5fd4cfacc90ddd975c82ba27fdc56f4187b3f180/gfx/wr/webrender/src/resource_cache.rs#1727), `crisp-edges` is interpreted as nearest-neighbor, `pixelated` is not supported, and `auto` is interpolated as trilinear or linear.
>
> For behavior on Chromium and Safari (WebKit), see the [`GetInterpolationQuality`](https://cs.chromium.org/chromium/src/third_party/blink/renderer/core/style/computed_style.cc?type=cs&q=GetInterpolationQuality&g=0&l=1160) function and [`CSSPrimitiveValue::operator ImageRendering()`](https://github.com/WebKit/webkit/blob/9b169b6c85394d94f172e5d75ca2f6c74830e99c/Source/WebCore/css/CSSPrimitiveValueMappings.h#L4324) respectively.

## See also

- Other image-related CSS properties: {{cssxref("object-fit")}}, {{cssxref("object-position")}}, {{cssxref("image-orientation")}}, {{cssxref("image-rendering")}}, {{cssxref("image-resolution")}}.
