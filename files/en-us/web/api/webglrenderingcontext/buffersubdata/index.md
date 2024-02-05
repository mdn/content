---
title: "WebGLRenderingContext: bufferSubData() method"
short-title: bufferSubData()
slug: Web/API/WebGLRenderingContext/bufferSubData
page-type: web-api-instance-method
browser-compat: api.WebGLRenderingContext.bufferSubData
---

{{APIRef("WebGL")}}

The **`WebGLRenderingContext.bufferSubData()`** method of the
[WebGL API](/en-US/docs/Web/API/WebGL_API) updates a subset of a buffer
object's data store.

## Syntax

```js-nolint
// WebGL1
bufferSubData(target, offset)
bufferSubData(target, offset, srcData)

// WebGL2
bufferSubData(target, dstByteOffset, srcOffset)
bufferSubData(target, dstByteOffset, srcData, srcOffset)
bufferSubData(target, dstByteOffset, srcData, srcOffset, length)
```

### Parameters

- `target`

  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying the binding point (target). Possible values:

    - `gl.ARRAY_BUFFER`
      - : Buffer containing vertex attributes, such as
        vertex coordinates, texture coordinate data, or vertex color data.
    - `gl.ELEMENT_ARRAY_BUFFER`

      - : Buffer used for element indices.

    When using a {{domxref("WebGL2RenderingContext", "WebGL 2 context", "", 1)}},
    the following values are available additionally:

    - `gl.COPY_READ_BUFFER`
      - : Buffer for copying from one buffer object to another.
    - `gl.COPY_WRITE_BUFFER`
      - : Buffer for copying from one buffer object to another.
    - `gl.TRANSFORM_FEEDBACK_BUFFER`
      - : Buffer for transform feedback operations.
    - `gl.UNIFORM_BUFFER`
      - : Buffer used for storing uniform blocks.
    - `gl.PIXEL_PACK_BUFFER`
      - : Buffer used for pixel transfer operations.
    - `gl.PIXEL_UNPACK_BUFFER`
      - : Buffer used for pixel transfer operations.

- `dstByteOffset`
  - : A {{domxref("WebGL_API/Types", "GLintptr")}} specifying an offset in bytes where the data replacement
    will start.
- `srcData` {{optional_inline}}
  - : An {{jsxref("ArrayBuffer")}}, {{jsxref("SharedArrayBuffer")}}, a {{jsxref("DataView")}}, or a {{jsxref("TypedArray")}}
    that will be copied into the data store.
- `srcOffset`
  - : A {{domxref("WebGL_API/Types", "GLuint")}} specifying the element index offset where to start reading
    the buffer.
- `length` {{optional_inline}}
  - : A {{domxref("WebGL_API/Types", "GLuint")}} defaulting to 0.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- A `gl.INVALID_VALUE` error is thrown if the data would be written past
  the end of the buffer or if `data` is `null`.
- A `gl.INVALID_ENUM` error is thrown if `target` is not one of
  the allowed enums.

## Examples

### Using `bufferSubData`

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");
const buffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
gl.bufferData(gl.ARRAY_BUFFER, 1024, gl.STATIC_DRAW);
gl.bufferSubData(gl.ARRAY_BUFFER, 512, data);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.createBuffer()")}}
- {{domxref("WebGLRenderingContext.bufferData()")}}
- Other buffers: {{domxref("WebGLFramebuffer")}}, {{domxref("WebGLRenderbuffer")}}
