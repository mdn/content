---
title: "XRDepthInformation: height property"
short-title: height
slug: Web/API/XRDepthInformation/height
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.XRDepthInformation.height
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

The _read-only_ **`height`** property of the {{DOMxRef("XRDepthInformation")}} interface contains the height of the depth buffer (number of rows).

## Value

An unsigned long integer.

## Examples

Use {{domxref("XRFrame.getDepthInformation()")}} (CPU) or {{domxref("XRWebGLBinding.getDepthInformation()")}} (WebGL) to obtain depth information. The returned objects will contain the `height` of the depth buffer, which you can use for further calculations.

```js
const smallerDepthDimension = Math.min(depthInfo.width, depthInfo.height);
const largerDepthDimension = Math.max(depthInfo.width, depthInfo.height);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
