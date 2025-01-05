---
title: "GPURenderBundleEncoder: draw() method"
short-title: draw()
slug: Web/API/GPURenderBundleEncoder/draw
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.GPURenderBundleEncoder.draw
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`draw()`** method of the
{{domxref("GPURenderBundleEncoder")}} interface draws primitives based on the vertex buffers provided by {{domxref("GPURenderBundleEncoder.setVertexBuffer", "setVertexBuffer()")}}.

> [!NOTE]
> This method is functionally identical to its equivalent on {{domxref("GPURenderPassEncoder")}} — {{domxref("GPURenderPassEncoder.draw", "draw()")}}.

## Syntax

```js-nolint
draw(vertexCount)
draw(vertexCount, instanceCount)
draw(vertexCount, instanceCount, firstVertex)
draw(vertexCount, instanceCount, firstVertex, firstInstance)
```

### Parameters

- `vertexCount`
  - : A number defining the number of vertices to draw.
- `instanceCount` {{optional_inline}}
  - : A number defining the number of instances to draw. If omitted, `instanceCount` defaults to 1.
- `firstVertex` {{optional_inline}}
  - : A number defining the offset into the vertex buffers, in vertices, to begin drawing from. If omitted, `firstVertex` defaults to 0.
- `firstInstance` {{optional_inline}}
  - : A number defining the first instance to draw. If omitted, `firstInstance` defaults to 0.

### Return value

None ({{jsxref("Undefined")}}).

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
