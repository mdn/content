---
title: WebGLRenderingContext.createFramebuffer()
slug: Web/API/WebGLRenderingContext/createFramebuffer
tags:
  - API
  - Method
  - Reference
  - WebGL
  - WebGLRenderingContext
browser-compat: api.WebGLRenderingContext.createFramebuffer
---
{{APIRef("WebGL")}}

The **`WebGLRenderingContext.createFramebuffer()`** method of
the [WebGL API](/en-US/docs/Web/API/WebGL_API) creates and initializes a
{{domxref("WebGLFramebuffer")}} object.

## Syntax

```js
WebGLFramebuffer gl.createFramebuffer();
```

### Parameters

None.

### Return value

A {{domxref("WebGLFramebuffer")}} object.

## Examples

### Creating a frame buffer

```js
var canvas = document.getElementById('canvas');
var gl = canvas.getContext('webgl');
var framebuffer = gl.createFramebuffer();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.bindFramebuffer()")}}
- {{domxref("WebGLRenderingContext.deleteFramebuffer()")}}
- {{domxref("WebGLRenderingContext.isFramebuffer()")}}
- Other buffers: {{domxref("WebGLBuffer")}}, {{domxref("WebGLRenderbuffer")}}
