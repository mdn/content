---
title: "GPUTextureView: label property"
short-title: label
slug: Web/API/GPUTextureView/label
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.GPUTextureView.label
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`label`** property of the
{{domxref("GPUTextureView")}} interface provides a label that can be used to identify the object, for example in {{domxref("GPUError")}} messages or console warnings.

This can be set by providing a `label` property in the descriptor object passed into the originating {{domxref("GPUTexture.createView()")}} call, or you can get and set it directly on the `GPUTextureView` object.

## Value

A string. If this has not been previously set as described above, it will be an empty string.

## Examples

Setting and getting a label via `GPUTextureView.label`:

```js
// ...

const depthTexture = device.createTexture({
  size: [canvas.width, canvas.height],
  format: "depth24plus",
  usage: GPUTextureUsage.RENDER_ATTACHMENT,
});

const view = depthTexture.createView();

view.label = "my_view";

console.log(view.label); // "my_view"
```

Setting a label via the originating {{domxref("GPUTexture.createView()")}} call, and then getting it via `GPUTextureView.label`:

```js
// ...

const depthTexture = device.createTexture({
  size: [canvas.width, canvas.height],
  format: "depth24plus",
  usage: GPUTextureUsage.RENDER_ATTACHMENT,
});

const view = depthTexture.createView({
  label: "my_view",
});

console.log(view.label); // "my_view"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
