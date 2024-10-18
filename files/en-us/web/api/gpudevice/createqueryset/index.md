---
title: "GPUDevice: createQuerySet() method"
short-title: createQuerySet()
slug: Web/API/GPUDevice/createQuerySet
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.GPUDevice.createQuerySet
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`createQuerySet()`** method of the
{{domxref("GPUDevice")}} interface creates a {{domxref("GPUQuerySet")}} that can be used to record the results of queries on passes, such as occlusion or timestamp queries.

## Syntax

```js-nolint
createQuerySet(descriptor)
```

### Parameters

- `descriptor`

  - : An object containing the following properties:

    - `count`
      - : A number specifying the number of queries to be managed by the resulting {{domxref("GPUQuerySet")}}.
    - `label` {{optional_inline}}
      - : A string providing a label that can be used to identify the object, for example in {{domxref("GPUError")}} messages or console warnings.
    - `type`

      - : An enumerated value specifying the type of queries to be managed by the resulting {{domxref("GPUQuerySet")}}. Possible values are:

        - `"occlusion"`
          - : Occlusion queries are available on render passes to query the number of fragment samples that pass all the per-fragment tests for a set of drawing commands (including scissor, sample mask, alpha to coverage, stencil, and depth tests). To run an occlusion query, an appropriate {{domxref("GPUQuerySet")}} must be provided as the value of the `occlusionQuerySet` descriptor property when invoking {{domxref("GPUCommandEncoder.beginRenderPass()")}} to run a render pass.
        - `"timestamp"`

          - : Timestamp queries allow applications to write timestamps to a {{domxref("GPUQuerySet")}}. To run a timestamp query, appropriate {{domxref("GPUQuerySet")}}s must be provided inside the value of the `timestampWrites` descriptor property when invoking {{domxref("GPUCommandEncoder.beginRenderPass()")}} to run a render pass, or {{domxref("GPUCommandEncoder.beginComputePass()")}} to run a compute pass. Alternatively, you can run a single timestamp query at any time by invoking {{domxref("GPUCommandEncoder.writeTimeStamp()")}} with an appropriate {{domxref("GPUQuerySet")}} as a parameter.

            > [!NOTE]
            > The `timestamp-query` [feature](/en-US/docs/Web/API/GPUSupportedFeatures) needs to be enabled to use timestamp queries.

### Return value

A {{domxref("GPUQuerySet")}} object instance.

### Validation

The following criteria must be met when calling **`createQuerySet()`**, otherwise a {{domxref("GPUValidationError")}} is generated and an invalid {{domxref("GPUQuerySet")}} object is returned:

- `count` is less than or equal to 4096.

## Examples

The following snippet creates a {{domxref("GPUQuerySet")}} that holds 32 occlusion query results:

```js
const querySet = device.createQuerySet({
  type: "occlusion",
  count: 32,
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
