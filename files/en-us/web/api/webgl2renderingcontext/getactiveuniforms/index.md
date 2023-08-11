---
title: "WebGL2RenderingContext: getActiveUniforms() method"
short-title: getActiveUniforms()
slug: Web/API/WebGL2RenderingContext/getActiveUniforms
page-type: web-api-instance-method
browser-compat: api.WebGL2RenderingContext.getActiveUniforms
---

{{APIRef("WebGL")}}

The **`WebGL2RenderingContext.getActiveUniforms()`** method of
the [WebGL 2 API](/en-US/docs/Web/API/WebGL_API) retrieves information about
active uniforms within a {{domxref("WebGLProgram")}}.

## Syntax

```js-nolint
getActiveUniforms(program, uniformIndices, pname)
```

### Parameters

- `program`
  - : A {{domxref("WebGLProgram")}} containing the active uniforms.
- `uniformIndices`
  - : An {{jsxref("Array")}} of {{domxref("WebGL_API/Types", "GLuint")}} specifying the indices of the active
    uniforms to query.
- `pname`

  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying which information to query. Possible values:

    - `gl.UNIFORM_TYPE`
      - : Returns an {{jsxref("Array")}} of
        {{domxref("WebGL_API/Types", "GLenum")}} indicating the [types of the uniforms](/en-US/docs/Web/API/WebGLRenderingContext/getUniform#return_value).
    - `gl.UNIFORM_SIZE`
      - : Returns an {{jsxref("Array")}} of
        {{domxref("WebGL_API/Types", "GLuint")}} indicating the sizes of the uniforms.
    - `gl.UNIFORM_BLOCK_INDEX`
      - : Returns an {{jsxref("Array")}} of
        {{domxref("WebGL_API/Types", "GLint")}} indicating the block indices of the uniforms.
    - `gl.UNIFORM_OFFSET`
      - : Returns an {{jsxref("Array")}} of
        {{domxref("WebGL_API/Types", "GLint")}} indicating the uniform buffer offsets.
    - `gl.UNIFORM_ARRAY_STRIDE`
      - : Returns an {{jsxref("Array")}} of
        {{domxref("WebGL_API/Types", "GLint")}} indicating the strides between the elements.
    - `gl.UNIFORM_MATRIX_STRIDE`
      - : Returns an {{jsxref("Array")}} of
        {{domxref("WebGL_API/Types", "GLint")}} indicating the strides between columns of a column-major
        matrix or a row-major matrix.
    - `gl.UNIFORM_IS_ROW_MAJOR`
      - : Returns an {{jsxref("Array")}} of
        {{domxref("WebGL_API/Types", "GLboolean")}} indicating whether each of the uniforms is a row-major
        matrix or not.

### Return value

Depends on which information is requested using the `pname` parameter.

## Examples

```js
const uniformIndices = gl.getUniformIndices(program, [
  "UBORed",
  "UBOGreen",
  "UBOBlue",
]);
const uniformOffsets = gl.getActiveUniforms(
  program,
  uniformIndices,
  gl.UNIFORM_OFFSET,
);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGL2RenderingContext.getActiveUniformBlockParameter()")}}
