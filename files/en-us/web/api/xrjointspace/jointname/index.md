---
title: "XRJointSpace: jointName property"
short-title: jointName
slug: Web/API/XRJointSpace/jointName
page-type: web-api-instance-property
browser-compat: api.XRJointSpace.jointName
---

{{APIRef("WebXR Device API")}}

The read-only **`jointName`** property of the {{domxref("XRJointSpace")}} interface contains the name of the joint it tracks.

## Value

A string indicating the name of the joint. See the list of hand joints on the {{domxref("XRHand")}} page.

## Examples

### Getting the `jointName`

Given a `XRJointSpace`, the `jointName` property will contain the hand joint name.

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
