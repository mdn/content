---
title: WebGLRenderingContext.bindTexture()
slug: Web/API/WebGLRenderingContext/bindTexture
tags:
  - API
  - Method
  - Reference
  - Textures
  - WebGL
  - WebGLRenderingContext
browser-compat: api.WebGLRenderingContext.bindTexture
---
{{APIRef("WebGL")}}

The **`WebGLRenderingContext.bindTexture()`** method of the [WebGL API](/en-US/docs/Web/API/WebGL_API) binds a given
{{domxref("WebGLTexture")}} to a target (binding point).

## Syntax

```js
void gl.bindTexture(target, texture);
```

### Parameters

- target

  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying the binding point (target). Possible values:

    - `gl.TEXTURE_2D`: A two-dimensional texture.
    - `gl.TEXTURE_CUBE_MAP`: A cube-mapped texture.
    - When using a {{domxref("WebGL2RenderingContext", "WebGL 2 context", "", 1)}},
      the following values are available additionally:

      - `gl.TEXTURE_3D`: A three-dimensional texture.
      - `gl.TEXTURE_2D_ARRAY`: A two-dimensional array texture.

- texture
  - : A {{domxref("WebGLTexture")}} object to bind.

### Return value

None.

### Exceptions

A `gl.INVALID_ENUM` error is thrown if `target` is not
`gl.TEXTURE_2D`, `gl.TEXTURE_CUBE_MAP`,
`gl.TEXTURE_3D`, or `gl.TEXTURE_2D_ARRAY`.

## Examples

### Binding a texture

```js
var canvas = document.getElementById('canvas');
var gl = canvas.getContext('webgl');
var texture = gl.createTexture();

gl.bindTexture(gl.TEXTURE_2D, texture);
```

### Getting current bindings

To check the current texture binding, query the `gl.TEXTURE_BINDING_2D` or
`gl.TEXTURE_BINDING_CUBE_MAP` constants.

```js
gl.getParameter(gl.TEXTURE_BINDING_2D);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.createTexture()")}}
- {{domxref("WebGLRenderingContext.deleteTexture()")}}
- {{domxref("WebGLRenderingContext.isTexture()")}}
- {{domxref("WebGLRenderingContext.texImage2D()")}}
