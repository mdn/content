---
title: "WebGL2RenderingContext: getSamplerParameter() method"
short-title: getSamplerParameter()
slug: Web/API/WebGL2RenderingContext/getSamplerParameter
page-type: web-api-instance-method
browser-compat: api.WebGL2RenderingContext.getSamplerParameter
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

The **`WebGL2RenderingContext.getSamplerParameter()`** method
of the [WebGL 2 API](/en-US/docs/Web/API/WebGL_API) returns parameter
information of a {{domxref("WebGLSampler")}} object.

## Syntax

```js-nolint
getSamplerParameter(sampler, pname)
```

### Parameters

- `sampler`
  - : A {{domxref("WebGLSampler")}} object.
- `pname`

  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying which information to return. Possible values:

    - `gl.TEXTURE_COMPARE_FUNC`: Returns a {{domxref("WebGL_API/Types", "GLenum")}} indicating
      the texture comparison function.
    - `gl.TEXTURE_COMPARE_MODE`: Returns a {{domxref("WebGL_API/Types", "GLenum")}} indicating
      the texture comparison mode.
    - `gl.TEXTURE_MAG_FILTER`: Returns a {{domxref("WebGL_API/Types", "GLenum")}} indicating
      the texture magnification filter.
    - `gl.TEXTURE_MAX_LOD`: Returns a {{domxref("WebGL_API/Types", "GLfloat")}} indicating the
      maximum level-of-detail value.
    - `gl.TEXTURE_MIN_FILTER`: Returns a {{domxref("WebGL_API/Types", "GLenum")}} indicating
      the texture minification filter
    - `gl.TEXTURE_MIN_LOD`: Returns a {{domxref("WebGL_API/Types", "GLfloat")}} indicating the
      minimum level-of-detail value.
    - `gl.TEXTURE_WRAP_R`: Returns a {{domxref("WebGL_API/Types", "GLenum")}} indicating the
      texture wrapping function for the texture coordinate r.
    - `gl.TEXTURE_WRAP_S`: Returns a {{domxref("WebGL_API/Types", "GLenum")}} indicating the
      texture wrapping function for the texture coordinate s.
    - `gl.TEXTURE_WRAP_T`: Returns a {{domxref("WebGL_API/Types", "GLenum")}} indicating the
      texture wrapping function for the texture coordinate t.

### Return value

Depends on the `pname` parameter, either a {{domxref("WebGL_API/Types", "GLenum")}} or a
{{domxref("WebGL_API/Types", "GLfloat")}}.

## Examples

```js
const sampler = gl.createSampler();
gl.getSamplerParameter(sampler, gl.TEXTURE_COMPARE_FUNC);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLSampler")}}
