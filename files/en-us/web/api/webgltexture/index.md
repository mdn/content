---
title: WebGLTexture
slug: Web/API/WebGLTexture
tags:
  - API
  - Reference
  - WebGL
browser-compat: api.WebGLTexture
---
{{APIRef("WebGL")}}

The **WebGLTexture** interface is part of the [WebGL API](/en-US/docs/Web/API/WebGL_API) and represents an opaque texture object providing storage and state for texturing operations.

## Description

The `WebGLTexture` object does not define any methods or properties of its own and its content is not directly accessible. When working with `WebGLTexture` objects, the following methods of the {{domxref("WebGLRenderingContext")}} are useful:

- {{domxref("WebGLRenderingContext.bindTexture()")}}
- {{domxref("WebGLRenderingContext.createTexture()")}}
- {{domxref("WebGLRenderingContext.deleteTexture()")}}
- {{domxref("WebGLRenderingContext.isTexture()")}}

## Examples

### Creating a texture

```js
var canvas = document.getElementById('canvas');
var gl = canvas.getContext('webgl');
var texture = gl.createTexture();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.bindTexture()")}}
- {{domxref("WebGLRenderingContext.createTexture()")}}
- {{domxref("WebGLRenderingContext.deleteTexture()")}}
- {{domxref("WebGLRenderingContext.isTexture()")}}
- {{domxref("WebGLRenderingContext.compressedTexImage2D()")}}
- {{domxref("WebGLRenderingContext.compressedTexSubImage2D()")}}
- {{domxref("WebGLRenderingContext.copyTexImage2D()")}}
- {{domxref("WebGLRenderingContext.copyTexSubImage2D()")}}
- {{domxref("WebGLRenderingContext.generateMipmap()")}}
- {{domxref("WebGLRenderingContext.getTexParameter()")}}
- {{domxref("WebGLRenderingContext.texImage2D()")}}
- {{domxref("WebGLRenderingContext.texSubImage2D()")}}
- {{domxref("WebGLRenderingContext/texParameter", "WebGLRenderingContext.texParameterf()")}}
- {{domxref("WebGLRenderingContext/texParameter", "WebGLRenderingContext.texParameteri()")}}
