---
title: "XRCylinderLayer: aspectRatio property"
short-title: aspectRatio
slug: Web/API/XRCylinderLayer/aspectRatio
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.XRCylinderLayer.aspectRatio
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

The **`aspectRatio`** property of the {{domxref("XRCylinderLayer")}} interface represents the ratio of the visible cylinder section. It is the ratio of the width of the visible section of the cylinder divided by its height. The width is calculated by multiplying the {{domxref("XRCylinderLayer.radius", "radius")}} with the {{domxref("XRCylinderLayer.centralAngle", "centralAngle")}}.

## Value

A number representing the ratio of the visible cylinder section.

## Examples

### Getting a layer's aspect ratio

The {{domxref("XRWebGLBinding.createCylinderLayer()")}} method creates a cylinder layer and allows to specify an `aspectRatio`. The `XRCylinder.aspectRatio` property can be used after layer creation to get the {{glossary("aspect ratio")}} used or to set it to a new one.

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

cylinderLayer.aspectRatio; // 2
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XRCylinderLayer.centralAngle")}}
- {{domxref("XRCylinderLayer.radius")}}
