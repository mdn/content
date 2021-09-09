---
title: XRJointPose.radius
slug: Web/API/XRJointPose/radius
tags:
  - API
  - Controller
  - Hand
  - Input
  - Property
  - Read-only
  - Reference
  - VR
  - WebXR
  - WebXR API
  - WebXR Device API
  - XR
  - XRJointPose

browser-compat: api.XRJointPose.radius
---
{{APIRef("WebXR Device API")}}

The read-only **`radius`** property of the {{domxref("XRJointPose")}} interface indicates the radius (distance from skin) for a joint.

## Value

A number indicating the radius in meters.

## Examples

### Getting the `radius` for a hand joint

Call {{domxref("XRFrame.getJointPose()")}} with an {{domxref("XRJointSpace")}} and an {{domxref("XRReferenceSpace")}} to get an `XRJointPose` object which provides the radius property.

```js
navigator.xr.requestSession({optionalFeatures: ["hand-tracking"]}).then(
  // ...
);

function renderFrame(session, frame) {
   // ...

   for (inputSource of session.inputSources) {
      if (inputSource.hand) {
        let indexFingerTipJoint = inputSource.hand.get("index-finger-tip");
        let radius = frame.getJointPose(indexFingerTipJoint, referenceSpace).radius;
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
- {{domxref("XRReferenceSpace")}}
- {{domxref("XRJointSpace")}}
- {{domxref("XRFrame.getJointPose()")}}
