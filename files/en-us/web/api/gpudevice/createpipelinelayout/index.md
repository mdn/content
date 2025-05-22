---
title: "GPUDevice: createPipelineLayout() method"
short-title: createPipelineLayout()
slug: Web/API/GPUDevice/createPipelineLayout
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.GPUDevice.createPipelineLayout
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

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

### Validation

The following criteria must be met when calling **`createPipelineLayout()`**, otherwise a {{domxref("GPUValidationError")}} is generated and an invalid {{domxref("GPUPipelineLayout")}} object is returned:

- The {{domxref("GPUBindGroupLayout")}} objects in `bindGroupLayouts` are valid.
- The number of {{domxref("GPUBindGroupLayout")}} objects in `bindGroupLayouts` is less than the {{domxref("GPUDevice")}}'s `maxBindGroups` {{domxref("GPUSupportedLimits", "limit", "", "nocode")}}.

## Examples

> [!NOTE]
> The [WebGPU samples](https://webgpu.github.io/webgpu-samples/) feature many more examples.

### Multiple bind group layouts, bind group, and pipeline layout

The following snippet:

- Creates a {{domxref("GPUBindGroupLayout")}} that describes a binding with a buffer, a texture, and a sampler.
- Creates a {{domxref("GPUPipelineLayout")}} based on the {{domxref("GPUBindGroupLayout")}}.

```js
// …

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

// …
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
