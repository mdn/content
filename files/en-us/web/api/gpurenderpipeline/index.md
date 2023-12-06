---
title: GPURenderPipeline
slug: Web/API/GPURenderPipeline
page-type: web-api-interface
status:
  - experimental
browser-compat: api.GPURenderPipeline
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}

The **`GPURenderPipeline`** interface of the {{domxref("WebGPU API", "WebGPU API", "", "nocode")}} represents a pipeline that controls the vertex and fragment shader stages and can be used in a {{domxref("GPURenderPassEncoder")}} or {{domxref("GPURenderBundleEncoder")}}.

A `GPURenderPipeline` object instance can be created using the {{domxref("GPUDevice.createRenderPipeline()")}} or {{domxref("GPUDevice.createRenderPipelineAsync()")}} methods.

{{InheritanceDiagram}}

## Instance properties

- {{domxref("GPURenderPipeline.label", "label")}} {{Experimental_Inline}}
  - : A string providing a label that can be used to identify the object, for example in {{domxref("GPUError")}} messages or console warnings.

## Instance methods

- {{domxref("GPURenderPipeline.getBindGroupLayout", "getBindGroupLayout()")}} {{Experimental_Inline}}
  - : Returns the pipeline's {{domxref("GPUBindGroupLayout")}} object with the given index (i.e. included in the originating {{domxref("GPUDevice.createRenderPipeline()")}} or {{domxref("GPUDevice.createRenderPipelineAsync()")}} call's pipeline layout).

## Examples

> **Note:** The [WebGPU samples](https://webgpu.github.io/webgpu-samples/) feature many more examples.

### Basic example

Our [basic render demo](https://mdn.github.io/dom-examples/webgpu-render-demo/) provides a simple example of the construction of a valid render pipeline descriptor object, which is then used to create a `GPURenderPipeline` via a `createRenderPipeline()` call.

```js
// ...

const vertexBuffers = [
  {
    attributes: [
      {
        shaderLocation: 0, // position
        offset: 0,
        format: "float32x4",
      },
      {
        shaderLocation: 1, // color
        offset: 16,
        format: "float32x4",
      },
    ],
    arrayStride: 32,
    stepMode: "vertex",
  },
];

const pipelineDescriptor = {
  vertex: {
    module: shaderModule,
    entryPoint: "vertex_main",
    buffers: vertexBuffers,
  },
  fragment: {
    module: shaderModule,
    entryPoint: "fragment_main",
    targets: [
      {
        format: navigator.gpu.getPreferredCanvasFormat(),
      },
    ],
  },
  primitive: {
    topology: "triangle-list",
  },
  layout: "auto",
};

const renderPipeline = device.createRenderPipeline(pipelineDescriptor);

// ...
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
