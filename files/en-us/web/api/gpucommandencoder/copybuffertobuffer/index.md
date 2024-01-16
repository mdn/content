---
title: "GPUCommandEncoder: copyBufferToBuffer() method"
short-title: copyBufferToBuffer()
slug: Web/API/GPUCommandEncoder/copyBufferToBuffer
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.GPUCommandEncoder.copyBufferToBuffer
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}

The **`copyBufferToBuffer()`** method of the
{{domxref("GPUCommandEncoder")}} interface encodes a command that copies data from one {{domxref("GPUBuffer")}} to another.

## Syntax

```js-nolint
copyBufferToBuffer(source, sourceOffset, destination, destinationOffset, size)
```

### Parameters

- `source`
  - : The {{domxref("GPUBuffer")}} to copy from.
- `sourceOffset`
  - : The offset, in bytes, into the `source` to begin copying from.
- `destination`
  - : The {{domxref("GPUBuffer")}} to copy to.
- `destinationOffset`
  - : The offset, in bytes, into the `destination` to begin copying to.
- `size`
  - : The number of bytes to copy.

### Return value

None ({{jsxref("Undefined")}}).

### Validation

The following criteria must be met when calling **`copyBufferToBuffer()`**, otherwise a {{domxref("GPUValidationError")}} is generated and the {{domxref("GPUCommandEncoder")}} becomes invalid:

- The `source`'s {{domxref("GPUBuffer.usage")}} includes the `GPUBufferUsage.COPY_SRC` flag.
- The `destination`'s {{domxref("GPUBuffer.usage")}} includes the `GPUBufferUsage.COPY_DST` flag.
- `size`, `sourceOffset`, and `destinationOffset` are all multiples of 4.
- The `source`'s {{domxref("GPUBuffer.size")}} is greater than or equal to `sourceOffset` + `size`.
- The `destination`'s {{domxref("GPUBuffer.size")}} is greater than or equal to `destinationOffset` + `size`.
- `source` and `destination` are different {{domxref("GPUBuffer")}}s (you can't copy from and to the same buffer).

## Examples

In our [basic compute demo](https://mdn.github.io/dom-examples/webgpu-compute-demo/), we use `copyBufferToBuffer()` to copy the contents of our `output` buffer to the `stagingBuffer`.

```js
// ...

// Create an output buffer to read GPU calculations to, and a staging buffer to be mapped for JavaScript access

const output = device.createBuffer({
  size: BUFFER_SIZE,
  usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC,
});

const stagingBuffer = device.createBuffer({
  size: BUFFER_SIZE,
  usage: GPUBufferUsage.MAP_READ | GPUBufferUsage.COPY_DST,
});

// ...

// Create GPUCommandEncoder to encode commands to issue to the GPU
const commandEncoder = device.createCommandEncoder();

// ...

// Copy output buffer to staging buffer
commandEncoder.copyBufferToBuffer(
  output,
  0, // Source offset
  stagingBuffer,
  0, // Destination offset
  BUFFER_SIZE,
);

// ...
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
