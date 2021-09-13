---
title: WebGL2RenderingContext.deleteSampler()
slug: Web/API/WebGL2RenderingContext/deleteSampler
tags:
  - API
  - Method
  - Reference
  - WebGL
  - WebGL2
browser-compat: api.WebGL2RenderingContext.deleteSampler
---
{{APIRef("WebGL")}}

The **`WebGL2RenderingContext.deleteSampler()`** method of the
[WebGL 2 API](/en-US/docs/Web/API/WebGL_API) deletes a given
{{domxref("WebGLSampler")}} object.

## Syntax

```js
void gl.deleteSampler(sampler);
```

### Parameters

- `sampler`
  - : A {{domxref("WebGLSampler")}} object to delete.

### Return value

None.

## Examples

`gl` must be a {{domxref("WebGL2RenderingContext")}}.
`WebGLSampler` objects are not available in WebGL 1.

```js
var sampler = gl.createSampler();

// ...

gl.deleteSampler(sampler);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLSampler")}}
