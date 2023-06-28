---
title: "WebGLActiveInfo: name property"
short-title: name
slug: Web/API/WebGLActiveInfo/name
page-type: web-api-instance-property
browser-compat: api.WebGLActiveInfo.name
---

{{APIRef("WebGL")}}

The read-only **`WebGLActiveInfo.name`** property represents the name of the requested data returned by calling the {{domxref("WebGLRenderingContext.getActiveAttrib()", "getActiveAttrib()")}} or {{domxref("WebGLRenderingContext.getActiveUniform()", "getActiveUniform()")}} methods.

## Examples

```js
const activeAttrib = gl.getActiveAttrib(program, index);
activeAttrib.name;

const activeUniform = gl.getActiveUniform(program, index);
activeUniform.name;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLActiveInfo")}}
