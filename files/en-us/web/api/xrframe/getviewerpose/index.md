---
title: XRFrame.getViewerPose()
slug: Web/API/XRFrame/getViewerPose
tags:
  - API
  - AR
  - Augmented Reality
  - Method
  - Reference
  - VR
  - Virtual Reality
  - WebXR
  - WebXR Device API
  - XR
  - XRFrame
  - getViewerPose
  - pose
browser-compat: api.XRFrame.getViewerPose
---
{{APIRef("WebXR Device API")}}

The **`getViewerPose()`** method, a member of the {{domxref("XRFrame")}} interface, returns a {{domxref("XRViewerPose")}} object which describes the viewer's pose (position and orientation) relative to the specified reference space.

See the {{domxref("XRFrame.getPose", "getPose()")}} method for a way to calculate a pose that represents the difference between two spaces.

## Syntax

```js
var xrViewerPose = xrFrame.getViewerPose(referenceSpace);
```

### Parameters

- `referenceSpace`
  - : An {{domxref("XRReferenceSpace")}} object specifying the space to use as the
    reference point or base for the computation of the viewer's current pose.

### Return value

A {{domxref("XRViewerPose")}} describing the viewer's position and orientation relative
to the specified reference space.

### Exceptions

- `InvalidStateError`
  - : A {{domxref('DOMException')}} indicating that `getViewerPose()` was not
    called within the context of a callback to a
    session's {{domxref("XRSession.requestAnimationFrame",
    "XRSession.requestAnimationFrame()")}}.

## Examples

In this callback function for {{domxref("XRSession.requestAnimationFrame",
  "requestAnimationFrame()")}}, the {{domxref("XRViewerPose")}} describing the viewer's
viewpoint on the world is obtained by calling `getViewerPose()` on the
{{domxref("XRFrame")}} passed into the callback.

```js
viewerPose = xrFrame.getViewerPose(xrReferenceSpace);

if (viewerPose) {
  /* render the pose's views */
}
```

To see a complete example, take a look at [Movement, orientation,
and motion](/en-US/docs/Web/API/WebXR_Device_API/Movement_and_motion).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
