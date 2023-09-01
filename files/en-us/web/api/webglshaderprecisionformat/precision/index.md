---
title: "WebGLShaderPrecisionFormat: precision property"
short-title: precision
slug: Web/API/WebGLShaderPrecisionFormat/precision
page-type: web-api-instance-property
browser-compat: api.WebGLShaderPrecisionFormat.precision
---

{{APIRef("WebGL")}}

The read-only **`WebGLShaderPrecisionFormat.precision`** property returns the number of bits of precision that can be represented.

For integer formats this value is always 0.

## Examples

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");

gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.MEDIUM_FLOAT).precision; // 23
gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.LOW_INT).precision; // 0
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLShaderPrecisionFormat")}}
- {{domxref("WebGLRenderingContext.getShaderPrecisionFormat()")}}
