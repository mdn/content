---
title: XRWebGLBinding.getDepthInformation()
slug: Web/API/XRWebGLBinding/getDepthInformation
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - AR
  - XR
  - WebXR
  - Experimental
browser-compat: api.XRWebGLBinding.getDepthInformation
---
{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

The **`getDepthInformation()`** method of the {{domxref("XRWebGLBinding")}} interface returns an {{domxref("XRWebGLDepthInformation")}} object containing WebGL depth information.

## Syntax

```js
getDepthInformation(view)
```

### Parameters

- `view`
  - : An {{domxref("XRView")}} object obtained from a viewer pose.

### Return value

An {{domxref("XRWebGLDepthInformation")}} object.

### Exceptions

- `NotSupportedError` {{domxref("DOMException")}}
  - : Thrown if `"depth-sensing"` is not in the list of enabled features for this {{domxref("XRSession")}}.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the `XRFrame` is not active nor animated. Obtaining depth information is only valid within the {{domxref("XRSession.requestAnimationFrame()", "requestAnimationFrame()")}} callback.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the session's {{domxref("XRSession.depthUsage", "depthUsage")}} is not `"gpu-optimized"`.

## Examples

### Obtaining WebGL depth information

```js
const canvasElement = document.querySelector(".output-canvas");
const gl = canvasElement.getContext("webgl");
await gl.makeXRCompatible();

// Make sure to request a session with depth-sensing enabled
const session = navigator.xr.requestSession("immersive-ar", {
  requiredFeatures: ["depth-sensing"],
  depthSensing: {
    usagePreference: ["gpu-optimized"],
    formatPreference: ["luminance-alpha"]
  }
});

const glBinding = new XRWebGLBinding(session, gl);

// …

// Obtain depth information in an active and animated frame
function rafCallback(time, frame) {
  session.requestAnimationFrame(rafCallback);
  const pose = frame.getViewerPose(referenceSpace);
  if (pose) {
    for (const view of pose.views) {
      const depthInformation = glBinding.getDepthInformation(view);
      if (depthInformation) {
        // Do something with the depth information
        // gl.bindTexture(gl.TEXTURE_2D, depthInformation.texture);
        // …
      }
    }
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XRWebGLDepthInformation.texture")}}
