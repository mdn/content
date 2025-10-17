---
title: "GPUTexture: format property"
short-title: format
slug: Web/API/GPUTexture/format
page-type: web-api-instance-property
browser-compat: api.GPUTexture.format
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`format`** read-only property of the
{{domxref("GPUTexture")}} interface represents the format of the `GPUTexture`.

This is set via the `format` property in the descriptor object passed into the originating {{domxref("GPUDevice.createTexture()")}} call.

## Value

An enumerated value. See the specification's [Texture formats](https://gpuweb.github.io/gpuweb/#enumdef-gputextureformat) section for all the possible values. Also see [Tier 1 and Tier 2 texture formats](/en-US/docs/Web/API/GPUDevice/createTexture#tier_1_and_tier_2_texture_formats) for information on the Tier 1 and Tier 2 format sets.

## Examples

```js
// …

const depthTexture = device.createTexture({
  size: [canvas.width, canvas.height],
  format: "depth24plus",
  usage: GPUTextureUsage.RENDER_ATTACHMENT,
});

console.log(depthTexture.format); // "depth24plus"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
