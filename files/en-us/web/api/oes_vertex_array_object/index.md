---
title: OES_vertex_array_object extension
short-title: OES_vertex_array_object
slug: Web/API/OES_vertex_array_object
page-type: webgl-extension
browser-compat: api.OES_vertex_array_object
---

{{APIRef("WebGL")}}

The **OES_vertex_array_object** extension is part of the [WebGL API](/en-US/docs/Web/API/WebGL_API) and provides vertex array objects (VAOs) which encapsulate vertex array states. These objects keep pointers to vertex data and provide names for different sets of vertex data.

WebGL extensions are available using the {{domxref("WebGLRenderingContext.getExtension()")}} method. For more information, see also [Using Extensions](/en-US/docs/Web/API/WebGL_API/Using_Extensions) in the [WebGL tutorial](/en-US/docs/Web/API/WebGL_API/Tutorial).

> **Note:** This extension is only available to {{domxref("WebGLRenderingContext", "WebGL1", "", 1)}} contexts. In {{domxref("WebGL2RenderingContext", "WebGL2", "", 1)}}, the functionality of this extension is available on the WebGL2 context by default and the constants and methods are available without the "`OES`" suffix.

## Constants

This extension exposes one new constant, which can be used in the {{domxref("WebGLRenderingContext.getParameter()", "gl.getParameter()")}} method:

- `ext.VERTEX_ARRAY_BINDING_OES`
  - : Returns a {{domxref("WebGLVertexArrayObject")}} object when used in the {{domxref("WebGLRenderingContext.getParameter()", "gl.getParameter()")}} method as the `pname` parameter.

## Instance methods

This extension exposes four new methods.

- {{domxref("OES_vertex_array_object.createVertexArrayOES()", "ext.createVertexArrayOES()")}}
  - : Creates a new {{domxref("WebGLVertexArrayObject")}}.
- {{domxref("OES_vertex_array_object.deleteVertexArrayOES()", "ext.deleteVertexArrayOES()")}}
  - : Deletes a given {{domxref("WebGLVertexArrayObject")}}.
- {{domxref("OES_vertex_array_object.isVertexArrayOES()", "ext.isVertexArrayOES()")}}
  - : Returns `true` if a given object is a {{domxref("WebGLVertexArrayObject")}}.
- {{domxref("OES_vertex_array_object.bindVertexArrayOES()", "ext.bindVertexArrayOES()")}}
  - : Binds a given {{domxref("WebGLVertexArrayObject")}} to the buffer.

## Examples

```js
const oes_vao_ext = gl.getExtension("OES_vertex_array_object");
const vao = oes_vao_ext.createVertexArrayOES();
oes_vao_ext.bindVertexArrayOES(vao);

// …
// calls to bindBuffer or vertexAttribPointer
// which will be "recorded" in the VAO
// …
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.getExtension()")}}
- {{domxref("WebGLRenderingContext.vertexAttribPointer()")}}
- WebGL2 equivalent methods:

  - {{domxref("WebGL2RenderingContext.createVertexArray()")}}
  - {{domxref("WebGL2RenderingContext.deleteVertexArray()")}}
  - {{domxref("WebGL2RenderingContext.isVertexArray()")}}
  - {{domxref("WebGL2RenderingContext.bindVertexArray()")}}
