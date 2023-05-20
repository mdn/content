---
title: "WebGL2RenderingContext: copyTexSubImage3D() method"
short-title: copyTexSubImage3D()
slug: Web/API/WebGL2RenderingContext/copyTexSubImage3D
page-type: web-api-instance-method
browser-compat: api.WebGL2RenderingContext.copyTexSubImage3D
---

{{APIRef("WebGL")}}

The **`WebGL2RenderingContext.copyTexSubImage3D()`** method of
the [WebGL API](/en-US/docs/Web/API/WebGL_API) copies pixels from the current
{{domxref("WebGLFramebuffer")}} into an existing 3D texture sub-image.

## Syntax

```js-nolint
copyTexSubImage3D(target, level, xoffset, yoffset, zoffset, x, y, width, height)
```

### Parameters

- `target`

  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying the binding point (target) of the active texture.
    Possible values:

    - `gl.TEXTURE_3D`: A three-dimensional texture.
    - `gl.TEXTURE_2D_ARRAY`: A two-dimensional array texture.

- `level`
  - : A {{domxref("WebGL_API/Types", "GLint")}} specifying the level of detail. Level 0 is the base image
    level and level _n_ is the n-th mipmap reduction level.
- `xoffset`
  - : A {{domxref("WebGL_API/Types", "GLint")}} specifying the x offset within the texture image.
- `yoffset`
  - : A {{domxref("WebGL_API/Types", "GLint")}} specifying the y offset within the texture image.
- `zoffset`
  - : A {{domxref("WebGL_API/Types", "GLint")}} specifying the z offset within the texture image.
- `x`
  - : A {{domxref("WebGL_API/Types", "GLint")}} specifying the x coordinate of the lower left corner where to
    start copying.
- `y`
  - : A {{domxref("WebGL_API/Types", "GLint")}} specifying the y coordinate of the lower left corner where to
    start copying.
- `width`
  - : A {{domxref("WebGL_API/Types", "GLsizei")}} specifying the width of the texture.
- `height`
  - : A {{domxref("WebGL_API/Types", "GLsizei")}} specifying the height of the texture.

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
gl.copyTexSubImage3D(gl.TEXTURE_3D, 0, 0, 0, 0, 0, 0, 16, 16);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.copyTexImage2D()")}}
- {{domxref("WebGLRenderingContext.texImage2D()")}}
- {{domxref("WebGLRenderingContext.texSubImage2D()")}}
- {{domxref("WebGLRenderingContext.compressedTexImage2D()")}}
