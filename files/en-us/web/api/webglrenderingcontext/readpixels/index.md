---
title: "WebGLRenderingContext: readPixels() method"
short-title: readPixels()
slug: Web/API/WebGLRenderingContext/readPixels
page-type: web-api-instance-method
browser-compat: api.WebGLRenderingContext.readPixels
---

{{APIRef("WebGL")}}

The **`WebGLRenderingContext.readPixels()`** method of the [WebGL API](/en-US/docs/Web/API/WebGL_API) reads a block of pixels from a
specified rectangle of the current color framebuffer into a {{jsxref("TypedArray")}} or a {{jsxref("DataView")}} object.

## Syntax

```js-nolint
// WebGL1:
readPixels(x, y, width, height, format, type, pixels)

// WebGL2:
readPixels(x, y, width, height, format, type, offset)
readPixels(x, y, width, height, format, type, pixels)
readPixels(x, y, width, height, format, type, pixels, dstOffset)
```

### Parameters

- `x`
  - : A {{domxref("WebGL_API/Types", "GLint")}} specifying the first horizontal pixel that is read from the
    lower left corner of a rectangular block of pixels.
- `y`
  - : A {{domxref("WebGL_API/Types", "GLint")}} specifying the first vertical pixel that is read from the
    lower left corner of a rectangular block of pixels.
- `width`
  - : A {{domxref("WebGL_API/Types", "GLsizei")}} specifying the width of the rectangle.
- `height`
  - : A {{domxref("WebGL_API/Types", "GLsizei")}} specifying the height of the rectangle.
- `format`

  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying the format of the pixel data. Possible values:

    - `gl.ALPHA`
      - : Discards the red, green and blue components and reads the
        alpha component.
    - `gl.RGB`
      - : Discards the alpha components and reads the red, green and
        blue components.
    - `gl.RGBA`
      - : Red, green, blue and alpha components are read from the
        color buffer.

    WebGL2 adds

    - `gl.RED`
    - `gl.RG`
    - `gl.RED_INTEGER`
    - `gl.RG_INTEGER`
    - `gl.RGB_INTEGER`
    - `gl.RGBA_INTEGER`

- `type`

  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying the data type of the pixel data. Possible values:

    - `gl.UNSIGNED_BYTE`
    - `gl.UNSIGNED_SHORT_5_6_5`
    - `gl.UNSIGNED_SHORT_4_4_4_4`
    - `gl.UNSIGNED_SHORT_5_5_5_1`
    - `gl.FLOAT`

    WebGL2 adds

    - `gl.BYTE`
    - `gl.UNSIGNED_INT_2_10_10_10_REV`
    - `gl.HALF_FLOAT`
    - `gl.SHORT`
    - `gl.UNSIGNED_SHORT`
    - `gl.INT`
    - `gl.UNSIGNED_INT`
    - `gl.UNSIGNED_INT_10F_11F_11F_REV`
    - `gl.UNSIGNED_INT_5_9_9_9_REV`

- `pixels`

  - : An object to read data into. The array type must
    match the type of the `type` parameter:

    - {{jsxref("Uint8Array")}} for `gl.UNSIGNED_BYTE`.
    - {{jsxref("Uint16Array")}} for `gl.UNSIGNED_SHORT_5_6_5`,
      `gl.UNSIGNED_SHORT_4_4_4_4`, or `gl.UNSIGNED_SHORT_5_5_5_1`.
    - {{jsxref("Float32Array")}} for `gl.FLOAT`.

- `dstOffset` {{optional_inline}}
  - : Offset. Defaults to 0.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- A `gl.INVALID_ENUM` error is thrown if `format` or
  `type` is not an accepted value.
- A `gl.INVALID_OPERATION` error is thrown if

  - `type` is `gl.UNSIGNED_SHORT_5_6_5` and
    `format` is not `gl.RGB`.
  - `type` is `gl.UNSIGNED_SHORT_4_4_4_4` and
    `format` is not `gl.RGBA`.
  - `type` does not match the typed array type of `pixels`.

- A `gl.INVALID_FRAMEBUFFER_OPERATION` error is thrown if the currently
  bound framebuffer is not framebuffer complete.

## Examples

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");
const pixels = new Uint8Array(
  gl.drawingBufferWidth * gl.drawingBufferHeight * 4,
);
gl.readPixels(
  0,
  0,
  gl.drawingBufferWidth,
  gl.drawingBufferHeight,
  gl.RGBA,
  gl.UNSIGNED_BYTE,
  pixels,
);
console.log(pixels); // Uint8Array
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Typed Arrays](/en-US/docs/Web/JavaScript/Typed_arrays)
