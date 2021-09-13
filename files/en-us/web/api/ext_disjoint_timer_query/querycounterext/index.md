---
title: EXT_disjoint_timer_query.queryCounterEXT()
slug: Web/API/EXT_disjoint_timer_query/queryCounterEXT
tags:
  - API
  - Method
  - Reference
  - WebGL
  - WebGL extension
browser-compat: api.EXT_disjoint_timer_query.queryCounterEXT
---
{{APIRef("WebGL")}}

The **`EXT_disjoint_timer_query.queryCounterEXT()`** method of
the [WebGL API](/en-US/docs/Web/API/WebGL_API) records the current time into
the corresponding query object.

## Syntax

```js
void ext.queryCounterEXT(query, target);
```

### Parameters

- `query`
  - : A {{domxref("WebGLQuery")}} object for which to record the current time.
- target
  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying the target of the time query. Must be
    `ext.TIMESTAMP_EXT`.

### Return value

None.

## Examples

```js
var ext = gl.getExtension('EXT_disjoint_timer_query');
var startQuery = ext.createQueryEXT();
var endQuery = ext.createQueryEXT();
ext.queryCounterEXT(startQuery, ext.TIMESTAMP_EXT);

// ...

ext.queryCounterEXT(endQuery, ext.TIMESTAMP_EXT);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.getExtension()")}}
- {{domxref("WebGLQuery")}}
- {{domxref("EXT_disjoint_timer_query")}}
