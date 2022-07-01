---
title: WebGLRenderingContext.uniformMatrix[234]fv()
slug: Web/API/WebGLRenderingContext/uniformMatrix
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - Uniform Variables
  - Uniforms
  - WebGL
  - WebGL API
  - WebGLRenderingContext
  - matrices
  - matrix
  - uniformMatrix2fv
  - uniformMatrix3fv
  - uniformMatrix4fv
browser-compat: api.WebGLRenderingContext.uniformMatrix2fv
---
{{APIRef("WebGL")}}

The **`WebGLRenderingContext.uniformMatrix[234]fv()`** methods
of the [WebGL API](/en-US/docs/Web/API/WebGL_API) specify matrix values for
uniform variables.

The three versions of this method (`uniformMatrix2fv()`,
`uniformMatrix3fv()`, and `uniformMatrix4fv()`) take as the input
value 2-component, 3-component, and 4-component square matrices, respectively. They are
expected to have 4, 9 or 16 floats.

## Syntax

```js
uniformMatrix2fv(location, transpose, value)
uniformMatrix3fv(location, transpose, value)
uniformMatrix4fv(location, transpose, value)
```

### Parameters

- `location`
  - : A {{domxref("WebGLUniformLocation")}} object containing the location of the uniform
    attribute to modify. The location is obtained using
    {{domxref("WebGLRenderingContext.getUniformLocation", "getUniformLocation()")}}.
- `transpose`
  - : A {{domxref("WebGL_API/Types", "GLboolean")}} specifying whether to transpose the matrix. Must be
    `false`.
- `value`
  - : A {{jsxref("Float32Array")}} or sequence of `GLfloat` values. The values
    are assumed to be supplied in column major order.

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
gl.uniformMatrix2fv(loc, false, [2,1, 2,2]);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.uniform()")}}
- {{domxref("WebGL2RenderingContext.uniformMatrix()")}} – WebGL 2 versions of these
  methods.
