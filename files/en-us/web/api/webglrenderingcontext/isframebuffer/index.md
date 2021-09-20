---
title: WebGLRenderingContext.isFramebuffer()
slug: Web/API/WebGLRenderingContext/isFramebuffer
tags:
  - API
  - Method
  - Reference
  - WebGL
  - WebGLRenderingContext
browser-compat: api.WebGLRenderingContext.isFramebuffer
---
{{APIRef("WebGL")}}

The **`WebGLRenderingContext.isFramebuffer()`** method of the
[WebGL API](/en-US/docs/Web/API/WebGL_API) returns `true` if the
passed {{domxref("WebGLFramebuffer")}} is valid and `false` otherwise.

## Syntax

```js
GLboolean gl.isFramebuffer(framebuffer);
```

### Parameters

- framebuffer
  - : A {{domxref("WebGLFramebuffer")}} to check.

### Return value

A {{domxref("WebGL_API/Types", "GLboolean")}} indicating whether or not the frame buffer is valid.

## Examples

### Checking a frame buffer

```js
var canvas = document.getElementById('canvas');
var gl = canvas.getContext('webgl');
var framebuffer = gl.createFramebuffer();

gl.isFramebuffer(framebuffer);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.bindFramebuffer()")}}
- {{domxref("WebGLRenderingContext.createFramebuffer()")}}
- {{domxref("WebGLRenderingContext.deleteFramebuffer()")}}
- Other buffers: {{domxref("WebGLBuffer")}}, {{domxref("WebGLRenderbuffer")}}
