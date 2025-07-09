---
title: "ImageData: pixelFormat property"
short-title: pixelFormat
slug: Web/API/ImageData/pixelFormat
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.ImageData.pixelFormat
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}{{SeeCompatTable}}

The read-only **`ImageData.pixelFormat`** property is a string indicating the pixel format of the image data.

The pixel format can be set during `ImageData` initialization using either the [`ImageData()`](/en-US/docs/Web/API/ImageData/ImageData) constructor or the [`createImageData()`](/en-US/docs/Web/API/CanvasRenderingContext2D/createImageData) method.

## Value

This property can have the following values:

- `"rgba-unorm8"` representing RGBA with 8 bit per component unsigned normalized format, using a {{jsxref("Uint8ClampedArray")}}.
- `"rgba-float16"` representing RGBA with 16 bits per component, using a {{jsxref("Float16Array")}}. Floating-point pixel values allow representing colors in arbitrarily wide gamuts and high dynamic range (HDR).

## Examples

### Floating-point pixel data for wide gamuts and high dynamic range (HDR)

Floating-point pixel values allow representing colors in arbitrarily wide gamuts and high dynamic range (HDR). You can set the `pixelFormat` setting to `"rgba-float16"` to use RGBA values with 16 bits per component. This requires the `dataArray` to be a {{jsxref("Float16Array")}}.

```js
let floatArray = new Float16Array(4 * 200 * 200);
let imageData = new ImageData(floatArray, 200, 200, {
  pixelFormat: "rgba-float16",
});
console.log(imageData.pixelFormat); // "rgba-float16"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("ImageData")}}
- {{jsxref("Float16Array")}}
- {{domxref("CanvasRenderingContext2D.createImageData()")}}
- {{domxref("CanvasRenderingContext2D.putImageData()")}}
