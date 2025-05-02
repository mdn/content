---
title: "GPUBuffer: mapState property"
short-title: mapState
slug: Web/API/GPUBuffer/mapState
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.GPUBuffer.mapState
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`mapState`** read-only property of the
{{domxref("GPUBuffer")}} interface represents the mapped state of the `GPUBuffer`.

## Value

An enumerated value. Possible values are:

- `unmapped`
  - : The buffer is not mapped. {{domxref("GPUBuffer.getMappedRange()")}} cannot be used to access the contents of the `GPUBuffer` in JavaScript. This could be because:
    - {{domxref("GPUBuffer.mapAsync()")}} has not yet been called.
    - The `GPUBuffer` was previously mapped, and then unmapped again with {{domxref("GPUBuffer.unmap()")}}.
- `pending`
  - : The buffer is not yet mapped. {{domxref("GPUBuffer.mapAsync()")}} has been called, but its {{jsxref("Promise")}} is currently pending. {{domxref("GPUBuffer.getMappedRange()")}} cannot currently be used to access the contents of the `GPUBuffer` in JavaScript.
- `mapped`
  - : The buffer is mapped. The {{domxref("GPUBuffer.mapAsync()")}} {{jsxref("Promise")}} has fulfilled, and {{domxref("GPUBuffer.getMappedRange()")}} can now be used to access the contents of the `GPUBuffer` in JavaScript.

## Examples

```js
const stagingBuffer = device.createBuffer({
  size: BUFFER_SIZE,
  usage: GPUBufferUsage.MAP_READ | GPUBufferUsage.COPY_DST,
});

console.log(stagingBuffer.mapState); // "unmapped"

// …

await stagingBuffer.mapAsync(
  GPUMapMode.READ,
  0, // Offset
  BUFFER_SIZE, // Length
);

console.log(stagingBuffer.mapState); // "mapped"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
