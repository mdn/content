---
title: "GPUCanvasContext: canvas property"
short-title: canvas
slug: Web/API/GPUCanvasContext/canvas
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.GPUCanvasContext.canvas
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}

The **`canvas`** read-only property of the
{{domxref("GPUCanvasContext")}} interface returns a reference to the canvas that the context was created from.

## Value

An {{domxref("HTMLCanvasElement")}} or {{domxref("OffscreenCanvas")}} object instance.

## Examples

```js
const canvas = document.querySelector("#gpuCanvas");
const context = canvas.getContext("webgpu");

// returns an HTMLCanvasElement reference
context.canvas;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
