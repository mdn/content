---
title: GPUBuffer.usage
slug: Web/API/GPUBuffer/usage
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.GPUBuffer.usage
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}

The **`usage`** read-only property of the
{{domxref("GPUBuffer")}} interface represents the allowed usages of the `GPUBuffer`.

`usage` is set via the `usage` property in the descriptor object passed into the originating {{domxref("GPUDevice.createBuffer()")}} call.

## Value

A number representing the original usages set when the `GPUBuffer` was first created. This number is the sum of decimal values representing the different usage flags, as seen in the table below.

| Usage flag                     | Hexadecimal representation | Decimal equivalent |
| ------------------------------ | -------------------------- | ------------------ |
| `GPUBufferUsage.COPY_SRC`      | 0x0004                     | 4                  |
| `GPUBufferUsage.COPY_DST`      | 0x0008                     | 8                  |
| `GPUBufferUsage.INDEX`         | 0x0010                     | 16                 |
| `GPUBufferUsage.INDIRECT`      | 0x0100                     | 256                |
| `GPUBufferUsage.MAP_READ`      | 0x0001                     | 1                  |
| `GPUBufferUsage.MAP_WRITE`     | 0x0002                     | 2                  |
| `GPUBufferUsage.QUERY_RESOLVE` | 0x0200                     | 512                |
| `GPUBufferUsage.STORAGE`       | 0x0080                     | 128                |
| `GPUBufferUsage.UNIFORM`       | 0x0040                     | 64                 |
| `GPUBufferUsage.VERTEX`        | 0x0020                     | 32                 |

## Examples

```js
const output = device.createBuffer({
  size: BUFFER_SIZE,
  usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC,
});

console.log(output.usage); // 132

const stagingBuffer = device.createBuffer({
  size: BUFFER_SIZE,
  usage: GPUBufferUsage.MAP_READ | GPUBufferUsage.COPY_DST,
});

console.log(stagingBuffer.usage); // 9
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
