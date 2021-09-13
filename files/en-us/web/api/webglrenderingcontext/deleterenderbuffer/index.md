---
title: WebGLRenderingContext.deleteRenderbuffer()
slug: Web/API/WebGLRenderingContext/deleteRenderbuffer
tags:
  - API
  - Method
  - Reference
  - WebGL
  - WebGLRenderingContext
browser-compat: api.WebGLRenderingContext.deleteRenderbuffer
---
{{APIRef("WebGL")}}

The **`WebGLRenderingContext.deleteRenderbuffer()`** method of
the [WebGL API](/en-US/docs/Web/API/WebGL_API) deletes a given
{{domxref("WebGLRenderbuffer")}} object. This method has no effect if the render buffer
has already been deleted.

## Syntax

```js
void gl.deleteRenderbuffer(renderbuffer);
```

### Parameters

- renderbuffer
  - : A {{domxref("WebGLRenderbuffer")}} object to delete.

### Return value

None.

## Examples

### Deleting a renderbuffer

```js
var canvas = document.getElementById('canvas');
var gl = canvas.getContext('webgl');
var renderbuffer = gl.createRenderbuffer();

// ...

gl.deleteRenderbuffer(renderbuffer);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.bindRenderbuffer()")}}
- {{domxref("WebGLRenderingContext.createRenderbuffer()")}}
- {{domxref("WebGLRenderingContext.isRenderbuffer()")}}
- Other buffers: {{domxref("WebGLBuffer")}}, {{domxref("WebGLFramebuffer")}}
