---
title: "WebGL2RenderingContext: deleteTransformFeedback() method"
short-title: deleteTransformFeedback()
slug: Web/API/WebGL2RenderingContext/deleteTransformFeedback
page-type: web-api-instance-method
browser-compat: api.WebGL2RenderingContext.deleteTransformFeedback
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

The **`WebGL2RenderingContext.deleteTransformFeedback()`**
method of the [WebGL 2 API](/en-US/docs/Web/API/WebGL_API) deletes a given
{{domxref("WebGLTransformFeedback")}} object.

## Syntax

```js-nolint
deleteTransformFeedback(transformFeedback)
```

### Parameters

- `transformFeedback`
  - : A {{domxref("WebGLTransformFeedback")}} object to delete.

### Return value

None ({{jsxref("undefined")}}).

## Examples

`gl` must be a {{domxref("WebGL2RenderingContext")}}.
`WebGLTransformFeedback` objects are not available in WebGL 1.

```js
const transformFeedback = gl.createTransformFeedback();

// …

gl.deleteTransformFeedback(transformFeedback);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLTransformFeedback")}}
