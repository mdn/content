---
title: WebGLRenderbuffer
slug: Web/API/WebGLRenderbuffer
page-type: web-api-interface
browser-compat: api.WebGLRenderbuffer
---

{{APIRef("WebGL")}}

The **WebGLRenderbuffer** interface is part of the [WebGL API](/en-US/docs/Web/API/WebGL_API) and represents a buffer that can contain an image, or that can be a source or target of a rendering operation.

{{InheritanceDiagram}}

## Description

The `WebGLRenderbuffer` object does not define any methods or properties of its own and its content is not directly accessible. When working with `WebGLRenderbuffer` objects, the following methods of the {{domxref("WebGLRenderingContext")}} are useful:

- {{domxref("WebGLRenderingContext.bindRenderbuffer()")}}
- {{domxref("WebGLRenderingContext.createRenderbuffer()")}}
- {{domxref("WebGLRenderingContext.deleteRenderbuffer()")}}
- {{domxref("WebGLRenderingContext.isRenderbuffer()")}}

## Examples

### Creating a render buffer

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");
const buffer = gl.createRenderbuffer();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.bindRenderbuffer()")}}
- {{domxref("WebGLRenderingContext.createRenderbuffer()")}}
- {{domxref("WebGLRenderingContext.deleteRenderbuffer()")}}
- {{domxref("WebGLRenderingContext.isRenderbuffer()")}}
- Other buffers: {{domxref("WebGLBuffer")}}, {{domxref("WebGLFramebuffer")}}
