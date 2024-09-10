---
title: "DedicatedWorkerGlobalScope: requestAnimationFrame() method"
short-title: requestAnimationFrame()
slug: Web/API/DedicatedWorkerGlobalScope/requestAnimationFrame
page-type: web-api-instance-method
browser-compat: api.DedicatedWorkerGlobalScope.requestAnimationFrame
---

{{APIRef}}{{AvailableInWorkers("dedicated")}}

The **`requestAnimationFrame()`** method of the {{domxref("DedicatedWorkerGlobalScope")}} interface tells the browser you wish to perform an animation frame request and call a user-supplied callback function before the next repaint.

The frequency of calls to the callback function will generally match the display refresh rate. The most common refresh rate is 60 Hz, (60 cycles/frames per second), though 75 Hz, 120 Hz, and 144 Hz are also widely used. `requestAnimationFrame()` calls are paused in most browsers when running in background tabs or hidden {{HTMLElement("iframe")}}s, to improve performance and battery life.

A call to the `requestAnimationFrame()` method schedules only one single call to the callback function. If you want to animate another frame, your callback function must call `requestAnimationFrame()` again.

> [!WARNING]
> Be sure always to use the first argument (or some other method for getting the current time) to calculate how much the animation will progress in a frame — **otherwise, the animation will run faster on high refresh-rate screens**. For ways to do that, see the examples below.

Calling the `requestAnimationFrame()` method requires the current worker to have an associated owner {{domxref("Window", "window")}}. That means that the current worker must be created by {{domxref("Window", "window")}} or by a dedicated worker that also has an associated owner {{domxref("Window", "window")}}.

## Syntax

```js-nolint
requestAnimationFrame(callback)
```

### Parameters

- `callback`

  - : The function to call when it's time to update your animation for the next repaint. This callback function is passed a single argument:

    - `timestamp`

      - : A {{domxref("DOMHighResTimeStamp")}} indicating the end time of the previous frame's rendering (based on the number of milliseconds since [time origin](/en-US/docs/Web/API/Performance/timeOrigin)). The timestamp is a decimal number, in milliseconds, but with a minimal precision of 1 millisecond. The timestamp value is also similar to calling {{domxref('performance.now()')}} at the start of the callback function, but it is never the same value.

        When multiple callbacks queued by `requestAnimationFrame()` begin to fire in a single frame, each receives the same timestamp even though time has passed during the computation of every previous callback's workload.

### Return value

A `long` integer value that is the request ID uniquely identifying the entry
in the callback list. This is a non-zero value, but you may not make any other
assumptions about it. You can pass this value to
{{domxref("DedicatedWorkerGlobalScope.cancelAnimationFrame()", "cancelAnimationFrame()")}} to cancel the refresh callback request, the cancel action must have been made in the same worker.

### Exceptions

- `NotSupportedError` {{domxref("DOMException")}}
  - : Thrown if the method is not supported by the current worker.

## Examples

On the main thread, we start by transferring the control of a {{HTMLElement("canvas")}} element to an {{domxref("OffscreenCanvas")}}, using {{domxref("HTMLCanvasElement.transferControlToOffscreen()")}}, then send a message to the worker to `"start"` its work with the offscreen canvas:

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
let handle;

function draw(dt) {
  ctx.clearRect(0, 0, 100, 100);
  ctx.fillRect(pos, 0, 10, 10);
  pos += 10 * dt;
  handle = self.requestAnimationFrame(draw);
}

self.addEventListener("message", (e) => {
  if (e.data.type === "start") {
    const transferredCanvas = e.data.canvas;
    ctx = transferredCanvas.getContext("2d");
    handle = self.requestAnimationFrame(draw);
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

- {{domxref("DedicatedWorkerGlobalScope.cancelAnimationFrame()")}}
- {{domxref("Window.requestAnimationFrame()")}}
