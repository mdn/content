---
title: WebGLShaderPrecisionFormat.rangeMin
slug: Web/API/WebGLShaderPrecisionFormat/rangeMin
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - WebGL
browser-compat: api.WebGLShaderPrecisionFormat.rangeMin
---
{{APIRef("WebGL")}}

The read-only **`WebGLShaderPrecisionFormat.rangeMin`** property returns the base 2 log of the absolute value of the minimum value that can be represented.

## Examples

```js
const canvas = document.getElementById('canvas');
const gl = canvas.getContext('webgl');

gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.MEDIUM_FLOAT).rangeMin; // 127
gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.LOW_INT).rangeMin; // 24
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLShaderPrecisionFormat")}}
- {{domxref("WebGLRenderingContext.getShaderPrecisionFormat()")}}
