---
title: GPUComputePipeline
slug: Web/API/GPUComputePipeline
page-type: web-api-interface
status:
  - experimental
browser-compat: api.GPUComputePipeline
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`GPUComputePipeline`** interface of the {{domxref("WebGPU API", "WebGPU API", "", "nocode")}} represents a pipeline that controls the compute shader stage and can be used in a {{domxref("GPUComputePassEncoder")}}.

A `GPUComputePipeline` object instance can be created using the {{domxref("GPUDevice.createComputePipeline()")}} or {{domxref("GPUDevice.createComputePipelineAsync()")}} methods.

{{InheritanceDiagram}}

## Instance properties

- {{domxref("GPUComputePipeline.label", "label")}} {{Experimental_Inline}}
  - : A string providing a label that can be used to identify the object, for example in {{domxref("GPUError")}} messages or console warnings.

## Instance methods

- {{domxref("GPUComputePipeline.getBindGroupLayout", "getBindGroupLayout()")}} {{Experimental_Inline}}
  - : Returns the pipeline's {{domxref("GPUBindGroupLayout")}} object with the given index (i.e. included in the originating {{domxref("GPUDevice.createComputePipeline()")}} or {{domxref("GPUDevice.createComputePipelineAsync()")}} call's pipeline layout).

## Examples

> [!NOTE]
> The [WebGPU samples](https://webgpu.github.io/webgpu-samples/) feature many more examples.

### Basic example

Our [basic compute demo](https://mdn.github.io/dom-examples/webgpu-compute-demo/) shows a process of:

- Creating a bind group layout with {{domxref("GPUDevice.createBindGroupLayout()")}}.
- Feeding the `bindGroupLayout` into {{domxref("GPUDevice.createPipelineLayout()")}} to create a {{domxref("GPUPipelineLayout")}}.
- Using that value immediately in a `createComputePipeline()` call to create a `GPUComputePipeline`.

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

const computePipeline = device.createComputePipeline({
  layout: device.createPipelineLayout({
    bindGroupLayouts: [bindGroupLayout],
  }),
  compute: {
    module: shaderModule,
    entryPoint: "main",
  },
});

// ...
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
