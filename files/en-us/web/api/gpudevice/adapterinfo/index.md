---
title: "GPUDevice: adapterInfo property"
short-title: adapterInfo
slug: Web/API/GPUDevice/adapterInfo
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.GPUDevice.adapterInfo
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`adapterInfo`** read-only property of the
{{domxref("GPUDevice")}} interface returns a {{domxref("GPUAdapterInfo")}} object containing identifying information about the device's originating adapter.

## Value

A {{domxref("GPUAdapterInfo")}} object instance.

## Examples

### Basic adapterInfo usage

```js
const adapter = await navigator.gpu.requestAdapter();
if (!adapter) {
  throw Error("Couldn't request WebGPU adapter.");
}

const myDevice = await adapter.requestDevice();

function optimizeForGpuDevice(device) {
  if (device.adapterInfo.vendor === "amd") {
    // Use AMD-specific optimizations
  } else if (device.adapterInfo.architecture.includes("turing")) {
    // Optimize for NVIDIA Turing architecture
  }
}

optimizeForGpuDevice(myDevice);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
