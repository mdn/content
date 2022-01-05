---
title: WebGLRenderingContext.isShader()
slug: Web/API/WebGLRenderingContext/isShader
tags:
  - API
  - Method
  - Reference
  - WebGL
  - WebGLRenderingContext
browser-compat: api.WebGLRenderingContext.isShader
---
{{APIRef("WebGL")}}

The **`WebGLRenderingContext.isShader()`** method of the [WebGL API](/en-US/docs/Web/API/WebGL_API) returns `true` if the
passed {{domxref("WebGLShader")}} is valid, `false` otherwise.

## Syntax

```js
GLboolean gl.isShader(shader);
```

### Parameters

- shader
  - : A {{domxref("WebGLShader")}} to check.

### Return value

A {{domxref("WebGL_API/Types", "GLboolean")}} indicating whether or not the shader is valid.

## Examples

### Checking a shader

```js
var canvas = document.getElementById('canvas');
var gl = canvas.getContext('webgl');
var shader = gl.createShader(gl.VERTEX_SHADER);

// ...

gl.isShader(shader);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.createShader()")}}
- {{domxref("WebGLRenderingContext.deleteShader()")}}
