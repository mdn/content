---
title: XRJointPose
slug: Web/API/XRJointPose
page-type: web-api-interface
browser-compat: api.XRJointPose
---

{{APIRef("WebXR Device API")}}

The **`XRJointPose`** interface is an {{domxref("XRPose")}} with additional information about the size of the skeleton joint it represents.

{{InheritanceDiagram}}

## Instance properties

- {{domxref("XRJointPose.radius")}} {{ReadOnlyInline}}
  - : The radius (distance from skin) for a joint.

## Examples

### Using `XRJointPose` objects

Call {{domxref("XRFrame.getJointPose()")}} with an {{domxref("XRJointSpace")}} and an {{domxref("XRReferenceSpace")}} to get an `XRJointPose` object.

```js
navigator.xr
  .requestSession({ optionalFeatures: ["hand-tracking"] })
  .then(/* … */);

function renderFrame(session, frame) {
  // …

  for (const inputSource of session.inputSources) {
    if (inputSource.hand) {
      const indexFingerTipJoint = inputSource.hand.get("index-finger-tip");
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
- {{domxref("XRJointSpace")}}
- {{domxref("XRFrame.getJointPose()")}}
