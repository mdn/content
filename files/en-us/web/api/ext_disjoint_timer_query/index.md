---
title: EXT_disjoint_timer_query extension
short-title: EXT_disjoint_timer_query
slug: Web/API/EXT_disjoint_timer_query
page-type: webgl-extension
browser-compat: api.EXT_disjoint_timer_query
---

{{APIRef("WebGL")}}

The **EXT_disjoint_timer_query** extension is part of the [WebGL API](/en-US/docs/Web/API/WebGL_API) and provides a way to measure the duration of a set of GL commands, without stalling the rendering pipeline.

WebGL extensions are available using the {{domxref("WebGLRenderingContext.getExtension()")}} method. For more information, see also [Using Extensions](/en-US/docs/Web/API/WebGL_API/Using_Extensions) in the [WebGL tutorial](/en-US/docs/Web/API/WebGL_API/Tutorial).

> [!NOTE]
> This extension should be available in {{domxref("WebGLRenderingContext", "WebGL1", "", 1)}} contexts only. {{domxref("EXT_disjoint_timer_query_webgl2")}} is available in {{domxref("WebGL2RenderingContext", "WebGL 2", "", 1)}} contexts.
>
> In WebGL 2, the OpenGL method `getQueryObject()` is renamed to {{domxref("WebGL2RenderingContext.getQueryParameter")}}.
> In WebGL 2, other queries (such as occlusion queries and primitive queries) are possible using {{domxref("WebGLQuery")}} objects.

## Types

This extension exposes a new type:

- `GLuint64EXT`
  - : Unsigned 64-bit integer number.

## Constants

This extension exposes seven new constants.

- `ext.QUERY_COUNTER_BITS_EXT`
  - : A {{domxref("WebGL_API/Types", "GLint")}} indicating the number of bits used to hold the query result for the given target.
- `ext.CURRENT_QUERY_EXT`
  - : A {{domxref("WebGLQuery")}} object, which is the currently active query for the given target.
- `ext.QUERY_RESULT_EXT`
  - : A {{domxref("WebGL_API/Types", "GLuint64EXT")}} containing the query result.
- `ext.QUERY_RESULT_AVAILABLE_EXT`
  - : A {{domxref("WebGL_API/Types", "GLboolean")}} indicating whether or not a query result is available.
- `ext.TIME_ELAPSED_EXT`
  - : Elapsed time (in nanoseconds).
- `ext.TIMESTAMP_EXT`
  - : The current time.
- `ext.GPU_DISJOINT_EXT`
  - : A {{domxref("WebGL_API/Types", "GLboolean")}} indicating whether or not the GPU performed any disjoint operation.

## Instance methods

This extension exposes eight new methods.

- {{domxref("EXT_disjoint_timer_query.createQueryEXT()", "ext.createQueryEXT()")}}
  - : Creates a new {{domxref("WebGLQuery")}}.
- {{domxref("EXT_disjoint_timer_query.deleteQueryEXT()", "ext.deleteQueryEXT()")}}
  - : Deletes a given {{domxref("WebGLQuery")}}.
- {{domxref("EXT_disjoint_timer_query.isQueryEXT()", "ext.isQueryEXT()")}}
  - : Returns `true` if a given object is a valid {{domxref("WebGLQuery")}}.
- {{domxref("EXT_disjoint_timer_query.beginQueryEXT()", "ext.beginQueryEXT()")}}
  - : The timer starts when all commands prior to `beginQueryEXT` have been fully executed.
- {{domxref("EXT_disjoint_timer_query.endQueryEXT()", "ext.endQueryEXT()")}}
  - : The timer stops when all commands prior to `endQueryEXT` have been fully executed.
- {{domxref("EXT_disjoint_timer_query.queryCounterEXT()", "ext.queryCounterEXT()")}}
  - : Records the current time into the corresponding query object.
- {{domxref("EXT_disjoint_timer_query.getQueryEXT()", "ext.getQueryEXT()")}}
  - : Returns information about a query target.
- {{domxref("EXT_disjoint_timer_query.getQueryObjectEXT()", "ext.getQueryObjectEXT()")}}
  - : Return the state of a query object.

## Examples

```js
const ext = gl.getExtension("EXT_disjoint_timer_query");
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.getExtension()")}}
