---
title: "WebGLRenderingContext: getShaderSource() method"
short-title: getShaderSource()
slug: Web/API/WebGLRenderingContext/getShaderSource
page-type: web-api-instance-method
browser-compat: api.WebGLRenderingContext.getShaderSource
---

{{APIRef("WebGL")}}

The **`WebGLRenderingContext.getShaderSource()`** method of the
[WebGL API](/en-US/docs/Web/API/WebGL_API) returns the source code of a
{{domxref("WebGLShader")}} as a string.

## Syntax

```js-nolint
getShaderSource(shader)
```

### Parameters

- `shader`
  - : A {{domxref("WebGLShader")}} object to get the source code from.

### Return value

A string containing the source code of the shader.

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
