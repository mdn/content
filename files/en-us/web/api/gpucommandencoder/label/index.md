---
title: "GPUCommandEncoder: label property"
short-title: label
slug: Web/API/GPUCommandEncoder/label
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.GPUCommandEncoder.label
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`label`** read-only property of the
{{domxref("GPUCommandEncoder")}} interface is a string providing a label that can be used to identify the object, for example in {{domxref("GPUError")}} messages or console warnings.

This can be set by providing a `label` property in the descriptor object passed into the originating {{domxref("GPUDevice.createCommandEncoder()")}} call, or you can get and set it directly on the `GPUCommandEncoder` object.

## Value

A string. If no label value has previously been set, getting the label returns an empty string.

## Examples

Setting and getting a label via `GPUCommandEncoder.label`:

```js
const commandEncoder = device.createCommandEncoder();
commandEncoder.label = "my_command_encoder";
console.log(commandEncoder.label); // "my_command_encoder"
```

Setting a label via the originating {{domxref("GPUDevice.createCommandEncoder()")}} call, and then getting it via `GPUCommandEncoder.label`:

```js
const commandEncoder = device.createCommandEncoder({
  label: "my_command_encoder",
});

console.log(commandEncoder.label); // "my_command_encoder"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
