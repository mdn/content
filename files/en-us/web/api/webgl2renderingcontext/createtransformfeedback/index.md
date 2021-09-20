---
title: WebGL2RenderingContext.createTransformFeedback()
slug: Web/API/WebGL2RenderingContext/createTransformFeedback
tags:
  - API
  - Method
  - Reference
  - WebGL
  - WebGL2
browser-compat: api.WebGL2RenderingContext.createTransformFeedback
---
{{APIRef("WebGL")}}

The **`WebGL2RenderingContext.createTransformFeedback()`**
method of the [WebGL 2 API](/en-US/docs/Web/API/WebGL_API) creates and
initializes {{domxref("WebGLTransformFeedback")}} objects.

## Syntax

```js
WebGLTransformFeedback gl.createTransformFeedback();
```

### Parameters

None.

### Return value

A {{domxref("WebGLTransformFeedback")}} object.

## Examples

`gl` must be a {{domxref("WebGL2RenderingContext")}}.
`WebGLTransformFeedback` objects are not available in WebGL 1.

```js
var transformFeedback = gl.createTransformFeedback();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLTransformFeedback")}}
