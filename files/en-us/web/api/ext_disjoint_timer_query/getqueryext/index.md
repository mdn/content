---
title: EXT_disjoint_timer_query.getQueryEXT()
slug: Web/API/EXT_disjoint_timer_query/getQueryEXT
page-type: webgl-extension-method
tags:
  - API
  - Method
  - Reference
  - WebGL
  - WebGL extension
browser-compat: api.EXT_disjoint_timer_query.getQueryEXT
---
{{APIRef("WebGL")}}

The **`EXT_disjoint_timer_query.getQueryEXT()`** method of the
[WebGL API](/en-US/docs/Web/API/WebGL_API) returns information about a query
target.

## Syntax

```js
getQueryEXT(target, pname)
```

### Parameters

- `target`
  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying the target of the time query. Must be
    `ext.TIMESTAMP_EXT` or `ext.TIME_ELAPSED_EXT`.
- `pname`
  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying which information to return. Must be
    `ext.CURRENT_QUERY_EXT` or `ext.QUERY_COUNTER_BITS_EXT`.

### Return value

Depends on `pname`:

- If `pname` is `ext.CURRENT_QUERY_EXT`: A
  {{domxref("WebGLQuery")}} object, which is the currently active query for the
  given target.
- If `pname` is `ext.QUERY_COUNTER_BITS_EXT`: A
  {{domxref("WebGL_API/Types", "GLint")}} indicating the number of bits used to hold the query result for
  the given target.

## Examples

```js
const ext = gl.getExtension('EXT_disjoint_timer_query');
const startQuery = ext.createQueryEXT();
ext.queryCounterEXT(startQuery, ext.TIMESTAMP_EXT);

const currentQuery = ext.getQueryEXT(ext.TIMESTAMP_EXT,
                                   ext.CURRENT_QUERY_EXT);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.getExtension()")}}
- {{domxref("WebGLQuery")}}
- {{domxref("EXT_disjoint_timer_query")}}
