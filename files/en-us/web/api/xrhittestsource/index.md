---
title: XRHitTestSource
slug: Web/API/XRHitTestSource
page-type: web-api-interface
tags:
  - API
  - Interface
  - Reference
  - WebXR
  - XR
  - AR
  - VR
  - Experimental
browser-compat: api.XRHitTestSource
---
{{APIRef("WebXR Device API")}}{{SecureContext_Header}}{{SeeCompatTable}}

The **`XRHitTestSource`** interface of the [WebXR Device API](/en-US/docs/Web/API/WebXR_Device_API) handles hit test subscriptions. You can get an `XRHitTestSource` object by using the {{domxref("XRSession.requestHitTestSource()")}} method.

This object doesn't itself contain hit test results, but it is used to compute hit tests for each {{domxref("XRFrame")}} by calling {{domxref("XRFrame.getHitTestResults()")}}, which returns {{domxref("XRHitTestResult")}} objects.

## Properties

None.

## Methods

- {{domxref("XRHitTestSource.cancel()")}} {{Experimental_Inline}}
  - : Unsubscribes from the hit test.

## Examples

### Getting an `XRHitTestSource` object for a session

Call {{domxref("XRSession.requestHitTestSource()")}} to get a hit test source.

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

### Unsubscribe from hit test

To unsubscribe from a hit test source, call {{domxref("XRHitTestSource.cancel()")}}. Since the object will no longer be usable, you can clean up and set the `XRHitTestSource` object to [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null).

```js
hitTestSource.cancel();
hitTestSource = null;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XRTransientInputHitTestSource")}}
