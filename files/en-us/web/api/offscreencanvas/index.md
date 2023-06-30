---
title: OffscreenCanvas
slug: Web/API/OffscreenCanvas
page-type: web-api-interface
browser-compat: api.OffscreenCanvas
---

{{APIRef("Canvas API")}}

When using the {{HtmlElement("canvas")}} element or the [Canvas API](/en-US/docs/Web/API/Canvas_API), rendering, animation, and user interaction usually happen on the main execution thread of a web application.
The computation relating to canvas animations and rendering can have a significant impact on application performance.

The **`OffscreenCanvas`** interface provides a canvas that can be rendered off screen, decoupling the DOM and the Canvas API so that the {{HtmlElement("canvas")}} element is no longer entirely dependent on the DOM.
Rendering operations can also be run inside a [worker](/en-US/docs/Web/API/Web_Workers_API) context, allowing you to run some tasks in a separate thread and avoid heavy work on the main thread.

`OffscreenCanvas` is a [transferable object](/en-US/docs/Web/API/Web_Workers_API/Transferable_objects).

{{AvailableInWorkers}}

{{InheritanceDiagram}}

## Constructors

- {{domxref("OffscreenCanvas.OffscreenCanvas", "OffscreenCanvas()")}}
  - : `OffscreenCanvas` constructor. Creates a new `OffscreenCanvas` object.

## Instance properties

- {{domxref("OffscreenCanvas.height")}}
  - : The height of the offscreen canvas.
- {{domxref("OffscreenCanvas.width")}}
  - : The width of the offscreen canvas.

## Instance methods

- {{domxref("OffscreenCanvas.getContext()")}}
  - : Returns a rendering context for the offscreen canvas.
- {{domxref("OffscreenCanvas.convertToBlob()")}}
  - : Creates a {{domxref("Blob")}} object representing the image contained in the canvas.
- {{domxref("OffscreenCanvas.transferToImageBitmap()")}}
  - : Creates an {{domxref("ImageBitmap")}} object from the most recently rendered image of the `OffscreenCanvas`.

## Examples

### Synchronous display of frames produced by an `OffscreenCanvas`

One way to use the `OffscreenCanvas` API is to use a rendering context that has been obtained from an `OffscreenCanvas` object to generate new frames. Once a new frame has finished rendering in this context, the {{domxref("OffscreenCanvas.transferToImageBitmap", "transferToImageBitmap()")}} method can be called to save the most recent rendered image. This method returns an {{domxref("ImageBitmap")}} object, which can be used in a variety of Web APIs and also in a second canvas without creating a transfer copy.

To display the `ImageBitmap`, you can use an {{domxref("ImageBitmapRenderingContext")}} context, which can be created by calling `canvas.getContext("bitmaprenderer")` on a (visible) canvas element. This context only provides functionality to replace the canvas's contents with the given `ImageBitmap`. A call to {{domxref("ImageBitmapRenderingContext.transferFromImageBitmap()")}} with the previously rendered and saved `ImageBitmap` from the OffscreenCanvas, will display the `ImageBitmap` on the canvas and transfer its ownership to the canvas. A single `OffscreenCanvas` may transfer frames into an arbitrary number of other `ImageBitmapRenderingContext` objects.

Given these two {{HTMLElement("canvas")}} elements

```html
<canvas id="one"></canvas> <canvas id="two"></canvas>
```

the following code will provide the rendering using `OffscreenCanvas` as described above.

```js
const one = document.getElementById("one").getContext("bitmaprenderer");
const two = document.getElementById("two").getContext("bitmaprenderer");

const offscreen = new OffscreenCanvas(256, 256);
const gl = offscreen.getContext("webgl");

// Perform some drawing for the first canvas using the gl context
const bitmapOne = offscreen.transferToImageBitmap();
one.transferFromImageBitmap(bitmapOne);

// Perform some more drawing for the second canvas
const bitmapTwo = offscreen.transferToImageBitmap();
two.transferFromImageBitmap(bitmapTwo);
```

### Asynchronous display of frames produced by an `OffscreenCanvas`

Another way to use the `OffscreenCanvas` API, is to call {{domxref("HTMLCanvasElement.transferControlToOffscreen", "transferControlToOffscreen()")}} on a {{HTMLElement("canvas")}} element, either on a [worker](/en-US/docs/Web/API/Web_Workers_API) or the main thread, which will return an `OffscreenCanvas` object from an {{domxref("HTMLCanvasElement")}} object from the main thread. Calling {{domxref("OffscreenCanvas.getContext", "getContext()")}} will then obtain a rendering context from that `OffscreenCanvas`.

The `main.js` script (main thread) may look like this:

```js
const htmlCanvas = document.getElementById("canvas");
const offscreen = htmlCanvas.transferControlToOffscreen();

const worker = new Worker("offscreencanvas.js");
worker.postMessage({ canvas: offscreen }, [offscreen]);
```

While the `offscreencanvas.js` script (worker thread) can look like this:

```js
onmessage = (evt) => {
  const canvas = evt.data.canvas;
  const gl = canvas.getContext("webgl");
  // Perform some drawing using the gl context
};
```

It's also possible to use {{domxref("Window.requestAnimationFrame", "requestAnimationFrame()")}} in workers:

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

For a full example, see the [OffscreenCanvas example source](https://github.com/mdn/dom-examples/tree/main/web-workers/offscreen-canvas-worker) on GitHub or run the [OffscreenCanvas example live](https://mdn.github.io/dom-examples/web-workers/offscreen-canvas-worker/).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CanvasRenderingContext2D")}}
- {{domxref("OffscreenCanvasRenderingContext2D")}}
- {{domxref("ImageBitmap")}}
- {{domxref("ImageBitmapRenderingContext")}}
- {{domxref("HTMLCanvasElement.transferControlToOffscreen()")}}
- {{domxref("Window.requestAnimationFrame()", "requestAnimationFrame()")}}
- [WebGL Off the Main Thread – Mozilla Hacks](https://hacks.mozilla.org/2016/01/webgl-off-the-main-thread/) (2016)
