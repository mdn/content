---
title: WebGL2RenderingContext.uniformMatrix[234]x[234]fv()
slug: Web/API/WebGL2RenderingContext/uniformMatrix
tags:
  - API
  - Method
  - Reference
  - WebGL
  - WebGL2
browser-compat: api.WebGL2RenderingContext.uniformMatrix2fv
---
{{APIRef("WebGL")}}

The **`WebGL2RenderingContext.uniformMatrix[234]x[234]fv()`**
methods of the [WebGL 2 API](/en-US/docs/Web/API/WebGL_API) specify matrix
values for uniform variables.

> **Note:** There are no `2x2`, `3x3`, and `4x4` versions of
> this method. They are abbreviated in `2`, `3`, and
> `4`, respectively. See the syntax below.

## Syntax

```js
void gl.uniformMatrix2fv(location, transpose, data, optional srcOffset, optional srcLength);
void gl.uniformMatrix3x2fv(location, transpose, data, optional srcOffset, optional srcLength);
void gl.uniformMatrix4x2fv(location, transpose, data, optional srcOffset, optional srcLength);
void gl.uniformMatrix2x3fv(location, transpose, data, optional srcOffset, optional srcLength);
void gl.uniformMatrix3fv(location, transpose, data, optional srcOffset, optional srcLength);
void gl.uniformMatrix4x3fv(location, transpose, data, optional srcOffset, optional srcLength);
void gl.uniformMatrix2x4fv(location, transpose, data, optional srcOffset, optional srcLength);
void gl.uniformMatrix3x4fv(location, transpose, data, optional srcOffset, optional srcLength);
void gl.uniformMatrix4fv(location, transpose, data, optional srcOffset, optional srcLength);
```

### Parameters

- location
  - : A {{domxref("WebGLUniformLocation")}} object containing the location of the uniform
    attribute to modify.
- transpose
  - : A {{domxref("WebGL_API/Types", "GLboolean")}} specifying whether to transpose the matrix. Must be
    `false`.
- data
  - : A {{jsxref("Float32Array")}} of float values.

### Return value

None.

## Examples

```js
gl.uniformMatrix2x3fv(loc, false, [1, 2, 3, 4, 5, 6]);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.uniformMatrix()")}}
