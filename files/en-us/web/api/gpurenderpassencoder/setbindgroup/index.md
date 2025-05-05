---
title: "GPURenderPassEncoder: setBindGroup() method"
short-title: setBindGroup()
slug: Web/API/GPURenderPassEncoder/setBindGroup
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.GPURenderPassEncoder.setBindGroup
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`setBindGroup()`** method of the
{{domxref("GPURenderPassEncoder")}} interface sets the {{domxref("GPUBindGroup")}} to use for subsequent render commands, for a given index.

## Syntax

```js-nolint
setBindGroup(index, bindGroup)
setBindGroup(index, bindGroup, dynamicOffsets)
setBindGroup(index, bindGroup, dynamicOffsets, dynamicOffsetsStart,
             dynamicOffsetsLength)
```

### Parameters

- `index`
  - : The index to set the bind group at. This matches the `n` index value of the corresponding [`@group(n)`](https://gpuweb.github.io/gpuweb/wgsl/#attribute-group) attribute in the shader code ({{domxref("GPUShaderModule")}}) used in the related pipeline.
- `bindGroup`
  - : The {{domxref("GPUBindGroup")}} to use for subsequent render commands, or `null`, in which case any previously-set bind group in the given slot is unset.
- `dynamicOffsets` {{optional_inline}}
  - : A value specifying the offset, in bytes, for each entry in `bindGroup` with `hasDynamicOffset: true` set (i.e., in the descriptor of the {{domxref("GPUDevice.createBindGroupLayout()")}} call that created the {{domxref("GPUBindGroupLayout")}} object that the `bindGroup` is based on). This value can be:
    - An array of numbers specifying the different offsets.
    - A {{jsxref("Uint32Array")}} containing numbers specifying the offsets.

If a {{jsxref("Uint32Array")}} value is specified for `dynamicOffsets`, both of the following parameters are also required:

- `dynamicOffsetsStart`
  - : A number specifying the offset, in array elements, into `dynamicOffsetsData`, where the dynamic offset data begins.
- `dynamicOffsetsLength`
  - : A number specifying the number of dynamic offset values to be read from in `dynamicOffsetsData`.

### Return value

None ({{jsxref("Undefined")}}).

### Exceptions

For `setBindGroup()` calls that use a {{jsxref("Uint32Array")}} value for `dynamicOffsets`, the call will throw with a `RangeError` {{domxref("DOMException")}} if:

- `dynamicOffsetsStart` is less than 0.
- `dynamicOffsetsStart` + `dynamicOffsetsLength` is greater than `dynamicOffsets.length`.

### Validation

The following criteria must be met when calling **`setBindGroup()`**, otherwise a {{domxref("GPUValidationError")}} is generated and the {{domxref("GPURenderPassEncoder")}} becomes invalid:

- `index` is less than or equal to the {{domxref("GPUDevice")}}'s `maxBindGroups` {{domxref("GPUSupportedLimits", "limit", "", "nocode")}}.
- `dynamicOffsets.length` is the same as the number of entries in `bindGroup` with `hasDynamicOffset: true` set.
- For `bindGroup` entries where the bound `buffer`'s `type` is `"uniform"` (see {{domxref("GPUDevice.createBindGroupLayout()")}}), each number in `dynamicOffsets` is a multiple of the {{domxref("GPUDevice")}}'s `minUniformBufferOffsetAlignment` {{domxref("GPUSupportedLimits", "limit", "", "nocode")}}.
- For `bindGroup` entries where the bound `buffer`'s `type` is `"storage"` or `"read-only-storage"` (see {{domxref("GPUDevice.createBindGroupLayout()")}}), each number in `dynamicOffsets` is a multiple of the {{domxref("GPUDevice")}}'s `minStorageBufferOffsetAlignment` {{domxref("GPUSupportedLimits", "limit", "", "nocode")}}.
- For each `bindGroup` entry, the bound `buffer`'s `offset`, plus the corresponding layout entry's `minBindingSize`, plus the corresponding dynamic offset specified in `dynamicOffsets`, is less than or equal to the bound `buffer`'s `size`.

## Examples

### Set bind group

In the WebGPU Samples [Textured Cube example](https://webgpu.github.io/webgpu-samples/samples/texturedCube/), `setBindGroup()` is used to bind the `uniformBindGroup` to index position 0. Check out the example for the full context.

```js
// …

const commandEncoder = device.createCommandEncoder();
const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);
passEncoder.setPipeline(pipeline);
passEncoder.setBindGroup(0, uniformBindGroup);
passEncoder.setVertexBuffer(0, verticesBuffer);
passEncoder.draw(cubeVertexCount, 1, 0, 0);
passEncoder.end();
device.queue.submit([commandEncoder.finish()]);

// …
```

> [!NOTE]
> Study the other [WebGPU Samples](https://webgpu.github.io/webgpu-samples/) for more examples of `setBindGroup()` usage.

### Unset bind group

```js
// Set bind group in slot 0
passEncoder.setBindGroup(0, uniformBindGroup);

// Later, unset bind group in slot 0
passEncoder.setBindGroup(0, null);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
