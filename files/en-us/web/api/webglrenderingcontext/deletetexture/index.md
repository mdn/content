---
title: WebGLRenderingContext.deleteTexture()
slug: Web/API/WebGLRenderingContext/deleteTexture
page-type: web-api-instance-method
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
deleteTexture(texture)
```

### Parameters

- `texture`
  - : A {{domxref("WebGLTexture")}} object to delete.

### Return value

None ({{jsxref("undefined")}}).

## Examples

### Deleting a texture

```js
const canvas = document.getElementById('canvas');
const gl = canvas.getContext('webgl');
const texture = gl.createTexture();

// …

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
