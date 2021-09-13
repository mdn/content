---
title: WebGLRenderingContext.createRenderbuffer()
slug: Web/API/WebGLRenderingContext/createRenderbuffer
tags:
  - API
  - Method
  - Reference
  - WebGL
  - WebGLRenderingContext
browser-compat: api.WebGLRenderingContext.createRenderbuffer
---
{{APIRef("WebGL")}}

The **`WebGLRenderingContext.createRenderbuffer()`** method of
the [WebGL API](/en-US/docs/Web/API/WebGL_API) creates and initializes a
{{domxref("WebGLRenderbuffer")}} object.

## Syntax

```js
WebGLRenderbuffer gl.createRenderbuffer();
```

### Parameters

None.

### Return value

A {{domxref("WebGLRenderbuffer")}} object that stores data such an image, or can be
source or target of an rendering operation.

## Examples

### Creating a render buffer

```js
var canvas = document.getElementById('canvas');
var gl = canvas.getContext('webgl');
var renderBuffer = gl.createRenderbuffer();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.bindRenderbuffer()")}}
- {{domxref("WebGLRenderingContext.deleteRenderbuffer()")}}
- {{domxref("WebGLRenderingContext.isRenderbuffer()")}}
- Other buffers: {{domxref("WebGLBuffer")}}, {{domxref("WebGLFramebuffer")}}
