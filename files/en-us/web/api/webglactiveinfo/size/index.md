---
title: WebGLActiveInfo.size
slug: Web/API/WebGLActiveInfo/size
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - WebGL
browser-compat: api.WebGLActiveInfo.size
---
{{APIRef("WebGL")}}

The read-only **`WebGLActiveInfo.size`** property is a {{jsxref("Number")}} representing the size of the requested data returned by calling the {{domxref("WebGLRenderingContext.getActiveAttrib()", "getActiveAttrib()")}} or {{domxref("WebGLRenderingContext.getActiveUniform()", "getActiveUniform()")}} methods.

## Examples

```js
const activeAttrib = gl.getActiveAttrib(program, index);
activeAttrib.size;

const activeUniform = gl.getActiveUniform(program, index);
activeUniform.size;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLActiveInfo")}}
