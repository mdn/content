---
title: XRProjectionLayer.ignoreDepthValues
slug: Web/API/XRProjectionLayer/ignoreDepthValues
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
browser-compat: api.XRProjectionLayer.ignoreDepthValues
---
{{APIRef("WebXR Device API")}}

The read-only **`ignoreDepthValues`** property of the {{domxref("XRProjectionLayer")}} interface is a boolean indicating if the XR compositor is not making use of depth buffer values when rendering the layer.

## Value

A boolean. `true` indicates the XR compositor doesn't make use of depth buffer values; `false` indicates the content of the depth buffer will be used when rendering the layer.

## Examples

### Ignoring depth values

If the `depthFormat` option is `0` when creating a projection layer, the `ignoreDepthValues` property will be `true`. See also {{domxref("XRWebGLBinding.createProjectionLayer()")}}.

```js
let glProjectionLayer = xrGLBinding.createProjectionLayer({
  depthFormat: 0
});

glProjectionLayer.ignoreDepthValues; // true
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XRWebGLBinding.createProjectionLayer()")}}
