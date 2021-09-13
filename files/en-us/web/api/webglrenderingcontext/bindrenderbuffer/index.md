---
title: WebGLRenderingContext.bindRenderbuffer()
slug: Web/API/WebGLRenderingContext/bindRenderbuffer
tags:
  - API
  - Method
  - Reference
  - WebGL
  - WebGLRenderingContext
browser-compat: api.WebGLRenderingContext.bindRenderbuffer
---
{{APIRef("WebGL")}}

The **`WebGLRenderingContext.bindRenderbuffer()`** method of
the [WebGL API](/en-US/docs/Web/API/WebGL_API) binds a given
{{domxref("WebGLRenderbuffer")}} to a target, which must be
`gl.RENDERBUFFER`.

## Syntax

```js
void gl.bindRenderbuffer(target, renderbuffer);
```

### Parameters

- target

  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying the binding point (target). Possible values:

    - `gl.RENDERBUFFER`: Buffer data storage for single images in a
      renderable internal format.

- renderbuffer
  - : A {{domxref("WebGLRenderbuffer")}} object to bind.

### Return value

None.

### Exceptions

A `gl.INVALID_ENUM` error is thrown if `target` is not
`gl.RENDERBUFFER`.

## Examples

### Binding a renderbuffer

```js
var canvas = document.getElementById('canvas');
var gl = canvas.getContext('webgl');
var renderbuffer = gl.createRenderbuffer();

gl.bindRenderbuffer(gl.RENDERBUFFER, renderbuffer);
```

### Getting current bindings

To check the current renderbuffer binding, query the `RENDERBUFFER_BINDING`
constant.

```js
gl.getParameter(gl.RENDERBUFFER_BINDING);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.createRenderbuffer()")}}
- {{domxref("WebGLRenderingContext.deleteRenderbuffer()")}}
- {{domxref("WebGLRenderingContext.isRenderbuffer()")}}
- Other buffers: {{domxref("WebGLBuffer")}}, {{domxref("WebGLFramebuffer")}}
