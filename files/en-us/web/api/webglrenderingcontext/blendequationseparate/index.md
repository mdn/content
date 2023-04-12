---
title: "WebGLRenderingContext: blendEquationSeparate() method"
short-title: blendEquationSeparate()
slug: Web/API/WebGLRenderingContext/blendEquationSeparate
page-type: web-api-instance-method
browser-compat: api.WebGLRenderingContext.blendEquationSeparate
---

{{APIRef("WebGL")}}

The **`WebGLRenderingContext.blendEquationSeparate()`** method
of the [WebGL API](/en-US/docs/Web/API/WebGL_API) is used to set the RGB
blend equation and alpha blend equation separately.

The blend equation determines how a new pixel is combined with a pixel already in the
{{domxref("WebGLFramebuffer")}}.

## Syntax

```js-nolint
blendEquationSeparate(modeRGB, modeAlpha)
```

### Parameters

- `modeRGB`

  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying how the red, green and blue components of source
    and destination colors are combined. Must be either:

    - `gl.FUNC_ADD`: source + destination (default value),
    - `gl.FUNC_SUBTRACT`: source - destination,
    - `gl.FUNC_REVERSE_SUBTRACT`: destination - source,
    - When using the {{domxref("EXT_blend_minmax")}} extension:

      - `ext.MIN_EXT`: Minimum of source and destination,
      - `ext.MAX_EXT`: Maximum of source and destination.

    - When using a {{domxref("WebGL2RenderingContext", "WebGL 2 context", "", 1)}},
      the following values are available additionally:

      - `gl.MIN`: Minimum of source and destination,
      - `gl.MAX`: Maximum of source and destination.

- `modeAlpha`

  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying how the alpha component (transparency) of source
    and destination colors are combined. Must be either:

    - `gl.FUNC_ADD`: source + destination (default value),
    - `gl.FUNC_SUBTRACT`: source - destination,
    - `gl.FUNC_REVERSE_SUBTRACT`: destination - source,
    - When using the {{domxref("EXT_blend_minmax")}} extension:

      - `ext.MIN_EXT`: Minimum of source and destination,
      - `ext.MAX_EXT`: Maximum of source and destination.

    - When using a {{domxref("WebGL2RenderingContext", "WebGL 2 context", "", 1)}},
      the following values are available additionally:

      - `gl.MIN`: Minimum of source and destination,
      - `gl.MAX`: Maximum of source and destination.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

If _mode_ is not one of the three possible values, a
`gl.INVALID_ENUM` error is thrown.

## Examples

To set the blend equations, use:

```js
gl.blendEquationSeparate(gl.FUNC_ADD, gl.FUNC_SUBTRACT);
```

To get the current blend equations, query the `BLEND_EQUATION`,
`BLEND_EQUATION_RGB` and `BLEND_EQUATION_ALPHA` constants which
return `gl.FUNC_ADD`, `gl.FUNC_SUBTRACT`,
`gl.FUNC_REVERSE_SUBTRACT`, or if the {{domxref("EXT_blend_minmax")}} is
enabled: `ext.MIN_EXT` or `ext.MAX_EXT`.

```js
gl.getParameter(gl.BLEND_EQUATION_RGB) === gl.FUNC_ADD;
// true

gl.getParameter(gl.BLEND_EQUATION_ALPHA) === gl.FUNC_ADD;
// true
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.blendEquation()")}}
- {{domxref("WebGLRenderingContext.blendColor()")}}
- {{domxref("WebGLRenderingContext.blendFunc()")}}
- {{domxref("EXT_blend_minmax")}}
