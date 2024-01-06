---
title: "WebGLActiveInfo: type property"
short-title: type
slug: Web/API/WebGLActiveInfo/type
page-type: web-api-instance-property
browser-compat: api.WebGLActiveInfo.type
---

{{APIRef("WebGL")}}

The read-only **`WebGLActiveInfo.type`** property represents the type of the requested data returned by calling the {{domxref("WebGLRenderingContext.getActiveAttrib()", "getActiveAttrib()")}} or {{domxref("WebGLRenderingContext.getActiveUniform()", "getActiveUniform()")}} methods.

## Examples

```js
const activeAttrib = gl.getActiveAttrib(program, index);
activeAttrib.type;

const activeUniform = gl.getActiveUniform(program, index);
activeUniform.type;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLActiveInfo")}}
