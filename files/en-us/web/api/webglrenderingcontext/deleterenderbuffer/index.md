---
title: "WebGLRenderingContext: deleteRenderbuffer() method"
short-title: deleteRenderbuffer()
slug: Web/API/WebGLRenderingContext/deleteRenderbuffer
page-type: web-api-instance-method
browser-compat: api.WebGLRenderingContext.deleteRenderbuffer
---

{{APIRef("WebGL")}}

The **`WebGLRenderingContext.deleteRenderbuffer()`** method of
the [WebGL API](/en-US/docs/Web/API/WebGL_API) deletes a given
{{domxref("WebGLRenderbuffer")}} object. This method has no effect if the render buffer
has already been deleted.

## Syntax

```js-nolint
deleteRenderbuffer(renderbuffer)
```

### Parameters

- `renderbuffer`
  - : A {{domxref("WebGLRenderbuffer")}} object to delete.

### Return value

None ({{jsxref("undefined")}}).

## Examples

### Deleting a renderbuffer

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");
const renderbuffer = gl.createRenderbuffer();

// …

gl.deleteRenderbuffer(renderbuffer);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.bindRenderbuffer()")}}
- {{domxref("WebGLRenderingContext.createRenderbuffer()")}}
- {{domxref("WebGLRenderingContext.isRenderbuffer()")}}
- Other buffers: {{domxref("WebGLBuffer")}}, {{domxref("WebGLFramebuffer")}}
