---
title: "OES_draw_buffers_indexed: blendEquationiOES() method"
short-title: blendEquationiOES()
slug: Web/API/OES_draw_buffers_indexed/blendEquationiOES
page-type: web-api-instance-method
browser-compat: api.OES_draw_buffers_indexed.blendEquationiOES
---

{{APIRef("WebGL")}}

The `blendEquationiOES()` method of the `OES_draw_buffers_indexed` WebGL extension sets both the RGB blend and alpha blend equations for a particular draw buffer.

See {{DOMxRef("OES_draw_buffers_indexed.blendEquationSeparateiOES()")}} for setting RGB and alpha separately and {{DOMxRef("WebGLRenderingContext.blendEquation()")}} for the WebGL 1 version of this method.

## Syntax

```js-nolint
blendEquationiOES(buf, mode)
```

### Parameters

- `buf`
  - : An integer `i` specifying the draw buffer associated with the constant `gl.DRAW_BUFFERi`, see [WebGL draw buffer constants](/en-US/docs/Web/API/WebGL_API/Constants#draw_buffers).
- `mode`
  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying how source and destination colors are combined. Accepts the same enums as the `mode` parameter in {{DOMxRef("WebGLRenderingContext.blendEquation()")}}.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- If `buf` is not a valid value, a `gl.INVALID_VALUE` error is thrown.
- If `mode` is not one of the possible values, a `gl.INVALID_ENUM` error is thrown.

## Examples

### Setting and getting blend equations

You can set the blend equations for the `gl.DRAW_BUFFER0` and `gl.DRAW_BUFFER1` draw buffers like this:

```js
const ext = gl.getExtension("OES_draw_buffers_indexed");

ext.blendEquationiOES(0, gl.FUNC_ADD);
ext.blendEquationiOES(1, gl.FUNC_SUBTRACT);
```

To get the blend equations for the `gl.DRAW_BUFFER0` and `gl.DRAW_BUFFER1` draw buffers, query the `BLEND_EQUATION_RGB` and `BLEND_EQUATION_ALPHA` constants using {{domxref("WebGL2RenderingContext.getIndexedParameter()")}}:

```js
// For gl.DRAW_BUFFER0
gl.getIndexedParameter(gl.BLEND_EQUATION_RGB, 0);
gl.getIndexedParameter(gl.BLEND_EQUATION_ALPHA, 0);

// For gl.DRAW_BUFFER0
gl.getIndexedParameter(gl.BLEND_EQUATION_RGB, 1);
gl.getIndexedParameter(gl.BLEND_EQUATION_ALPHA, 1);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{DOMxRef("OES_draw_buffers_indexed.blendEquationSeparateiOES()")}}
- {{DOMxRef("WebGLRenderingContext.blendEquation()")}}
