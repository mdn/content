---
title: "GPUCanvasContext: getCurrentTexture() method"
short-title: getCurrentTexture()
slug: Web/API/GPUCanvasContext/getCurrentTexture
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.GPUCanvasContext.getCurrentTexture
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`getCurrentTexture()`** method of the
{{domxref("GPUCanvasContext")}} interface returns the next {{domxref("GPUTexture")}} to be composited to the document by the canvas context.

## Syntax

```js-nolint
getCurrentTexture()
```

### Parameters

None.

### Return value

A {{domxref("GPUTexture")}} object instance.

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if `getCurrentTexture()` is called on the canvas context before it is configured (i.e. before {{domxref("GPUCanvasContext.configure()")}} has been called).

## Examples

```js
const canvas = document.querySelector("#gpuCanvas");
const context = canvas.getContext("webgpu");

context.configure({
  device: device,
  format: navigator.gpu.getPreferredCanvasFormat(),
  alphaMode: "premultiplied",
});

//...
// Later on
const commandEncoder = device.createCommandEncoder();

const renderPassDescriptor = {
  colorAttachments: [
    {
      clearValue: [0, 0, 0, 1], // Opaque black
      loadOp: "clear",
      storeOp: "store",
      view: context.getCurrentTexture().createView(),
    },
  ],
};

const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
