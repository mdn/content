---
title: OVR_multiview2.framebufferTextureMultiviewOVR()
slug: Web/API/OVR_multiview2/framebufferTextureMultiviewOVR
page-type: webgl-extension-method
tags:
  - API
  - Method
  - Multiview
  - VR
  - WebGL
  - WebGL extensions
  - WebVR
  - WebXR
browser-compat: api.OVR_multiview2.framebufferTextureMultiviewOVR
---
{{APIRef("WebGL")}}

The **`OVR_multiview2.framebufferTextureMultiviewOVR()`**
method of the [WebGL API](/en-US/docs/Web/API/WebGL_API) attaches a multiview
texture to a {{domxref("WebGLFramebuffer")}}.

## Syntax

```js
framebufferTextureMultiviewOVR(target, attachment, texture, level, baseViewIndex, numViews)
```

### Parameters

- `target`

  - : A {{domxref("WebGL_API.Types")}} specifying the binding point (target). Possible values:

    - `gl.FRAMEBUFFER`
      - : Collection buffer data storage of color, alpha,
        depth and stencil buffers used to render an image.
    - `gl.DRAW_FRAMEBUFFER`
      - : Equivalent to `gl.FRAMEBUFFER`.
        Used as a destination for drawing, rendering, clearing, and writing operations.
    - `gl.READ_FRAMEBUFFER`
      - : Used as a source for reading operations.

- `attachment`

  - : A {{domxref("WebGL_API.Types")}} specifying the attachment point for the
    `texture`. Possible values:

    - `gl.COLOR_ATTACHMENT0`: Attaches the texture to the framebuffer's
      color buffer.
    - `gl.DEPTH_ATTACHMENT`: Attaches the texture to the framebuffer's
      depth buffer.
    - `gl.STENCIL_ATTACHMENT`: Attaches the texture to the framebuffer's
      stencil buffer.
    - `gl.DEPTH_STENCIL_ATTACHMENT`: depth and stencil buffer.
    - `gl.COLOR_ATTACHMENT1 gl.COLOR_ATTACHMENT2 gl.COLOR_ATTACHMENT3 gl.COLOR_ATTACHMENT4 gl.COLOR_ATTACHMENT5 gl.COLOR_ATTACHMENT6 gl.COLOR_ATTACHMENT7 gl.COLOR_ATTACHMENT8 gl.COLOR_ATTACHMENT9 gl.COLOR_ATTACHMENT10 gl.COLOR_ATTACHMENT11 gl.COLOR_ATTACHMENT12 gl.COLOR_ATTACHMENT13 gl.COLOR_ATTACHMENT14 gl.COLOR_ATTACHMENT15`
    When using the {{domxref("WEBGL_draw_buffers")}} extension:

      - `ext.COLOR_ATTACHMENT0_WEBGL` (same as
        `gl.COLOR_ATTACHMENT0`)
        `ext.COLOR_ATTACHMENT1_WEBGL ext.COLOR_ATTACHMENT2_WEBGL ext.COLOR_ATTACHMENT3_WEBGL ext.COLOR_ATTACHMENT4_WEBGL ext.COLOR_ATTACHMENT5_WEBGL ext.COLOR_ATTACHMENT6_WEBGL ext.COLOR_ATTACHMENT7_WEBGL ext.COLOR_ATTACHMENT8_WEBGL ext.COLOR_ATTACHMENT9_WEBGL ext.COLOR_ATTACHMENT10_WEBGL ext.COLOR_ATTACHMENT11_WEBGL ext.COLOR_ATTACHMENT12_WEBGL ext.COLOR_ATTACHMENT13_WEBGL ext.COLOR_ATTACHMENT14_WEBGL ext.COLOR_ATTACHMENT15_WEBGL`

     When using the {{domxref("WEBGL_depth_texture")}} extension:

    - `ext.DEPTH_STENCIL_ATTACHMENT`: Depth and stencil buffer data
        storage.

- `texture`
  - : A {{domxref("WebGLTexture")}} object whose image to attach.
- `level`
  - : A {{domxref("WebGL_API.Types")}} specifying the mipmap level of the texture image to be
    attached. Must be 0.
- `baseViewIndex`
  - : A {{domxref("WebGL_API.Types")}} specifying the base view index of the framebuffer object
    attachment.
- `numViews`
  - : A {{domxref("WebGL_API.Types")}} specifying the number of views of the framebuffer object
    attachment.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- A `gl.INVALID_ENUM` error is thrown if

  - `target` is not `gl.FRAMEBUFFER`.
  - `attachment` is not one of the accepted attachment points.

- A `gl.INVALID_VALUE` error is thrown if

  - `level` is not 0.
  - if `numViews` is less than one or more than
    `MAX_VIEWS_OVR`.

- A `gl.INVALID_OPERATION` error is thrown if `texture` isn't 0
  or the name of an existing texture object.

## Examples

```js
ext.framebufferTextureMultiviewOVR(gl.DRAW_FRAMEBUFFER, gl.COLOR_ATTACHMENT0, colorTex, 0, 0, 2);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("OVR_multiview2")}}
- {{domxref("WEBGL_depth_texture")}}
- {{domxref("WEBGL_draw_buffers")}}
