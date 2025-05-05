---
title: "GPUAdapter: limits property"
short-title: limits
slug: Web/API/GPUAdapter/limits
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.GPUAdapter.limits
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`limits`** read-only property of the
{{domxref("GPUAdapter")}} interface returns a {{domxref("GPUSupportedLimits")}} object that describes the limits supported by the adapter.

You should note that, rather than reporting the exact limits of each GPU, browsers will likely report different tier values of different limits to reduce the unique information available to drive-by fingerprinting. For example, the tiers of a certain limit might be 2048, 8192, and 32768. If your GPU's actual limit is 16384, the browser will still report 8192.

Given that different browsers will handle this differently and the tier values may change over time, it is hard to provide an accurate account of what limit values to expect — thorough testing is advised.

## Value

A {{domxref("GPUSupportedLimits")}} object instance.

## Examples

In the following code we query the `GPUAdapter.limits` value of `maxBindGroups` to see if it is equal to or greater than 6. Our theoretical example app ideally needs 6 bind groups, so if the returned value is >= 6, we add a maximum limit of 6 to the `requiredLimits` object, and request a device with that limit requirement using {{domxref("GPUAdapter.requestDevice()")}}:

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

  // …
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
