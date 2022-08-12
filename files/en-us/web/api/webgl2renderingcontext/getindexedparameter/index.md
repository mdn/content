---
title: WebGL2RenderingContext.getIndexedParameter()
slug: Web/API/WebGL2RenderingContext/getIndexedParameter
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - WebGL
  - WebGL2
browser-compat: api.WebGL2RenderingContext.getIndexedParameter
---
{{APIRef("WebGL")}}

The **`WebGL2RenderingContext.getIndexedParameter()`** method
of the [WebGL 2 API](/en-US/docs/Web/API/WebGL_API) returns indexed
information about a given `target`.

## Syntax

```js
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
