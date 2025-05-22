---
title: "GPUDevice: createComputePipeline() method"
short-title: createComputePipeline()
slug: Web/API/GPUDevice/createComputePipeline
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.GPUDevice.createComputePipeline
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

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

          - : A sequence of record types, with the structure `(id, value)`, representing override values for [WGSL constants that can be overridden in the pipeline](https://gpuweb.github.io/gpuweb/#typedefdef-gpupipelineconstantvalue). These behave like [ordered maps](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map). In each case, the `id` is a key used to identify or select the record, and the `constant` is an enumerated value representing a WGSL.

            Depending on which constant you want to override, the `id` may take the form of the numeric ID of the constant, if one is specified, or otherwise the constant's identifier name.

            A code snippet providing override values for several overridable constants might look like this:

            ```js
            ({
              // …
              constants: {
                0: false,
                1200: 3.0,
                1300: 2.0,
                width: 20,
                depth: -1,
                height: 15,
              },
            });
            ```

        - `entryPoint` {{optional_inline}}

          - : The name of the function in the `module` that this stage will use to perform its work. The corresponding shader function must have the `@compute` attribute to be identified as this entry point. See [Entry Point Declaration](https://gpuweb.github.io/gpuweb/wgsl/#entry-point-decl) for more information.

            You can omit the `entryPoint` property if your shader code contains a single function with the `@compute` attribute set — the browser will use this as the default entry point. If `entryPoint` is omitted and the browser cannot determine a default entry point, a {{domxref("GPUValidationError")}} is generated and the resulting {{domxref("GPUComputePipeline")}} will be invalid.

        - `module`
          - : A {{domxref("GPUShaderModule")}} object containing the [WGSL](https://gpuweb.github.io/gpuweb/wgsl/) code that this programmable stage will execute.

    - `label` {{optional_inline}}
      - : A string providing a label that can be used to identify the object, for example in {{domxref("GPUError")}} messages or console warnings.
    - `layout`
      - : Defines the layout (structure, purpose, and type) of all the GPU resources (buffers, textures, etc.) used during the execution of the pipeline. Possible values are:
        - A {{domxref("GPUPipelineLayout")}} object, created using {{domxref("GPUDevice.createPipelineLayout()")}}, which allows the GPU to figure out how to run the pipeline most efficiently ahead of time.
        - A string of `"auto"`, which causes the pipeline to generate an implicit bind group layout based on any bindings defined in the shader code. If `"auto"` is used, the generated bind group layouts may only be used with the current pipeline.

### Return value

A {{domxref("GPUComputePipeline")}} object instance.

### Validation

The following criteria must be met when calling **`createComputePipeline()`**, otherwise a {{domxref("GPUValidationError")}} is generated and an invalid {{domxref("GPUComputePipeline")}} object is returned:

- The workgroup storage size used by the `module` referenced inside the `compute` property is less than or equal to the {{domxref("GPUDevice")}}'s `maxComputeWorkgroupStorageSize` {{domxref("GPUSupportedLimits", "limit", "", "nocode")}}.
- The `module` uses a number of compute invocations per workgroup less than or equal to the {{domxref("GPUDevice")}}'s `maxComputeInvocationsPerWorkgroup` {{domxref("GPUSupportedLimits", "limit", "", "nocode")}}.
- The `module`'s workgroup size is less than or equal to the {{domxref("GPUDevice")}}'s corresponding `maxComputeWorkgroupSizeX`, `maxComputeWorkgroupSizeY`, or `maxComputeWorkgroupSizeZ` {{domxref("GPUSupportedLimits", "limit", "", "nocode")}}.
- If the `entryPoint` property is omitted, the shader code contains a single compute shader entry point function for the browser to use as the default entry point.

## Examples

> [!NOTE]
> The [WebGPU samples](https://webgpu.github.io/webgpu-samples/) feature many more examples.

### Basic example

Our [basic compute demo](https://mdn.github.io/dom-examples/webgpu-compute-demo/) shows a process of:

- Creating a bind group layout with {{domxref("GPUDevice.createBindGroupLayout()")}}.
- Feeding the `bindGroupLayout` into {{domxref("GPUDevice.createPipelineLayout()")}} to create a {{domxref("GPUPipelineLayout")}}.
- Using that value immediately in a `createComputePipeline()` call to create a {{domxref("GPUComputePipeline")}}.

```js
// …

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

// …
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
