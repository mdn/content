---
title: GPUComputePipeline.getBindGroupLayout()
slug: Web/API/GPUComputePipeline/getBindGroupLayout
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.GPUComputePipeline.getBindGroupLayout
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}

The **`getBindGroupLayout()`** method of the
{{domxref("GPUComputePipeline")}} interface returns the pipeline's {{domxref("GPUBindGroupLayout")}} object with the given index (i.e. included in the originating {{domxref("GPUDevice.createComputePipeline()")}} or {{domxref("GPUDevice.createComputePipelineAsync()")}} call's pipeline layout).

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

The following snippet shows how `getBindGroupLayout()` could be used to reuse an active bind group layout in another compute pipeline.

```js
// ...

// Create a bind group layout
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

// Create a compute pipeline, using the above bind group layout in its pipeline layout
const computePipeline = device.createComputePipeline({
  layout: device.createPipelineLayout({
    bindGroupLayouts: [bindGroupLayout],
  }),
  compute: {
    module: shaderModule,
    entryPoint: "main",
  },
});

// Retrieve the bind group layout using getBindGroupLayout()
const newBindGroupLayout = computePipeline.getBindGroupLayout(0);
// Note that there is only one bind group layout present. Using an index
// value >= 1 will result in a validation error

// Reuse the bind group layout in another compute pipeline
const computePipeline2 = device.createComputePipeline({
  layout: device.createPipelineLayout({
    bindGroupLayouts: [newBindGroupLayout],
  }),
  compute: {
    module: shaderModule2,
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
