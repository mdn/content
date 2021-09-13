---
title: EXT_disjoint_timer_query.deleteQueryEXT()
slug: Web/API/EXT_disjoint_timer_query/deleteQueryEXT
tags:
  - API
  - Method
  - Reference
  - WebGL
  - WebGL extension
browser-compat: api.EXT_disjoint_timer_query.deleteQueryEXT
---
{{APIRef("WebGL")}}

The **`EXT_disjoint_timer_query.deleteQueryEXT()`** method of
the [WebGL API](/en-US/docs/Web/API/WebGL_API) deletes a given
{{domxref("WebGLQuery")}} object.

## Syntax

```js
void ext.deleteQueryEXT(query);
```

### Parameters

- `query`
  - : A {{domxref("WebGLQuery")}} object to delete.

### Return value

None.

## Examples

```js
var ext = gl.getExtension('EXT_disjoint_timer_query');
var query = ext.createQueryEXT();

// ...

ext.deleteQueryEXT(query);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.getExtension()")}}
- {{domxref("WebGLQuery")}}
- {{domxref("EXT_disjoint_timer_query")}}
