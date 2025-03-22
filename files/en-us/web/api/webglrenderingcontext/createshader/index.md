---
title: "WebGLRenderingContext: createShader() method"
short-title: createShader()
slug: Web/API/WebGLRenderingContext/createShader
page-type: web-api-instance-method
browser-compat: api.WebGLRenderingContext.createShader
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

The {{domxref("WebGLRenderingContext")}}
method **`createShader()`** of the [WebGL API](/en-US/docs/Web/API/WebGL_API) creates a
{{domxref("WebGLShader")}} that can then be configured further using
{{domxref("WebGLRenderingContext.shaderSource()")}} and
{{domxref("WebGLRenderingContext.compileShader()")}}.

## Syntax

```js-nolint
createShader(type)
```

### Parameters

- `type`
  - : Either `gl.VERTEX_SHADER` or `gl.FRAGMENT_SHADER`. The {{domxref("WebGLRenderingContext")}} will set the `gl.INVALID_ENUM` error flag if an unacceptable value has been specified.

### Return value

A new {{domxref("WebGLShader")}} instance, or `null` if an error occurs creating the shader (for example, because `type` was an invalid value).

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
