---
title: "GPURenderBundleEncoder: setPipeline() method"
short-title: setPipeline()
slug: Web/API/GPURenderBundleEncoder/setPipeline
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.GPURenderBundleEncoder.setPipeline
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`setPipeline()`** method of the
{{domxref("GPURenderBundleEncoder")}} interface sets the {{domxref("GPURenderPipeline")}} to use for subsequent render bundle commands.

> [!NOTE]
> This method is functionally identical to its equivalent on {{domxref("GPURenderPassEncoder")}} — {{domxref("GPURenderPassEncoder.setPipeline", "setPipeline()")}}.

## Syntax

```js-nolint
setPipeline(pipeline)
```

### Parameters

- `pipeline`
  - : The {{domxref("GPURenderPipeline")}} to use for subsequent render bundle commands.

### Return value

None ({{jsxref("Undefined")}}).

### Validation

The following criteria must be met when calling **`setPipeline()`**, otherwise a {{domxref("GPUValidationError")}} is generated and the {{domxref("GPURenderBundleEncoder")}} becomes invalid:

- If the {{domxref("GPURenderPipeline")}} writes to the depth component of the depth/stencil attachment, `depthReadOnly` (as specified in the descriptor of the originating {{domxref("GPUCommandEncoder.beginRenderPass()")}} call) is `true`.
- If the {{domxref("GPURenderPipeline")}} writes to the stencil component of the depth/stencil attachment, `stencilReadOnly` (as specified in the descriptor of the originating {{domxref("GPUCommandEncoder.beginRenderPass()")}} call) is `true`.

## Examples

```js
function recordRenderPass(passEncoder) {
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

The above snippet is taken from the WebGPU Samples [Animometer example](https://webgpu.github.io/webgpu-samples/samples/animometer/).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
