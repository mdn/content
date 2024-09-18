---
title: "Window: cancelAnimationFrame() method"
short-title: cancelAnimationFrame()
slug: Web/API/Window/cancelAnimationFrame
page-type: web-api-instance-method
browser-compat: api.Window.cancelAnimationFrame
---

{{APIRef}}

The **`window.cancelAnimationFrame()`** method cancels an
animation frame request previously scheduled through a call to
{{domxref("window.requestAnimationFrame()")}}.

## Syntax

```js-nolint
cancelAnimationFrame(requestID)
```

### Parameters

- `requestID`
  - : The ID value returned by the call to {{domxref("window.requestAnimationFrame()")}}
    that requested the callback.

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
const start = document.timeline.currentTime;

let myReq;

function step(timestamp) {
  const progress = timestamp - start;
  d.style.left = `${Math.min(progress / 10, 200)}px`;
  if (progress < 2000) {
    // it's important to update the requestId each time you're calling requestAnimationFrame
    myReq = requestAnimationFrame(step);
  }
}
myReq = requestAnimationFrame(step);
// the cancellation uses the last requestId
cancelAnimationFrame(myReq);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Window.requestAnimationFrame()")}}
- {{domxref("DedicatedWorkerGlobalScope.cancelAnimationFrame()")}}
