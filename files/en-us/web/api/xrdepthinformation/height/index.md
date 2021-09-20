---
title: XRDepthInformation.height
slug: Web/API/XRDepthInformation/height
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
browser-compat: api.XRDepthInformation.height
---
{{APIRef("WebXR Device API")}}

The *read-only* **`height`** property of the {{DOMxRef("XRDepthInformation")}} interface contains the height of the depth buffer (number of rows).

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
