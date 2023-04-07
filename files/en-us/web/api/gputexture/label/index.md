---
title: "GPUTexture: label property"
short-title: label
slug: Web/API/GPUTexture/label
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.GPUTexture.label
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}

The **`label`** property of the
{{domxref("GPUTexture")}} interface provides a label that can be used to identify the object, for example in {{domxref("GPUError")}} messages or console warnings.

This can be set by providing a `label` property in the descriptor object passed into the originating {{domxref("GPUDevice.createTexture()")}} call, or you can get and set it directly on the `GPUTexture` object.

## Value

A string. If this has not been previously set as described above, it will be an empty string.

## Examples

Setting and getting a label via `GPUTexture.label`:

```js
// ...

const depthTexture = device.createTexture({
  size: [canvas.width, canvas.height],
  format: "depth24plus",
  usage: GPUTextureUsage.RENDER_ATTACHMENT,
});

depthTexture.label = "mytexture";

console.log(depthTexture.label); // "mytexture"
```

Setting a label via the originating {{domxref("GPUDevice.createTexture()")}} call, and then getting it via `GPUTexture.label`:

```js
// ...

const depthTexture = device.createTexture({
  size: [canvas.width, canvas.height],
  format: "depth24plus",
  usage: GPUTextureUsage.RENDER_ATTACHMENT,
  label: "mytexture",
});

console.log(depthTexture.label); // "mytexture"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
