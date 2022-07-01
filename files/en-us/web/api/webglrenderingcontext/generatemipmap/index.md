---
title: WebGLRenderingContext.generateMipmap()
slug: Web/API/WebGLRenderingContext/generateMipmap
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - Textures
  - WebGL
  - WebGLRenderingContext
browser-compat: api.WebGLRenderingContext.generateMipmap
---
{{APIRef("WebGL")}}

The **`WebGLRenderingContext.generateMipmap()`** method of the
[WebGL API](/en-US/docs/Web/API/WebGL_API) generates a set of mipmaps for a
{{domxref("WebGLTexture")}} object.

Mipmaps are used to create distance with objects. A higher-resolution mipmap is used
for objects that are closer, and a lower-resolution mipmap is used for objects that are
farther away. It starts with the resolution of the texture image and halves the
resolution until a 1x1 dimension texture image is created.

## Syntax

```js
generateMipmap(target)
```

### Parameters

- `target`

  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying the binding point (target) of the active texture
    whose mipmaps will be generated. Possible values:

    - `gl.TEXTURE_2D`: A two-dimensional texture.
    - `gl.TEXTURE_CUBE_MAP`: A cube-mapped texture.
    When using a {{domxref("WebGL2RenderingContext", "WebGL 2 context", "", 1)}},
      the following values are available additionally:

      - `gl.TEXTURE_3D`: A three-dimensional texture.
      - `gl.TEXTURE_2D_ARRAY`: A two-dimensional array texture.

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
gl.generateMipmap(gl.TEXTURE_2D);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.createTexture()")}}
- {{domxref("WebGLRenderingContext.bindTexture()")}}
- {{domxref("WebGLRenderingContext.getTexParameter()")}}
- {{domxref("WebGLRenderingContext.texParameter",
    "WebGLRenderingContext.texParameterf()")}}
- {{domxref("WebGLRenderingContext.texParameter",
    "WebGLRenderingContext.texParameteri()")}}
