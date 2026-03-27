---
title: "ImageData: ImageData() constructor"
short-title: ImageData()
slug: Web/API/ImageData/ImageData
page-type: web-api-constructor
browser-compat: api.ImageData.ImageData
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

The **`ImageData()`** constructor returns a newly instantiated
{{domxref('ImageData')}} object built from the typed array given and having the
specified width and height.

This constructor is the preferred way of creating such an object in a
{{domxref('Worker')}}.

## Syntax

```js-nolint
new ImageData(width, height)
new ImageData(width, height, settings)

new ImageData(dataArray, width)
new ImageData(dataArray, width, height)
new ImageData(dataArray, width, height, settings)
```

### Parameters

- `width`
  - : An unsigned long representing the width of the image.
- `height`
  - : An unsigned long representing the height of the image. This value is optional if an
    array is given: the height will be inferred from the array's size and the given width.
- `settings` {{optional_inline}}
  - : An object with the following properties:
    - `colorSpace`
      - : Specifies the color space of the image data. Can be set to `"srgb"` for the [sRGB color space](https://en.wikipedia.org/wiki/SRGB) or `"display-p3"` for the [display-p3 color space](https://en.wikipedia.org/wiki/DCI-P3).
    - `pixelFormat`
      - : Specifies the pixel format. Possible values:
        - `"rgba-unorm8"`, for RGBA with 8 bit per component unsigned normalized format, using a {{jsxref("Uint8ClampedArray")}}. This is the default.
        - `"rgba-float16"`, for RGBA with 16 bits per component, using a {{jsxref("Float16Array")}}. Floating-point pixel values allow representing colors in arbitrarily wide gamuts and high dynamic range (HDR).

- `dataArray`
  - : A {{jsxref("Uint8ClampedArray")}} or {{jsxref("Float16Array")}} containing the underlying pixel representation of the image. If no such array is given, an image with a transparent black rectangle of the specified `width` and `height` will be created. The type of the `dataArray` must match `settings.pixelFormat`.

### Return value

A new {{domxref('ImageData')}} object.

### Exceptions

- `IndexSizeError` {{domxref("DOMException")}}
  - : Thrown if `dataArray` is specified, but its length is not `(bytesPerPixel * width * height)`, or a multiple of `(bytesPerPixel * width)` if `height` is not specified. `bytesPerPixel` is `4` when `pixelFormat` is `"rgba-unorm8"` and `8` otherwise.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if `dataArray` is of type {{jsxref("Uint8ClampedArray")}} and `pixelFormat` is not set to `"rgba-unorm8"`, or if `dataArray` is of type {{jsxref("Float16Array")}} and `pixelFormat` is not set to `"rgba-float16"`.

## Examples

### Creating a blank ImageData object

This example creates an `ImageData` object that is 200 pixels wide and 100
pixels tall, containing a total of 20,000 pixels.

```js
let imageData = new ImageData(200, 100);
// ImageData { width: 200, height: 100, data: Uint8ClampedArray[80000] }
```

### ImageData using the display-p3 color space

This example creates an `ImageData` object with the [display-p3 color space](https://en.wikipedia.org/wiki/DCI-P3).

```js
let imageData = new ImageData(200, 100, { colorSpace: "display-p3" });
```

### Floating-point pixel data for wide gamuts and high dynamic range (HDR)

Floating-point pixel values allow representing colors in arbitrarily wide gamuts and high dynamic range (HDR). You can set the `pixelFormat` setting to `"rgba-float16"` to use RGBA values with 16 bits per component. This requires the `dataArray` to be a {{jsxref("Float16Array")}}.

```js
let floatArray = new Float16Array(4 * 200 * 200);
let imageData = new ImageData(floatArray, 200, 200, {
  pixelFormat: "rgba-float16",
});
console.log(imageData.pixelFormat); // "rgba-float16"
```

### Initializing ImageData with an array

This example instantiates an `ImageData` object with pixel colors defined by
an array.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

The array (`arr`) has a length of `40000`: it consists of 10,000
pixels, each of which is defined by 4 values. The `ImageData` constructor
specifies a `width` of `200` for the new object, so its
`height` defaults to 10,000 divided by 200, which is `50`.

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const arr = new Uint8ClampedArray(40_000);

// Fill the array with the same RGBA values
for (let i = 0; i < arr.length; i += 4) {
  arr[i + 0] = 0; // R value
  arr[i + 1] = 190; // G value
  arr[i + 2] = 0; // B value
  arr[i + 3] = 255; // A value
}

// Initialize a new ImageData object
let imageData = new ImageData(arr, 200);

// Draw image data to the canvas
ctx.putImageData(imageData, 20, 20);
```

#### Result

{{EmbedLiveSample('Initializing_ImageData_with_an_array', 700, 180)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CanvasRenderingContext2D.createImageData()")}}, the creator method that
  can be used outside workers.
