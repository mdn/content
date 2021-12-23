---
title: EXT_disjoint_timer_query.createQueryEXT()
slug: Web/API/EXT_disjoint_timer_query/createQueryEXT
tags:
  - API
  - Method
  - Reference
  - WebGL
  - WebGL extension
browser-compat: api.EXT_disjoint_timer_query.createQueryEXT
---
{{APIRef("WebGL")}}

The **`EXT_disjoint_timer_query.createQueryEXT()`** method of
the [WebGL API](/en-US/docs/Web/API/WebGL_API) creates and initializes
{{domxref("WebGLQuery")}} objects, which track the time needed to fully complete
a set of GL commands.

## Syntax

```js
WebGLTimerQueryEXT ext.createQueryEXT();
```

### Parameters

None.

### Return value

A {{domxref("WebGLQuery")}} object.

## Examples

```js
var ext = gl.getExtension('EXT_disjoint_timer_query');
var query = ext.createQueryExt();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.getExtension()")}}
- {{domxref("WebGLQuery")}}
- {{domxref("EXT_disjoint_timer_query")}}
