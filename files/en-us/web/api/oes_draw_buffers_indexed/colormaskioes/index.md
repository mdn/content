---
title: "OES_draw_buffers_indexed: colorMaskiOES() method"
short-title: colorMaskiOES()
slug: Web/API/OES_draw_buffers_indexed/colorMaskiOES
page-type: web-api-instance-method
browser-compat: api.OES_draw_buffers_indexed.colorMaskiOES
---

{{APIRef("WebGL")}}

The `colorMaskiOES()` method of the {{DOMxRef("OES_draw_buffers_indexed")}} WebGL extension sets which color components to enable or to disable when drawing or rendering for a particular draw buffer. It's the indexed version of WebGL 1's {{domxref("WebGLRenderingContext.colorMask()")}} method.

## Syntax

```js-nolint
colorMaskiOES(buf, r, g, b, a)
```

### Parameters

- `buf`
  - : An integer `i` specifying the draw buffer associated with the constant `gl.DRAW_BUFFERi`, see [WebGL draw buffer constants](/en-US/docs/Web/API/WebGL_API/Constants#draw_buffers).
- `r`
  - : A {{domxref("WebGL_API/Types", "GLboolean")}} specifying whether or not the red color component should be written into the draw buffer.
- `g`
  - : A {{domxref("WebGL_API/Types", "GLboolean")}} specifying whether or not the green color component should be written into the draw buffer.
- `b`
  - : A {{domxref("WebGL_API/Types", "GLboolean")}} specifying whether or not the blue color component should be written into the draw buffer.
- `a`
  - : A {{domxref("WebGL_API/Types", "GLboolean")}} specifying whether or not the red alpha (transparency) component should be written into the draw buffer.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- If `buf`, `r`, `b`, `g`, or `a` are not a valid values, a `gl.INVALID_VALUE` error is thrown.

## Examples

### Setting and getting color masks

You can set the color masks for the `gl.DRAW_BUFFER0` and `gl.DRAW_BUFFER1` draw buffers like this:

```js
const ext = gl.getExtension("OES_draw_buffers_indexed");

ext.colorMaskiOES(0, 1, 0, 0, 0);
ext.colorMaskiOES(1, 0, 1, 0, 0);
```

To get the color masks for the `gl.DRAW_BUFFER0` and `gl.DRAW_BUFFER1` draw buffers, query the `COLOR_WRITEMASK` constant using {{domxref("WebGL2RenderingContext.getIndexedParameter()")}}:

```js
gl.getIndexedParameter(gl.COLOR_WRITEMASK, 0);
gl.getIndexedParameter(gl.COLOR_WRITEMASK, 1);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGL2RenderingContext.getIndexedParameter()")}}
- {{domxref("WebGLRenderingContext.colorMask()")}}
