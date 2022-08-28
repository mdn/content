---
title: XRSession.cancelAnimationFrame()
slug: Web/API/XRSession/cancelAnimationFrame
page-type: web-api-instance-method
tags:
  - API
  - AR
  - Augmented Reality
  - Experimental
  - Method
  - Reference
  - VR
  - Virtual Reality
  - WebXR
  - WebXR Device API
  - XRSession
  - cancelAnimationFrame()
browser-compat: api.XRSession.cancelAnimationFrame
---
{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

The **`cancelAnimationFrame()`** method of
the {{domxref("XRSession")}} interface cancels an animation frame which was previously
requested by calling {{DOMxRef("XRSession.requestAnimationFrame",
    "requestAnimationFrame")}}.

## Syntax

```js
cancelAnimationFrame(handle)
```

### Parameters

- `handle`
  - : The unique value returned by the call
    to {{DOMxRef("XRSession.requestAnimationFrame", "requestAnimationFrame()")}} that
    previously scheduled the animation callback.

### Return value

None ({{jsxref("undefined")}}).

## Usage notes

This function has no effect if the specified `handle` cannot be found.

## Examples

In the example below we see code which starts up a WebXR session if immersive VR mode
is supported. Once started, the session schedules its first frame to be rendered by
calling {{DOMxRef("XRSession.requestAnimationFrame", "requestAnimationFrame()")}}.

The `pauseXR()` function shown at the bottom can be called to suspend the
WebVR session, in essence, by canceling any pending animation frame callback. Since each
frame callback schedules the next one, removing the callback terminates updating of the
WebXR scene.

```js
const XR = navigator.xr;

let requestHandle = null;
let xrSession = null;

if (XR) {
  XR.isSessionSupported('immersive-vr')
  .then((isSupported) => {
    if (isSupported) {
      startXR();
    }
  });
}

function frameCallback(time, xrFrame) {
  xrSession.requestAnimationFrame(frameCallback);

  // Update and render the frame
}

async function startXR() {
  xrSession = XR.requestSession("immersive-vr");

  if (xrSession) {
    stopButton.onclick = stopXR;
    requestHandle = xrSession.requestAnimationFrame(frameCallback);
  }
}

function pauseXR() {
  if (xrSession && requestHandle) {
    xrSession.cancelAnimationFrame(requestHandle);
    requestHandle = null;
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{DOMxRef("Window.cancelAnimationFrame")}}
- {{domxref("XRSession.requestAnimationFrame")}}
