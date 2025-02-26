---
title: "XRCPUDepthInformation: data property"
short-title: data
slug: Web/API/XRCPUDepthInformation/data
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.XRCPUDepthInformation.data
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

The _read-only_ **`data`** property of the {{DOMxRef("XRCPUDepthInformation")}} interface is an {{jsxref("ArrayBuffer")}} containing depth-buffer information in raw format.

The data is stored in row-major format, without padding, with each entry corresponding to distance from the view's near plane to the users' environment, in unspecified units. The size of each data entry and the type is determined by {{domxref("XRSession.depthDataFormat", "depthDataFormat")}}. The values can be converted from unspecified units to meters by multiplying them by {{domxref("XRDepthInformation.rawValueToMeters", "rawValueToMeters")}}. The {{domxref("XRDepthInformation.normDepthBufferFromNormView", "normDepthBufferFromNormView")}} property can be used to transform from normalized view coordinates (an origin in the top left corner of the view, with X axis growing to the right, and Y axis growing downward) into the depth buffer's coordinate system.

## Value

An {{jsxref("ArrayBuffer")}}.

## Examples

Use {{domxref("XRFrame.getDepthInformation()")}} to obtain depth information. The returned `XRCPUDepthInformation` object will contain the `data` buffer.

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
