---
title: "XREquirectLayer: centralHorizontalAngle property"
short-title: centralHorizontalAngle
slug: Web/API/XREquirectLayer/centralHorizontalAngle
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.XREquirectLayer.centralHorizontalAngle
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

The **`centralHorizontalAngle`** property of the {{domxref("XREquirectLayer")}} interface represents the central horizontal angle in radians for the sphere.

## Value

A number representing the central horizontal angle in radians for the sphere. Setting `centralHorizontalAngle` to a value less than 0 will set it to 0 and setting it to a value higher than 2π will set it to 2π.

## Examples

### Getting a layer's central horizontal angle

The {{domxref("XRWebGLBinding.createEquirectLayer()")}} method creates an equirect layer and allows specifying a `centralHorizontalAngle`. The `XREquirectLayer.centralHorizontalAngle` property can be used after layer creation to get the central horizontal angle used or to set it to a new one.

```js
const equirectLayer = xrGlBinding.createEquirectLayer({
  space: xrReferenceSpace,
  viewPixelWidth: 1200,
  viewPixelHeight: 600,
  centralHorizontalAngle: 2 * Math.PI,
  upperVerticalAngle: Math.PI / 2.0,
  lowerVerticalAngle: -Math.PI / 2.0,
  radius: 0,
});

equirectLayer.centralHorizontalAngle; // 6.283185307179586
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XREquirectLayer.radius")}}
- {{domxref("XREquirectLayer.lowerVerticalAngle")}}
- {{domxref("XREquirectLayer.upperVerticalAngle")}}
