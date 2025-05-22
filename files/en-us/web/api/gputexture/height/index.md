---
title: "GPUTexture: height property"
short-title: height
slug: Web/API/GPUTexture/height
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.GPUTexture.height
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`height`** read-only property of the
{{domxref("GPUTexture")}} interface represents the height of the `GPUTexture`.

This is set based on the value of the `size` property in the descriptor object passed into the originating {{domxref("GPUDevice.createTexture()")}} call.

## Value

A number.

## Examples

```js
// …

const depthTexture = device.createTexture({
  size: [640, 480],
  format: "depth24plus",
  usage: GPUTextureUsage.RENDER_ATTACHMENT,
});

console.log(depthTexture.height); // 480
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
