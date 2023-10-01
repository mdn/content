---
title: "WebGLRenderingContext: compressedTexImage[23]D() method"
short-title: compressedTexImage[23]D()
slug: Web/API/WebGLRenderingContext/compressedTexImage2D
page-type: web-api-instance-method
browser-compat:
  - api.WebGLRenderingContext.compressedTexImage2D
  - api.WebGL2RenderingContext.compressedTexImage3D
---

{{APIRef("WebGL")}}

The **`WebGLRenderingContext.compressedTexImage2D()`**
and **`WebGL2RenderingContext.compressedTexImage3D()`** methods
of the [WebGL API](/en-US/docs/Web/API/WebGL_API) specify a two- or
three-dimensional texture image in a compressed format.

Compressed image formats must be enabled by [WebGL extensions](/en-US/docs/Web/API/WebGL_API/Using_Extensions) before
using these methods.

## Syntax

```js-nolint
// WebGL 1:
compressedTexImage2D(target, level, internalformat, width, height, border)
compressedTexImage2D(target, level, internalformat, width, height, border, pixels)

// Additionally available in WebGL 2:
// read from buffer bound to gl.PIXEL_UNPACK_BUFFER
compressedTexImage2D(target, level, internalformat, width, height, border, imageSize, offset)
compressedTexImage2D(target, level, internalformat, width, height, border, srcData)
compressedTexImage2D(target, level, internalformat, width, height, border, srcData, srcOffset)
compressedTexImage2D(target, level, internalformat, width, height, border, srcData, srcOffset, srcLengthOverride)

// read from buffer bound to gl.PIXEL_UNPACK_BUFFER
compressedTexImage3D(target, level, internalformat, width, height, depth, border, imageSize, offset)

compressedTexImage3D(target, level, internalformat, width, height, depth, border, srcData)
compressedTexImage3D(target, level, internalformat, width, height, depth, border, srcData, srcOffset)
compressedTexImage3D(target, level, internalformat, width, height, depth, border, srcData, srcOffset, srcLengthOverride)
```

### Parameters

- `target`

  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying the binding point (target) of the active texture.
    Possible values for `compressedTexImage2D`:

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

    Possible values for `compressedTexImage3D`:

    - `gl.TEXTURE_2D_ARRAY`
    - `gl.TEXTURE_3D`

- `level`
  - : A {{domxref("WebGL_API/Types", "GLint")}} specifying the level of detail. Level 0 is the base image
    level and level _n_ is the n-th mipmap reduction level.
- `internalformat`

  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying the compressed image format. Compressed image
    formats must be enabled by [WebGL extensions](/en-US/docs/Web/API/WebGL_API/Using_Extensions) before
    using this method. All values are possible for `compressedTexImage2D`. See
    [compressed texture formats](/en-US/docs/Web/API/WebGL_API/Compressed_texture_formats) for which are valid for `compressedTexImage3D`. Possible
    values:

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

    - When using the {{domxref("WEBGL_compressed_texture_etc1")}} extension:

      - `ext.COMPRESSED_RGB_ETC1_WEBGL`

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

- `width`
  - : A {{domxref("WebGL_API/Types", "GLsizei")}} specifying the width of the texture.
- `height`
  - : A {{domxref("WebGL_API/Types", "GLsizei")}} specifying the height of the texture.
- `depth`
  - : A {{domxref("WebGL_API/Types", "GLsizei")}} specifying the depth of the texture/the number of textures
    in a `TEXTURE_2D_ARRAY`.
- `border`
  - : A {{domxref("WebGL_API/Types", "GLint")}} specifying the width of the border. Must be 0.
- `imageSize`
  - : A {{domxref("WebGL_API/Types", "GLsizei")}} specifying the number of bytes to read from the buffer
    bound to `gl.PIXEL_UNPACK_BUFFER`.
- `offset`
  - : A {{domxref("WebGL_API/Types", "GLintptr")}} specifying the offset in bytes from which to read from the
    buffer bound to `gl.PIXEL_UNPACK_BUFFER`.
- `pixels`
  - : A {{jsxref("TypedArray")}} or a {{jsxref("DataView")}} that will be used as a data store for the
    compressed image data in memory.

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
const ext =
  gl.getExtension("WEBGL_compressed_texture_s3tc") ||
  gl.getExtension("MOZ_WEBGL_compressed_texture_s3tc") ||
  gl.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");

const texture = gl.createTexture();
gl.bindTexture(gl.TEXTURE_2D, texture);
gl.compressedTexImage2D(
  gl.TEXTURE_2D,
  0,
  ext.COMPRESSED_RGBA_S3TC_DXT5_EXT,
  512,
  512,
  0,
  textureData,
);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using WebGL extensions](/en-US/docs/Web/API/WebGL_API/Using_Extensions)
- {{domxref("WebGLRenderingContext.compressedTexSubImage2D()")}}
- {{domxref("WEBGL_compressed_texture_s3tc")}}
- {{domxref("WEBGL_compressed_texture_s3tc_srgb")}}
- {{domxref("WEBGL_compressed_texture_etc")}}
- {{domxref("WEBGL_compressed_texture_pvrtc")}}
- {{domxref("WEBGL_compressed_texture_etc1")}}
- {{domxref("WEBGL_compressed_texture_astc")}}
- {{domxref("EXT_texture_compression_bptc")}}
- {{domxref("EXT_texture_compression_rgtc")}}
