---
title: XRInputSource.hand
slug: Web/API/XRInputSource/hand
tags:
  - API
  - Controller
  - Hand
  - Input
  - Property
  - Read-only
  - Reference
  - VR
  - WebXR
  - WebXR API
  - WebXR Device API
  - XR
  - XRInputSource

browser-compat: api.XRInputSource.hand
---
{{APIRef("WebXR Device API")}}

The read-only **`hand`** property of the {{domxref("XRInputSource")}} interface is a {{domxref("XRHand")}} object providing access to a hand-tracking device.

## Value

An {{domxref("XRHand")}} object or {{jsxref("null")}} if the {{domxref("XRSession")}} has not been [requested](/en-US/docs/Web/API/XRSystem/requestSession) with the `hand-tracking` feature descriptor.

## Examples

```js

navigator.xr.requestSession({optionalFeatures: ["hand-tracking"]}).then(
  // ...
);

function renderFrame(session, frame) {
   // ...

   for (inputSource of session.inputSources) {
      if (inputSource.hand) {
         // render a hand model, perform gesture detection, etc.
      }
   }
}
```
## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XRHand")}}
