---
title: XREquirectLayer.radius
slug: Web/API/XREquirectLayer/radius
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
browser-compat: api.XREquirectLayer.radius
---
{{APIRef("WebXR Device API")}}

The **`radius`** property of the {{domxref("XREquirectLayer")}} interface represents the radius of the sphere.

## Value

A number representing the non-negative radius (in meters) of the sphere. Values of zero or infinity are treated as representing an infinite sphere. Setting `radius` to a value less than 0 will set it to 0.

## Examples

### Getting a layer's radius

The {{domxref("XRWebGLBinding.createEquirectLayer()")}} method creates an equirect layer and allows specifying a `radius`. The `XREquirectLayer.radius` property can be used after layer creation to get the radius used or to set it to a new one.

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

equirectLayer.radius; // 0
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XREquirectLayer.centralHorizontalAngle")}}
- {{domxref("XREquirectLayer.lowerVerticalAngle")}}
- {{domxref("XREquirectLayer.upperVerticalAngle")}}
