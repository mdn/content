---
title: "XRFrame: fillPoses() method"
short-title: fillPoses()
slug: Web/API/XRFrame/fillPoses
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.XRFrame.fillPoses
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

The **`fillPoses()`** method of the {{domxref("XRFrame")}} interface populates a {{jsxref("Float32Array")}} with the matrices of the poses relative to a given base space and returns `true` if successful for all spaces.

## Syntax

```js-nolint
fillPoses(spaces, baseSpace, transforms)
```

### Parameters

- `spaces`
  - : An array of {{domxref("XRSpace")}} objects for which to get the poses.
- `baseSpace`
  - : An {{domxref("XRSpace")}} object to use as the base or origin for the relative position and orientation.
- `transforms`
  - : A {{jsxref("Float32Array")}} that is populated with the matrices of the poses relative to the given `baseSpace`.

### Return value

A boolean indicating if all of the spaces have a valid pose.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if the length of `spaces` multiplied by 16 is larger than the number of elements in `transforms`.

## Examples

### Obtaining poses for all joints of a hand

To efficiently get all poses for all 25 joints of each {{domxref("XRHand")}}, you can use the `fillPoses()` method.

```js
let poses1 = new Float32Array(16 * 25);
let poses2 = new Float32Array(16 * 25);

function onXRFrame(xrFrame, renderer) {
  let hand1 = xrFrame.session.inputSources[0].hand;
  xrFrame.fillPoses(hand1.values(), renderer.referenceSpace, poses1);
  let hand2 = xrFrame.session.inputSources[1].hand;
  xrFrame.fillPoses(hand2.values(), renderer.referenceSpace, poses2);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XRHand")}}
- {{domxref("XRJointSpace")}}
- {{jsxref("Float32Array")}}
