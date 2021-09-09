---
title: XRDepthInformation.rawValueToMeters
slug: Web/API/XRDepthInformation/rawValueToMeters
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
browser-compat: api.XRDepthInformation.rawValueToMeters
---
{{APIRef("WebXR Device API")}}

The *read-only* **`rawValueToMeters`** property of the {{DOMxRef("XRDepthInformation")}} interface contains the scale factor by which the raw depth values must be multiplied in order to get the depths in meters.

For CPU depth information, see also the {{domxref("XRCPUDepthInformation.getDepthInMeters()")}} method.

## Value

A number.

## Examples

Use {{domxref("XRFrame.getDepthInformation()")}} (CPU) or {{domxref("XRWebGLBinding.getDepthInformation()")}} (WebGL) to obtain depth information. The returned objects will contain the `rawValueToMeters` scale factor, which can be used for further calculations.

For CPU depth information and a buffer that has "luminance-alpha" format:

```js
const uint16 = new Uint16Array(depthInfo.data);
const index = column + row * depthInfo.width;
const depthInMeters = uint16[index] * depthInfo.rawValueToMeters;
```

(Use {{jsxref("Float32Array")}} for a "float32" data format.)

Note that the depth in meters is in depth-buffer coordinates. Additional steps are needed to convert them to normalized view coordinates, or the {{domxref("XRCPUDepthInformation.getDepthInMeters()")}} method can be used.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
