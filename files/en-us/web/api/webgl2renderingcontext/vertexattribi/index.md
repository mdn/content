---
title: WebGL2RenderingContext.vertexAttribI4[u]i[v]()
slug: Web/API/WebGL2RenderingContext/vertexAttribI
tags:
  - API
  - Method
  - Reference
  - WebGL
  - WebGL2
browser-compat: api.WebGL2RenderingContext.vertexAttribI4i
---
{{APIRef("WebGL")}}

The **`WebGL2RenderingContext.vertexAttribI4[u]i[v]()`**
methods of the [WebGL 2 API](/en-US/docs/Web/API/WebGL_API) specify integer
values for generic vertex attributes.

## Syntax

```js
void gl.vertexAttribI4i(index, v0, v1, v2, v3);
void gl.vertexAttribI4ui(index, v0, v1, v2, v3);

void gl.vertexAttribI4iv(index, value);
void gl.vertexAttribI4uiv(index, value);
```

### Parameters

- `index`
  - : A {{domxref("WebGL_API/Types", "GLuint")}} specifying the position of the vertex attribute to be
    modified.
- `v0, v1, v2, v3`
  - : An integer {{jsxref("Number")}} for the vertex attribute value.
- `value`
  - : A {{jsxref("Uint32Array")}}/{{jsxref("Int32Array")}} or sequences of
    {{domxref("WebGL_API/Types", "GLuint")}}/ {{domxref("WebGL_API/Types", "GLint")}} for integer vector vertex attribute
    values.

### Return value

None.

## Examples

```js
gl.vertexAttribI4i(a_foobar, 10);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.getVertexAttrib()")}}
