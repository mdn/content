---
title: XRHitTestResult
slug: Web/API/XRHitTestResult
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
browser-compat: api.XRHitTestResult
---
{{APIRef("WebXR Device API")}}{{SecureContext_Header}}{{SeeCompatTable}}

The **`XRHitTestResult`** interface of the [WebXR Device API](/en-US/docs/Web/API/WebXR_Device_API) contains a single result of a hit test. You can get an array of `XRHitTestResult` objects for a frame by calling {{domxref("XRFrame.getHitTestResults()")}}.

## Properties

None.

## Methods

- {{domxref("XRHitTestResult.createAnchor()")}} {{Experimental_Inline}}
  - : Returns a {{jsxref("Promise")}} that resolves with an {{domxref("XRAnchor")}} created from the hit test result.
- {{domxref("XRHitTestResult.getPose()")}} {{Experimental_Inline}}
  - : Returns the {{domxref("XRPose")}} of the hit test result relative to the given base space.

## Examples

### Getting `XRHitTestResult` objects within the frame loop

In addition to showing `XRHitTestResult` within a frame loop, this example demonstrates a few things you must do before requesting this object. While setting up the session, specify `"hit-test"` as one of the `requiredFeatures`. Next, call {{domxref("XRSession.requestHitTestSource()")}} with the desired references. (Obtain this by calling {{domxref("XRSession.requestReferenceSpace()")}}.) This returns a {{domxref("XRHitTestSource")}}. That you will use in the frame loop to get `XRHitTestResult` objects.

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

### Getting the hit test result's pose

Use {{domxref("XRHitTestResult.getPose", "getPose()")}} to query the result's pose.

```js
let hitTestResults = xrFrame.getHitTestResults(hitTestSource);

if (hitTestResults.length > 0) {
  let pose = hitTestResults[0].getPose(referenceSpace);
}
```

### Creating an anchor from a hit test result

Once you find intersections on real-world surfaces using hit testing, you can create an {{domxref("XRAnchor")}} to attach a virtual object to that location.

```js
hitTestResult.createAnchor().then((anchor) => {
  // add anchored objects to the scene
}, (error) => {
  console.error(`Could not create anchor: ${error}`);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XRTransientInputHitTestResult")}}
- {{domxref("XRPose")}}
- {{domxref("XRAnchor")}}
