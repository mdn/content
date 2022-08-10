---
title: WebGL2RenderingContext.uniform[1234][uif][v]()
slug: Web/API/WebGL2RenderingContext/uniform
page-type: web-api-instance-method
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
- `data, v0, v1, v2, v3`

  - : A new value to be used for the uniform variable. Possible types:

    - A {{jsxref("Number")}} for unsigned integer values (methods with
      `ui`), for integer values (methods with `i`), or for floats
      (methods with `f`).
    - A {{jsxref("Uint32Array")}} for unsigned integer vector methods (methods with
      `uiv`).

### Return value

None ({{jsxref("undefined")}}).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.uniform()")}}
