---
title: ImageData()
slug: Web/API/ImageData/ImageData
tags:
  - API
  - Canvas
  - Constructor
  - ImageData
  - Reference
browser-compat: api.ImageData.ImageData
---
{{APIRef("Canvas API")}}

The **`ImageData()`** constructor returns a newly instantiated
{{domxref('ImageData')}} object built from the typed array given and having the
specified width and height.

This constructor is the preferred way of creating such an object in a
{{domxref('Worker')}}.

## Syntax

```js
new ImageData(width, height);
new ImageData(width, height, settings);
new ImageData(dataArray, width);
new ImageData(dataArray, width, height);
new ImageData(dataArray, width, height, settings);
```

### Parameters

- `width`
  - : An unsigned long representing the width of the image.
- `height`
  - : An unsigned long representing the height of the image. This value is optional if an
    array is given: the height will be inferred from the array's size and the given width.
- settings {{optional_inline}}
  - : An object with the following values:
- `colorSpace`
  - : One of `"srgb"`, `"rec2020"`, or `"display-p3"`.
- `dataArray` {{optional_inline}}
  - : An array containing the underlying pixel representation of the image, one of {{jsxref("Uint8ClampedArray")}}, {{jsxref("Uint16Array")}}, or {{jsxref("Float32Array")}}. If no such array is given, an image with a transparent black rectangle of the specified `width` and `height` will be created.

### Return value

A new {{domxref('ImageData')}} object.

### Errors thrown

- `IndexSizeError` {{domxref("DOMException")}}
  - : Thrown if `array` is specified, but its length is not a multiple of `(4 * width)` or `(4 * width * height)`.

## Examples

### Creating a blank ImageData object

This example creates an `ImageData` object that is 200 pixels wide and 100
pixels tall, containing a total of 20,000 pixels.

```js
let imageData = new ImageData(200, 100);
// ImageData { width: 200, height: 100, data: Uint8ClampedArray[80000] }
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
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const arr = new Uint8ClampedArray(40000);

// Iterate through every pixel
for (let i = 0; i < arr.length; i += 4) {
  arr[i + 0] = 0;    // R value
  arr[i + 1] = 190;  // G value
  arr[i + 2] = 0;    // B value
  arr[i + 3] = 255;  // A value
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
