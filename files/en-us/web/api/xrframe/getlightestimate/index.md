---
title: "XRFrame: getLightEstimate() method"
short-title: getLightEstimate()
slug: Web/API/XRFrame/getLightEstimate
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.XRFrame.getLightEstimate
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

The **`getLightEstimate()`** method of the {{domxref("XRFrame")}} interface returns an {{domxref("XRLightEstimate")}} object containing estimated lighting values for a given {{domxref("XRLightProbe")}}.

## Syntax

```js-nolint
getLightEstimate(lightProbe)
```

### Parameters

- `lightProbe`
  - : An {{domxref("XRLightProbe")}} object containing the current lighting state for the frame.

### Return value

An {{domxref("XRLightEstimate")}} object or [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null) if the device cannot estimate lighting for this frame.

## Examples

### Getting light estimates for each frame

Given a session's {{domxref("XRLightProbe")}}, the `getLightEstimate()` method gets an {{domxref("XRLightEstimate")}} object containing the lighting values for each frame.

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

- {{domxref("XRLightEstimate")}}
- {{domxref("XRLightProbe")}}
