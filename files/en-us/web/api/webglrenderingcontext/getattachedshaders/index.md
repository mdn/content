---
title: "WebGLRenderingContext: getAttachedShaders() method"
short-title: getAttachedShaders()
slug: Web/API/WebGLRenderingContext/getAttachedShaders
page-type: web-api-instance-method
browser-compat: api.WebGLRenderingContext.getAttachedShaders
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

The **`WebGLRenderingContext.getAttachedShaders()`** method of
the [WebGL API](/en-US/docs/Web/API/WebGL_API) returns a list of
{{domxref("WebGLShader")}} objects attached to a {{domxref("WebGLProgram")}}.

## Syntax

```js-nolint
getAttachedShaders(program)
```

### Parameters

- `program`
  - : A {{domxref("WebGLProgram")}} object to get attached shaders for.

### Return value

An {{jsxref("Array")}} of {{domxref("WebGLShader")}} objects that are attached to the
given `WebGLProgram`.

## Examples

```js
const program = gl.createProgram();

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
