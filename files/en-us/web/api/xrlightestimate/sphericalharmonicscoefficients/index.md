---
title: XRLightEstimate.sphericalHarmonicsCoefficients
slug: Web/API/XRLightEstimate/sphericalHarmonicsCoefficients
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
browser-compat: api.XRLightEstimate.sphericalHarmonicsCoefficients
---
{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

The _read-only_ **`sphericalHarmonicsCoefficients`** property of the {{DOMxRef("XRLightEstimate")}} interface returns a {{jsxref("Float32Array")}} containing 9 spherical harmonics coefficients.

Spherical harmonic lighting is a technique that uses spherical functions instead of standard lighting equations. See [Wikipedia](https://en.wikipedia.org/wiki/Spherical_harmonic_lighting) for more information.

## Value

A {{jsxref("Float32Array")}} containing 9 spherical harmonics coefficients. The array contains 27 elements in total, with every 3 elements defining red, green, and blue components for each coefficient.

The first 3 elements must be a valid lighting estimate component; the rest may be 0 due to privacy settings or limitations of the device to provide more data.

## Examples

Within an {{domxref("XRFrame")}} loop, you can use the `sphericalHarmonicsCoefficients` property to light the scene.

```js
const lightProbe = await xrSession.requestLightProbe();

// frame loop
function onXRFrame(time, xrFrame) {
  let lightEstimate = xrFrame.getLightEstimate(lightProbe);

  // Render lights using lightEstimate.sphericalHarmonicsCoefficients
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XRFrame.getLightEstimate()")}}
