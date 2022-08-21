---
title: WebGLRenderingContext.useProgram()
slug: Web/API/WebGLRenderingContext/useProgram
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - WebGL
  - WebGLRenderingContext
browser-compat: api.WebGLRenderingContext.useProgram
---
{{APIRef("WebGL")}}

The **`WebGLRenderingContext.useProgram()`** method of the [WebGL API](/en-US/docs/Web/API/WebGL_API) sets the specified
{{domxref("WebGLProgram")}} as part of the current rendering state.

## Syntax

```js
useProgram(program)
```

### Parameters

- `program`
  - : A {{domxref("WebGLProgram")}} to use.

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
const program = gl.createProgram();

// Attach pre-existing shaders
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);

gl.linkProgram(program);
gl.useProgram(program);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.createProgram()")}}
- {{domxref("WebGLRenderingContext.deleteProgram()")}}
- {{domxref("WebGLRenderingContext.isProgram()")}}
- {{domxref("WebGLRenderingContext.linkProgram()")}}
- {{domxref("WebGLRenderingContext.validateProgram()")}}
- {{domxref("WebGLRenderingContext.getProgramParameter()")}}
- {{domxref("WebGLRenderingContext.getProgramInfoLog()")}}
