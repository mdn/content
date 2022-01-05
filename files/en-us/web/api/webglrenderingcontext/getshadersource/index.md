---
title: WebGLRenderingContext.getShaderSource()
slug: Web/API/WebGLRenderingContext/getShaderSource
tags:
  - API
  - Method
  - Reference
  - WebGL
  - WebGLRenderingContext
browser-compat: api.WebGLRenderingContext.getShaderSource
---
{{APIRef("WebGL")}}

The **`WebGLRenderingContext.getShaderSource()`** method of the
[WebGL API](/en-US/docs/Web/API/WebGL_API) returns the source code of a
{{domxref("WebGLShader")}} as a {{domxref("DOMString")}}.

## Syntax

```js
DOMString gl.getShaderSource(shader);
```

### Parameters

- shader
  - : A {{domxref("WebGLShader")}} object to get the source code from.

### Return value

A {{domxref("DOMString")}} containing the source code of the shader.

## Examples

```js
var shader = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(shader, originalSource);

var source = gl.getShaderSource(shader);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.createShader()")}}
- {{domxref("WebGLRenderingContext.isShader()")}}
- {{domxref("WebGLRenderingContext.deleteShader()")}}
