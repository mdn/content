---
title: WebGLRenderingContext.shaderSource()
slug: Web/API/WebGLRenderingContext/shaderSource
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - WebGL
  - WebGLRenderingContext
browser-compat: api.WebGLRenderingContext.shaderSource
---
{{APIRef("WebGL")}}

The **`WebGLRenderingContext.shaderSource()`** method of the [WebGL API](/en-US/docs/Web/API/WebGL_API) sets the source code of a
{{domxref("WebGLShader")}}.

## Syntax

```js
shaderSource(shader, source)
```

### Parameters

- `shader`
  - : A {{domxref("WebGLShader")}} object in which to set the source code.
- `source`
  - : A string containing the GLSL source code to set.

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
const shader = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(shader, originalSource);

const source = gl.getShaderSource(shader);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.createShader()")}}
- {{domxref("WebGLRenderingContext.isShader()")}}
- {{domxref("WebGLRenderingContext.deleteShader()")}}
- {{domxref("WebGLRenderingContext.getShaderSource()")}}
