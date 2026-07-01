---
title: "WebGL2RenderingContext: uniformMatrix[234]x[234]fv() method"
short-title: uniformMatrix[234]x[234]fv()
slug: Web/API/WebGL2RenderingContext/uniformMatrix
page-type: web-api-instance-method
browser-compat: api.WebGL2RenderingContext.uniformMatrix2fv
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

The **`WebGL2RenderingContext.uniformMatrix[234]x[234]fv()`**
methods of the [WebGL 2 API](/en-US/docs/Web/API/WebGL_API) specify matrix
values for uniform variables.

> [!NOTE]
> There are no `2x2`, `3x3`, and `4x4` versions of
> this method. They are abbreviated in `2`, `3`, and
> `4`, respectively. See the syntax below.

## Syntax

```js-nolint
uniformMatrix2fv(location, transpose, data)
uniformMatrix2fv(location, transpose, data, srcOffset)
uniformMatrix2fv(location, transpose, data, srcOffset, srcLength)

uniformMatrix3x2fv(location, transpose, data)
uniformMatrix3x2fv(location, transpose, data, srcOffset)
uniformMatrix3x2fv(location, transpose, data, srcOffset, srcLength)

uniformMatrix4x2fv(location, transpose, data)
uniformMatrix4x2fv(location, transpose, data, srcOffset)
uniformMatrix4x2fv(location, transpose, data, srcOffset, srcLength)

uniformMatrix2x3fv(location, transpose, data)
uniformMatrix2x3fv(location, transpose, data, srcOffset)
uniformMatrix2x3fv(location, transpose, data, srcOffset, srcLength)

uniformMatrix3fv(location, transpose, data)
uniformMatrix3fv(location, transpose, data, srcOffset)
uniformMatrix3fv(location, transpose, data, srcOffset, srcLength)

uniformMatrix4x3fv(location, transpose, data)
uniformMatrix4x3fv(location, transpose, data, srcOffset)
uniformMatrix4x3fv(location, transpose, data, srcOffset, srcLength)

uniformMatrix2x4fv(location, transpose, data)
uniformMatrix2x4fv(location, transpose, data, srcOffset)
uniformMatrix2x4fv(location, transpose, data, srcOffset, srcLength)

uniformMatrix3x4fv(location, transpose, data)
uniformMatrix3x4fv(location, transpose, data, srcOffset)
uniformMatrix3x4fv(location, transpose, data, srcOffset, srcLength)

uniformMatrix4fv(location, transpose, data)
uniformMatrix4fv(location, transpose, data, srcOffset)
uniformMatrix4fv(location, transpose, data, srcOffset, srcLength)
```

### Parameters

- `location`
  - : A {{domxref("WebGLUniformLocation")}} object containing the location of the uniform
    attribute to modify.
- `transpose`
  - : A {{domxref("WebGL_API/Types", "GLboolean")}} specifying whether to transpose the matrix.
- `data`
  - : A {{jsxref("Float32Array")}} of float values.

### Return value

None ({{jsxref("undefined")}}).

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
