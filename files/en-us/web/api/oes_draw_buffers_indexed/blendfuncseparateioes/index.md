---
title: "OES_draw_buffers_indexed: blendFuncSeparateiOES() method"
short-title: blendFuncSeparateiOES()
slug: Web/API/OES_draw_buffers_indexed/blendFuncSeparateiOES
page-type: web-api-instance-method
browser-compat: api.OES_draw_buffers_indexed.blendFuncSeparateiOES
---

{{APIRef("WebGL")}}

The `blendFuncSeparateiOES()` method of the {{DOMxRef("OES_draw_buffers_indexed")}} WebGL extension defines which function is used when blending pixels for RGB and alpha components separately for a particular draw buffer.

See {{DOMxRef("OES_draw_buffers_indexed.blendFunciOES()")}} for setting RGB and alpha together and {{DOMxRef("WebGLRenderingContext.blendFuncSeparate()")}} for the WebGL 1 version of this method.

## Syntax

```js-nolint
blendFuncSeparateiOES(buf, srcRGB, dstRGB, srcAlpha, dstAlpha)
```

### Parameters

- `buf`
  - : An integer `i` specifying the draw buffer associated with the constant `gl.DRAW_BUFFERi`, see [WebGL draw buffer constants](/en-US/docs/Web/API/WebGL_API/Constants#draw_buffers).
- `srcRGB`
  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying a multiplier for the red, green and blue (RGB) source blending factors. Accepts the same enums as the `srcRGB` parameter in {{DOMxRef("WebGLRenderingContext.blendFuncSeparate()")}}.
- `dstRGB`
  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying a multiplier for the red, green and blue (RGB) destination blending factors. Accepts the same enums as the `dstRGB` parameter in {{DOMxRef("WebGLRenderingContext.blendFuncSeparate()")}}.
- `srcAlpha`
  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying a multiplier for the alpha source blending factor. Accepts the same enums as the `srcAlpha` parameter in {{DOMxRef("WebGLRenderingContext.blendFuncSeparate()")}}.
- `dstAlpha`
  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying a multiplier for the alpha destination blending factor. Accepts the same enums as the `srcAlpha` parameter in {{DOMxRef("WebGLRenderingContext.blendFuncSeparate()")}}.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- If `buf` is not a valid value, a `gl.INVALID_VALUE` error is thrown.
- If `srcRGB`, `dstRGB`, `srcAlpha` or `dstAlpha` are not one of the possible values, a `gl.INVALID_ENUM` error is thrown.
- The same blending limitations as for {{DOMxRef("WebGLRenderingContext.blendFuncSeparate()")}} apply: If a constant color and a constant alpha value are used together as source and destination factors, a `gl.INVALID_ENUM` error is thrown.

## Examples

### Setting and getting blend functions

The following sets the blend functions for the draw buffers `gl.DRAW_BUFFER0` (call where `buf` is 0) and `gl.DRAW_BUFFER1` (call where `buf` is 1).

```js
const ext = gl.getExtension("OES_draw_buffers_indexed");

ext.blendFuncSeparateiOES(0, gl.ONE, gl.ONE, gl.ZERO, gl.ZERO);
ext.blendFuncSeparateiOES(
  1,
  gl.SRC_ALPHA,
  gl.ONE_MINUS_SRC_ALPHA,
  gl.ZERO,
  gl.ZERO,
);
```

To get the blend functions for the `gl.DRAW_BUFFER0` and `gl.DRAW_BUFFER1` draw buffers, query the `BLEND_SRC_RGB`, `BLEND_SRC_ALPHA`, `BLEND_DST_RGB`, and `BLEND_DST_ALPHA` constants using {{domxref("WebGL2RenderingContext.getIndexedParameter()")}}:

```js
// For gl.DRAW_BUFFER0
gl.getIndexedParameter(gl.BLEND_SRC_RGB, 0);
gl.getIndexedParameter(gl.BLEND_SRC_ALPHA, 0);
gl.getIndexedParameter(gl.BLEND_DST_RGB, 0);
gl.getIndexedParameter(gl.BLEND_DST_ALPHA, 0);

// For gl.DRAW_BUFFER0
gl.getIndexedParameter(gl.BLEND_SRC_RGB, 1);
gl.getIndexedParameter(gl.BLEND_SRC_ALPHA, 1);
gl.getIndexedParameter(gl.BLEND_DST_RGB, 1);
gl.getIndexedParameter(gl.BLEND_DST_ALPHA, 1);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{DOMxRef("OES_draw_buffers_indexed.blendFunciOES()")}}
- {{DOMxRef("WebGLRenderingContext.blendFuncSeparate()")}}
