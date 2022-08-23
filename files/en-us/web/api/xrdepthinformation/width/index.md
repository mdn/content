---
title: XRDepthInformation.width
slug: Web/API/XRDepthInformation/width
page-type: web-api-instance-property
tags:
  - API
  - AR
  - Augmented Reality
  - Experimental
  - Property
  - Reference
  - VR
  - WebXR
  - WebXR Device API
browser-compat: api.XRDepthInformation.width
---
{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

The *read-only* **`width`** property of the {{DOMxRef("XRDepthInformation")}} interface contains the width of the depth buffer (number of columns).

## Value

An unsigned long integer.

## Examples

Use {{domxref("XRFrame.getDepthInformation()")}} (CPU) or {{domxref("XRWebGLBinding.getDepthInformation()")}} (WebGL) to obtain depth information. The returned objects will contain the `width` of the depth buffer, which you can use for further calculations.

```js
const smallerDepthDimension = Math.min(depthInfo.width, depthInfo.height);
const largerDepthDimension = Math.max(depthInfo.width, depthInfo.height);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
