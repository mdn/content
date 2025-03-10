---
title: "GPU: getPreferredCanvasFormat() method"
short-title: getPreferredCanvasFormat()
slug: Web/API/GPU/getPreferredCanvasFormat
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.GPU.getPreferredCanvasFormat
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`getPreferredCanvasFormat()`** method of the
{{domxref("GPU")}} interface returns the optimal canvas texture format for displaying 8-bit depth, standard dynamic range content on the current system.

This is commonly used to provide a {{domxref("GPUCanvasContext.configure()")}} call with the optimal `format` value for the current system. This is recommended — if you don't use the preferred format when configuring the canvas context, you may incur additional overhead, such as additional texture copies, depending on the platform.

## Syntax

```js-nolint
getPreferredCanvasFormat()
```

### Parameters

None.

### Return value

A string indicating a canvas texture format. The value can be `rgba8unorm` or `bgra8unorm`.

### Exceptions

None.

## Examples

```js
const canvas = document.querySelector("#gpuCanvas");
const context = canvas.getContext("webgpu");

context.configure({
  device: device,
  format: navigator.gpu.getPreferredCanvasFormat(),
  alphaMode: "premultiplied",
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
