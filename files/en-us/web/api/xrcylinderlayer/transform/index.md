---
title: XRCylinderLayer.transform
slug: Web/API/XRCylinderLayer/transform
tags:
  - API
  - Property
  - Reference
  - VR
  - WebXR
  - WebXR API
  - WebXR Device API
  - XR
browser-compat: api.XRCylinderLayer.transform
---
{{APIRef("WebXR Device API")}}

The **`transform`** property of the {{domxref("XRCylinderLayer")}} interface represents the offset and orientation relative to the layer's {{domxref("XRCylinderLayer.space", "space")}}.

## Value

An {{domxref("XRRigidTransform")}}.

## Examples

### Setting the cylinder layer's position

This example code positions the layer two meters away from the origin of `xrReferenceSpace`.

```js
const cylinderLayer = xrGlBinding.createCylinderLayer({
  space: xrReferenceSpace,
  viewPixelWidth: 512,
  viewPixelHeight: 512
});

cylinderLayer.transform = new XRRigidTransform({z: -2});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XRRigidTransform")}}
- {{domxref("XRCylinderLayer.space")}}
