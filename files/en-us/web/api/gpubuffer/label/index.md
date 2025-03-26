---
title: "GPUBuffer: label property"
short-title: label
slug: Web/API/GPUBuffer/label
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.GPUBuffer.label
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`label`** property of the
{{domxref("GPUBuffer")}} interface provides a label that can be used to identify the object, for example in {{domxref("GPUError")}} messages or console warnings.

This can be set by providing a `label` property in the descriptor object passed into the originating {{domxref("GPUDevice.createBuffer()")}} call, or you can get and set it directly on the `GPUBuffer` object.

## Value

A string. If this has not been previously set as described above, it will be an empty string.

## Examples

Setting and getting a label via `GPUBuffer.label`:

```js
const output = device.createBuffer({
  size: BUFFER_SIZE,
  usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC,
});

output.label = "my_buffer";

console.log(output.label); // "my_buffer"
```

Setting a label via the originating {{domxref("GPUDevice.createBuffer()")}} call, and then getting it via `GPUBuffer.label`:

```js
const output = device.createBuffer({
  size: BUFFER_SIZE,
  usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC,
  label: "my_buffer",
});

console.log(output.label); // "my_buffer"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
