---
title: "GPUCanvasContext: unconfigure() method"
short-title: unconfigure()
slug: Web/API/GPUCanvasContext/unconfigure
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.GPUCanvasContext.unconfigure
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}

The **`unconfigure()`** method of the
{{domxref("GPUCanvasContext")}} interface removes any previously-set context configuration, and destroys any textures returned via {{domxref("GPUCanvasContext.getCurrentTexture", "getCurrentTexture()")}} while the canvas context was configured.

## Syntax

```js-nolint
unconfigure()
```

### Parameters

None.

### Return value

None (`undefined`).

## Examples

```js
const canvas = document.querySelector("#gpuCanvas");
const context = canvas.getContext("webgpu");

context.configure({
  device: device,
  format: navigator.gpu.getPreferredCanvasFormat(),
  alphaMode: "premultiplied",
});

// Later on
context.unconfigure();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
