---
title: "WebGLRenderingContext: bindAttribLocation() method"
short-title: bindAttribLocation()
slug: Web/API/WebGLRenderingContext/bindAttribLocation
page-type: web-api-instance-method
browser-compat: api.WebGLRenderingContext.bindAttribLocation
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

The **`WebGLRenderingContext.bindAttribLocation()`** method of
the [WebGL API](/en-US/docs/Web/API/WebGL_API) binds a generic vertex index
to an attribute variable.

## Syntax

```js-nolint
bindAttribLocation(program, index, name)
```

### Parameters

- `program`
  - : A {{domxref("WebGLProgram")}} object to bind.
- `index`
  - : A {{domxref("WebGL_API/Types", "GLuint")}} specifying the index of the generic vertex to bind.
- `name`
  - : A string specifying the name of the variable to bind to the
    generic vertex index. This name cannot start with `"webgl_"` or `"_webgl_"`, as these are
    reserved for use by WebGL.

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
gl.bindAttribLocation(program, colorLocation, "vColor");
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.getActiveAttrib()")}}
- {{domxref("WebGLRenderingContext.getAttribLocation()")}}
- {{domxref("WebGLRenderingContext.getVertexAttrib()")}}
