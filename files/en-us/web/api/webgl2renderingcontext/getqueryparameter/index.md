---
title: "WebGL2RenderingContext: getQueryParameter() method"
short-title: getQueryParameter()
slug: Web/API/WebGL2RenderingContext/getQueryParameter
page-type: web-api-instance-method
browser-compat: api.WebGL2RenderingContext.getQueryParameter
---

{{APIRef("WebGL")}}

The **`WebGL2RenderingContext.getQueryParameter()`** method of
the [WebGL 2 API](/en-US/docs/Web/API/WebGL_API) returns parameter
information of a {{domxref("WebGLQuery")}} object.

## Syntax

```js-nolint
getQueryParameter(query, pname)
```

### Parameters

- `query`
  - : A {{domxref("WebGLQuery")}} object.
- `pname`

  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying which information to return. Possible values:

    - `gl.QUERY_RESULT`
      - : Returns a {{domxref("WebGL_API/Types", "GLuint")}} containing the
        query result.
    - `gl.QUERY_RESULT_AVAILABLE`
      - : Returns a {{domxref("WebGL_API/Types", "GLboolean")}}
        indicating whether or not a query result is available.

### Return value

Depends on the `pname` parameter, either a {{domxref("WebGL_API/Types", "GLuint")}} or a
{{domxref("WebGL_API/Types", "GLboolean")}}.

## Examples

```js
const query = gl.createQuery();
gl.beginQuery(gl.ANY_SAMPLES_PASSED, query);

const result = gl.getQueryParameter(query, gl.QUERY_RESULT);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLQuery")}}
