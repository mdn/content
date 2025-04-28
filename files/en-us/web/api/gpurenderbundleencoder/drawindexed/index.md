---
title: "GPURenderBundleEncoder: drawIndexed() method"
short-title: drawIndexed()
slug: Web/API/GPURenderBundleEncoder/drawIndexed
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.GPURenderBundleEncoder.drawIndexed
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`drawIndexed()`** method of the
{{domxref("GPURenderBundleEncoder")}} interface draws indexed primitives based on the vertex and index buffers provided by {{domxref("GPURenderBundleEncoder.setVertexBuffer", "setVertexBuffer()")}} and {{domxref("GPURenderBundleEncoder.setIndexBuffer", "setIndexBuffer()")}}.

> [!NOTE]
> This method is functionally identical to its equivalent on {{domxref("GPURenderPassEncoder")}} — {{domxref("GPURenderPassEncoder.drawIndexed", "drawIndexed()")}}.

## Syntax

```js-nolint
drawIndexed(indexCount)
drawIndexed(indexCount, instanceCount)
drawIndexed(indexCount, instanceCount, firstIndex)
drawIndexed(indexCount, instanceCount, firstIndex, baseVertex)
drawIndexed(indexCount, instanceCount, firstIndex, baseVertex, firstInstance)
```

### Parameters

- `indexCount`
  - : A number defining the number of indices to draw.
- `instanceCount` {{optional_inline}}
  - : A number defining the number of instances to draw. If omitted, `instanceCount` defaults to 1.
- `firstIndex` {{optional_inline}}
  - : A number defining the offset into the index buffer, in indices, to begin drawing from. If omitted, `firstIndex` defaults to 0.
- `baseVertex` {{optional_inline}}
  - : A number added to each index value before indexing into the vertex buffers. If omitted, `baseVertex` defaults to 0.
- `firstInstance` {{optional_inline}}
  - : A number defining the first instance to draw. If omitted, `firstInstance` defaults to 0.

### Return value

None ({{jsxref("Undefined")}}).

## Examples

```js
// …

const bundleEncoder = device.createRenderBundleEncoder(descriptor);

bundleEncoder.setPipeline(pipeline);
bundleEncoder.setBindGroup(0, sceneBindGroupForRender);
bundleEncoder.setBindGroup(1, modelBindGroup);
bundleEncoder.setVertexBuffer(0, vertexBuffer);
bundleEncoder.setIndexBuffer(indexBuffer, "uint16");
bundleEncoder.drawIndexed(indexCount);

const renderBundle = bundleEncoder.finish();

// …
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
