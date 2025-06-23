---
title: "WebGLRenderingContext: compileShader() method"
short-title: compileShader()
slug: Web/API/WebGLRenderingContext/compileShader
page-type: web-api-instance-method
browser-compat: api.WebGLRenderingContext.compileShader
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

The **WebGLRenderingContext.compileShader()** method of the [WebGL API](/en-US/docs/Web/API/WebGL_API) compiles a GLSL shader into binary
data so that it can be used by a {{domxref("WebGLProgram")}}.

## Syntax

```js-nolint
compileShader(shader)
```

### Parameters

- `shader`
  - : A fragment or vertex {{domxref("WebGLShader")}}.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if the specified `shader` is not of type `WebGLShader`.

## Examples

```js
const shader = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(shader, shaderSource);
gl.compileShader(shader);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLProgram")}}
- {{domxref("WebGLShader")}}
- {{domxref("WebGLRenderingContext.attachShader()")}}
- {{domxref("WebGLRenderingContext.createProgram()")}}
- {{domxref("WebGLRenderingContext.createShader()")}}
- {{domxref("WebGLRenderingContext.deleteProgram()")}}
- {{domxref("WebGLRenderingContext.deleteShader()")}}
- {{domxref("WebGLRenderingContext.detachShader()")}}
- {{domxref("WebGLRenderingContext.getAttachedShaders()")}}
- {{domxref("WebGLRenderingContext.getProgramParameter()")}}
- {{domxref("WebGLRenderingContext.getProgramInfoLog()")}}
- {{domxref("WebGLRenderingContext.getShaderParameter()")}}
- {{domxref("WebGLRenderingContext.getShaderPrecisionFormat()")}}
- {{domxref("WebGLRenderingContext.getShaderInfoLog()")}}
- {{domxref("WebGLRenderingContext.getShaderSource()")}}
- {{domxref("WebGLRenderingContext.isProgram()")}}
- {{domxref("WebGLRenderingContext.isShader()")}}
- {{domxref("WebGLRenderingContext.linkProgram()")}}
- {{domxref("WebGLRenderingContext.shaderSource()")}}
- {{domxref("WebGLRenderingContext.useProgram()")}}
- {{domxref("WebGLRenderingContext.validateProgram()")}}
