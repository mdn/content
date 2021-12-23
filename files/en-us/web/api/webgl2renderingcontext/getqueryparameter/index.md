---
title: WebGL2RenderingContext.getQueryParameter()
slug: Web/API/WebGL2RenderingContext/getQueryParameter
tags:
  - API
  - Method
  - Reference
  - WebGL
  - WebGL2
browser-compat: api.WebGL2RenderingContext.getQueryParameter
---
{{APIRef("WebGL")}}

The **`WebGL2RenderingContext.getQueryParameter()`** method of
the [WebGL 2 API](/en-US/docs/Web/API/WebGL_API) returns parameter
information of a {{domxref("WebGLQuery")}} object.

## Syntax

```js
any gl.getQueryParameter(query, pname);
```

### Parameters

- query
  - : A {{domxref("WebGLQuery")}} object.
- `pname`

  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying which information to return. Possible values:

    - `gl.QUERY_RESULT`: Returns a {{domxref("WebGL_API/Types", "GLuint")}} containing the
      query result.
    - `gl.QUERY_RESULT_AVAILABLE`: Returns a {{domxref("WebGL_API/Types", "GLboolean")}}
      indicating whether or not a query result is available.

### Return value

Depends on the `pname` parameter, either a {{domxref("WebGL_API/Types", "GLuint")}} or a
{{domxref("WebGL_API/Types", "GLboolean")}}.

## Examples

```js
var query = gl.createQuery();
gl.beginQuery(gl.ANY_SAMPLES_PASSED, query);

var result = gl.getQueryParameter(query, gl.QUERY_RESULT);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLQuery")}}
