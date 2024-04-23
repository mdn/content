---
title: "DedicatedWorkerGlobalScope: cancelAnimationFrame() method"
short-title: cancelAnimationFrame()
slug: Web/API/DedicatedWorkerGlobalScope/cancelAnimationFrame
page-type: web-api-instance-method
browser-compat: api.DedicatedWorkerGlobalScope.cancelAnimationFrame
---

{{APIRef}}{{AvailableInWorkers("dedicated")}}

The **`cancelAnimationFrame()`** method of the {{domxref("DedicatedWorkerGlobalScope")}} interface cancels an animation frame request previously scheduled through a call to {{domxref("DedicatedWorkerGlobalScope.requestAnimationFrame()", "requestAnimationFrame()")}}.

Calling the `cancelAnimationFrame()` method requires the current worker to have an associated owner {{domxref("Window", "window")}}. That means that the current worker must be created by {{domxref("Window", "window")}} or by a dedicated worker that also has an associated owner {{domxref("Window", "window")}}.

## Syntax

```js-nolint
cancelAnimationFrame(handle)
```

### Parameters

- `handle`
  - : The ID value returned by a call to {{domxref("DedicatedWorkerGlobalScope.requestAnimationFrame()", "requestAnimationFrame()")}}; the call must have been made in the same worker.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- `NotSupportedError` {{domxref("DOMException")}}
  - : Thrown if the method is not supported by the current worker.

## Examples

On the main thread, we start by transferring the control of a {{HTMLElement("canvas")}} element to an {{domxref("OffscreenCanvas")}}, using {{domxref("HTMLCanvasElement.transferControlToOffscreen()")}} and send to a message to `"start"` its work to the worker, with the offscreen canvas:

```js
const offscreenCanvas = document
  .querySelector("canvas")
  .transferControlToOffscreen();

worker.postMessage(
  {
    type: "start",
    canvas: offscreenCanvas,
  },
  [offscreenCanvas],
);
```

When receiving the `"start"` message, the worker starts the animation, moving the rectangle from left to right. Upon reception of a `"stop"` message, it will stop the animation.

```js
let ctx;
let pos = 0;

function draw(dt) {
  ctx.clearRect(0, 0, 100, 100);
  ctx.fillRect(pos, 0, 10, 10);
  pos += 10 * dt;
  self.requestAnimationFrame(draw);
}

self.addEventListener("message", (e) => {
  if (e.data.type === "start") {
    const transferredCanvas = e.data.canvas;
    ctx = transferredCanvas.getContext("2d");
    self.requestAnimationFrame(draw);
  }
  if (e.data.type === "stop") {
    self.cancelAnimationFrame(handle);
  }
});
```

Finally, if needed, the main thread can send a `"stop"` message to the worker to stop the animation:

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
- {{domxref("Window.cancelAnimationFrame()")}}
