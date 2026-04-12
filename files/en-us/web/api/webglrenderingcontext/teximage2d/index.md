---
title: "WebGLRenderingContext: texImage2D() method"
short-title: texImage2D()
slug: Web/API/WebGLRenderingContext/texImage2D
page-type: web-api-instance-method
browser-compat: api.WebGLRenderingContext.texImage2D
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

The **`texImage2D()`** method of the {{domxref("WebGLRenderingContext")}} interface of the [WebGL API](/en-US/docs/Web/API/WebGL_API) specifies a two-dimensional texture image.

## Syntax

```js-nolint
// WebGL 1:
texImage2D(target, level, internalformat, width, height, border, format, type, srcData)
texImage2D(target, level, internalformat, format, type, source)

// Additionally available in WebGL 2:
texImage2D(target, level, internalformat, width, height, border, format, type, srcData, srcOffset)
texImage2D(target, level, internalformat, width, height, border, format, type, source)
texImage2D(target, level, internalformat, width, height, border, format, type, offset)
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
- `internalformat`
  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying how the texture should be stored after it's loaded. See below for available values.
- `width`
  - : A {{domxref("WebGL_API/Types", "GLsizei")}} specifying the width of the texture in texels.
- `height`
  - : A {{domxref("WebGL_API/Types", "GLsizei")}} specifying the height of the texture in texels.
- `border`
  - : A {{domxref("WebGL_API/Types", "GLint")}} specifying the width of the border. Must be 0.
- `format`
  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying how each integer element in the raw texel data should be interpreted as color components. In WebGL 1, this must be the same as `internalformat`. See below for available values.
- `type`
  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying the size of each integer element in the raw texel data.

    The `internalformat`, `format`, and `type` values must be compatible with each other. Possible combinations in both WebGL 1 and WebGL 2 (these internal formats are _unsized_ because you can't specify how many bytes each pixel takes internally):

    | `internalformat`  | `format`          | `type`                   | Input bytes per pixel | Input pixel layout (bits per channel) |
    | ----------------- | ----------------- | ------------------------ | --------------------- | ------------------------------------- |
    | `RGB`             | `RGB`             | `UNSIGNED_BYTE`          | 3                     | (R, G, B) = (8, 8, 8)                 |
    | `RGB`             | `RGB`             | `UNSIGNED_SHORT_5_6_5`   | 2                     | (R, G, B) = (5, 6, 5)                 |
    | `RGBA`            | `RGBA`            | `UNSIGNED_BYTE`          | 4                     | (R, G, B, A) = (8, 8, 8, 8)           |
    | `RGBA`            | `RGBA`            | `UNSIGNED_SHORT_4_4_4_4` | 2                     | (R, G, B, A) = (4, 4, 4, 4)           |
    | `RGBA`            | `RGBA`            | `UNSIGNED_SHORT_5_5_5_1` | 2                     | (R, G, B, A) = (5, 5, 5, 1)           |
    | `LUMINANCE_ALPHA` | `LUMINANCE_ALPHA` | `UNSIGNED_BYTE`          | 2                     | (L, A) = (8, 8)                       |
    | `LUMINANCE`       | `LUMINANCE`       | `UNSIGNED_BYTE`          | 1                     | (L) = (8)                             |
    | `ALPHA`           | `ALPHA`           | `UNSIGNED_BYTE`          | 1                     | (A) = (8)                             |

    When the {{domxref("OES_texture_float")}} extension is enabled, `type` can additionally be `FLOAT`. When the {{domxref("OES_texture_half_float")}} extension is enabled, `type` can additionally be `ext.HALF_FLOAT_OES` (constant provided by the extension).

    When the {{domxref("EXT_sRGB")}} extension is enabled, `internalformat` can additionally be `ext.SRGB_EXT` or `ext.SRGB_ALPHA_EXT`.

    In WebGL 2, when specifying the source as `srcData` or `offset`, the following combinations are additionally available (these internal formats are _sized_ because the internal pixel layout is exactly specified; we omit the input layout here because it works similarly to the one above):

    | `internalformat` | `format`       | `type`                                                                   | Internal pixel layout                   | Color renderable | Texture filterable |
    | ---------------- | -------------- | ------------------------------------------------------------------------ | --------------------------------------- | ---------------- | ------------------ |
    | `R8`             | `RED`          | `UNSIGNED_BYTE`                                                          | (R) = (8)                               | Y                | Y                  |
    | `R8_SNORM`       | `RED`          | `BYTE`                                                                   | (R) = (s8)                              |                  | Y                  |
    | `R16F`           | `RED`          | `HALF_FLOAT`, `FLOAT`                                                    | (R) = (f16)                             |                  | Y                  |
    | `R32F`           | `RED`          | `FLOAT`                                                                  | (R) = (f32)                             |                  |                    |
    | `R8UI`           | `RED_INTEGER`  | `UNSIGNED_BYTE`                                                          | (R) = (ui8)                             | Y                |                    |
    | `R8I`            | `RED_INTEGER`  | `BYTE`                                                                   | (R) = (i8)                              | Y                |                    |
    | `R16UI`          | `RED_INTEGER`  | `UNSIGNED_SHORT`                                                         | (R) = (ui16)                            | Y                |                    |
    | `R16I`           | `RED_INTEGER`  | `SHORT`                                                                  | (R) = (i16)                             | Y                |                    |
    | `R32UI`          | `RED_INTEGER`  | `UNSIGNED_INT`                                                           | (R) = (ui32)                            | Y                |                    |
    | `R32I`           | `RED_INTEGER`  | `INT`                                                                    | (R) = (i32)                             | Y                |                    |
    | `RG8`            | `RG`           | `UNSIGNED_BYTE`                                                          | (R, G) = (8, 8)                         | Y                | Y                  |
    | `RG8_SNORM`      | `RG`           | `BYTE`                                                                   | (R, G) = (s8, s8)                       |                  | Y                  |
    | `RG16F`          | `RG`           | `HALF_FLOAT`, `FLOAT`                                                    | (R, G) = (f16, f16)                     |                  | Y                  |
    | `RG32F`          | `RG`           | `FLOAT`                                                                  | (R, G) = (f32, f32)                     |                  |                    |
    | `RG8UI`          | `RG_INTEGER`   | `UNSIGNED_BYTE`                                                          | (R, G) = (ui8, ui8)                     | Y                |                    |
    | `RG8I`           | `RG_INTEGER`   | `BYTE`                                                                   | (R, G) = (i8, i8)                       | Y                |                    |
    | `RG16UI`         | `RG_INTEGER`   | `UNSIGNED_SHORT`                                                         | (R, G) = (ui16, ui16)                   | Y                |                    |
    | `RG16I`          | `RG_INTEGER`   | `SHORT`                                                                  | (R, G) = (i16, i16)                     | Y                |                    |
    | `RG32UI`         | `RG_INTEGER`   | `UNSIGNED_INT`                                                           | (R, G) = (ui32, ui32)                   | Y                |                    |
    | `RG32I`          | `RG_INTEGER`   | `INT`                                                                    | (R, G) = (i32, i32)                     | Y                |                    |
    | `RGB8`           | `RGB`          | `UNSIGNED_BYTE`                                                          | (R, G, B) = (8, 8, 8)                   | Y                | Y                  |
    | `SRGB8`          | `RGB`          | `UNSIGNED_BYTE`                                                          | (R, G, B) = (8, 8, 8)                   |                  | Y                  |
    | `RGB565`         | `RGB`          | `UNSIGNED_BYTE`, `UNSIGNED_SHORT_5_6_5`                                  | (R, G, B) = (5, 6, 5)                   | Y                | Y                  |
    | `RGB8_SNORM`     | `RGB`          | `BYTE`                                                                   | (R, G, B) = (s8, s8, s8)                |                  | Y                  |
    | `R11F_G11F_B10F` | `RGB`          | `UNSIGNED_INT_10F_11F_11F_REV`, `HALF_FLOAT`, `FLOAT`                    | (R, G, B) = (f11, f11, f10)             |                  | Y                  |
    | `RGB9_E5`        | `RGB`          | `UNSIGNED_INT_5_9_9_9_REV`, `HALF_FLOAT`, `FLOAT`                        | (R, G, B) = (f9, f9, f9), 5 shared bits |                  | Y                  |
    | `RGB16F`         | `RGB`          | `HALF_FLOAT`, `FLOAT`                                                    | (R, G, B) = (f16, f16, f16)             |                  | Y                  |
    | `RGB32F`         | `RGB`          | `FLOAT`                                                                  | (R, G, B) = (f32, f32, f32)             |                  |                    |
    | `RGB8UI`         | `RGB_INTEGER`  | `UNSIGNED_BYTE`                                                          | (R, G, B) = (ui8, ui8, ui8)             | Y                |                    |
    | `RGB8I`          | `RGB_INTEGER`  | `BYTE`                                                                   | (R, G, B) = (i8, i8, i8)                | Y                |                    |
    | `RGB16UI`        | `RGB_INTEGER`  | `UNSIGNED_SHORT`                                                         | (R, G, B) = (ui16, ui16, ui16)          | Y                |                    |
    | `RGB16I`         | `RGB_INTEGER`  | `SHORT`                                                                  | (R, G, B) = (i16, i16, i16)             | Y                |                    |
    | `RGB32UI`        | `RGB_INTEGER`  | `UNSIGNED_INT`                                                           | (R, G, B) = (ui32, ui32, ui32)          | Y                |                    |
    | `RGB32I`         | `RGB_INTEGER`  | `INT`                                                                    | (R, G, B) = (i32, i32, i32)             | Y                |                    |
    | `RGBA8`          | `RGBA`         | `UNSIGNED_BYTE`                                                          | (R, G, B, A) = (8, 8, 8, 8)             | Y                | Y                  |
    | `SRGB8_ALPHA8`   | `RGBA`         | `UNSIGNED_BYTE`                                                          | (R, G, B, A) = (8, 8, 8, 8)             | Y                | Y                  |
    | `RGBA8_SNORM`    | `RGBA`         | `BYTE`                                                                   | (R, G, B, A) = (s8, s8, s8, s8)         |                  | Y                  |
    | `RGB5_A1`        | `RGBA`         | `UNSIGNED_BYTE`, `UNSIGNED_SHORT_5_5_5_1`, `UNSIGNED_INT_2_10_10_10_REV` | (R, G, B, A) = (5, 5, 5, 1)             | Y                | Y                  |
    | `RGBA4`          | `RGBA`         | `UNSIGNED_BYTE`, `UNSIGNED_SHORT_4_4_4_4`                                | (R, G, B, A) = (4, 4, 4, 4)             | Y                | Y                  |
    | `RGB10_A2`       | `RGBA`         | `UNSIGNED_INT_2_10_10_10_REV`                                            | (R, G, B, A) = (10, 10, 10, 2)          | Y                | Y                  |
    | `RGBA16F`        | `RGBA`         | `HALF_FLOAT`, `FLOAT`                                                    | (R, G, B, A) = (f16, f16, f16, f16)     |                  | Y                  |
    | `RGBA32F`        | `RGBA`         | `FLOAT`                                                                  | (R, G, B, A) = (f32, f32, f32, f32)     |                  |                    |
    | `RGBA8UI`        | `RGBA_INTEGER` | `UNSIGNED_BYTE`                                                          | (R, G, B, A) = (ui8, ui8, ui8, ui8)     | Y                |                    |
    | `RGBA8I`         | `RGBA_INTEGER` | `BYTE`                                                                   | (R, G, B, A) = (i8, i8, i8, i8)         | Y                |                    |
    | `RGBA10_A2UI`    | `RGBA_INTEGER` | `UNSIGNED_INT_2_10_10_10_REV`                                            | (R, G, B, A) = (ui10, ui10, ui10, ui2)  | Y                |                    |
    | `RGBA16UI`       | `RGBA_INTEGER` | `UNSIGNED_SHORT`                                                         | (R, G, B, A) = (ui16, ui16, ui16, ui16) | Y                |                    |
    | `RGBA16I`        | `RGBA_INTEGER` | `SHORT`                                                                  | (R, G, B, A) = (i16, i16, i16, i16)     | Y                |                    |
    | `RGBA32UI`       | `RGBA_INTEGER` | `UNSIGNED_INT`                                                           | (R, G, B, A) = (ui32, ui32, ui32, ui32) | Y                |                    |
    | `RGBA32I`        | `RGBA_INTEGER` | `INT`                                                                    | (R, G, B, A) = (i32, i32, i32, i32)     | Y                |                    |

    In WebGL 2, when specifying the source as `srcData` or `offset`, the following combinations are additionally available, and they can be enabled in WebGL 1 via the {{domxref("WEBGL_depth_texture")}} extension:

    | `internalformat`     | `format`          | `type`                                              | Internal pixel layout |
    | -------------------- | ----------------- | --------------------------------------------------- | --------------------- |
    | `DEPTH_COMPONENT16`  | `DEPTH_COMPONENT` | `UNSIGNED_SHORT`, `UNSIGNED_INT`                    | (D) = (16)            |
    | `DEPTH_COMPONENT24`  | `DEPTH_COMPONENT` | `UNSIGNED_INT`                                      | (D) = (24)            |
    | `DEPTH_COMPONENT32F` | `DEPTH_COMPONENT` | `FLOAT`                                             | (D) = (f32)           |
    | `DEPTH24_STENCIL8`   | `DEPTH_STENCIL`   | `UNSIGNED_INT_24_8` (`ext.UNSIGNED_INT_24_8_WEBGL`) | (D, S) = (24, 8)      |
    | `DEPTH32F_STENCIL8`  | `DEPTH_STENCIL`   | `FLOAT_32_UNSIGNED_INT_24_8_REV`                    | (D, S) = (f32, 8)     |

    When the data source is a DOM pixel source, commonly each channel's representation is an unsigned integer type of at least 8 bits. Converting such representation to signed integers or unsigned integers with more bits is not clearly defined. For example, when converting `RGBA8` to `RGBA16UI`, it is unclear whether or not the intention is to scale up values to the full range of a 16-bit unsigned integer. Therefore, only converting to unsigned integer of at most 8 bits, half float, or float is allowed.

The texture source can be provided in one of three ways: from an {{jsxref("ArrayBuffer")}} (possibly shared) using `srcData` and `srcOffset`; from a DOM pixel `source`; or, in WebGL 2, from `gl.PIXEL_UNPACK_BUFFER` using `offset`.

- `srcData`
  - : A {{jsxref("TypedArray")}} or {{jsxref("DataView")}} containing the compressed texture data. Its type must match the `type` parameter:

    | `srcData` type                                            | `type` value                                                                                                                   |
    | --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
    | {{jsxref("Int8Array")}}                                   | `BYTE`                                                                                                                         |
    | {{jsxref("Uint8Array")}}, {{jsxref("Uint8ClampedArray")}} | `UNSIGNED_BYTE`                                                                                                                |
    | {{jsxref("Int16Array")}}                                  | `SHORT`                                                                                                                        |
    | {{jsxref("Uint16Array")}}                                 | `UNSIGNED_SHORT`, `UNSIGNED_SHORT_5_6_5`, `UNSIGNED_SHORT_5_5_5_1`, `UNSIGNED_SHORT_4_4_4_4`, `HALF_FLOAT`                     |
    | {{jsxref("Int32Array")}}                                  | `INT`                                                                                                                          |
    | {{jsxref("Uint32Array")}}                                 | `UNSIGNED_INT`, `UNSIGNED_INT_5_9_9_9_REV`, `UNSIGNED_INT_2_10_10_10_REV`, `UNSIGNED_INT_10F_11F_11F_REV`, `UNSIGNED_INT_24_8` |
    | {{jsxref("Float32Array")}}                                | `FLOAT`                                                                                                                        |

    When `type` is `FLOAT_32_UNSIGNED_INT_24_8_REV`, `srcData` must be `null`.

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
gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.createTexture()")}}
- {{domxref("WebGLRenderingContext.bindTexture()")}}
- {{domxref("WebGLRenderingContext.texSubImage2D()")}}
- {{domxref("WebGLRenderingContext.compressedTexImage2D()")}}
- {{domxref("WebGLRenderingContext.copyTexImage2D()")}}
- {{domxref("WebGLRenderingContext.getTexParameter()")}}
- {{domxref("WEBGL_depth_texture")}}
- {{domxref("OES_texture_float")}}
- {{domxref("OES_texture_half_float")}}
- {{domxref("EXT_texture_norm16")}}
- {{domxref("EXT_sRGB")}}
