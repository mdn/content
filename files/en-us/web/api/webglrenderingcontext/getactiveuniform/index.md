---
title: "WebGLRenderingContext: getActiveUniform() method"
short-title: getActiveUniform()
slug: Web/API/WebGLRenderingContext/getActiveUniform
page-type: web-api-instance-method
browser-compat: api.WebGLRenderingContext.getActiveUniform
---

{{APIRef("WebGL")}}

The **`WebGLRenderingContext.getActiveUniform()`** method of
the [WebGL API](/en-US/docs/Web/API/WebGL_API) returns a
{{domxref("WebGLActiveInfo")}} object containing size, type, and name of a uniform
attribute. It is generally used when querying unknown uniforms either for debugging or
generic library creation.

## Syntax

```js-nolint
getActiveUniform(program, index)
```

### Parameters

- `program`
  - : A {{domxref("WebGLProgram")}} specifying the WebGL shader program from which to
    obtain the uniform variable's information.
- `index`
  - : A {{domxref("WebGL_API/Types", "GLuint")}} specifying the index of the uniform attribute to get. This
    value is an index 0 to N - 1 as returned
    by {{domxref("WebGLRenderingContext.getProgramParameter",
    "gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS)")}}.

### Return value

A {{domxref("WebGLActiveInfo")}} object describing the uniform.

The `type` attribute of the return value will be one of the following:

- `gl.FLOAT`
- `gl.FLOAT_VEC2`
- `gl.FLOAT_VEC3`
- `gl.FLOAT_VEC4`
- `gl.INT`
- `gl.INT_VEC2`
- `gl.INT_VEC3`
- `gl.INT_VEC4`
- `gl.BOOL`
- `gl.BOOL_VEC2`
- `gl.BOOL_VEC3`
- `gl.BOOL_VEC4`
- `gl.FLOAT_MAT2`
- `gl.FLOAT_MAT3`
- `gl.FLOAT_MAT4`
- `gl.SAMPLER_2D`
- `gl.SAMPLER_CUBE`
- When using a {{domxref("WebGL2RenderingContext", "WebGL 2 context", "", 1)}}, the
  following values are possible additionally:

  - `gl.UNSIGNED_INT`
  - `gl.UNSIGNED_INT_VEC2`
  - `gl.UNSIGNED_INT_VEC3`
  - `gl.UNSIGNED_INT_VEC4`
  - `gl.FLOAT_MAT2x3`
  - `gl.FLOAT_MAT2x4`
  - `gl.FLOAT_MAT3x2`
  - `gl.FLOAT_MAT3x4`
  - `gl.FLOAT_MAT4x2`
  - `gl.FLOAT_MAT4x3`
  - `gl.SAMPLER_3D`
  - `gl.SAMPLER_2D_SHADOW`
  - `gl.SAMPLER_2D_ARRAY`
  - `gl.SAMPLER_2D_ARRAY_SHADOW`
  - `gl.SAMPLER_CUBE_SHADOW`
  - `gl.INT_SAMPLER_2D`
  - `gl.INT_SAMPLER_3D`
  - `gl.INT_SAMPLER_CUBE`
  - `gl.INT_SAMPLER_2D_ARRAY`
  - `gl.UNSIGNED_INT_SAMPLER_2D`
  - `gl.UNSIGNED_INT_SAMPLER_3D`
  - `gl.UNSIGNED_INT_SAMPLER_CUBE`
  - `gl.UNSIGNED_INT_SAMPLER_2D_ARRAY`

When `gl.linkProgram` is called, WebGL creates a list of active uniforms.
These are possible values of the `name` attribute of return values of
{{domxref("WebGLRenderingContext.getActiveUniform()", "getActiveUniform")}}. WebGL
generates one or more entries in the list depending on the declared type of the uniform
in the shader:

- Single basic type: one entry with the name of the uniform. E.g.
  `uniform vec4 a;` will result in `a`.
- Array of basic type: one entry with the name of the uniform suffixed with
  `[0]`. E.g. `uniform vec4 b[];` will result in
  `b[0]`.
- Struct type: one entry for each member of the struct. E.g.
  `uniform struct { float foo; vec4 bar; } c;` will result in
  `c.foo` and `c.bar`.
- Arrays of structs or arrays: each entry of the array will generate its own entries.
  E.g. `uniform struct { float foo; vec4 bar; } d[2];` will result in:

  - `d[0].foo`
  - `d[0].bar`
  - `d[1].foo`
  - `d[1].bar`

- Uniform blocks: one entry for each member. If the uniform block has an instance
  name, the block name is prefixed. E.g. `uniform Block { float foo; };` will
  result in `foo`, and `uniform Block { float bar; } e;` will
  result in `e.bar`.

The `size` attribute of the return value corresponds to the length of the
array for uniforms declared as arrays. Otherwise, it is 1 (this includes interface
blocks instanced with arrays).

### Exceptions

- `gl.INVALID_VALUE` is generated if the program
  {{domxref("WebGLProgram")}} is invalid (not linked, deleted, etc.).
- `gl.INVALID_VALUE` is generated if index is not in the range \[0,
  `gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS)` - 1].

## Examples

```js
const numUniforms = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
for (let i = 0; i < numUniforms; ++i) {
  const info = gl.getActiveUniform(program, i);
  console.log("name:", info.name, "type:", info.type, "size:", info.size);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLActiveInfo")}}
- {{domxref("WebGLRenderingContext.getUniformLocation()")}}
