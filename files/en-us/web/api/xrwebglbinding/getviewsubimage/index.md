---
title: XRWebGLBinding.getViewSubImage()
slug: Web/API/XRWebGLBinding/getViewSubImage
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - AR
  - XR
  - WebXR
browser-compat: api.XRWebGLBinding.getViewSubImage
---
{{APIRef("WebXR Device API")}}

The **`getViewSubImage()`** method of the {{domxref("XRWebGLBinding")}} interface returns a {{domxref("XRWebGLSubImage")}} object representing the WebGL texture to render for a view.

## Syntax

```js
getViewSubImage(layer, view)
```

### Parameters

- `layer`
  - : The {{domxref("XRProjectionLayer")}} to use for rendering (to render other layer types, see {{domxref("XRWebGLBinding.getSubImage()")}}).
- `view`
  - : The {{domxref("XRView")}} to use for rendering.

### Return value

A {{domxref("XRWebGLSubImage")}} object.

### Exceptions

A {{jsxref("TypeError")}} is thrown,

- if `layer` is not in the [session's `layer` array](/en-US/docs/Web/API/XRSession/updateRenderState#setting_the_layers_array).

## Examples

### Rendering an `XRProjectionLayer`

The following example renders an {{domxref("XRProjectionLayer")}} to a view.

```js
const xrGlBinding = new XRWebGLBinding(xrSession, gl);
const layer = xrGlBinding.createProjectionLayer({});
const framebuffer = gl.createFramebuffer();

xrSession.updateRenderState({ layers: [layer] });
xrSession.requestAnimationFrame(onXRFrame);

function onXRFrame(time, xrFrame) {
  xrSession.requestAnimationFrame(onXRFrame);

  gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);

  for (const view in xrViewerPose.views) {
    const subImage = xrGlBinding.getViewSubImage(layer, view);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0,
      gl.TEXTURE_2D, subImage.colorTexture, 0);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT,
      gl.TEXTURE_2D, subImage.depthStencilTexture, 0);
    const viewport = subImage.viewport;
    gl.viewport(viewport.x, viewport.y, viewport.width, viewport.height);

    // Render from the viewpoint of xrView
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XRWebGLSubImage")}}
