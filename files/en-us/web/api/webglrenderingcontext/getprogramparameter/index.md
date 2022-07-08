---
title: WebGLRenderingContext.getProgramParameter()
slug: Web/API/WebGLRenderingContext/getProgramParameter
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - WebGL
  - WebGL2
  - WebGLRenderingContext
browser-compat: api.WebGLRenderingContext.getProgramParameter
---
{{APIRef("WebGL")}}

The **`WebGLRenderingContext.getProgramParameter()`** method of
the [WebGL API](/en-US/docs/Web/API/WebGL_API) returns information about the
given program.

## Syntax

```js
getProgramParameter(program, pname)
```

### Parameters

- `program`
  - : A {{domxref("WebGLProgram")}} to get parameter information from.
- `pname`

  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying the information to query. Possible values:

    - `gl.DELETE_STATUS`
      - : Returns a {{domxref("WebGL_API/Types", "GLboolean")}} indicating
        whether or not the program is flagged for deletion.
    - `gl.LINK_STATUS`
      - : Returns a {{domxref("WebGL_API/Types", "GLboolean")}} indicating
        whether or not the last link operation was successful.
    - `gl.VALIDATE_STATUS`
      - : Returns a {{domxref("WebGL_API/Types", "GLboolean")}} indicating
        whether or not the last validation operation was successful.
    - `gl.ATTACHED_SHADERS`
      - : Returns a {{domxref("WebGL_API/Types", "GLint")}} indicating the
        number of attached shaders to a program.
    - `gl.ACTIVE_ATTRIBUTES`
      - : Returns a {{domxref("WebGL_API/Types", "GLint")}} indicating the
        number of active attribute variables to a program.
    - `gl.ACTIVE_UNIFORMS`
      - : Returns a {{domxref("WebGL_API/Types", "GLint")}} indicating the
        number of active uniform variables to a program.
    When using a {{domxref("WebGL2RenderingContext", "WebGL 2 context", "", 1)}},
      the following values are available additionally:

      - `gl.TRANSFORM_FEEDBACK_BUFFER_MODE`
        - : Returns a
          {{domxref("WebGL_API/Types", "GLenum")}} indicating the buffer mode when transform feedback is
          active. May be `gl.SEPARATE_ATTRIBS` or
          `gl.INTERLEAVED_ATTRIBS`.
      - `gl.TRANSFORM_FEEDBACK_VARYINGS`
        - : Returns a {{domxref("WebGL_API/Types", "GLint")}}
          indicating the number of varying variables to capture in transform feedback
          mode.
      - `gl.ACTIVE_UNIFORM_BLOCKS`
        - : Returns a {{domxref("WebGL_API/Types", "GLint")}}
          indicating the number of uniform blocks containing active uniforms.

### Return value

Returns the requested program information (as specified with `pname`).

## Examples

```js
gl.getProgramParameter(program, gl.DELETE_STATUS);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.getShaderParameter()")}}
