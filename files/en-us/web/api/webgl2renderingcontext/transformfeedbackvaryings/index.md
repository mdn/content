---
title: WebGL2RenderingContext.transformFeedbackVaryings()
slug: Web/API/WebGL2RenderingContext/transformFeedbackVaryings
tags:
  - API
  - Method
  - Reference
  - WebGL
  - WebGL2
browser-compat: api.WebGL2RenderingContext.transformFeedbackVaryings
---
{{APIRef("WebGL")}}

The **`WebGL2RenderingContext.transformFeedbackVaryings()`**
method of the [WebGL 2 API](/en-US/docs/Web/API/WebGL_API) specifies values
to record in {{domxref("WebGLTransformFeedback")}} buffers.

## Syntax

```js
void gl.transformFeedbackVaryings(program, varyings, bufferMode);
```

### Parameters

- program
  - : A {{domxref("WebGLProgram")}}.
- varyings
  - : An {{jsxref("Array")}} of {{domxref("DOMString")}} specifying the names of the
    varying variables to use.
- `bufferMode`
  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying the mode to use when capturing the varying
    variables. Either `gl.INTERLEAVED_ATTRIBS` or
    `gl.SEPARATE_ATTRIBS`.

### Return value

None.

## Examples

```js
var transformFeedback = gl.createTransformFeedback();
gl.bindTransformFeedback(gl.TRANSFORM_FEEDBACK, transformFeedback);
var transformFeedbackOutputs = ['gl_Position', 'anotherOutput'];

gl.transformFeedbackVaryings(shaderProg, transformFeedbackOutputs,
                             gl.INTERLEAVED_ATTRIBS);
gl.linkProgram(shaderProg);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLTransformFeedback")}}
