---
title: "WebGL2RenderingContext: getActiveUniformBlockName() method"
short-title: getActiveUniformBlockName()
slug: Web/API/WebGL2RenderingContext/getActiveUniformBlockName
page-type: web-api-instance-method
browser-compat: api.WebGL2RenderingContext.getActiveUniformBlockName
---

{{APIRef("WebGL")}}

The **`WebGL2RenderingContext.getActiveUniformBlockName()`**
method of the [WebGL 2 API](/en-US/docs/Web/API/WebGL_API) retrieves the name
of the active uniform block at a given index within a {{domxref("WebGLProgram")}}.

## Syntax

```js-nolint
getActiveUniformBlockName(program, uniformBlockIndex)
```

### Parameters

- `program`
  - : A {{domxref("WebGLProgram")}} containing the uniform block.
- `uniformBlockIndex`
  - : A {{domxref("WebGL_API/Types", "GLuint")}} specifying the index of the uniform block to whose name to
    retrieve.

### Return value

A string indicating the active uniform block name.

## Examples

```js
const blockName = gl.getActiveUniformBlockName(program, 0);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGL2RenderingContext.getUniformBlockIndex()")}}
