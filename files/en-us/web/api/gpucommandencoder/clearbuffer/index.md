---
title: "GPUCommandEncoder: clearBuffer() method"
short-title: clearBuffer()
slug: Web/API/GPUCommandEncoder/clearBuffer
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.GPUCommandEncoder.clearBuffer
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`clearBuffer()`** method of the
{{domxref("GPUCommandEncoder")}} interface encodes a command that fills a region of a {{domxref("GPUBuffer")}} with zeroes.

## Syntax

```js-nolint
clearBuffer(buffer)
clearBuffer(buffer, offset)
clearBuffer(buffer, offset, size)
```

### Parameters

- `buffer`
  - : A {{domxref("GPUBuffer")}} object representing the buffer to clear.
- `offset` {{optional_inline}}
  - : A number representing the offset, in bytes, from the start of the `buffer` to the sub-region to clear. If omitted, `offset` defaults to 0.
- `size` {{optional_inline}}
  - : A number representing the size, in bytes, of the sub-region to clear. If omitted, `size` defaults to the `buffer` size - `offset`.

### Return value

None ({{jsxref("Undefined")}}).

### Validation

The following criteria must be met when calling **`clearBuffer()`**, otherwise a {{domxref("GPUValidationError")}} is generated and the {{domxref("GPUCommandEncoder")}} becomes invalid:

- The `buffer`'s {{domxref("GPUBuffer.usage")}} includes the `GPUBufferUsage.COPY_DST` flag.
- `offset` and `size` are both multiples of 4.
- The `buffer`'s {{domxref("GPUBuffer.size")}} is greater than or equal to `offset` + `size`.

## Examples

```js
// …

const buffer = device.createBuffer({
  size: 1000,
  usage: GPUBufferUsage.MAP_READ | GPUBufferUsage.COPY_DST,
});

// Later on

const commandBuffer = device.createCommandEncoder();
commandEncoder.clearBuffer(buffer);

// …
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
