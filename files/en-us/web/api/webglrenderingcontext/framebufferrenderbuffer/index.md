---
title: WebGLRenderingContext.framebufferRenderbuffer()
slug: Web/API/WebGLRenderingContext/framebufferRenderbuffer
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - WebGL
  - WebGLRenderingContext
browser-compat: api.WebGLRenderingContext.framebufferRenderbuffer
---
{{APIRef("WebGL")}}

The **`WebGLRenderingContext.framebufferRenderbuffer()`**
method of the [WebGL API](/en-US/docs/Web/API/WebGL_API) attaches a
{{domxref("WebGLRenderbuffer")}} object to a {{domxref("WebGLFramebuffer")}} object.

## Syntax

```js
framebufferRenderbuffer(target, attachment, renderbuffertarget, renderbuffer)
```

### Parameters

- `target`

  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying the binding point (target) for the framebuffer.
    Possible values:

    - `gl.FRAMEBUFFER`
      - : Collection buffer data storage of color, alpha,
        depth and stencil buffers used to render an image.
    When using a {{domxref("WebGL2RenderingContext", "WebGL 2 context", "", 1)}},
      the following values are available additionally:

      - `gl.DRAW_FRAMEBUFFER`
        - : Equivalent to `gl.FRAMEBUFFER`.
          Used as a destination for drawing, rendering, clearing, and writing
          operations.
      - `gl.READ_FRAMEBUFFER`
        - : Used as a source for reading operations.

- `attachment`

  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying the attachment point for the render buffer.
    Possible values:

    - `gl.COLOR_ATTACHMENT0`: color buffer.
    - `gl.DEPTH_ATTACHMENT`: depth buffer.
    - `gl.DEPTH_STENCIL_ATTACHMENT`: depth and stencil buffer.
    - `gl.STENCIL_ATTACHMENT`: stencil buffer.
    When using a {{domxref("WebGL2RenderingContext", "WebGL 2 context", "", 1)}},
      the following values are available additionally:

      - `gl.COLOR_ATTACHMENT1 gl.COLOR_ATTACHMENT2 gl.COLOR_ATTACHMENT3 gl.COLOR_ATTACHMENT4 gl.COLOR_ATTACHMENT5 gl.COLOR_ATTACHMENT6 gl.COLOR_ATTACHMENT7 gl.COLOR_ATTACHMENT8 gl.COLOR_ATTACHMENT9 gl.COLOR_ATTACHMENT10 gl.COLOR_ATTACHMENT11 gl.COLOR_ATTACHMENT12 gl.COLOR_ATTACHMENT13 gl.COLOR_ATTACHMENT14 gl.COLOR_ATTACHMENT15`

    When using the {{domxref("WEBGL_draw_buffers")}} extension:

    - `ext.COLOR_ATTACHMENT0_WEBGL` (same as
        `gl.COLOR_ATTACHMENT0`)
    - `ext.COLOR_ATTACHMENT1_WEBGL ext.COLOR_ATTACHMENT2_WEBGL ext.COLOR_ATTACHMENT3_WEBGL ext.COLOR_ATTACHMENT4_WEBGL ext.COLOR_ATTACHMENT5_WEBGL ext.COLOR_ATTACHMENT6_WEBGL ext.COLOR_ATTACHMENT7_WEBGL ext.COLOR_ATTACHMENT8_WEBGL ext.COLOR_ATTACHMENT9_WEBGL ext.COLOR_ATTACHMENT10_WEBGL ext.COLOR_ATTACHMENT11_WEBGL ext.COLOR_ATTACHMENT12_WEBGL ext.COLOR_ATTACHMENT13_WEBGL ext.COLOR_ATTACHMENT14_WEBGL ext.COLOR_ATTACHMENT15_WEBGL`

- `renderbuffertarget`

  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying the binding point (target) for the render buffer.
    Possible values:

    - `gl.RENDERBUFFER`
      - : Buffer data storage for single images in a renderable internal format.

- `renderbuffer`
  - : A {{domxref("WebGLRenderbuffer")}} object to attach.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- A `gl.INVALID_ENUM` error is thrown if `target` is not
  `gl.FRAMEBUFFER`, `gl.DRAW_FRAMEBUFFER`, or
  `gl.READ_FRAMEBUFFER`.
- A `gl.INVALID_ENUM` error is thrown if `renderbuffertarget` is
  not `gl.RENDERBUFFER`.
- A `gl.INVALID_ENUM` error is thrown if `attachment` is not one
  of the allowed enums.

## Examples

```js
gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.RENDERBUFFER, renderbuffer);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.createFramebuffer()")}}
- {{domxref("WebGLRenderingContext.deleteFramebuffer()")}}
- {{domxref("WebGLRenderingContext.isFramebuffer()")}}
- Other buffers: {{domxref("WebGLBuffer")}}, {{domxref("WebGLRenderbuffer")}}
- {{domxref("WEBGL_draw_buffers")}}
