---
title: "WebGL2RenderingContext: createSampler() method"
short-title: createSampler()
slug: Web/API/WebGL2RenderingContext/createSampler
page-type: web-api-instance-method
browser-compat: api.WebGL2RenderingContext.createSampler
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

The **`WebGL2RenderingContext.createSampler()`** method of the
[WebGL 2 API](/en-US/docs/Web/API/WebGL_API) creates and initializes
{{domxref("WebGLSampler")}} objects.

## Syntax

```js-nolint
createSampler()
```

### Parameters

None.

### Return value

A {{domxref("WebGLSampler")}} object.

## Examples

`gl` must be a {{domxref("WebGL2RenderingContext")}}.
`WebGLSampler` objects are not available in WebGL 1.

```js
const sampler = gl.createSampler();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLSampler")}}
