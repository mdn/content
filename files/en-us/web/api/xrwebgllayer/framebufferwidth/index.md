---
title: XRWebGLLayer.framebufferWidth
slug: Web/API/XRWebGLLayer/framebufferWidth
page-type: web-api-instance-property
tags:
  - API
  - AR
  - Buffer
  - Frame
  - Property
  - Read-only
  - Reality
  - Reference
  - VR
  - Virtual
  - WebXR
  - WebXR API
  - WebXR Device API
  - XR
  - XRWebGLLayer
  - augmented
  - framebufferWidth
  - width
browser-compat: api.XRWebGLLayer.framebufferWidth
---
{{APIRef("WebXR Device API")}}

The read-only {{domxref("XRWebGLLayer")}} property
**`framebufferWidth`** specifies the width of the framebuffer,
in pixels.

You can get the height of the framebuffer using the
{{domxref("XRWebGLLayer.framebufferHeight", "framebufferHeight")}} property.

## Value

The width in pixels of the XR device's framebuffer. Each of the framebuffer's
attachments (pixel, depth, color, and/or stencil buffers, for example) are all this many
pixels wide.

## Examples

This snippet fetches the framebuffer's width and height for later use.

```js
let glLayer = xrSession.renderState.baseLayer;
gl.bindFramebuffer(gl.FRAMEBUFFER, glLayer.framebuffer);

frameWidth = glLayer.framebufferWidth;
frameHeight = glLayer.framebufferHeight;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebXR Device API](/en-US/docs/Web/API/WebXR_Device_API)
- {{domxref("WebGLLayerInit")}}
