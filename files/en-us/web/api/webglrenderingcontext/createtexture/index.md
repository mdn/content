---
title: WebGLRenderingContext.createTexture()
slug: Web/API/WebGLRenderingContext/createTexture
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - Textures
  - WebGL
  - WebGLRenderingContext
browser-compat: api.WebGLRenderingContext.createTexture
---
{{APIRef("WebGL")}}

The **`WebGLRenderingContext.createTexture()`** method of the
[WebGL API](/en-US/docs/Web/API/WebGL_API) creates and initializes a
{{domxref("WebGLTexture")}} object.

## Syntax

```js
createTexture()
```

### Parameters

None.

### Return value

A {{domxref("WebGLTexture")}} object to which images can be bound to.

## Examples

See also the [WebGL tutorial](/en-US/docs/Web/API/WebGL_API/Tutorial) on [Using textures in WebGL](/en-US/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL).

### Creating a texture

```js
const canvas = document.getElementById('canvas');
const gl = canvas.getContext('webgl');
const texture = gl.createTexture();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.bindTexture()")}}
- {{domxref("WebGLRenderingContext.deleteTexture()")}}
- {{domxref("WebGLRenderingContext.isTexture()")}}
- {{domxref("WebGLRenderingContext.texImage2D()")}}
