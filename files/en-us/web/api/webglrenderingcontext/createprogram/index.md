---
title: WebGLRenderingContext.createProgram()
slug: Web/API/WebGLRenderingContext/createProgram
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - WebGL
  - WebGLRenderingContext
browser-compat: api.WebGLRenderingContext.createProgram
---
{{APIRef("WebGL")}}

The **`WebGLRenderingContext.createProgram()`** method of the
[WebGL API](/en-US/docs/Web/API/WebGL_API) creates and initializes a
{{domxref("WebGLProgram")}} object.

## Syntax

```js
createProgram()
```

### Parameters

None.

### Return value

A {{domxref("WebGLProgram")}} object that is a combination of two compiled
{{domxref("WebGLShader")}}s consisting of a vertex shader and a fragment shader (both
written in GLSL). These are then linked into a usable program.

## Examples

### Creating a WebGL program

```js
const program = gl.createProgram();

// Attach pre-existing shaders
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);

gl.linkProgram(program);

if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
  const info = gl.getProgramInfoLog(program);
  throw `Could not compile WebGL program. \n\n${info}`;
}
```

See {{domxref("WebGLShader")}} for information on creating the
`vertexShader` and `fragmentShader` in the above example.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.deleteProgram()")}}
- {{domxref("WebGLRenderingContext.isProgram()")}}
- {{domxref("WebGLRenderingContext.linkProgram()")}}
- {{domxref("WebGLRenderingContext.useProgram()")}}
- {{domxref("WebGLRenderingContext.validateProgram()")}}
- {{domxref("WebGLRenderingContext.getProgramParameter()")}}
- {{domxref("WebGLRenderingContext.getProgramInfoLog()")}}
