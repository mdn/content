---
title: WebGLShaderPrecisionFormat.precision
slug: Web/API/WebGLShaderPrecisionFormat/precision
tags:
  - API
  - Property
  - Reference
  - WebGL
browser-compat: api.WebGLShaderPrecisionFormat.precision
---
{{APIRef("WebGL")}}

The read-only **`WebGLShaderPrecisionFormat.precision`** property returns the number of bits of precision that can be represented.

For integer formats this value is always 0.

## Examples

```js
var canvas = document.getElementById('canvas');
var gl = canvas.getContext('webgl');

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
