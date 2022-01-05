---
title: CanvasRenderingContext2D.getImageData()
slug: Web/API/CanvasRenderingContext2D/getImageData
tags:
  - API
  - Canvas
  - Canvas API
  - CanvasRenderingContext2D
  - Cut
  - Graphics
  - Image
  - ImageData
  - Method
  - Reference
  - copy
  - getImageData
  - img
browser-compat: api.CanvasRenderingContext2D.getImageData
---
{{APIRef("Canvas API")}}

The {{domxref("CanvasRenderingContext2D")}} method
**`getImageData()`** of the Canvas 2D API returns an
{{domxref("ImageData")}} object representing the underlying pixel data for a specified
portion of the canvas.

This method is not affected by the canvas's transformation matrix. If the specified
rectangle extends outside the bounds of the canvas, the pixels outside the canvas are
transparent black in the returned `ImageData` object.

> **Note:** Image data can be painted onto a canvas using the
> {{domxref("CanvasRenderingContext2D.putImageData()", "putImageData()")}} method.

You can find more information about `getImageData()` and general
manipulation of canvas contents in [Pixel
manipulation with canvas](/en-US/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas).

## Syntax

```js
ctx.getImageData(sx, sy, sw, sh);
```

### Parameters

- `sx`
  - : The x-axis coordinate of the top-left corner of the rectangle from which the
    `ImageData` will be extracted.
- `sy`
  - : The y-axis coordinate of the top-left corner of the rectangle from which the
    `ImageData` will be extracted.
- `sw`
  - : The width of the rectangle from which the `ImageData` will be extracted.
    Positive values are to the right, and negative to the left.
- `sh`
  - : The height of the rectangle from which the `ImageData` will be extracted.
    Positive values are down, and negative are up.

### Return value

An {{domxref("ImageData")}} object containing the image data for the rectangle of the
canvas specified. The coordinates of the rectangle's top-left corner are
`(sx, sy)`, while the coordinates of the bottom corner are
`(sx + sw, sy + sh)`.

### Exceptions

- `IndexSizeError` {{domxref("DOMException")}}
  - : Thrown if either `sw` or `sh` are zero.
- `SecurityError` {{domxref("DOMException")}}
  - : The canvas contains or may contain pixels which were loaded from an origin other
    than the one from which the document itself was loaded.
    To avoid a `SecurityError` {{domxref("DOMException")}} being thrown in this situation,
    configure CORS to allow the source image to be used in this way.
    See [Allowing cross-origin use of images and canvas](/en-US/docs/Web/HTML/CORS_enabled_image).

## Example

### Getting image data from a canvas

This example draws a rectangle, and then uses `getImageData()` to grab a
portion of the canvas.

```html
<canvas id="canvas"></canvas>
```

The object retrieved by `getImageData()` has a width of 200 and a height of
100, for a total of 20,000 pixels. Of those pixels, most are either transparent or taken
from off the canvas; only 2,500 of them are opaque black (the color of the drawn
rectangle).

```js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
ctx.rect(10, 10, 100, 100);
ctx.fill();

let imageData = ctx.getImageData(60, 60, 200, 100);
ctx.putImageData(imageData, 150, 10);
```

#### Result

{{EmbedLiveSample("Getting_image_data_from_a_canvas", 700, 180)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The interface defining this method: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("ImageData")}} object
- {{domxref("CanvasRenderingContext2D.putImageData()")}}
- [Pixel manipulation with canvas](/en-US/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas)
