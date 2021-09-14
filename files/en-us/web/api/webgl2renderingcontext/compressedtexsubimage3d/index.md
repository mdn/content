---
title: WebGL2RenderingContext.compressedTexSubImage3D()
slug: Web/API/WebGL2RenderingContext/compressedTexSubImage3D
tags:
  - API
  - Method
  - Reference
  - WebGL
  - WebGL2
browser-compat: api.WebGL2RenderingContext.compressedTexSubImage3D
---
{{APIRef("WebGL")}}

The **`WebGL2RenderingContext.compressedTexSubImage3D()`**
method of the [WebGL API](/en-US/docs/Web/API/WebGL_API) specifies a
three-dimensional sub-rectangle for a texture image in a compressed format.

## Syntax

```js
// read from the buffer bound to gl.PIXEL_UNPACK_BUFFER
void gl.compressedTexSubImage3D(target, level, xoffset, yoffset, zoffset, width, height, depth, format, imageSize, offset);

void gl.compressedTexSubImage3D(target, level, xoffset, yoffset, zoffset, width, height, depth, format, ArrayBufferView srcData, optional srcOffset, optional srcLengthOverride);
```

### Parameters

- `target`

  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying the binding point (target) of the active texture.
    Possible values:

    - `gl.TEXTURE_3D`: A three-dimensional texture.
    - `gl.TEXTURE_2D_ARRAY`: A two-dimensional array texture.

- `level`
  - : A {{domxref("WebGL_API/Types", "GLint")}} specifying the level of detail. Level 0 is the base image
    level and level _n_ is the *n*th mipmap reduction level.
- `xoffset`
  - : A {{domxref("WebGL_API/Types", "GLint")}} specifying the x offset within the compressed texture image.
- `yoffset`
  - : A {{domxref("WebGL_API/Types", "GLint")}} specifying the y offset within the compressed texture image.
- `zoffset`
  - : A {{domxref("WebGL_API/Types", "GLint")}} specifying the z offset within the compressed texture image.
- `width`
  - : A {{domxref("WebGL_API/Types", "GLsizei")}} specifying the width of the texture.
- `height`
  - : A {{domxref("WebGL_API/Types", "GLsizei")}} specifying the height of the texture.
- `depth`
  - : A {{domxref("WebGL_API/Types", "GLsizei")}} specifying the depth of the texture.
- `format`

  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying the compressed image format. Possible values:

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

- `imageSize`
  - : A {{domxref("WebGL_API/Types", "GLint")}} specifying the number of bytes to read from the buffer bound
    to `gl.PIXEL_UNPACK_BUFFER`.
- `offset`
  - : A {{domxref("WebGL_API/Types", "GLint")}} specifying the offset in bytes from which to read from the
    buffer bound to `gl.PIXEL_UNPACK_BUFFER`.
- `srcData`
  - : An {{domxref("ArrayBufferView")}} that be used as a data store for the compressed
    image data in memory.

### Return value

None.

## Examples

```js
gl.compressedTexSubImage3D(gl.TEXTURE_3D, 0, 0, 0, 512, 512, 512, gl.COMPRESSED_R11_EAC, textureData);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.compressedTexSubImage2D()")}}
- {{domxref("WebGLRenderingContext.compressedTexImage2D", "WebGL2RenderingContext.compressedTexImage3D()")}}
