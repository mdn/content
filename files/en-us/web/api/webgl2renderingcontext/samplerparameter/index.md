---
title: WebGL2RenderingContext.samplerParameter[if]()
slug: Web/API/WebGL2RenderingContext/samplerParameter
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - WebGL
  - WebGL2
browser-compat: api.WebGL2RenderingContext.samplerParameteri
---
{{APIRef("WebGL")}}

The **`WebGL2RenderingContext.samplerParameter[if]()`** methods
of the [WebGL 2 API](/en-US/docs/Web/API/WebGL_API) set
{{domxref("WebGLSampler")}} parameters.

## Syntax

```js
samplerParameteri(sampler, pname, param)
samplerParameterf(sampler, pname, param)
```

### Parameters

- `sampler`
  - : A {{domxref("WebGLSampler")}} object.
- `pname`

  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying which parameter to set. Possible values:

    - `gl.TEXTURE_COMPARE_FUNC`
      - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying the
        texture comparison function.
    - `gl.TEXTURE_COMPARE_MODE`
      - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying the
        texture comparison mode.
    - `gl.TEXTURE_MAG_FILTER`
      - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying the
        texture magnification filter.
    - `gl.TEXTURE_MAX_LOD`
      - : A {{domxref("WebGL_API/Types", "GLfloat")}} specifying the maximum
        level-of-detail value.
    - `gl.TEXTURE_MIN_FILTER`
      - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying the
        texture minification filter
    - `gl.TEXTURE_MIN_LOD`
      - : A {{domxref("WebGL_API/Types", "GLfloat")}} specifying the minimum
        level-of-detail value.
    - `gl.TEXTURE_WRAP_R`
      - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying the texture
        wrapping function for the texture coordinate r.
    - `gl.TEXTURE_WRAP_S`
      - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying the texture
        wrapping function for the texture coordinate s.
    - `gl.TEXTURE_WRAP_T`
      - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying the texture
        wrapping function for the texture coordinate t.

- `param`
  - : A {{domxref("WebGL_API/Types", "GLint")}} (`samplerParameteri`) or a {{domxref("WebGL_API/Types", "GLfloat")}}
    (`samplerParameterf`) specifying a value for `pname`.

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
const sampler = gl.createSampler();
gl.samplerParameteri(sampler, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
```

## Specifications

{{Compat}}

## See also

- {{domxref("WebGLSampler")}}
