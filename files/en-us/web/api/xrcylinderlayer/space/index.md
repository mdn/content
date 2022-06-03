---
title: XRCylinderLayer.space
slug: Web/API/XRCylinderLayer/space
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
browser-compat: api.XRCylinderLayer.space
---
{{APIRef("WebXR Device API")}}

The **`space`** property of the {{domxref("XRCylinderLayer")}} interface represents the layer's spatial relationship with the user's physical environment.

## Value

An {{domxref("XRSpace")}}.

## Examples

### Updating the cylinder layer's space

The {{domxref("XRWebGLBinding.createCylinderLayer()")}} method creates a cylinder layer and requires a `space` property to be provided. The `XRCylinderLayer.space` property can be used after layer creation to get the space used or to set it to a new one.

```js
const cylinderLayer = xrGlBinding.createCylinderLayer({
  space: xrReferenceSpace,
  viewPixelWidth: 512,
  viewPixelHeight: 512
});

cylinderLayer.space = someOtherSpace;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XRSpace")}}
- {{domxref("XRWebGLBinding.createCylinderLayer()")}}
