---
title: "WebGLRenderingContext: compressedTexSubImage2D() method"
short-title: compressedTexSubImage2D()
slug: Web/API/WebGLRenderingContext/compressedTexSubImage2D
page-type: web-api-instance-method
browser-compat: api.WebGLRenderingContext.compressedTexSubImage2D
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

The **`WebGLRenderingContext.compressedTexSubImage2D()`**
method of the [WebGL API](/en-US/docs/Web/API/WebGL_API) specifies a
two-dimensional sub-rectangle for a texture image in a compressed format.

Compressed image formats must be enabled by [WebGL extensions](/en-US/docs/Web/API/WebGL_API/Using_Extensions) before
using this method or a {{domxref("WebGL2RenderingContext")}} must be used.

## Syntax

```js-nolint
// WebGL 1:
compressedTexSubImage2D(target, level, xoffset, yoffset, width, height, format, srcData)

// Additionally available in WebGL 2:
compressedTexSubImage2D(target, level, xoffset, yoffset, width, height, format, imageSize, offset)
compressedTexSubImage2D(target, level, xoffset, yoffset, width, height, format, srcData)
compressedTexSubImage2D(target, level, xoffset, yoffset, width, height, format, srcData, srcOffset)
compressedTexSubImage2D(target, level, xoffset, yoffset, width, height, format, srcData, srcOffset, srcLengthOverride)
```

### Parameters

- `target`

  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying the binding point (target) of the active
    compressed texture. Possible values:

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
    level and level _n_ is the n-th mipmap reduction level.
- `xoffset`
  - : A {{domxref("WebGL_API/Types", "GLint")}} specifying the horizontal offset within the compressed
    texture image.
- `yoffset`
  - : A {{domxref("WebGL_API/Types", "GLint")}} specifying the vertical offset within the compressed texture
    image.
- `width`
  - : A {{domxref("WebGL_API/Types", "GLsizei")}} specifying the width of the compressed texture.
- `height`
  - : A {{domxref("WebGL_API/Types", "GLsizei")}} specifying the height of the compressed texture.
- `format`

  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying the compressed image format. Compressed image
    formats must be enabled by [WebGL extensions](/en-US/docs/Web/API/WebGL_API/Using_Extensions) before
    using this method. Possible values:

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

      - `ext.COMPRESSED_RGBA_ASTC_4x4_KHR ext.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR`
      - `ext.COMPRESSED_RGBA_ASTC_5x4_KHR ext.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR`
      - `ext.COMPRESSED_RGBA_ASTC_5x5_KHR ext.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR`
      - `ext.COMPRESSED_RGBA_ASTC_6x5_KHR ext.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR`
      - `ext.COMPRESSED_RGBA_ASTC_6x6_KHR ext.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR`
      - `ext.COMPRESSED_RGBA_ASTC_8x5_KHR ext.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR`
      - `ext.COMPRESSED_RGBA_ASTC_8x6_KHR ext.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR`
      - `ext.COMPRESSED_RGBA_ASTC_8x8_KHR ext.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR`
      - `ext.COMPRESSED_RGBA_ASTC_10x5_KHR ext.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR`
      - `ext.COMPRESSED_RGBA_ASTC_10x6_KHR ext.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR`
      - `ext.COMPRESSED_RGBA_ASTC_10x6_KHR ext.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR`
      - `ext.COMPRESSED_RGBA_ASTC_10x10_KHR ext.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR`
      - `ext.COMPRESSED_RGBA_ASTC_12x10_KHR ext.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR`
      - `ext.COMPRESSED_RGBA_ASTC_12x12_KHR ext.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR`

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

- `imageSize`
  - : A {{domxref("WebGL_API/Types", "GLsizei")}} specifying the number of bytes to read from the buffer
    bound to `gl.PIXEL_UNPACK_BUFFER`.
- `offset`
  - : A {{domxref("WebGL_API/Types", "GLintptr")}} specifying the offset in bytes from which to read from the
    buffer bound to `gl.PIXEL_UNPACK_BUFFER`.
- `srcData`
  - : A {{jsxref("TypedArray")}} or a {{jsxref("DataView")}} that will be used as a data store for the compressed
    image data in memory.

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
const ext =
  gl.getExtension("WEBGL_compressed_texture_s3tc") ||
  gl.getExtension("MOZ_WEBGL_compressed_texture_s3tc") ||
  gl.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
gl.compressedTexSubImage2D(
  gl.TEXTURE_2D,
  0,
  256,
  256,
  512,
  512,
  ext.COMPRESSED_RGBA_S3TC_DXT5_EXT,
  textureData,
);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using WebGL extensions](/en-US/docs/Web/API/WebGL_API/Using_Extensions)
- {{domxref("WebGLRenderingContext.getExtension()")}}
- {{domxref("WebGLRenderingContext.compressedTexImage2D()")}}
- {{domxref("WEBGL_compressed_texture_s3tc")}}
- {{domxref("WEBGL_compressed_texture_s3tc_srgb")}}
- {{domxref("WEBGL_compressed_texture_etc")}}
- {{domxref("WEBGL_compressed_texture_pvrtc")}}
- {{domxref("WEBGL_compressed_texture_astc")}}
- {{domxref("EXT_texture_compression_bptc")}}
- {{domxref("EXT_texture_compression_rgtc")}}
