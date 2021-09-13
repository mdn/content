---
title: WebGLRenderingContext.isProgram()
slug: Web/API/WebGLRenderingContext/isProgram
tags:
  - API
  - Method
  - Reference
  - WebGL
  - WebGLRenderingContext
browser-compat: api.WebGLRenderingContext.isProgram
---
{{APIRef("WebGL")}}

The **`WebGLRenderingContext.isProgram()`** method of the [WebGL API](/en-US/docs/Web/API/WebGL_API) returns `true` if the
passed {{domxref("WebGLProgram")}} is valid, `false` otherwise.

## Syntax

```js
GLboolean gl.isProgram(program);
```

### Parameters

- program
  - : A {{domxref("WebGLProgram")}} to check.

### Return value

A {{domxref("WebGL_API/Types", "GLboolean")}} indicating whether or not the program is valid.

## Examples

### Checking a program

```js
var canvas = document.getElementById('canvas');
var gl = canvas.getContext('webgl');
var program = gl.createProgram();

// ...

gl.isProgram(program);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.createProgram()")}}
- {{domxref("WebGLRenderingContext.deleteProgram()")}}
- {{domxref("WebGLRenderingContext.linkProgram()")}}
- {{domxref("WebGLRenderingContext.useProgram()")}}
- {{domxref("WebGLRenderingContext.validateProgram()")}}
- {{domxref("WebGLRenderingContext.getProgramParameter()")}}
- {{domxref("WebGLRenderingContext.getProgramInfoLog()")}}
