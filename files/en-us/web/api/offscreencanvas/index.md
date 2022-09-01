---
title: OffscreenCanvas
slug: Web/API/OffscreenCanvas
page-type: web-api-interface
tags:
  - API
  - Canvas
  - Experimental
  - Interface
  - Reference
browser-compat: api.OffscreenCanvas
---
{{APIRef("Canvas API")}} {{SeeCompatTable}}

The **`OffscreenCanvas`** interface provides a canvas that can be rendered off screen. It is available in both the window and [worker](/en-US/docs/Web/API/Web_Workers_API) contexts.

`OffscreenCanvas` is a {{glossary("Transferable objects","transferable object")}}.

{{AvailableInWorkers}}

{{InheritanceDiagram}}

## Constructors

- {{domxref("OffscreenCanvas.OffscreenCanvas", "OffscreenCanvas()")}} {{Experimental_Inline}}
  - : `OffscreenCanvas` constructor. Creates a new `OffscreenCanvas` object.

## Properties

- {{domxref("OffscreenCanvas.height")}} {{Experimental_Inline}}
  - : The height of the offscreen canvas.
- {{domxref("OffscreenCanvas.width")}} {{Experimental_Inline}}
  - : The width of the offscreen canvas.

## Methods

- {{domxref("OffscreenCanvas.getContext()")}} {{Experimental_Inline}}
  - : Returns a rendering context for the offscreen canvas.
- {{domxref("OffscreenCanvas.convertToBlob()")}} {{Experimental_Inline}}
  - : Creates a {{domxref("Blob")}} object representing the image contained in the canvas.
- {{domxref("OffscreenCanvas.transferToImageBitmap()")}} {{Experimental_Inline}}
  - : Creates an {{domxref("ImageBitmap")}} object from the most recently rendered image of the `OffscreenCanvas`.

## Examples

### Synchronous display of frames produced by an `OffscreenCanvas`

One way to use the `OffscreenCanvas` API, is to use a rendering context that has been obtained from an `OffscreenCanvas` object to generate new frames. Once a new frame has finished rendering in this context,  the {{domxref("OffscreenCanvas.transferToImageBitmap", "transferToImageBitmap()")}} method can be called to save the most recent rendered image. This method returns an {{domxref("ImageBitmap")}} object, which can be used in a variety of Web APIs and also in a second canvas without creating a transfer copy.

To display the `ImageBitmap`, you can use a {{domxref("ImageBitmapRenderingContext")}} context, which can be created by calling `canvas.getContext("bitmaprenderer")` on a (visible) canvas element. This context only provides functionality to replace the canvas's contents with the given `ImageBitmap`. A call to {{domxref("ImageBitmapRenderingContext.transferFromImageBitmap()")}} with the previously rendered and saved `ImageBitmap` from the OffscreenCanvas, will display the `ImageBitmap` on the canvas and transfer its ownership to the canvas. A single `OffscreenCanvas` may transfer frames into an arbitrary number of other `ImageBitmapRenderingContext` objects.

Given these two {{HTMLElement("canvas")}} elements

```html
<canvas id="one"></canvas>
<canvas id="two"></canvas>
```

the following code will provide the rendering using an `OffscreenCanvas` as described above.

```js
const one = document.getElementById("one").getContext("bitmaprenderer");
const two = document.getElementById("two").getContext("bitmaprenderer");

const offscreen = new OffscreenCanvas(256, 256);
const gl = offscreen.getContext('webgl');

// Perform some drawing for the first canvas using the gl context

// Commit rendering to the first canvas
const bitmapOne = offscreen.transferToImageBitmap();
one.transferFromImageBitmap(bitmapOne);

// Perform some more drawing for the second canvas

// Commit rendering to the second canvas
const bitmapTwo = offscreen.transferToImageBitmap();
two.transferFromImageBitmap(bitmapTwo);
```

### Asynchronous display of frames produced by an `OffscreenCanvas`

Another way to use the `OffscreenCanvas` API, is to call {{domxref("HTMLCanvasElement.transferControlToOffscreen", "transferControlToOffscreen()")}} on a {{HTMLElement("canvas")}} element, either on a [worker](/en-US/docs/Web/API/Web_Workers_API) or the main thread, which will return an `OffscreenCanvas` object from an {{domxref("HTMLCanvasElement")}} object from the main thread. Calling {{domxref("OffscreenCanvas.getContext", "getContext()")}} will then obtain a rendering context from that `OffscreenCanvas`.

main.js (main thread code):

```js
const htmlCanvas = document.getElementById("canvas");
const offscreen = htmlCanvas.transferControlToOffscreen();

const worker = new Worker("offscreencanvas.js");
worker.postMessage({canvas: offscreen}, [offscreen]);
```

offscreencanvas.js (worker code):

```js
onmessage = (evt) => {
  const canvas = evt.data.canvas;
  const gl = canvas.getContext("webgl");

  // Perform some drawing using the gl context
};
```

You can also use requestAnimationFrame in workers

```js
onmessage = (evt) => {
  const canvas = evt.data.canvas;
  const gl = canvas.getContext("webgl");

  function render(time) {
    // Perform some drawing using the gl context
    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebGL Off the Main Thread – Mozilla Hacks](https://hacks.mozilla.org/2016/01/webgl-off-the-main-thread/)
- {{domxref("CanvasRenderingContext2D")}}
- {{domxref("ImageBitmap")}}
- {{domxref("ImageBitmapRenderingContext")}}
- {{domxref("HTMLCanvasElement.transferControlToOffscreen()")}}
- {{domxref("WebGLRenderingContext.commit()")}}
