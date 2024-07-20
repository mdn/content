---
title: "WebGL2RenderingContext: getInternalformatParameter() method"
short-title: getInternalformatParameter()
slug: Web/API/WebGL2RenderingContext/getInternalformatParameter
page-type: web-api-instance-method
browser-compat: api.WebGL2RenderingContext.getInternalformatParameter
---

{{APIRef("WebGL")}}

The **`WebGL2RenderingContext.getInternalformatParameter()`**
method of the [WebGL 2 API](/en-US/docs/Web/API/WebGL_API) returns
information about implementation-dependent support for internal formats.

## Syntax

```js-nolint
getInternalformatParameter(target, internalformat, pname)
```

### Parameters

- `target`

  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying the target renderbuffer object. Possible values:

    - `gl.RENDERBUFFER`
      - : Buffer data storage for single images in a
        renderable internal format.

- `internalformat`
  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying the internal format about which to retrieve
    information (must be a color-renderable, depth-renderable or stencil-renderable
    format).
- `pname`

  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying the type of information to query. Possible
    values:

    - `gl.SAMPLES`
      - : Returns a {{jsxref("Int32Array")}} containing sample
        counts supported for `internalformat` in descending order.

### Return value

Depends on the requested information (as specified with `pname`). It is an
{{jsxref("Int32Array")}} if `pname` is `gl.SAMPLES`.

## Examples

```js
const samples = gl.getInternalformatParameter(
  gl.RENDERBUFFER,
  gl.RGBA8,
  gl.SAMPLES,
);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.getRenderbufferParameter()")}}
