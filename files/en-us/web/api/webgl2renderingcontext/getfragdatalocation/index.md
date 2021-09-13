---
title: WebGL2RenderingContext.getFragDataLocation()
slug: Web/API/WebGL2RenderingContext/getFragDataLocation
tags:
  - API
  - Method
  - Reference
  - WebGL
  - WebGL2
browser-compat: api.WebGL2RenderingContext.getFragDataLocation
---
{{APIRef("WebGL")}}

The **`WebGL2RenderingContext.getFragDataLocation()`** method
of the [WebGL 2 API](/en-US/docs/Web/API/WebGL_API) returns the binding of
color numbers to user-defined varying out variables.

## Syntax

```js
GLint gl.getFragDataLocation(program, name);
```

### Parameters

- program
  - : A {{domxref("WebGLProgram")}} to query.
- name
  - : A {{domxref("DOMString")}} specifying the name of the user-defined varying out
    variable.

### Return value

A {{domxref("WebGL_API/Types", "GLint")}} indicating the assigned color number binding, or `-1`
otherwise.

## Examples

```js
// program is a linked WebGLProgram

gl.getFragDataLocation(program, 'fragColor');
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
