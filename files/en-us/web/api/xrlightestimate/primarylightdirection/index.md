---
title: XRLightEstimate.primaryLightDirection
slug: Web/API/XRLightEstimate/primaryLightDirection
page-type: web-api-instance-property
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
browser-compat: api.XRLightEstimate.primaryLightDirection
---
{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

The _read-only_ **`primaryLightDirection`** property of the {{DOMxRef("XRLightEstimate")}} interface returns a {{domxref("DOMPointReadOnly")}} representing the direction to the primary light source from the `probeSpace` of an {{domxref("XRLightProbe")}}.

## Value

A {{domxref("DOMPointReadOnly")}} object. If no estimated values from the user's environment are available, the point will be `{ x: 0.0, y: 1.0, z: 0.0, w: 0.0 }`, representing a light shining straight down from above.

## Examples

Within an {{domxref("XRFrame")}} loop, you can use the `primaryLightDirection` and  `primaryLightIntensity` properties
to render shadows based on the most prominent light source, for example.

```js
const lightProbe = await xrSession.requestLightProbe();

// frame loop
function onXRFrame(time, xrFrame) {
  let lightEstimate = xrFrame.getLightEstimate(lightProbe);

  // Render lights

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

- {{domxref("XRLightEstimate.primaryLightIntensity")}}
- {{domxref("XRLightProbe.probeSpace")}}
