---
title: WebGLRenderingContext.deleteFramebuffer()
slug: Web/API/WebGLRenderingContext/deleteFramebuffer
tags:
  - API
  - Method
  - Reference
  - WebGL
  - WebGLRenderingContext
browser-compat: api.WebGLRenderingContext.deleteFramebuffer
---
{{APIRef("WebGL")}}

The **`WebGLRenderingContext.deleteFramebuffer()`** method of
the [WebGL API](/en-US/docs/Web/API/WebGL_API) deletes a given
{{domxref("WebGLFramebuffer")}} object. This method has no effect if the frame buffer
has already been deleted.

## Syntax

```js
void gl.deleteFramebuffer(framebuffer);
```

### Parameters

- framebuffer
  - : A {{domxref("WebGLFramebuffer")}} object to delete.

### Return value

None.

## Examples

### Deleting a frame buffer

```js
var canvas = document.getElementById('canvas');
var gl = canvas.getContext('webgl');
var framebuffer = gl.createFramebuffer();

// ...

gl.deleteFramebuffer(framebuffer);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.bindFramebuffer()")}}
- {{domxref("WebGLRenderingContext.createFramebuffer()")}}
- {{domxref("WebGLRenderingContext.isFramebuffer()")}}
- Other buffers: {{domxref("WebGLBuffer")}}, {{domxref("WebGLRenderbuffer")}}
