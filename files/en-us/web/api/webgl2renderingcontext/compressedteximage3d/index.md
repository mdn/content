---
title: "WebGL2RenderingContext: compressedTexImage3D() method"
short-title: compressedTexImage3D()
slug: Web/API/WebGL2RenderingContext/compressedTexImage3D
page-type: web-api-instance-method
browser-compat: api.WebGL2RenderingContext.compressedTexImage3D
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

The **`compressedTexImage3D()`** method of the {{domxref("WebGL2RenderingContext")}} interface of the [WebGL API](/en-US/docs/Web/API/WebGL_API) specifies a three-dimensional texture image in a compressed format.

## Syntax

```js-nolint
compressedTexImage3D(target, level, internalformat, width, height, depth, border, imageSize, offset)

compressedTexImage3D(target, level, internalformat, width, height, depth, border, srcData)
compressedTexImage3D(target, level, internalformat, width, height, depth, border, srcData, srcOffset)
compressedTexImage3D(target, level, internalformat, width, height, depth, border, srcData, srcOffset, srcLengthOverride)
```

### Parameters

- `target`
  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying the binding point (target) of the active compressed texture. Possible values:
    - `gl.TEXTURE_3D`: A three-dimensional texture.
    - `gl.TEXTURE_2D_ARRAY`: A two-dimensional array texture.
- `level`
  - : A {{domxref("WebGL_API/Types", "GLint")}} specifying the level of detail. Level 0 is the base image level and level _n_ is the n-th mipmap reduction level.
- `internalformat`
  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying the compressed image format. For a list of possible values, see {{domxref("WebGLRenderingContext.compressedTexImage2D()")}}.
- `width`
  - : A {{domxref("WebGL_API/Types", "GLsizei")}} specifying the width of the texture in texels.
- `height`
  - : A {{domxref("WebGL_API/Types", "GLsizei")}} specifying the height of the texture in texels.
- `depth`
  - : A {{domxref("WebGL_API/Types", "GLsizei")}} specifying the depth of the texture/the number of textures in a `TEXTURE_2D_ARRAY`.
- `border`
  - : A {{domxref("WebGL_API/Types", "GLint")}} specifying the width of the border. Must be 0.

The texture source can be provided in one of two ways: from an {{jsxref("ArrayBuffer")}} (possibly shared) using `srcData`, `srcOffset`, and `srcLengthOverride`; or from `gl.PIXEL_UNPACK_BUFFER` using `imageSize` and `offset`.

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

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using WebGL extensions](/en-US/docs/Web/API/WebGL_API/Using_Extensions)
- {{domxref("WebGL2RenderingContext.getExtension()")}}
- {{domxref("WebGL2RenderingContext.compressedTexSubImage3D()")}}
- {{domxref("WebGLRenderingContext.compressedTexSubImage2D()")}}
- {{domxref("WebGLRenderingContext.compressedTexImage2D()")}}
- {{domxref("WEBGL_compressed_texture_s3tc")}}
- {{domxref("WEBGL_compressed_texture_s3tc_srgb")}}
- {{domxref("WEBGL_compressed_texture_etc")}}
- {{domxref("WEBGL_compressed_texture_pvrtc")}}
- {{domxref("WEBGL_compressed_texture_etc1")}}
- {{domxref("WEBGL_compressed_texture_astc")}}
- {{domxref("EXT_texture_compression_bptc")}}
- {{domxref("EXT_texture_compression_rgtc")}}
