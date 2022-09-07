---
title: XRLightEstimate
slug: Web/API/XRLightEstimate
page-type: web-api-interface
tags:
  - API
  - Interface
  - Reference
  - WebXR
  - XR
  - AR
  - VR
  - Experimental
browser-compat: api.XRLightEstimate
---
{{APIRef("WebXR Device API")}} {{secureContext_header}}{{SeeCompatTable}}

The **`XRLightEstimate`** interface of the [WebXR Device API](/en-US/docs/Web/API/WebXR_Device_API) provides the estimated lighting values for an {{domxref("XRLightProbe")}} at the time represented by an {{domxref("XRFrame")}}.

To get an `XRLightEstimate` object, call the {{domxref("XRFrame.getLightEstimate()")}} method.

## Properties

- {{domxref("XRLightEstimate.primaryLightDirection")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : A {{domxref("DOMPointReadOnly")}} representing the direction to the primary light source from the `probeSpace` of an {{domxref("XRLightProbe")}}.
- {{domxref("XRLightEstimate.primaryLightIntensity")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : A {{domxref("DOMPointReadOnly")}} (with the `x`, `y`, `z` values mapped to RGB) representing the intensity of the primary light source from the `probeSpace` of an {{domxref("XRLightProbe")}}.
- {{domxref("XRLightEstimate.sphericalHarmonicsCoefficients")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : A {{jsxref("Float32Array")}} containing 9 spherical harmonics coefficients.

## Methods

None.

## Examples

### Getting an `XRLightProbe` object

First, use the {{domxref("XRSession.requestLightProbe()")}} method to get a light probe from a session.
Then, within an {{domxref("XRFrame")}} loop, the {{domxref("XRFrame.getLightEstimate", "getLightEstimate()")}} method will return a `XRLightEstimate` object containing the lighting values for each frame.

```js
const lightProbe = await xrSession.requestLightProbe();

// frame loop
function onXRFrame(time, xrFrame) {
  let lightEstimate = xrFrame.getLightEstimate(lightProbe);

  // Use light estimate data to light the scene

  // Available properties
  lightEstimate.sphericalHarmonicsCoefficients;
  lightEstimate.primaryLightDirection;
  lightEstimate.primaryLightIntensity;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XRFrame.getLightEstimate()")}}
