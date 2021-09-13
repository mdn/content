---
title: WebGL2RenderingContext.getTransformFeedbackVarying()
slug: Web/API/WebGL2RenderingContext/getTransformFeedbackVarying
tags:
  - API
  - Method
  - Reference
  - WebGL
  - WebGL2
browser-compat: api.WebGL2RenderingContext.getTransformFeedbackVarying
---
{{APIRef("WebGL")}}

The **`WebGL2RenderingContext.getTransformFeedbackVarying()`**
method of the [WebGL 2 API](/en-US/docs/Web/API/WebGL_API) returns
information about varying variables from {{domxref("WebGLTransformFeedback")}} buffers.

## Syntax

```js
WebGLActiveInfo gl.getTransformFeedbackVarying(program, index);
```

### Parameters

- program
  - : A {{domxref("WebGLProgram")}}.
- index
  - : A {{domxref("WebGL_API/Types", "GLuint")}} specifying the index of the varying variable whose
    information to retrieve`.`

### Return value

A {{domxref("WebGLActiveInfo")}} object.

## Examples

```js
activeInfo = gl.getTransformFeedbackVarying(program, 0);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLTransformFeedback")}}
