---
title: XRLightEstimate.primaryLightIntensity
slug: Web/API/XRLightEstimate/primaryLightIntensity
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
browser-compat: api.XRLightEstimate.primaryLightIntensity
---
{{APIRef("WebXR Device API")}}

The _read-only_ **`primaryLightIntensity`** property of the {{DOMxRef("XRLightEstimate")}} interface returns a {{domxref("DOMPointReadOnly")}} representing the intensity of the primary light source from the `probeSpace` of an {{domxref("XRLightProbe")}}.

## Value

A {{domxref("DOMPointReadOnly")}} object where an RGB value is mapped to the `x`, `y`, and `z` values. The `w` value is always `1.0`. If no estimated values from the user's environment are available, the point will be `{x: 0.0, y: 0.0, z: 0.0, w: 1.0}`, representing no illumination.

## Examples

Within an {{domxref("XRFrame")}} loop, you can use the `primaryLightDirection` and  `primaryLightIntensity` properties
to render shadows based on the most prominent light source, for example.

```js
const lightProbe = await xrSession.requestLightProbe();

// frame loop
function onXRFrame(time, xrFrame) {
  let lightEstimate = xrFrame.getLightEstimate(lightProbe);

  // Render lights ...

  // Available properties
  lightEstimate.primaryLightDirection;
  lightEstimate.primaryLightIntensity;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XRLightEstimate.primaryLightDirection")}}
- {{domxref("XRLightProbe.probeSpace")}}
