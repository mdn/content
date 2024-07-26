---
title: "CanvasRenderingContext2D: putImageData() method"
short-title: putImageData()
slug: Web/API/CanvasRenderingContext2D/putImageData
page-type: web-api-instance-method
browser-compat: api.CanvasRenderingContext2D.putImageData
---

{{APIRef}}

The **`CanvasRenderingContext2D.putImageData()`**
method of the Canvas 2D API paints data from the given {{domxref("ImageData")}} object
onto the canvas. If a dirty rectangle is provided, only the pixels from that rectangle
are painted. This method is not affected by the canvas transformation matrix.

> [!NOTE]
> Image data can be retrieved from a canvas using the
> {{domxref("CanvasRenderingContext2D.getImageData()", "getImageData()")}} method.

You can find more information about `putImageData()` and general
manipulation of canvas contents in the article [Pixel manipulation with canvas](/en-US/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas).

## Syntax

```js-nolint
putImageData(imageData, dx, dy)
putImageData(imageData, dx, dy, dirtyX, dirtyY, dirtyWidth, dirtyHeight)
```

### Parameters

- `imageData`
  - : An {{domxref("ImageData")}} object containing the array of pixel values.
- `dx`
  - : Horizontal position (x coordinate) at which to place the image data in the
    destination canvas.
- `dy`
  - : Vertical position (y coordinate) at which to place the image data in the destination
    canvas.
- `dirtyX` {{optional_inline}}
  - : Horizontal position (x coordinate) of the top-left corner from which the image data
    will be extracted. Defaults to `0`.
- `dirtyY` {{optional_inline}}
  - : Vertical position (y coordinate) of the top-left corner from which the image data
    will be extracted. Defaults to `0`.
- `dirtyWidth` {{optional_inline}}
  - : Width of the rectangle to be painted. Defaults to the width of the image data.
- `dirtyHeight` {{optional_inline}}
  - : Height of the rectangle to be painted. Defaults to the height of the image data.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- `NotSupportedError` {{domxref("DOMException")}}
  - : Thrown if any of the arguments is infinite.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the `ImageData` object's data has been detached.

## Examples

### Understanding putImageData

To understand what this algorithm does under the hood, here is an implementation on top
of {{domxref("CanvasRenderingContext2D.fillRect()")}}.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function putImageData(
  ctx,
  imageData,
  dx,
  dy,
  dirtyX,
  dirtyY,
  dirtyWidth,
  dirtyHeight,
) {
  const data = imageData.data;
  const height = imageData.height;
  const width = imageData.width;
  dirtyX = dirtyX || 0;
  dirtyY = dirtyY || 0;
  dirtyWidth = dirtyWidth !== undefined ? dirtyWidth : width;
  dirtyHeight = dirtyHeight !== undefined ? dirtyHeight : height;
  const limitBottom = dirtyY + dirtyHeight;
  const limitRight = dirtyX + dirtyWidth;
  for (let y = dirtyY; y < limitBottom; y++) {
    for (let x = dirtyX; x < limitRight; x++) {
      const pos = y * width + x;
      ctx.fillStyle = `rgb(${data[pos * 4 + 0]} ${data[pos * 4 + 1]}
      ${data[pos * 4 + 2]} / ${data[pos * 4 + 3] / 255})`;
      ctx.fillRect(x + dx, y + dy, 1, 1);
    }
  }
}

// Draw content onto the canvas
ctx.fillRect(0, 0, 100, 100);
// Create an ImageData object from it
const imagedata = ctx.getImageData(0, 0, 100, 100);
// use the putImageData function that illustrates how putImageData works
putImageData(ctx, imagedata, 150, 0, 50, 50, 25, 25);
```

#### Result

{{ EmbedLiveSample('Understanding_putImageData', 700, 180) }}

### Data loss due to browser optimization

> [!WARNING]
> Due to the lossy nature of converting to and from premultiplied alpha color values,
> pixels that have just been set using `putImageData()` might be returned to
> an equivalent `getImageData()` as different values.

#### JavaScript

```js
const canvas = document.createElement("canvas");
canvas.width = 1;
canvas.height = 1;
const context = canvas.getContext("2d");
const imgData = context.getImageData(0, 0, canvas.width, canvas.height);
const pixels = imgData.data;
pixels[0 + 0] = 1;
pixels[0 + 1] = 127;
pixels[0 + 2] = 255;
pixels[0 + 3] = 1;
console.log("before:", pixels);
context.putImageData(imgData, 0, 0);
const imgData2 = context.getImageData(0, 0, canvas.width, canvas.height);
const pixels2 = imgData2.data;
console.log("after:", pixels2);
```

The output might look like:

```plain
before: Uint8ClampedArray(4) [ 1, 127, 255, 1 ]
after: Uint8ClampedArray(4) [ 255, 255, 255, 1 ]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The interface defining this method: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("ImageData")}} object
- {{domxref("CanvasRenderingContext2D.getImageData()")}}
- [Pixel manipulation with canvas](/en-US/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas)
