---
title: WebGLRenderingContext.getShaderPrecisionFormat()
slug: Web/API/WebGLRenderingContext/getShaderPrecisionFormat
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - WebGL
  - WebGLRenderingContext
browser-compat: api.WebGLRenderingContext.getShaderPrecisionFormat
---
{{APIRef("WebGL")}}

The
**`WebGLRenderingContext.getShaderPrecisionFormat()`** method of
the [WebGL API](/en-US/docs/Web/API/WebGL_API) returns a new
{{domxref("WebGLShaderPrecisionFormat")}} object describing the range and precision for
the specified shader numeric format.

## Syntax

```js
getShaderPrecisionFormat(shaderType, precisionType)
```

### Parameters

- `shaderType`
  - : Either a `gl.FRAGMENT_SHADER` or a `gl.VERTEX_SHADER`.
- `precisionType`
  - : A precision type value. Either `gl.LOW_FLOAT`,
    `gl.MEDIUM_FLOAT`, `gl.HIGH_FLOAT`, `gl.LOW_INT`,
    `gl.MEDIUM_INT`, or `gl.HIGH_INT`.

### Return value

A {{domxref("WebGLShaderPrecisionFormat")}} object or `null`, if an error
occurs.

### Exceptions

- `gl.INVALID_ENUM` if the shader or precision types aren't recognized.
- `gl.INVALID_OPERATION` if the shader compiler isn't supported.

## Examples

The following code gets the precision format of a `gl.VERTEX_SHADER` with a
`gl.MEDIUM_FLOAT` precision type.

```js
const canvas = document.getElementById('canvas');
const gl = canvas.getContext('webgl');

gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.MEDIUM_FLOAT);
// WebGLShaderPrecisionFormat { rangeMin: 127, rangeMax: 127, precision: 23 }
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLShaderPrecisionFormat")}}
