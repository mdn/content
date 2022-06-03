---
title: XRProjectionLayer.textureWidth
slug: Web/API/XRProjectionLayer/textureWidth
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
browser-compat: api.XRProjectionLayer.textureWidth
---
{{APIRef("WebXR Device API")}}

The read-only **`textureWidth`** property of the {{domxref("XRProjectionLayer")}} interface indicates the width in pixels of the color textures of this layer.

The projection layer's texture width is determined by the user agent or the device. It is reported in the {{domxref("XRSubImage")}}, which can only be accessed inside the frame loop. If you want to manage your own depth buffers and don't want to wait for first frame after layer creation to determine the required dimensions for those buffers, the `textureWidth` property allows access to layer texture width outside the frame loop. Allocation of these buffers can happen directly after layer creation.

## Value

A number indicating the width in pixels.

## Examples

### Using `textureWidth`

The `textureWidth` of a layer is useful when creating render buffers for a layer. See also {{domxref("WebGL2RenderingContext.renderbufferStorageMultisample()")}}.

```js
let glLayer = xrGLBinding.createProjectionLayer();

let color_rb = gl.createRenderbuffer();
gl.bindRenderbuffer(gl.RENDERBUFFER, color_rb);
gl.renderbufferStorageMultisample(gl.RENDERBUFFER, samples, gl.RGBA8,
                                  glLayer.textureWidth, glLayer.textureHeight);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XRWebGLBinding.createProjectionLayer()")}}
- {{domxref("WebGL2RenderingContext.renderbufferStorageMultisample()")}}
- {{domxref("XRSubImage")}}
