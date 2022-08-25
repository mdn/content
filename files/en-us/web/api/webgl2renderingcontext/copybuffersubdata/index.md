---
title: WebGL2RenderingContext.copyBufferSubData()
slug: Web/API/WebGL2RenderingContext/copyBufferSubData
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - WebGL
  - WebGL2
browser-compat: api.WebGL2RenderingContext.copyBufferSubData
---
{{APIRef("WebGL")}}

The **`WebGL2RenderingContext.copyBufferSubData()`** method of
the [WebGL 2 API](/en-US/docs/Web/API/WebGL_API) copies part of the data of a
buffer to another buffer.

## Syntax

```js
copyBufferSubData(readTarget, writeTarget, readOffset, writeOffset, size)
```

### Parameters

- `readTarget writeTarget`

  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying the binding point (target) from whose data store
    should be read or written. Possible values:

    - `gl.ARRAY_BUFFER`: Buffer containing vertex attributes, such as
      vertex coordinates, texture coordinate data, or vertex color data.
    - `gl.ELEMENT_ARRAY_BUFFER`: Buffer used for element indices.
    - `gl.COPY_READ_BUFFER`: Buffer for copying from one buffer object to
      another (provided specifically for copy operations).
    - `gl.COPY_WRITE_BUFFER`: Buffer for copying from one buffer object to
      another (provided specifically for copy operations).
    - `gl.TRANSFORM_FEEDBACK_BUFFER`: Buffer for transform feedback
      operations.
    - `gl.UNIFORM_BUFFER`: Buffer used for storing uniform blocks.
    - `gl.PIXEL_PACK_BUFFER`: Buffer used for pixel transfer operations.
    - `gl.PIXEL_UNPACK_BUFFER`: Buffer used for pixel transfer operations.

- `readOffset writeOffset`
  - : A {{domxref("WebGL_API/Types", "GLintptr")}} specifying the byte offset from which to start reading
    from or writing to the buffer.
- `size`
  - : A {{domxref("WebGL_API/Types", "GLsizei")}} in bytes specifying the size of the data to be copied from
    `readTarget` to `writeTarget`.

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
const srcBuffer = gl.createBuffer();
const dstBuffer = gl.createBuffer();

const data = new Float32Array(vertices);
const length = vertices.length * 4;

gl.bindBuffer(gl.ARRAY_BUFFER, srcBuffer);
gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);
gl.bindBuffer(gl.COPY_READ_BUFFER, srcBuffer);

gl.bindBuffer(gl.ARRAY_BUFFER, dstBuffer);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(length), gl.STATIC_DRAW);

gl.copyBufferSubData(gl.COPY_READ_BUFFER, gl.ARRAY_BUFFER, 0, 0, length);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.bufferData()")}}
- {{domxref("WebGLRenderingContext.bufferSubData()")}}
- {{domxref("WebGLRenderingContext.getBufferParameter()")}}
- {{domxref("WebGL2RenderingContext.getBufferSubData()")}}
