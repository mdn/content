---
title: XRCubeLayer.space
slug: Web/API/XRCubeLayer/space
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
browser-compat: api.XRCubeLayer.space
---
{{APIRef("WebXR Device API")}}

The **`space`** property of the {{domxref("XRCubeLayer")}} interface represents the layer's spatial relationship with the user's physical environment.

## Value

An {{domxref("XRSpace")}}.

## Examples

### Updating the cube layer's space

The {{domxref("XRWebGLBinding.createCubeLayer()")}} method creates a cube layer and requires a `space` property to be provided. The `XRCubeLayer.space` property can be used after layer creation to get the space used or to set it to a new one.

```js
const cubeLayer = xrGlBinding.createCubeLayer({
  space: xrReferenceSpace,
  viewPixelWidth: 512,
  viewPixelHeight: 512
});

cubeLayer.space = someOtherSpace;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XRSpace")}}
- {{domxref("XRWebGLBinding.createCubeLayer()")}}
