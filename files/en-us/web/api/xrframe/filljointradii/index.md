---
title: "XRFrame: fillJointRadii() method"
short-title: fillJointRadii()
slug: Web/API/XRFrame/fillJointRadii
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.XRFrame.fillJointRadii
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

The **`fillJointRadii()`** method of the {{domxref("XRFrame")}} interface populates a {{jsxref("Float32Array")}} with radii for a list of hand joint spaces and returns `true` if successful for all spaces.

## Syntax

```js-nolint
fillJointRadii(jointSpaces, radii)
```

### Parameters

- `jointSpaces`
  - : An array of {{domxref("XRJointSpace")}} objects for which to obtain the radii.
- `radii`
  - : A {{jsxref("Float32Array")}} that is populated with the radii of the `jointSpaces`.

### Return value

A boolean indicating if all of the spaces have a valid pose.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if the length of `jointSpaces` is larger than the number of elements in `radii`.

## Examples

### Obtaining radii for all joints of a hand

To efficiently get all radii for all 25 joints of each {{domxref("XRHand")}}, you can use the `fillJointRadii()` method.

```js
let radii1 = new Float32Array(25);
let radii2 = new Float32Array(25);

function onXRFrame(xrFrame, renderer) {
  let hand1 = xrFrame.session.inputSources[0].hand;
  xrFrame.fillJointRadii(hand1.values(), radii1);
  let hand2 = xrFrame.session.inputSources[1].hand;
  xrFrame.fillJointRadii(hand2.values(), radii2);
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
