---
title: "EXT_disjoint_timer_query: isQueryEXT() method"
short-title: isQueryEXT()
slug: Web/API/EXT_disjoint_timer_query/isQueryEXT
page-type: webgl-extension-method
browser-compat: api.EXT_disjoint_timer_query.isQueryEXT
---

{{APIRef("WebGL")}}

The **`EXT_disjoint_timer_query.isQueryEXT()`** method of the
[WebGL API](/en-US/docs/Web/API/WebGL_API) returns `true` if the
passed object is a {{domxref("WebGLQuery")}} object.

## Syntax

```js-nolint
isQueryEXT(query)
```

### Parameters

- `query`
  - : A {{domxref("WebGLQuery")}} object to test.

### Return value

A {{domxref("WebGL_API/Types", "GLboolean")}} indicating whether the given object is a
{{domxref("WebGLQuery")}} object (`true`) or not
(`false`).

## Examples

```js
const ext = gl.getExtension("EXT_disjoint_timer_query");
const query = ext.createQueryEXT();

// …

ext.isQueryEXT(query);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.getExtension()")}}
- {{domxref("WebGLQuery")}}
- {{domxref("EXT_disjoint_timer_query")}}
