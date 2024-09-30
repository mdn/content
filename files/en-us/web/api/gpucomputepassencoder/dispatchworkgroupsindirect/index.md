---
title: "GPUComputePassEncoder: dispatchWorkgroupsIndirect() method"
short-title: dispatchWorkgroupsIndirect()
slug: Web/API/GPUComputePassEncoder/dispatchWorkgroupsIndirect
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.GPUComputePassEncoder.dispatchWorkgroupsIndirect
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`dispatchWorkgroupsIndirect()`** method of the
{{domxref("GPUComputePassEncoder")}} interface dispatches a grid of workgroups, defined by the parameters of a {{domxref("GPUBuffer")}}, to perform the work being done by the current {{domxref("GPUComputePipeline")}} (i.e. set via {{domxref("GPUComputePassEncoder.setPipeline()")}}).

## Syntax

```js-nolint
dispatchWorkgroupsIndirect(indirectBuffer, indirectOffset)
```

### Parameters

- `indirectBuffer`

  - : A {{domxref("GPUBuffer")}} containing the X, Y, and Z dimensions of the grid of workgroups to dispatch. The buffer must contain a tightly packed block of three 32-bit unsigned integer values representing the dimensions (12 bytes total), given in the same order as the arguments for {{domxref("GPUComputePassEncoder.dispatchWorkgroups()")}}. So for example:

    ```js
    const uint32 = new Uint32Array(3);
    uint32[0] = 25; // The X value
    uint32[1] = 1; // The Y value
    uint32[2] = 1; // The Z value

    // Write values into a GPUBuffer
    device.queue.writeBuffer(buffer, 0, uint32, 0, uint32.length);
    ```

- `indirectOffset`
  - : The offset, in bytes, into `indirectBuffer` where the dimension data begins.

> [!NOTE]
> The X, Y, and Z dimension values passed to {{domxref("GPUComputePassEncoder.dispatchWorkgroups()")}} and `dispatchWorkgroupsIndirect()` are the number of workgroups to dispatch for each dimension, not the number of shader invocations to perform across each dimension. This matches the behavior of modern native GPU APIs, but differs from the behavior of OpenCL. This means that if a {{domxref("GPUShaderModule")}} defines an entry point with `@workgroup_size(4, 4)`, and work is dispatched to it with the call `dispatchWorkgroupsIndirect(indirectBuffer);` with `indirectBuffer` specifying X and Y dimensions of 8 and 8, the entry point will be invoked 1024 times total — Dispatching a 4 x 4 workgroup 8 times along both the X and Y axes. `4 * 4 * 8 * 8 = 1024`.

### Return value

None ({{jsxref("Undefined")}}).

### Validation

The following criteria must be met when calling **`dispatchWorkgroupsIndirect()`**, otherwise a {{domxref("GPUValidationError")}} is generated and the {{domxref("GPUComputePassEncoder")}} becomes invalid:

- `indirectBuffer`'s {{domxref("GPUBuffer.usage")}} contains the `GPUBufferUsage.INDIRECT` flag.
- `indirectOffset` + the total size specified by the `X`, `Y`, and `Z` dimensions is less than or equal to the `indirectBuffer`'s {{domxref("GPUBuffer.size")}}.
- `indirectOffset` is a multiple of 4.

## Examples

```js
// Set global buffer size
const BUFFER_SIZE = 1000;

// Compute shader; note workgroup size of 64
const shader = `
@group(0) @binding(0)
var<storage, read_write> output: array<f32>;

@compute @workgroup_size(64)

...

`;

// ...

// Create GPUCommandEncoder to encode commands to issue to the GPU
const commandEncoder = device.createCommandEncoder();

// Initiate render pass
const passEncoder = commandEncoder.beginComputePass();

// Issue commands
passEncoder.setPipeline(computePipeline);
passEncoder.setBindGroup(0, bindGroup);

const uint32 = new Uint32Array(3);
// Note workgroupCountX is set based on the global buffer size and the shader workgroup count.
uint32[0] = Math.ceil(BUFFER_SIZE / 64);
uint32[1] = 1;
uint32[2] = 1;

const workgroupDimensions = device.createBuffer({
  size: 12,
  usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.INDIRECT,
});
device.queue.writeBuffer(workgroupDimensions, 0, uint32, 0, uint32.length);

passEncoder.dispatchWorkgroupsIndirect(workgroupDimensions, 0);

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
