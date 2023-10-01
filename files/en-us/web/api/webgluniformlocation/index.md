---
title: WebGLUniformLocation
slug: Web/API/WebGLUniformLocation
page-type: web-api-interface
browser-compat: api.WebGLUniformLocation
---

{{APIRef("WebGL")}}

The **WebGLUniformLocation** interface is part of the [WebGL API](/en-US/docs/Web/API/WebGL_API) and represents the location of a uniform variable in a shader program.

## Description

The `WebGLUniformLocation` object does not define any methods or properties of its own and its content is not directly accessible. When working with `WebGLUniformLocation` objects, the following methods of the {{domxref("WebGLRenderingContext")}} are useful:

- {{domxref("WebGLRenderingContext.getUniformLocation()")}}
- {{domxref("WebGLRenderingContext.uniform()")}}

## Examples

### Getting an uniform location

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");

const location = gl.getUniformLocation(WebGLProgram, "uniformName");
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.getUniformLocation()")}}
