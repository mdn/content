---
title: WebGLRenderingContext.getProgramInfoLog()
slug: Web/API/WebGLRenderingContext/getProgramInfoLog
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - WebGL
  - WebGLRenderingContext
browser-compat: api.WebGLRenderingContext.getProgramInfoLog
---
{{APIRef("WebGL")}}

The **WebGLRenderingContext.getProgramInfoLog** returns the information
log for the specified {{domxref("WebGLProgram")}} object. It contains errors that
occurred during failed linking or validation of `WebGLProgram` objects.

## Syntax

```js
getProgramInfoLog(program)
```

### Parameters

- `program`
  - : The {{domxref("WebGLProgram")}} to query.

### Return value

A string that contains diagnostic messages, warning messages, and
other information about the last linking or validation operation. When a
{{domxref("WebGLProgram")}} object is initially created, its information log will be a
string of length 0.

## Examples

### Checking program errors

```js
const program = gl.createProgram();

// Attach pre-existing shaders
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);

gl.linkProgram(program);

gl.getProgramInfoLog(program);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.getShaderInfoLog()")}}
- {{domxref("WebGLRenderingContext.getError()")}}
