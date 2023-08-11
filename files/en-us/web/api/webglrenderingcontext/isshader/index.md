---
title: "WebGLRenderingContext: isShader() method"
short-title: isShader()
slug: Web/API/WebGLRenderingContext/isShader
page-type: web-api-instance-method
browser-compat: api.WebGLRenderingContext.isShader
---

{{APIRef("WebGL")}}

The **`WebGLRenderingContext.isShader()`** method of the [WebGL API](/en-US/docs/Web/API/WebGL_API) returns `true` if the
passed {{domxref("WebGLShader")}} is valid, `false` otherwise.

## Syntax

```js-nolint
isShader(shader)
```

### Parameters

- `shader`
  - : A {{domxref("WebGLShader")}} to check.

### Return value

A {{domxref("WebGL_API/Types", "GLboolean")}} indicating whether or not the shader is valid.

## Examples

### Checking a shader

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");
const shader = gl.createShader(gl.VERTEX_SHADER);

// …

gl.isShader(shader);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.createShader()")}}
- {{domxref("WebGLRenderingContext.deleteShader()")}}
