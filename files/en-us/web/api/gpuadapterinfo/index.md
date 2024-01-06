---
title: GPUAdapterInfo
slug: Web/API/GPUAdapterInfo
page-type: web-api-interface
status:
  - experimental
browser-compat: api.GPUAdapterInfo
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}

The **`GPUAdapterInfo`** interface of the {{domxref("WebGPU API", "WebGPU API", "", "nocode")}} contains identifying information about a {{domxref("GPUAdapter")}}.

A `GPUAdapterInfo` object instance is requested using the {{domxref("GPUAdapter.requestAdapterInfo()")}} method.

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

```js
async function init() {
  if (!navigator.gpu) {
    throw Error("WebGPU not supported.");
  }

  const adapter = await navigator.gpu.requestAdapter();
  if (!adapter) {
    throw Error("Couldn't request WebGPU adapter.");
  }

  const adapterInfo = await adapter.requestAdapterInfo();
  console.log(adapterInfo.architecture);
  console.log(adapterInfo.vendor);

  // ...
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
