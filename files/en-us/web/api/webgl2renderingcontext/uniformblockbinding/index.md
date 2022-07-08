---
title: WebGL2RenderingContext.uniformBlockBinding()
slug: Web/API/WebGL2RenderingContext/uniformBlockBinding
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - WebGL
  - WebGL2
browser-compat: api.WebGL2RenderingContext.uniformBlockBinding
---
{{APIRef("WebGL")}}

The **`WebGL2RenderingContext.uniformBlockBinding()`** method
of the [WebGL 2 API](/en-US/docs/Web/API/WebGL_API) assigns binding points
for active uniform blocks.

## Syntax

```js
uniformBlockBinding(program, uniformBlockIndex, uniformBlockBinding)
```

### Parameters

- `program`
  - : A {{domxref("WebGLProgram")}} containing the active uniform block whose binding to
    assign.
- `uniformBlockIndex`
  - : A {{domxref("WebGL_API/Types", "GLuint")}} specifying the index of the active uniform block within the
    program.
- `uniformBlockBinding`
  - : A {{domxref("WebGL_API/Types", "GLuint")}} specifying the binding point to which to bind the uniform
    block.

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
gl.uniformBlockBinding(program, 0, 1);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGL2RenderingContext.getUniformIndices()")}}
