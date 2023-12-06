---
title: "DedicatedWorkerGlobalScope: requestAnimationFrame() method"
short-title: requestAnimationFrame()
slug: Web/API/DedicatedWorkerGlobalScope/requestAnimationFrame
page-type: web-api-instance-method
browser-compat: api.DedicatedWorkerGlobalScope.requestAnimationFrame
---

{{APIRef}}

The **`requestAnimationFrame()`** method of the {{domxref("DedicatedWorkerGlobalScope")}} interface tells the
browser you wish to perform an animation. It requests the browser to call a
user-supplied callback function before the next repaint.

The frequency of calls to the callback function will generally match the display
refresh rate. The most common refresh rate is 60hz,
(60 cycles/frames per second), though 75hz, 120hz, and 144hz are also widely used.
`requestAnimationFrame()` calls are paused in most browsers when running in
background tabs or hidden {{ HTMLElement("iframe") }}s, in order to improve
performance and battery life.

> **Note:** Your callback function must call `requestAnimationFrame()` again if
> you want to animate another frame. `requestAnimationFrame()` is one-shot.

> **Warning:** Be sure always to use the first argument (or some other method for
> getting the current time) to calculate how much the animation will progress in
> a frame — **otherwise, the animation will run faster on high refresh-rate screens**.
> For ways to do that, see the examples below.

## Syntax

```js-nolint
requestAnimationFrame(callback)
```

### Parameters

- `callback`
  - The function to call when it's time to update your animation for the next
    repaint. This callback function is passed a single argument: a
    {{domxref("DOMHighResTimeStamp")}} indicating the end time of the previous frame's
    rendering (based on the number of milliseconds since
    [time origin](/en-US/docs/Web/API/DOMHighResTimeStamp#the_time_origin)).
  - The timestamp is a decimal number, in milliseconds, but with a minimal
    precision of 1 millisecond. The timestamp
    value is also similar to calling {{domxref('performance.now()')}} at the start
    of the callback function, but it is never the same value.
  - When multiple callbacks queued by `requestAnimationFrame()` begin to fire in
    a single frame, each receives the same timestamp even though time has passed
    during the computation of every previous callback's workload.

### Return value

A `long` integer value, the request ID, that uniquely identifies the entry
in the callback list. This is a non-zero value, but you may not make any other
assumptions about its value. You can pass this value to
{{domxref("DedicatedWorkerGlobalScope.cancelAnimationFrame()", "cancelAnimationFrame()")}} to cancel the refresh callback request.

## Examples

```js
const start = Date.now();

let handle;

function step(timestamp) {
  const progress = timestamp - start;
  console.log(progress);

  handle = self.requestAnimationFrame(step);
}

self.addEventListener('message', (e) => {
  // if receive a message to start, start the progress
  if (e.data === 'start') {
    handle = self.requestAnimationFrame(step);
  }
  // if receive a message to stop, just cancel the progress using the lastest handle
  if (e.data === 'stop') {
    self.cancelAnimationFrame(handle);
  }
})
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("DedicatedWorkerGlobalScope.cancelAnimationFrame()")}}
- {{domxref("Window.requestAnimationFrame()")}}
- {{domxref("Window.cancelAnimationFrame()")}}
