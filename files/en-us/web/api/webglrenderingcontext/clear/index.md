---
title: "WebGLRenderingContext: clear() method"
short-title: clear()
slug: Web/API/WebGLRenderingContext/clear
page-type: web-api-instance-method
browser-compat: api.WebGLRenderingContext.clear
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

The **`WebGLRenderingContext.clear()`** method of the [WebGL API](/en-US/docs/Web/API/WebGL_API) clears buffers to preset values.

The preset values can be set by {{domxref("WebGLRenderingContext.clearColor", "clearColor()")}}, {{domxref("WebGLRenderingContext.clearDepth", "clearDepth()")}} or {{domxref("WebGLRenderingContext.clearStencil", "clearStencil()")}}.

The scissor box, dithering, and buffer writemasks can affect the `clear()`
method.

## Syntax

```js-nolint
clear(mask)
```

### Parameters

- `mask`

  - : A {{domxref("WebGL_API/Types", "GLbitfield")}} bitwise OR mask that indicates the buffers to be
    cleared. Possible values are:

    - `gl.COLOR_BUFFER_BIT`
    - `gl.DEPTH_BUFFER_BIT`
    - `gl.STENCIL_BUFFER_BIT`

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

If _mask_ is not one of the listed possible values, a
`gl.INVALID_ENUM` error is thrown.

## Examples

The `clear()` method accepts multiple values.

```js
gl.clear(gl.DEPTH_BUFFER_BIT);
gl.clear(gl.DEPTH_BUFFER_BIT | gl.COLOR_BUFFER_BIT);
```

To get the current clear values, query the `COLOR_CLEAR_VALUE`,
`DEPTH_CLEAR_VALUE`, and `STENCIL_CLEAR_VALUE` constants.

```js
gl.getParameter(gl.COLOR_CLEAR_VALUE);
gl.getParameter(gl.DEPTH_CLEAR_VALUE);
gl.getParameter(gl.STENCIL_CLEAR_VALUE);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.clearColor()")}}
- {{domxref("WebGLRenderingContext.clearDepth()")}}
- {{domxref("WebGLRenderingContext.clearStencil()")}}
