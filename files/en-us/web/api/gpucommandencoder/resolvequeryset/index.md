---
title: "GPUCommandEncoder: resolveQuerySet() method"
short-title: resolveQuerySet()
slug: Web/API/GPUCommandEncoder/resolveQuerySet
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.GPUCommandEncoder.resolveQuerySet
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`resolveQuerySet()`** method of the
{{domxref("GPUCommandEncoder")}} interface encodes a command that resolves a {{domxref("GPUQuerySet")}}, copying the results into a specified {{domxref("GPUBuffer")}}.

## Syntax

```js-nolint
resolveQuerySet(querySet, firstQuery, queryCount, destination, destinationOffset)
```

### Parameters

- `querySet`
  - : A {{domxref("GPUQuerySet")}} object representing the query set to be resolved.
- `firstQuery`
  - : The index number of the first query value to be copied over to the buffer.
- `queryCount`
  - : The number of queries to be copied over to the buffer, starting from `firstQuery`.
- `destination`
  - : A {{domxref("GPUBuffer")}} representing the buffer to copy the query values to.
- `destinationOffset`
  - : A number representing the offset, in bytes, from the start of the buffer to start writing the query values at.

### Return value

None ({{jsxref("Undefined")}}).

### Validation

The following criteria must be met when calling **`resolveQuerySet()`**, otherwise a {{domxref("GPUValidationError")}} is generated and the {{domxref("GPUCommandEncoder")}} becomes invalid:

- The `destination.buffer`'s {{domxref("GPUBuffer.usage")}} includes the `GPUBufferUsage.QUERY_RESOLVE` flag.
- `firstQuery` is smaller than the number of queries in `querySet`.
- `firstQuery` + `queryCount` is smaller than or equal to the number of queries in `querySet`.
- `destinationOffset` is a multiple of 256.
- `destinationOffset` + 8 × `queryCount` is less than or equal to `destination.size`.

## Examples

```js
// …

const queryBuffer = device.createBuffer({
  size: 1024,
  usage: GPUBufferUsage.QUERY_RESOLVE,
});

const querySet = device.createQuerySet({
  type: "timestamp",
  count: 32,
});

// …

const commandEncoder = device.createCommandEncoder();

// Write timestamps to querySet
commandEncoder.writeTimestamp(querySet, 0);
// …
commandEncoder.writeTimestamp(querySet, 1);
// etc.

// …

commandEncoder.resolveQuerySet(
  querySet,
  0, // First query to write
  16, // Number of queries to count
  queryBuffer,
  0, // Buffer offset
);

// …
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
