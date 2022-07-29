---
title: WebGLRenderingContext.linkProgram()
slug: Web/API/WebGLRenderingContext/linkProgram
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - WebGL
  - WebGLRenderingContext
browser-compat: api.WebGLRenderingContext.linkProgram
---
{{APIRef("WebGL")}}

The {{domxref("WebGLRenderingContext")}} interface's
**`linkProgram()`** method links a given
{{domxref("WebGLProgram")}}, completing the process of preparing the GPU code for the
program's fragment and vertex shaders.

## Syntax

```js
linkProgram(program)
```

### Parameters

- `program`
  - : The {{domxref("WebGLProgram")}} to link.

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
const program = gl.createProgram();

// Attach pre-existing shaders
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);

gl.linkProgram(program);

if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
  const info = gl.getProgramInfoLog(program);
  throw new Error(`Could not compile WebGL program. \n\n${info}`);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.createProgram()")}}
- {{domxref("WebGLRenderingContext.deleteProgram()")}}
- {{domxref("WebGLRenderingContext.isProgram()")}}
- {{domxref("WebGLRenderingContext.useProgram()")}}
- {{domxref("WebGLRenderingContext.validateProgram()")}}
- {{domxref("WebGLRenderingContext.getProgramParameter()")}}
- {{domxref("WebGLRenderingContext.getProgramInfoLog()")}}
