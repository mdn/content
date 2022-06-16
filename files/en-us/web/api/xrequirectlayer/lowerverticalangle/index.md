---
title: XREquirectLayer.lowerVerticalAngle
slug: Web/API/XREquirectLayer/lowerVerticalAngle
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
browser-compat: api.XREquirectLayer.lowerVerticalAngle
---
{{APIRef("WebXR Device API")}}

The **`lowerVerticalAngle`** property of the {{domxref("XREquirectLayer")}} interface represents the lower vertical angle in radians for the sphere.

## Value

A number representing the lower vertical angle in radians for the sphere. Setting `lowerVerticalAngle` to a value less than -π/2 will set it to -π/2 and setting it to a value higher than π/2 will set it to π/2.

## Examples

### Getting a layer's lower vertical angle

The {{domxref("XRWebGLBinding.createEquirectLayer()")}} method creates an equirect layer and allows specifying a `lowerVerticalAngle`. The `XREquirectLayer.lowerVerticalAngle` property can be used after layer creation to get the lower vertical angle used or to set it to a new one.

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

equirectLayer.lowerVerticalAngle; // -1.5707963267948966
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XREquirectLayer.radius")}}
- {{domxref("XREquirectLayer.centralHorizontalAngle")}}
- {{domxref("XREquirectLayer.upperVerticalAngle")}}
