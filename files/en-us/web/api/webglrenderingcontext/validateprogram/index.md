---
title: WebGLRenderingContext.validateProgram()
slug: Web/API/WebGLRenderingContext/validateProgram
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - WebGL
  - WebGLRenderingContext
browser-compat: api.WebGLRenderingContext.validateProgram
---
{{APIRef("WebGL")}}

The **`WebGLRenderingContext.validateProgram()`** method of the
[WebGL API](/en-US/docs/Web/API/WebGL_API) validates a
{{domxref("WebGLProgram")}}. It checks if it is successfully linked and if it can be
used in the current WebGL state.

## Syntax

```js
validateProgram(program)
```

### Parameters

- `program`
  - : A {{domxref("WebGLProgram")}} to validate.

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
const program = gl.createProgram();

// Attach pre-existing shaders
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);

gl.linkProgram(program);
gl.validateProgram(program);

if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
  const info = gl.getProgramInfoLog(program);
  throw `Could not compile WebGL program. \n\n${info}`;
}

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
- {{domxref("WebGLRenderingContext.useProgram()")}}
- {{domxref("WebGLRenderingContext.getProgramParameter()")}}
- {{domxref("WebGLRenderingContext.getProgramInfoLog()")}}
