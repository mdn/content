---
title: "OffscreenCanvasRenderingContext2D: drawElementImage() method"
short-title: drawElementImage()
slug: Web/API/OffscreenCanvasRenderingContext2D/drawElementImage
page-type: web-api-instance-method
browser-compat: api.OffscreenCanvasRenderingContext2D.drawElementImage
---

{{APIRef("Canvas API")}}

The **`drawElementImage()`** method of the {{domxref("OffscreenCanvasRenderingContext2D")}} draws an {{domxref("ElementImage")}} captured during the current rendering update to an offscreen 2D canvas context.

> [!NOTE]
> You can draw an element onto a regular 2D canvas context using the {{domxref("CanvasRenderingContext2D.drawElementImage()")}} method, or include it in a WebGL or WebGPU texture using the {{domxref("WebGLRenderingContext.texElementSubImage2D()")}} and {{domxref("GPUQueue.drawElementImageToTexture()")}} methods respectively. See those pages for more information and examples.

## Syntax

```js-nolint
drawElementImage(element, dx, dy)
drawElementImage(element, dx, dy, options)
drawElementImage(element, dx, dy, dw, dh)
drawElementImage(element, dx, dy, dw, dh, options)
drawElementImage(element, sx, sy, sw, sh, dx, dy)
drawElementImage(element, sx, sy, sw, sh, dx, dy, options)
drawElementImage(element, sx, sy, sw, sh, dx, dy, dw, dh)
drawElementImage(element, sx, sy, sw, sh, dx, dy, dw, dh, options)
```

### Parameters

- `element`
  - : An {{domxref("ElementImage")}} object representing the DOM element to render on the offscreen canvas context.
- `dx`
  - : A number representing the horizontal canvas coordinate of the rendered `element`'s top-left corner.
- `dy`
  - : A number representing the vertical canvas coordinate of the rendered `element`'s top-left corner.
- `dw` {{optional_inline}}
  - : A number representing the width of the rendered `element`, in canvas units.
- `dh` {{optional_inline}}
  - : A number representing the height of the rendered `element`, in canvas units.
- `sx` {{optional_inline}}
  - : A number representing the horizontal coordinate of the top-left corner of the source `element` area to render.
- `sy` {{optional_inline}}
  - : A number representing the vertical coordinate of the top-left corner of the source `element` area to render.
- `sw` {{optional_inline}}
  - : A number representing the width of the source `element` area to render, in canvas units.
- `sh` {{optional_inline}}
  - : A number representing the height of the source `element` area to render, in canvas units.
- `options` {{optional_inline}}
  - : An object containing options. This can include:
    - `preserveElementGeometry` {{optional_inline}}
      - : A boolean value that controls whether the `drawElementImage()` call automatically updates the geometry of the rendered `element`'s underlying DOM representation. If set to `false` (the default value), the underlying DOM geometry is automatically updated so that its hit area is in sync with the rendered element. If set to `true`, the underlying DOM geometry is unchanged, and you must manually change it to match the rendered position using {{domxref("OffscreenCanvas.updateElementGeometry()")}}.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the `element` has not yet been painted, meaning there is currently no painted state to render on the canvas.

## Examples

### Using `drawElementImage()` on an offscreen canvas

