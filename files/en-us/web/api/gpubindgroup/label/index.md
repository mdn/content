---
title: "GPUBindGroup: label property"
short-title: label
slug: Web/API/GPUBindGroup/label
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.GPUBindGroup.label
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}

The **`label`** property of the
{{domxref("GPUBindGroup")}} interface provides a label that can be used to identify the object, for example in {{domxref("GPUError")}} messages or console warnings.

This can be set by providing a `label` property in the descriptor object passed into the originating {{domxref("GPUDevice.createBindGroup()")}} call, or you can get and set it directly on the `GPUBindGroup` object.

## Value

A string. If this has not been previously set as described above, it will be an empty string.

## Examples

Setting and getting a label via `GPUBindGroup.label`:

```js
// ...

const bindGroup = device.createBindGroup({
  layout: bindGroupLayout,
  entries: [
    {
      binding: 0,
      resource: {
        buffer: output,
      },
    },
  ],
});

bindGroup.label = "mybindgroup";

console.log(bindGroup.label); // "mybindgroup";
```

Setting a label via the originating {{domxref("GPUDevice.createBindGroup()")}} call, and then getting it via `GPUBindGroup.label`:

```js
// ...

const bindGroup = device.createBindGroup({
  layout: bindGroupLayout,
  entries: [
    {
      binding: 0,
      resource: {
        buffer: output,
      },
    },
  ],
  label: "mybindgroup",
});

console.log(bindGroup.label); // "mybindgroup";
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
