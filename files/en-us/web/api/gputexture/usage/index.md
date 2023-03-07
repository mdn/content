---
title: GPUTexture.usage
slug: Web/API/GPUTexture/usage
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.GPUTexture.usage
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}

The **`usage`** read-only property of the
{{domxref("GPUTexture")}} interface represents the allowed usages of the `GPUTexture`.

This is set via the `usage` property in the descriptor object passed into the originating {{domxref("GPUDevice.createTexture()")}} call. If omitted, this defaults to 1.

## Value

A number representing the original usages set when the `GPUTexture` was first created. This number is the sum of decimal values representing the different usage flags, as seen in the table below.

| Usage flag                         | Hexadecimal representation | Decimal equivalent |
| ---------------------------------- | -------------------------- | ------------------ |
| `GPUTextureUsage.COPY_SRC`         | 0x01                       | 1                  |
| `GPUTextureUsage.COPY_DST`         | 0x02                       | 2                  |
| `GPUBufferUsage.RENDER_ATTACHMENT` | 0x10                       | 16                 |
| `GPUBufferUsage.STORAGE_BINDING`   | 0x08                       | 8                  |
| `GPUBufferUsage.TEXTURE_BINDING`   | 0x04                       | 4                  |

## Examples

```js
// ...

const depthTexture = device.createTexture({
  size: [canvas.width, canvas.height],
  format: "depth24plus",
  usage: GPUTextureUsage.RENDER_ATTACHMENT,
});

console.log(depthTexture.usage); // 16
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
