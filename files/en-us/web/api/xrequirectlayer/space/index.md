---
title: XREquirectLayer.space
slug: Web/API/XREquirectLayer/space
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
browser-compat: api.XREquirectLayer.space
---
{{APIRef("WebXR Device API")}}

The **`space`** property of the {{domxref("XREquirectLayer")}} interface represents the layer's spatial relationship with the user's physical environment.

## Value

An {{domxref("XRSpace")}}.

## Examples

### Updating the equirect layer's space

The {{domxref("XRWebGLBinding.createEquirectLayer()")}} method creates an equirect layer and requires a `space` property to be provided. The `XREquirectLayer.space` property can be used after layer creation to get the space used or to set it to a new one.

```js
const equirectLayer = xrGlBinding.createEquirectLayer({
  space: xrReferenceSpace,
  viewPixelWidth: 512,
  viewPixelHeight: 512
});

equirectLayer.space = someOtherSpace;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XRSpace")}}
- {{domxref("XRWebGLBinding.createEquirectLayer()")}}
