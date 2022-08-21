---
title: WebGLRenderingContext.copyTexImage2D()
slug: Web/API/WebGLRenderingContext/copyTexImage2D
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - Textures
  - WebGL
  - WebGLRenderingContext
browser-compat: api.WebGLRenderingContext.copyTexImage2D
---
{{APIRef("WebGL")}}

The **`WebGLRenderingContext.copyTexImage2D()`** method of the
[WebGL API](/en-US/docs/Web/API/WebGL_API) copies pixels from the current
{{domxref("WebGLFramebuffer")}} into a 2D texture image.

## Syntax

```js
copyTexImage2D(target, level, internalformat, x, y, width, height, border)
```

### Parameters

- `target`

  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying the binding point (target) of the active texture.
    Possible values:

    - `gl.TEXTURE_2D`: A two-dimensional texture.
    - `gl.TEXTURE_CUBE_MAP_POSITIVE_X`: Positive X face for a cube-mapped
      texture.
    - `gl.TEXTURE_CUBE_MAP_NEGATIVE_X`: Negative X face for a cube-mapped
      texture.
    - `gl.TEXTURE_CUBE_MAP_POSITIVE_Y`: Positive Y face for a cube-mapped
      texture.
    - `gl.TEXTURE_CUBE_MAP_NEGATIVE_Y`: Negative Y face for a cube-mapped
      texture.
    - `gl.TEXTURE_CUBE_MAP_POSITIVE_Z`: Positive Z face for a cube-mapped
      texture.
    - `gl.TEXTURE_CUBE_MAP_NEGATIVE_Z`: Negative Z face for a cube-mapped
      texture.

- `level`
  - : A {{domxref("WebGL_API/Types", "GLint")}} specifying the level of detail. Level 0 is the base image
    level and level _n_ is the *n*th mipmap reduction level.
- `internalformat`

  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying the color components in the texture. Possible
    values:

    - `gl.ALPHA`: Discards the red, green and blue components and reads the
      alpha component.
    - `gl.RGB`: Discards the alpha components and reads the red, green and
      blue components.
    - `gl.RGBA`: Red, green, blue and alpha components are read from the
      color buffer.
    - `gl.LUMINANCE`: Each color component is a luminance component, alpha
      is 1.0.
    - `gl.LUMINANCE_ALPHA`: Each component is a luminance/alpha component.

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
- `border`
  - : A {{domxref("WebGL_API/Types", "GLint")}} specifying the width of the border. Must be 0.

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
gl.copyTexImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 0, 0, 512, 512, 0);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.createTexture()")}}
- {{domxref("WebGLRenderingContext.bindTexture()")}}
- {{domxref("WebGLRenderingContext.texImage2D()")}}
- {{domxref("WebGLRenderingContext.texSubImage2D()")}}
- {{domxref("WebGLRenderingContext.compressedTexImage2D()")}}
