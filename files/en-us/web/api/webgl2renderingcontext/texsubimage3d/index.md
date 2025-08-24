---
title: "WebGL2RenderingContext: texSubImage3D() method"
short-title: texSubImage3D()
slug: Web/API/WebGL2RenderingContext/texSubImage3D
page-type: web-api-instance-method
browser-compat: api.WebGL2RenderingContext.texSubImage3D
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

The **`texSubImage3D()`** method of the {{domxref("WebGL2RenderingContext")}} interface of the [WebGL API](/en-US/docs/Web/API/WebGL_API) specifies a three-dimensional sub-rectangle for a texture image.

## Syntax

```js-nolint
texSubImage3D(target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, srcData)
texSubImage3D(target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, srcData, srcOffset)
texSubImage3D(target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, source)
texSubImage3D(target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, offset)
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
- `xoffset`
  - : A {{domxref("WebGL_API/Types", "GLint")}} specifying the x offset within the texture image.
- `yoffset`
  - : A {{domxref("WebGL_API/Types", "GLint")}} specifying the y offset within the texture image.
- `zoffset`
  - : A {{domxref("WebGL_API/Types", "GLint")}} specifying the z offset within the texture image.
- `width`
  - : A {{domxref("WebGL_API/Types", "GLsizei")}} specifying the width of the texture in texels.
- `height`
  - : A {{domxref("WebGL_API/Types", "GLsizei")}} specifying the height of the texture in texels.
- `depth`
  - : A {{domxref("WebGL_API/Types", "GLsizei")}} specifying the depth of the texture/the number of textures in a `TEXTURE_2D_ARRAY`.
- `format`
  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying how each integer element in the raw texel data should be interpreted as color components.
- `type`
  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying the size of each integer element in the raw texel data. For the combinations of `format` and `type` available, see {{domxref("WebGLRenderingContext.texSubImage2D()")}}.

The texture source can be provided in one of three ways: from an {{jsxref("ArrayBuffer")}} (possibly shared) using `srcData` and `srcOffset`; from a DOM pixel `source`; or from `gl.PIXEL_UNPACK_BUFFER` using `offset`.

- `srcData`
  - : A {{jsxref("TypedArray")}} or {{jsxref("DataView")}} containing the compressed texture data. Its type must match the `type` parameter; see {{domxref("WebGL2RenderingContext.texImage2D()")}}.
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
gl.texSubImage3D(
  gl.TEXTURE_3D,
  0,
  0,
  0,
  0,
  image.width,
  image.height,
  1,
  gl.RGBA,
  gl.UNSIGNED_BYTE,
  image,
);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.createTexture()")}}
- {{domxref("WebGLRenderingContext.bindTexture()")}}
- {{domxref("WebGL2RenderingContext.texImage3D()")}}
- {{domxref("WebGL2RenderingContext.compressedTexImage3D()")}}
- {{domxref("WebGL2RenderingContext.copyTexImage3D()")}}
- {{domxref("WebGLRenderingContext.getTexParameter()")}}
- {{domxref("OES_texture_float")}}
- {{domxref("OES_texture_half_float")}}
- {{domxref("EXT_sRGB")}}
- {{domxref("EXT_texture_norm16")}}
