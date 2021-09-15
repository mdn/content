---
title: WebGL2RenderingContext.isTransformFeedback()
slug: Web/API/WebGL2RenderingContext/isTransformFeedback
tags:
  - API
  - Method
  - Reference
  - WebGL
  - WebGL2
browser-compat: api.WebGL2RenderingContext.isTransformFeedback
---
{{APIRef("WebGL")}}

The **`WebGL2RenderingContext.isTransformFeedback()`** method
of the [WebGL 2 API](/en-US/docs/Web/API/WebGL_API) returns `true`
if the passed object is a valid {{domxref("WebGLTransformFeedback")}} object.

## Syntax

```js
GLboolean gl.isTransformFeedback(transformFeedback);
```

### Parameters

- `transformFeedback`
  - : A {{domxref("WebGLTransformFeedback")}} object to test.

### Return value

A {{domxref("WebGL_API/Types", "GLboolean")}} indicating whether the given object is a valid
{{domxref("WebGLTransformFeedback")}} object (`true`) or not
(`false`).

## Examples

`gl` must be a {{domxref("WebGL2RenderingContext")}}.
`WebGLTransformFeedback` objects are not available in WebGL 1.

```js
var transformFeedback = gl.createTransformFeedback();

// ...

gl.isTransformFeedback(transformFeedback);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLTransformFeedback")}}
