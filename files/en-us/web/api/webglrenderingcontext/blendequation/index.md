---
title: "WebGLRenderingContext: blendEquation() method"
short-title: blendEquation()
slug: Web/API/WebGLRenderingContext/blendEquation
page-type: web-api-instance-method
browser-compat: api.WebGLRenderingContext.blendEquation
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

The **`WebGLRenderingContext.blendEquation()`** method of the
[WebGL API](/en-US/docs/Web/API/WebGL_API) is used to set both the RGB blend
equation and alpha blend equation to a single equation.

The blend equation determines how a new pixel is combined with a pixel already in the
{{domxref("WebGLFramebuffer")}}.

## Syntax

```js-nolint
blendEquation(mode)
```

### Parameters

- `mode`

  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying how source and destination colors are combined.
    Must be either:

    - `gl.FUNC_ADD`: source + destination (default value)
    - `gl.FUNC_SUBTRACT`: source - destination
    - `gl.FUNC_REVERSE_SUBTRACT`: destination - source

    When using the {{domxref("EXT_blend_minmax")}} extension:

    - `ext.MIN_EXT`: Minimum of source and destination
    - `ext.MAX_EXT`: Maximum of source and destination

    When using a {{domxref("WebGL2RenderingContext", "WebGL 2 context", "", 1)}},
    the following values are available additionally:

    - `gl.MIN`: Minimum of source and destination
    - `gl.MAX`: Maximum of source and destination

### Exceptions

If _mode_ is not one of the three possible values, a
`gl.INVALID_ENUM` error is thrown.

### Return value

None ({{jsxref("undefined")}}).

## Examples

To set the blend equation, use:

```js
gl.blendEquation(gl.FUNC_ADD);
gl.blendEquation(gl.FUNC_SUBTRACT);
gl.blendEquation(gl.FUNC_REVERSE_SUBTRACT);
```

To get the blend equations, query the `BLEND_EQUATION`,
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

- {{domxref("WebGLRenderingContext.blendColor()")}}
- {{domxref("WebGLRenderingContext.blendFunc()")}}
- {{domxref("EXT_blend_minmax")}}
