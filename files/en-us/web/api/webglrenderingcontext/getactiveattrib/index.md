---
title: WebGLRenderingContext.getActiveAttrib()
slug: Web/API/WebGLRenderingContext/getActiveAttrib
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - WebGL
  - WebGLRenderingContext
browser-compat: api.WebGLRenderingContext.getActiveAttrib
---
{{APIRef("WebGL")}}

The **`WebGLRenderingContext.getActiveAttrib()`** method of the
[WebGL API](/en-US/docs/Web/API/WebGL_API) returns a
{{domxref("WebGLActiveInfo")}} object containing size, type, and name of a vertex
attribute. It is generally used when querying unknown attributes either for debugging or
generic library creation.

## Syntax

```js
getActiveAttrib(program, index)
```

### Parameters

- `program`
  - : A {{domxref("WebGLProgram")}} containing the vertex attribute.
- `index`
  - : A {{domxref("WebGL_API/Types", "GLuint")}} specifying the index of the vertex attribute to get. This
    value is an index 0 to N - 1 as returned
    by {{domxref("WebGLRenderingContext.getProgramParameter",
    "gl.getProgramParameter(program, gl.ACTIVE_ATTRIBUTES)")}}.

### Return value

A {{domxref("WebGLActiveInfo")}} object.

## Examples

```js
const numAttribs = gl.getProgramParameter(program, gl.ACTIVE_ATTRIBUTES);
for (let i = 0; i < numAttribs; ++i) {
  const info = gl.getActiveAttrib(program, i);
  console.log('name:', info.name, 'type:', info.type, 'size:', info.size);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLActiveInfo")}}
