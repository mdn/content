---
title: XREquirectLayer.transform
slug: Web/API/XREquirectLayer/transform
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
browser-compat: api.XREquirectLayer.transform
---
{{APIRef("WebXR Device API")}}

The **`transform`** property of the {{domxref("XREquirectLayer")}} interface represents the offset and orientation relative to the layer's {{domxref("XREquirectLayer.space", "space")}}.

## Value

An {{domxref("XRRigidTransform")}}.

## Examples

### Setting the equirect layer's position

This example code positions the layer two meters away from the origin of `xrReferenceSpace`.

```js
const equirectLayer = xrGlBinding.createEquirectLayer({
  space: xrReferenceSpace,
  viewPixelWidth: 512,
  viewPixelHeight: 512
});

equirectLayer.transform = new XRRigidTransform({z: -2});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XRRigidTransform")}}
- {{domxref("XREquirectLayer.space")}}
