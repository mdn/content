---
title: "XRWebGLSubImage: colorTexture property"
short-title: colorTexture
slug: Web/API/XRWebGLSubImage/colorTexture
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.XRWebGLSubImage.colorTexture
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

The read-only **`colorTexture`** property of the {{domxref("XRWebGLSubImage")}} interface represents the color {{domxref("WebGLTexture")}} object for the {{domxref("XRCompositionLayer")}} to render.

## Value

An opaque {{domxref("WebGLTexture")}}. See [WebXR opaque textures](/en-US/docs/Web/API/WebGLTexture#webxr_opaque_textures) for details.

## Examples

### Using `colorTexture`

The `colorTexture` property can be passed to {{domxref("WebGL2RenderingContext.framebufferTextureLayer()")}} to attach the color texture to a framebuffer.

```js
const xrGlBinding = new XRWebGLBinding(xrSession, gl);
const layer = xrGlBinding.createProjectionLayer({
  textureType: "texture-array",
});
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
    gl.framebufferTextureLayer(
      gl.FRAMEBUFFER,
      gl.COLOR_ATTACHMENT0,
      subImage.colorTexture,
      0,
      subImage.imageIndex,
    );
    gl.framebufferTextureLayer(
      gl.FRAMEBUFFER,
      gl.DEPTH_ATTACHMENT,
      subImage.depthStencilTexture,
      0,
      subImage.imageIndex,
    );

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
