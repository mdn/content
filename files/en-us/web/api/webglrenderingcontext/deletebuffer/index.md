---
title: WebGLRenderingContext.deleteBuffer()
slug: Web/API/WebGLRenderingContext/deleteBuffer
tags:
  - API
  - Method
  - Reference
  - WebGL
  - WebGLRenderingContext
browser-compat: api.WebGLRenderingContext.deleteBuffer
---
{{APIRef("WebGL")}}

The **`WebGLRenderingContext.deleteBuffer()`** method of the [WebGL API](/en-US/docs/Web/API/WebGL_API) deletes a given
{{domxref("WebGLBuffer")}}. This method has no effect if the buffer has already been
deleted.

## Syntax

```js
void gl.deleteBuffer(buffer);
```

### Parameters

- buffer
  - : A {{domxref("WebGLBuffer")}} object to delete.

### Return value

None.

## Examples

### Deleting a buffer

```js
var canvas = document.getElementById('canvas');
var gl = canvas.getContext('webgl');
var buffer = gl.createBuffer();

// ...

gl.deleteBuffer(buffer);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.bindBuffer()")}}
- {{domxref("WebGLRenderingContext.createBuffer()")}}
- {{domxref("WebGLRenderingContext.isBuffer()")}}
- Other buffers: {{domxref("WebGLFramebuffer")}}, {{domxref("WebGLRenderbuffer")}}
