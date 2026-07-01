---
title: "WebGL2RenderingContext: vertexAttribIPointer() method"
short-title: vertexAttribIPointer()
slug: Web/API/WebGL2RenderingContext/vertexAttribIPointer
page-type: web-api-instance-method
browser-compat: api.WebGL2RenderingContext.vertexAttribIPointer
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

The **`WebGL2RenderingContext.vertexAttribIPointer()`** method
of the [WebGL 2 API](/en-US/docs/Web/API/WebGL_API) specifies integer data
formats and locations of vertex attributes in a vertex attributes array.

## Syntax

```js-nolint
vertexAttribIPointer(index, size, type, stride, offset)
```

### Parameters

- `index`
  - : A {{domxref("WebGL_API/Types", "GLuint")}} specifying the index of the vertex attribute that is to be
    modified.
- `size`
  - : A {{domxref("WebGL_API/Types", "GLint")}} specifying the number of components per vertex attribute.
    Must be 1, 2, 3, or 4.
- `type`
  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying the data type of each component in the array.
    Must be one of: `gl.BYTE`, `gl.UNSIGNED_BYTE`,
    `gl.SHORT`, `gl.UNSIGNED_SHORT`, `gl.INT`, or
    `gl.UNSIGNED_INT`.
- `stride`
  - : A {{domxref("WebGL_API/Types", "GLsizei")}} specifying the offset in bytes between the beginning of
    consecutive vertex attributes.
- `offset`
  - : A {{domxref("WebGL_API/Types", "GLintptr")}} specifying an offset in bytes of the first component in
    the vertex attribute array. Must be a multiple of `type`.

### Return value

None ({{jsxref("undefined")}}).

## Description

Very similar to {{domxref("WebGLRenderingContext.vertexAttribPointer()")}}. The main
difference is that while values specified by `vertexAttribPointer` are
always interpreted as floating-point values in the shader (even if they were originally
specified as integers in the buffer), this method allows specifying values which are
interpreted as integers in the shader.

## Examples

### Linear Blend Skinning

```js
// Describe the layout of the buffer:
// 1. position
gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 20, 0);
gl.enableVertexAttribArray(0);
// 2. bone weights, normalized to [0, 1]
gl.vertexAttribPointer(1, 4, gl.UNSIGNED_BYTE, true, 20, 12);
gl.enableVertexAttribArray(1);
// 3. bone indices, interpreted as integer
gl.vertexAttribIPointer(2, 4, gl.UNSIGNED_BYTE, 20, 16);
gl.enableVertexAttribArray(2);

// Connect to attributes from the vertex shader
gl.bindAttribLocation(shaderProgram, 0, "position");
gl.bindAttribLocation(shaderProgram, 1, "boneWeights");
gl.bindAttribLocation(shaderProgram, 2, "boneIndices");
```

```html
<script id="shader-vs" type="x-shader/x-vertex">
  #version 300 es

  uniform mat4 mvMatrix;
  uniform mat4 bones[120];

  in vec3 position;
  in vec4 boneWeights;
  in uvec4 boneIndices;//read as 4-component unsigned integer

  void main() {
      vec4 skinnedPosition =
          bones[boneIndices.s] * vec4(position, 1.0) * boneWeights.s +
          bones[boneIndices.t] * vec4(position, 1.0) * boneWeights.t +
          bones[boneIndices.p] * vec4(position, 1.0) * boneWeights.p +
          bones[boneIndices.q] * vec4(position, 1.0) * boneWeights.q;
      gl_Position = mvMatrix * skinnedPosition;
  }
</script>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.vertexAttribPointer()")}}
