---
title: "WebGLRenderingContext: deleteBuffer() method"
short-title: deleteBuffer()
slug: Web/API/WebGLRenderingContext/deleteBuffer
page-type: web-api-instance-method
browser-compat: api.WebGLRenderingContext.deleteBuffer
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

The **`WebGLRenderingContext.deleteBuffer()`** method of the [WebGL API](/en-US/docs/Web/API/WebGL_API) deletes a given
{{domxref("WebGLBuffer")}}. This method has no effect if the buffer has already been
deleted. Normally you don't need to call this method yourself, when the buffer object is dereferenced it will be marked as free.

## Syntax

```js-nolint
deleteBuffer(buffer)
```

### Parameters

- `buffer`
  - : A {{domxref("WebGLBuffer")}} object to delete.

### Return value

None ({{jsxref("undefined")}}).

## Examples

### Deleting a buffer

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");
const buffer = gl.createBuffer();

// …

gl.deleteBuffer(buffer);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.bindBuffer()")}}
- {{domxref("WebGLRenderingContext.createBuffer()")}}
- {{domxref("WebGLRenderingContext.isBuffer()")}}
- Other buffers: {{domxref("WebGLFramebuffer")}}, {{domxref("WebGLRenderbuffer")}}
