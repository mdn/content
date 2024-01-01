---
title: "GPURenderBundleEncoder: setVertexBuffer() method"
short-title: setVertexBuffer()
slug: Web/API/GPURenderBundleEncoder/setVertexBuffer
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.GPURenderBundleEncoder.setVertexBuffer
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}

The **`setVertexBuffer()`** method of the
{{domxref("GPURenderBundleEncoder")}} interface sets or unsets the current {{domxref("GPUBuffer")}} for the given slot that will provide vertex data for subsequent drawing commands.

> **Note:** This method is functionally identical to its equivalent on {{domxref("GPURenderPassEncoder")}} — {{domxref("GPURenderPassEncoder.setVertexBuffer", "setVertexBuffer()")}}.

## Syntax

```js-nolint
setVertexBuffer(slot, buffer, offset, size)
```

### Parameters

- `slot`
  - : A number referencing the vertex buffer slot to set the vertex buffer for.
- `buffer`
  - : A {{domxref("GPUBuffer")}} representing the buffer containing the vertex data to use for subsequent drawing commands, or `null`, in which case any previously-set buffer in the given slot is unset.
- `offset` {{optional_inline}}
  - : A number representing the offset, in bytes, into `buffer` where the vertex data begins. If omitted, `offset` defaults to 0.
- `size` {{optional_inline}}
  - : A number representing the size, in bytes, of the vertex data contained in `buffer`. If omitted, `size` defaults to the `buffer`'s {{domxref("GPUBuffer.size")}} - `offset`.

### Return value

None ({{jsxref("Undefined")}}).

### Validation

The following criteria must be met when calling **`setVertexBuffer()`**, otherwise a {{domxref("GPUValidationError")}} is generated and the {{domxref("GPURenderBundleEncoder")}} becomes invalid:

- `buffer`'s {{domxref("GPUBuffer.usage")}} contains the `GPUBufferUsage.VERTEX` flag.
- `slot` is less than the {{domxref("GPUDevice")}}'s `maxVertexBuffers` {{domxref("GPUSupportedLimits", "limit", "", "nocode")}}.
- `offset` + `size` is less than or equal to the `buffer`'s {{domxref("GPUBuffer.size")}}.
- `offset` is a multiple of 4.

## Examples

### Set vertex buffer

```js
function recordRenderPass(
  passEncoder: GPURenderBundleEncoder | GPURenderPassEncoder // TypeScript
) {
  if (settings.dynamicOffsets) {
    passEncoder.setPipeline(dynamicPipeline);
  } else {
    passEncoder.setPipeline(pipeline);
  }
  passEncoder.setVertexBuffer(0, vertexBuffer);
  passEncoder.setBindGroup(0, timeBindGroup);
  const dynamicOffsets = [0];
  for (let i = 0; i < numTriangles; ++i) {
    if (settings.dynamicOffsets) {
      dynamicOffsets[0] = i * alignedUniformBytes;
      passEncoder.setBindGroup(1, dynamicBindGroup, dynamicOffsets);
    } else {
      passEncoder.setBindGroup(1, bindGroups[i]);
    }
    passEncoder.draw(3, 1, 0, 0);
  }
}
```

The above snippet is taken from the WebGPU Samples [Animometer example](https://webgpu.github.io/webgpu-samples/samples/animometer).

### Unset vertex buffer

```js
// Set vertex buffer in slot 0
passEncoder.setVertexBuffer(0, vertexBuffer);

// Later, unset vertex buffer in slot 0
passEncoder.setVertexBuffer(0, null);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
