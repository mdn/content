---
title: GPUAdapter.limits
slug: Web/API/GPUAdapter/limits
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.GPUAdapter.limits
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}

The **`limits`** read-only property of the
{{domxref("GPUAdapter")}} interface returns a {{domxref("GPUSupportedLimits")}} object that describes the limits supported by the adapter.

You should note that, rather than reporting the exact limits of each GPU, browsers will likely report different tier values of different limits to reduce the unique information available to drive-by fingerprinting. For example, the tiers of a certain limit might be 2048, 8192, and 32768. It your GPU's actual limit is 16384, the browser would still report 8192.

Given that different browsers will handle this differently and the tier values may change over time, it is hard to provide an accurate account of what limit values to expect — thorough testing is advised.

## Value

A {{domxref("GPUSupportedLimits")}} object instance.

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
