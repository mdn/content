---
title: "GPURenderPassEncoder: label property"
short-title: label
slug: Web/API/GPURenderPassEncoder/label
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.GPURenderPassEncoder.label
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}

The **`label`** read-only property of the
{{domxref("GPURenderPassEncoder")}} interface is a string providing a label that can be used to identify the object, for example in {{domxref("GPUError")}} messages or console warnings.

This can be set by providing a `label` property in the descriptor object passed into the originating {{domxref("GPUCommandEncoder.beginRenderPass()")}} call, or you can get and set it directly on the `GPURenderPassEncoder` object.

## Value

A string. If no label value has previously been set, getting the label returns an empty string.

## Examples

Setting and getting a label via `GPURenderPassEncoder.label`:

```js
const commandEncoder = device.createCommandEncoder();

const renderPassDescriptor = {
  colorAttachments: [
    {
      clearValue: clearColor,
      loadOp: "clear",
      storeOp: "store",
      view: context.getCurrentTexture().createView(),
    },
  ],
};

const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);
passEncoder.label = "myrenderpassencoder";

console.log(passEncoder.label); // "myrenderpassencoder"
```

Setting a label via the originating {{domxref("GPUCommandEncoder.beginRenderPass()")}} call, and then getting it via `GPURenderPassEncoder.label`:

```js
const commandEncoder = device.createCommandEncoder();

const renderPassDescriptor = {
  colorAttachments: [
    {
      clearValue: clearColor,
      loadOp: "clear",
      storeOp: "store",
      view: context.getCurrentTexture().createView(),
    },
  ],
  label: "myrenderpassencoder",
};

const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);

console.log(passEncoder.label); // "myrenderpassencoder"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
