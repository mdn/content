---
title: WebGL2RenderingContext.deleteTransformFeedback()
slug: Web/API/WebGL2RenderingContext/deleteTransformFeedback
tags:
  - API
  - Method
  - Reference
  - WebGL
  - WebGL2
browser-compat: api.WebGL2RenderingContext.deleteTransformFeedback
---
{{APIRef("WebGL")}}

The **`WebGL2RenderingContext.deleteTransformFeedback()`**
method of the [WebGL 2 API](/en-US/docs/Web/API/WebGL_API) deletes a given
{{domxref("WebGLTransformFeedback")}} object.

## Syntax

```js
void gl.deleteTransformFeedback(transformFeedback);
```

### Parameters

- `transformFeedback`
  - : A {{domxref("WebGLTransformFeedback")}} object to delete.

### Return value

None.

## Examples

`gl` must be a {{domxref("WebGL2RenderingContext")}}.
`WebGLTransformFeedback` objects are not available in WebGL 1.

```js
var transformFeedback = gl.createTransformFeedback();

// ...

gl.deleteTransformFeedback(transformFeedback);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLTransformFeedback")}}
