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

- {{domxref("DedicatedWorkerGlobalScope.requestAnimationFrame()")}}
- {{domxref("Window.requestAnimationFrame()")}}
- {{domxref("Window.cancelAnimationFrame()")}}
