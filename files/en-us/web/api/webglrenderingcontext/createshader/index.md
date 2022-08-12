---
title: WebGLRenderingContext.createShader()
slug: Web/API/WebGLRenderingContext/createShader
page-type: web-api-instance-method
tags:
  - API
  - Graphics
  - Method
  - Reference
  - Shader
  - WebGL
browser-compat: api.WebGLRenderingContext.createShader
---
{{APIRef("WebGL")}}

The {{domxref("WebGLRenderingContext")}}
method **`createShader()`** of the [WebGL API](/en-US/docs/Web/API/WebGL_API) creates a
{{domxref("WebGLShader")}} that can then be configured further using
{{domxref("WebGLRenderingContext.shaderSource()")}} and
{{domxref("WebGLRenderingContext.compileShader()")}}.

## Syntax

```js
createShader(type)
```

### Parameters

- `type`
  - : Either `gl.VERTEX_SHADER` or `gl.FRAGMENT_SHADER`

### Return value

A new ({{domxref("WebGLShader")}}).

## Examples

See {{domxref("WebGLShader")}} for usage and examples.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLProgram")}}
- {{domxref("WebGLShader")}}
- {{domxref("WebGLRenderingContext.attachShader()")}}
- {{domxref("WebGLRenderingContext.bindAttribLocation()")}}
- {{domxref("WebGLRenderingContext.compileShader()")}}
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
