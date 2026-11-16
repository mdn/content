---
title: "GPUAdapterInfo: isFallbackAdapter property"
short-title: isFallbackAdapter
slug: Web/API/GPUAdapterInfo/isFallbackAdapter
page-type: web-api-instance-property
browser-compat: api.GPUAdapterInfo.isFallbackAdapter
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`isFallbackAdapter`** read-only property of the
{{domxref("GPUAdapterInfo")}} interface returns `true` if the adapter is a [fallback adapter](/en-US/docs/Web/API/GPU/requestAdapter#fallback_adapters), and `false` if not.

## Value

A boolean.

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

  const isFallback = adapter.info.isFallbackAdapter;
  console.log(isFallback);

  // …
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
