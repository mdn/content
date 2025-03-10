---
title: "WebGL2RenderingContext: transformFeedbackVaryings() method"
short-title: transformFeedbackVaryings()
slug: Web/API/WebGL2RenderingContext/transformFeedbackVaryings
page-type: web-api-instance-method
browser-compat: api.WebGL2RenderingContext.transformFeedbackVaryings
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

The **`WebGL2RenderingContext.transformFeedbackVaryings()`**
method of the [WebGL 2 API](/en-US/docs/Web/API/WebGL_API) specifies values
to record in {{domxref("WebGLTransformFeedback")}} buffers.

## Syntax

```js-nolint
transformFeedbackVaryings(program, varyings, bufferMode)
```

### Parameters

- `program`
  - : A {{domxref("WebGLProgram")}}.
- `varyings`
  - : An {{jsxref("Array")}} of string specifying the names of the
    varying variables to use.
- `bufferMode`
  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying the mode to use when capturing the varying
    variables. Either `gl.INTERLEAVED_ATTRIBS` or
    `gl.SEPARATE_ATTRIBS`.

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
const transformFeedback = gl.createTransformFeedback();
gl.bindTransformFeedback(gl.TRANSFORM_FEEDBACK, transformFeedback);
const transformFeedbackOutputs = ["gl_Position", "anotherOutput"];

gl.transformFeedbackVaryings(
  shaderProg,
  transformFeedbackOutputs,
  gl.INTERLEAVED_ATTRIBS,
);
gl.linkProgram(shaderProg);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLTransformFeedback")}}
