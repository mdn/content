---
title: WebGL2RenderingContext.pauseTransformFeedback()
slug: Web/API/WebGL2RenderingContext/pauseTransformFeedback
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - WebGL
  - WebGL2
browser-compat: api.WebGL2RenderingContext.pauseTransformFeedback
---
{{APIRef("WebGL")}}

The **`WebGL2RenderingContext.pauseTransformFeedback()`**
method of the [WebGL 2 API](/en-US/docs/Web/API/WebGL_API) pauses a transform
feedback operation.

## Syntax

```js
pauseTransformFeedback()
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
gl.pauseTransformFeedback();
// …
gl.resumeTransformFeedback();
gl.drawArrays(gl.TRIANGLES, 0, 3);
gl.endTransformFeedback();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLTransformFeedback")}}
