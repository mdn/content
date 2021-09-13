---
title: XRJointSpace
slug: Web/API/XRJointSpace
tags:
  - API
  - Interface
  - Reference
  - WebXR
  - XR
  - AR
  - VR
browser-compat: api.XRJointSpace
---
{{APIRef("WebXR Device API")}}

The **`XRJointSpace`** interface is an {{domxref("XRSpace")}} and represents the position and orientation of an {{domxref("XRHand")}} joint.

## Properties

- {{domxref("XRJointSpace.jointName")}} {{readonlyInline}}
  - : The name of the joint that is tracked. See {{domxref("XRHand")}} for possible hand joint names.

## Examples

### Using `XRJointSpace` objects

You can use an `XRJointSpace` object and an {{domxref("XRReferenceSpace")}} to get an {{domxref("XRJointPose")}} by calling {{domxref("XRFrame.getJointPose()")}}.

```js
navigator.xr.requestSession({optionalFeatures: ["hand-tracking"]}).then(
  // ...
);

function renderFrame(session, frame) {
   // ...

   for (inputSource of session.inputSources) {
      if (inputSource.hand) {
        let indexFingerTipJoint = inputSource.hand.get("index-finger-tip"); // XRJointSpace
        indexFingerTipJoint.jointName; // "index-finger-tip"
        frame.getJointPose(indexFingerTipJoint, referenceSpace); // XRJointPose
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
- {{domxref("XRJointPose")}}
- {{domxref("XRFrame.getJointPose()")}}
