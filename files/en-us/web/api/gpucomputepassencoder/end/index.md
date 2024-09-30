---
title: "GPUComputePassEncoder: end() method"
short-title: end()
slug: Web/API/GPUComputePassEncoder/end
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.GPUComputePassEncoder.end
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`end()`** method of the
{{domxref("GPUComputePassEncoder")}} interface completes recording of the current compute pass command sequence.

## Syntax

```js-nolint
end()
```

### Parameters

None.

### Return value

None ({{jsxref("Undefined")}}).

### Validation

The following criteria must be met when calling **`end()`**, otherwise a {{domxref("GPUValidationError")}} is generated and the {{domxref("GPUComputePassEncoder")}} becomes invalid:

- The {{domxref("GPUComputePassEncoder")}} is open (i.e. not already ended via an `end()` call).
- any {{domxref("GPUComputePassEncoder.pushDebugGroup", "pushDebugGroup()")}} calls made on this encoder have a corresponding {{domxref("GPUComputePassEncoder.popDebugGroup", "popDebugGroup()")}} call before `end()` is called.

## Examples

In our [basic compute demo](https://mdn.github.io/dom-examples/webgpu-compute-demo/), several commands are recorded via a {{domxref("GPUCommandEncoder")}}. Most of these commands originate from the {{domxref("GPUComputePassEncoder")}} created via {{domxref("GPUCommandEncoder.beginComputePass()")}}.

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
