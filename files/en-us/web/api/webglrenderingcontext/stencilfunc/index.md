---
title: WebGLRenderingContext.stencilFunc()
slug: Web/API/WebGLRenderingContext/stencilFunc
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - WebGL
  - WebGLRenderingContext
browser-compat: api.WebGLRenderingContext.stencilFunc
---
{{APIRef("WebGL")}}

The **`WebGLRenderingContext.stencilFunc()`** method of the [WebGL API](/en-US/docs/Web/API/WebGL_API) sets the front and back function
and reference value for stencil testing.

Stenciling enables and disables drawing on a per-pixel basis. It is typically used in
multipass rendering to achieve special effects.

## Syntax

```js
stencilFunc(func, ref, mask)
```

### Parameters

- `func`

  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying the test function. The default function is
    `gl.ALWAYS`. The possible values are:

    - `gl.NEVER`: Never pass.
    - `gl.LESS`: Pass if
      `(ref & mask) < (stencil & mask)`.
    - `gl.EQUAL`: Pass if
      `(ref & mask) = (stencil & mask)`.
    - `gl.LEQUAL`: Pass if
      `(ref & mask) <= (stencil & mask)`.
    - `gl.GREATER`: Pass if
      `(ref & mask) > (stencil & mask)`.
    - `gl.NOTEQUAL`: Pass if
      `(ref & mask) !== (stencil & mask)`.
    - `gl.GEQUAL`: Pass if
      `(ref & mask) >= (stencil & mask)`.
    - `gl.ALWAYS`: Always pass.

- `ref`
  - : A {{domxref("WebGL_API/Types", "GLint")}} specifying the reference value for the stencil test. This
    value is clamped to the range 0 to 2^n - 1 where n is the number of bitplanes
    in the stencil buffer. The default value is 0.
- `mask`
  - : A {{domxref("WebGL_API/Types", "GLuint")}} specifying a bit-wise mask that is used to AND the reference
    value and the stored stencil value when the test is done. The default value is all 1.

### Return value

None ({{jsxref("undefined")}}).

## Examples

The stencil testing is disabled by default. To enable or disable stencil testing, use
the {{domxref("WebGLRenderingContext.enable", "enable()")}} and
{{domxref("WebGLRenderingContext.disable", "disable()")}} methods with the argument
`gl.STENCIL_TEST`.

```js
gl.enable(gl.STENCIL_TEST);
gl.stencilFunc(gl.LESS, 0, 0b1110011);
```

To get the current stencil function, reference value, or other stencil information,
query the following constants with {{domxref("WebGLRenderingContext.getParameter",
  "getParameter()")}}.

```js
gl.getParameter(gl.STENCIL_FUNC);
gl.getParameter(gl.STENCIL_VALUE_MASK);
gl.getParameter(gl.STENCIL_REF);
gl.getParameter(gl.STENCIL_BACK_FUNC);
gl.getParameter(gl.STENCIL_BACK_VALUE_MASK);
gl.getParameter(gl.STENCIL_BACK_REF);
gl.getParameter(gl.STENCIL_BITS);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.stencilFuncSeparate()")}}
- {{domxref("WebGLRenderingContext.stencilMask()")}}
- {{domxref("WebGLRenderingContext.stencilMaskSeparate()")}}
- {{domxref("WebGLRenderingContext.stencilOp()")}}
- {{domxref("WebGLRenderingContext.stencilOpSeparate()")}}
