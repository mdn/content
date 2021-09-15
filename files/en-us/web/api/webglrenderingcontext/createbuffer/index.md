---
title: WebGLRenderingContext.createBuffer()
slug: Web/API/WebGLRenderingContext/createBuffer
tags:
  - API
  - Method
  - Reference
  - WebGL
  - WebGLRenderingContext
browser-compat: api.WebGLRenderingContext.createBuffer
---
{{APIRef("WebGL")}}

The **`WebGLRenderingContext.createBuffer()`** method of the [WebGL API](/en-US/docs/Web/API/WebGL_API) creates and initializes a
{{domxref("WebGLBuffer")}} storing data such as vertices or colors.

## Syntax

```js
WebGLBuffer gl.createBuffer();
```

### Parameters

None.

### Return value

A {{domxref("WebGLBuffer")}} storing data such as vertices or colors.

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
- {{domxref("WebGLRenderingContext.deleteBuffer()")}}
- {{domxref("WebGLRenderingContext.isBuffer()")}}
- Other buffers: {{domxref("WebGLFramebuffer")}}, {{domxref("WebGLRenderbuffer")}}
