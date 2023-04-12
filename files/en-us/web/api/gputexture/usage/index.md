---
title: "GPUTexture: usage property"
short-title: usage
slug: Web/API/GPUTexture/usage
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.GPUTexture.usage
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}

The **`usage`** read-only property of the
{{domxref("GPUTexture")}} interface is the {{glossary("bitwise flags")}} representing the allowed usages of the `GPUTexture`.

This is set via the `usage` property in the descriptor object passed into the originating {{domxref("GPUDevice.createTexture()")}} call.

## Value

The bitwise flags representing the original usages set when the `GPUTexture` was first created. The returned number is the sum of decimal values representing the different flags, as seen in the table below.

| Usage flag                         | Usage description                                                                                                                                                                                                                                                                                                                               | Hex equiv. | Decimal equiv. |
| ---------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | -------------- |
| `GPUTextureUsage.COPY_SRC`         | The texture can be used as the source of a copy operation, for example the source argument of a {{domxref("GPUCommandEncoder.copyTextureToBuffer", "copyTextureToBuffer()")}} call.                                                                                                                                                             | 0x01       | 1              |
| `GPUTextureUsage.COPY_DST`         | The texture can be used as the destination of a copy/write operation, for example the destination argument of a {{domxref("GPUCommandEncoder.copyBufferToTexture", "copyBufferToTexture()")}} call.                                                                                                                                             | 0x02       | 2              |
| `GPUBufferUsage.RENDER_ATTACHMENT` | The texture can be used as a color or depth/stencil attachment in a render pass, for example as the `view` property of the descriptor object in a {{domxref("GPUCommandEncoder.beginRenderPass", "beginRenderPass()")}} call.                                                                                                                   | 0x10       | 16             |
| `GPUBufferUsage.STORAGE_BINDING`   | The texture can be bound for use as a storage texture in a shader, for example as a resource in a bind group entry when creating a {{domxref("GPUBindGroup")}} (via {{domxref("GPUDevice.createBindGroup", "createBindGroup()")}}), which adheres to a {{domxref("GPUBindGroupLayout")}} entry with a specified storage texture binding layout. | 0x08       | 8              |
| `GPUBufferUsage.TEXTURE_BINDING`   | The texture can be bound for use as a sampled texture in a shader, for example as a resource in a bind group entry when creating a {{domxref("GPUBindGroup")}} (via {{domxref("GPUDevice.createBindGroup", "createBindGroup()")}}), which adheres to a {{domxref("GPUBindGroupLayout")}} entry with a specified texture binding layout.         | 0x04       | 4              |

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
