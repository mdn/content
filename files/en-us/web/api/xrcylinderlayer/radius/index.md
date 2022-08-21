---
title: XRCylinderLayer.radius
slug: Web/API/XRCylinderLayer/radius
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
browser-compat: api.XRCylinderLayer.radius
---
{{APIRef("WebXR Device API")}}

The **`radius`** property of the {{domxref("XRCylinderLayer")}} interface represents the radius of the cylinder.

## Value

A number representing the radius of the cylinder.

## Examples

### Getting a layer's radius

The {{domxref("XRWebGLBinding.createCylinderLayer()")}} method creates a cylinder layer and allows to specify a `radius`. The `XRCylinder.radius` property can be used after layer creation to get the radius used or to set it to a new one.

```js
const cylinderLayer = xrGlBinding.createCylinderLayer({
  space: xrReferenceSpace,
  viewPixelWidth: 1200,
  viewPixelHeight: 600,
  centralAngle : 60 * Math.PI / 180,
  aspectRatio : 2,
  radius : 2,
  transform : new XRRigidTransform(/* … */),
});

cylinderLayer.radius; // 2
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XRCylinderLayer.aspectRatio")}}
- {{domxref("XRCylinderLayer.centralAngle")}}
- {{jsxref("Math.PI")}}
