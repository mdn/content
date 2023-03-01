---
title: GPUDevice.createPipelineLayout()
slug: Web/API/GPUDevice/createPipelineLayout
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.GPUDevice.createPipelineLayout
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}

The **`createPipelineLayout()`** method of the
{{domxref("GPUDevice")}} interface creates a {{domxref("GPUPipelineLayout")}} that defines the {{domxref("GPUBindGroupLayout")}}s used by a pipeline. {{domxref("GPUBindGroup")}}s used with the pipeline during command encoding must have compatible {{domxref("GPUBindGroupLayout")}}s.

## Syntax

```js-nolint
createPipelineLayout(descriptor)
```

### Parameters

- `descriptor`
  - : An object containing the following properties:
    - `bindGroupLayouts`
      - : An array of {{domxref("GPUBindGroupLayout")}} objects (which are in turn created via calls to {{domxref("GPUDevice.createBindGroupLayout()")}}). Each one corresponds to a [`@group`](https://gpuweb.github.io/gpuweb/wgsl/#attribute-binding) attribute in the shader code contained in the {{domxref("GPUShaderModule")}} used in a related pipeline.
    - `label` {{optional_inline}}
      - : A string providing a label that can be used to identify the object, for example in {{domxref("GPUError")}} messages or console warnings.

### Return value

A {{domxref("GPUPipelineLayout")}} object instance.

### Invalid reasons

If any of the following are false, a {{domxref("GPUValidationError")}} is generated:

- The {{domxref("GPUBindGroupLayout")}} objects in `bindGroupLayouts` are valid.
- The number of {{domxref("GPUBindGroupLayout")}} objects in `bindGroupLayouts` is less than the {{domxref("GPUDevice")}}'s `maxBindGroups` {{domxref("GPUSupportedLimits", "limit", "", "nocode")}}.

## Examples

> **Note:** The [WebGPU samples](https://webgpu.github.io/webgpu-samples/) feature many more examples.

### Multiple bind group layouts, bind group, and pipeline layout

The following snippet:

- Creates a {{domxref("GPUBindGroupLayout")}} that describes a binding with a uniform buffer, a texture, and a sampler.
- Creates a {{domxref("GPUBindGroup")}} and a {{domxref("GPUPipelineLayout")}} based on the {{domxref("GPUBindGroupLayout")}}.

```js
// ...

const bindGroupLayout = gpuDevice.createBindGroupLayout({
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

const bindGroup = gpuDevice.createBindGroup({
  layout: bindGroupLayout,
  entries: [
    {
      binding: 0,
      resource: { buffer: buffer },
    },
    {
      binding: 1,
      resource: texture,
    },
    {
      binding: 2,
      resource: sampler,
    },
  ],
});

const pipelineLayout = gpuDevice.createPipelineLayout({
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
