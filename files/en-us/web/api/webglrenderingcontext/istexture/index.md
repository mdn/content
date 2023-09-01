---
title: "WebGLRenderingContext: isTexture() method"
short-title: isTexture()
slug: Web/API/WebGLRenderingContext/isTexture
page-type: web-api-instance-method
browser-compat: api.WebGLRenderingContext.isTexture
---

{{APIRef("WebGL")}}

The **`WebGLRenderingContext.isTexture()`** method of the [WebGL API](/en-US/docs/Web/API/WebGL_API) returns `true` if the
passed {{domxref("WebGLTexture")}} is valid and `false` otherwise.

## Syntax

```js-nolint
isTexture(texture)
```

### Parameters

- `texture`
  - : A {{domxref("WebGLTexture")}} to check.

### Return value

A {{domxref("WebGL_API/Types", "GLboolean")}} indicating whether or not the texture is valid.

## Examples

### Checking a texture

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");
const texture = gl.createTexture();

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
