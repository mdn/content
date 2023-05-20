---
title: "XRCylinderLayer: centralAngle property"
short-title: centralAngle
slug: Web/API/XRCylinderLayer/centralAngle
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.XRCylinderLayer.centralAngle
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

The **`centralAngle`** property of the {{domxref("XRCylinderLayer")}} interface represents the angle in radians of the visible section of the cylinder.

## Value

A number representing the angle in radians of the visible section of the cylinder.

## Examples

### Getting a layer's central angle

The {{domxref("XRWebGLBinding.createCylinderLayer()")}} method creates a cylinder layer and allows to specify a `centralAngle`. The `XRCylinder.centralAngle` property can be used after layer creation to get the central angle used or to set it to a new one.

```js
const cylinderLayer = xrGlBinding.createCylinderLayer({
  space: xrReferenceSpace,
  viewPixelWidth: 1200,
  viewPixelHeight: 600,
  centralAngle: (60 * Math.PI) / 180,
  aspectRatio: 2,
  radius: 2,
  transform: new XRRigidTransform(/* … */),
});

cylinderLayer.centralAngle; // 1.0471975511965976
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XRCylinderLayer.aspectRatio")}}
- {{domxref("XRCylinderLayer.radius")}}
- {{jsxref("Math.PI")}}
