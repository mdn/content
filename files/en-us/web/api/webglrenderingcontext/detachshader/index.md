---
title: "WebGLRenderingContext: detachShader() method"
short-title: detachShader()
slug: Web/API/WebGLRenderingContext/detachShader
page-type: web-api-instance-method
browser-compat: api.WebGLRenderingContext.detachShader
---

{{APIRef("WebGL")}}

The **WebGLRenderingContext.detachShader()** method of the [WebGL API](/en-US/docs/Web/API/WebGL_API) detaches a previously
attached {{domxref("WebGLShader")}} from a {{domxref("WebGLProgram")}}.

## Syntax

```js-nolint
detachShader(program, shader)
```

### Parameters

- `program`
  - : A {{domxref("WebGLProgram")}}.
- `shader`
  - : A fragment or vertex {{domxref("WebGLShader")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLProgram")}}
- {{domxref("WebGLShader")}}
- {{domxref("WebGLRenderingContext.attachShader()")}}
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
