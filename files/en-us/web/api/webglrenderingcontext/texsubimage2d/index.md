---
title: "WebGLRenderingContext: texSubImage2D() method"
short-title: texSubImage2D()
slug: Web/API/WebGLRenderingContext/texSubImage2D
page-type: web-api-instance-method
browser-compat: api.WebGLRenderingContext.texSubImage2D
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

The **`texSubImage2D()`** method of the {{domxref("WebGLRenderingContext")}} interface of the [WebGL API](/en-US/docs/Web/API/WebGL_API) specifies a two-dimensional sub-rectangle for a texture image.

## Syntax

```js-nolint
// WebGL 1:
texSubImage2D(target, level, xoffset, yoffset, width, height, format, type, srcData)
texSubImage2D(target, level, xoffset, yoffset, format, type, source)

// Additionally available in WebGL 2:
texSubImage2D(target, level, xoffset, yoffset, width, height, format, type, srcData, srcOffset)
texSubImage2D(target, level, xoffset, yoffset, width, height, format, type, source)
texSubImage2D(target, level, xoffset, yoffset, width, height, format, type, offset)
```

### Parameters

- `target`
  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying the binding point (target) of the active texture. Possible values:
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
  - : A {{domxref("WebGL_API/Types", "GLint")}} specifying the lower left texel x coordinate of a width-wide by height-wide rectangular subregion of the texture array.
- `yoffset`
  - : A {{domxref("WebGL_API/Types", "GLint")}} specifying the lower left texel y coordinate of a width-wide by height-wide rectangular subregion of the texture array.
- `width`
  - : A {{domxref("WebGL_API/Types", "GLsizei")}} specifying the width of the texture in texels.
- `height`
  - : A {{domxref("WebGL_API/Types", "GLsizei")}} specifying the height of the texture in texels.
- `internalformat`
  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying how the texture should be stored after it's loaded.
- `format`
  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying how each integer element in the raw texel data should be interpreted as color components. In WebGL 1, this must be the same as `internalformat`.
- `type`
  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying the size of each integer element in the raw texel data. For the combinations of `internalformat`, `format`, and `type` available, see {{domxref("WebGLRenderingContext.texImage2D()")}}.

The texture source can be provided in one of three ways: from an {{jsxref("ArrayBuffer")}} (possibly shared) using `srcData` and `srcOffset`; from a DOM pixel `source`; or, in WebGL 2, from `gl.PIXEL_UNPACK_BUFFER` using `offset`.

- `srcData`
  - : A {{jsxref("TypedArray")}} or {{jsxref("DataView")}} containing the compressed texture data. Its type must match the `type` parameter; see {{domxref("WebGLRenderingContext.texImage2D()")}}.
- `srcOffset` {{optional_inline}}
  - : (WebGL 2 only) An integer specifying the index of `srcData` to start reading from. Defaults to `0`.
- `source`
  - : Read from a DOM pixel source, which can be one of:
    - {{domxref("ImageBitmap")}}
    - {{domxref("ImageData")}}
    - {{domxref("HTMLImageElement")}}
    - {{domxref("HTMLCanvasElement")}}
    - {{domxref("HTMLVideoElement")}}
    - {{domxref("OffscreenCanvas")}}
    - {{domxref("VideoFrame")}}

    In WebGL 1, the `width` and `height` are always inferred from the source. In WebGL 2, they can also be explicitly specified.

- `offset`
  - : (WebGL 2 only) A {{domxref("WebGL_API/Types", "GLintptr")}} specifying the starting address in the buffer bound to `gl.PIXEL_UNPACK_BUFFER`.

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, gl.RGBA, gl.UNSIGNED_BYTE, image);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.createTexture()")}}
- {{domxref("WebGLRenderingContext.bindTexture()")}}
- {{domxref("WebGLRenderingContext.texImage2D()")}}
- {{domxref("WebGLRenderingContext.compressedTexImage2D()")}}
- {{domxref("WebGLRenderingContext.copyTexImage2D()")}}
- {{domxref("WebGLRenderingContext.getTexParameter()")}}
- {{domxref("OES_texture_float")}}
- {{domxref("OES_texture_half_float")}}
- {{domxref("EXT_sRGB")}}
- {{domxref("EXT_texture_norm16")}}
