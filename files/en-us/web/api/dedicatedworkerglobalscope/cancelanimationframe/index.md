---
title: "DedicatedWorkerGlobalScope: cancelAnimationFrame() method"
short-title: cancelAnimationFrame()
slug: Web/API/DedicatedWorkerGlobalScope/cancelAnimationFrame
page-type: web-api-instance-method
browser-compat: api.DedicatedWorkerGlobalScope.cancelAnimationFrame
---

{{APIRef}}

The **`cancelAnimationFrame()`** method of the {{domxref("DedicatedWorkerGlobalScope")}} interface cancels an animation frame request previously scheduled through a call to {{domxref("DedicatedWorkerGlobalScope.requestAnimationFrame()", "requestAnimationFrame()")}}.

## Syntax

```js-nolint
cancelAnimationFrame(handle)
```

### Parameters

- `handle`
  - : The ID value returned by the call to {{domxref("DedicatedWorkerGlobalScope.requestAnimationFrame()", "requestAnimationFrame()")}} that requested the callback.

### Return value

None ({{jsxref("undefined")}}).

## Examples

First, in the document, transfer the control of a {{HTMLElement("canavs")}} element in document using the {{domxref("HTMLCanvasElement.transferControlToOffscreen()")}} method and send a message of "start" to the worker:

```js
const offscreenCanvas = document.querySelector("canvas").transferControlToOffscreen();

worker.postMessage({
  type: "start",
  canvas: offscreenCanvas,
}, [offscreenCanvas]);
```

Then, in the worker, the following code will start the animation of drawing a rectangle moving from left to right when receiving a message of "start", and stop the animation when receiving a message of "stop":

```js
let ctx, pos = 0;

function draw(dt) {
  ctx.clearRect(0, 0, 100, 100);
  ctx.fillRect(pos, 0, 10, 10);
  pos += 10 * dt;
  self.requestAnimationFrame(draw);
}

self.addEventListener('message', (e) => {
  if (e.data.type === 'start') {
    const transferredCanvas = e.data.canvas;
    ctx = transferredCanvas.getContext("2d");
    self.requestAnimationFrame(draw);
  }
  if (e.data.type === 'stop') {
    self.cancelAnimationFrame(handle);
  }
})
```

Finally, when necessary, we could send a message of "stop" to the worker to stop the animation:

```js
worker.postMessage({
  type: "stop",
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("DedicatedWorkerGlobalScope.requestAnimationFrame()")}}
- {{domxref("Window.requestAnimationFrame()")}}
- {{domxref("Window.cancelAnimationFrame()")}}
