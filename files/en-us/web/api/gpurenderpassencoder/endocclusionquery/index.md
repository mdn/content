---
title: "GPURenderPassEncoder: endOcclusionQuery() method"
short-title: endOcclusionQuery()
slug: Web/API/GPURenderPassEncoder/endOcclusionQuery
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.GPURenderPassEncoder.endOcclusionQuery
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}

The **`endOcclusionQuery()`** method of the
{{domxref("GPURenderPassEncoder")}} interface ends an active occlusion query previously started with {{domxref("GPURenderPassEncoder.beginOcclusionQuery", "beginOcclusionQuery()")}}.

## Syntax

```js-nolint
endOcclusionQuery()
```

### Parameters

None.

### Return value

None ({{jsxref("Undefined")}}).

### Validation

The following criteria must be met when calling **`endOcclusionQuery()`**, otherwise a {{domxref("GPUValidationError")}} is generated and the {{domxref("GPURenderPassEncoder")}} becomes invalid:

- An occlusion query is active for this render pass (i.e. via a previous `beginOcclusionQuery()` call).

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
