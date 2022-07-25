---
title: XREquirectLayer.upperVerticalAngle
slug: Web/API/XREquirectLayer/upperVerticalAngle
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - VR
  - WebXR
  - WebXR API
  - WebXR Device API
  - XR
browser-compat: api.XREquirectLayer.upperVerticalAngle
---
{{APIRef("WebXR Device API")}}

The **`upperVerticalAngle`** property of the {{domxref("XREquirectLayer")}} interface represents the upper vertical angle in radians for the sphere.

## Value

A number representing the upper vertical angle in radians for the sphere. Setting `upperVerticalAngle` to a value less than -π/2 will set it to -π/2 and setting it to a value higher than π/2 will set it to π/2.

## Examples

### Getting a layer's upper vertical angle

The {{domxref("XRWebGLBinding.createEquirectLayer()")}} method creates an equirect layer and allows specifying a `upperVerticalAngle`. The `XREquirectLayer.upperVerticalAngle` property can be used after layer creation to get the upper vertical angle used or to set it to a new one.

```js
const equirectLayer = xrGlBinding.createEquirectLayer({
  space: xrReferenceSpace,
  viewPixelWidth: 1200,
  viewPixelHeight: 600,
  centralHorizontalAngle: 2 * Math.PI,
  upperVerticalAngle: Math.PI / 2.0,
  lowerVerticalAngle: -Math.PI / 2.0,
  radius: 0
});

equirectLayer.upperVerticalAngle; // 1.5707963267948966
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XREquirectLayer.radius")}}
- {{domxref("XREquirectLayer.centralHorizontalAngle")}}
- {{domxref("XREquirectLayer.lowerVerticalAngle")}}
