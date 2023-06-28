---
title: "WebGLRenderingContext: createBuffer() method"
short-title: createBuffer()
slug: Web/API/WebGLRenderingContext/createBuffer
page-type: web-api-instance-method
browser-compat: api.WebGLRenderingContext.createBuffer
---

{{APIRef("WebGL")}}

The **`WebGLRenderingContext.createBuffer()`** method of the [WebGL API](/en-US/docs/Web/API/WebGL_API) creates and initializes a
{{domxref("WebGLBuffer")}} storing data such as vertices or colors.

## Syntax

```js-nolint
createBuffer()
```

### Parameters

None.

### Return value

A {{domxref("WebGLBuffer")}} storing data such as vertices or colors.

## Examples

### Creating a buffer

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");
const buffer = gl.createBuffer();
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
