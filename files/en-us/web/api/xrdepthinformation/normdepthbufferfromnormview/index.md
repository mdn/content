---
title: XRDepthInformation.normDepthBufferFromNormView
slug: Web/API/XRDepthInformation/normDepthBufferFromNormView
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
browser-compat: api.XRDepthInformation.normDepthBufferFromNormView
---
{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

The _read-only_ **`normDepthBufferFromNormView`** property of the {{DOMxRef("XRDepthInformation")}} interface contains the 3D geometric transform that needs to be applied when indexing into the depth buffer.

## Value

An {{domxref("XRRigidTransform")}} that needs to be applied when indexing into the depth buffer. The transformation that the matrix represents changes the coordinate system from normalized view coordinates to normalized depth-buffer coordinates that can then be scaled by depth buffer's `width` and `height` to obtain the absolute depth buffer coordinates.

## Examples

Use {{domxref("XRFrame.getDepthInformation()")}} (CPU) or {{domxref("XRWebGLBinding.getDepthInformation()")}} (WebGL) to obtain depth information. The returned objects will contain the `normDepthBufferFromNormView` of the depth buffer, which you can use for further calculations.

```js
const normDepthFromNormViewMatrix = depthData.normDepthBufferFromNormView.matrix;
const normViewFromNormDepth = depthData.normDepthBufferFromNormView.inverse.matrix;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
