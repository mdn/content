---
title: WebGLRenderingContext.bindFramebuffer()
slug: Web/API/WebGLRenderingContext/bindFramebuffer
page-type: web-api-instance-method
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
bindFramebuffer(target, framebuffer)
```

### Parameters

- `target`

  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying the binding point (target). Possible values:

    - `gl.FRAMEBUFFER`
      - : Collection buffer data storage of color, alpha,
        depth and stencil buffers used as both a destination for drawing and as a source for reading (see below).

    When using a {{domxref("WebGL2RenderingContext", "WebGL 2 context", "", 1)}},
      the following values are available additionally:

    - `gl.DRAW_FRAMEBUFFER`
      - : Used as a destination for drawing operations such as `gl.draw*`, `gl.clear*` and `gl.blitFramebuffer`.
    - `gl.READ_FRAMEBUFFER`
      - : Used as a source for reading operations such as `gl.readPixels` and `gl.blitFramebuffer`.

- `framebuffer`
  - : A {{domxref("WebGLFramebuffer")}} object to bind.
    If `framebuffer` is null, then the canvas (which has no {{domxref("WebGLFramebuffer")}} object) is bound.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

A `gl.INVALID_ENUM` error is thrown if `target` is not
`gl.FRAMEBUFFER`, `gl.DRAW_FRAMEBUFFER`, or
`gl.READ_FRAMEBUFFER`.

## Examples

### Binding a frame buffer

```js
const canvas = document.getElementById('canvas');
const gl = canvas.getContext('webgl');
const framebuffer = gl.createFramebuffer();

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
