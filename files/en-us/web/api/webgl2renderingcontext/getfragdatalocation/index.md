---
title: "WebGL2RenderingContext: getFragDataLocation() method"
short-title: getFragDataLocation()
slug: Web/API/WebGL2RenderingContext/getFragDataLocation
page-type: web-api-instance-method
browser-compat: api.WebGL2RenderingContext.getFragDataLocation
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

The **`WebGL2RenderingContext.getFragDataLocation()`** method
of the [WebGL 2 API](/en-US/docs/Web/API/WebGL_API) returns the binding of
color numbers to user-defined varying out variables.

## Syntax

```js-nolint
getFragDataLocation(program, name)
```

### Parameters

- `program`
  - : A {{domxref("WebGLProgram")}} to query.
- `name`
  - : A string specifying the name of the user-defined varying out
    variable.

### Return value

A {{domxref("WebGL_API/Types", "GLint")}} indicating the assigned color number binding, or `-1`
otherwise.

## Examples

```js
// program is a linked WebGLProgram

gl.getFragDataLocation(program, "fragColor");
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.createProgram()")}}
- {{domxref("WebGLRenderingContext.deleteProgram()")}}
- {{domxref("WebGLRenderingContext.isProgram()")}}
- {{domxref("WebGLRenderingContext.linkProgram()")}}
- {{domxref("WebGLRenderingContext.useProgram()")}}
- {{domxref("WebGLRenderingContext.validateProgram()")}}
- {{domxref("WebGLRenderingContext.getProgramParameter()")}}
- {{domxref("WebGLRenderingContext.getProgramInfoLog()")}}
