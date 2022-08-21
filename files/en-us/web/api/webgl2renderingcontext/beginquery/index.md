---
title: WebGL2RenderingContext.beginQuery()
slug: Web/API/WebGL2RenderingContext/beginQuery
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - WebGL
  - WebGL2
browser-compat: api.WebGL2RenderingContext.beginQuery
---
{{APIRef("WebGL")}}

The **`WebGL2RenderingContext.beginQuery()`** method of the [WebGL 2 API](/en-US/docs/Web/API/WebGL_API) starts an asynchronous query. The
`target` parameter indicates which kind of query to begin.

## Syntax

```js
beginQuery(target, query)
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

- `query`
  - : A {{domxref("WebGLQuery")}} object for which to start the querying.

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
const query = gl.createQuery();
gl.beginQuery(gl.ANY_SAMPLES_PASSED, query);

// …
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLQuery")}}
