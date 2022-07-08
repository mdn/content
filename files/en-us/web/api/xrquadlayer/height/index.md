---
title: XRQuadLayer.height
slug: Web/API/XRQuadLayer/height
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
browser-compat: api.XRQuadLayer.height
---
{{APIRef("WebXR Device API")}}

The **`height`** property of the {{domxref("XRQuadLayer")}} interface represents the height of the layer in meters.

## Value

A number representing the height of the layer in meters.

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

- {{domxref("XRQuadLayer.width")}}
