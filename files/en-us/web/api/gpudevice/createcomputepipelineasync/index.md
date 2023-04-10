---
title: "GPUDevice: createComputePipelineAsync() method"
short-title: createComputePipelineAsync()
slug: Web/API/GPUDevice/createComputePipelineAsync
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.GPUDevice.createComputePipelineAsync
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}

The **`createComputePipelineAsync()`** method of the
{{domxref("GPUDevice")}} interface returns a {{jsxref("Promise")}} that fulfills with a {{domxref("GPUComputePipeline")}}, which can control the compute shader stage and be used in a {{domxref("GPUComputePassEncoder")}}, once the pipeline can be used without any stalling.

> **Note:** It is generally preferable to use this method over {{domxref("GPUDevice.createComputePipeline()")}} whenever possible, as it prevents blocking of GPU operation execution on pipeline compilation.

## Syntax

```js-nolint
createComputePipeline(descriptor)
```

### Parameters

- `descriptor`
  - : See the descriptor definition for the [`GPUDevice.createComputePipeline()`](/en-US/docs/Web/API/GPUDevice/createComputePipeline#syntax) method.

### Return value

A {{jsxref("Promise")}} that fulfills with a {{domxref("GPUComputePipeline")}} object instance when the created pipeline is ready to be used without additional delay.

### Validation

If pipeline creation fails and the resulting pipeline becomes invalid as a result, the returned promise rejects with a {{domxref("GPUPipelineError")}}:

- If this is due to an internal error, the {{domxref("GPUPipelineError")}} will have a `reason` of `"internal"`.
- If this is due to a validation error, the {{domxref("GPUPipelineError")}} will have a `reason` of `"validation"`.

A validation error can occur if any of the following are false:

- The workgroup storage size used by the `module` referenced inside the `compute` property is less than or equal to the {{domxref("GPUDevice")}}'s `maxComputeWorkgroupStorageSize` {{domxref("GPUSupportedLimits", "limit", "", "nocode")}}.
- The `module` uses a number of compute invocations per workgroup less than or equal to the {{domxref("GPUDevice")}}'s `maxComputeInvocationsPerWorkgroup` {{domxref("GPUSupportedLimits", "limit", "", "nocode")}}.
- The `module`'s workgroup size is less than or equal to the {{domxref("GPUDevice")}}'s corresponding `maxComputeWorkgroupSizeX`, `maxComputeWorkgroupSizeY`, or `maxComputeWorkgroupSizeZ` {{domxref("GPUSupportedLimits", "limit", "", "nocode")}}.

## Examples

> **Note:** The [WebGPU samples](https://webgpu.github.io/webgpu-samples/) feature many more examples.

### Basic example

The following example shows a process of:

- Creating a bind group layout with {{domxref("GPUDevice.createBindGroupLayout()")}}.
- Feeding the `bindGroupLayout` into {{domxref("GPUDevice.createPipelineLayout()")}} to create a {{domxref("GPUPipelineLayout")}}.
- Using that value immediately in a `createComputePipelineAsync()` call to create a {{domxref("GPUComputePipeline")}}.

```js
async function init() {
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

  const computePipeline = await device.createComputePipelineAsync({
    layout: device.createPipelineLayout({
      bindGroupLayouts: [bindGroupLayout],
    }),
    compute: {
      module: shaderModule,
      entryPoint: "main",
    },
  });

  // ...
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
