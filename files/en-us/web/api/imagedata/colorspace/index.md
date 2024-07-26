---
title: "ImageData: colorSpace property"
short-title: colorSpace
slug: Web/API/ImageData/colorSpace
page-type: web-api-instance-property
browser-compat: api.ImageData.colorSpace
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

The read-only **`ImageData.colorSpace`** property is a string indicating the color space of the image data.

The color space can be set during `ImageData` initialization using either the [`ImageData()`](/en-US/docs/Web/API/ImageData/ImageData) constructor or the [`createImageData()`](/en-US/docs/Web/API/CanvasRenderingContext2D/createImageData) method.

## Value

This property can have the following values:

- `"srgb"` representing the [sRGB color space](https://en.wikipedia.org/wiki/SRGB).
- `"display-p3"` representing the [display-p3 color space](https://en.wikipedia.org/wiki/DCI-P3).

## Examples

### Getting the color space of canvas image data

The [`getImageData()`](/en-US/docs/Web/API/CanvasRenderingContext2D/getImageData) method allows you to explicitly request a color space. If it doesn't match the color space the canvas was initialized with, a conversion will be performed.
Use the `colorSpace` property to know which color space your `ImageData` object is in.

```js
const context = canvas.getContext("2d", { colorSpace: "display-p3" });
context.fillStyle = "color(display-p3 0.5 0 0)";
context.fillRect(0, 0, 10, 10);

const p3ImageData = context.getImageData(0, 0, 1, 1);
console.log(p3ImageData.colorSpace); // "display-p3"

const srgbImageData = context.getImageData(0, 0, 1, 1, { colorSpace: "srgb" });
console.log(srgbImageData.colorSpace); // "srgb"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`CanvasRenderingContext2D.createImageData()`](/en-US/docs/Web/API/CanvasRenderingContext2D/createImageData)
- [`CanvasRenderingContext2D.getImageData()`](/en-US/docs/Web/API/CanvasRenderingContext2D/getImageData)
- [`colorSpace` setting in `canvas.getContext()`](/en-US/docs/Web/API/HTMLCanvasElement/getContext#colorspace)
- Setting WebGL color spaces:
  - [`WebGLRenderingContext.drawingBufferColorSpace`](/en-US/docs/Web/API/WebGLRenderingContext/drawingBufferColorSpace)
  - [`WebGLRenderingContext.unpackColorSpace`](/en-US/docs/Web/API/WebGLRenderingContext/unpackColorSpace)
