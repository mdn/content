---
title: XRWebGLLayer.framebufferHeight
slug: Web/API/XRWebGLLayer/framebufferHeight
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
  - framebufferHeight
  - height
  - size
browser-compat: api.XRWebGLLayer.framebufferHeight
---
{{APIRef("WebXR Device API")}}

The read-only {{domxref("XRWebGLLayer")}} property
**`framebufferHeight`** indicates the height of the
framebuffer, in pixels.

You can get the width of the framebuffer using the
{{domxref("XRWebGLLayer.framebufferWidth", "framebufferWidth")}} property.

## Value

The height in pixels of the XR device's framebuffer. Each of the framebuffer's
attachments (pixel, depth, color, and/or stencil buffers, for example) are all this many
pixels tall.

## Examples

This snippet fetches the framebuffer's width and height for later use.

```js
let glLayer = xrSession.renderState.baseLayer;
gl.bindFramebuffer(gl.FRAMEBUFFER, glLayer.framebuffer);

frameWidth = glLayer.framebufferHeight;
frameHeight = glLayer.framebufferHeight;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebXR Device API](/en-US/docs/Web/API/WebXR_Device_API)
- {{domxref("WebGLLayerInit")}}
