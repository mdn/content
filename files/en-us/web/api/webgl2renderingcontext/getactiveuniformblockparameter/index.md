---
title: "WebGL2RenderingContext: getActiveUniformBlockParameter() method"
short-title: getActiveUniformBlockParameter()
slug: Web/API/WebGL2RenderingContext/getActiveUniformBlockParameter
page-type: web-api-instance-method
browser-compat: api.WebGL2RenderingContext.getActiveUniformBlockParameter
---

{{APIRef("WebGL")}}

The
**`WebGL2RenderingContext.getActiveUniformBlockParameter()`**
method of the [WebGL 2 API](/en-US/docs/Web/API/WebGL_API) retrieves
information about an active uniform block within a {{domxref("WebGLProgram")}}.

## Syntax

```js-nolint
getActiveUniformBlockParameter(program, uniformBlockIndex, pname)
```

### Parameters

- `program`
  - : A {{domxref("WebGLProgram")}} containing the active uniform block.
- `uniformBlockIndex`
  - : A {{domxref("WebGL_API/Types", "GLuint")}} specifying the index of the active uniform block within the
    program.
- `pname`

  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying which information to query. Possible values:

    - `gl.UNIFORM_BLOCK_BINDING`
      - : Returns a {{domxref("WebGL_API/Types", "GLuint")}}
        indicating the uniform buffer binding point.
    - `gl.UNIFORM_BLOCK_DATA_SIZE`
      - : Returns a {{domxref("WebGL_API/Types", "GLuint")}}
        indicating the minimum total buffer object size.
    - `gl.UNIFORM_BLOCK_ACTIVE_UNIFORMS`
      - : Returns a {{domxref("WebGL_API/Types", "GLuint")}}
        indicating the number of active uniforms in the uniform block.
    - `gl.UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES`
      - : Returns a
        {{jsxref("Uint32Array")}} indicating the list of active uniforms in the uniform
        block.
    - `gl.UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER`
      - : Returns a
        {{domxref("WebGL_API/Types", "GLboolean")}} indicating whether the uniform block is referenced by the
        vertex shader.
    - `gl.UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER`
      - : Returns a
        {{domxref("WebGL_API/Types", "GLboolean")}} indicating whether the uniform block is referenced by the
        fragment shader.

### Return value

Depends on which information is requested using the `pname` parameter. If an
error occurs, [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null) is returned.

## Examples

```js
const blockSize = gl.getActiveUniformBlockParameter(
  program,
  blockIndex,
  gl.UNIFORM_BLOCK_DATA_SIZE,
);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGL2RenderingContext.getActiveUniforms()")}}
