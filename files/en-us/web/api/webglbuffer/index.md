---
title: WebGLBuffer
slug: Web/API/WebGLBuffer
tags:
  - API
  - Reference
  - WebGL
browser-compat: api.WebGLBuffer
---
{{APIRef("WebGL")}}

The **WebGLBuffer** interface is part of the [WebGL API](/en-US/docs/Web/API/WebGL_API) and represents an opaque buffer object storing data such as vertices or colors.

## Description

The `WebGLBuffer` object does not define any methods or properties of its own and its content is not directly accessible. When working with `WebGLBuffer` objects, the following methods of the {{domxref("WebGLRenderingContext")}} are useful:

- {{domxref("WebGLRenderingContext.bindBuffer()")}}
- {{domxref("WebGLRenderingContext.createBuffer()")}}
- {{domxref("WebGLRenderingContext.deleteBuffer()")}}
- {{domxref("WebGLRenderingContext.isBuffer()")}}

## Examples

### Creating a buffer

```js
var canvas = document.getElementById('canvas');
var gl = canvas.getContext('webgl');
var buffer = gl.createBuffer();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.bindBuffer()")}}
- {{domxref("WebGLRenderingContext.createBuffer()")}}
- {{domxref("WebGLRenderingContext.deleteBuffer()")}}
- {{domxref("WebGLRenderingContext.isBuffer()")}}
- Other buffers: {{domxref("WebGLFramebuffer")}}, {{domxref("WebGLRenderbuffer")}}
