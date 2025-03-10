---
title: "GPURenderBundleEncoder: label property"
short-title: label
slug: Web/API/GPURenderBundleEncoder/label
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.GPURenderBundleEncoder.label
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`label`** read-only property of the
{{domxref("GPURenderBundleEncoder")}} interface is a string providing a label that can be used to identify the object, for example in {{domxref("GPUError")}} messages or console warnings.

This can be set by providing a `label` property in the descriptor object passed into the originating {{domxref("GPUDevice.createRenderBundleEncoder()")}} call, or you can get and set it directly on the `GPURenderBundleEncoder` object.

> [!NOTE]
> This property is functionally identical to its equivalent on {{domxref("GPURenderPassEncoder")}} — {{domxref("GPURenderPassEncoder.label", "label")}}.

## Value

A string. If no label value has previously been set, getting the label returns an empty string.

## Examples

Setting and getting a label via `GPURenderBundleEncoder.label`:

```js
const renderBundleEncoder = device.createRenderBundleEncoder({
  colorFormats: [presentationFormat],
});

renderBundleEncoder.label = "my_render_bundle_encoder";
console.log(renderBundleEncoder.label); // "my_render_bundle_encoder"
```

Setting a label via the originating {{domxref("GPUDevice.createRenderBundleEncoder()")}} call, and then getting it via `GPURenderBundleEncoder.label`:

```js
const renderBundleEncoder = device.createRenderBundleEncoder({
  colorFormats: [presentationFormat],
  label: "my_render_bundle_encoder",
});

console.log(renderBundleEncoder.label); // "my_render_bundle_encoder"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
