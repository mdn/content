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

You should note that, rather than reporting the exact limits of each GPU, browsers will likely report different tier values of different limits to reduce the unique information available to drive-by fingerprinting. For example, the tiers of a certain limit might be 2048, 8192, and 32768. If your GPU's actual limit is 16384, the browser will still report 8192.

Given that different browsers will handle this differently and the tier values may change over time, it is hard to provide an accurate account of what limit values to expect — thorough testing is advised.

{{InheritanceDiagram}}

## Instance properties

The following limits are represented by properties in a `GPUSupportedLimits` object. See the [Limits](https://gpuweb.github.io/gpuweb/#limits) section of the specification for detailed descriptions of what the limits relate to.

| Limit name                                  | Default value            |
| ------------------------------------------- | ------------------------ |
| `maxTextureDimension1D`                     | 8192                     |
| `maxTextureDimension2D`                     | 8192                     |
| `maxTextureDimension3D`                     | 2048                     |
| `maxTextureArrayLayers`                     | 256                      |
| `maxBindGroups`                             | 4                        |
| `maxBindingsPerBindGroup`                   | 640                      |
| `maxDynamicUniformBuffersPerPipelineLayout` | 8                        |
| `maxDynamicStorageBuffersPerPipelineLayout` | 4                        |
| `maxSampledTexturesPerShaderStage`          | 16                       |
| `maxSamplersPerShaderStage`                 | 16                       |
| `maxStorageBuffersPerShaderStage`           | 8                        |
| `maxStorageTexturesPerShaderStage`          | 4                        |
| `maxUniformBuffersPerShaderStage`           | 12                       |
| `maxUniformBufferBindingSize`               | 65536 bytes              |
| `maxStorageBufferBindingSize`               | 134217728 bytes (128 MB) |
| `minUniformBufferOffsetAlignment`           | 256 bytes                |
| `minStorageBufferOffsetAlignment`           | 256 bytes                |
| `maxVertexBuffers`                          | 8                        |
| `maxBufferSize`                             | 268435456 bytes (256 MB) |
| `maxVertexAttributes`                       | 16                       |
| `maxVertexBufferArrayStride`                | 2048 bytes               |
| `maxInterStageShaderComponents`             | 60                       |
| `maxInterStageShaderVariables`              | 16                       |
| `maxColorAttachments`                       | 8                        |
| `maxColorAttachmentBytesPerSample`          | 32                       |
| `maxComputeWorkgroupStorageSize`            | 16384 bytes              |
| `maxComputeInvocationsPerWorkgroup`         | 256                      |
| `maxComputeWorkgroupSizeX`                  | 256                      |
| `maxComputeWorkgroupSizeY`                  | 256                      |
| `maxComputeWorkgroupSizeZ`                  | 64                       |
| `maxComputeWorkgroupsPerDimension`          | 65535                    |

## Examples

In the following code we query the `GPUAdapter.limits` value of `maxBindGroups` to see if it is equal to or greater than 6. Our theoretical example app ideally needs 6 bind groups, so if the returned value is >= 6, we add a maximum limit of 6 to the `requiredLimits` object. We then request a device with that limit requirement using {{domxref("GPUAdapter.requestDevice()")}}:

```js
async function init() {
  if (!navigator.gpu) {
    throw Error("WebGPU not supported.");
  }

  const adapter = await navigator.gpu.requestAdapter();
  if (!adapter) {
    throw Error("Couldn't request WebGPU adapter.");
  }

  const requiredLimits = {};

  // App ideally needs 6 bind groups, so we'll try to request what the app needs
  if (adapter.limits.maxBindGroups >= 6) {
    requiredLimits.maxBindGroups = 6;
  }

  const device = await adapter.requestDevice({
    requiredLimits,
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
