---
title: "WebGLRenderingContext: texSubImage2D() method"
short-title: texSubImage2D()
slug: Web/API/WebGLRenderingContext/texSubImage2D
page-type: web-api-instance-method
browser-compat: api.WebGLRenderingContext.texSubImage2D
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

The **`WebGLRenderingContext.texSubImage2D()`** method of the
[WebGL API](/en-US/docs/Web/API/WebGL_API) specifies a sub-rectangle of the
current texture.

## Syntax

```js-nolint
// WebGL1
texSubImage2D(target, level, xoffset, yoffset, width, height, format, type, pixels) // pixels is a TypedArray or a DataView
texSubImage2D(target, level, xoffset, yoffset, format, type, pixels)

// WebGL2
texSubImage2D(target, level, xoffset, yoffset, width, height, format, type, offset)
texSubImage2D(target, level, xoffset, yoffset, width, height, format, type, source)
texSubImage2D(target, level, xoffset, yoffset, width, height, format, type, pixels, srcOffset)
```

### Parameters

- `target`

  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying the binding point (target) of the active texture.
    Possible values:

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
  - : A {{domxref("WebGL_API/Types", "GLint")}} specifying the lower left texel x coordinate of a width-wide
    by height-wide rectangular subregion of the texture array.
- `yoffset`
  - : A {{domxref("WebGL_API/Types", "GLint")}} specifying the lower left texel y coordinate of a width-wide
    by height-wide rectangular subregion of the texture array.
- `width`
  - : A {{domxref("WebGL_API/Types", "GLsizei")}} specifying the width of the texture in texels.
- `height`
  - : A {{domxref("WebGL_API/Types", "GLsizei")}} specifying the height of the texture in texels.
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

    When using the {{domxref("EXT_sRGB")}} extension:

    - `ext.SRGB_EXT`
    - `ext.SRGB_ALPHA_EXT`

    When using a {{domxref("WebGL2RenderingContext", "WebGL 2 context", "", 1)}},
    the following values are available additionally:

    - `gl.RED`
    - `gl.RG`
    - `gl.RED_INTEGER`
    - `gl.RG_INTEGER`
    - `gl.RGB_INTEGER`
    - `gl.RGBA_INTEGER`

- `type`

  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying the data type of the texel data. Possible values:

    - `gl.UNSIGNED_BYTE`: 8 bits per channel for `gl.RGBA`
    - `gl.UNSIGNED_SHORT_5_6_5`: 5 red bits, 6 green bits, 5 blue bits.
    - `gl.UNSIGNED_SHORT_4_4_4_4`: 4 red bits, 4 green bits, 4 blue bits, 4
      alpha bits.
    - `gl.UNSIGNED_SHORT_5_5_5_1`: 5 red bits, 5 green bits, 5 blue bits, 1
      alpha bit.

    When using the {{domxref("OES_texture_float")}} extension:

    - `gl.FLOAT`

    When using the {{domxref("OES_texture_half_float")}} extension:

    - `gl.HALF_FLOAT_OES`

    When using a {{domxref("WebGL2RenderingContext", "WebGL 2 context", "", 1)}},
    the following values are available additionally:

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

    - {{jsxref("Uint8Array")}} (Must be used if `type` is `gl.UNSIGNED_BYTE`)
    - {{jsxref("Uint16Array")}} (Must be used if `type` is either
      `gl.UNSIGNED_SHORT_5_6_5`, `gl.UNSIGNED_SHORT_4_4_4_4`,
      `gl.UNSIGNED_SHORT_5_5_5_1`, or `ext.HALF_FLOAT_OES`)
    - {{jsxref("Float32Array")}} (Must be used if `type` is `gl.FLOAT`)
    - {{domxref("ImageData")}},
    - {{domxref("HTMLImageElement")}},
    - {{domxref("HTMLCanvasElement")}},
    - {{domxref("HTMLVideoElement")}},
    - {{domxref("ImageBitmap")}}.

- `offset`
  - : (WebGL 2 only) A {{domxref("WebGL_API/Types", "GLintptr")}} byte offset into the
    {{domxref("WebGLBuffer")}}'s data store. Used to upload data to the currently bound
    {{domxref("WebGLTexture")}} from the `WebGLBuffer` bound to the
    `PIXEL_UNPACK_BUFFER` target.

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
