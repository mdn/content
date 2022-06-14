---
title: XRQuadLayer.transform
slug: Web/API/XRQuadLayer/transform
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
browser-compat: api.XRQuadLayer.transform
---
{{APIRef("WebXR Device API")}}

The **`transform`** property of the {{domxref("XRQuadLayer")}} interface represents the offset and orientation relative to the layer's {{domxref("XRQuadLayer.space", "space")}}.

## Value

An {{domxref("XRRigidTransform")}}.

## Examples

### Setting a layer's dimension and position

This example code positions the layer two meters away from the origin of `xrReferenceSpace` with a `height` and `width` of 1.5 meters.

```js
const quadLayer = xrGlBinding.createQuadLayer({
  space: xrReferenceSpace,
  viewPixelWidth: 512,
  viewPixelHeight: 512
});

quadLayer.transform = new XRRigidTransform({z: -2});
quadLayer.width = 1.5;
quadLayer.height = 1.5;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XRRigidTransform")}}
- {{domxref("XRQuadLayer.space")}}
