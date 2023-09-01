---
title: "OES_draw_buffers_indexed: blendFunciOES() method"
short-title: blendFunciOES()
slug: Web/API/OES_draw_buffers_indexed/blendFunciOES
page-type: web-api-instance-method
browser-compat: api.OES_draw_buffers_indexed.blendFunciOES
---

{{APIRef("WebGL")}}

The `blendFunciOES()` method of the {{DOMxRef("OES_draw_buffers_indexed")}} WebGL extension defines which function is used when blending pixels for a particular draw buffer.

See {{DOMxRef("OES_draw_buffers_indexed.blendFuncSeparateiOES()")}} for setting RGB and alpha components separately and {{DOMxRef("WebGLRenderingContext.blendFunc()")}} for the WebGL 1 version of this method.

## Syntax

```js-nolint
blendFunciOES(buf, src, dst)
```

### Parameters

- `buf`
  - : An integer `i` specifying the draw buffer associated with the constant `gl.DRAW_BUFFERi`, see [WebGL draw buffer constants](/en-US/docs/Web/API/WebGL_API/Constants#draw_buffers).
- `src`
  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying a multiplier for the source blending factors. Accepts the same enums as the `sfactor` parameter in {{DOMxRef("WebGLRenderingContext.blendFunc()")}}.
- `dst`
  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying a multiplier for the destination blending factors. Accepts the same enums as the `dfactor` parameter in {{DOMxRef("WebGLRenderingContext.blendFunc()")}}.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- If `buf` is not a valid value, a `gl.INVALID_VALUE` error is thrown.
- If `src` or `dst` are not one of the possible values, a `gl.INVALID_ENUM` error is thrown.
- The same blending limitations as for {{DOMxRef("WebGLRenderingContext.blendFunc()")}} apply: If a constant color and a constant alpha value are used together as source and destination factors, a `gl.INVALID_ENUM` error is thrown.

## Examples

### Setting and getting blend functions

You can set the blend functions for the `gl.DRAW_BUFFER0` and `gl.DRAW_BUFFER1` draw buffers like this:

```js
const ext = gl.getExtension("OES_draw_buffers_indexed");

ext.blendFunciOES(0, gl.ONE, gl.ONE);
ext.blendFunciOES(1, gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
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

- {{DOMxRef("OES_draw_buffers_indexed.blendFuncSeparateiOES()")}}
- {{DOMxRef("WebGLRenderingContext.blendFunc()")}}
