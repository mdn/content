---
title: WebGLRenderingContext.getAttachedShaders()
slug: Web/API/WebGLRenderingContext/getAttachedShaders
tags:
  - API
  - Method
  - Reference
  - WebGL
  - WebGLRenderingContext
browser-compat: api.WebGLRenderingContext.getAttachedShaders
---
{{APIRef("WebGL")}}

The **`WebGLRenderingContext.getAttachedShaders()`** method of
the [WebGL API](/en-US/docs/Web/API/WebGL_API) returns a list of
{{domxref("WebGLShader")}} objects attached to a {{domxref("WebGLProgram")}}.

## Syntax

```js
sequence<WebGLShader> gl.getAttachedShaders(program);
```

### Parameters

- program
  - : A {{domxref("WebGLProgram")}} object to get attached shaders for.

### Return value

An {{jsxref("Array")}} of {{domxref("WebGLShader")}} objects that are attached to the
given `WebGLProgram`.

## Examples

```js
var program = gl.createProgram();

// Attach pre-existing shaders
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);
gl.linkProgram(program);

gl.getAttachedShaders(program);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.createShader()")}}
- {{domxref("WebGLRenderingContext.isShader()")}}
- {{domxref("WebGLRenderingContext.deleteShader()")}}
