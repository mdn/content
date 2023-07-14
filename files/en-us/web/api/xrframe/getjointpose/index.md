---
title: "XRFrame: getJointPose() method"
short-title: getJointPose()
slug: Web/API/XRFrame/getJointPose
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.XRFrame.getJointPose
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

The **`getJointPose()`** method of the {{domxref("XRFrame")}} interface returns an {{domxref("XRJointPose")}} object providing the pose of a hand joint (see {{domxref("XRHand")}}) relative to a given base space.

## Syntax

```js-nolint
getJointPose(joint, baseSpace)
```

### Parameters

- `joint`
  - : An {{domxref("XRJointSpace")}} specifying the hand joint space for which to obtain an {{domxref("XRJointPose")}} describing the item's position and orientation.
- `baseSpace`
  - : An {{domxref("XRSpace")}} to use as the base or origin for the relative position and orientation.

### Return value

An {{domxref("XRJointPose")}} object specifying the position and orientation of the hand joint, relative to
the {{domxref("XRSpace")}} indicated by `baseSpace`.

## Examples

### Using `getJointPose()`

Call `getJointPose()` with an {{domxref("XRJointSpace")}} and an {{domxref("XRReferenceSpace")}} to get an {{domxref("XRJointPose")}} object.

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
- {{domxref("XRJointSpace")}}
- {{domxref("XRSpace")}}
