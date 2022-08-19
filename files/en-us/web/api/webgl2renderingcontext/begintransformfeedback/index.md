---
title: WebGL2RenderingContext.beginTransformFeedback()
slug: Web/API/WebGL2RenderingContext/beginTransformFeedback
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - WebGL
  - WebGL2
browser-compat: api.WebGL2RenderingContext.beginTransformFeedback
---
{{APIRef("WebGL")}}

The **`WebGL2RenderingContext.beginTransformFeedback()`**
method of the [WebGL 2 API](/en-US/docs/Web/API/WebGL_API) starts a transform
feedback operation.

## Syntax

```js
beginTransformFeedback(primitiveMode)
```

### Parameters

- `primitiveMode`

  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying the output type of the primitives that will be
    recorded into the buffer objects that are bound for transform feedback. Possible
    values:

    - `gl.POINTS`
    - `gl.LINES`
    - `gl.TRIANGLES`

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
const transformFeedback = gl.createTransformFeedback();
gl.bindTransformFeedback(gl.TRANSFORM_FEEDBACK, transformFeedback);
gl.beginTransformFeedback(gl.TRIANGLES);
gl.drawArrays(gl.TRIANGLES, 0, 3);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLTransformFeedback")}}
