---
title: "GPUComputePassEncoder: dispatchWorkgroups() method"
short-title: dispatchWorkgroups()
slug: Web/API/GPUComputePassEncoder/dispatchWorkgroups
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.GPUComputePassEncoder.dispatchWorkgroups
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`dispatchWorkgroups()`** method of the
{{domxref("GPUComputePassEncoder")}} interface dispatches a specific grid of workgroups to perform the work being done by the current {{domxref("GPUComputePipeline")}} (i.e., set via {{domxref("GPUComputePassEncoder.setPipeline()")}}).

## Syntax

```js-nolint
dispatchWorkgroups(workgroupCountX)
dispatchWorkgroups(workgroupCountX, workgroupCountY)
dispatchWorkgroups(workgroupCountX, workgroupCountY, workgroupCountZ)
```

### Parameters

- `workgroupCountX`
  - : The X dimension of the grid of workgroups to dispatch.
- `workgroupCountY` {{optional_inline}}
  - : The Y dimension of the grid of workgroups to dispatch. If omitted, `workgroupCountY` defaults to 1.
- `workgroupCountZ` {{optional_inline}}
  - : The Z dimension of the grid of workgroups to dispatch. If omitted, `workgroupCountZ` defaults to 1.

> [!NOTE]
> The X, Y, and Z dimension values passed to `dispatchWorkgroups()` and {{domxref("GPUComputePassEncoder.dispatchWorkgroupsIndirect()")}} are the number of workgroups to dispatch for each dimension, not the number of shader invocations to perform across each dimension. This matches the behavior of modern native GPU APIs, but differs from the behavior of OpenCL. This means that if a {{domxref("GPUShaderModule")}} defines an entry point with `@workgroup_size(4, 4)`, and work is dispatched to it with the call `passEncoder.dispatchWorkgroups(8, 8);`, the entry point will be invoked 1024 times total — Dispatching a 4 x 4 workgroup 8 times along both the X and Y axes. `4 * 4 * 8 * 8 = 1024`.

### Return value

None ({{jsxref("Undefined")}}).

### Validation

The following criteria must be met when calling **`dispatchWorkgroups()`**, otherwise a {{domxref("GPUValidationError")}} is generated and the {{domxref("GPUComputePassEncoder")}} becomes invalid:

- `workgroupCountX`, `workgroupCountY`, and `workgroupCountZ` are all less than or equal to the {{domxref("GPUDevice")}}'s `maxComputeWorkgroupsPerDimension` {{domxref("GPUSupportedLimits", "limit", "", "nocode")}}.

## Examples

In our [basic compute demo](https://mdn.github.io/dom-examples/webgpu-compute-demo/), several commands are recorded via a {{domxref("GPUCommandEncoder")}}. Most of these commands originate from the {{domxref("GPUComputePassEncoder")}} created via `beginComputePass()`.

At the start of the code, we set a global buffer size of 1000. Also, note that the workgroup size in the shader is set to 64.

```js
const BUFFER_SIZE = 1000;

// Compute shader
const shader = `
@group(0) @binding(0)
var<storage, read_write> output: array<f32>;

@compute @workgroup_size(64)

...

`;
```

Later in the code, the `dispatchWorkgroups()` `workgroupCountX` parameter is set based on the global buffer size and the shader workgroup count.

```js
// …

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

// …
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
