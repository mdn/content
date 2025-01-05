---
title: "WebGL2RenderingContext: bufferSubData() method"
short-title: bufferSubData()
slug: Web/API/WebGL2RenderingContext/bufferSubData
page-type: web-api-instance-method
browser-compat: api.WebGL2RenderingContext.bufferSubData
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

The **`WebGL2RenderingContext.bufferSubData()`** method of the
[WebGL API](/en-US/docs/Web/API/WebGL_API) updates a subset of a buffer
object's data store.

## Syntax

```js-nolint
bufferSubData(target, dstByteOffset, srcData)
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
- `srcOffset` {{optional_inline}}
  - : A {{domxref("WebGL_API/Types", "GLuint")}} specifying the element index offset where to start reading
    the buffer.
- `length` {{optional_inline}}
  - : A {{domxref("WebGL_API/Types", "GLuint")}} defaulting to 0, where 0 means `bufferSubData` should calculate the length.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- A `gl.INVALID_VALUE` error is thrown if the data would be written past
  the end of the buffer or if `data` is `null`.
- A `gl.INVALID_ENUM` error is thrown if `target` is not one of
  the allowed enums.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.bufferSubData()")}}
- {{domxref("WebGLRenderingContext.createBuffer()")}}
- {{domxref("WebGLRenderingContext.bufferData()")}}
- Other buffers: {{domxref("WebGLFramebuffer")}}, {{domxref("WebGLRenderbuffer")}}
