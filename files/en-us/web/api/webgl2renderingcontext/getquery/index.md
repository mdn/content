---
title: "WebGL2RenderingContext: getQuery() method"
short-title: getQuery()
slug: Web/API/WebGL2RenderingContext/getQuery
page-type: web-api-instance-method
browser-compat: api.WebGL2RenderingContext.getQuery
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

The **`WebGL2RenderingContext.getQuery()`** method of the [WebGL 2 API](/en-US/docs/Web/API/WebGL_API) returns the currently active
{{domxref("WebGLQuery")}} for the `target`, or [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null).

## Syntax

```js-nolint
getQuery(target, pname)
```

### Parameters

- `target`

  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying the target of the query. Possible values:

    - `gl.ANY_SAMPLES_PASSED`
      - : Specifies an occlusion query: these queries
        detect whether an object is visible (whether the scoped drawing commands pass the
        depth test and if so, how many samples pass).
    - `gl.ANY_SAMPLES_PASSED_CONSERVATIVE`
      - : Same as above, but less
        accurate and faster version.
    - `gl.TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN`
      - : Number of primitives that
        are written to transform feedback buffers.

- `pname`
  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying the query object target. Must be
    `gl.CURRENT_QUERY`.

### Return value

A {{domxref("WebGLQuery")}} object.

## Examples

```js
const currentQuery = gl.getQuery(gl.ANY_SAMPLES_PASSED, gl.CURRENT_QUERY);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLQuery")}}
