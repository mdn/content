---
title: WebGL2RenderingContext.uniform[1234][uif][v]()
slug: Web/API/WebGL2RenderingContext/uniform
tags:
  - API
  - Method
  - Reference
  - WebGL
  - WebGL2
  - WebGL2RenderingContext
browser-compat: api.WebGL2RenderingContext.uniform1ui
---
{{APIRef("WebGL")}}

The **`WebGL2RenderingContext.uniform[1234][uif][v]()`**
methods of the [WebGL API](/en-US/docs/Web/API/WebGL_API) specify values of
uniform variables.

> **Note:** `ui` stands for _unsigned integer_, `i` for _integer,_ > `f` for _float_, and `v` for _vector._
> Not all combinations are valid: `u` cannot be combined with `f`.
> See the syntax table below. Equivalent Regex: `uniform[1234](u?i|f)v?`

## Syntax

```js
void gl.uniform1ui(location, v0);
void gl.uniform2ui(location, v0, v1);
void gl.uniform3ui(location, v0, v1, v2);
void gl.uniform4ui(location, v0, v1, v2, v3);
void gl.uniform1fv(location, data, optional srcOffset, optional srcLength);
void gl.uniform2fv(location, data, optional srcOffset, optional srcLength);
void gl.uniform3fv(location, data, optional srcOffset, optional srcLength);
void gl.uniform4fv(location, data, optional srcOffset, optional srcLength);
void gl.uniform1iv(location, data, optional srcOffset, optional srcLength);
void gl.uniform2iv(location, data, optional srcOffset, optional srcLength);
void gl.uniform3iv(location, data, optional srcOffset, optional srcLength);
void gl.uniform4iv(location, data, optional srcOffset, optional srcLength);
void gl.uniform1uiv(location, data, optional srcOffset, optional srcLength);
void gl.uniform2uiv(location, data, optional srcOffset, optional srcLength);
void gl.uniform3uiv(location, data, optional srcOffset, optional srcLength);
void gl.uniform4uiv(location, data, optional srcOffset, optional srcLength);
```

### Parameters

- location
  - : A {{domxref("WebGLUniformLocation")}} object containing the location of the uniform
    attribute to modify.
- `data, v0, v1, v2, v3`

  - : A new value to be used for the uniform variable. Possible types:

    - A {{jsxref("Number")}} for unsigned integer values (methods with
      `ui`), for integer values (methods with `i`), or for floats
      (methods with `f`).
    - A {{jsxref("Uint32Array")}} for unsigned integer vector methods (methods with
      `uiv`).

### Return value

None.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.uniform()")}}
