---
title: GPUCommandBuffer
slug: Web/API/GPUCommandBuffer
page-type: web-api-interface
status:
  - experimental
browser-compat: api.GPUCommandBuffer
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`GPUCommandBuffer`** interface of the {{domxref("WebGPU API", "WebGPU API", "", "nocode")}} represents a pre-recorded list of GPU commands that can be submitted to a {{domxref("GPUQueue")}} for execution.

A `GPUCommandBuffer` is created via the {{domxref("GPUCommandEncoder.finish()")}} method; the GPU commands recorded within are submitted for execution by passing the `GPUCommandBuffer` into the parameter of a {{domxref("GPUQueue.submit()")}} call.

> [!NOTE]
> Once a `GPUCommandBuffer` object has been submitted, it cannot be used again.

{{InheritanceDiagram}}

## Instance properties

- {{domxref("GPUCommandBuffer.label", "label")}} {{Experimental_Inline}}
  - : A string providing a label that can be used to identify the object, for example in {{domxref("GPUError")}} messages or console warnings.

## Examples

```js
// ...

const commandBuffer = commandEncoder.finish();
device.queue.submit([commandBuffer]);
```

> [!NOTE]
> Study the [WebGPU samples](https://webgpu.github.io/webgpu-samples/) to find complete examples.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
