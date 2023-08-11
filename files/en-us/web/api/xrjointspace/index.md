---
title: XRJointSpace
slug: Web/API/XRJointSpace
page-type: web-api-interface
browser-compat: api.XRJointSpace
---

{{APIRef("WebXR Device API")}}

The **`XRJointSpace`** interface is an {{domxref("XRSpace")}} and represents the position and orientation of an {{domxref("XRHand")}} joint.

{{InheritanceDiagram}}

## Instance properties

- {{domxref("XRJointSpace.jointName")}} {{ReadOnlyInline}}
  - : The name of the joint that is tracked. See {{domxref("XRHand")}} for possible hand joint names.

## Examples

### Using `XRJointSpace` objects

You can use an `XRJointSpace` object and an {{domxref("XRReferenceSpace")}} to get an {{domxref("XRJointPose")}} by calling {{domxref("XRFrame.getJointPose()")}}.

```js
navigator.xr
  .requestSession({ optionalFeatures: ["hand-tracking"] })
  .then(/** … */);

function renderFrame(session, frame) {
  // …

  for (const inputSource of session.inputSources) {
    if (inputSource.hand) {
      const indexFingerTipJoint = inputSource.hand.get("index-finger-tip"); // XRJointSpace
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
