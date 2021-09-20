---
title: OES_vertex_array_object.bindVertexArrayOES()
slug: Web/API/OES_vertex_array_object/bindVertexArrayOES
tags:
  - API
  - Method
  - Reference
  - VAO
  - WebGL
  - WebGL extension
browser-compat: api.OES_vertex_array_object.bindVertexArrayOES
---
{{APIRef("WebGL")}}

The **`OES_vertex_array_object.bindVertexArrayOES()`** method
of the [WebGL API](/en-US/docs/Web/API/WebGL_API) binds a
passed {{domxref("WebGLVertexArrayObject")}} object to the buffer.

## Syntax

```js
void ext.bindVertexArrayOES(arrayObject);
```

### Parameters

- arrayObject
  - : A {{domxref("WebGLVertexArrayObject")}} (VAO) object to bind.

### Return value

None.

## Examples

```js
var ext = gl.getExtension('OES_vertex_array_object');
var vao = ext.createVertexArrayOES();
ext.bindVertexArrayOES(vao);

// ...
// calls to bindBuffer or vertexAttribPointer
// which will be "recorded" in the VAO
// ...
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.getExtension()")}}
- {{domxref("WebGLRenderingContext.vertexAttribPointer()")}}
- WebGL2 equivalent: {{domxref("WebGL2RenderingContext.bindVertexArray()")}}
