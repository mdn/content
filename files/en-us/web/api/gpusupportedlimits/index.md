---
title: GPUSupportedLimits
slug: Web/API/GPUSupportedLimits
page-type: web-api-interface
status:
  - experimental
browser-compat: api.GPUSupportedLimits
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}

The **`GPUSupportedLimits`** interface of the {{domxref("WebGPU API", "WebGPU API", "", "nocode")}} describes the limits supported by a {{domxref("GPUAdapter")}}.

The `GPUSupportedLimits` object for the current adapter is accessed via the {{domxref("GPUAdapter.limits")}} property.

You should note that, rather than reporting the exact limits of each GPU, browsers will likely report different tier values of different limits to reduce the unique information available to drive-by fingerprinting. For example, the tiers of a certain limit might be 2048, 8192, and 32768. It your GPU's actual limit is 16384, the browser would still report 8192.

Given that different browsers will handle this differently and the tier values may change over time, it is hard to provide an accurate account of what limit values to expect — thorough testing is advised.

{{InheritanceDiagram}}

## Instance properties

The following limits are represented by properties in a `GPUSupportedLimits` object:

- `maxTextureDimension1D`
- `maxTextureDimension2D`
- `maxTextureDimension3D`
- `maxTextureArrayLayers`
- `maxBindGroups`
- `maxBindingsPerBindGroup`
- `maxDynamicUniformBuffersPerPipelineLayout`
- `maxDynamicStorageBuffersPerPipelineLayout`
- `maxSampledTexturesPerShaderStage`
- `maxSamplersPerShaderStage`
- `maxStorageBuffersPerShaderStage`
- `maxStorageTexturesPerShaderStage`
- `maxUniformBuffersPerShaderStage`
- `long maxUniformBufferBindingSize`
- `long maxStorageBufferBindingSize`
- `minUniformBufferOffsetAlignment`
- `minStorageBufferOffsetAlignment`
- `maxVertexBuffers`
- `long maxBufferSize`
- `maxVertexAttributes`
- `maxVertexBufferArrayStride`
- `maxInterStageShaderComponents`
- `maxInterStageShaderVariables`
- `maxColorAttachments`
- `maxColorAttachmentBytesPerSample`
- `maxComputeWorkgroupStorageSize`
- `maxComputeInvocationsPerWorkgroup`
- `maxComputeWorkgroupSizeX`
- `maxComputeWorkgroupSizeY`
- `maxComputeWorkgroupSizeZ`
- `maxComputeWorkgroupsPerDimension`

## Examples

In the following code we query the `GPUAdapter.limits` values of `maxTextureDimension3D` and `maxBindGroups`, add those maximum limits to the `requiredLimits` object, and request a device with those limit requirements using {{domxref("GPUAdapter.requestDevice()")}}:

```js
async function init() {
  if (!navigator.gpu) {
    throw Error('WebGPU not supported.');
  }

  const adapter = await navigator.gpu.requestAdapter();
  if (!adapter) {
    throw Error('Couldn\'t request WebGPU adapter.');
  }

  const requiredLimits = {};

  requiredLimits.maxTextureDimension3D = adapter.limits.maxTextureDimension3D;
  requiredLimits.maxBindGroups = adapter.limits.maxBindGroups;

  const device = await adapter.requestDevice({
      requiredLimits
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
