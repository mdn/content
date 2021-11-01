---
title: WebGLShaderPrecisionFormat.rangeMax
slug: Web/API/WebGLShaderPrecisionFormat/rangeMax
tags:
  - API
  - Property
  - Reference
  - WebGL
browser-compat: api.WebGLShaderPrecisionFormat.rangeMax
---
{{APIRef("WebGL")}}

The read-only **`WebGLShaderPrecisionFormat.rangeMax`** property returns the base 2 log of the absolute value of the maximum value that can be represented.

## Examples

```js
var canvas = document.getElementById('canvas');
var gl = canvas.getContext('webgl');

gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.MEDIUM_FLOAT).rangeMax; // 127
gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.LOW_INT).rangeMax; // 24
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLShaderPrecisionFormat")}}
- {{domxref("WebGLRenderingContext.getShaderPrecisionFormat()")}}
