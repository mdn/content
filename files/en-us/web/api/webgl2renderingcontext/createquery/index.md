---
title: "WebGL2RenderingContext: createQuery() method"
short-title: createQuery()
slug: Web/API/WebGL2RenderingContext/createQuery
page-type: web-api-instance-method
browser-compat: api.WebGL2RenderingContext.createQuery
---

{{APIRef("WebGL")}}

The **`WebGL2RenderingContext.createQuery()`** method of the [WebGL 2 API](/en-US/docs/Web/API/WebGL_API) creates and initializes
{{domxref("WebGLQuery")}} objects, which provide ways to asynchronously query for
information.

## Syntax

```js-nolint
createQuery()
```

### Parameters

None.

### Return value

A {{domxref("WebGLQuery")}} object.

## Examples

`gl` must be a {{domxref("WebGL2RenderingContext")}}.
`WebGLQuery` objects are not available in WebGL 1.

```js
const query = gl.createQuery();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLQuery")}}
