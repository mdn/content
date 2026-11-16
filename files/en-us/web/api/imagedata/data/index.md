---
title: "ImageData: data property"
short-title: data
slug: Web/API/ImageData/data
page-type: web-api-instance-property
browser-compat: api.ImageData.data
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

The readonly **`ImageData.data`** property returns a
{{jsxref("Uint8ClampedArray")}} or {{jsxref("Float16Array")}} that contains the {{domxref("ImageData")}} object's
pixel data. Data is stored as a one-dimensional array in the RGBA order.

## Value

The type depends on the {{domxref("ImageData.pixelFormat")}} used:

- A {{jsxref("Uint8ClampedArray")}} if the `pixelFormat` is `"rgba-unorm8"`.
- A {{jsxref("Float16Array")}} if the `pixelFormat` is `"rgba-float16"`.

## Examples

### Getting an ImageData object's pixel data

This example creates an `ImageData` object that is 100 pixels wide and 100
pixels tall, making 10,000 pixels in all. The `data` array stores four values
for each pixel, making 4 x 10,000, or 40,000 values in all.

```js
let imageData = new ImageData(100, 100);
console.log(imageData.data); // Uint8ClampedArray[40000]
console.log(imageData.data.length); // 40000
```

If the `ImageData` object is set up for floating-point pixels — for example, for high dynamic range (HDR) images —`data` will be a {{jsxref("Float16Array")}} instead.

```js
let floatArray = new Float16Array(4 * 200 * 200);
let imageData = new ImageData(floatArray, 200, 200, {
  pixelFormat: "rgba-float16",
});
console.log(imageData.data); // Float16Array
```

### Filling a blank ImageData object

This example creates and fills a new `ImageData` object with colorful
pixels.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

Since each pixel consists of four values within the `data` array, the
`for` loop iterates by multiples of four. The values associated with each
pixel are R (red), G (green), B (blue), and A (alpha), in that order.

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const imageData = ctx.createImageData(100, 100);

// Fill the array with RGBA values
for (let i = 0; i < imageData.data.length; i += 4) {
  // Percentage in the x direction, times 255
  let x = ((i % 400) / 400) * 255;
  // Percentage in the y direction, times 255
  let y = (Math.ceil(i / 400) / 100) * 255;

  // Modify pixel data
  imageData.data[i + 0] = x; // R value
  imageData.data[i + 1] = y; // G value
  imageData.data[i + 2] = 255 - x; // B value
  imageData.data[i + 3] = 255; // A value
}

// Draw image data to the canvas
ctx.putImageData(imageData, 20, 20);
```

#### Result

{{EmbedLiveSample("Filling_a_blank_ImageData_object", 700, 180)}}

### More examples

For more examples using `ImageData.data`, see [Pixel manipulation with canvas](/en-US/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas),
{{domxref("CanvasRenderingContext2D.createImageData()")}}, and
{{domxref("CanvasRenderingContext2D.putImageData()")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("ImageData.height")}}
- {{domxref("ImageData.width")}}
- {{domxref("ImageData")}}
- {{domxref("CanvasRenderingContext2D.createImageData()")}}
- {{domxref("CanvasRenderingContext2D.putImageData()")}}
- [Pixel manipulation with canvas](/en-US/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas)
