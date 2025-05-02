---
title: GPUAdapter
slug: Web/API/GPUAdapter
page-type: web-api-interface
status:
  - experimental
browser-compat: api.GPUAdapter
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`GPUAdapter`** interface of the {{domxref("WebGPU API", "WebGPU API", "", "nocode")}} represents a GPU adapter. From this you can request a {{domxref("GPUDevice")}}, adapter info, features, and limits.

A `GPUAdapter` object is requested using the {{domxref("GPU.requestAdapter()")}} method.

{{InheritanceDiagram}}

## Instance properties

- {{domxref("GPUAdapter.features", "features")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : A {{domxref("GPUSupportedFeatures")}} object that describes additional functionality supported by the adapter.
- {{domxref("GPUAdapter.isFallbackAdapter", "isFallbackAdapter")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : A boolean value. Returns `true` if the adapter is a [fallback adapter](/en-US/docs/Web/API/GPU/requestAdapter#fallback_adapters), and `false` if not.
- {{domxref("GPUAdapter.info", "info")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : A {{domxref("GPUAdapterInfo")}} object containing identifying information about the adapter.
- {{domxref("GPUAdapter.limits", "limits")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : A {{domxref("GPUSupportedLimits")}} object that describes the limits supported by the adapter.

## Instance methods

- {{domxref("GPUAdapter.requestAdapterInfo", "requestAdapterInfo()")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Returns a {{jsxref("Promise")}} that fulfills with a {{domxref("GPUAdapterInfo")}} object containing identifying information about the adapter.
- {{domxref("GPUAdapter.requestDevice", "requestDevice()")}} {{Experimental_Inline}}
  - : Returns a {{jsxref("Promise")}} that fulfills with a {{domxref("GPUDevice")}} object, which is the primary interface for communicating with the GPU.

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

  const device = await adapter.requestDevice();

  // …
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
