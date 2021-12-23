---
title: WebGLRenderingContext.getSupportedExtensions()
slug: Web/API/WebGLRenderingContext/getSupportedExtensions
tags:
  - API
  - Method
  - Reference
  - WebGL
  - WebGLRenderingContext
browser-compat: api.WebGLRenderingContext.getSupportedExtensions
---
{{APIRef("WebGL")}}

The **`WebGLRenderingContext.getSupportedExtensions()`** method
returns a list of all the supported [WebGL](/en-US/docs/Web/API/WebGL_API)
extensions.

## Syntax

```js
gl.getSupportedExtensions();
```

### Return value

An {{jsxref("Array")}} of strings with all the supported WebGL extensions.

## Examples

```js
var canvas = document.getElementById('canvas');
gl = canvas.getContext('webgl');

var extensions = gl.getSupportedExtensions();
// Array [ 'ANGLE_instanced_arrays', 'EXT_blend_minmax', ... ]
```

See also the {{domxref("WebGLRenderingContext.getExtension()")}} method to get a
specific extension object.

## WebGL extensions

Extensions for the WebGL API are registered in the [WebGL Extension
Registry](https://www.khronos.org/registry/webgl/extensions/). The current extensions are:

{{page("en-US/docs/Web/API/WebGL_API", "Extensions")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.getExtension()")}}
- [webglreport.com](http://webglreport.com)
