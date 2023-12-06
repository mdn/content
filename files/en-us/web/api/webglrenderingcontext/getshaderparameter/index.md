---
title: "WebGLRenderingContext: getShaderParameter() method"
short-title: getShaderParameter()
slug: Web/API/WebGLRenderingContext/getShaderParameter
page-type: web-api-instance-method
browser-compat: api.WebGLRenderingContext.getShaderParameter
---

{{APIRef("WebGL")}}

The **`WebGLRenderingContext.getShaderParameter()`** method of
the [WebGL API](/en-US/docs/Web/API/WebGL_API) returns information about the
given shader.

## Syntax

```js-nolint
getShaderParameter(shader, pname)
```

### Parameters

- `shader`
  - : A {{domxref("WebGLShader")}} to get parameter information from.
- `pname`

  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying the information to query. Possible values:

    - `gl.DELETE_STATUS`
      - : Returns a {{domxref("WebGL_API/Types", "GLboolean")}} indicating
        whether or not the shader is flagged for deletion.
    - `gl.COMPILE_STATUS`
      - : Returns a {{domxref("WebGL_API/Types", "GLboolean")}} indicating
        whether or not the last shader compilation was successful.
    - `gl.SHADER_TYPE`
      - : Returns a {{domxref("WebGL_API/Types", "GLenum")}} indicating whether
        the shader is a vertex shader (`gl.VERTEX_SHADER`) or fragment shader
        (`gl.FRAGMENT_SHADER`) object.

### Return value

Returns the requested shader information (as specified with `pname`).

## Examples

```js
gl.getShaderParameter(shader, gl.SHADER_TYPE);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.getProgramParameter()")}}
