---
title: WebGLRenderingContext.deleteFramebuffer()
slug: Web/API/WebGLRenderingContext/deleteFramebuffer
page-type: web-api-instance-method
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
deleteFramebuffer(framebuffer)
```

### Parameters

- `framebuffer`
  - : A {{domxref("WebGLFramebuffer")}} object to delete.

### Return value

None ({{jsxref("undefined")}}).

## Examples

### Deleting a frame buffer

```js
const canvas = document.getElementById('canvas');
const gl = canvas.getContext('webgl');
const framebuffer = gl.createFramebuffer();

// …

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
