---
title: XRLightProbe.probeSpace
slug: Web/API/XRLightProbe/probeSpace
tags:
  - API
  - AR
  - Augmented Reality
  - Experimental
  - Property
  - Reference
  - VR
  - WebXR
  - WebXR Device API
browser-compat: api.XRLightProbe.probeSpace
---
{{APIRef("WebXR Device API")}}

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
