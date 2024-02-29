---
title: "XRLightProbe: probeSpace property"
short-title: probeSpace
slug: Web/API/XRLightProbe/probeSpace
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.XRLightProbe.probeSpace
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

The _read-only_ **`probeSpace`** property of the {{DOMxRef("XRLightProbe")}} interface returns an {{domxref("XRSpace")}} tracking the position and orientation that the lighting estimations are relative to.

## Value

An {{domxref("XRSpace")}} object.

## Examples

The `probeSpace` property returns the position and orientation in space that the lighting estimate is relative to. It may update over time as the user moves around. Use the {{domxref("XRFrame.getPose()")}} method to get the current lighting state with each frame.

```js
const lightProbe = await xrSession.requestLightProbe();
const probePose = xrFrame.getPose(lightProbe.probeSpace, xrReferenceSpace);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XRSpace()")}}
- {{domxref("XRFrame.getPose()")}}
