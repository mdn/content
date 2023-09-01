---
title: "XRCubeLayer: orientation property"
short-title: orientation
slug: Web/API/XRCubeLayer/orientation
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.XRCubeLayer.orientation
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

The **`orientation`** property of the {{domxref("XRCubeLayer")}} interface represents the orientation relative to the `space` property.

## Value

A {{domxref("DOMPointReadOnly")}}.

## Examples

### Updating the cube layer's orientation

The {{domxref("XRWebGLBinding.createCubeLayer()")}} method creates a cube layer and allows specifying an `orientation`. The `XRCubeLayer.orientation` property can be used after layer creation to get the current orientation or to set it to a new one.

```js
const cubeLayer = xrGlBinding.createCubeLayer({
  space: xrReferenceSpace,
  viewPixelWidth: 512,
  viewPixelHeight: 512,
  orientation: DOMPointReadOnly.fromPoint({ x: 0.0, y: 0.0, z: 0.0, w: 1.0 }),
});

cubeLayer.orientation = someOtherPoint;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("DOMPointReadOnly")}}
- {{domxref("XRSpace")}}
- {{domxref("XRWebGLBinding.createCubeLayer()")}}
