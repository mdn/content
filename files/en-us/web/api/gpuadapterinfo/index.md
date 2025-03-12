---
title: GPUAdapterInfo
slug: Web/API/GPUAdapterInfo
page-type: web-api-interface
status:
  - experimental
browser-compat: api.GPUAdapterInfo
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`GPUAdapterInfo`** interface of the {{domxref("WebGPU API", "WebGPU API", "", "nocode")}} contains identifying information about a {{domxref("GPUAdapter")}}.

An adapter's `GPUAdapterInfo` can be retrieved using the {{domxref("GPUAdapter.info")}} property of the adapter itself, or the {{domxref("GPUDevice.adapterInfo")}} property of a device that originated from the adapter.

This object allows developers to access specific details about the user's GPU so that they can preemptively apply workarounds for GPU-specific bugs, or provide different codepaths to better suit different GPU architectures. Providing such information does present a security risk — it could be used for fingerprinting — therefore the information shared is kept at a minimum, and different browser vendors are likely to share different information types and granularities.

{{InheritanceDiagram}}

## Instance properties

- {{domxref("GPUAdapterInfo.architecture", "architecture")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : The name of the family or class of GPUs the adapter belongs to. Returns an empty string if it is not available.
- {{domxref("GPUAdapterInfo.description", "description")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : A human-readable string describing the adapter. Returns an empty string if it is not available.
- {{domxref("GPUAdapterInfo.device", "device")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : A vendor-specific identifier for the adapter. Returns an empty string if it is not available.
- {{domxref("GPUAdapterInfo.vendor", "vendor")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : The name of the adapter vendor. Returns an empty string if it is not available.

## Examples

### Access GPUAdapterInfo via GPUAdapter.info

```js
const adapter = await navigator.gpu.requestAdapter();
if (!adapter) {
  throw Error("Couldn't request WebGPU adapter.");
}

const adapterInfo = adapter.info;
console.log(adapterInfo.vendor);
console.log(adapterInfo.architecture);
```

### Access GPUAdapterInfo via GPUDevice.adapterInfo

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

- {{domxref("GPUAdapter.info")}}
- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
