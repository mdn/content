---
title: WebGLFramebuffer
slug: Web/API/WebGLFramebuffer
page-type: web-api-interface
browser-compat: api.WebGLFramebuffer
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

The **WebGLFramebuffer** interface is part of the [WebGL API](/en-US/docs/Web/API/WebGL_API) and represents a collection of buffers that serve as a rendering destination.

{{InheritanceDiagram}}

## Description

The `WebGLFramebuffer` object does not define any methods or properties of its own and its content is not directly accessible. When working with `WebGLFramebuffer` objects, the following methods of the {{domxref("WebGLRenderingContext")}} are useful:

- {{domxref("WebGLRenderingContext.bindFramebuffer()")}}
- {{domxref("WebGLRenderingContext.createFramebuffer()")}}
- {{domxref("WebGLRenderingContext.deleteFramebuffer()")}}
- {{domxref("WebGLRenderingContext.isFramebuffer()")}}
- {{domxref("WebGLRenderingContext.framebufferRenderbuffer()")}}
- {{domxref("WebGLRenderingContext.framebufferTexture2D()")}}

## Examples

### Creating a frame buffer

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");
const buffer = gl.createFramebuffer();
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
- {{domxref("WebGLRenderingContext.framebufferRenderbuffer()")}}
- {{domxref("WebGLRenderingContext.framebufferTexture2D()")}}
- Other buffers: {{domxref("WebGLBuffer")}}, {{domxref("WebGLRenderbuffer")}}
