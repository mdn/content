---
title: WebGLRenderingContext.stencilOp()
slug: Web/API/WebGLRenderingContext/stencilOp
tags:
  - API
  - Method
  - Reference
  - WebGL
  - WebGLRenderingContext
browser-compat: api.WebGLRenderingContext.stencilOp
---
{{APIRef("WebGL")}}

The **`WebGLRenderingContext.stencilOp()`** method of the [WebGL API](/en-US/docs/Web/API/WebGL_API) sets both the front and back-facing
stencil test actions.

## Syntax

```js
void gl.stencilOp(fail, zfail, zpass);
```

### Parameters

All three parameters accept all constants listed below.

- `fail`
  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying the function to use when the stencil test fails.
    The default value is `gl.KEEP`.
- `zfail`
  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying the function to use when the stencil test passes,
    but the depth test fails. The default value is `gl.KEEP`.
- `zpass`
  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying the function to use when both the stencil test
    and the depth test pass, or when the stencil test passes and there is no depth buffer
    or depth testing is disabled. The default value is `gl.KEEP`.

### Return value

None.

## Constants

- `gl.KEEP`
  - : Keeps the current value.
- `gl.ZERO`
  - : Sets the stencil buffer value to 0.
- `gl.REPLACE`
  - : Sets the stencil buffer value to the reference value as specified by
    {{domxref("WebGLRenderingContext.stencilFunc()")}}.
- `gl.INCR`
  - : Increments the current stencil buffer value. Clamps to the maximum representable
    unsigned value.
- `gl.INCR_WRAP`
  - : Increments the current stencil buffer value. Wraps stencil buffer value to zero when
    incrementing the maximum representable unsigned value.
- `gl.DECR`
  - : Decrements the current stencil buffer value. Clamps to 0.
- `gl.DECR_WRAP`
  - : Decrements the current stencil buffer value. Wraps stencil buffer value to the
    maximum representable unsigned value when decrementing a stencil buffer value of 0.
- `gl.INVERT`
  - : Inverts the current stencil buffer value bitwise.

## Examples

The stencil testing is disabled by default. To enable or disable stencil testing, use
the {{domxref("WebGLRenderingContext.enable", "enable()")}} and
{{domxref("WebGLRenderingContext.disable", "disable()")}} methods with the argument
`gl.STENCIL_TEST`.

```js
gl.enable(gl.STENCIL_TEST);
gl.stencilOp(gl.INCR, gl.DECR, gl.INVERT);
```

To get the current information about stencil and depth pass or fail, query the
following constants with {{domxref("WebGLRenderingContext.getParameter",
  "getParameter()")}}.

```js
gl.getParameter(gl.STENCIL_FAIL);
gl.getParameter(gl.STENCIL_PASS_DEPTH_PASS);
gl.getParameter(gl.STENCIL_PASS_DEPTH_FAIL);
gl.getParameter(gl.STENCIL_BACK_FAIL);
gl.getParameter(gl.STENCIL_BACK_PASS_DEPTH_PASS);
gl.getParameter(gl.STENCIL_BACK_PASS_DEPTH_FAIL);
gl.getParameter(gl.STENCIL_BITS);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.stencilOpSeparate()")}}
- {{domxref("WebGLRenderingContext.stencilFunc()")}}
- {{domxref("WebGLRenderingContext.stencilFuncSeparate()")}}
- {{domxref("WebGLRenderingContext.stencilMask()")}}
- {{domxref("WebGLRenderingContext.stencilMaskSeparate()")}}
