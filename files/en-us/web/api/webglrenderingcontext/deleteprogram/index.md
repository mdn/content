---
title: "WebGLRenderingContext: deleteProgram() method"
short-title: deleteProgram()
slug: Web/API/WebGLRenderingContext/deleteProgram
page-type: web-api-instance-method
browser-compat: api.WebGLRenderingContext.deleteProgram
---

{{APIRef("WebGL")}}

The **`WebGLRenderingContext.deleteProgram()`** method of the
[WebGL API](/en-US/docs/Web/API/WebGL_API) deletes a given
{{domxref("WebGLProgram")}} object. This method has no effect if the program has already
been deleted.

## Syntax

```js-nolint
deleteProgram(program)
```

### Parameters

- `program`
  - : A {{domxref("WebGLProgram")}} object to delete.

### Return value

None ({{jsxref("undefined")}}).

## Examples

### Deleting a program

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");
const program = gl.createProgram();

// …

gl.deleteProgram(program);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.createProgram()")}}
- {{domxref("WebGLRenderingContext.isProgram()")}}
- {{domxref("WebGLRenderingContext.linkProgram()")}}
- {{domxref("WebGLRenderingContext.useProgram()")}}
- {{domxref("WebGLRenderingContext.validateProgram()")}}
- {{domxref("WebGLRenderingContext.getProgramParameter()")}}
- {{domxref("WebGLRenderingContext.getProgramInfoLog()")}}
