---
title: WebGLRenderingContext.deleteTexture()
slug: Web/API/WebGLRenderingContext/deleteTexture
tags:
  - API
  - Method
  - Reference
  - Textures
  - WebGL
  - WebGLRenderingContext
browser-compat: api.WebGLRenderingContext.deleteTexture
---
{{APIRef("WebGL")}}

The **`WebGLRenderingContext.deleteTexture()`** method of the
[WebGL API](/en-US/docs/Web/API/WebGL_API) deletes a given
{{domxref("WebGLTexture")}} object. This method has no effect if the texture has already
been deleted.

## Syntax

```js
void gl.deleteTexture(texture);
```

### Parameters

- texture
  - : A {{domxref("WebGLTexture")}} object to delete.

### Return value

None.

## Examples

### Deleting a texture

```js
var canvas = document.getElementById('canvas');
var gl = canvas.getContext('webgl');
var texture = gl.createTexture();

// ...

gl.deleteTexture(texture);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.bindTexture()")}}
- {{domxref("WebGLRenderingContext.createTexture()")}}
- {{domxref("WebGLRenderingContext.isTexture()")}}
- {{domxref("WebGLRenderingContext.texImage2D()")}}
