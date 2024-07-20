---
title: "EXT_disjoint_timer_query: endQueryEXT() method"
short-title: endQueryEXT()
slug: Web/API/EXT_disjoint_timer_query/endQueryEXT
page-type: webgl-extension-method
browser-compat: api.EXT_disjoint_timer_query.endQueryEXT
---

{{APIRef("WebGL")}}

The **`EXT_disjoint_timer_query.endQueryEXT()`** method of the
[WebGL API](/en-US/docs/Web/API/WebGL_API) ends a timer query.

## Syntax

```js-nolint
endQueryEXT(target)
```

### Parameters

- `target`
  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying the target of the time query. Must be
    `ext.TIME_ELAPSED_EXT`.

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
const ext = gl.getExtension("EXT_disjoint_timer_query");
const query = ext.createQueryEXT();
ext.beginQueryEXT(ext.TIME_ELAPSED_EXT, query);

// …

ext.endQueryEXT(ext.TIME_ELAPSED_EXT);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.getExtension()")}}
- {{domxref("WebGLQuery")}}
- {{domxref("EXT_disjoint_timer_query")}}
