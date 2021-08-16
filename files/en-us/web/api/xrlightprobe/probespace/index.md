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

The _read-only_ **`probeSpace`** property of the {{DOMxRef("XRLightProbe")}} interface returns an {{domxref("XRSpace")}} tracking the position and orientation the lighting estimations are being generated relative to.

### Value

An {{domxref("XRSpace")}} object.

## Examples

The position and orientation in space that the lighting is estimated relative to is communicated with the `probeSpace` property (it may update over time as the user moves around). The {{domxref("XRFrame.getPose()")}} method can be used to get the current lighting state with each frame.

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
