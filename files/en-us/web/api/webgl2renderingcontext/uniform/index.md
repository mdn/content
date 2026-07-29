---
title: "WebGL2RenderingContext: uniform[1234][uif][v]() method"
short-title: uniform[1234][uif][v]()
slug: Web/API/WebGL2RenderingContext/uniform
page-type: web-api-instance-method
browser-compat: api.WebGL2RenderingContext.uniform1ui
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

The **`WebGL2RenderingContext.uniform[1234][uif][v]()`**
methods of the [WebGL API](/en-US/docs/Web/API/WebGL_API) specify values of
uniform variables.

The names of these methods are formed by:

- The number of components in the uniform variable (1, 2, 3, or 4).
- The type of the uniform variable (`i` for integer, `f` for float, `ui` for unsigned integer).
- The presence of a vector (`v`) suffix for vector types.

They can be matched by the regex `uniform[1234](u?i|f)v?`.

Most of these signatures are inherited from the [WebGL 1 API](/en-US/docs/Web/API/WebGLRenderingContext/uniform). WebGL 2 adds the unsigned integer versions, and the additional `srcOffset` and `srcLength` parameters to the vector methods.

## Syntax

```js-nolint
uniform1ui(location, v0)
uniform2ui(location, v0, v1)
uniform3ui(location, v0, v1, v2)
uniform4ui(location, v0, v1, v2, v3)

uniform1fv(location, data)
uniform1fv(location, data, srcOffset)
uniform1fv(location, data, srcOffset, srcLength)

uniform2fv(location, data)
uniform2fv(location, data, srcOffset)
uniform2fv(location, data, srcOffset, srcLength)

uniform3fv(location, data)
uniform3fv(location, data, srcOffset)
uniform3fv(location, data, srcOffset, srcLength)

uniform4fv(location, data)
uniform4fv(location, data, srcOffset)
uniform4fv(location, data, srcOffset, srcLength)

uniform1iv(location, data)
uniform1iv(location, data, srcOffset)
uniform1iv(location, data, srcOffset, srcLength)

uniform2iv(location, data)
uniform2iv(location, data, srcOffset)
uniform2iv(location, data, srcOffset, srcLength)

uniform3iv(location, data)
uniform3iv(location, data, srcOffset)
uniform3iv(location, data, srcOffset, srcLength)

uniform4iv(location, data)
uniform4iv(location, data, srcOffset)
uniform4iv(location, data, srcOffset, srcLength)

uniform1uiv(location, data)
uniform1uiv(location, data, srcOffset)
uniform1uiv(location, data, srcOffset, srcLength)

uniform2uiv(location, data)
uniform2uiv(location, data, srcOffset)
uniform2uiv(location, data, srcOffset, srcLength)

uniform3uiv(location, data)
uniform3uiv(location, data, srcOffset)
uniform3uiv(location, data, srcOffset, srcLength)

uniform4uiv(location, data)
uniform4uiv(location, data, srcOffset)
uniform4uiv(location, data, srcOffset, srcLength)
```

### Parameters

- `location`
  - : A {{domxref("WebGLUniformLocation")}} object containing the location of the uniform
    attribute to modify.
- `data`, `v0`, `v1`, `v2`, `v3`
  - : A new value to be used for the uniform variable. Possible types:
    - A {{jsxref("Number")}} for unsigned integer values (methods with `ui`), for integer values (methods with `i`), or for floats (methods with `f`).
    - A {{jsxref("Uint32Array")}} (or an {{jsxref("Array")}} of unsigned integer numbers) for unsigned integer vector methods (methods with `uiv`).
    - An {{jsxref("Int32Array")}} (or an {{jsxref("Array")}} of integer numbers) for integer vector methods (methods with `iv`).
    - A {{jsxref("Float32Array")}} (or an {{jsxref("Array")}} of numbers) for floating point vector methods (methods with `fv`).
- `srcOffset` {{optional_inline}}
  - : A non-negative integer specifying the index of the first element in the `data` array to be used. Defaults to `0`.
- `srcLength` {{optional_inline}}
  - : A non-negative integer specifying the number of elements in the `data` array to be used. Defaults to `0`, which gets treated as `data.length - srcOffset`. `srcOffset + srcLength` must be less than or equal to `data.length`.

### Return value

None ({{jsxref("undefined")}}).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`WebGLRenderingContext.uniform[1234][fi][v]()`](/en-US/docs/Web/API/WebGLRenderingContext/uniform)
