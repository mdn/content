---
title: XRHitTestResult
slug: Web/API/XRHitTestResult
tags:
  - API
  - Interface
  - Reference
  - WebXR
  - XR
  - AR
  - VR
browser-compat: api.XRHitTestResult
---
{{APIRef("WebXR Device API")}} {{secureContext_header}}

The **`XRHitTestResult`** interface of the [WebXR Device API](/en-US/docs/Web/API/WebXR_Device_API) contains a single result of a hit test. You can get an array of `XRHitTestResult` objects for a frame by calling {{domxref("XRFrame.getHitTestResults()")}}.

## Properties

None.

## Methods

- {{domxref("XRHitTestResult.createAnchor()")}}
  - : Creates an {{domxref("XRAnchor")}} from the hit test result.
- {{domxref("XRHitTestResult.getPose()")}}
  - : Returns the {{domxref("XRPose")}} of the hit test result relative to the given base space.

## Examples

### Getting `XRHitTestResult` objects within the frame loop

To get hit test results, you need to provide a {{domxref("XRHitTestSource")}}. See {{domxref("XRSession.requestHitTestSource()")}} for more information.

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

Once you found intersections on real-world surfaces using hit testing, you can create an {{domxref("XRAnchor")}} to attach a virtual object to that location.

```js
hitTestResult.createAnchor().then((anchor) => {
  // add anchored objects to the scene
}, (error) => {
  console.error("Could not create anchor: " + error);
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
