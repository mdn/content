---
title: "CanvasRenderingContext2D: getImageData() method"
short-title: getImageData()
slug: Web/API/CanvasRenderingContext2D/getImageData
page-type: web-api-instance-method
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
manipulation of canvas contents in [Pixel manipulation with canvas](/en-US/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas).

## Syntax

```js-nolint
getImageData(sx, sy, sw, sh)
getImageData(sx, sy, sw, sh, settings)
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
- `settings` {{optional_inline}}
  - : An object with the following properties:
    - `colorSpace`: Specifies the color space of the image data. Can be set to `"srgb"` for the [sRGB color space](https://en.wikipedia.org/wiki/SRGB) or `"display-p3"` for the [display-p3 color space](https://en.wikipedia.org/wiki/DCI-P3).

### Return value

An {{domxref("ImageData")}} object containing the image data for the rectangle of the
canvas specified. The coordinates of the rectangle's top-left corner are
`(sx, sy)`, while the coordinates of the bottom corner are
`(sx + sw - 1, sy + sh - 1)`.

### Exceptions

- `IndexSizeError` {{domxref("DOMException")}}
  - : Thrown if either `sw` or `sh` are zero.
- `SecurityError` {{domxref("DOMException")}}
  - : The canvas contains or may contain pixels which were loaded from an origin other
    than the one from which the document itself was loaded.
    To avoid a `SecurityError` {{domxref("DOMException")}} being thrown in this situation,
    configure CORS to allow the source image to be used in this way.
    See [Allowing cross-origin use of images and canvas](/en-US/docs/Web/HTML/CORS_enabled_image).

## Examples

### Getting image data from a canvas

This example draws an image, and then uses `getImageData()` to grab a
portion of the canvas.

We use `getImageData()` to extract a slice of the image, starting at `(10, 20)`, with a width of `80` and a height of `230`. We then draw this slice three times, positioning the slices progressively below and to the right of the last slice.

#### HTML

```html
<canvas id="canvas" width="700" height="400"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const image = new Image();
image.src = "plumeria.jpg";
image.addEventListener("load", () => {
  ctx.drawImage(image, 0, 0, 233, 320);

  const imageData = ctx.getImageData(10, 20, 80, 230);
  ctx.putImageData(imageData, 260, 0);
  ctx.putImageData(imageData, 380, 50);
  ctx.putImageData(imageData, 500, 100);
});
```

#### Result

{{EmbedLiveSample("Getting_image_data_from_a_canvas", "", 420)}}

### Color space conversion

The optional `colorSpace` setting allows you to get image data in the desired format.

```js
const context = canvas.getContext("2d", { colorSpace: "display-p3" });
context.fillStyle = "color(display-p3 0.5 0 0)";
context.fillRect(0, 0, 10, 10);

// Get ImageData converted to sRGB
const imageData = context.getImageData(0, 0, 1, 1, { colorSpace: "srgb" });
console.log(imageData.colorSpace); // "srgb"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The interface defining this method: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("ImageData")}} object
- {{domxref("CanvasRenderingContext2D.putImageData()")}}
- [Pixel manipulation with canvas](/en-US/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas)
