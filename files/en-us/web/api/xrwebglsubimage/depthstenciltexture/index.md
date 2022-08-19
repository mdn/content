---
title: XRWebGLSubImage.depthStencilTexture
slug: Web/API/XRWebGLSubImage/depthStencilTexture
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
browser-compat: api.XRWebGLSubImage.depthStencilTexture
---
{{APIRef("WebXR Device API")}}

The read-only **`depthStencilTexture`** property of the {{domxref("XRWebGLSubImage")}} interface represents the depth/stencil {{domxref("WebGLTexture")}} object for the {{domxref("XRCompositionLayer")}} to render.

## Value

An opaque {{domxref("WebGLTexture")}}. See [WebXR opaque textures](/en-US/docs/Web/API/WebGLTexture#webxr_opaque_textures) for details.

### Using `depthStencilTexture`

The `depthStencilTexture` property can be passed to {{domxref("WebGL2RenderingContext.framebufferTextureLayer()")}} to attach the depth texture to a framebuffer.

```js
const xrGlBinding = new XRWebGLBinding(xrSession, gl);
const layer = xrGlBinding.createProjectionLayer({ textureType: "texture-array" });
const framebuffer = gl.createFramebuffer();

xrSession.updateRenderState({ layers: [layer] });
xrSession.requestAnimationFrame(onXRFrame);

function onXRFrame(time, xrFrame) {
  xrSession.requestAnimationFrame(onXRFrame);

  gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
  const viewport = xrGlBinding.getSubImage(layer, xrFrame).viewport;
  gl.viewport(viewport.x, viewport.y, viewport.width, viewport.height);

  for (const view in xrViewerPose.views) {
    const subImage = xrGlBinding.getViewSubImage(layer, view);
    gl.framebufferTextureLayer(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0,
      subImage.colorTexture, 0, subImage.imageIndex);
    gl.framebufferTextureLayer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT,
      subImage.depthStencilTexture, 0, subImage.imageIndex);

    // Render from the viewpoint of xrView
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGL2RenderingContext.framebufferTextureLayer()")}}
