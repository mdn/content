---
title: WebGLRenderingContext.bufferData()
slug: Web/API/WebGLRenderingContext/bufferData
tags:
  - API
  - Buffer
  - Graphics
  - Method
  - Reference
  - WebGL
  - WebGLRenderingContext
browser-compat: api.WebGLRenderingContext.bufferData
---
{{APIRef("WebGL")}}

> **Note:** This page describes the WebGL 1 version of this method. [`WebGL2RenderingContext.bufferData()`](/en-US/docs/Web/API/WebGL2RenderingContext/bufferData) is the WebGL 2 version of this method.

The **`WebGLRenderingContext.bufferData()`** method of the [WebGL API](/en-US/docs/Web/API/WebGL_API) initializes and creates the
buffer object's data store.

## Syntax

```js
void gl.bufferData(target, size, usage);
void gl.bufferData(target, ArrayBuffer? srcData, usage);
void gl.bufferData(target, ArrayBufferView srcData, usage);
```

### Parameters

- `target`

  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying the binding point (target). Possible values:

    - `gl.ARRAY_BUFFER`: Buffer containing vertex attributes, such as
      vertex coordinates, texture coordinate data, or vertex color data.
    - `gl.ELEMENT_ARRAY_BUFFER`: Buffer used for element indices.

- `size`
  - : A {{domxref("WebGL_API/Types", "GLsizeiptr")}} setting the size in bytes of the buffer object's data
    store.
- `srcData` {{optional_inline}}
  - : An {{jsxref("ArrayBuffer")}}, {{jsxref("SharedArrayBuffer")}} or one of the
    {{domxref("ArrayBufferView")}} typed array types that will be copied into the data
    store. If `null`, a data store is still created, but the content is
    uninitialized and undefined.
- `usage`

  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying the intended usage pattern of the data store
    for optimization purposes. Possible values:

    - `gl.STATIC_DRAW`: The contents are intended to be specified
      once by the application, and used many times as the source for WebGL
      drawing and image specification commands.
    - `gl.DYNAMIC_DRAW`: The contents are intended to be respecified
      repeatedly by the application, and used many times as the source for WebGL
      drawing and image specification commands.
    - `gl.STREAM_DRAW`: The contents are intended to be specified
      once by the application, and used at most a few times as the source for
      WebGL drawing and image specification commands.

- `srcOffset`
  - : A {{domxref("WebGL_API/Types", "GLuint")}} specifying the element index offset where to start reading
    the buffer.
- `length` {{optional_inline}}
  - : A {{domxref("WebGL_API/Types", "GLuint")}} defaulting to 0.

### Return value

None.

### Exceptions

- A `gl.OUT_OF_MEMORY` error is thrown if the context is unable to create
  a data store with the given `size`.
- A `gl.INVALID_VALUE` error is thrown if `size` is negative.
- A `gl.INVALID_ENUM` error is thrown if `target` or
  `usage` are not one of the allowed enums.

## Examples

### Using bufferData

```js
var canvas = document.getElementById('canvas');
var gl = canvas.getContext('webgl');
var buffer = gl.createBuffer();
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
var dataArray = new Float32Array([1, 2, 3, 4]);
var sizeInBytes = dataArray.length * dataArray.BYTES_PER_ELEMENT;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.createBuffer()")}}
- {{domxref("WebGLRenderingContext.bufferSubData()")}}
- Other buffers: {{domxref("WebGLFramebuffer")}}, {{domxref("WebGLRenderbuffer")}}
