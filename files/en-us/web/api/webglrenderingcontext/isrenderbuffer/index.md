---
title: "WebGLRenderingContext: isRenderbuffer() method"
short-title: isRenderbuffer()
slug: Web/API/WebGLRenderingContext/isRenderbuffer
page-type: web-api-instance-method
browser-compat: api.WebGLRenderingContext.isRenderbuffer
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

The **`WebGLRenderingContext.isRenderbuffer()`** method of the
[WebGL API](/en-US/docs/Web/API/WebGL_API) returns `true` if the
passed {{domxref("WebGLRenderbuffer")}} is valid and `false` otherwise.

## Syntax

```js-nolint
isRenderbuffer(renderbuffer)
```

### Parameters

- `renderbuffer`
  - : A {{domxref("WebGLRenderbuffer")}} to check.

### Return value

A {{domxref("WebGL_API/Types", "GLboolean")}} indicating whether or not the renderbuffer is valid.

## Examples

### Checking a renderbuffer

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");
const renderbuffer = gl.createRenderbuffer();

gl.isRenderbuffer(renderbuffer);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.bindRenderbuffer()")}}
- {{domxref("WebGLRenderingContext.createRenderbuffer()")}}
- {{domxref("WebGLRenderingContext.deleteRenderbuffer()")}}
- Other buffers: {{domxref("WebGLBuffer")}}, {{domxref("WebGLFramebuffer")}}
