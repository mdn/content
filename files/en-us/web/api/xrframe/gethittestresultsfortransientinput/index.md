---
title: "XRFrame: getHitTestResultsForTransientInput() method"
short-title: getHitTestResultsForTransientInput()
slug: Web/API/XRFrame/getHitTestResultsForTransientInput
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.XRFrame.getHitTestResultsForTransientInput
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

The **`getHitTestResultsForTransientInput()`** method of the {{domxref("XRFrame")}} interface returns an array of {{domxref("XRTransientInputHitTestResult")}} objects containing transient input hit test results for a given {{domxref("XRTransientInputHitTestSource")}}.

## Syntax

```js-nolint
getHitTestResultsForTransientInput(hitTestSource)
```

### Parameters

- `hitTestSource`
  - : An {{domxref("XRTransientInputHitTestSource")}} object that contains transient input hit test subscriptions.

### Return value

An array of {{domxref("XRTransientInputHitTestResult")}} objects.

## Examples

### Getting transient input hit test results

To request a transient input hit test source, start an {{domxref("XRSession")}} with the `hit-test` session feature enabled. Next, request the hit test source with {{domxref("XRSession.requestHitTestSourceForTransientInput()")}} and store it for later use in the frame loop. Finally, call `getHitTestResultsForTransientInput()` to obtain the result.

```js
const xrSession = navigator.xr.requestSession("immersive-ar", {
  requiredFeatures: ["local", "hit-test"],
});

let transientHitTestSource = null;
xrSession
  .requestHitTestSourceForTransientInput({
    profile: "generic-touchscreen",
    offsetRay: new XRRay(),
  })
  .then((touchScreenHitTestSource) => {
    transientHitTestSource = touchScreenHitTestSource;
  });

// frame loop
function onXRFrame(time, xrFrame) {
  let hitTestResults = xrFrame.getHitTestResultsForTransientInput(
    transientHitTestSource,
  );
  // do things with the transient hit test results
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XRTransientInputHitTestResult")}}
- {{domxref("XRTransientInputHitTestSource")}}
- {{domxref("XRRay")}}
