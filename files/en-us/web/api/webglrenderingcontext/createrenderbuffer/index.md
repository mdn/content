---
title: "WebGLRenderingContext: createRenderbuffer() method"
short-title: createRenderbuffer()
slug: Web/API/WebGLRenderingContext/createRenderbuffer
page-type: web-api-instance-method
browser-compat: api.WebGLRenderingContext.createRenderbuffer
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

The **`WebGLRenderingContext.createRenderbuffer()`** method of
the [WebGL API](/en-US/docs/Web/API/WebGL_API) creates and initializes a
{{domxref("WebGLRenderbuffer")}} object.

## Syntax

```js-nolint
createRenderbuffer()
```

### Parameters

None.

### Return value

A {{domxref("WebGLRenderbuffer")}} object that stores data such an image, or can be
source or target of an rendering operation.

## Examples

### Creating a render buffer

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");
const renderBuffer = gl.createRenderbuffer();
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
