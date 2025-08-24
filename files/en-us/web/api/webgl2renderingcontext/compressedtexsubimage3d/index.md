---
title: "WebGL2RenderingContext: compressedTexSubImage3D() method"
short-title: compressedTexSubImage3D()
slug: Web/API/WebGL2RenderingContext/compressedTexSubImage3D
page-type: web-api-instance-method
browser-compat: api.WebGL2RenderingContext.compressedTexSubImage3D
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

The **`compressedTexSubImage3D()`** method of the {{domxref("WebGL2RenderingContext")}} interface of the [WebGL API](/en-US/docs/Web/API/WebGL_API) specifies a three-dimensional sub-rectangle for a texture image in a compressed format.

Compressed image formats are only available via some [WebGL extension](/en-US/docs/Web/API/WebGL_API/Using_Extensions).

## Syntax

```js-nolint
compressedTexSubImage3D(target, level, xoffset, yoffset, zoffset, width, height, depth, format, imageSize, offset)

compressedTexSubImage3D(target, level, xoffset, yoffset, zoffset, width, height, depth, format, srcData)
compressedTexSubImage3D(target, level, xoffset, yoffset, zoffset, width, height, depth, format, srcData, srcOffset)
compressedTexSubImage3D(target, level, xoffset, yoffset, zoffset, width, height, depth, format, srcData, srcOffset, srcLengthOverride)
```

### Parameters

- `target`
  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying the binding point (target) of the active compressed texture. Possible values:
    - `gl.TEXTURE_3D`: A three-dimensional texture.
    - `gl.TEXTURE_2D_ARRAY`: A two-dimensional array texture.
- `level`
  - : A {{domxref("WebGL_API/Types", "GLint")}} specifying the level of detail. Level 0 is the base image level and level _n_ is the n-th mipmap reduction level.
- `xoffset`
  - : A {{domxref("WebGL_API/Types", "GLint")}} specifying the x offset within the compressed texture image.
- `yoffset`
  - : A {{domxref("WebGL_API/Types", "GLint")}} specifying the y offset within the compressed texture image.
- `zoffset`
  - : A {{domxref("WebGL_API/Types", "GLint")}} specifying the z offset within the compressed texture image.
- `width`
  - : A {{domxref("WebGL_API/Types", "GLsizei")}} specifying the width of the compressed texture in texels.
- `height`
  - : A {{domxref("WebGL_API/Types", "GLsizei")}} specifying the height of the compressed texture in texels.
- `depth`
  - : A {{domxref("WebGL_API/Types", "GLsizei")}} specifying the depth of the texture/the number of textures in a `TEXTURE_2D_ARRAY`.
