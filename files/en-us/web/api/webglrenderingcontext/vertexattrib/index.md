---
title: "WebGLRenderingContext: vertexAttrib[1234]f[v]() method"
short-title: vertexAttrib[1234]f[v]()
slug: Web/API/WebGLRenderingContext/vertexAttrib
page-type: web-api-instance-method
browser-compat: api.WebGLRenderingContext.vertexAttrib1f
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

The **`WebGLRenderingContext.vertexAttrib[1234]f[v]()`**
methods of the [WebGL API](/en-US/docs/Web/API/WebGL_API) specify constant
values for generic vertex attributes.

## Syntax

```js-nolint
vertexAttrib1f(index, v0)
vertexAttrib2f(index, v0, v1)
vertexAttrib3f(index, v0, v1, v2)
vertexAttrib4f(index, v0, v1, v2, v3)

vertexAttrib1fv(index, value)
vertexAttrib2fv(index, value)
vertexAttrib3fv(index, value)
vertexAttrib4fv(index, value)
```

### Parameters

- `index`
  - : A {{domxref("WebGL_API/Types", "GLuint")}} specifying the position of the vertex attribute to be
    modified.
- `v0`, `v1`, `v2`, `v3`
  - : A floating point {{jsxref("Number")}} for the vertex attribute value.
- `value`
  - : A {{jsxref("Float32Array")}} for floating point vector vertex attribute values.

### Return value

None ({{jsxref("undefined")}}).

## Description

While vertex attributes are usually used to specify values which are different for each
vertex (using {{domxref("WebGLRenderingContext.vertexAttribPointer()", "vertexAttribPointer")}}), it can be useful to specify a constant value.
For example, if you have a shader which has a `color` vertex attribute, but you want to draw everything in a single color, you can use `vertexAttrib` to achieve that without creating a buffer filled with only one value or having to create a separate shader which uses a uniform for the color.

This value will be used if a bound array buffer has not been enabled with
{{domxref("WebGLRenderingContext.enableVertexAttribArray()", "enableVertexAttribArray")}}.

Attributes may be matrices, in which case columns of the matrix must be loaded into
successive vertex attribute slots.

The values set with `vertexAttrib` are context-global; that is, they aren't part of the shader state
(like generic vertex attribute indexes to shader variable bindings) and aren't part of
the vertex array object state (like enabled vertex attribute arrays). The only way to
change the values is by calling this function again.

## Examples

```js
const a_foobar = gl.getAttribLocation(shaderProgram, "foobar");
// Either set each component individually:
gl.vertexAttrib3f(a_foobar, 10.0, 5.0, 2.0);
// Or provide a Float32Array:
const floatArray = new Float32Array([10.0, 5.0, 2.0]);
gl.vertexAttrib3fv(a_foobar, floatArray);
```

```js
// We want to load the following 3x3 matrix into attribute named "matrix3x3"
// 0 1 2
// 3 4 5
// 6 7 8
const matrix3x3Location = gl.getAttribLocation(shaderProgram, "matrix3x3");
gl.vertexAttrib3f(matrix3x3Location, 0, 3, 6);
gl.vertexAttrib3f(matrix3x3Location + 1, 1, 4, 7);
gl.vertexAttrib3f(matrix3x3Location + 2, 2, 5, 8);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.getVertexAttrib()")}}
