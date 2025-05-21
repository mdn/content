---
title: GPUComputePassEncoder
slug: Web/API/GPUComputePassEncoder
page-type: web-api-interface
status:
  - experimental
browser-compat: api.GPUComputePassEncoder
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`GPUComputePassEncoder`** interface of the {{domxref("WebGPU API", "WebGPU API", "", "nocode")}} encodes commands related to controlling the compute shader stage, as issued by a {{domxref("GPUComputePipeline")}}. It forms part of the overall encoding activity of a {{domxref("GPUCommandEncoder")}}.

A compute pipeline contains a single compute stage in which a compute shader takes general data, processes it in parallel across a specified number of workgroups, then returns the result in one or more buffers.

A `GPUComputePassEncoder` object instance is created via the {{domxref("GPUCommandEncoder.beginComputePass()")}} property.

{{InheritanceDiagram}}

## Instance properties

- {{domxref("GPUComputePassEncoder.label", "label")}} {{Experimental_Inline}}
  - : A string providing a label that can be used to identify the object, for example in {{domxref("GPUError")}} messages or console warnings.

## Instance methods

- {{domxref("GPUComputePassEncoder.dispatchWorkgroups", "dispatchWorkgroups()")}} {{Experimental_Inline}}
  - : Dispatches a specific grid of workgroups to perform the work being done by the current {{domxref("GPUComputePipeline")}}.
- {{domxref("GPUComputePassEncoder.dispatchWorkgroupsIndirect", "dispatchWorkgroupsIndirect()")}} {{Experimental_Inline}}
  - : Dispatches a grid of workgroups, defined by the parameters of a {{domxref("GPUBuffer")}}, to perform the work being done by the current {{domxref("GPUComputePipeline")}}.
- {{domxref("GPUComputePassEncoder.end", "end()")}} {{Experimental_Inline}}
  - : Completes recording of the current compute pass command sequence.
- {{domxref("GPUComputePassEncoder.insertDebugMarker", "insertDebugMarker()")}} {{Experimental_Inline}}
  - : Marks a specific point in a series of encoded commands with a label.
- {{domxref("GPUComputePassEncoder.popDebugGroup", "popDebugGroup()")}} {{Experimental_Inline}}
  - : Ends a debug group, which is begun with a {{domxref("GPUComputePassEncoder.pushDebugGroup", "pushDebugGroup()")}} call.
- {{domxref("GPUComputePassEncoder.pushDebugGroup", "pushDebugGroup()")}} {{Experimental_Inline}}
  - : Begins a debug group, which is marked with a specified label, and will contain all subsequent encoded commands up until a {{domxref("GPUComputePassEncoder.popDebugGroup", "popDebugGroup()")}} method is invoked.
- {{domxref("GPUComputePassEncoder.setBindGroup", "setBindGroup()")}} {{Experimental_Inline}}
  - : Sets the {{domxref("GPUBindGroup")}} to use for subsequent compute commands, for a given index.
- {{domxref("GPUComputePassEncoder.setPipeline", "setPipeline()")}} {{Experimental_Inline}}
  - : Sets the {{domxref("GPUComputePipeline")}} to use for this compute pass.

## Examples

In our [basic compute demo](https://mdn.github.io/dom-examples/webgpu-compute-demo/), several commands are recorded via a {{domxref("GPUCommandEncoder")}}. Most of these commands originate from the `GPUComputePassEncoder` created via {{domxref("GPUCommandEncoder.beginComputePass()")}}.

```js
// …

// Create GPUCommandEncoder to encode commands to issue to the GPU
const commandEncoder = device.createCommandEncoder();

// Create GPUComputePassEncoder to initiate compute pass
const passEncoder = commandEncoder.beginComputePass();

// Issue commands
passEncoder.setPipeline(computePipeline);
passEncoder.setBindGroup(0, bindGroup);
passEncoder.dispatchWorkgroups(Math.ceil(BUFFER_SIZE / 64));

// End the compute pass
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

// …
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
