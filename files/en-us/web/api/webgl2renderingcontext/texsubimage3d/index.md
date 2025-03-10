---
title: "WebGL2RenderingContext: texSubImage3D() method"
short-title: texSubImage3D()
slug: Web/API/WebGL2RenderingContext/texSubImage3D
page-type: web-api-instance-method
browser-compat: api.WebGL2RenderingContext.texSubImage3D
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

The **`WebGL2RenderingContext.texSubImage3D()`** method of the
[WebGL API](/en-US/docs/Web/API/WebGL_API) specifies a sub-rectangle of the
current texture.

## Syntax

```js-nolint
texSubImage3D(target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, pixels)
texSubImage3D(target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, offset)
texSubImage3D(target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, srcData)
texSubImage3D(target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, srcData, srcOffset)
```

### Parameters

- `target`

  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying the binding point (target) of the active texture.
    Possible values:

    - `gl.TEXTURE_3D`: A three-dimensional texture.
    - `gl.TEXTURE_2D_ARRAY`: A two-dimensional array texture.

- `level`
  - : A {{domxref("WebGL_API/Types", "GLint")}} specifying the level of detail. Level 0 is the base image
    level and level _n_ is the n-th mipmap reduction level.
- `xoffset`
  - : A {{domxref("WebGL_API/Types", "GLint")}} specifying the x offset within the texture image.
- `yoffset`
  - : A {{domxref("WebGL_API/Types", "GLint")}} specifying the y offset within the texture image.
- `zoffset`
  - : A {{domxref("WebGL_API/Types", "GLint")}} specifying the z offset within the texture image.
- `width`
  - : A {{domxref("WebGL_API/Types", "GLsizei")}} specifying the width of the texture.
- `height`
  - : A {{domxref("WebGL_API/Types", "GLsizei")}} specifying the height of the texture.
- `depth`
  - : A {{domxref("WebGL_API/Types", "GLsizei")}} specifying the depth of the texture.
- `format`

  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying the format of the texel data. Possible values:

    - `gl.ALPHA`: Discards the red, green and blue components and reads the
      alpha component.
    - `gl.RGB`: Discards the alpha components and reads the red, green and
      blue components.
    - `gl.RGBA`: Red, green, blue and alpha components are read from the
      color buffer.
    - `gl.LUMINANCE`: Each color component is a luminance component, alpha
      is 1.0.
    - `gl.LUMINANCE_ALPHA`: Each component is a luminance/alpha component.
    - `gl.R8`
    - `gl.R16F`
    - `gl.R32F`
    - `gl.R8UI`
    - `gl.RG8`
    - `gl.RG16F`
    - `gl.RG32F`
    - `gl.RGUI`
    - `gl.RGB8`
    - `gl.SRGB8`
    - `gl.RGB565`
    - `gl.R11F_G11F_B10F`
    - `gl.RGB9_E5`
    - `gl.RGB16F`
    - `gl.RGB32F`
    - `gl.RGB8UI`
    - `gl.RGBA8`
    - `gl.SRGB_ALPHA8`
    - `gl.RGB5_A1`
    - `gl.RGBA4444`
    - `gl.RGBA16F`
    - `gl.RGBA32F`
    - `gl.RGBA8UI`

- `type`

  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying the data type of the texel data. Possible values:

    - `gl.UNSIGNED_BYTE`: 8 bits per channel for `gl.RGBA`
    - `gl.UNSIGNED_SHORT_5_6_5`: 5 red bits, 6 green bits, 5 blue bits.
    - `gl.UNSIGNED_SHORT_4_4_4_4`: 4 red bits, 4 green bits, 4 blue bits, 4
      alpha bits.
    - `gl.UNSIGNED_SHORT_5_5_5_1`: 5 red bits, 5 green bits, 5 blue bits, 1
      alpha bit.
    - `gl.BYTE`
    - `gl.UNSIGNED_SHORT`
    - `gl.SHORT`
    - `gl.UNSIGNED_INT`
    - `gl.INT`
    - `gl.HALF_FLOAT`
    - `gl.FLOAT`
    - `gl.UNSIGNED_INT_2_10_10_10_REV`
    - `gl.UNSIGNED_INT_10F_11F_11F_REV`
    - `gl.UNSIGNED_INT_5_9_9_9_REV`
    - `gl.UNSIGNED_INT_24_8`
    - `gl.FLOAT_32_UNSIGNED_INT_24_8_REV` (pixels must be
      [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null))

- `pixels`

  - : One of the following objects can be used as a pixel source for the texture:

    - {{jsxref("Uint8Array")}} (must be used if `type` is `gl.UNSIGNED_BYTE`)
    - {{jsxref("Uint16Array")}} (must be used if `type` is either
      `gl.UNSIGNED_SHORT_5_6_5`, `gl.UNSIGNED_SHORT_4_4_4_4`,
      `gl.UNSIGNED_SHORT_5_5_5_1`, or `ext.HALF_FLOAT_OES`)
    - {{jsxref("Float32Array")}} (must be used if `type` is `gl.FLOAT`)
    - {{domxref("ImageBitmap")}}
    - {{domxref("ImageData")}}
    - {{domxref("HTMLImageElement")}}
    - {{domxref("HTMLCanvasElement")}}
    - {{domxref("HTMLVideoElement")}}

- `srcData`

  - : A {{jsxref("TypedArray")}} or a {{jsxref("DataView")}} object.

- `offset`
  - : A {{domxref("WebGL_API/Types", "GLintptr")}} byte offset into the {{domxref("WebGLBuffer")}}'s data
    store. Used to upload data to the currently bound {{domxref("WebGLTexture")}} from the
    `WebGLBuffer` bound to the `PIXEL_UNPACK_BUFFER` target.

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
- {{domxref("WebGLRenderingContext.texImage2D()")}}
- {{domxref("WebGLRenderingContext.compressedTexImage2D()")}}
- {{domxref("WebGLRenderingContext.copyTexImage2D()")}}
- {{domxref("WebGLRenderingContext.getTexParameter()")}}
