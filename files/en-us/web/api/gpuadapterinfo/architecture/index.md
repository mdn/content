---
title: "GPUAdapterInfo: architecture property"
short-title: architecture
slug: Web/API/GPUAdapterInfo/architecture
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.GPUAdapterInfo.architecture
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`architecture`** read-only property of the
{{domxref("GPUAdapterInfo")}} interface returns the name of the family or class of GPUs the adapter belongs to, or an empty string if it is not available.

## Value

A string.

## Examples

```js
const adapter = await navigator.gpu.requestAdapter();
if (!adapter) {
  throw Error("Couldn't request WebGPU adapter.");
}

const adapterInfo = adapter.info;
console.log(adapterInfo.architecture);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
