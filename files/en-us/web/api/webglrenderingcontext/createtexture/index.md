---
title: WebGLRenderingContext.createTexture()
slug: Web/API/WebGLRenderingContext/createTexture
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
WebGLTexture gl.createTexture();
```

### Parameters

None.

### Return value

A {{domxref("WebGLTexture")}} object to which images can be bound to.

## Examples

See also the [WebGL tutorial](/en-US/docs/Web/API/WebGL_API/Tutorial) on [Using textures
in WebGL](/en-US/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL).

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
- {{domxref("WebGLRenderingContext.deleteTexture()")}}
- {{domxref("WebGLRenderingContext.isTexture()")}}
- {{domxref("WebGLRenderingContext.texImage2D()")}}
