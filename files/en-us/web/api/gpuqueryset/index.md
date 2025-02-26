---
title: GPUQuerySet
slug: Web/API/GPUQuerySet
page-type: web-api-interface
status:
  - experimental
browser-compat: api.GPUQuerySet
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`GPUQuerySet`** interface of the {{domxref("WebGPU API", "WebGPU API", "", "nocode")}} is used to record the results of queries on passes, such as occlusion or timestamp queries.

- Occlusion queries are available on render passes to query whether any fragment samples pass all the per-fragment tests for a set of drawing commands (including scissor, sample mask, alpha to coverage, stencil, and depth tests). To run an occlusion query, an appropriate `GPUQuerySet` must be provided as the value of the `occlusionQuerySet` descriptor property when invoking {{domxref("GPUCommandEncoder.beginRenderPass()")}} to run a render pass.

- Timestamp queries allow applications to write timestamps to a `GPUQuerySet`. To run a timestamp query, appropriate `GPUQuerySet`s must be provided inside the value of the `timestampWrites` descriptor property when invoking {{domxref("GPUCommandEncoder.beginRenderPass()")}} to run a render pass, or {{domxref("GPUCommandEncoder.beginComputePass()")}} to run a compute pass.

> [!NOTE]
> The `timestamp-query` [feature](/en-US/docs/Web/API/GPUSupportedFeatures) needs to be enabled to use timestamp queries.

A `GPUQuerySet` object instance is created using the {{domxref("GPUDevice.createQuerySet()")}} method.

{{InheritanceDiagram}}

## Instance properties

- {{domxref("GPUQuerySet.count", "count")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : A number specifying the number of queries managed by the `GPUQuerySet`.
- {{domxref("GPUQuerySet.label", "label")}} {{Experimental_Inline}}
  - : A string providing a label that can be used to identify the object, for example in {{domxref("GPUError")}} messages or console warnings.
- {{domxref("GPUQuerySet.type", "type")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : An enumerated value specifying the type of queries managed by the `GPUQuerySet`.

## Instance methods

- {{domxref("GPUQuerySet.destroy", "destroy()")}} {{Experimental_Inline}}
  - : Destroys the `GPUQuerySet`.

## Examples

The following snippet creates a `GPUQuerySet` that holds 32 occlusion query results, and then returns the `type` and `count`:

```js
const querySet = device.createQuerySet({
  type: "occlusion",
  count: 32,
});

console.log(querySet.count); // 32
console.log(querySet.type); // "occlusion"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
