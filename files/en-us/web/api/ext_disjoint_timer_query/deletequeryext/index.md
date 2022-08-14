---
title: EXT_disjoint_timer_query.deleteQueryEXT()
slug: Web/API/EXT_disjoint_timer_query/deleteQueryEXT
page-type: webgl-extension-method
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
deleteQueryEXT(query)
```

### Parameters

- `query`
  - : A {{domxref("WebGLQuery")}} object to delete.

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
const ext = gl.getExtension('EXT_disjoint_timer_query');
const query = ext.createQueryEXT();

// …

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
