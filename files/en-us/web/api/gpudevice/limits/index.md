---
title: "GPUDevice: limits property"
short-title: limits
slug: Web/API/GPUDevice/limits
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.GPUDevice.limits
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}

The **`limits`** read-only property of the
{{domxref("GPUDevice")}} interface returns a {{domxref("GPUSupportedLimits")}} object that describes the limits supported by the device. All limit values will be included, and the limits requested during the creation of the device (i.e. when {{domxref("GPUAdapter.requestDevice()")}} is called) will be reflected in those values.

> **Note:** Not all limits will be reported as expected, even if they are supported by the underlying hardware. See {{domxref("GPUAdapter.limits")}} for more details.

## Value

A {{domxref("GPUSupportedLimits")}} object instance.

## Examples

In the following code we query the `GPUAdapter.limits` value of `maxBindGroups` to see if it is equal to or greater than 6. Our theoretical example app ideally needs 6 bind groups, so if the returned value is >= 6, we add a maximum limit of 6 to the `requiredLimits` object.

We then check that the expected limit has been set on the resulting device by logging its value to the console.

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

  console.log(device.limits.maxBindGroups);

  // ...
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
