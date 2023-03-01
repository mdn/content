---
title: GPUDevice.createComputePipeline()
slug: Web/API/GPUDevice/createComputePipeline
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.GPUDevice.createComputePipeline
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}

The **`createComputePipeline()`** method of the
{{domxref("GPUDevice")}} interface creates a {{domxref("GPUComputePipeline")}} that can control the compute shader stage and be used in a {{domxref("GPUComputePassEncoder")}}.

## Syntax

```js-nolint
createComputePipeline(descriptor)
```

### Parameters

- `descriptor`

  - : An object containing the following properties:

    - `compute`

      - : An object describing the compute shader entry point of the pipeline. This object can contain the following properties:

        - `constants` {{optional_inline}}

          - : A sequence of record types, with the structure `(id, value)`, representing override values for [WGSL constants that can be overriden in the pipeline](https://gpuweb.github.io/gpuweb/#typedefdef-gpupipelineconstantvalue). These behave like [ordered maps](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map). In each case, the `id` is a key used to identify or select the record, and the `constant` is an enumerated value representing a WGSL.

            Depending on which constant you want to override, the `id` may take the form of the numeric ID of the constant, if one is specified, or otherwise the constant's identifier name.

            A code snippet providing override values for all overridable constants would look like this:

            ```js
            {
              // ...
              constants: {
                0: false,   // "has_point_light"
                1200: 3.0,  // "specular_param"
                1300: 2.0,  // "gain"
                width: 20,  // "width"
                depth: -1,  // "depth"
                height: 15, // "height"
              }
            }
            ```

        - `entryPoint`
          - : The name of the function in the `module` that this stage will use to perform its work.
        - `module`
          - : A {{domxref("GPUShaderModule")}} object containing the [WGSL](https://gpuweb.github.io/gpuweb/wgsl/) code that this programmable stage will execute.

    - `label` {{optional_inline}}
      - : A string providing a label that can be used to identify the object, for example in {{domxref("GPUError")}} messages or console warnings.
    - `layout`
      - : Defines the layout (structure, purpose, and type) of all the GPU resources (buffers, textures, etc.) used during the execution of the pipeline. Possible values are:
        - A {{domxref("GPUPipelineLayout")}} object, created using {{domxref("GPUDevice.createPipelineLayout()")}}, which allows the GPU to figure out how to run the pipeline most efficiently ahead of time.
        - A string of `"auto"`, which causes the pipeline to generate an implicit bind group layout based on any bindings defined in the shader code.

### Return value

A {{domxref("GPUComputePipeline")}} object instance.

### Invalid reasons

If any of the following are false, a {{domxref("GPUValidationError")}} is generated:

- The workgroup storage size used is less than or equal to the {{domxref("GPUDevice")}}'s `maxComputeWorkgroupStorageSize` {{domxref("GPUSupportedLimits", "limit", "", "nocode")}}.
- The compute shader entry point described by `compute` uses a number of compute invocations per workgroup less than or equal to the {{domxref("GPUDevice")}}'s `maxComputeInvocationsPerWorkgroup` {{domxref("GPUSupportedLimits", "limit", "", "nocode")}}.
- The compute shader entry point described by `compute` is less than or equal to the {{domxref("GPUDevice")}}'s corresponding `maxComputeWorkgroupSizeX`, `maxComputeWorkgroupSizeY`, or `maxComputeWorkgroupSizeZ` {{domxref("GPUSupportedLimits", "limit", "", "nocode")}}.

## Examples

> **Note:** The [WebGPU samples](https://webgpu.github.io/webgpu-samples/) feature many more examples.

### Basic example

Our [basic compute demo](https://webgpu-basic-compute.glitch.me/) shows a process of:

- Creating a bind group layout with {{domxref("GPUDevice.createBindGroupLayout()")}} and using that as a template when creating a bind group with {{domxref("GPUDevice.createBindGroup()")}}.
- Feeding the `bindGroupLayout` into {{domxref("GPUDevice.createPipelineLayout()")}} to create a {{domxref("GPUPipelineLayout")}}.
- Using that value immediately in a `createComputePipeline()` call to create a {{domxref("GPUComputePipeline")}}.

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
