---
title: GPURenderPipeline.getBindGroupLayout()
slug: Web/API/GPURenderPipeline/getBindGroupLayout
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.GPURenderPipeline.getBindGroupLayout
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}

The **`getBindGroupLayout()`** method of the
{{domxref("GPURenderPipeline")}} interface returns the pipeline's {{domxref("GPUBindGroupLayout")}} object with the given index (i.e. included in the originating {{domxref("GPUDevice.createRenderPipeline()")}} or {{domxref("GPUDevice.createRenderPipelineAsync()")}} call's pipeline layout).

This is useful because it alllows you to access and reuse actively used {{domxref("GPUBindGroupLayout")}}s across different pipelines, without the need to rebind resources when there is a switch between pipelines.

## Syntax

```js-nolint
getBindGroupLayout(index)
```

### Parameters

- `index`

  - : A number representing the index of the {{domxref("GPUBindGroupLayout")}} to return.

### Return value

A {{domxref("GPUBindGroupLayout")}} object instance.

### Validation

The following criteria must be met when calling **`getBindGroupLayout()`**, otherwise a {{domxref("GPUValidationError")}} is generated and an invalid {{domxref("GPUBindGroupLayout")}} object is returned:

- `index` is less than the number of {{domxref("GPUBindGroupLayout")}} objects used in the pipeline layout.

## Examples

The following snippet shows how `getBindGroupLayout()` could be used to reuse an active bind group layout in another render pipeline.

```js
// ...

// Create a compute pipeline, using a previously-defined bind group layout in its pipeline layout
const shadowPipeline = device.createRenderPipeline({
  layout: device.createPipelineLayout({
    bindGroupLayouts: [
      uniformBufferBindGroupLayout,
      uniformBufferBindGroupLayout,
    ],
  }),
  vertex: {
    module: device.createShaderModule({
      code: vertexShadowWGSL,
    }),
    entryPoint: "main",
    buffers: vertexBuffers,
  },
  depthStencil: {
    depthWriteEnabled: true,
    depthCompare: "less",
    format: "depth32float",
  },
  primitive,
});

// Retrieve the bind group layout using getBindGroupLayout()
const newBindGroupLayout = shadowPipeline.getBindGroupLayout(0);
// Note that there are two bind group layouts present. Using an index
// value >= 2 will result in a validation error

// Reuse the bind group layout in another render pipeline
const renderPipeline2 = device.createRenderPipeline({
  layout: device.createPipelineLayout({
    bindGroupLayouts: [newBindGroupLayout, newBindGroupLayout],
  }),

  // ...
});

// ...
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
