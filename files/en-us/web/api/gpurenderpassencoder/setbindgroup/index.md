---
title: GPURenderPassEncoder.setBindGroup()
slug: Web/API/GPURenderPassEncoder/setBindGroup
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.GPURenderPassEncoder.setBindGroup
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}

The **`setBindGroup()`** method of the
{{domxref("GPURenderPassEncoder")}} interface sets the {{domxref("GPUBindGroup")}} to use for subsequent render commands, for a given index.

## Syntax

```js-nolint
setBindGroup(index, bindGroup)
setBindGroup(index, bindGroup, dynamicOffsets)
setBindGroup(index, bindGroup, dynamicOffsetsData, dynamicOffsetsStart,
             dynamicOffsetsLength)
```

### Parameters

- `index`
  - : The index to set the bind group at. This corresponds to the `binding` value of the relevant entry object in the descriptor of the originating {{domxref("GPUDevice.createBindGroup()")}} call that created the `bindGroup`.
- `bindGroup`
  - : The {{domxref("GPUBindGroup")}} to use for subsequent render commands.

The other parameters taken by `setBindGroup` specify dynamic buffer offsets for entries in the {{domxref("GPUBindGroup")}} that require them (i.e. the `entries` specified with `hasDynamicOffset: true` in the descriptor of the {{domxref("GPUDevice.createBindGroupLayout()")}} call that created the {{domxref("GPUBindGroupLayout")}} object that the `bindGroup` is based on). These parameters can take one of two possible forms:

#### Form 1

- `dynamicOffsets` {{optional_inline}}
  - : An array of numbers specifying the offset, in bytes, for each entry in `bindGroup` with `hasDynamicOffset: true` set.

#### Form 2

(if this form is used, all the below parameters are required)

- `dynamicOffsetsData`
  - : A {{jsxref("Uint32Array")}} containing numbers specifying the offset, in bytes, for each entry in `bindGroup` with `hasDynamicOffset: true` set.
- `dynamicOffsetsStart`
  - : A number specifying the offset, in array elements, into `dynamicOffsetsData`, where the dynamic offset data begins.
- `dynamicOffsetsStart`
  - : A number specifying the number of dynamic offset values to be read from in `dynamicOffsetsData`.

### Return value

None ({{jsxref("Undefined")}}).

### Exceptions

For `setBindGroup()` calls that use the three parameters starting with `dynamicOffsetsData` (option 2. above), the call will throw with a `RangeError` {{domxref("DOMException")}} if:

- `dynamicOffsetsStart` is less than 0.
- `dynamicOffsetsStart` + `dynamicOffsetsLength` is greater than `dynamicOffsetsData.length`.

### Validation

The following criteria must be met when calling **`dispatchWorkgroups()`**, otherwise a {{domxref("GPUValidationError")}} is generated and the {{domxref("GPUComputePassEncoder")}} becomes invalid:

- `index` is less than or equal to the {{domxref("GPUDevice")}}'s `maxBindGroups` {{domxref("GPUSupportedLimits", "limit", "", "nocode")}}.

For `setBindGroup()` calls that use the `dynamicOffsets` parameter (option 1. above):

- `dynamicOffsets.length` is the same as the number of entries in `bindGroup` with `hasDynamicOffset: true` set.
- For `bindGroup` entries where the bound `buffer`'s `type` is `"uniform"` (see {{domxref("GPUDevice.createBindGroupLayout()")}}), each number in `dynamicOffsets` is a multiple of the {{domxref("GPUDevice")}}'s `minUniformBufferOffsetAlignment` {{domxref("GPUSupportedLimits", "limit", "", "nocode")}}.
- For `bindGroup` entries where the bound `buffer`'s `type` is `"storage"` or `"read-only-storage"` (see {{domxref("GPUDevice.createBindGroupLayout()")}}), each number in `dynamicOffsets` is a multiple of the {{domxref("GPUDevice")}}'s `minStorageBufferOffsetAlignment` {{domxref("GPUSupportedLimits", "limit", "", "nocode")}}.
- For each `bindGroup` entry, the bound `buffer`'s `offset`, plus the corresponding layout entry's `minBindingSize`, plus the corresponding dynamic offset specified in `dynamicOffsets`, is less than or equal to the bound `buffer`'s `size`.

## Examples

In the WebGPU Samples [Textured Cube example](https://webgpu.github.io/webgpu-samples/samples/texturedCube), `setBindGroup()` is used to bind the `uniformBindGroup` to index position 0. Check out the example for the full context.

```js
// ...

const commandEncoder = device.createCommandEncoder();
const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);
passEncoder.setPipeline(pipeline);
passEncoder.setBindGroup(0, uniformBindGroup);
passEncoder.setVertexBuffer(0, verticesBuffer);
passEncoder.draw(cubeVertexCount, 1, 0, 0);
passEncoder.end();
device.queue.submit([commandEncoder.finish()]);

// ...
```

> **Note:** Study the other [WebGPU Samples](https://webgpu.github.io/webgpu-samples) for more examples of `setBindGroup()` usage.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
