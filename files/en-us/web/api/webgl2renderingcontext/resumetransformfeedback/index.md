---
title: "WebGL2RenderingContext: resumeTransformFeedback() method"
short-title: resumeTransformFeedback()
slug: Web/API/WebGL2RenderingContext/resumeTransformFeedback
page-type: web-api-instance-method
browser-compat: api.WebGL2RenderingContext.resumeTransformFeedback
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

The **`WebGL2RenderingContext.resumeTransformFeedback()`**
method of the [WebGL 2 API](/en-US/docs/Web/API/WebGL_API) resumes a
transform feedback operation.

## Syntax

```js-nolint
resumeTransformFeedback()
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
//…
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
