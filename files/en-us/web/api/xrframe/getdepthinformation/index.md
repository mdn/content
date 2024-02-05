---
title: "XRFrame: getDepthInformation() method"
short-title: getDepthInformation()
slug: Web/API/XRFrame/getDepthInformation
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.XRFrame.getDepthInformation
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

The **`getDepthInformation()`** method of the {{domxref("XRFrame")}} interface returns an {{domxref("XRCPUDepthInformation")}} object containing CPU depth information for the active and animated frame.

## Syntax

```js-nolint
getDepthInformation(view)
```

### Parameters

- `view`
  - : An {{domxref("XRView")}} object obtained from a viewer pose.

### Return value

An {{domxref("XRCPUDepthInformation")}} object.

### Exceptions

- `NotSupportedError` {{domxref("DOMException")}}
  - : Thrown if `"depth-sensing"` is not in the list of enabled features for this {{domxref("XRSession")}}.
- `InvalidStateError` {{domxref("DOMException")}}

  - : Thrown if:

    - the `XRFrame` is not active nor animated. Obtaining depth information is only valid within the {{domxref("XRSession.requestAnimationFrame()", "requestAnimationFrame()")}} callback.
    - the session's {{domxref("XRSession.depthUsage", "depthUsage")}} is not `"cpu-optimized"`.

## Examples

### Obtaining CPU depth information

```js
// Make sure to request a session with depth-sensing enabled
const session = navigator.xr.requestSession("immersive-ar", {
  requiredFeatures: ["depth-sensing"],
  depthSensing: {
    usagePreference: ["cpu-optimized", "gpu-optimized"],
    formatPreference: ["luminance-alpha", "float32"],
  },
});

// …

// Obtain depth information in an active and animated frame
function rafCallback(time, frame) {
  session.requestAnimationFrame(rafCallback);
  const pose = frame.getViewerPose(referenceSpace);
  if (pose) {
    for (const view of pose.views) {
      const depthInformation = frame.getDepthInformation(view);
      if (depthInformation) {
        // Do something with the depth information
        renderDepth(depthInformation);
      }
    }
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