Our [Canvas 2D context offscreen canvas example](https://mdn.github.io/dom-examples/html-in-canvas//2d-context-offscreencanvas) ([source code](https://github.com/mdn/dom-examples/tree/main/html-in-canvas/2d-context-offscreencanvas)) shows how to render an element on an offscreen canvas using `drawElementImage()`. We will walk through the pertinent parts of the code in the below sections.

#### HTML

We include a `<canvas>` element with its `content` attribute set to `drawable`. We also include a {{htmlelement("form")}} element with the [`drawable`](/en-US/docs/Web/HTML/Reference/Global_attributes/drawable) attribute set, so it can be rendered onto the `<canvas>`. The form includes two text inputs and a submit button.

```html
<canvas width="480" height="320" content="drawable">
  <form drawable>
    <div>
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" />
    </div>
    <div>
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" />
    </div>
    <button>Submit</button>
  </form>
</canvas>
```

#### JavaScript main thread

First, we grab references to the `<canvas>` and `<form>` elements:

```js live-sample___basic-drawelementimage
const canvas = document.querySelector("canvas");
const form = document.querySelector("canvas form");
```

Next, we create a new worker object by invoking the {{domxref("Worker.Worker", "Worker()")}} constructor, passing it the name of our worker JavaScript file as an argument. We then create an {{domxref("OffscreenCanvas")}} object using {{domxref("HTMLCanvasElement.transferControlToOffscreen", "transferControlToOffscreen()")}} and transfer it to our worker context using {{domxref("Worker.postMessage", "postMessage()")}}:

```js
const worker = new Worker("worker.js");
const offscreen = canvas.transferControlToOffscreen();
worker.postMessage({ canvas: offscreen }, [offscreen]);
```

We include a `message` event handler on the `worker` object that checks whether the message data sent from the worker includes an `unsupported` property set to `true`. If so, we alert the user that the `drawElementImage()` method is not available on the offscreen canvas context to draw the element:

```js
worker.addEventListener("message", (e) => {
  if (e.data.unsupported) {
    alert("drawElementImage() is not available in the worker.");
  }
});
```

We include a {{domxref("HTMLCanvasElement.elementgeometryupdate_event", "elementgeometryupdate")}} event handler on the `<canvas>` that logs the `drawable` elements whose geometry has been changed via the worker (the resulting array will only contain a reference to the `<form>` element), and the transform {{domxref("DOMMatrix")}} applied to it (retrieved using {{domxref("HTMLCanvasElement.getElementTransform", "getElementTransform()")}}):

```js
canvas.addEventListener("elementgeometryupdate", (e) => {
  console.log("Geometry update:", e.elements);
  console.log(canvas.getElementTransform(e.elements[0]));
});
```

Last of all in our main thread JavaScript, we include a {{domxref("HTMLCanvasElement.paint_event", "paint")}} event handler on the `<canvas>`. Each time a paint occurs, we create an `ElementImage` representing the `<form>` element's current rendered state using {{domxref("HTMLCanvasElement.captureElementImage", "captureElementImage()")}}, then transfer it to the worker context using `postMessage()`:

```js
canvas.addEventListener("paint", () => {
  // ElementImage objects are transferrable
  const formImage = canvas.captureElementImage(form);
  // Transfer form image to the worker
  worker.postMessage({ formImage }, [formImage]);
});
```

#### JavaScript worker thread

Over in the worker, we start by defining some constants that represent the position to render the element image at on the canvas, and a variable that we will store our offscreen canvas context in:

```js
const x = 100;
const y = 100;
let ctx;
```

Next, we create a `message` event handler on the worker context that responds to a couple of different `data` types. If `data` contains the `OffscreenCanvas` we initially send from the main thread, we create a 2D context from it then check whether the content has the `drawElementImage()` message available. If not, we send our `unsupported: true` property back to the main thread that, which will trigger alerting a non-support message when received:

```js-nolint
self.addEventListener("message", ({ data }) => {
  if (data.canvas) {
    ctx = data.canvas.getContext("2d");
    if (!ctx.drawElementImage) self.postMessage({ unsupported: true });
    return;
  }
```

If `data` contains an `ElementImage` of our `<form>`, we render it to the `<canvas>`. We start by getting references to the `ElementImage` and the `OffscreenCanvas`, then fill the entire canvas context with a solid color using the {{domxref("CanvasRenderingContext2D.fillStyle", "fillStyle")}} property and {{domxref("CanvasRenderingContext2D.fillRect", "fillRect()")}} method.

Next, we draw the form to the canvas using `drawElementImage()`. Because we included `preserveElementGeometry: true`, we need to call {{domxref("OffscreenCanvas.updateElementGeometry", "updateElementGeometry()")}} to update the element geometry so that it will be interactive as expected. Finally, we log the element's original size to the console (retrieved using {{domxref("OffscreenCanvas.getElementImageDefaultSize", "getElementImageDefaultSize()")}}) and call {{domxref("ElementImage.close()")}} to free up the memory used to store the element image now we no longer need it:

```js-nolint
  if (data.formImage) {
    const img = data.formImage;
    const offscreen = ctx.canvas;

    ctx.fillStyle = "#7D82B8";
    ctx.fillRect(0, 0, offscreen.width, offscreen.height);

    ctx.drawElementImage(img, x, y, {
      preserveElementGeometry: true,
    });

    offscreen.updateElementGeometry(img, {
      canvasTransform: new DOMMatrix().translate(x, y),
    });

    console.log(offscreen.getElementImageDefaultSize(img));

    img.close();
  }
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CanvasRenderingContext2D.drawElementImage()")}}
- {{domxref("WebGLRenderingContext.texElementSubImage2D()")}}
- {{domxref("GPUQueue.drawElementImageToTexture()")}}
- {{domxref("HTMLCanvasElement.updateElementGeometry()")}}
- [HTML-in-Canvas API](/en-US/docs/Web/API/HTML-in-Canvas_API)
