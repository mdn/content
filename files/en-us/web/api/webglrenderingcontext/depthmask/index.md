---
title: "WebGLRenderingContext: depthMask() method"
short-title: depthMask()
slug: Web/API/WebGLRenderingContext/depthMask
page-type: web-api-instance-method
browser-compat: api.WebGLRenderingContext.depthMask
---

{{APIRef("WebGL")}}

The **`WebGLRenderingContext.depthMask()`** method of the [WebGL API](/en-US/docs/Web/API/WebGL_API) sets whether writing into the depth
buffer is enabled or disabled.

## Syntax

```js-nolint
depthMask(flag)
```

### Parameters

- `flag`
  - : A {{domxref("WebGL_API/Types", "GLboolean")}} specifying whether or not writing into the depth buffer
    is enabled. Default value: `true`, meaning that writing is enabled.

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
gl.depthMask(false);
```

To get the current depth mask, query the `DEPTH_WRITEMASK` constant which
returns a boolean value.

```js
gl.getParameter(gl.DEPTH_WRITEMASK);
// false
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.colorMask()")}}
- {{domxref("WebGLRenderingContext.stencilMask()")}}
