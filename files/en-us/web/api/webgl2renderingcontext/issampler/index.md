---
title: WebGL2RenderingContext.isSampler()
slug: Web/API/WebGL2RenderingContext/isSampler
tags:
  - API
  - Method
  - Reference
  - WebGL
  - WebGL2
browser-compat: api.WebGL2RenderingContext.isSampler
---
{{APIRef("WebGL")}}

The **`WebGL2RenderingContext.isSampler()`** method of the [WebGL 2 API](/en-US/docs/Web/API/WebGL_API) returns `true` if the
passed object is a valid {{domxref("WebGLSampler")}} object.

## Syntax

```js
GLboolean gl.isSampler(sampler);
```

### Parameters

- `sampler`
  - : A {{domxref("WebGLSampler")}} object to test.

### Return value

A {{domxref("WebGL_API/Types", "GLboolean")}} indicating whether the given object is a valid
{{domxref("WebGLSampler")}} object (`true`) or not (`false`).

## Examples

`gl` must be a {{domxref("WebGL2RenderingContext")}}.
`WebGLSampler` objects are not available in WebGL 1.

```js
var sampler = gl.createSampler();

// ...

gl.isSampler(sampler);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLSampler")}}
