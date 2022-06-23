---
title: WebGLRenderingContext.enableVertexAttribArray()
slug: Web/API/WebGLRenderingContext/enableVertexAttribArray
page-type: web-api-instance-method
tags:
  - 3D
  - API
  - Attribute Array
  - Graphics
  - Method
  - Reference
  - Vertex Attributes
  - WebGL
  - WebGL API
  - WebGLRenderingContext
  - enableVertexAttribArray
  - vertex
  - vertex shader
browser-compat: api.WebGLRenderingContext.enableVertexAttribArray
---
{{APIRef("WebGL")}}

The {{domxref("WebGLRenderingContext")}} method
**`enableVertexAttribArray()`**, part of the [WebGL API](/en-US/docs/Web/API/WebGL_API), turns on the generic vertex
attribute array at the specified index into the list of attribute arrays.

> **Note:** You can disable the attribute array by calling
> {{domxref("WebGLRenderingContext.disableVertexAttribArray",
    "disableVertexAttribArray()")}}.

In WebGL, values that apply to a specific vertex are stored in [attributes](/en-US/docs/Web/API/WebGL_API/Data#attributes). These are only
available to the JavaScript code and the vertex shader. Attributes are referenced by an
index number into the list of attributes maintained by the GPU. Some vertex attribute
indices may have predefined purposes, depending on the platform and/or the GPU. Others
are assigned by the WebGL layer when you create the attributes.

Either way, since attributes cannot be used unless enabled, and are disabled by
default, you need to call `enableVertexAttribArray()` to enable individual
attributes so that they can be used. Once that's been done, other methods can be used to
access the attribute, including {{domxref("WebGLRenderingContext.vertexAttribPointer",
  "vertexAttribPointer()")}}, {{domxref("WebGLRenderingContext.vertexAttrib",
  "vertexAttrib*()")}}, and {{domxref("WebGLRenderingContext.getVertexAttrib",
  "getVertexAttrib()")}}.

## Syntax

```js
enableVertexAttribArray(index)
```

### Parameters

- `index`
  - : A {{domxref("WebGL_API/Types", "GLuint")}} specifying the index number that uniquely identifies the
    vertex attribute to enable. If you know the name of the attribute but not its index,
    you can get the index by calling {{domxref("WebGLRenderingContext.getAttribLocation",
    "getAttribLocation()")}}.

### Return value

None ({{jsxref("undefined")}}).

### Errors

To check for errors after calling `enableVertexAttribArray()`, call
{{domxref("WebGLRenderingContext.getError", "getError()")}}.

- `WebGLRenderingContext.INVALID_VALUE`
  - : The specified `index` is invalid; that is, it's greater than or equal to
    the maximum number of entries permitted in the context's vertex attribute list, as
    indicated by the value of `WebGLRenderingContext.MAX_VERTEX_ATTRIBS`.

## Examples

This code — a snippet taken from the full example [A basic 2D WebGL animation example](/en-US/docs/Web/API/WebGL_API/Basic_2D_animation_example) — shows the use of `enableVertexArray()` to activate
the attribute that will be used by the WebGL layer to pass individual vertexes from the
vertex buffer into the vertex shader function.

```js
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);

aVertexPosition =
    gl.getAttribLocation(shaderProgram, "aVertexPosition");

gl.enableVertexAttribArray(aVertexPosition);
gl.vertexAttribPointer(aVertexPosition, vertexNumComponents,
      gl.FLOAT, false, 0, 0);

gl.drawArrays(gl.TRIANGLES, 0, vertexCount);
```

> **Note:** This code snippet is taken from [the function `animateScene()`](/en-US/docs/Web/API/WebGL_API/Basic_2D_animation_example#drawing_and_animating_the_scene) in "A basic 2D WebGL animation example." See
> that article for the full sample and to see the resulting animation in action.

This code sets the buffer of vertexes that will be used to draw the triangles of the
shape by calling {{domxref("WebGLRenderingContext.bindBuffer", "bindBuffer()")}}. Then
the vertex position attribute's index is obtained from the shader program by calling
{{domxref("WebGLRenderingContext.getAttribLocation", "getAttribLocation()")}}.

With the index of the vertex position attribute now available in
`aVertexPosition`, we call `enableVertexAttribArray()` to enable
the position attribute so it can be used by the shader program (in particular, by the
vertex shader).

Then the vertex buffer is bound to the `aVertexPosition` attribute by
calling {{domxref("WebGLRenderingContext.vertexAttribPointer",
  "vertexAttribPointer()")}}. This step is not obvious, since this binding is almost a
side effect. But as a result, accessing `aVertexPosition` now obtains data
from the vertex buffer.

With the association in place between the vertex buffer for our shape and the
`aVertexPosition` attribute used to deliver vertexes one by one into the
vertex shader, we're ready to draw the shape by calling
{{domxref("WebGLRenderingContext.drawArrays", "drawArrays()")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Data in WebGL](/en-US/docs/Web/API/WebGL_API/Data)
- [Adding 2D content to a WebGL context](/en-US/docs/Web/API/WebGL_API/Tutorial/Adding_2D_content_to_a_WebGL_context)
- [A basic 2D WebGL animation sample](/en-US/docs/Web/API/WebGL_API/Basic_2D_animation_example)
- {{domxref("WebGLRenderingContext.disableVertexAttribArray",
    "disableVertexAttribArray()")}}
