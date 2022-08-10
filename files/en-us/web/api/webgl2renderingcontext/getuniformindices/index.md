---
title: WebGL2RenderingContext.getUniformIndices()
slug: Web/API/WebGL2RenderingContext/getUniformIndices
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - WebGL
  - WebGL2
browser-compat: api.WebGL2RenderingContext.getUniformIndices
---
{{APIRef("WebGL")}}

The **`WebGL2RenderingContext.getUniformIndices()`** method of
the [WebGL 2 API](/en-US/docs/Web/API/WebGL_API) retrieves the indices of a
number of uniforms within a {{domxref("WebGLProgram")}}.

## Syntax

```js
getUniformIndices(program, uniformNames)
```

### Parameters

- `program`
  - : A {{domxref("WebGLProgram")}} containing uniforms whose indices to query.
- `uniformNames`
  - : An {{jsxref("Array")}} of string specifying the names of the
    uniforms to query.

### Return value

An {{jsxref("Array")}} of {{domxref("WebGL_API/Types", "GLuint")}} containing the uniform indices.

## Examples

```js
const uniformIndices = gl.getUniformIndices(program, ['UBORed', 'UBOGreen', 'UBOBlue']);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGL2RenderingContext.getUniformBlockIndex()")}}
