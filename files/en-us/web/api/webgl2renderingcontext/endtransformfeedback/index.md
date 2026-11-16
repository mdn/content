---
title: "WebGL2RenderingContext: endTransformFeedback() method"
short-title: endTransformFeedback()
slug: Web/API/WebGL2RenderingContext/endTransformFeedback
page-type: web-api-instance-method
browser-compat: api.WebGL2RenderingContext.endTransformFeedback
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

The **`WebGL2RenderingContext.endTransformFeedback()`** method
of the [WebGL 2 API](/en-US/docs/Web/API/WebGL_API) ends a transform feedback
operation.

## Syntax

```js-nolint
endTransformFeedback()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
const transformFeedback = gl.createTransformFeedback();
gl.bindTransformFeedback(gl.TRANSFORM_FEEDBACK, transformFeedback);
gl.beginTransformFeedback(gl.TRIANGLES);
gl.drawArrays(gl.TRIANGLES, 0, 3);
gl.endTransformFeedback();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLTransformFeedback")}}
