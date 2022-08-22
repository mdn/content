---
title: createImageBitmap()
slug: Web/API/createImageBitmap
page-type: web-api-global-function
tags:
  - API
  - Canvas
  - DOM
  - Method
  - Reference
  - createImageBitmap
browser-compat: api.createImageBitmap
---
{{APIRef("Canvas API")}}

The **`createImageBitmap()`** method creates a bitmap from a
given source, optionally cropped to contain only a portion of that source. The method
exists on the global scope in both windows and workers. It accepts a variety of
different image sources, and returns a {{jsxref("Promise")}} which resolves to an
{{domxref("ImageBitmap")}}.

## Syntax

```js
createImageBitmap(image)
createImageBitmap(image, options)
createImageBitmap(image, sx, sy, sw, sh)
createImageBitmap(image, sx, sy, sw, sh, options)
```

### Parameters

- `image`
  - : An image source, which can be an {{HTMLElement("img")}}, SVG
    {{SVGElement("image")}}, {{HTMLElement("video")}}, {{HTMLElement("canvas")}},
    {{domxref("HTMLImageElement")}}, {{domxref("SVGImageElement")}},
    {{domxref("HTMLVideoElement")}},
    {{domxref("HTMLCanvasElement")}}, {{domxref("Blob")}}, {{domxref("ImageData")}},
    {{domxref("ImageBitmap")}}, or {{domxref("OffscreenCanvas")}} object.
- `sx`
  - : The x coordinate of the reference point of the rectangle from which the
    `ImageBitmap` will be extracted.
- `sy`
  - : The y coordinate of the reference point of the rectangle from which the
    `ImageBitmap` will be extracted.
- `sw`
  - : The width of the rectangle from which the `ImageBitmap` will be
    extracted. This value can be negative.
- `sh`
  - : The height of the rectangle from which the `ImageBitmap` will be
    extracted. This value can be negative.
- `options` {{optional_inline}}

  - : An object that sets options for the image's extraction. The available options are:

    - `imageOrientation`
      - : Specifies whether the image should be presented
        as is or flipped vertically. Either `none` (default) or
        `flipY`.
    - `premultiplyAlpha`
      - : Specifies whether the bitmap's color channels
        should be premultiplied by the alpha channel. One of `none`,
        `premultiply`, or `default` (default).
    - `colorSpaceConversion`
      - : Specifies whether the image should be decoded
        using color space conversion. Either `none` or `default`
        (default). The value `default` indicates that implementation-specific
        behavior is used.
    - `resizeWidth`
      - : A long integer that indicates the output width.
    - `resizeHeight`
      - : A long integer that indicates the output height.
    - `resizeQuality`
      - : Specifies the algorithm to be used for resizing the
        input to match the output dimensions. One of `pixelated`,
        `low` (default), `medium`, or `high`.

### Return value

A {{jsxref("Promise")}} which resolves to an {{domxref("ImageBitmap")}} object
containing bitmap data from the given rectangle.

## Examples

### Creating sprites from a sprite sheet

This example loads a sprite sheet, extracts individual sprites, and then renders each
sprite to the canvas. A sprite sheet is an image containing multiple smaller images,
each of which you want to be able to render separately.

```js
const canvas = document.getElementById('myCanvas'),
ctx = canvas.getContext('2d'),
image = new Image();

// Wait for the sprite sheet to load
image.onload = () => {
  Promise.all([
    // Cut out two sprites from the sprite sheet
    createImageBitmap(image, 0, 0, 32, 32),
    createImageBitmap(image, 32, 0, 32, 32)
  ]).then((sprites) => {
    // Draw each sprite onto the canvas
    ctx.drawImage(sprites[0], 0, 0);
    ctx.drawImage(sprites[1], 32, 32);
  });
}

// Load the sprite sheet from an image file
image.src = 'sprites.png';
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CanvasRenderingContext2D.drawImage()")}}
- {{domxref("ImageData")}}
