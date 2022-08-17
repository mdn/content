---
title: WebGLQuery
slug: Web/API/WebGLQuery
page-type: web-api-interface
tags:
  - API
  - Reference
  - WebGL
  - WebGL2
browser-compat: api.WebGLQuery
---
{{APIRef("WebGL")}}

The **`WebGLQuery`** interface is part of the [WebGL 2](/en-US/docs/Web/API/WebGL_API) API and provides ways to asynchronously query for information. By default, occlusion queries and primitive queries are available.

Another kind of queries are disjoint timer queries, which allow you to measure performance and profiling of your GPU. Disjoint timer queries are available with the {{domxref("EXT_disjoint_timer_query")}} extension only.

{{InheritanceDiagram}}

When working with `WebGLQuery` objects, the following methods of the {{domxref("WebGL2RenderingContext")}} are useful:

- {{domxref("WebGL2RenderingContext.createQuery()")}}
- {{domxref("WebGL2RenderingContext.deleteQuery()")}}
- {{domxref("WebGL2RenderingContext.isQuery()")}}
- {{domxref("WebGL2RenderingContext.beginQuery()")}}
- {{domxref("WebGL2RenderingContext.endQuery()")}}
- {{domxref("WebGL2RenderingContext.getQuery()")}}
- {{domxref("WebGL2RenderingContext.getQueryParameter()")}}

## Examples

### Creating a `WebGLQuery` object

in this example, `gl` must be a {{domxref("WebGL2RenderingContext")}}. `WebGLQuery` objects are not available in WebGL 1.

```js
const query = gl.createQuery();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("EXT_disjoint_timer_query")}}
