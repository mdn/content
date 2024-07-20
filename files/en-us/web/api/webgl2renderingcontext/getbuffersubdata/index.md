---
title: "WebGL2RenderingContext: getBufferSubData() method"
short-title: getBufferSubData()
slug: Web/API/WebGL2RenderingContext/getBufferSubData
page-type: web-api-instance-method
browser-compat: api.WebGL2RenderingContext.getBufferSubData
---

{{APIRef("WebGL")}}

The **`WebGL2RenderingContext.getBufferSubData()`** method of
the [WebGL 2 API](/en-US/docs/Web/API/WebGL_API) reads data from a buffer
binding point and writes them to an {{jsxref("ArrayBuffer")}} or
{{jsxref("SharedArrayBuffer")}}.

## Syntax

```js-nolint
getBufferSubData(target, srcByteOffset, dstData)
getBufferSubData(target, srcByteOffset, dstData, dstOffset)
getBufferSubData(target, srcByteOffset, dstData, dstOffset, length)
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
      - : Buffer for copying from one buffer object to
        another.
    - `gl.COPY_WRITE_BUFFER`
      - : Buffer for copying from one buffer object to
        another.
    - `gl.TRANSFORM_FEEDBACK_BUFFER`
      - : Buffer for transform feedback
        operations.
    - `gl.UNIFORM_BUFFER`
      - : Buffer used for storing uniform blocks.
    - `gl.PIXEL_PACK_BUFFER`
      - : Buffer used for pixel transfer operations.
    - `gl.PIXEL_UNPACK_BUFFER`
      - : Buffer used for pixel transfer operations.

- `srcByteOffset`
  - : A {{domxref("WebGL_API/Types", "GLintptr")}} specifying the byte offset from which to start reading
    from the buffer.
- `dstData`
  - : A {{jsxref("TypedArray")}} or a {{jsxref("DataView")}} object to copy the data to. If `dstData` is a
    {{jsxref("DataView")}} then `dstOffset` and `length` are
    interpreted in bytes, otherwise `dstData`'s element type is used.
- `dstOffset` {{optional_inline}}
  - : A {{domxref("WebGL_API/Types", "GLuint")}} specifying the element index offset to start writing in
    `dstData`.
- `length` {{optional_inline}}
  - : A {{domxref("WebGL_API/Types", "GLuint")}} specifying the number of elements to copy. If this is 0 or
    not specified, `getBufferSubData` will copy until the end of
    `dstData`.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

An `INVALID_VALUE` error is generated if:

- `offset` + `returnedData.byteLength` would extend beyond the
  end of the buffer
- `returnedData` is [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null)
- `offset` is less than zero.

An `INVALID_OPERATION` error is generated if:

- zero is bound to `target`
- `target` is `TRANSFORM_FEEDBACK_BUFFER`, and any transform
  feedback object is currently active.

## Examples

```js
const buffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

const arrBuffer = new ArrayBuffer(
  vertices.length * Float32Array.BYTES_PER_ELEMENT,
);
gl.getBufferSubData(gl.ARRAY_BUFFER, 0, new Float32Array(arrBuffer));
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.bufferData()")}}
- {{domxref("WebGLRenderingContext.bufferSubData()")}}
- {{domxref("WebGLRenderingContext.getBufferParameter()")}}
- {{domxref("WebGL2RenderingContext.copyBufferSubData()")}}
