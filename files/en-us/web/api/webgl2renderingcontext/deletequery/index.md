---
title: WebGL2RenderingContext.deleteQuery()
slug: Web/API/WebGL2RenderingContext/deleteQuery
tags:
  - API
  - Method
  - Reference
  - WebGL
  - WebGL2
browser-compat: api.WebGL2RenderingContext.deleteQuery
---
{{APIRef("WebGL")}}

The **`WebGL2RenderingContext.deleteQuery()`** method of the [WebGL 2 API](/en-US/docs/Web/API/WebGL_API) deletes a given
{{domxref("WebGLQuery")}} object.

## Syntax

```js
void gl.deleteQuery(query);
```

### Parameters

- `query`
  - : A {{domxref("WebGLQuery")}} object to delete.

### Return value

None.

## Examples

`gl` must be a {{domxref("WebGL2RenderingContext")}}.
`WebGLQuery` objects are not available in WebGL 1.

```js
var query = gl.createQuery();

// ...

gl.deleteQuery(query);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLQuery")}}
