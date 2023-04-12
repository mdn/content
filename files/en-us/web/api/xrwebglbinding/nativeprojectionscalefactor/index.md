---
title: "XRWebGLBinding: nativeProjectionScaleFactor property"
short-title: nativeProjectionScaleFactor
slug: Web/API/XRWebGLBinding/nativeProjectionScaleFactor
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.XRWebGLBinding.nativeProjectionScaleFactor
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

The read-only **`nativeProjectionScaleFactor`** property of the {{domxref("XRWebGLBinding")}} interface represents the scaling factor by which the projection layer's resolution is multiplied by to get the native resolution of the WebXR device's frame buffer.

For more details, see {{domxref("XRWebGLLayer.getNativeFramebufferScaleFactor()")}}.

## Value

A floating-point number representing by how much the device's native frame buffer size is scaled by.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XRWebGLLayer.getNativeFramebufferScaleFactor()")}}
