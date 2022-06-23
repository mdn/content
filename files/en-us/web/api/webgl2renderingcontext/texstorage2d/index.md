---
title: WebGL2RenderingContext.texStorage2D()
slug: Web/API/WebGL2RenderingContext/texStorage2D
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - WebGL
  - WebGL2
browser-compat: api.WebGL2RenderingContext.texStorage2D
---
{{APIRef("WebGL")}}

The **`WebGL2RenderingContext.texStorage2D()`** method of the
[WebGL API](/en-US/docs/Web/API/WebGL_API) specifies all levels of
two-dimensional texture storage.

## Syntax

```js
texStorage2D(target, levels, internalformat, width, height)
```

### Parameters

- `target`

  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying the binding point (target) of the active texture.
    Possible values:

    - `gl.TEXTURE_2D`: A two-dimensional texture.
    - `gl.TEXTURE_CUBE_MAP`: A cube-mapped texture.

- `levels`
  - : A {{domxref("WebGL_API/Types", "GLint")}} specifying the number of texture levels.
- `internalformat`

  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying the texture store format. Possible values:

    - `gl.R8`
    - `gl.R16F`
    - `gl.R32F`
    - `gl.R8UI`
    - `gl.RG8`
    - `gl.RG16F`
    - `gl.RG32F`
    - `gl.RG8UI`
    - `gl.RGB8`
    - `gl.SRGB8`
    - `gl.RGB565`
    - `gl.R11F_G11F_B10F`
    - `gl.RGB9_E5`
    - `gl.RGB16F`
    - `gl.RGB32F`
    - `gl.RGB8UI`
    - `gl.RGBA8`
    - `gl.SRGB8_ALPHA8`
    - `gl.RGB5_A1`
    - `gl.RGBA4`
    - `gl.RGBA16F`
    - `gl.RGBA32F`
    - `gl.RGBA8UI`

    Unlike OpenGL 3.0, WebGL 2 **doesn't support** the following ETC2 and
    EAC compressed texture formats (see [section 5.37](https://www.khronos.org/registry/webgl/specs/latest/2.0/#5.37) in the WebGL 2 spec). You might be able to enable them via the
    {{domxref("WEBGL_compressed_texture_etc")}} extension, though.

    - `gl.COMPRESSED_R11_EAC`
    - `gl.COMPRESSED_SIGNED_R11_EAC`
    - `gl.COMPRESSED_RG11_EAC`
    - `gl.COMPRESSED_SIGNED_RG11_EAC`
    - `gl.COMPRESSED_RGB8_ETC2`
    - `gl.COMPRESSED_RGBA8_ETC2_EAC`
    - `gl.COMPRESSED_SRGB8_ETC2`
    - `gl.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC`
    - `gl.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2`
    - `gl.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2`

- `width`
  - : A {{domxref("WebGL_API/Types", "GLsizei")}} specifying the width of the texture.
- `height`
  - : A {{domxref("WebGL_API/Types", "GLsizei")}} specifying the height of the texture.

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
gl.texStorage2D(gl.TEXTURE_2D, 1, gl.RGB8, 256, 256);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGL2RenderingContext.texStorage3D()")}}
- {{domxref("WEBGL_compressed_texture_etc")}}
