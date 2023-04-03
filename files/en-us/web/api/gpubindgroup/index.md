---
title: GPUBindGroup
slug: Web/API/GPUBindGroup
page-type: web-api-interface
status:
  - experimental
browser-compat: api.GPUBindGroup
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}

The **`GPUBindGroup`** interface of the {{domxref("WebGPU API", "WebGPU API", "", "nocode")}} is based on a {{domxref("GPUBindGroupLayout")}} and defines a set of resources to be bound together in a group and how those resources are used in shader stages.

A `GPUBindGroup` object instance is created using the {{domxref("GPUDevice.createBindGroup()")}} method.

{{InheritanceDiagram}}

## Instance properties

- {{domxref("GPUBindGroup.label", "label")}} {{Experimental_Inline}}
  - : A string providing a label that can be used to identify the object, for example in {{domxref("GPUError")}} messages or console warnings.

## Examples

> **Note:** The [WebGPU samples](https://webgpu.github.io/webgpu-samples/) feature many more examples.

### Basic example

Our [basic compute demo](https://mdn.github.io/dom-examples/webgpu-compute-demo/) shows an example of creating a bind group layout and then using that as a template when creating a bind group.

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

// ...
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
