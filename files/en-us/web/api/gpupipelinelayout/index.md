---
title: GPUPipelineLayout
slug: Web/API/GPUPipelineLayout
page-type: web-api-interface
status:
  - experimental
browser-compat: api.GPUPipelineLayout
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`GPUPipelineLayout`** interface of the {{domxref("WebGPU API", "WebGPU API", "", "nocode")}} defines the {{domxref("GPUBindGroupLayout")}}s used by a pipeline. {{domxref("GPUBindGroup")}}s used with the pipeline during command encoding must have compatible {{domxref("GPUBindGroupLayout")}}s.

A `GPUPipelineLayout` object instance is created using the {{domxref("GPUDevice.createPipelineLayout()")}} method.

{{InheritanceDiagram}}

## Instance properties

- {{domxref("GPUPipelineLayout.label", "label")}} {{Experimental_Inline}}
  - : A string providing a label that can be used to identify the object, for example in {{domxref("GPUError")}} messages or console warnings.

## Examples

> [!NOTE]
> The [WebGPU samples](https://webgpu.github.io/webgpu-samples/) feature many more examples.

### Basic pipeline layout example

The following snippet:

- Creates a {{domxref("GPUBindGroupLayout")}} that describes a binding with a buffer, a texture, and a sampler.
- Creates a `GPUPipelineLayout` based on the {{domxref("GPUBindGroupLayout")}}.

```js
// ...

const bindGroupLayout = device.createBindGroupLayout({
  entries: [
    {
      binding: 0,
      visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
      buffer: {},
    },
    {
      binding: 1,
      visibility: GPUShaderStage.FRAGMENT,
      texture: {},
    },
    {
      binding: 2,
      visibility: GPUShaderStage.FRAGMENT,
      sampler: {},
    },
  ],
});

const pipelineLayout = device.createPipelineLayout({
  bindGroupLayouts: [bindGroupLayout],
});

// ...
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
