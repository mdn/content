---
title: "WebGLRenderingContext: isBuffer() method"
short-title: isBuffer()
slug: Web/API/WebGLRenderingContext/isBuffer
page-type: web-api-instance-method
browser-compat: api.WebGLRenderingContext.isBuffer
---

{{APIRef("WebGL")}}

The **`WebGLRenderingContext.isBuffer()`** method of the [WebGL API](/en-US/docs/Web/API/WebGL_API) returns `true` if the
passed {{domxref("WebGLBuffer")}} is valid and `false` otherwise.

## Syntax

```js-nolint
isBuffer(buffer)
```

### Parameters

- `buffer`
  - : A {{domxref("WebGLBuffer")}} to check.

### Return value

A {{domxref("WebGL_API/Types", "GLboolean")}} indicating whether or not the buffer is valid.

## Examples

### Creating a buffer

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");
const buffer = gl.createBuffer();

gl.isBuffer(buffer);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.bindBuffer()")}}
- {{domxref("WebGLRenderingContext.createBuffer()")}}
- {{domxref("WebGLRenderingContext.deleteBuffer()")}}
- Other buffers: {{domxref("WebGLFramebuffer")}}, {{domxref("WebGLRenderbuffer")}}
