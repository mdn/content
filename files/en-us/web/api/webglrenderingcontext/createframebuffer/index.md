---
title: "WebGLRenderingContext: createFramebuffer() method"
short-title: createFramebuffer()
slug: Web/API/WebGLRenderingContext/createFramebuffer
page-type: web-api-instance-method
browser-compat: api.WebGLRenderingContext.createFramebuffer
---

{{APIRef("WebGL")}}

The **`WebGLRenderingContext.createFramebuffer()`** method of
the [WebGL API](/en-US/docs/Web/API/WebGL_API) creates and initializes a
{{domxref("WebGLFramebuffer")}} object.

## Syntax

```js-nolint
createFramebuffer()
```

### Parameters

None.

### Return value

A {{domxref("WebGLFramebuffer")}} object.

## Examples

### Creating a frame buffer

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");
const framebuffer = gl.createFramebuffer();
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
