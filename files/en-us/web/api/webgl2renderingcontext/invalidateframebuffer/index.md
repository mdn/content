---
title: WebGL2RenderingContext.invalidateFramebuffer()
slug: Web/API/WebGL2RenderingContext/invalidateFramebuffer
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - WebGL
  - WebGL2
browser-compat: api.WebGL2RenderingContext.invalidateFramebuffer
---
{{APIRef("WebGL")}}

The **`WebGL2RenderingContext.invalidateFramebuffer()`** method
of the [WebGL 2 API](/en-US/docs/Web/API/WebGL_API) invalidates the contents
of attachments in a framebuffer.

## Syntax

```js
invalidateFramebuffer(target, attachments)
```

### Parameters

- `target`

  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying the binding point (target). Possible values:

    - `gl.FRAMEBUFFER`
      - : Collection buffer data storage of color, alpha,
        depth and stencil buffers used to render an image.
    - `gl.DRAW_FRAMEBUFFER`
      - : Equivalent to `gl.FRAMEBUFFER`.
    - `gl.READ_FRAMEBUFFER`
      - : Used as a source for reading operations.

- `attachments`

  - : An {{jsxref("Array")}} of {{domxref("WebGL_API/Types", "GLenum")}} specifying the attachment points to
    invalidate. Possible values:

    - `gl.COLOR_ATTACHMENT{0-15}`
      - : Invalidates one of the framebuffer's
        color buffers.
    - `gl.DEPTH_ATTACHMENT`
      - : Invalidates the framebuffer's depth buffer.
    - `gl.STENCIL_ATTACHMENT`
      - : Invalidates the framebuffer's stencil
        buffer.
    - `gl.DEPTH_STENCIL_ATTACHMENT`
      - : Invalidates both the framebuffer's
        depth and stencil buffer.

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
gl.invalidateFramebuffer(gl.READ_FRAMEBUFFER,
                         [gl.COLOR_ATTACHMENT0, gl.COLOR_ATTACHMENT1]);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGL2RenderingContext.invalidateSubFramebuffer()")}}
