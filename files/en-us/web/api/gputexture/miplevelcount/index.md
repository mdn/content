---
title: "GPUTexture: mipLevelCount property"
short-title: mipLevelCount
slug: Web/API/GPUTexture/mipLevelCount
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.GPUTexture.mipLevelCount
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}

The **`mipLevelCount`** read-only property of the
{{domxref("GPUTexture")}} interface represents the number of mip levels of the `GPUTexture`.

This is set via the `mipLevelCount` property in the descriptor object passed into the originating {{domxref("GPUDevice.createTexture()")}} call. If omitted, this defaults to 1.

## Value

A number.

## Examples

```js
// ...

const depthTexture = device.createTexture({
  size: [canvas.width, canvas.height],
  format: "depth24plus",
  usage: GPUTextureUsage.RENDER_ATTACHMENT,
});

console.log(depthTexture.mipLevelCount); // 1
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
