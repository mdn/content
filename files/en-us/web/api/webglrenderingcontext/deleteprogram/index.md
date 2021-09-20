---
title: WebGLRenderingContext.deleteProgram()
slug: Web/API/WebGLRenderingContext/deleteProgram
tags:
  - API
  - Method
  - Reference
  - WebGL
  - WebGLRenderingContext
browser-compat: api.WebGLRenderingContext.deleteProgram
---
{{APIRef("WebGL")}}

The **`WebGLRenderingContext.deleteProgram()`** method of the
[WebGL API](/en-US/docs/Web/API/WebGL_API) deletes a given
{{domxref("WebGLProgram")}} object. This method has no effect if the program has already
been deleted.

## Syntax

```js
void gl.deleteProgram(program);
```

### Parameters

- `program`
  - : A {{domxref("WebGLProgram")}} object to delete.

### Return value

None.

## Examples

### Deleting a program

```js
var canvas = document.getElementById('canvas');
var gl = canvas.getContext('webgl');
var program = gl.createProgram();

// ...

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
