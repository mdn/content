---
title: "GPUBuffer: size property"
short-title: size
slug: Web/API/GPUBuffer/size
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.GPUBuffer.size
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`size`** read-only property of the
{{domxref("GPUBuffer")}} interface represents the length of the `GPUBuffer`'s memory allocation, in bytes.

`size` is set via the `size` property in the descriptor object passed into the originating {{domxref("GPUDevice.createBuffer()")}} call.

## Value

A number.

## Examples

```js
// Define global buffer size
const BUFFER_SIZE = 1000;

// ...

const output = device.createBuffer({
  size: BUFFER_SIZE,
  usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC,
});

console.log(output.size); // 1000
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
