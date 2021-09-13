---
title: WebGL2RenderingContext.bindTransformFeedback()
slug: Web/API/WebGL2RenderingContext/bindTransformFeedback
tags:
  - API
  - Method
  - Reference
  - WebGL
  - WebGL2
browser-compat: api.WebGL2RenderingContext.bindTransformFeedback
---
{{APIRef("WebGL")}}

The **`WebGL2RenderingContext.bindTransformFeedback()`** method
of the [WebGL 2 API](/en-US/docs/Web/API/WebGL_API) binds a
passed {{domxref("WebGLTransformFeedback")}} object to the current GL state.

## Syntax

```js
void gl.bindTransformFeedback(target, transformFeedback);
```

### Parameters

- `target`
  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying the target (binding point). Must be
    `gl.TRANSFORM_FEEDBACK`.
- `transformFeedback`
  - : A {{domxref("WebGLTransformFeedback")}} object to bind.

### Return value

None.

## Examples

```js
var transformFeedback = gl.createTransformFeedback();
gl.bindTransformFeedback(gl.TRANSFORM_FEEDBACK, transformFeedback);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLTransformFeedback")}}
