---
title: WebGL2RenderingContext.isQuery()
slug: Web/API/WebGL2RenderingContext/isQuery
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - WebGL
  - WebGL2
browser-compat: api.WebGL2RenderingContext.isQuery
---
{{APIRef("WebGL")}}

The **`WebGL2RenderingContext.isQuery()`** method of the [WebGL 2 API](/en-US/docs/Web/API/WebGL_API) returns `true` if the
passed object is a valid {{domxref("WebGLQuery")}} object.

## Syntax

```js
isQuery(query)
```

### Parameters

- `query`
  - : A {{domxref("WebGLQuery")}} object to test.

### Return value

A {{domxref("WebGL_API/Types", "GLboolean")}} indicating whether the given object is a valid
{{domxref("WebGLQuery")}} object (`true`) or not (`false`).

## Examples

`gl` must be a {{domxref("WebGL2RenderingContext")}}.
`WebGLQuery` objects are not available in WebGL 1.

```js
const query = gl.createQuery();

// …

gl.isQuery(query);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLQuery")}}
