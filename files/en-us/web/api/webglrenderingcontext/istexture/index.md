---
title: WebGLRenderingContext.isTexture()
slug: Web/API/WebGLRenderingContext/isTexture
tags:
  - API
  - Method
  - Reference
  - WebGL
  - WebGLRenderingContext
browser-compat: api.WebGLRenderingContext.isTexture
---
{{APIRef("WebGL")}}

The **`WebGLRenderingContext.isTexture()`** method of the [WebGL API](/en-US/docs/Web/API/WebGL_API) returns `true` if the
passed {{domxref("WebGLTexture")}} is valid and `false` otherwise.

## Syntax

```js
GLboolean gl.isTexture(texture);
```

### Parameters

- texture
  - : A {{domxref("WebGLTexture")}} to check.

### Return value

A {{domxref("WebGL_API/Types", "GLboolean")}} indicating whether or not the texture is valid.

## Examples

### Checking a texture

```js
var canvas = document.getElementById('canvas');
var gl = canvas.getContext('webgl');
var texture = gl.createTexture();

gl.isTexture(texture);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.bindTexture()")}}
- {{domxref("WebGLRenderingContext.createTexture()")}}
- {{domxref("WebGLRenderingContext.deleteTexture()")}}
- {{domxref("WebGLRenderingContext.texImage2D()")}}
