---
title: EXT_disjoint_timer_query.getQueryObjectEXT()
slug: Web/API/EXT_disjoint_timer_query/getQueryObjectEXT
tags:
  - API
  - Method
  - Reference
  - WebGL
  - WebGL extension
browser-compat: api.EXT_disjoint_timer_query.getQueryObjectEXT
---
{{APIRef("WebGL")}}

The **`EXT_disjoint_timer_query.getQueryObjectEXT()`** method
of the [WebGL API](/en-US/docs/Web/API/WebGL_API) returns the state of a
query object.

## Syntax

```js
any ext.getQueryObjectEXT(query, pname);
```

### Parameters

- `query`
  - : A {{domxref("WebGLQuery")}} object from which to return information.
- `pname`
  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying which information to return. Must be
    `ext.QUERY_RESULT_EXT` or `ext.QUERY_RESULT_AVAILABLE_EXT`.

### Return value

Depends on `pname`:

- If `pname` is `ext.QUERY_RESULT_EXT`: A
  {{domxref("WebGL_API/Types", "GLuint64EXT")}} containing the query result.
- If `pname` is `ext.QUERY_RESULT_AVAILABLE_EXT`: A
  {{domxref("WebGL_API/Types", "GLboolean")}} indicating whether or not a query result is available.

## Examples

```js
var ext = gl.getExtension('EXT_disjoint_timer_query');
var query = ext.createQueryEXT();
ext.beginQueryEXT(ext.TIME_ELAPSED_EXT, query);

// ... drawing ...

ext.endQueryEXT(ext.TIME_ELAPSED_EXT);

// At some point in the future, after returning control to the browser
var available = ext.getQueryObjectEXT(query, ext.QUERY_RESULT_AVAILABLE_EXT);
var disjoint = gl.getParameter(ext.GPU_DISJOINT_EXT);

if (available && !disjoint) {
  // See how much time the rendering of the object took in nanoseconds.
  var timeElapsed = ext.getQueryObjectEXT(query, ext.QUERY_RESULT_EXT);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.getExtension()")}}
- {{domxref("WebGLQuery")}}
- {{domxref("EXT_disjoint_timer_query")}}
