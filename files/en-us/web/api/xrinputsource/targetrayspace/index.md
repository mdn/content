---
title: XRInputSource.targetRaySpace
slug: Web/API/XRInputSource/targetRaySpace
page-type: web-api-instance-property
tags:
  - API
  - AR
  - Controller
  - Input
  - Mixed
  - Property
  - Ray
  - Read-only
  - Reality
  - Reference
  - VR
  - Virtual
  - WebXR
  - WebXR API
  - WebXR Device API
  - XR
  - XRInputSource
  - XRReferenceSpace
  - XRSpace
  - augmented
  - source
  - space
  - target
browser-compat: api.XRInputSource.targetRaySpace
---
{{APIRef("WebXR Device API")}}

The read-only {{domxref("XRInputSource")}} property
**`targetRaySpace`** returns an {{domxref("XRSpace")}}
(typically an {{domxref("XRReferenceSpace")}}) representing the position and
orientation of the target ray in the virtual space. Its native origin tracks
the position of the origin point of the target ray, and its orientation indicates the
orientation of the controller device itself. These values, interpreted in the context of
the input source's {{domxref("XRInputSource.targetRayMode", "targetRayMode")}}, can be
used both to fully interpret the device as an input source.

To obtain an `XRSpace` representing the input controller's position and
orientation in virtual space, use the {{domxref("XRInputSource.gripSpace",
  "gripSpace")}} property.

## Value

An {{domxref("XRSpace")}} object—typically an {{domxref("XRReferenceSpace")}} or
{{domxref("XRBoundedReferenceSpace")}}—which represents the position and orientation of
the input controller's target ray in virtual space.

The native origin of the returned `XRSpace` is located at the point from
which the target ray is emitted, and the orientation of the space indicates the
direction in which the target ray is pointing.

## Usage notes

All input sources—regardless of their {{domxref("XRInputSource.targetRayMode",
  "targetRayMode")}}—have a valid `targetRaySpace`. The exact meaning of this
space varies, however, depending on the mode:

- Every gaze input (`targetRayMode` value of `gaze`), shares the
  same {{domxref("XRSpace")}} object as their target ray space, since the gaze input
  comes from the viewer's head. This shared space represents the same location as the
  space returned by the {{domxref("XRSession")}} method
  {{domxref("XRSession.requestReferenceSpace", "requestReferenceSpace()")}}, but is
  maintained as a different object to allow for future enhancements to the API.
- The target ray space reported by tracked pointer inputs (`targetRayMode`
  of `tracked-pointer`) is actually based upon the true spatial position and
  orientation of the input device.

To determine the position and orientation of the target ray while rendering a frame,
pass it into the {{domxref("XRFrame")}} method {{domxref("XRFrame.getPose",
  "getPose()")}} method, then use the returned {{domxref("XRPose")}} object's
{{domxref("XRPose.transform", "transform")}} to gather the spatial information you need.

## Examples

This fragment of code shows part of a function to be called once every frame. It looks for inputs which have a non-`null` {{domxref("XRInputSource.targetRaySpace", "targetRaySpace")}}. Inputs which have a value for this property represent inputs that project a target ray outward from the user.

For each such input, this example looks for inputs whose {{domxref("XRInputSource.targetRayMode", "targetRayMode")}} is `tracked-pointer`, indicating that the input is in fact intended to represent a targeting device rather than a gazing device, screen tap, or mouse click. For tracked pointers, a function `myRenderTargetRayAsBeam()` is called to render a beam from the input controller's virtual position outward in the direction it's pointing.

The code should continue to perform tasks such as drawing controllers or any objects representative of the user's hands' positions in the virtual space, as well as any other input-related tasks.

```js
function updateInputSources(session, frame, refSpace) {
  for (const source of session.getInputSources()) {
    const targetRayPose = frame.getPose(inputSource.targetRaySpace, refSpace);

    if (targetRayPose) {
      if (source.targetRayMode === "tracked-pointer") {
        myRenderTargetRayAsBeam(targetRayPose);
      }
    }

    // …
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebXR Device API](/en-US/docs/Web/API/WebXR_Device_API)
- [Inputs and input sources](/en-US/docs/Web/API/WebXR_Device_API/Inputs)
- [Using gamepads in WebXR applications](/en-US/docs/Web/WebXR%20Device%20API/Gamepads)
