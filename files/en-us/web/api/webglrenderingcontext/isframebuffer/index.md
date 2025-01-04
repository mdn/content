---
title: "WebGLRenderingContext: isFramebuffer() method"
short-title: isFramebuffer()
slug: Web/API/WebGLRenderingContext/isFramebuffer
page-type: web-api-instance-method
browser-compat: api.WebGLRenderingContext.isFramebuffer
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

The **`WebGLRenderingContext.isFramebuffer()`** method of the
[WebGL API](/en-US/docs/Web/API/WebGL_API) returns `true` if the
passed {{domxref("WebGLFramebuffer")}} is valid and `false` otherwise.

## Syntax

```js-nolint
isFramebuffer(framebuffer)
```

### Parameters

- `framebuffer`
  - : A {{domxref("WebGLFramebuffer")}} to check.

### Return value

A {{domxref("WebGL_API/Types", "GLboolean")}} indicating whether or not the frame buffer is valid.

## Examples

### Checking a frame buffer

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");
const framebuffer = gl.createFramebuffer();

gl.isFramebuffer(framebuffer);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.bindFramebuffer()")}}
- {{domxref("WebGLRenderingContext.createFramebuffer()")}}
- {{domxref("WebGLRenderingContext.deleteFramebuffer()")}}
- Other buffers: {{domxref("WebGLBuffer")}}, {{domxref("WebGLRenderbuffer")}}
