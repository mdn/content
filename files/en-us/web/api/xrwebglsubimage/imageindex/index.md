---
title: XRWebGLSubImage.imageIndex
slug: Web/API/XRWebGLSubImage/imageIndex
tags:
  - API
  - Property
  - Reference
  - VR
  - WebXR
  - WebXR API
  - WebXR Device API
  - XR
browser-compat: api.XRWebGLSubImage.imageIndex
---
{{APIRef("WebXR Device API")}}

The read-only **`imageIndex`** property of the {{domxref("XRWebGLSubImage")}} interface is a number representing the offset into the texture array if the layer was requested with `texture-array`; {{jsxref("null")}} otherwise.

## Value

A number or {{jsxref("null")}} if the layer wasn't requested with `texture-array`.

### Using `imageIndex`

The `imageIndex` property can be passed {{domxref("WebGL2RenderingContext.framebufferTextureLayer()")}} to attach the depth and color textures to a framebuffer with the correct layer index.

```js
const xrGlBinding = new XRWebGLBinding(xrSession, gl);
const layer = xrGlBinding.createProjectionLayer({ textureType: "texture-array" });
const framebuffer = gl.createFramebuffer();

xrSession.updateRenderState({ layers: [layer] });
xrSession.requestAnimationFrame(onXRFrame);

function onXRFrame(time, xrFrame) {
  xrSession.requestAnimationFrame(onXRFrame);

  gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
  let viewport = xrGlBinding.getSubImage(layer, xrFrame).viewport;
  gl.viewport(viewport.x, viewport.y, viewport.width, viewport.height);

  for (let view in xrViewerPose.views) {
    let subImage = xrGlBinding.getViewSubImage(layer, view);
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
