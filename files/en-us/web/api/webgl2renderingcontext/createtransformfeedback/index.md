---
title: "WebGL2RenderingContext: createTransformFeedback() method"
short-title: createTransformFeedback()
slug: Web/API/WebGL2RenderingContext/createTransformFeedback
page-type: web-api-instance-method
browser-compat: api.WebGL2RenderingContext.createTransformFeedback
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

The **`WebGL2RenderingContext.createTransformFeedback()`**
method of the [WebGL 2 API](/en-US/docs/Web/API/WebGL_API) creates and
initializes {{domxref("WebGLTransformFeedback")}} objects.

## Syntax

```js-nolint
createTransformFeedback()
```

### Parameters

None.

### Return value

A {{domxref("WebGLTransformFeedback")}} object.

## Examples

`gl` must be a {{domxref("WebGL2RenderingContext")}}.
`WebGLTransformFeedback` objects are not available in WebGL 1.

```js
const transformFeedback = gl.createTransformFeedback();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLTransformFeedback")}}
