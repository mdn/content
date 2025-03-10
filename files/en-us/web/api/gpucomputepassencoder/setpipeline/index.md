---
title: "GPUComputePassEncoder: setPipeline() method"
short-title: setPipeline()
slug: Web/API/GPUComputePassEncoder/setPipeline
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.GPUComputePassEncoder.setPipeline
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`setPipeline()`** method of the
{{domxref("GPUComputePassEncoder")}} interface sets the {{domxref("GPUComputePipeline")}} to use for this compute pass.

## Syntax

```js-nolint
setPipeline(pipeline)
```

### Parameters

- `pipeline`
  - : The {{domxref("GPUComputePipeline")}} to use for this compute pass.

### Return value

None ({{jsxref("Undefined")}}).

## Examples

In our [basic compute demo](https://mdn.github.io/dom-examples/webgpu-compute-demo/), several commands are recorded via a {{domxref("GPUCommandEncoder")}}. Most of these commands originate from the {{domxref("GPUComputePassEncoder")}} created via `beginComputePass()`. The `setPipeline()` call is used as appropriate to set the pipeline to use for this pass.

```js
const BUFFER_SIZE = 1000;

// ...

// Create GPUCommandEncoder to encode commands to issue to the GPU
const commandEncoder = device.createCommandEncoder();

// Initiate render pass
const passEncoder = commandEncoder.beginComputePass();

// Issue commands
passEncoder.setPipeline(computePipeline);
passEncoder.setBindGroup(0, bindGroup);
passEncoder.dispatchWorkgroups(Math.ceil(BUFFER_SIZE / 64));

// End the render pass
passEncoder.end();

// Copy output buffer to staging buffer
commandEncoder.copyBufferToBuffer(
  output,
  0, // Source offset
  stagingBuffer,
  0, // Destination offset
  BUFFER_SIZE,
);

// End frame by passing array of command buffers to command queue for execution
device.queue.submit([commandEncoder.finish()]);

// ...
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
