---
title: "OES_draw_buffers_indexed: blendEquationSeparateiOES() method"
short-title: blendEquationSeparateiOES()
slug: Web/API/OES_draw_buffers_indexed/blendEquationSeparateiOES
page-type: web-api-instance-method
browser-compat: api.OES_draw_buffers_indexed.blendEquationSeparateiOES
---

{{APIRef("WebGL")}}

The `blendEquationSeparateiOES()` method of the {{DOMxRef("OES_draw_buffers_indexed")}} WebGL extension sets the RGB and alpha blend equations separately for a particular draw buffer.

See {{DOMxRef("OES_draw_buffers_indexed.blendEquationiOES()")}} for setting RGB and alpha together and {{DOMxRef("WebGLRenderingContext.blendEquationSeparate()")}} for the WebGL 1 version of this method.

## Syntax

```js-nolint
blendEquationSeparateiOES(buf, modeRGB, modeAlpha)
```

### Parameters

- `buf`
  - : An integer `i` specifying the draw buffer associated with the constant `gl.DRAW_BUFFERi`, see [WebGL draw buffer constants](/en-US/docs/Web/API/WebGL_API/Constants#draw_buffers).
- `modeRGB`
  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying how source and destination RGB color components are combined. Accepts the same enums as the `modeRGB` parameter in {{DOMxRef("WebGLRenderingContext.blendEquationSeparate()")}}.
- `modeAlpha`
  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying how source and destination alpha color components are combined. Accepts the same enums as the `modeAlpha` parameter in {{DOMxRef("WebGLRenderingContext.blendEquationSeparate()")}}.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- If `buf` is not a valid value, a `gl.INVALID_VALUE` error is thrown.
- If `modeRGB` or `modeAlpha` are not set to one of the possible values, a `gl.INVALID_ENUM` error is thrown.

## Examples

### Setting and getting blend equations

The following sets the blend equations for the draw buffers `gl.DRAW_BUFFER0` (call where `buf` is 0) and `gl.DRAW_BUFFER1` (call where `buf` is 1).

```js
const ext = gl.getExtension("OES_draw_buffers_indexed");

ext.blendEquationSeparateiOES(0, gl.FUNC_ADD, gl.FUNC_SUBTRACT);
ext.blendEquationSeparateiOES(1, gl.FUNC_ADD, gl.FUNC_SUBTRACT);
```

To get the blend equations for `gl.DRAW_BUFFER0` and `gl.DRAW_BUFFER1`, query the `BLEND_EQUATION_RGB` and `BLEND_EQUATION_ALPHA` constants using {{domxref("WebGL2RenderingContext.getIndexedParameter()")}}:

```js
// For gl.DRAW_BUFFER0
gl.getIndexedParameter(gl.BLEND_EQUATION_RGB, 0);
gl.getIndexedParameter(gl.BLEND_EQUATION_ALPHA, 0);

// for gl.DRAW_BUFFER1
gl.getIndexedParameter(gl.BLEND_EQUATION_RGB, 1);
gl.getIndexedParameter(gl.BLEND_EQUATION_ALPHA, 1);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{DOMxRef("OES_draw_buffers_indexed.blendEquationiOES()")}}
- {{DOMxRef("WebGLRenderingContext.blendEquationSeparate()")}}
