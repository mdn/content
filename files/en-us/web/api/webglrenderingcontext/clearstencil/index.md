---
title: WebGLRenderingContext.clearStencil()
slug: Web/API/WebGLRenderingContext/clearStencil
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - WebGL
  - WebGLRenderingContext
browser-compat: api.WebGLRenderingContext.clearStencil
---
{{APIRef("WebGL")}}

The **`WebGLRenderingContext.clearStencil()`** method of the [WebGL API](/en-US/docs/Web/API/WebGL_API) specifies the clear value for the
stencil buffer.

This specifies what stencil value to use when calling the
{{domxref("WebGLRenderingContext.clear", "clear()")}} method.

## Syntax

```js
clearStencil(s)
```

### Parameters

- `s`
  - : A {{domxref("WebGL_API/Types", "GLint")}} specifying the index used when the stencil buffer is cleared.
    Default value: 0.

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
gl.clearStencil(1);
```

To get the current stencil clear value, query the `STENCIL_CLEAR_VALUE`
constant.

```js
gl.getParameter(gl.STENCIL_CLEAR_VALUE);
// 1
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.clear()")}}
- {{domxref("WebGLRenderingContext.clearColor()")}}
- {{domxref("WebGLRenderingContext.clearDepth()")}}
