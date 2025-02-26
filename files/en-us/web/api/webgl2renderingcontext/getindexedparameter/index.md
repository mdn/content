---
title: "WebGL2RenderingContext: getIndexedParameter() method"
short-title: getIndexedParameter()
slug: Web/API/WebGL2RenderingContext/getIndexedParameter
page-type: web-api-instance-method
browser-compat: api.WebGL2RenderingContext.getIndexedParameter
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

The **`WebGL2RenderingContext.getIndexedParameter()`** method
of the [WebGL 2 API](/en-US/docs/Web/API/WebGL_API) returns indexed
information about a given `target`.

## Syntax

```js-nolint
getIndexedParameter(target, index)
```

### Parameters

- `target`

  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying the target for which to return information.
    Possible values:

    - `gl.TRANSFORM_FEEDBACK_BUFFER_BINDING`: Returns a
      {{domxref("WebGLBuffer")}}.
    - `gl.TRANSFORM_FEEDBACK_BUFFER_SIZE`: Returns a
      {{domxref("WebGL_API/Types", "GLsizeiptr")}}.
    - `gl.TRANSFORM_FEEDBACK_BUFFER_START`: Returns a
      {{domxref("WebGL_API/Types", "GLintptr")}}.
    - `gl.UNIFORM_BUFFER_BINDING`: Returns a {{domxref("WebGLBuffer")}}.
    - `gl.UNIFORM_BUFFER_SIZE`: Returns a {{domxref("WebGL_API/Types", "GLsizeiptr")}}.
    - `gl.UNIFORM_BUFFER_START`: Returns a {{domxref("WebGL_API/Types", "GLintptr")}}.

    When using the {{domxref("OES_draw_buffers_indexed")}} WebGL 2 extension, the following values are available additionally:

    - `gl.BLEND_EQUATION_RGB`: Returns the RGB blend equation for the draw buffer at `index`.
    - `gl.BLEND_EQUATION_ALPHA`: Returns the alpha blend equation for the draw buffer at `index`.
    - `gl.BLEND_SRC_RGB`: Returns the source RGB blend function for the draw buffer at `index`.
    - `gl.BLEND_SRC_ALPHA`: Returns the source alpha blend function for the draw buffer at `index`.
    - `gl.BLEND_DST_RGB`: Returns the destination RGB blend function for the draw buffer at `index`.
    - `gl.BLEND_DST_ALPHA`: Returns the destination alpha blend function for the draw buffer at `index`.
    - `gl.COLOR_WRITEMASK`: Returns an array containing color components are enabled for the draw buffer at `index`.

- `index`
  - : A {{domxref("WebGL_API/Types", "GLuint")}} specifying the index of the `target` that is
    queried.

### Return value

Depends on the requested information (as specified with `target`).

## Examples

```js
const binding = gl.getIndexedParameter(gl.TRANSFORM_FEEDBACK_BUFFER_BINDING, 0);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.getParameter()")}}
