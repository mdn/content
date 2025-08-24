---
title: "WebGL2RenderingContext: texImage3D() method"
short-title: texImage3D()
slug: Web/API/WebGL2RenderingContext/texImage3D
page-type: web-api-instance-method
browser-compat: api.WebGL2RenderingContext.texImage3D
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

The **`texImage3D()`** method of the {{domxref("WebGL2RenderingContext")}} interface of the [WebGL API](/en-US/docs/Web/API/WebGL_API) specifies a three-dimensional texture image.

## Syntax

```js-nolint
texImage3D(target, level, internalformat, width, height, depth, border, format, type, srcData)
texImage3D(target, level, internalformat, width, height, depth, border, format, type, srcData, srcOffset)
texImage3D(target, level, internalformat, width, height, depth, border, format, type, source)
texImage3D(target, level, internalformat, width, height, depth, border, format, type, offset)
```

### Parameters

- `target`
  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying the binding point (target) of the active texture. Possible values:
    - `gl.TEXTURE_3D`: A three-dimensional texture.
    - `gl.TEXTURE_2D_ARRAY`: A two-dimensional array texture.
- `level`
  - : A {{domxref("WebGL_API/Types", "GLint")}} specifying the level of detail. Level 0 is the base image level and level _n_ is the n-th mipmap reduction level.
- `internalformat`
  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying how the texture should be stored after it's loaded.
- `width`
  - : A {{domxref("WebGL_API/Types", "GLsizei")}} specifying the width of the texture in texels.
- `height`
  - : A {{domxref("WebGL_API/Types", "GLsizei")}} specifying the height of the texture in texels.
- `depth`
  - : A {{domxref("WebGL_API/Types", "GLsizei")}} specifying the depth of the texture/the number of textures in a `TEXTURE_2D_ARRAY`.
- `border`
  - : A {{domxref("WebGL_API/Types", "GLint")}} specifying the width of the border. Must be 0.
- `format`
  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying how each integer element in the raw texel data should be interpreted as color components.
- `type`
  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying the size of each integer element in the raw texel data.

    The `internalformat`, `format`, and `type` values must be compatible with each other. For all valid combinations, see {{domxref("WebGLRenderingContext.texImage2D()")}}.

The texture source can be provided in one of three ways: from an {{jsxref("ArrayBuffer")}} (possibly shared) using `srcData` and `srcOffset`; from a DOM pixel `source`; or from `gl.PIXEL_UNPACK_BUFFER` using `offset`.

- `srcData`
  - : A {{jsxref("TypedArray")}} or {{jsxref("DataView")}} containing the compressed texture data. Its type must match the `type` parameter; see {{domxref("WebGLRenderingContext.texImage2D()")}}. When `type` is `FLOAT_32_UNSIGNED_INT_24_8_REV`, `srcData` must be `null`.
- `srcOffset` {{optional_inline}}
  - : An integer specifying the index of `srcData` to start reading from. Defaults to `0`.
- `source`
  - : Read from a DOM pixel source, which can be one of:
    - {{domxref("ImageBitmap")}}
    - {{domxref("ImageData")}}
    - {{domxref("HTMLImageElement")}}
    - {{domxref("HTMLCanvasElement")}}
    - {{domxref("HTMLVideoElement")}}
    - {{domxref("OffscreenCanvas")}}
    - {{domxref("VideoFrame")}}
- `offset`
  - : A {{domxref("WebGL_API/Types", "GLintptr")}} specifying the starting address in the buffer bound to `gl.PIXEL_UNPACK_BUFFER`.

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
gl.texImage3D(
  gl.TEXTURE_3D,
  0, // level
  gl.RGBA, // internalFormat
  1, // width
  1, // height
  1, // depth
  0, // border
  gl.RGBA, // format
  gl.UNSIGNED_BYTE, // type
  new Uint8Array([0xff, 0x00, 0x00, 0x00]),
); // data
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.createTexture()")}}
- {{domxref("WebGLRenderingContext.bindTexture()")}}
- {{domxref("WebGL2RenderingContext.texSubImage3D()")}}
- {{domxref("WebGL2RenderingContext.compressedTexImage3D()")}}
- {{domxref("WebGL2RenderingContext.copyTexImage3D()")}}
- {{domxref("WebGLRenderingContext.getTexParameter()")}}
- {{domxref("WEBGL_depth_texture")}}
- {{domxref("OES_texture_float")}}
- {{domxref("OES_texture_half_float")}}
- {{domxref("EXT_texture_norm16")}}
- {{domxref("EXT_sRGB")}}
