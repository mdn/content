---
title: window.cancelAnimationFrame()
slug: Web/API/Window/cancelAnimationFrame
page-type: web-api-instance-method
tags:
  - API
  - Animation
  - DOM
  - Method
  - Reference
  - Window
  - Polyfill
browser-compat: api.Window.cancelAnimationFrame
---
{{APIRef}}

The **`window.cancelAnimationFrame()`** method cancels an
animation frame request previously scheduled through a call to
{{domxref("window.requestAnimationFrame()")}}.

## Syntax

```js
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
const requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                            window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

const cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;

const start = Date.now();

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

- {{domxref("window.requestAnimationFrame()")}}
- [A polyfill](https://github.com/behnammodi/polyfill/blob/master/window.polyfill.js)
