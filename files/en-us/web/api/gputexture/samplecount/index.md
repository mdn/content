---
title: "GPUTexture: sampleCount property"
short-title: sampleCount
slug: Web/API/GPUTexture/sampleCount
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.GPUTexture.sampleCount
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}

The **`sampleCount`** read-only property of the
{{domxref("GPUTexture")}} interface represents the sample count of the `GPUTexture`.

This is set via the `sampleCount` property in the descriptor object passed into the originating {{domxref("GPUDevice.createTexture()")}} call. If omitted, this defaults to 1.

## Value

A number. Possible values are:

- 1
- 4, which indicates a multi-sampled texture.

## Examples

```js
// ...

const depthTexture = device.createTexture({
  size: [canvas.width, canvas.height],
  format: "depth24plus",
  usage: GPUTextureUsage.RENDER_ATTACHMENT,
});

console.log(depthTexture.sampleCount); // 1
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
