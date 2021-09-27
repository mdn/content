---
title: WebGL2RenderingContext.endTransformFeedback()
slug: Web/API/WebGL2RenderingContext/endTransformFeedback
tags:
  - API
  - Method
  - Reference
  - WebGL
  - WebGL2
browser-compat: api.WebGL2RenderingContext.endTransformFeedback
---
{{APIRef("WebGL")}}

The **`WebGL2RenderingContext.endTransformFeedback()`** method
of the [WebGL 2 API](/en-US/docs/Web/API/WebGL_API) ends a transform feedback
operation.

## Syntax

```js
void gl.endTransformFeedback();
```

### Parameters

None.

### Return value

None.

## Examples

```js
var transformFeedback = gl.createTransformFeedback();
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
