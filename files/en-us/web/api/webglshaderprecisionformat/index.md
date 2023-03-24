---
title: WebGLShaderPrecisionFormat
slug: Web/API/WebGLShaderPrecisionFormat
page-type: web-api-interface
browser-compat: api.WebGLShaderPrecisionFormat
---

{{APIRef("WebGL")}}

The **WebGLShaderPrecisionFormat** interface is part of the [WebGL API](/en-US/docs/Web/API/WebGL_API) and represents the information returned by calling the {{domxref("WebGLRenderingContext.getShaderPrecisionFormat()")}} method.

## Instance properties

- {{domxref("WebGLShaderPrecisionFormat.rangeMin")}} {{ReadOnlyInline}}
  - : The base 2 log of the absolute value of the minimum value that can be represented.
- {{domxref("WebGLShaderPrecisionFormat.rangeMax")}} {{ReadOnlyInline}}
  - : The base 2 log of the absolute value of the maximum value that can be represented.
- {{domxref("WebGLShaderPrecisionFormat.precision")}} {{ReadOnlyInline}}
  - : The number of bits of precision that can be represented. For integer formats this value is always 0.

## Examples

A `WebGLShaderPrecisionFormat` object is returned by the {{domxref("WebGLRenderingContext.getShaderPrecisionFormat()")}} method.

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");
gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.MEDIUM_FLOAT);
// WebGLShaderPrecisionFormat { rangeMin: 127, rangeMax: 127, precision: 23 }
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.getShaderPrecisionFormat()")}}
