---
title: "GPUTexture: width property"
short-title: width
slug: Web/API/GPUTexture/width
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.GPUTexture.width
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}

The **`width`** read-only property of the
{{domxref("GPUTexture")}} interface represents the width of the `GPUTexture`.

This is set based on the value of the `size` property in the descriptor object passed into the originating {{domxref("GPUDevice.createTexture()")}} call.

## Value

A number.

## Examples

```js
// ...

const depthTexture = device.createTexture({
  size: [640, 480],
  format: "depth24plus",
  usage: GPUTextureUsage.RENDER_ATTACHMENT,
});

console.log(depthTexture.width); // 640
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
