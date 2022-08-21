---
title: EXT_disjoint_timer_query.beginQueryEXT()
slug: Web/API/EXT_disjoint_timer_query/beginQueryEXT
page-type: webgl-extension-method
tags:
  - API
  - Method
  - Reference
  - WebGL
  - WebGL extension
browser-compat: api.EXT_disjoint_timer_query.beginQueryEXT
---
{{APIRef("WebGL")}}

The **`EXT_disjoint_timer_query.beginQueryEXT()`** method of
the [WebGL API](/en-US/docs/Web/API/WebGL_API) starts a timer query.

## Syntax

```js
beginQueryEXT(target, query)
```

### Parameters

- `target`
  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying the target of the time query. Must be
    `ext.TIME_ELAPSED_EXT`.
- `query`
  - : A {{domxref("WebGLQuery")}} object for which to start the time querying.

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
const ext = gl.getExtension('EXT_disjoint_timer_query');
const query = ext.createQueryEXT();
ext.beginQueryEXT(ext.TIME_ELAPSED_EXT, query);

// …
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.getExtension()")}}
- {{domxref("WebGLQuery")}}
- {{domxref("EXT_disjoint_timer_query")}}
