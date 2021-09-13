---
title: WebGLRenderingContext.isRenderbuffer()
slug: Web/API/WebGLRenderingContext/isRenderbuffer
tags:
  - API
  - Method
  - Reference
  - WebGL
  - WebGLRenderingContext
browser-compat: api.WebGLRenderingContext.isRenderbuffer
---
{{APIRef("WebGL")}}

The **`WebGLRenderingContext.isRenderbuffer()`** method of the
[WebGL API](/en-US/docs/Web/API/WebGL_API) returns `true` if the
passed {{domxref("WebGLRenderbuffer")}} is valid and `false` otherwise.

## Syntax

```js
GLboolean gl.isRenderbuffer(renderbuffer);
```

### Parameters

- renderbuffer
  - : A {{domxref("WebGLRenderbuffer")}} to check.

### Return value

A {{domxref("WebGL_API/Types", "GLboolean")}} indicating whether or not the renderbuffer is valid.

## Examples

### Checking a renderbuffer

```js
var canvas = document.getElementById('canvas');
var gl = canvas.getContext('webgl');
var renderbuffer = gl.createRenderbuffer();

gl.isRenderbuffer(renderbuffer);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.bindRenderbuffer()")}}
- {{domxref("WebGLRenderingContext.createRenderbuffer()")}}
- {{domxref("WebGLRenderingContext.deleteRenderbuffer()")}}
- Other buffers: {{domxref("WebGLBuffer")}}, {{domxref("WebGLFramebuffer")}}
