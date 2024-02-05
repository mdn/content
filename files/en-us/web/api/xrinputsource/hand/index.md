---
title: "XRInputSource: hand property"
short-title: hand
slug: Web/API/XRInputSource/hand
page-type: web-api-instance-property
browser-compat: api.XRInputSource.hand
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

The read-only **`hand`** property of the {{domxref("XRInputSource")}} interface is a {{domxref("XRHand")}} object providing access to a hand-tracking device.

## Value

An {{domxref("XRHand")}} object or [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null) if the {{domxref("XRSession")}} has not been [requested](/en-US/docs/Web/API/XRSystem/requestSession) with the `hand-tracking` feature descriptor.

## Examples

```js
navigator.xr
  .requestSession({ optionalFeatures: ["hand-tracking"] })
  .then(/* … */);

function renderFrame(session, frame) {
  // …

  for (const inputSource of session.inputSources) {
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
