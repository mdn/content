---
title: WebGLActiveInfo.type
slug: Web/API/WebGLActiveInfo/type
tags:
  - API
  - Property
  - Reference
  - WebGL
browser-compat: api.WebGLActiveInfo.type
---
{{APIRef("WebGL")}}

The read-only **`WebGLActiveInfo.type`** property represents the type of the requested data returned by calling the {{domxref("WebGLRenderingContext.getActiveAttrib()", "getActiveAttrib()")}} or {{domxref("WebGLRenderingContext.getActiveUniform()", "getActiveUniform()")}} methods.

## Examples

```js
var activeAttrib = gl.getActiveAttrib(program, index);
activeAttrib.type;

var activeUniform = gl.getActiveUniform(program, index);
activeUniform.type;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLActiveInfo")}}
