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

Here's a complete example showing how to use `requestAnimationFrame()` in a dedicated worker with an `OffscreenCanvas`.

**index.html:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>OffscreenCanvas Animation</title>
</head>
<body>
  <canvas width="100" height="100"></canvas>

  <script>
    const worker = new Worker('worker.js');

    // Transfer canvas control to the worker
    const offscreenCanvas = document
      .querySelector("canvas")
      .transferControlToOffscreen();

    // Start the animation
    worker.postMessage({
      type: "start",
      canvas: offscreenCanvas,
    }, [offscreenCanvas]);

    // Stop the animation after 5 seconds
    setTimeout(() => {
      worker.postMessage({
        type: "stop",
      });
    }, 5000);
  </script>
</body>
</html>
```

**worker.js:**
```js
let ctx;
let pos = 0;
let animationId;
let isRunning = false;
let lastTime = 0;

function draw(currentTime) {
  if (!isRunning) return;

  // Calculate delta time for smooth animation
  if (lastTime === 0) lastTime = currentTime;
  const deltaTime = (currentTime - lastTime) / 1000;
  lastTime = currentTime;

  // Clear and draw the moving rectangle
  ctx.clearRect(0, 0, 100, 100);
  ctx.fillRect(pos, 0, 10, 10);
  pos += 50 * deltaTime; // Move 50 pixels per second

  // Loop the animation
  if (pos > 100) pos = -10;

  animationId = self.requestAnimationFrame(draw);
}

self.addEventListener("message", (e) => {
  if (e.data.type === "start") {
    const transferredCanvas = e.data.canvas;
    ctx = transferredCanvas.getContext("2d");
    isRunning = true;
    lastTime = 0;
    animationId = self.requestAnimationFrame(draw);
  }
  if (e.data.type === "stop") {
    isRunning = false;
    if (animationId) {
      self.cancelAnimationFrame(animationId);
    }
  }
});
```

On the main thread, we start by transferring the control of a {{HTMLElement("canvas")}} element to an {{domxref("OffscreenCanvas")}}, using {{domxref("HTMLCanvasElement.transferControlToOffscreen()")}} and send a message to `"start"` its work to the worker, with the offscreen canvas.

In the worker file (`worker.js`), we handle the animation logic. When receiving the `"start"` message, the worker starts the animation, moving the rectangle from left to right. Upon reception of a `"stop"` message, it will stop the animation.

Finally, the main thread can send a `"stop"` message to the worker to stop the animation after a delay, allowing the animation to be visible before stopping.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("DedicatedWorkerGlobalScope.requestAnimationFrame()")}}
- {{domxref("Window.cancelAnimationFrame()")}}
