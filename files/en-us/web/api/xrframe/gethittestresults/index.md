---
title: XRFrame.getHitTestResults()
slug: Web/API/XRFrame/getHitTestResults
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - AR
  - XR
  - WebXR
  - Experimental
browser-compat: api.XRFrame.getHitTestResults
---
{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

The **`getHitTestResults()`** method of the {{domxref("XRFrame")}} interface returns an array of {{domxref("XRHitTestResult")}} objects containing hit test results for a given {{domxref("XRHitTestSource")}}.

## Syntax

```js
getHitTestResults(hitTestSource)
```

### Parameters

- `hitTestSource`
  - : An {{domxref("XRHitTestSource")}} object that contains hit test subscriptions.

### Return value

An array of {{domxref("XRHitTestResult")}} objects.

## Examples

### Getting hit test results

To request a hit test source, start an {{domxref("XRSession")}} with the `hit-test` session feature enabled. Next, request a the hit test source with {{domxref("XRSession.requestHitTestSource()")}} and store it for later use in the frame loop. Finally, call `getHitTestResults()` to obtain the result.

 ```js
 const xrSession = navigator.xr.requestSession("immersive-ar", {
    requiredFeatures: ["local", "hit-test"]
 });
 let hitTestSource = null;
 xrSession.requestHitTestSource({
   space : viewerSpace, // obtained from xrSession.requestReferenceSpace("viewer");
   offsetRay : new XRRay({y: 0.5})
 }).then((viewerHitTestSource) => {
   hitTestSource = viewerHitTestSource;
 });
 // frame loop
 function onXRFrame(time, xrFrame) {
   let hitTestResults = xrFrame.getHitTestResults(hitTestSource);
   // do things with the hit test results
 }
 ```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XRHitTestResult")}}
- {{domxref("XRHitTestSource")}}
- {{domxref("XRRay")}}
