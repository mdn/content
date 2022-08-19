---
title: WebGL2RenderingContext.blitFramebuffer()
slug: Web/API/WebGL2RenderingContext/blitFramebuffer
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - WebGL
  - WebGL2
browser-compat: api.WebGL2RenderingContext.blitFramebuffer
---
{{APIRef("WebGL")}}

The **`WebGL2RenderingContext.blitFramebuffer()`** method of
the [WebGL 2 API](/en-US/docs/Web/API/WebGL_API) transfers a block of pixels
from the read framebuffer to the draw framebuffer. Read and draw framebuffers are bound
using {{domxref("WebGLRenderingContext.bindFramebuffer()")}}.

## Syntax

```js
blitFramebuffer(srcX0, srcY0, srcX1, srcY1,
                dstX0, dstY0, dstX1, dstY1,
                mask, filter)
```

### Parameters

- `srcX0, srcY0, srcX1, srcY1`
  - : A {{domxref("WebGL_API/Types", "GLint")}} specifying the bounds of the source rectangle.
- `dstX0, dstY0, dstX1, dstY1`
  - : A {{domxref("WebGL_API/Types", "GLint")}} specifying the bounds of the destination rectangle.
- `mask`

  - : A {{domxref("WebGL_API/Types", "GLbitfield")}} specifying a bitwise OR mask indicating which buffers
    are to be copied. Possible values:

    - `gl.COLOR_BUFFER_BIT`
    - `gl.DEPTH_BUFFER_BIT`
    - `gl.STENCIL_BUFFER_BIT`

- `filter`

  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying the interpolation to be applied if the image is
    stretched. Possible values:

    - `gl.NEAREST`
    - `gl.LINEAR`

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
gl.blitFramebuffer(0, 0, canvas.width, canvas.height,
                   0, 0, canvas.width, canvas.height,
                   gl.COLOR_BUFFER_BIT, gl.NEAREST);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.bindFramebuffer()")}}
- {{domxref("WebGLRenderingContext.getRenderbufferParameter()")}}
