---
title: "GPUCommandEncoder: writeTimestamp() method"
short-title: writeTimestamp()
slug: Web/API/GPUCommandEncoder/writeTimestamp
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.GPUCommandEncoder.writeTimestamp
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}

The **`writeTimestamp()`** method of the
{{domxref("GPUCommandEncoder")}} interface encodes a command that writes a timestamp into a {{domxref("GPUQuerySet")}} once the previous commands recorded into the same queued {{domxref("GPUCommandBuffer")}} have been executed by the GPU.

> **Note:** To use timestamp queries, the `timestamp-query` {{domxref("GPUSupportedFeatures", "feature", "", "nocode")}} must be enabled in the {{domxref("GPUDevice")}}.

## Syntax

```js-nolint
writeTimestamp(querySet, queryIndex)
```

### Parameters

- `querySet`
  - : A {{domxref("GPUQuerySet")}} object representing the query set that will store the timestamp values.
- `queryIndex`
  - : A number representing the index of the query in the query set.

### Return value

None ({{jsxref("Undefined")}}).

### Validation

The following criteria must be met when calling **`writeTimestamp()`**, otherwise a {{domxref("GPUValidationError")}} is generated and the {{domxref("GPUCommandEncoder")}} becomes invalid:

- The `timestamp-query` {{domxref("GPUSupportedFeatures", "feature", "", "nocode")}} is enabled in the {{domxref("GPUDevice")}}.
- The `querySet` {{domxref("GPUQuerySet.type")}} is `"timestamp"`
- The `queryIndex` value is less than the {{domxref("GPUQuerySet.count")}}.

## Examples

```js
// ...

const querySet = device.createQuerySet({
  type: "timestamp",
  count: 32,
});

// ...

commandEncoder.writeTimestamp(querySet, 0);

// ...
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
