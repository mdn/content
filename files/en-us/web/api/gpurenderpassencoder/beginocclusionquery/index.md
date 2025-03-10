---
title: "GPURenderPassEncoder: beginOcclusionQuery() method"
short-title: beginOcclusionQuery()
slug: Web/API/GPURenderPassEncoder/beginOcclusionQuery
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.GPURenderPassEncoder.beginOcclusionQuery
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`beginOcclusionQuery()`** method of the
{{domxref("GPURenderPassEncoder")}} interface begins an occlusion query at the specified index of the relevant {{domxref("GPUQuerySet")}} (provided as the value of the `occlusionQuerySet` descriptor property when invoking {{domxref("GPUCommandEncoder.beginRenderPass()")}} to run the render pass).

## Syntax

```js-nolint
beginOcclusionQuery(queryIndex)
```

### Parameters

- `queryIndex`
  - : The index in the {{domxref("GPUQuerySet")}} to begin the occlusion query at.

### Return value

None ({{jsxref("Undefined")}}).

### Validation

The following criteria must be met when calling **`beginOcclusionQuery()`**, otherwise a {{domxref("GPUValidationError")}} is generated and the {{domxref("GPURenderPassEncoder")}} becomes invalid:

- A {{domxref("GPUQuerySet")}} was specified in the `occlusionQuerySet` descriptor property when invoking the originating {{domxref("GPUCommandEncoder.beginRenderPass()")}}.
- `queryIndex` is smaller than {{domxref("GPUQuerySet.count")}}.
- The `queryIndex` has not already been written to in the same render pass.
- An occlusion query is not already active for this render pass (i.e. via a previous `beginOcclusionQuery()` call).

## Examples

```js
// ...

// Create a query set to hold the occlusion queries
const querySet = device.createQuerySet({
  type: "occlusion",
  count: 32,
});

// Render pass descriptor object, including the querySet
const renderPassDescriptor = {
  colorAttachments: [
    {
      clearValue: clearColor,
      loadOp: "clear",
      storeOp: "store",
      view: context.getCurrentTexture().createView(),
    },
  ],
  occlusionQuerySet: querySet,
};

// Begin the render pass
const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);

// Begin an occlusion query at index 0
passEncoder.beginOcclusionQuery(0);

// Run some rendering commands
passEncoder.setPipeline(renderPipeline);
passEncoder.setVertexBuffer(0, vertexBuffer);
passEncoder.draw(3);

// End the occlusion query
passEncoder.endOcclusionQuery();

// ...
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
