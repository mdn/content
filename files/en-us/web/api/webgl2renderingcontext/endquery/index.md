---
title: WebGL2RenderingContext.endQuery()
slug: Web/API/WebGL2RenderingContext/endQuery
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - WebGL
  - WebGL2
browser-compat: api.WebGL2RenderingContext.endQuery
---
{{APIRef("WebGL")}}

The **`WebGL2RenderingContext.endQuery()`** method of the [WebGL 2 API](/en-US/docs/Web/API/WebGL_API) marks the end of a given query
target.

## Syntax

```js
endQuery(target)
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

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
const query = gl.createQuery();
gl.beginQuery(gl.ANY_SAMPLES_PASSED, query);

// …

gl.endQuery(gl.ANY_SAMPLES_PASSED);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLQuery")}}
