---
title: GPUDevice.limits
slug: Web/API/GPUDevice/limits
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.GPUDevice.limits
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}

The **`limits`** read-only property of the
{{domxref("GPUDevice")}} interface returns a {{domxref("GPUSupportedLimits")}} object that describes the limits supported by the device. All limit values will be included, and the limits requested during the creation of the device (i.e. when {{domxref("GPUAdapter.requestDevice()")}} is called) will be reflected in those values.

> **Note:** Not all limits will be reported as expcted, even if they are supported by the underlying hardware. See {{domxref("GPUAdapter.limits")}} for more details.

## Value

A {{domxref("GPUSupportedLimits")}} object instance.

## Examples

In the following code we query the `GPUAdapter.limits` values of `maxTextureDimension3D` and `maxBindGroups`, add those maximum limits to the `requiredLimits` object, and request a device with those limit requirements using {{domxref("GPUAdapter.requestDevice()")}}.

We then check that the expected limits have been set on the resulting device by logging those values to the console.

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

  console.log(device.limits.maxTextureDimension3D);
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
