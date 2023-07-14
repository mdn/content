---
title: "WebGLRenderingContext: bufferData() method"
short-title: bufferData()
slug: Web/API/WebGLRenderingContext/bufferData
page-type: web-api-instance-method
browser-compat: api.WebGLRenderingContext.bufferData
---

{{APIRef("WebGL")}}

The **`WebGLRenderingContext.bufferData()`** method of the [WebGL API](/en-US/docs/Web/API/WebGL_API) initializes and creates the
buffer object's data store.

## Syntax

```js-nolint
// WebGL1
bufferData(target, usage)
bufferData(target, size, usage)
bufferData(target, srcData, usage)

// WebGL2
bufferData(target, usage, srcOffset)
bufferData(target, srcData, usage, srcOffset)
bufferData(target, srcData, usage, srcOffset, length)
```

### Parameters

- `target`

  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying the binding point (target). Possible values:

    - `gl.ARRAY_BUFFER`
      - : Buffer containing vertex attributes, such as
        vertex coordinates, texture coordinate data, or vertex color data.
    - `gl.ELEMENT_ARRAY_BUFFER`

      - : Buffer used for element indices.

    When using a {{domxref("WebGL2RenderingContext", "WebGL 2 context", "", 1)}}, the following values are available additionally:

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

- `size`
  - : A {{domxref("WebGL_API/Types", "GLsizeiptr")}} setting the size in bytes of the buffer object's data
    store.
- `srcData` {{optional_inline}}
  - : An {{jsxref("ArrayBuffer")}}, {{jsxref("SharedArrayBuffer")}}, a {{jsxref("TypedArray")}} or a {{jsxref("DataView")}}
    that will be copied into the data store.
    If `null`, a data store is still created, but the content is uninitialized and undefined.
- `usage`

  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying the intended usage pattern of the data store
    for optimization purposes. Possible values:

    - `gl.STATIC_DRAW`
      - : The contents are intended to be specified
        once by the application, and used many times as the source for WebGL
        drawing and image specification commands.
    - `gl.DYNAMIC_DRAW`
      - : The contents are intended to be respecified
        repeatedly by the application, and used many times as the source for WebGL
        drawing and image specification commands.
    - `gl.STREAM_DRAW`
      - : The contents are intended to be specified
        once by the application, and used at most a few times as the source for
        WebGL drawing and image specification commands.
    - When using a {{domxref("WebGL2RenderingContext", "WebGL 2 context", "",
        1)}}, the following values are available additionally:

      - `gl.STATIC_READ`
        - : The contents are intended to be
          specified once by reading data from WebGL, and queried many times
          by the application.
      - `gl.DYNAMIC_READ`
        - : The contents are intended to be
          respecified repeatedly by reading data from WebGL, and queried
          many times by the application.
      - `gl.STREAM_READ`
        - : The contents are intended to be
          specified once by reading data from WebGL, and queried at most a
          few times by the application
      - `gl.STATIC_COPY`
        - : The contents are intended to be
          specified once by reading data from WebGL, and used many times as
          the source for WebGL drawing and image specification commands.
      - `gl.DYNAMIC_COPY`
        - : The contents are intended to be
          respecified repeatedly by reading data from WebGL, and used many
          times as the source for WebGL drawing and image specification
          commands.
      - `gl.STREAM_COPY`
        - : The contents are intended to be
          specified once by reading data from WebGL, and used at most a few
          times as the source for WebGL drawing and image specification
          commands.

- `srcOffset`
  - : A {{domxref("WebGL_API/Types", "GLuint")}} specifying the element index offset where to start reading
    the buffer.
- `length` {{optional_inline}}
  - : A {{domxref("WebGL_API/Types", "GLuint")}} defaulting to 0.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- A `gl.OUT_OF_MEMORY` error is thrown if the context is unable to create
  a data store with the given `size`.
- A `gl.INVALID_VALUE` error is thrown if `size` is negative.
- A `gl.INVALID_ENUM` error is thrown if `target` or
  `usage` are not one of the allowed enums.

## Examples

### Using bufferData

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");
const buffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
gl.bufferData(gl.ARRAY_BUFFER, 1024, gl.STATIC_DRAW);
```

### Getting buffer information

To check the current buffer usage and buffer size, use the
{{domxref("WebGLRenderingContext.getBufferParameter()")}} method.

```js
gl.getBufferParameter(gl.ARRAY_BUFFER, gl.BUFFER_SIZE);
gl.getBufferParameter(gl.ARRAY_BUFFER, gl.BUFFER_USAGE);
```

### Getting size of a typed array

To calculate size parameter for a typed array.

```js
const dataArray = new Float32Array([1, 2, 3, 4]);
const sizeInBytes = dataArray.length * dataArray.BYTES_PER_ELEMENT;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.createBuffer()")}}
- {{domxref("WebGLRenderingContext.bufferSubData()")}}
- Other buffers: {{domxref("WebGLFramebuffer")}}, {{domxref("WebGLRenderbuffer")}}
