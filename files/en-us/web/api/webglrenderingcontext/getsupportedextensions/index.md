---
title: "WebGLRenderingContext: getSupportedExtensions() method"
short-title: getSupportedExtensions()
slug: Web/API/WebGLRenderingContext/getSupportedExtensions
page-type: web-api-instance-method
browser-compat: api.WebGLRenderingContext.getSupportedExtensions
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

The **`WebGLRenderingContext.getSupportedExtensions()`** method
returns a list of all the supported [WebGL](/en-US/docs/Web/API/WebGL_API)
extensions.

## Syntax

```js-nolint
getSupportedExtensions()
```

### Parameters

None.

### Return value

An {{jsxref("Array")}} of strings with all the supported WebGL extensions.

## Examples

```js
const canvas = document.getElementById("canvas");
gl = canvas.getContext("webgl");

const extensions = gl.getSupportedExtensions();
// Array [ 'ANGLE_instanced_arrays', 'EXT_blend_minmax', … ]
```

See also the {{domxref("WebGLRenderingContext.getExtension()")}} method to get a
specific extension object.

## WebGL extensions

Extensions for the WebGL API are registered in the [WebGL Extension Registry](https://registry.khronos.org/webgl/extensions/). They are also listed [here](/en-US/docs/Web/API/WebGL_API#extensions).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.getExtension()")}}
- [webglreport.com](https://webglreport.com/)