- `format`
  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying the compressed image format. Compressed image formats are only available via the {{domxref("WebGL2RenderingContext")}} or some [WebGL extension](/en-US/docs/Web/API/WebGL_API/Using_Extensions). Possible values:
    - Available by default:
      - `gl.GL_COMPRESSED_R11_EAC`
      - `gl.GL_COMPRESSED_SIGNED_R11_EAC`
      - `gl.GL_COMPRESSED_RG11_EAC`
      - `gl.GL_COMPRESSED_SIGNED_RG11_EAC`
      - `gl.GL_COMPRESSED_RGB8_ETC2`
      - `gl.GL_COMPRESSED_SRGB8_ETC2`
      - `gl.GL_COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2`
      - `gl.GL_COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2`
      - `gl.GL_COMPRESSED_RGBA8_ETC2_EAC`
      - `gl.GL_COMPRESSED_SRGB8_ALPHA8_ETC2_EAC`
    - When using {{domxref("WebGL2RenderingContext")}}:
      - `gl.GL_COMPRESSED_R11_EAC`
      - `gl.GL_COMPRESSED_SIGNED_R11_EAC`
      - `gl.GL_COMPRESSED_RG11_EAC`
      - `gl.GL_COMPRESSED_SIGNED_RG11_EAC`
      - `gl.GL_COMPRESSED_RGB8_ETC2`
      - `gl.GL_COMPRESSED_SRGB8_ETC2`
      - `gl.GL_COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2`
      - `gl.GL_COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2`
      - `gl.GL_COMPRESSED_RGBA8_ETC2_EAC`
      - `gl.GL_COMPRESSED_SRGB8_ALPHA8_ETC2_EAC`

    - When using the {{domxref("WEBGL_compressed_texture_s3tc")}} extension:
      - `ext.COMPRESSED_RGB_S3TC_DXT1_EXT`
      - `ext.COMPRESSED_RGBA_S3TC_DXT1_EXT`
      - `ext.COMPRESSED_RGBA_S3TC_DXT3_EXT`
      - `ext.COMPRESSED_RGBA_S3TC_DXT5_EXT`

    - When using the {{domxref("WEBGL_compressed_texture_s3tc_srgb")}} extension:
      - `ext.COMPRESSED_SRGB_S3TC_DXT1_EXT`
      - `ext.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT`
      - `ext.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT`
      - `ext.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT`

    - When using the {{domxref("WEBGL_compressed_texture_etc")}} extension:
      - `ext.COMPRESSED_R11_EAC`
      - `ext.COMPRESSED_SIGNED_R11_EAC`
      - `ext.COMPRESSED_RG11_EAC`
      - `ext.COMPRESSED_SIGNED_RG11_EAC`
      - `ext.COMPRESSED_RGB8_ETC2`
      - `ext.COMPRESSED_RGBA8_ETC2_EAC`
      - `ext.COMPRESSED_SRGB8_ETC2`
      - `ext.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC`
      - `ext.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2`
      - `ext.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2`

    - When using the {{domxref("WEBGL_compressed_texture_pvrtc")}} extension:
      - `ext.COMPRESSED_RGB_PVRTC_4BPPV1_IMG`
      - `ext.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG`
      - `ext.COMPRESSED_RGB_PVRTC_2BPPV1_IMG`
      - `ext.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG`

    - When using the {{domxref("WEBGL_compressed_texture_astc")}} extension:
      - `ext.COMPRESSED_RGBA_ASTC_4x4_KHR`, `ext.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR`
      - `ext.COMPRESSED_RGBA_ASTC_5x4_KHR`, `ext.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR`
      - `ext.COMPRESSED_RGBA_ASTC_5x5_KHR`, `ext.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR`
      - `ext.COMPRESSED_RGBA_ASTC_6x5_KHR`, `ext.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR`
      - `ext.COMPRESSED_RGBA_ASTC_6x6_KHR`, `ext.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR`
      - `ext.COMPRESSED_RGBA_ASTC_8x5_KHR`, `ext.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR`
      - `ext.COMPRESSED_RGBA_ASTC_8x6_KHR`, `ext.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR`
      - `ext.COMPRESSED_RGBA_ASTC_8x8_KHR`, `ext.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR`
      - `ext.COMPRESSED_RGBA_ASTC_10x5_KHR`, `ext.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR`
      - `ext.COMPRESSED_RGBA_ASTC_10x6_KHR`, `ext.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR`
      - `ext.COMPRESSED_RGBA_ASTC_10x6_KHR`, `ext.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR`
      - `ext.COMPRESSED_RGBA_ASTC_10x10_KHR`, `ext.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR`
      - `ext.COMPRESSED_RGBA_ASTC_12x10_KHR`, `ext.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR`
      - `ext.COMPRESSED_RGBA_ASTC_12x12_KHR`, `ext.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR`

    - When using the {{domxref("EXT_texture_compression_bptc")}} extension:
      - `ext.COMPRESSED_RGBA_BPTC_UNORM_EXT`
      - `ext.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT`
      - `ext.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT`
      - `ext.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT`

    - When using the {{domxref("EXT_texture_compression_rgtc")}} extension:
      - `ext.COMPRESSED_RED_RGTC1_EXT`
      - `ext.COMPRESSED_SIGNED_RED_RGTC1_EXT`
      - `ext.COMPRESSED_RED_GREEN_RGTC2_EXT`
      - `ext.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT`

The texture source can be provided in one of two ways: from an {{jsxref("ArrayBuffer")}} (possibly shared) using `srcData`, `srcOffset`, and `srcLengthOverride`; or, in WebGL 2, from `gl.PIXEL_UNPACK_BUFFER` using `imageSize` and `offset`.

- `srcData`
  - : A {{jsxref("TypedArray")}} or {{jsxref("DataView")}} containing the compressed texture data.
- `srcOffset` {{optional_inline}}
  - : An integer specifying the index of `srcData` to start reading from. Defaults to `0`.
- `srcLengthOverride` {{optional_inline}}
  - : An integer specifying the number of elements in `srcData` to read. Defaults to `srcData.length - srcOffset`.
- `imageSize`
  - : A {{domxref("WebGL_API/Types", "GLsizei")}} specifying the size of the image data in bytes.
- `offset`
  - : A {{domxref("WebGL_API/Types", "GLintptr")}} specifying the starting address in the buffer bound to `gl.PIXEL_UNPACK_BUFFER`.

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
gl.compressedTexSubImage3D(
  gl.TEXTURE_3D,
  0,
  0,
  0,
  512,
  512,
  512,
  gl.COMPRESSED_R11_EAC,
  textureData,
);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using WebGL extensions](/en-US/docs/Web/API/WebGL_API/Using_Extensions)
- {{domxref("WebGL2RenderingContext.getExtension()")}}
- {{domxref("WebGLRenderingContext.compressedTexSubImage2D()")}}
- {{domxref("WebGL2RenderingContext.compressedTexImage3D()")}}
- {{domxref("WEBGL_compressed_texture_s3tc")}}
- {{domxref("WEBGL_compressed_texture_s3tc_srgb")}}
- {{domxref("WEBGL_compressed_texture_etc")}}
- {{domxref("WEBGL_compressed_texture_pvrtc")}}
- {{domxref("WEBGL_compressed_texture_astc")}}
- {{domxref("EXT_texture_compression_bptc")}}
- {{domxref("EXT_texture_compression_rgtc")}}
