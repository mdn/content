---
title: "WebGL2RenderingContext: vertexAttribI4[u]i[v]() method"
short-title: vertexAttribI4[u]i[v]()
slug: Web/API/WebGL2RenderingContext/vertexAttribI
page-type: web-api-instance-method
browser-compat: api.WebGL2RenderingContext.vertexAttribI4i
---

{{APIRef("WebGL")}}

The **`WebGL2RenderingContext.vertexAttribI4[u]i[v]()`**
methods of the [WebGL 2 API](/en-US/docs/Web/API/WebGL_API) specify integer
values for generic vertex attributes.

## Syntax

```js-nolint
vertexAttribI4i(index, v0, v1, v2, v3)
vertexAttribI4ui(index, v0, v1, v2, v3)
vertexAttribI4iv(index, value)
vertexAttribI4uiv(index, value)
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

None ({{jsxref("undefined")}}).

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
