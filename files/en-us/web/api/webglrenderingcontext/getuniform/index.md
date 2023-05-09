---
title: "WebGLRenderingContext: getUniform() method"
short-title: getUniform()
slug: Web/API/WebGLRenderingContext/getUniform
page-type: web-api-instance-method
browser-compat: api.WebGLRenderingContext.getUniform
---

{{APIRef("WebGL")}}

The **`WebGLRenderingContext.getUniform()`** method of the [WebGL API](/en-US/docs/Web/API/WebGL_API) returns the value of a uniform
variable at a given location.

## Syntax

```js-nolint
getUniform(program, location)
```

### Parameters

- `program`
  - : A {{domxref("WebGLProgram")}} containing the uniform attribute.
- `location`
  - : A {{domxref("WebGLUniformLocation")}} object containing the location of the uniform
    attribute to get.

### Return value

The returned type depends on the uniform type:

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Uniform type</th>
      <th scope="col">Returned type</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th colspan="2">WebGL 1 only</th>
    </tr>
    <tr>
      <td><code>boolean</code></td>
      <td>{{domxref("WebGL_API/Types", "GLBoolean")}}</td>
    </tr>
    <tr>
      <td><code>int</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
    </tr>
    <tr>
      <td><code>float</code></td>
      <td>{{domxref("WebGL_API/Types", "GLfloat")}}</td>
    </tr>
    <tr>
      <td><code>vec2</code></td>
      <td>{{jsxref("Float32Array")}} (with 2 elements)</td>
    </tr>
    <tr>
      <td><code>ivec2</code></td>
      <td>{{jsxref("Int32Array")}} (with 2 elements)</td>
    </tr>
    <tr>
      <td><code>bvec2</code></td>
      <td>
        {{jsxref("Array")}} of
        {{domxref("WebGL_API/Types", "GLBoolean")}} (with 2
        elements)
      </td>
    </tr>
    <tr>
      <td><code>vec3</code></td>
      <td>{{jsxref("Float32Array")}} (with 3 elements)</td>
    </tr>
    <tr>
      <td><code>ivec3</code></td>
      <td>{{jsxref("Int32Array")}} (with 3 elements)</td>
    </tr>
    <tr>
      <td><code>bvec3</code></td>
      <td>
        {{jsxref("Array")}} of
        {{domxref("WebGL_API/Types", "GLBoolean")}} (with 3
        elements)
      </td>
    </tr>
    <tr>
      <td><code>vec4</code></td>
      <td>{{jsxref("Float32Array")}} (with 4 elements)</td>
    </tr>
    <tr>
      <td><code>ivec4</code></td>
      <td>{{jsxref("Int32Array")}} (with 4 elements)</td>
    </tr>
    <tr>
      <td><code>bvec4</code></td>
      <td>
        {{jsxref("Array")}} of
        {{domxref("WebGL_API/Types", "GLBoolean")}} (with 4
        elements)
      </td>
    </tr>
    <tr>
      <td><code>mat2</code></td>
      <td>{{jsxref("Float32Array")}} (with 4 elements)</td>
    </tr>
    <tr>
      <td><code>mat3</code></td>
      <td>{{jsxref("Float32Array")}} (with 9 elements)</td>
    </tr>
    <tr>
      <td><code>mat4</code></td>
      <td>{{jsxref("Float32Array")}} (with 16 elements)</td>
    </tr>
    <tr>
      <td><code>sampler2D</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
    </tr>
    <tr>
      <td><code>samplerCube</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
    </tr>
    <tr>
      <th colspan="2">Additionally available in WebGL 2</th>
    </tr>
    <tr>
      <td><code>uint</code></td>
      <td>{{domxref("WebGL_API/Types", "GLuint")}}</td>
    </tr>
    <tr>
      <td><code>uvec2</code></td>
      <td>{{jsxref("Uint32Array")}} (with 2 elements)</td>
    </tr>
    <tr>
      <td><code>uvec3</code></td>
      <td>{{jsxref("Uint32Array")}} (with 3 elements)</td>
    </tr>
    <tr>
      <td><code>uvec4</code></td>
      <td>{{jsxref("Uint32Array")}} (with 4 elements)</td>
    </tr>
    <tr>
      <td><code>mat2x3</code></td>
      <td>{{jsxref("Float32Array")}} (with 6 elements)</td>
    </tr>
    <tr>
      <td><code>mat2x4</code></td>
      <td>{{jsxref("Float32Array")}} (with 8 elements)</td>
    </tr>
    <tr>
      <td><code>mat3x2</code></td>
      <td>{{jsxref("Float32Array")}} (with 6 elements)</td>
    </tr>
    <tr>
      <td><code>mat3x4</code></td>
      <td>{{jsxref("Float32Array")}} (with 12 elements)</td>
    </tr>
    <tr>
      <td><code>mat4x2</code></td>
      <td>{{jsxref("Float32Array")}} (with 8 elements)</td>
    </tr>
    <tr>
      <td><code>mat4x3</code></td>
      <td>{{jsxref("Float32Array")}} (with 12 elements)</td>
    </tr>
    <tr>
      <td>any sampler type</td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
    </tr>
  </tbody>
</table>

## Examples

```js
const loc = gl.getUniformLocation(program, "u_foobar");
gl.getUniform(program, loc);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLUniformLocation")}}
- {{domxref("WebGLRenderingContext.getActiveUniform()")}}
