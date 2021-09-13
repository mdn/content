---
title: WebGLRenderingContext.bindFramebuffer()
slug: Web/API/WebGLRenderingContext/bindFramebuffer
tags:
  - API
  - Method
  - Reference
  - WebGL
  - WebGLRenderingContext
browser-compat: api.WebGLRenderingContext.bindFramebuffer
---
{{APIRef("WebGL")}}

The **`WebGLRenderingContext.bindFramebuffer()`** method of the
[WebGL API](/en-US/docs/Web/API/WebGL_API) binds a given
{{domxref("WebGLFramebuffer")}} to a target.

## Syntax

```js
void gl.bindFramebuffer(target, framebuffer);
```

### Parameters

- target

  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying the binding point (target). Possible values:

    - `gl.FRAMEBUFFER`: Collection buffer data storage of color, alpha,
      depth and stencil buffers used to render an image.
    - When using a {{domxref("WebGL2RenderingContext", "WebGL 2 context", "", 1)}},
      the following values are available additionally:

      - `gl.DRAW_FRAMEBUFFER`: Equivalent to `gl.FRAMEBUFFER`.
        Used as a destination for drawing, rendering, clearing, and writing
        operations.
      - `gl.READ_FRAMEBUFFER`: Used as a source for reading operations.

- framebuffer
  - : A {{domxref("WebGLFramebuffer")}} object to bind.
    If `framebuffer` is null, then the canvas (which has no {{domxref("WebGLFramebuffer")}} object) is bound.

### Return value

None.

### Exceptions

A `gl.INVALID_ENUM` error is thrown if `target` is not
`gl.FRAMEBUFFER`, `gl.DRAW_FRAMEBUFFER`, or
`gl.READ_FRAMEBUFFER`.

## Examples

### Binding a frame buffer

```js
var canvas = document.getElementById('canvas');
var gl = canvas.getContext('webgl');
var framebuffer = gl.createFramebuffer();

gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
```

### Getting current bindings

To check the current frame buffer binding, query the `FRAMEBUFFER_BINDING`
constant.

```js
gl.getParameter(gl.FRAMEBUFFER_BINDING);
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
