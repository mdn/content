---
title: "GPUAdapter: isFallbackAdapter property"
short-title: isFallbackAdapter
slug: Web/API/GPUAdapter/isFallbackAdapter
page-type: web-api-instance-property
status:
  - deprecated
  - non-standard
browser-compat: api.GPUAdapter.isFallbackAdapter
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}{{deprecated_header}}{{non-standard_header}}

The **`isFallbackAdapter`** read-only property of the
{{domxref("GPUAdapter")}} interface returns `true` if the adapter is a [fallback adapter](/en-US/docs/Web/API/GPU/requestAdapter#fallback_adapters), and `false` if not.

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

  const fallback = adapter.isFallbackAdapter;
  console.log(fallback);

  // …
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
