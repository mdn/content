---
title: "GPURenderPipeline: label property"
short-title: label
slug: Web/API/GPURenderPipeline/label
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.GPURenderPipeline.label
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}

The **`label`** property of the
{{domxref("GPURenderPipeline")}} interface provides a label that can be used to identify the object, for example in {{domxref("GPUError")}} messages or console warnings.

This can be set by providing a `label` property in the descriptor object passed into the originating {{domxref("GPUDevice.createRenderPipeline()")}} or {{domxref("GPUDevice.createRenderPipelineAsync()")}} call, or you can get and set it directly on the `GPURenderPipeline` object.

## Value

A string. If this has not been previously set as described above, it will be an empty string.

## Examples

Setting and getting a label via `GPURenderPipeline.label`:

```js
// ...

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

renderPipeline.label = "myrenderpipeline";

console.log(renderPipeline.label); // "myrenderpipeline"
```

Setting a label via a {{domxref("GPUDevice.createRenderPipeline()")}} call, and then getting it via `GPURenderPipeline.label`:

```js
// ...

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
  label: "myrenderpipeline",
};

const renderPipeline = device.createRenderPipeline(pipelineDescriptor);

console.log(renderPipeline.label); // "myrenderpipeline"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
