---
title: "WebGL2RenderingContext: framebufferTextureLayer() method"
short-title: framebufferTextureLayer()
slug: Web/API/WebGL2RenderingContext/framebufferTextureLayer
page-type: web-api-instance-method
browser-compat: api.WebGL2RenderingContext.framebufferTextureLayer
---

{{APIRef("WebGL")}}

The **`WebGL2RenderingContext.framebufferTextureLayer()`**
method of the [WebGL 2 API](/en-US/docs/Web/API/WebGL_API) attaches a single
layer of a texture to a framebuffer.

This method is similar to {{domxref("WebGLRenderingContext.framebufferTexture2D()")}},
but only a given single layer of the texture level is attached to the attachment point.

## Syntax

```js-nolint
framebufferTextureLayer(target, attachment, texture, level, layer)
```

### Parameters

- `target`

  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying the binding point (target). Possible values:

    - `gl.FRAMEBUFFER`: Collection buffer data storage of color, alpha,
      depth and stencil buffers used to render an image.
    - `gl.DRAW_FRAMEBUFFER`: Equivalent to `gl.FRAMEBUFFER`.
    - `gl.READ_FRAMEBUFFER`: Used as a source for reading operations.

- `attachment`

  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying the attachment point for the
    `texture`. Possible values:

    - `gl.COLOR_ATTACHMENT{0-15}`: Attaches the texture to one of the
      framebuffer's color buffers.
    - `gl.DEPTH_ATTACHMENT`: Attaches the texture to the framebuffer's
      depth buffer.
    - `gl.STENCIL_ATTACHMENT`: Attaches the texture to the framebuffer's
      stencil buffer.
    - `gl.DEPTH_STENCIL_ATTACHMENT`: depth and stencil buffer.

- `texture`
  - : A {{domxref("WebGLTexture")}} object whose image to attach.
- `level`
  - : A {{domxref("WebGL_API/Types", "GLint")}} specifying the mipmap level of the texture image to attach.
- `layer`
  - : A {{domxref("WebGL_API/Types", "GLint")}} specifying the layer of the texture image to attach.

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
gl.framebufferTextureLayer(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, texture, 0, 8);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.framebufferTexture2D()")}}
