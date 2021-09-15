---
title: WebGL2RenderingContext.getUniformBlockIndex()
slug: Web/API/WebGL2RenderingContext/getUniformBlockIndex
tags:
  - API
  - Method
  - Reference
  - WebGL
  - WebGL2
browser-compat: api.WebGL2RenderingContext.getUniformBlockIndex
---
{{APIRef("WebGL")}}

The **`WebGL2RenderingContext.getUniformBlockIndex()`** method
of the [WebGL 2 API](/en-US/docs/Web/API/WebGL_API) retrieves the index of
a uniform block within a {{domxref("WebGLProgram")}}.

## Syntax

```js
GLuint gl.getUniformBlockIndex(program, uniformBlockName);
```

### Parameters

- `program`
  - : A {{domxref("WebGLProgram")}} containing the uniform block.
- `uniformName`
  - : A {{domxref("DOMString")}} specifying the name of the uniform block to whose index
    to retrieve.

### Return value

A {{domxref("WebGL_API/Types", "GLuint")}} indicating the uniform block index.

## Examples

```js
// Assuming a shader with the following declaration:
// uniform UBOData {
//   mat4 foo;
// } instanceName;

// use the block name, not the instance name:
var blockIndex = gl.getUniformBlockIndex(program, 'UBOData');
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGL2RenderingContext.getUniformIndices()")}}
