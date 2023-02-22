---
title: GPUAdapter
slug: Web/API/GPUAdapter
page-type: web-api-interface
status:
  - experimental
browser-compat: api.GPUAdapter
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}

The **`GPUAdapter`** interface of the {{domxref("WebGPU API", "WebGPU API", "", "nocode")}} represents a GPU adapter. From this you can request a {{domxref("GPUDevice")}} to start using functionality of a device GPU and return adapter info, features, and limits.

A `GPUAdapter` object is requested using the {{domxref("GPU.requestAdapter()")}} method.

{{InheritanceDiagram}}

## Instance properties

- {{domxref("GPUAdapter.features", "features")}} {{Experimental_Inline}} {{readonlyinline}}
  - : A {{domxref("GPUSupportedFeatures")}} object that describes additional functionality supported by the adapter.
- {{domxref("GPUAdapter.isFallbackAdapter", "isFallbackAdapter")}} {{Experimental_Inline}} {{readonlyinline}}
  - : A boolean value. Returns `true` if the adapter is a [fallback adapter](/en-US/docs/Web/API/GPU/requestAdapter#fallback_adapters), and `false` if not.
- {{domxref("GPUAdapter.limits", "limits")}} {{Experimental_Inline}} {{readonlyinline}}
  - : A {{domxref("GPUSupportedLimits")}} object that describes the limits supported by the adapter.
- {{domxref("GPUAdapter.name", "name")}} {{Experimental_Inline}} {{Non-standard_Inline}} {{readonlyinline}}
  - : A string containing the name of the adapter.

## Instance methods

- {{domxref("GPUAdapter.requestAdapterInfo", "requestAdapterInfo()")}} {{Experimental_Inline}}
  - : Returns a {{jsxref("Promise")}} that fulfills with a {{domxref("GPUAdapterInfo")}} object containing identifying information about an adapter.
- {{domxref("GPUAdapter.requestDevice", "requestDevice()")}} {{Experimental_Inline}}
  - : Returns a {{jsxref("Promise")}} that fulfills with a {{domxref("GPUDevice")}} object via which you can start using the functionality of a device GPU.

## Examples

```js
async function init() {
  if (!navigator.gpu) {
    throw Error('WebGPU not supported.');
  }

  const adapter = await navigator.gpu.requestAdapter();
  if (!adapter) {
    throw Error('Couldn\'t request WebGPU adapter.');
  }

  const device = await adapter.requestDevice();

  //...

}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
