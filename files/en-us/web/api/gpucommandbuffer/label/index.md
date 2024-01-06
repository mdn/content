---
title: "GPUCommandBuffer: label property"
short-title: label
slug: Web/API/GPUCommandBuffer/label
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.GPUCommandBuffer.label
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}

The **`label`** read-only property of the
{{domxref("GPUCommandBuffer")}} interface is a string providing a label that can be used to identify the object, for example in {{domxref("GPUError")}} messages or console warnings.

This can be set by providing a `label` property in the descriptor object passed into the originating {{domxref("GPUCommandEncoder.finish()")}} call, or you can get and set it directly on the `GPUCommandBuffer` object.

## Value

A string. If no label value has previously been set, getting the label returns an empty string.

## Examples

Setting and getting a label via `GPUCommandBuffer.label`:

```js
const commandBuffer = commandEncoder.finish();
commandBuffer.label = "mycommandbuffer";
console.log(commandBuffer.label); // "mycommandbuffer";
```

Setting a label via the originating {{domxref("GPUCommandEncoder.finish()")}} call, and then getting it via `GPUCommandBuffer.label`:

```js
const commandBuffer = commandEncoder.finish({
  label: "mycommandbuffer",
});

console.log(commandBuffer.label); // "mycommandbuffer";
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
