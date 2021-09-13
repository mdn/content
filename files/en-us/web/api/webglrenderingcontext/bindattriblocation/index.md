---
title: WebGLRenderingContext.bindAttribLocation()
slug: Web/API/WebGLRenderingContext/bindAttribLocation
tags:
  - API
  - Method
  - Reference
  - WebGL
  - WebGLRenderingContext
browser-compat: api.WebGLRenderingContext.bindAttribLocation
---
{{APIRef("WebGL")}}

The **`WebGLRenderingContext.bindAttribLocation()`** method of
the [WebGL API](/en-US/docs/Web/API/WebGL_API) binds a generic vertex index
to an attribute variable.

## Syntax

```js
void gl.bindAttribLocation(program, index, name);
```

### Parameters

- `program`
  - : A {{domxref("WebGLProgram")}} object to bind.
- index
  - : A {{domxref("WebGL_API/Types", "GLuint")}} specifying the index of the generic vertex to bind.
- name
  - : A {{domxref("DOMString")}} specifying the name of the variable to bind to the
    generic vertex index. This name cannot start with "webgl\_" or "\_webgl\_", as these are
    reserved for use by WebGL.

### Return value

None.

## Examples

```js
gl.bindAttribLocation(program, colorLocation, 'vColor');
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.getActiveAttrib()")}}
- {{domxref("WebGLRenderingContext.getAttribLocation()")}}
- {{domxref("WebGLRenderingContext.getVertexAttrib()")}}
