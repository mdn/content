---
title: "WebGLRenderingContext: compressedTexSubImage2D() method"
short-title: compressedTexSubImage2D()
slug: Web/API/WebGLRenderingContext/compressedTexSubImage2D
page-type: web-api-instance-method
browser-compat: api.WebGLRenderingContext.compressedTexSubImage2D
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

The **`compressedTexSubImage2D()`** method of the {{domxref("WebGLRenderingContext")}} interface of the [WebGL API](/en-US/docs/Web/API/WebGL_API) specifies a two-dimensional sub-rectangle for a texture image in a compressed format.

Compressed image formats are only available via the {{domxref("WebGL2RenderingContext")}} or some [WebGL extension](/en-US/docs/Web/API/WebGL_API/Using_Extensions).

## Syntax

```js-nolint
// WebGL 1:
compressedTexSubImage2D(target, level, xoffset, yoffset, width, height, format, srcData)

// Additionally available in WebGL 2:
compressedTexSubImage2D(target, level, xoffset, yoffset, width, height, format, srcData, srcOffset)
compressedTexSubImage2D(target, level, xoffset, yoffset, width, height, format, srcData, srcOffset, srcLengthOverride)
compressedTexSubImage2D(target, level, xoffset, yoffset, width, height, format, imageSize, offset)
```

### Parameters

- `target`
  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying the binding point (target) of the active compressed texture. Possible values:
    - `gl.TEXTURE_2D`: A two-dimensional texture.
    - `gl.TEXTURE_CUBE_MAP_POSITIVE_X`: Positive X face for a cube-mapped texture.
    - `gl.TEXTURE_CUBE_MAP_NEGATIVE_X`: Negative X face for a cube-mapped texture.
    - `gl.TEXTURE_CUBE_MAP_POSITIVE_Y`: Positive Y face for a cube-mapped texture.
    - `gl.TEXTURE_CUBE_MAP_NEGATIVE_Y`: Negative Y face for a cube-mapped texture.
    - `gl.TEXTURE_CUBE_MAP_POSITIVE_Z`: Positive Z face for a cube-mapped texture.
    - `gl.TEXTURE_CUBE_MAP_NEGATIVE_Z`: Negative Z face for a cube-mapped texture.
- `level`
  - : A {{domxref("WebGL_API/Types", "GLint")}} specifying the level of detail. Level 0 is the base image level and level _n_ is the n-th mipmap reduction level.
- `xoffset`
  - : A {{domxref("WebGL_API/Types", "GLint")}} specifying the horizontal offset within the compressed texture image.
- `yoffset`
  - : A {{domxref("WebGL_API/Types", "GLint")}} specifying the vertical offset within the compressed texture image.
- `width`
  - : A {{domxref("WebGL_API/Types", "GLsizei")}} specifying the width of the compressed texture.
- `height`
  - : A {{domxref("WebGL_API/Types", "GLsizei")}} specifying the height of the compressed texture.
- `format`
  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying the compressed image format. For a list of possible values, see {{domxref("WebGLRenderingContext.compressedTexImage2D()")}}.

The texture source can be provided in one of two ways: from an {{jsxref("ArrayBuffer")}} (possibly shared) using `srcData`, `srcOffset`, and `srcLengthOverride`; or, in WebGL 2, from `gl.PIXEL_UNPACK_BUFFER` using `imageSize` and `offset`.

- `srcData`
  - : A {{jsxref("TypedArray")}} or {{jsxref("DataView")}} containing the compressed texture data.
- `srcOffset` {{optional_inline}}
  - : (WebGL 2 only) An integer specifying the index of `srcData` to start reading from. Defaults to `0`.
- `srcLengthOverride` {{optional_inline}}
  - : (WebGL 2 only) An integer specifying the number of elements in `srcData` to read. Defaults to `srcData.length - srcOffset`.
- `imageSize`
  - : (WebGL 2 only) A {{domxref("WebGL_API/Types", "GLsizei")}} specifying the size of the image data in bytes.
- `offset`
  - : (WebGL 2 only) A {{domxref("WebGL_API/Types", "GLintptr")}} specifying the starting address in the buffer bound to `gl.PIXEL_UNPACK_BUFFER`.

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
- {{domxref("WebGL2RenderingContext.compressedTexSubImage3D()")}}
- {{domxref("WebGL2RenderingContext.compressedTexImage3D()")}}
- {{domxref("WEBGL_compressed_texture_s3tc")}}
- {{domxref("WEBGL_compressed_texture_s3tc_srgb")}}
- {{domxref("WEBGL_compressed_texture_etc")}}
- {{domxref("WEBGL_compressed_texture_pvrtc")}}
- {{domxref("WEBGL_compressed_texture_astc")}}
- {{domxref("EXT_texture_compression_bptc")}}
- {{domxref("EXT_texture_compression_rgtc")}}
