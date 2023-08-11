---
title: GPUBindGroupLayout
slug: Web/API/GPUBindGroupLayout
page-type: web-api-interface
status:
  - experimental
browser-compat: api.GPUBindGroupLayout
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}

The **`GPUBindGroupLayout`** interface of the {{domxref("WebGPU API", "WebGPU API", "", "nocode")}} defines the structure and purpose of related GPU resources such as buffers that will be used in a pipeline, and is used as a template when creating {{domxref("GPUBindGroup")}}s.

A `GPUBindGroupLayout` object instance is created using the {{domxref("GPUDevice.createBindGroupLayout()")}} method.

{{InheritanceDiagram}}

## Instance properties

- {{domxref("GPUBindGroupLayout.label", "label")}} {{Experimental_Inline}}
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
