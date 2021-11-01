---
title: WebGLFramebuffer
slug: Web/API/WebGLFramebuffer
tags:
  - API
  - Reference
  - WebGL
browser-compat: api.WebGLFramebuffer
---
{{APIRef("WebGL")}}

The **WebGLFramebuffer** interface is part of the [WebGL API](/en-US/docs/Web/API/WebGL_API) and represents a collection of buffers that serve as a rendering destination.

## Description

The `WebGLFramebuffer` object does not define any methods or properties of its own and its content is not directly accessible. When working with `WebGLFramebuffer` objects, the following methods of the {{domxref("WebGLRenderingContext")}} are useful:

- {{domxref("WebGLRenderingContext.bindFramebuffer()")}}
- {{domxref("WebGLRenderingContext.createFramebuffer()")}}
- {{domxref("WebGLRenderingContext.deleteFramebuffer()")}}
- {{domxref("WebGLRenderingContext.isFramebuffer()")}}

## Examples

### Creating a frame buffer

```js
var canvas = document.getElementById('canvas');
var gl = canvas.getContext('webgl');
var buffer = gl.createFramebuffer();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.bindFramebuffer()")}}
- {{domxref("WebGLRenderingContext.createFramebuffer()")}}
- {{domxref("WebGLRenderingContext.deleteFramebuffer()")}}
- {{domxref("WebGLRenderingContext.isFramebuffer()")}}
- Other buffers: {{domxref("WebGLBuffer")}}, {{domxref("WebGLRenderbuffer")}}
