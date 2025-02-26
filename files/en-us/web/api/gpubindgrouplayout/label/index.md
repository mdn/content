---
title: "GPUBindGroupLayout: label property"
short-title: label
slug: Web/API/GPUBindGroupLayout/label
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.GPUBindGroupLayout.label
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`label`** property of the
{{domxref("GPUBindGroupLayout")}} interface provides a label that can be used to identify the object, for example in {{domxref("GPUError")}} messages or console warnings.

This can be set by providing a `label` property in the descriptor object passed into the originating {{domxref("GPUDevice.createBindGroupLayout()")}} call, or you can get and set it directly on the `GPUBindGroupLayout` object.

## Value

A string. If this has not been previously set as described above, it will be an empty string.

## Examples

Setting and getting a label via `GPUBindGroupLayout.label`:

```js
// ...

const bindGroupLayout = device.createBindGroupLayout({
  entries: [
    {
      binding: 0,
      visibility: GPUShaderStage.COMPUTE,
      buffer: {
        type: "storage",
      },
    },
  ],
});

bindGroupLayout.label = "my_bind_group_layout";

console.log(bindGroupLayout.label); // "my_bind_group_layout"
```

Setting a label via the originating {{domxref("GPUDevice.createBindGroupLayout()")}} call, and then getting it via `GPUBindGroupLayout.label`:

```js
// ...

const bindGroupLayout = device.createBindGroupLayout({
  entries: [
    {
      binding: 0,
      visibility: GPUShaderStage.COMPUTE,
      buffer: {
        type: "storage",
      },
    },
  ],
  label: "my_bind_group_layout",
});

console.log(bindGroupLayout.label); // "my_bind_group_layout"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
