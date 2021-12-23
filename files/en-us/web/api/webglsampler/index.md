---
title: WebGLSampler
slug: Web/API/WebGLSampler
tags:
  - API
  - Experimental
  - Reference
  - WebGL
  - WebGL2
browser-compat: api.WebGLSampler
---
{{APIRef("WebGL")}}

The **`WebGLSampler`** interface is part of the [WebGL 2](/en-US/docs/Web/API/WebGL_API) API and stores sampling parameters for {{domxref("WebGLTexture")}} access inside of a shader.

When working with `WebGLSampler` objects, the following methods of the {{domxref("WebGL2RenderingContext")}} are useful:

- {{domxref("WebGL2RenderingContext.createSampler()")}}
- {{domxref("WebGL2RenderingContext.deleteSampler()")}}
- {{domxref("WebGL2RenderingContext.isSampler()")}}
- {{domxref("WebGL2RenderingContext.bindSampler()")}}
- {{domxref("WebGL2RenderingContext.getSamplerParameter()")}}

## Examples

### Creating a `WebGLSampler` object

in this example, `gl` must be a {{domxref("WebGL2RenderingContext")}}. `WebGLSampler` objects are not available in WebGL 1.

```js
var sampler = gl.createSampler();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
