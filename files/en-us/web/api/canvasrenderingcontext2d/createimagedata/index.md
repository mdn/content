---
title: "CanvasRenderingContext2D: createImageData() method"
short-title: createImageData()
slug: Web/API/CanvasRenderingContext2D/createImageData
page-type: web-api-instance-method
browser-compat: api.CanvasRenderingContext2D.createImageData
---

{{APIRef}}

The **`CanvasRenderingContext2D.createImageData()`** method of
the Canvas 2D API creates a new, blank {{domxref("ImageData")}} object with the
specified dimensions. All of the pixels in the new object are transparent black.

## Syntax

```js-nolint
createImageData(width, height)
createImageData(width, height, settings)
createImageData(imagedata)
```

### Parameters

- `width`
  - : The width to give the new `ImageData` object. A negative value flips the
    rectangle around the vertical axis.
- `height`
  - : The height to give the new `ImageData` object. A negative value flips the
    rectangle around the horizontal axis.
- `settings` {{optional_inline}}
  - : An object with the following properties:
    - `colorSpace`: Specifies the color space of the image data. Can be set to `"srgb"` for the [sRGB color space](https://en.wikipedia.org/wiki/SRGB) or `"display-p3"` for the [display-p3 color space](https://en.wikipedia.org/wiki/DCI-P3).
- `imagedata`
  - : An existing `ImageData` object from which to copy the width and height.
    The image itself is **not** copied.

### Return value

A new {{domxref("ImageData")}} object with the specified width and height. The new
object is filled with transparent black pixels.

### Exceptions

- `IndexSizeError` {{domxref("DOMException")}}
  - : Thrown if either of the `width` or `height` arguments is zero.

## Examples

### Creating a blank ImageData object

This snippet creates a blank `ImageData` object using the
`createImageData()` method.

```html
<canvas id="canvas"></canvas>
```

The generated object is 100 pixels wide and 50 pixels tall, making 5,000 pixels in all.
Each pixel within an `ImageData` object consists of four array values, so the
object's {{domxref("ImageData.data", "data")}} property has a length of 4 × 5,000, or
20,000.

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const imageData = ctx.createImageData(100, 50);
console.log(imageData);
// ImageData { width: 100, height: 50, data: Uint8ClampedArray[20000] }
```

### Filling a blank ImageData object

This example creates and fills a new `ImageData` object with purple pixels.

```html
<canvas id="canvas"></canvas>
```

Since each pixel consists of four values, the `for` loop iterates by
multiples of four. The array values associated with each pixel are R (red), G (green), B
(blue), and A (alpha), in that order.

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const imageData = ctx.createImageData(100, 100);

// Iterate through every pixel
for (let i = 0; i < imageData.data.length; i += 4) {
  // Modify pixel data
  imageData.data[i + 0] = 190; // R value
  imageData.data[i + 1] = 0; // G value
  imageData.data[i + 2] = 210; // B value
  imageData.data[i + 3] = 255; // A value
}

// Draw image data to the canvas
ctx.putImageData(imageData, 20, 20);
```

#### Result

{{EmbedLiveSample("Filling_a_blank_ImageData_object", 700, 180)}}

### More examples

For more examples using `createImageData()` and the `ImageData`
object, see [Pixel manipulation with canvas](/en-US/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas) and {{domxref("ImageData.data")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The interface defining this method: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("ImageData")}}
- [Pixel manipulation with canvas](/en-US/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas)
