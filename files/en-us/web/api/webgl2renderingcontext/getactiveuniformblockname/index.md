---
title: WebGL2RenderingContext.getActiveUniformBlockName()
slug: Web/API/WebGL2RenderingContext/getActiveUniformBlockName
tags:
  - API
  - Method
  - Reference
  - WebGL
  - WebGL2
browser-compat: api.WebGL2RenderingContext.getActiveUniformBlockName
---
{{APIRef("WebGL")}}

The **`WebGL2RenderingContext.getActiveUniformBlockName()`**
method of the [WebGL 2 API](/en-US/docs/Web/API/WebGL_API) retrieves the name
of the active uniform block at a given index within a {{domxref("WebGLProgram")}}.

## Syntax

```js
DOMString gl.getActiveUniformBlockName(program, uniformBlockIndex);
```

### Parameters

- `program`
  - : A {{domxref("WebGLProgram")}} containing the uniform block.
- `uniformBlockIndex`
  - : A {{domxref("WebGL_API/Types", "GLuint")}} specifying the index of the uniform block to whose name to
    retrieve.

### Return value

A {{domxref("DOMString")}} indicating the active uniform block name.

## Examples

```js
var blockName = gl.getActiveUniformBlockName(program, 0);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGL2RenderingContext.getUniformBlockIndex()")}}
